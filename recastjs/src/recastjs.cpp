#include "recastjs.h"
#include "Recast.h"
#include "DetourNavMesh.h"
#include "DetourNavMeshBuilder.h"
#include "DetourNavMesh.h"
#include "DetourNavMeshQuery.h"

#include <stdio.h>
#include <vector>
#include <float.h>
#include <algorithm>
#include <math.h>
#include <sstream>
#include <iostream>

void Log(const char* str)
{
    std::cout << std::string(str) << std::endl;
}

int g_seed = 1337;
inline int fastrand() 
{ 
    g_seed = (214013*g_seed+2531011); 
    return (g_seed>>16)&0x7FFF; 
} 

inline float r01()
{
    return ((float)fastrand())*(1.f/32767.f);
}


struct NavMeshintermediates
{
    ~NavMeshintermediates()
    {
        if (m_solid)
        {
            rcFreeHeightField(m_solid);
        }
        if (m_chf)
        {
            rcFreeCompactHeightfield(m_chf);
        }
        if (m_cset)
        {
            rcFreeContourSet(m_cset);
        }
    }

    rcHeightfield* m_solid = nullptr;
    rcCompactHeightfield* m_chf = nullptr;
    rcContourSet* m_cset = nullptr;
};

void NavMesh::destroy()
{
    if (m_pmesh)
    {
        rcFreePolyMesh(m_pmesh);
    }
    if (m_dmesh)
    {
        rcFreePolyMeshDetail(m_dmesh);
    }
    if (m_navData)
    {
        dtFree(m_navData);
    }
    dtFreeNavMesh(m_navMesh);
    dtFreeNavMeshQuery(m_navQuery);
}

