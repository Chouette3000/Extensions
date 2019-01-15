[{"Owner":"Raggar","Date":"2016-09-02T22:51:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI need some simple pointers on how to turn an imported model into a Cannon.js heightfield.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would prefer this over actual heightmaps_co_ as I feel that I_t_m more in control of the design of the ground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made a simple PG example so I can test it along the way. Just a very basic model made out of a 20x20 plane.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow would you pull the positions(Especially Y) on the individual vertices_co_ so they can be used to create the heightfield shape and added to a Cannon.js body?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the relevant code from the heightfield demo_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  var matrix _eq_ []_sm_\n            var sizeX _eq_ 15_co_\n                sizeY _eq_ 15_sm_\n            for (var i _eq_ 0_sm_ i &lt_sm_ sizeX_sm_ i++) {\n                matrix.push([])_sm_\n                for (var j _eq_ 0_sm_ j &lt_sm_ sizeY_sm_ j++) {\n                    var height _eq_ Math.cos(i/sizeX * Math.PI * 2)*Math.cos(j/sizeY * Math.PI * 2) + 2_sm_\n                    if(i_eq__eq__eq_0 || i _eq__eq__eq_ sizeX-1 || j_eq__eq__eq_0 || j _eq__eq__eq_ sizeY-1)\n                        height _eq_ 3_sm_\n                    matrix[i].push(height)_sm_\n                }\n            }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/schteppe/cannon.js/blob/master/demos/heightfield.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/schteppe/cannon.js/blob/master/demos/heightfield.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-09-02T23:40:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf you can wait like a week I_t_ll post my solution that I_t_ve been cooking up for terrain everything. Search the forum for TERIABLE until I release the new version though for some solutions to your questions.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-09-04T10:09:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell. I am not making any progress_co_ that_t_s for sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to find out how the DiStraction demo does it_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/Demos/Distraction/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/Demos/Distraction/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using the very same mesh_co_ with most of the stuff stripped off.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut for some reason_co_ when I try in the playground_co_ the verticies are all aligned flat_co_ and the sphere just falls through where the heightfield is supposed to be_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#PTXTK%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#PTXTK#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you comment out o.dispose() on line 133_co_ you_t_ll see the shope of the original imported mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the original_co_ unminified code_co_ if that would help anyone make sence of this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Ground.prototype._createGround _eq_ function() {\n        this.msgCallback &amp_sm_&amp_sm_ this.msgCallback(_qt_create ground..._qt_)_sm_\n      \n        var e _eq_ this_sm_\n        BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ this.groundPath_co_ this.groundMesh_co_ this.scene_co_ function(t) {\n            \n    \n            var i_co_ s_sm_\n            for (i _eq_ 0_sm_ i &lt_sm_ t.length_sm_ i++) {\n                var o _eq_ t[i]_sm_\n                if (-1 !_eq__eq_ o.name.indexOf(_qt_Water_qt_) &amp_sm_&amp_sm_ (o.receiveShadows _eq_ !0)_co_ -1 !_eq__eq_ o.name.indexOf(_qt_Support_qt_) &amp_sm_&amp_sm_ (o.receiveShadows _eq_ !0)_co_ null !_eq__eq_ o.getVerticesData(BABYLON.VertexBuffer.PositionKind))\n                    if (o.name _eq__eq__eq_ e.groundMeshName) {\n                        e.ground _eq_ new BABYLON.GroundMesh(_qt__qt__co_ e.scene)_co_ e.ground._setReady(!1)_co_ e.ground._subdivisions _eq_ e.subdivision_sm_\n                        var a _eq_ BABYLON.VertexData.CreateGround(e.width_co_ e.depth_co_ e.subdivision)_sm_\n                        if (null !_eq__eq_ e.groundTexture) {\n                            var n _eq_ new BABYLON.StandardMaterial(_qt__qt__co_ e.scene)_sm_\n                            n.alpha _eq_ 1_sm_\n                            n.diffuseTexture _eq_ new BABYLON.Texture(e.groundTexture_co_ e.scene)_co_ n.backFaceCulling _eq_ !0_co_ e.ground.material _eq_ n\n                        }\n                        var r _eq_ a.positions_co_\n                            d _eq_ o.getVerticesData(BABYLON.VertexBuffer.PositionKind)_co_\n                            h _eq_ d.length / 3_co_\n                            l _eq_ e.width / e.scaleFactor_sm_\n                        for (s _eq_ 0_sm_ h &gt_sm_ s_sm_ s++) {\n                            var c _eq_ d[3 * s] * o.scaling.x_co_\n                                p _eq_ d[3 * s + 1] * o.scaling.y_co_\n                                u _eq_ d[3 * s + 2] * o.scaling.z_co_\n                                g _eq_ Math.round((c + l / 2) * e.subdivision / l)_co_\n                                f _eq_ Math.round((u + l / 2) * e.subdivision / l)_co_\n                                m _eq_ g_co_\n                                w _eq_ e.subdivision - f_co_\n                                B _eq_ m + (e.subdivision + 1) * w_sm_\n                            r[3 * B + 1] _eq_ p * e.scaleFactor + 50\n                        }\n                        var C _eq_ a.normals_co_\n                            y _eq_ a.indices_sm_\n                        BABYLON.VertexData.ComputeNormals(r_co_ y_co_ C)_co_ a.applyToMesh(e.ground_co_ !1)_co_ e.ground._setReady(!0)_co_ o.dispose()_co_ e.ground.receiveShadows _eq_ !0_co_ e._createCannonHeightfield()\n                    } \n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\telse e._moveAndScaleMesh(o)_co_ o.convertToFlatShadedMesh()_sm_\n                else e._testEmptyMesh(o)\n            }\n        })\n        \n        \n       \n        \n       \n    }\n    \n    \n    \n    Ground.prototype._createCannonHeightfield _eq_ function() {\n        var t_co_ a_co_ n_co_ s _eq_ this.ground.getVerticesData(BABYLON.VertexBuffer.PositionKind)_co_\n            o _eq_ []_sm_\n        for (a _eq_ 0_sm_ a &lt_sm__eq_ this.subdivision_sm_ a++)\n            for (o.push([])_co_ n _eq_ 0_sm_ n &lt_sm__eq_ this.subdivision_sm_ n++) {\n                var r _eq_ a + (this.subdivision + 1) * (this.subdivision - n)_sm_\n                t _eq_ s[3 * r + 1]_co_ o[a].push(t)\n            }\n        var d _eq_ new CANNON.Heightfield(o_co_ {\n            elementSize_dd_ this.width / this.subdivision\n        })_sm_\n        \n        this.groundBody _eq_ new CANNON.Body({\n            mass_dd_ 0_co_\n            material_dd_ this.groundMaterial\n        })_sm_\n        \n        this.groundBody.addShape(d)_sm_\n        this.groundBody.position.set(-this.width / 2_co_ -this.depth / 2_co_ 0)_sm_\n        this.groundBody.collisionFilterGroup _eq_ this.groundCollisionFilterGroup_sm_\n        this.groundBody.collisionFilterMask _eq_ this.groundCollisionFilterMask_sm_\n        this.world.add(this.groundBody)_sm_\n       \n      //  this._loadSolidBuildings()_sm_\n        this._loadSolidBox()_sm_\n        \n        if (this.onLoadFinished) { \n            this.onLoadFinished()_sm_ \n        }\n    }_sm_\n    \n    \n    Ground.prototype._testEmptyMesh _eq_ function(e) {\n        var t_co_ i _eq_ !1_sm_\n        for (t _eq_ 0_sm_ t &lt_sm_ this.scene.meshes.length_sm_ t++) {\n            var s _eq_ this.scene.meshes[t]_sm_\n            if (s.parent _eq__eq__eq_ e) {\n                i _eq_ !0_sm_\n                break\n            }\n        }\n        i ? e.setEnabled(true) _dd_ e.dispose()\n   \n    }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-09-05T12:52:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhy work hard_co_ when everything is already implemented? _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1GQK6J_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1GQK6J_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou just need to be conform with a babylon heightmap_co_ and you are fine. This is whyt I removed the parent (which indicates compound physics bodies)_co_ and baked the transformation into the heightmap.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-09-06T13:07:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ that would certainly work client-side. But when it comes to running the same simulations server-side_co_ using only Cannon.js_co_ and not Babylon.js_co_ this simply won_t_t work. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m planning on using the array of vertex positions to recreate the heightfield server-side_co_ but as testing blindy isn_t_t quite as easy as having some visuals_co_ I_t_ll see if I can make it work using Babylon.js first.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is what I got so far_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1B5UCR%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1B5UCR#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing the VertexData tutorial from pixelcodr_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//pixelcodr.com/tutos/trees/trees.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//pixelcodr.com/tutos/trees/trees.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see_co_ the randomization of the vertices is successful_co_ but when I try to apply the vertex information from the imported mesh into the created ground mesh_co_ it simply gets all messed up.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you check the console_co_ you see that the getVerticesData function ran against the created ground mesh results in an array of 288_co_ where as the same function ran against the imported mesh results in 75.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy is this? The ground consists of a 4x4 grid_co_ and the model is made using a 4x4 grid aswell. Shouldn_t_t they have the same number of vertices?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I think about it_co_ the 3Ds Max model might have been made out of rectangles instead of triangles. Hmm.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-09-06T14:07:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\twhy does everyone want to do all their hit testing server side?  This is not the way to do it_co_ yes you want to do secondary calculations on the server but the majority of the i/O_t_s need to be calculated on the client then pushed to the sever to confirm that it was valid and if they are out of a normal range push them back in.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-09-06T17:06:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can_t_t speak for anyone else_co_ but this is the way I have chosen to approach it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Making a triangular mesh creates the same amount of vertices_co_ so that_t_s not where the problem lies.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother thing_co_ if I change lines 44 and 45 to_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar positions2 _eq_ ground.getVerticesData(BABYLON.VertexBuffer.PositionKind)_sm__lt_br /_gt_\n\tvar positions _eq_ newMeshes[1].getVerticesData(BABYLON.VertexBuffer.PositionKind)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn order to get the positional data on the vertices of the imported model_co_ I get a double_dd_ TypeError_dd_ i is undefined | babylon.js_dd_6_dd_14936._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-09-07T09:45:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tA quick question - why can_t_t you take the code from babylon and use it server-side? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-09-09T15:50:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17833-hen/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17833_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17833-hen/_qt_ rel_eq__qt__qt__gt_@hen_lt_/a_gt_ suggested the same thing_co_ but I haven_t_t had much time lately. I_t_ll see if I can make it work later tonight_co_ as I did one quick test. This test was almost a success_co_ as it worked with a mesh created with babylon_co_ but not a model imported on my own. I might have missed something_co_ though.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-09-13T22:43:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI see that I forgot to reply.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__t_s suggestion worked like a charm_co_ and copying the matrix to the server-side only took a matter of minutes with some organized logging.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs the server and the client run the same simulations_co_ they seem to sync up pretty well_co_ but player prediction in mind. But prediction_co_ compensation and reconciliation aren_t_t quite easy tasks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt really puts multiplayer in a whole new perspective.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]