[{"Owner":"Nubsy","Date":"2014-07-30T14:36:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everyone!_lt_/p_gt__lt_p_gt_First I just want to say that I_t_m really enjoying the simplicity and ease of use of Babylonjs_co_ and from the topics I_t_ve read here_co_ you all are very helpful and more importantly_co_ excited to help._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I know this question reeks of not doing my research_co_ but I promise that I have_co_ and I must be missing something. I_t_m guessing it_t_s probably something small and stupid_co_ because that seems to be my usual problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My idea was to make a maze. The boundaries of the maze are defined by a 2D array which is traversed to create box meshes in the correct location. I also created a flat box _qt_floor_qt_ mesh as the floor_co_ and then what I_t_m calling a speck. The speck is a small box with no transformations that acts as the parent to the wall boxes and the floor. I would apply a rotation to the speck and everything would rotate with it. (I_t_m using Temechon_t_s Oimo plug-in and babylon.1.13-beta-debug.js btw)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The walls and floor have physics set as_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.BoxImpostor_co_ restitution_dd_ 0.5_co_ move_dd_ false })_sm_ _lt_/pre_gt__lt_p_gt_And the sphere that goes in the maze has a state of_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0.1_co_ move_dd_ true})_sm_ _lt_/pre_gt__lt_p_gt_However_co_ if I apply a rotation to the parent_co_ the floor and wall meshes rotate_co_ but the ball falls through the floor and lands on the invisible impostor_co_ which has stayed in the original location. (which is the proper behavior_co_ I think)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I know about _qt_Quarternion Hell_qt__co_ but even that doesn_t_t seem to work. Either I_t_m doing something wrong_co_ or again_co_ I_t_m missing something. Here_t_s what I have so far_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var canvas_co_\tengine_co_\tscene_co_\tcamera_co_\tboxSize _eq_ 4.0_co_\trowTileCount _eq_ 15_co_\tcolTileCount _eq_ 20_co_\tmazeWall _eq_ []_co_\tmazeFloor _eq_ []_co_\tmazeHeight _eq_ 60_co_\tmazeWidth _eq_ 80_co_\tsphere_co_\tmaze _eq_ [\t\t[1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 2_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 0_co_ 0_co_ 1_co_ 0_co_ 0_co_ 0_co_ 1]_co_\t\t[1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1_co_ 1]\t]_sm_document.addEventListener(_qt_DOMContentLoaded_qt__co_ function() {\tif (BABYLON.Engine.isSupported()) {\t\tinitScene()_sm_\t}}_co_ false)_sm_window.addEventListener(_qt_resize_qt__co_ function () {\tif (engine) {\t\tengine.resize()_sm_\t}}_co_false)_sm_function initScene() {\t/* Canvas_co_ engine_co_ scene_co_ and lights */\tcanvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\tengine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\tscene _eq_ new BABYLON.Scene(engine)_sm_\toimo _eq_ new BABYLON.OimoJSPlugin()\tscene.enablePhysics(new BABYLON.Vector3(0_co_-9.81_co_0)_co_ oimo)_sm_\tvar light _eq_ new BABYLON.PointLight(_qt_light_qt__co_ new BABYLON.Vector3(0 - (mazeWidth/2)_co_ 5_co_ 0 - (mazeHeight/2))_co_ scene)_sm_\tvar light2 _eq_ new BABYLON.PointLight(_qt_light_qt__co_ new BABYLON.Vector3((mazeWidth/2)_co_ 5_co_ (mazeHeight/2))_co_ scene)_sm_\t/* Materials... all of them */\tvar materialSphere _eq_ new BABYLON.StandardMaterial(_qt_texture1_qt__co_ scene)_sm_\tmaterialSphere.diffuseTexture _eq_ new BABYLON.Texture(_qt_./img/franceball2.jpg_qt__co_ scene)_sm_\tvar materialBox _eq_ new BABYLON.StandardMaterial(_qt_texture3_qt__co_ scene)_sm_\tmaterialBox.diffuseTexture _eq_ new BABYLON.Texture(_qt_./img/ground.jpg_qt__co_ scene)_sm_\t/* Floor_co_ sphere (this seems out of place?)_co_ and camera (because it relies on sphere) */\tspeck _eq_ BABYLON.Mesh.CreateBox(_qt_speck_qt__co_ 0.01_co_ scene)_sm_\t//speck.rotation.x _eq_ Math.PI/8_sm_\tspeck.rotationQuaternion _eq_ BABYLON.Quaternion.RotationYawPitchRoll(0_co_ Math.PI/8_co_ 0)_sm_\tfloor _eq_ BABYLON.Mesh.CreateBox(_qt_worldFloor_qt__co_ 1_co_ scene)_sm_\tfloor.scaling.x _eq_ mazeWidth_sm_\tfloor.scaling.z _eq_ mazeHeight_sm_\tfloor.position.y -_eq_ 1.8_sm_\tfloor.material _eq_ materialBox_sm_\tfloor.parent _eq_ speck_sm_\tfloor.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.BoxImpostor_co_ restitution_dd_ 0.5_co_ move_dd_ false })_sm_\tsphere _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere_qt__co_ 10.0_co_ 4.0_co_ scene)_sm_\tsphere.material _eq_ materialSphere_sm_\tsphere.position _eq_ new BABYLON.Vector3(5.1 - ((mazeWidth/2) - (boxSize/2))_co_ 15_co_ 10 - ((mazeHeight/2) - (boxSize/2)))_sm_\tsphere.checkCollisions _eq_ true_sm_\tsphere.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.SphereImpostor_co_ mass_dd_ 0.1_co_ move_dd_ true})_sm_\t\tcamera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 2_co_ 1_co_ 40_co_ sphere.position_co_ scene)_sm_\tcamera.attachControl(canvas)_sm_\tvar createWall _eq_ function(id_co_ x_co_ z_co_ type) {\t\tif(type _eq__eq_ 1) {\t\t\tbox _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt__co_ 4.0_co_ scene)_sm_\t\t\tbox.position _eq_ new BABYLON.Vector3(x - ((mazeWidth/2) - (boxSize/2))_co_ 0_co_ z - ((mazeHeight/2) - (boxSize/2)))_sm_\t\t\tbox.material _eq_ materialBox_sm_\t\t\tbox.parent _eq_ speck_sm_\t\t\tbox.checkCollisions _eq_ true_sm_\t\t\tbox.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.BoxImpostor_co_ restitution_dd_ 0.5_co_ move_dd_ false })_sm_\t\t}\t}_sm_\t/* Build maze by iterating over maze array */\tvar id _eq_ 0_sm_\tfor (var r _eq_ 0_sm_ r &lt_sm_ rowTileCount_sm_ r++) {\t\tfor (var c _eq_ 0_sm_ c &lt_sm_ colTileCount_sm_ c++) {\t\t\tvar tile _eq_ maze[r][c]_sm_\t\t\tcreateWall(id_co_ (c*boxSize)_co_ (r*boxSize)_co_ tile)_sm_\t\t\tid++_sm_\t\t}\t}\t/* Engine loop */\tengine.runRenderLoop(function () {\t\tscene.render()_sm_\t})_sm_}window.addEventListener(_qt_keyup_qt__co_ function (event) {\tif (event.keyCode _eq__eq__eq_ 87) { //up\t\tspeck.rotation.z +_eq_ Math.PI/64_sm_\t\t//sphere.applyImpulse(new BABYLON.Vector3(0_co_0_co_2)_co_ sphere.position)_sm_\t} else if (event.keyCode _eq__eq__eq_ 65) { //left\t\tspeck.rotation.x -_eq_ Math.PI/64_sm_\t\t//sphere.applyImpulse(new BABYLON.Vector3(-2_co_0_co_0)_co_ sphere.position)_sm_\t} else if (event.keyCode _eq__eq__eq_ 68) { //right\t\tspeck.rotation.x +_eq_ Math.PI/64_sm_\t\t//sphere.applyImpulse(new BABYLON.Vector3(2_co_0_co_0)_co_ sphere.position)_sm_\t} else if (event.keyCode _eq__eq__eq_ 83) { //down\t\tspeck.rotation.z -_eq_ Math.PI/64_sm_\t\t//sphere.applyImpulse(new BABYLON.Vector3(0_co_0_co_-2)_co_ sphere.position)_sm_\t}})_sm__lt_/pre_gt__lt_p_gt_I feel like something like rotating meshes on the fly should be fairly simple_co_ am I mistaken?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your help and all your hard work!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-07-30T16:38:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Nubsy_co_ welcome !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The Oimo plugin is not in the stable version of Babylon for now (the plugin is over and the typescript version is coming soon)._lt_/p_gt__lt_p_gt_I think you forgot to update the body position of your ground._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my last demo (_lt_a href_eq__qt_http_dd_//pixelcodr.com/tutos/oimo/game/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//pixelcodr.com/tutos/oimo/game/index.html_lt_/a_gt_)_co_ I created a custom version of babylon v1.13_co_ is it the one you currently use ? If so_co_ you should have a function _lt_strong_gt_mesh.updateBodyPosition()_lt_/strong_gt_._lt_/p_gt__lt_p_gt_This function should be used when the mesh position (and/ rotation) has been updated._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In your case_co_ in your keyboard handler_co_ you should add _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_speck.rotation.z -_eq_ Math.PI/64_sm_floor.updateBodyPosition()_sm__lt_/pre_gt__lt_p_gt_This way_co_ the body (the physical object used by Oimo) will update its position_co_ and all physicals objects will react accordingly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope this help _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nubsy","Date":"2014-07-31T16:01:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_49235_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_8229_qt_ data-ipsquote-username_eq__qt_Temechon_qt_ data-cite_eq__qt_Temechon_qt_ data-ipsquote-timestamp_eq__qt_1406738303_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hi Nubsy_co_ welcome !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The Oimo plugin is not in the stable version of Babylon for now (the plugin is over and the typescript version is coming soon)._lt_/p_gt__lt_p_gt_I think you forgot to update the body position of your ground._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my last demo (_lt_a href_eq__qt_http_dd_//pixelcodr.com/tutos/oimo/game/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//pixelcodr.com/tutos/oimo/game/index.html_lt_/a_gt_)_co_ I created a custom version of babylon v1.13_co_ is it the one you currently use ? If so_co_ you should have a function _lt_strong_gt_mesh.updateBodyPosition()_lt_/strong_gt_._lt_/p_gt__lt_p_gt_This function should be used when the mesh position (and/ rotation) has been updated._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In your case_co_ in your keyboard handler_co_ you should add _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_speck.rotation.z -_eq_ Math.PI/64_sm_floor.updateBodyPosition()_sm__lt_/pre_gt__lt_p_gt_This way_co_ the body (the physical object used by Oimo) will update its position_co_ and all physicals objects will react accordingly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope this help _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers !_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am using that version of Babylon_co_ yes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That has helped some_co_ but it_t_s still not quite right. So_co_ when it first loads_co_ the ball drops into the maze and bounces slightly_co_ which is perfect. Then upon hitting the arrow keys_co_ the maze moves_co_ but the ball still still stays where it is_sm_ the maze moves through it. What I_t_d like is for it to be in the maze as it moves_co_ and roll with gravity. I know gravity is enabled because it falls. I don_t_t think that the ball should be a child to anything_co_ it should be a free body_co_ right?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The other thing that_t_s slightly minor_co_ but possibly relevant is that the ball is just slightly _t_in_t_ the floor_co_ rather than on top._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the help!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-08-01T07:59:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you have a demo that I can try ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nubsy","Date":"2014-08-01T15:17:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think this is what you_t_re looking for_dd_ _lt_a href_eq__qt_http_dd_//jsfiddle.net/crQQk/3/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/crQQk/3/_lt_/a_gt_ However_co_ the arrow keys don_t_t seem to work for me in a Fiddle. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m actually using the Babylon-1.13_co_ Babylon.Oimo_co_ and Oimo.Rev from your site because I_t_ve been using your tutorials. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-08-01T16:03:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you for your demo and for using my tutorial _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I hope it helped you a bit !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It appears the floor is set to _t_move_dd_false_t_... Therefore_co_ its body won_t_t move at all._lt_/p_gt__lt_p_gt_I_t_m sorry_co_ but I didn_t_t find a way to create such a game (with a static moving floor) with the current version of the plugin. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will think about it though_co_ and I will answer to this thread if I find anything._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nubsy","Date":"2014-08-01T17:13:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you for writing them. I spoke with you on Reddit last week_co_ and like I said there_co_ your tutorials gave me the kick in the rear I needed to look into webGL._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Definitely let me know if you think of anything. I guess I_t_m going to try to make something else. Not giving up on Babylon! haha_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-08-03T10:09:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I worked on a new version of Oimo plugin_co_ and the first problem is now fixed (the sphere going slightly through the floor)._lt_/p_gt__lt_p_gt_The second problem is identified (the parent relation is not taken into account by Oimo)_co_ and I_t_m working on this. I_t_ll keep you informed _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]