void NavMesh::build(const float* positions, const int positionCount, const int* indices, const int indexCount, const rcConfig& config)
{
    if (m_pmesh)
    {
        rcFreePolyMesh(m_pmesh);
    }
    if (m_dmesh)
    {
        rcFreePolyMeshDetail(m_dmesh);
    }
    if (m_navData)
    {
        dtFree(m_navData);
    }

    NavMeshintermediates intermediates;
    std::vector<Vec3> triangleIndices;
    const float* pv = &positions[0];
    const int* t = &indices[0];

    Vec3 bbMin(FLT_MAX);
    Vec3 bbMax(-FLT_MAX);
    triangleIndices.resize(indexCount);
    for (unsigned int i = 0; i<indexCount; i++)
    {
        int ind = (*t++) * 3;
        Vec3 v( pv[ind], pv[ind+1], pv[ind+2] );
        bbMin.isMinOf( v );
        bbMax.isMaxOf( v );
        triangleIndices[i] = v;
    }

    bool keepInterResults = false;

    // Set the area where the navigation will be build.
    // Here the bounds of the input mesh are used, but the
    // area could be specified by an user defined box, etc.
    //float bmin[3] = {-20.f, 0.f, -20.f};
    //float bmax[3] = { 20.f, 1.f,  20.f};
    rcConfig cfg = config;
    cfg.walkableHeight = config.walkableHeight;
    cfg.walkableClimb = config.walkableClimb;
    cfg.walkableRadius = config.walkableRadius;
    cfg.maxEdgeLen = config.maxEdgeLen;
    cfg.maxSimplificationError = config.maxSimplificationError;
    cfg.minRegionArea = (int)rcSqr(config.minRegionArea);        // Note: area = size*size
    cfg.mergeRegionArea = (int)rcSqr(config.mergeRegionArea);    // Note: area = size*size
    cfg.maxVertsPerPoly = (int)config.maxVertsPerPoly;
    cfg.detailSampleDist = config.detailSampleDist < 0.9f ? 0 : config.cs * config.detailSampleDist;
    cfg.detailSampleMaxError = config.ch * config.detailSampleMaxError;

    rcVcopy(cfg.bmin, &bbMin.x);
    rcVcopy(cfg.bmax, &bbMax.x);
    

    rcCalcGridSize(cfg.bmin, cfg.bmax, cfg.cs, &cfg.width, &cfg.height);

    rcContext ctx;

    //
    // Step 2. Rasterize input polygon soup.
    //
    
    // Allocate voxel heightfield where we rasterize our input data to.
    intermediates.m_solid = rcAllocHeightfield();
    if (!intermediates.m_solid)
    {
        Log("buildNavigation: Out of memory 'solid'.");
        return ;
    }
    if (!rcCreateHeightfield(&ctx, *intermediates.m_solid, cfg.width, cfg.height, cfg.bmin, cfg.bmax, cfg.cs, cfg.ch))
    {
        Log("buildNavigation: Could not create solid heightfield.");
        return ;
    }

    std::vector<float> verts;
    verts.resize(triangleIndices.size()*3);
    int nverts = triangleIndices.size();
    for (unsigned int i =0;i<triangleIndices.size();i++)
    {
        verts[i*3+0] = triangleIndices[i].x;
        verts[i*3+1] = triangleIndices[i].y;
        verts[i*3+2] = triangleIndices[i].z;
    }
    int ntris = triangleIndices.size()/3;
    std::vector<int> tris;
    tris.resize(triangleIndices.size());
    for (unsigned int i = 0;i<triangleIndices.size();i++)
    {
        tris[i] = triangleIndices.size()-i-1;
    }

    // Allocate array that can hold triangle area types.
    // If you have multiple meshes you need to process, allocate
    // and array which can hold the max number of triangles you need to process.
    unsigned char* triareas = (unsigned char*)malloc(ntris);
    
    // Find triangles which are walkable based on their slope and rasterize them.
    // If your input data is multiple meshes, you can transform them here, calculate
    // the are type for each of the meshes and rasterize them.
    memset(triareas, RC_WALKABLE_AREA, ntris*sizeof(unsigned char));

    rcRasterizeTriangles(&ctx, verts.data(), nverts, tris.data(), triareas, ntris, *intermediates.m_solid, cfg.walkableClimb);

    free(triareas);
    
    //
    // Step 3. Filter walkables surfaces.
    //
    
    // Once all geoemtry is rasterized, we do initial pass of filtering to
    // remove unwanted overhangs caused by the conservative rasterization
    // as well as filter spans where the character cannot possibly stand.
    
    rcFilterLowHangingWalkableObstacles(&ctx, cfg.walkableClimb, *intermediates.m_solid);
    rcFilterLedgeSpans(&ctx, cfg.walkableHeight, cfg.walkableClimb, *intermediates.m_solid);
    rcFilterWalkableLowHeightSpans(&ctx, cfg.walkableHeight, *intermediates.m_solid);
    

    //
    // Step 4. Partition walkable surface to simple regions.
    // 

    // Compact the heightfield so that it is faster to handle from now on.
    // This will result more cache coherent data as well as the neighbours
    // between walkable cells will be calculated.
    
    intermediates.m_chf = rcAllocCompactHeightfield();
    if (!intermediates.m_chf)
    {
        Log("buildNavigation: Out of memory 'chf'.");
        return ;
    }
    
    if (!rcBuildCompactHeightfield(&ctx, cfg.walkableHeight, cfg.walkableClimb, *intermediates.m_solid, *intermediates.m_chf))
    {
        Log("buildNavigation: Could not build compact data.");
        return ;
    }
    
    if (!keepInterResults)
    {
        rcFreeHeightField(intermediates.m_solid);
        intermediates.m_solid = nullptr;
    }
        
    // Erode the walkable area by agent radius.
    if (!rcErodeWalkableArea(&ctx, cfg.walkableRadius, *intermediates.m_chf))
    {
        Log("buildNavigation: Could not erode.");
        return ;
    }

    // Prepare for region partitioning, by calculating Distance field along the walkable surface.
    if (!rcBuildDistanceField(&ctx, *intermediates.m_chf))
    {
        Log("buildNavigation: Could not build Distance field.");
        return ;
    }

    // Partition the walkable surface into simple regions without holes.
    if (!rcBuildRegions(&ctx, *intermediates.m_chf, 0, cfg.minRegionArea, cfg.mergeRegionArea))
    {
        Log("buildNavigation: Could not build regions.");
        return ;
    }
    
    //
    // Step 5. Trace and simplify region contours.
    //
    
    // Create contours.
    
    intermediates.m_cset = rcAllocContourSet();
    if (!intermediates.m_cset)
    {
        Log("buildNavigation: Out of memory 'cset'.");
        return ;
    }
    if (!rcBuildContours(&ctx, *intermediates.m_chf, cfg.maxSimplificationError, cfg.maxEdgeLen, *intermediates.m_cset))
    {
        Log("buildNavigation: Could not create contours.");
        return ;
    }
    
    //
    // Step 6. Build polygons mesh from contours.
    //

    m_pmesh = rcAllocPolyMesh();
    if (!m_pmesh)
    {
        Log("buildNavigation: Out of memory 'pmesh'.");
        return ;
    }
    if (!rcBuildPolyMesh(&ctx, *intermediates.m_cset, cfg.maxVertsPerPoly, *m_pmesh))
    {
        Log("buildNavigation: Could not triangulate contours.");
        return ;
    }
    
    //
    // Step 7. Create detail mesh which allows to access approximate height on each polygon.
    //
    m_dmesh = rcAllocPolyMeshDetail();
    if (!m_dmesh)
    {
        Log("buildNavigation: Out of memory 'pmdtl'.");
        return ;
    }

    if (!rcBuildPolyMeshDetail(&ctx, *m_pmesh, *intermediates.m_chf, cfg.detailSampleDist, cfg.detailSampleMaxError, *m_dmesh))
    {
        Log("buildNavigation: Could not build detail mesh.");
        return ;
    }

    if (!keepInterResults)
    {
        rcFreeCompactHeightfield(intermediates.m_chf);
        intermediates.m_chf = nullptr;
        rcFreeContourSet(intermediates.m_cset);
        intermediates.m_cset = nullptr;
    }
    
    //
    // (Optional) Step 8. Create Detour data from Recast poly mesh.
    //
    
    // Only build the detour navmesh if we do not exceed the limit.
    if (cfg.maxVertsPerPoly <= DT_VERTS_PER_POLYGON)
    {
        rcPolyMesh* pmesh = m_pmesh;
        rcPolyMeshDetail* dmesh = m_dmesh;

        int navDataSize = 0;

        // Update poly flags from areas.
        for (int i = 0; i < pmesh->npolys; ++i)
        {
            if (pmesh->areas[i] == RC_WALKABLE_AREA)
            {
                pmesh->areas[i] = 0;
            }   
            if (pmesh->areas[i] == 0)
            {
                pmesh->flags[i] = 1;
            }
        }

        dtNavMeshCreateParams params;
        memset(&params, 0, sizeof(params));
        params.verts = pmesh->verts;
        params.vertCount = pmesh->nverts;
        params.polys = pmesh->polys;
        params.polyAreas = pmesh->areas;
        params.polyFlags = pmesh->flags;
        params.polyCount = pmesh->npolys;
        params.nvp = pmesh->nvp;
        params.detailMeshes = dmesh->meshes;
        params.detailVerts = dmesh->verts;
        params.detailVertsCount = dmesh->nverts;
        params.detailTris = dmesh->tris;
        params.detailTriCount = dmesh->ntris;
        // optional connection between areas
        params.offMeshConVerts = 0;//geom->getOffMeshConnectionVerts();
        params.offMeshConRad = 0;//geom->getOffMeshConnectionRads();
        params.offMeshConDir = 0;//geom->getOffMeshConnectionDirs();
        params.offMeshConAreas = 0;//geom->getOffMeshConnectionAreas();
        params.offMeshConFlags = 0;//geom->getOffMeshConnectionFlags();
        params.offMeshConUserID = 0;//geom->getOffMeshConnectionId();
        params.offMeshConCount = 0;//geom->getOffMeshConnectionCount();
        params.walkableHeight = config.walkableHeight;
        params.walkableRadius = config.walkableRadius;
        params.walkableClimb = config.walkableClimb;
        rcVcopy(params.bmin, pmesh->bmin);
        rcVcopy(params.bmax, pmesh->bmax);
        params.cs = cfg.cs;
        params.ch = cfg.ch;
        params.buildBvTree = true;
        
        if (!dtCreateNavMeshData(&params, &m_navData, &navDataSize))
        {
            Log("Could not build Detour navmesh.");
            return ;
        }
        
        m_navMesh = dtAllocNavMesh();
        if (!m_navMesh)
        {
            Log("Could not create Detour navmesh");
            return ;
        }
        
        dtStatus status;
        
        status = m_navMesh->init(m_navData, navDataSize, DT_TILE_FREE_DATA);
        if (dtStatusFailed(status))
        {
            Log("Could not init Detour navmesh");
            return ;
        }
        
        m_navQuery = dtAllocNavMeshQuery();
        if (!m_navQuery)
        {
            dtFreeNavMesh(m_navMesh);
            m_navMesh = nullptr;
            Log("Could not allocate Navmesh query");
            return ;
        }
        status = m_navQuery->init(m_navMesh, 2048);
        if (dtStatusFailed(status))
        {
            dtFreeNavMesh(m_navMesh);
            m_navMesh = nullptr;
            Log("Could not init Detour navmesh query");
            return ;
        }
    }
    Log("Done");
}



