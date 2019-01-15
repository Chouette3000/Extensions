[{"Owner":"zmahomedy","Date":"2015-11-22T19:37:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am trying to do the following_co_ Take a model in wireframe and add new meshes to its vertices. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I created a simple model of 2 tetrahedrons and imported it into babylon using the raw data from the export file_co_ using setVerticesData._lt_/p_gt__lt_p_gt_It renders correctly however the next part to my project is to add meshes to each vertex point ( suppose to be 8 )_co__lt_/p_gt__lt_p_gt_I instead get 24 points into my array when I use the function _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_getVerticesData(BABYLON.VertexBuffer.PositionKind)_sm__lt_/pre_gt__lt_p_gt_In clara.io I see 8 vertices. So I am not sure why I am getting so many vertex points._lt_/p_gt__lt_p_gt_The reason why I am importing the raw data is due to the fact I do not want to use a web server for this project._lt_/p_gt__lt_p_gt_it must run off the browser in offline mode. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_see code_lt_/p_gt__lt_p_gt_I also attached screenshots  from the playground_lt_/p_gt__lt_p_gt_I would like to get the correct 8 vertices to add my custom meshes to it _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_link to clara.io model_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//clara.io/view/2ee8381f-23f5-4eeb-b682-01e6f68f037d/image_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//clara.io/view/2ee8381f-23f5-4eeb-b682-01e6f68f037d/image_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thanks_lt_/p_gt__lt_p_gt_zak_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__lt_/pre_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var createScene _eq_ function () {   var scene _eq_ new BABYLON.Scene(engine)_sm_var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 3 * Math.PI / 2_co_ Math.PI / 8_co_ 50_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_var light _eq_ new BABYLON.HemisphericLight(_qt_hemi_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_camera.attachControl(canvas_co_ true)_sm_    // Default intensity is 1. Let_t_s dim the light a small amount    light.intensity _eq_ 0.7_sm_var base _eq_ createBase(scene)_sm_var vertices _eq_ base.getVerticesData(BABYLON.VertexBuffer.PositionKind)_sm_createMeshAtVertices(vertices_co_ scene)return scene_sm_}_sm_function createBase(scene){var tet1 _eq_  new BABYLON.Mesh(_qt_base_qt__co_ scene)_sm_         var tet1positions _eq_ [-0.009_co_0.1071_co_-0.01_co_-0.2019_co_0.7687_co_0.4279_co_0.473_co_0.7658_co_-0.0316_co_-0.2019_co_0.7687_co_0.4279_co_-0.009_co_0.1071_co_-0.01_co_-0.2622_co_0.7861_co_-0.3862_co_0.473_co_0.7658_co_-0.0316_co_-0.2019_co_0.7687_co_0.4279_co_-0.2622_co_0.7861_co_-0.3862_co_-0.009_co_0.1071_co_-0.01_co_0.473_co_0.7658_co_-0.0316_co_-0.2622_co_0.7861_co_-0.3862_co_0.009_co_-0.1271_co_0.0092_co_0.2622_co_-0.8054_co_0.3865_co_-0.473_co_-0.7857_co_0.0319_co_0.2019_co_-0.7894_co_-0.4276_co_-0.473_co_-0.7857_co_0.0319_co_0.2622_co_-0.8054_co_0.3865_co_0.2019_co_-0.7894_co_-0.4276_co_0.2622_co_-0.8054_co_0.3865_co_0.009_co_-0.1271_co_0.0092_co_0.2019_co_-0.7894_co_-0.4276_co_0.009_co_-0.1271_co_0.0092_co_-0.473_co_-0.7857_co_0.0319]_sm_var tet1normals _eq_ [0.5243_co_-0.3584_co_0.7725_co_0.5243_co_-0.3584_co_0.7725_co_0.5243_co_-0.3584_co_0.7725_co_-0.9461_co_-0.3177_co_0.0632_co_-0.9461_co_-0.3177_co_0.0632_co_-0.9461_co_-0.3177_co_0.0632_co_0.018_co_0.9996_co_0.02_co_0.018_co_0.9996_co_0.02_co_0.018_co_0.9996_co_0.02_co_0.4038_co_-0.3236_co_-0.8557_co_0.4038_co_-0.3236_co_-0.8557_co_0.4038_co_-0.3236_co_-0.8557_co_-0.4038_co_0.3249_co_0.8552_co_-0.4038_co_0.3249_co_0.8552_co_-0.4038_co_0.3249_co_0.8552_co_-0.0179_co_-0.9997_co_-0.0184_co_-0.0179_co_-0.9997_co_-0.0184_co_-0.0179_co_-0.9997_co_-0.0184_co_0.9461_co_0.3177_co_-0.0637_co_0.9461_co_0.3177_co_-0.0637_co_0.9461_co_0.3177_co_-0.0637_co_-0.5243_co_0.3571_co_-0.773_co_-0.5243_co_0.3571_co_-0.773_co_-0.5243_co_0.3571_co_-0.7734]_sm_var tet1uvs _eq_ [0.375_co_0.6959_co_0.875_co_0.6959_co_0.625_co_0.3041_co_0.875_co_0.6959_co_0.375_co_0.6959_co_0.125_co_0.3041_co_0.625_co_0.3041_co_0.875_co_0.6959_co_0.125_co_0.3041_co_0.375_co_0.6959_co_0.625_co_0.3041_co_0.125_co_0.3041_co_0.625_co_0.3041_co_0.875_co_0.6959_co_0.375_co_0.6959_co_0.125_co_0.3041_co_0.375_co_0.6959_co_0.875_co_0.6959_co_0.125_co_0.3041_co_0.875_co_0.6959_co_0.625_co_0.3041_co_0.125_co_0.3041_co_0.625_co_0.3041_co_0.375_co_0.6959]_sm_var indices _eq_ [0_co_ 1_co_ 2_co_ 3_co_ 4_co_ 5_co_ 6_co_ 7_co_ 8_co_ 9_co_ 10_co_ 11_co_ 12_co_ 13_co_ 14_co_ 15_co_ 16_co_ 17_co_ 18_co_ 19_co_ 20_co_ 21_co_ 22_co_ 23]_sm_tet1.setVerticesData(BABYLON.VertexBuffer.PositionKind_co_ tet1positions_co_  true)_sm_tet1.setVerticesData(BABYLON.VertexBuffer.NormalKind_co_ tet1normals_co_ true)_sm_tet1.setVerticesData(BABYLON.VertexBuffer.UVKind_co_ tet1uvs_co_ true)_sm_tet1.setIndices(indices)_sm_var material _eq_ new BABYLON.StandardMaterial(_qt_pyshical_qt__co_ scene)_sm_material.wireframe _eq_ true_sm_material.diffuseColor _eq_ BABYLON.Color3.White()_sm_material.specularColor _eq_ BABYLON.Color3.White()_sm_material.emissiveColor _eq_ BABYLON.Color3.Blue()_sm_tet1.material _eq_ material_sm_tet1.scaling _eq_ new BABYLON.Vector3(15_co_ 15_co_ 15)_sm_tet1.rotation.z _eq_ -0.4_sm_tet1.rotation.y _eq_ 2.5_sm_tet1.rotation.x _eq_ 2.6_sm_tet1.bakeCurrentTransformIntoVertices()_sm_return tet1_sm_}_sm_function createMeshAtVertices(vertices_co_ scene) {var stype _eq_ 0_sm_var shape_sm_for (var i _eq_ 0_sm_ i &lt_sm_ vertices.length / 3_sm_ i++ ){if(stype _eq__eq_ 5)stype _eq_ 0_sm_shape _eq_ BABYLON.Mesh.CreatePolyhedron(_qt_pyshical_qt__co_ { type_dd_ stype_co_ size_dd_0.5 }_co_ scene)_sm_    shape.position _eq_ BABYLON.Vector3.FromArray(vertices_co_ i)_sm_shape.scaling _eq_ new BABYLON.Vector3(1_co_ 1_co_ 1)_sm_stype++_sm_}}_sm__lt_/pre_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_11_2015/post-17469-0-64589100-1448220196.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_11_2015/post-17469-0-64589100-1448220196_thumb.png_qt_ data-fileid_eq__qt_5636_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-17469-0-64589100-1448220196_thumb.p_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_11_2015/post-17469-0-95858800-1448220964.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_11_2015/post-17469-0-95858800-1448220964.png_qt_ data-fileid_eq__qt_5638_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-17469-0-95858800-1448220964.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_5639_qt__gt_untitled-scene-babylon.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-11-22T20:22:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Each position has an x_co_ y_co_ and z coordinate and reading with positionkind gives an array of the form [x0_co_y0_co_z0_co_x1_co_y1_co_z1_co_......] So 8 vertices gives an array of length 3*8. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zmahomedy","Date":"2015-11-22T20:35:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_JohnK_lt_/p_gt__lt_p_gt_I have 72 positions not 24 from the model import._lt_/p_gt__lt_p_gt_Even if there was some duplication_co_ where isnt my meshes not aligning with the base mesh  vertices points _co_when using data from its vertex data function_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-11-22T22:03:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If two vertex has two different normals_co_ the point is duplicated (same with texture coordinates)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_co_ you have 4 points for each model. Each of these points is linked to 3 faces (so 3 differents normal for each points) _eq_&gt_sm_ 4 * 3 _eq_ 12 vertices._lt_/p_gt__lt_p_gt_You have two models_dd_ 24 vertices._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zmahomedy","Date":"2015-11-23T05:54:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thanks for clarifying the issue on the number of vertices._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_can anyone shed any light on why getVerticesData is giving me points off the model in space?_lt_/p_gt__lt_p_gt_Should it not all be on the model?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am very new to this._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Zak_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-11-23T09:12:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you provide a Babylonjs playground and clarify which points are off the model and how this affects the rendering?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zmahomedy","Date":"2015-11-24T11:51:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi JohnK_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_here is the babylon playground link_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2AXMQX_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2AXMQX_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_as you can see there are alot of meshes floating outside the base mesh._lt_/p_gt__lt_p_gt_Im using verticesdata to get each point so theoretically all new meshes should be all  within the base mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_another slight hicup as I continue to work on this project_lt_/p_gt__lt_p_gt_To get the orientation correct_co_ I transformed the base mesh using rotation _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_tet1.rotation.z _eq_ -0.4_sm_tet1.rotation.y _eq_ 2.5_sm_tet1.rotation.x _eq_ 2.6_sm_tet1.bakeCurrentTransformIntoVertices()_sm__lt_/pre_gt__lt_p_gt_now when I want to add in some animation using scene.beforeRender_lt_/p_gt__lt_p_gt_its taking the above into its calculation which is not the desired results._lt_/p_gt__lt_p_gt_Once I orientate the base I just want it to spin along its y axis. _lt_/p_gt__lt_p_gt_If I remove the above code it spins properly but the orientation is off ._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_zak_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-11-24T14:04:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is this what you want _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2AXMQX%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2AXMQX#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_you vertices array has the form [x0_co_y0_co_z0_co_x1_co_y1_co_z1_co_......] and so_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.Vector3.FromArray(vertices_co_ 0)_sm_ is constructed from x0_co_y0_co_z0BABYLON.Vector3.FromArray(vertices_co_ 1)_sm_ is constructed from y0_co_z0_co_x1BABYLON.Vector3.FromArray(vertices_co_ 2)_sm_ is constructed from z0_co_x1_co_y1BABYLON.Vector3.FromArray(vertices_co_ 3)_sm_ is constructed from x1_co_y1_co_z1etc_lt_/pre_gt__lt_p_gt_I have changed your loop on line 64 and the fromArray on line 68 to work in groups of three to read the x_co_ y_co_ and z coordinates of each vertex._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zmahomedy","Date":"2015-11-24T21:07:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thanks JohnK_lt_/p_gt__lt_p_gt_for clearing that up_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Zak_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]