void NavMesh::navMeshPoly(DebugNavMesh& debugNavMesh, const dtNavMesh& mesh, dtPolyRef ref)
{
    const dtMeshTile* tile = 0;
    const dtPoly* poly = 0;
    if (dtStatusFailed(mesh.getTileAndPolyByRef(ref, &tile, &poly)))
        return;

    const unsigned int ip = (unsigned int)(poly - tile->polys);

    if (poly->getType() == DT_POLYTYPE_OFFMESH_CONNECTION)
    {
        /*
        If we want to display links (teleport) between navmesh or inside a navmesh
        this code will be usefull for debug output.
        
        dtOffMeshConnection* con = &tile->offMeshCons[ip - tile->header->offMeshBase];

        dd->begin(DU_DRAW_LINES, 2.0f);

        // Connection arc.
        duAppendArc(dd, con->pos[0],con->pos[1],con->pos[2], con->pos[3],con->pos[4],con->pos[5], 0.25f,
                    (con->flags & 1) ? 0.6f : 0.0f, 0.6f, c);
        
        dd->end();
        */
    }
    else
    {
        const dtPolyDetail* pd = &tile->detailMeshes[ip];

        for (int i = 0; i < pd->triCount; ++i)
        {
            const unsigned char* t = &tile->detailTris[(pd->triBase+i)*4];
            Triangle triangle;
            float *pf;

            for (int j = 0; j < 3; ++j)
            {
                if (t[j] < poly->vertCount)
                {
                    pf = &tile->verts[poly->verts[t[j]]*3];
                }
                else
                {
                    pf = &tile->detailVerts[(pd->vertBase+t[j]-poly->vertCount)*3];
                }

                triangle.mPoint[2-j] = Vec3(pf[0], pf[1], pf[2]);
            }
            debugNavMesh.mTriangles.push_back(triangle);
        }
    }
}

void NavMesh::navMeshPolysWithFlags(DebugNavMesh& debugNavMesh, const dtNavMesh& mesh, const unsigned short polyFlags)
{
    for (int i = 0; i < mesh.getMaxTiles(); ++i)
    {
        const dtMeshTile* tile = mesh.getTile(i);
        if (!tile->header)
        {
            continue;
        }
        dtPolyRef base = mesh.getPolyRefBase(tile);

        for (int j = 0; j < tile->header->polyCount; ++j)
        {
            const dtPoly* p = &tile->polys[j];
            if ((p->flags & polyFlags) == 0)
            {
                continue;
            }
            navMeshPoly(debugNavMesh, mesh, base|(dtPolyRef)j);
        }
    }
}

DebugNavMesh NavMesh::getDebugNavMesh()
{
    DebugNavMesh debugNavMesh;
    navMeshPolysWithFlags(debugNavMesh, *m_navMesh,  0xFFFF);
    return debugNavMesh;
}

Vec3 NavMesh::getClosestPoint(const Vec3& position)
{
    dtQueryFilter filter;
    filter.setIncludeFlags(0xffff);
    filter.setExcludeFlags(0);

    dtPolyRef polyRef;

    float polyPickExt[3];
    polyPickExt[0] = 2;
    polyPickExt[1] = 4;
    polyPickExt[2] = 2;

    Vec3 pos(position.x, position.y, position.z);
    m_navQuery->findNearestPoly(&pos.x, polyPickExt, &filter, &polyRef, 0);


    bool posOverlay;
    Vec3 resDetour;
    dtStatus status = m_navQuery->closestPointOnPoly(polyRef, &pos.x, &resDetour.x, &posOverlay);
    
    if (dtStatusFailed(status))
    {
        return Vec3(0.f, 0.f, 0.f);
    }
    return Vec3(resDetour.x, resDetour.y, resDetour.z);
}

Vec3 NavMesh::getRandomPointAround(const Vec3& position, float maxRadius)
{
    dtQueryFilter filter;
    filter.setIncludeFlags(0xffff);
    filter.setExcludeFlags(0);

    dtPolyRef polyRef;

    float polyPickExt[3];
    polyPickExt[0] = 2;
    polyPickExt[1] = 4;
    polyPickExt[2] = 2;

    Vec3 pos(position.x, position.y, position.z);

    m_navQuery->findNearestPoly(&pos.x, polyPickExt, &filter, &polyRef, 0);

    dtPolyRef randomRef;
    Vec3 resDetour;
    dtStatus status = m_navQuery->findRandomPointAroundCircle(polyRef, &position.x, maxRadius,
                                         &filter, r01,
                                         &randomRef, &resDetour.x);
    if (dtStatusFailed(status))
    {
        return Vec3(0.f, 0.f, 0.f);
    }

    return Vec3(resDetour.x, resDetour.y, resDetour.z);
}

NavPath NavMesh::computePath(const Vec3& start, const Vec3& end) const
{
    NavPath navpath;
    static const int MAX_POLYS = 256;
	float straightPath[MAX_POLYS*3];

	dtPolyRef startRef;
    dtPolyRef endRef;

    float polyPickExt[3];
    polyPickExt[0] = 2;
    polyPickExt[1] = 4;
    polyPickExt[2] = 2;

	dtQueryFilter filter;
	filter.setIncludeFlags(0xffff);
	filter.setExcludeFlags(0);

    Vec3 posStart(start.x, start.y, start.z);
    Vec3 posEnd(end.x, end.y, end.z);

    m_navQuery->findNearestPoly(&posStart.x, polyPickExt, &filter, &startRef, 0);
    m_navQuery->findNearestPoly(&posEnd.x, polyPickExt, &filter, &endRef, 0);

    dtPolyRef polys[MAX_POLYS];
    int npolys;

    m_navQuery->findPath(startRef, endRef, &posStart.x, &posEnd.x, &filter, polys, &npolys, MAX_POLYS);
	int mNstraightPath = 0;
	if (npolys)
    {
		unsigned char straightPathFlags[MAX_POLYS];
		dtPolyRef straightPathPolys[MAX_POLYS];
		int straightPathOptions;
		bool posOverPoly;
        Vec3 closestEnd = posEnd;

        if (polys[npolys-1] != endRef)
        {
            m_navQuery->closestPointOnPoly(polys[npolys-1], &end.x, &closestEnd.x, &posOverPoly );
        }
        straightPathOptions = 0;
        m_navQuery->findStraightPath(&posStart.x, &closestEnd.x, polys, npolys,
            straightPath, straightPathFlags,
            straightPathPolys, &mNstraightPath, MAX_POLYS, straightPathOptions);

		navpath.mPoints.resize(mNstraightPath);
		for (int i = 0;i<mNstraightPath;i++)
		{
			navpath.mPoints[i] = Vec3(straightPath[i*3], straightPath[i*3+1], straightPath[i*3+2]);
		}
    }
    return navpath;
}

Crowd::Crowd(const int maxAgents, const float maxAgentRadius, dtNavMesh* nav)
{
    m_crowd = dtAllocCrowd();
    m_crowd->init(maxAgents, maxAgentRadius, nav);
}

void Crowd::destroy()
{
    if (m_crowd)
    {
        dtFreeCrowd(m_crowd);
        m_crowd = NULL;
    }
}

int Crowd::addAgent(const Vec3& pos, const dtCrowdAgentParams* params)
{
    return m_crowd->addAgent(&pos.x, params);
}

void Crowd::removeAgent(const int idx)
{
    m_crowd->removeAgent(idx);
}

void Crowd::update(const float dt)
{
    m_crowd->update(dt, NULL);
}

Vec3 Crowd::getAgentPosition(int idx)
{
    const dtCrowdAgent* agent = m_crowd->getAgent(idx);
    return Vec3(agent->npos[0], agent->npos[1], agent->npos[2]);
}

Vec3 Crowd::getAgentVelocity(int idx)
{
    const dtCrowdAgent* agent = m_crowd->getAgent(idx);
    return Vec3(agent->vel[0], agent->vel[1], agent->vel[2]);
}

void Crowd::agentGoto(int idx, const Vec3& destination)
{
    dtQueryFilter filter;
    filter.setIncludeFlags(0xffff);
    filter.setExcludeFlags(0);

    dtPolyRef polyRef;

    float polyPickExt[3];
    polyPickExt[0] = 2;
    polyPickExt[1] = 4;
    polyPickExt[2] = 2;

    Vec3 pos(destination.x, destination.y, destination.z);
    m_crowd->getNavMeshQuery()->findNearestPoly(&pos.x, polyPickExt, &filter, &polyRef, 0);

    m_crowd->requestMoveTarget(idx, polyRef, &pos.x);
}
