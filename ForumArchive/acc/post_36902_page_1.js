[{"Owner":"freignat","Date":"2018-04-07T13:22:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to update a box mesh_co_ in order to be able to deform it_co_ for that_co_ i create a box a regular way_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let myBox _eq_ BABYLON.Mesh.CreateBox(name_co_ size_co_ scene_co_ true)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand then in the main loop_co_ i tried to update the box_co_ mesh_co_ for now to be simple_co_ i just tried to move it with a dx translation\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let pos _eq_ myBox.getVerticesData(BABYLON.VertexBuffer.PositionKind)\n\nfor (let index_eq_0_sm_ index&lt_sm_pos.length_sm_ index_eq_index+3) {\n pos[index] _eq_ pos[index]+dx        \n}\n\nmyBox.updateVerticesData(BABYLON.VertexBuffer.PositionKind_co_ pos)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t        \n_lt_/p_gt_\n\n_lt_p_gt_\n\tof course_co_ i could use myBox.position_co_ to do the same_co_ but later i want to update mesh in a more complicated way than just a translation and first i would this simple translation works updating directly the Vertices data.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ it works well_co_ i see that my box is moving in the x axe direction_co_ but on some camera angles the box disappears and be back visible on other angles. So i certainly forget to update something important for the raycaster.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried_co_ to update also normal vectors the same way than the position vertexes_co_ with the same result_co_ the box disappear on some angles.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat_t_s happening ? how update a mesh the right way to make it visible on all camera angles?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-04-07T14:54:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya freignat_co_ welcome to the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis almost sounds like a lighting problem.  (normals)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would use a hemisphericLight for tests... (they usually aim to the sky) and maybe a hemisphericLight.groundColor _eq_ BABYLON.Color3.Gray()_sm_  ( a little reflected ground-light on the bottom of the mesh. )  Maybe hemisphericLight.diffuse _eq_ BABYLON.Color3.Red()_sm_  Get some lighting/colors activated... then you can _qt_see_qt_ the affect of adjusting mesh normals.  Our boxes are 24 vert boxes_co_ so there should be 24 normal directions_co_ I suppose.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdo_dd_  myBox.showBoundingBox _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes the bounding box also disappear at certain camera angles?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ you might want to set camera.minZ _eq_ .001 or some other little number... just for kicks.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you can reproduce the same problem... using our _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_playground app_lt_/a_gt_... that would be cool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh wait... we have a playground that is similar... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1UHFAP%23198_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1UHFAP#198_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe that will help-out... except... that is a 8-vertice box.  Your box is a 24 vert.  *shrug*.  (The BJS default 24-vert box... allows per-face colors and textures... nice feature.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStay tuned for more ideas/comments from others... likely coming soon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freignat","Date":"2018-04-07T19:17:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ i use a hemisphericLight for my tests_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tlet light0 _eq_ new BABYLON.HemisphericLight(_qt_Hemi0_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n\tlight0.diffuse _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n\tlight0.specular _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n\tlight0.groundColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThen_co_ i tried_co_ with more lights as \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let light2 _eq_ new BABYLON.PointLight(_qt_light_qt__co_ new BABYLON.Vector3(10_co_ 10_co_ 0)_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tbut_co_ same result_co_ the box disappear at the same angles than before\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI set _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_myBox.showBoundingBox _eq_ true_co_ as you propose_co_ and yes_co_ the bounding box disappear also at some camera angle _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_same with camera.minZ _eq_ .001_lt_span_gt_ _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try to have the simpe page of code for playground to show that on a better way...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for help and ideas!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freignat","Date":"2018-04-07T19:35:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have prepare a page code for playground_co_ very close from the way i_t_m updating the box vertexes and ... it works well under playground. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t have the box disappearing on the camera angle_co_ so i_t__t_ll try to find out what_t_s wrong in my full code...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is the playground code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\nvar createScene _eq_ function () {\n\tlet scene _eq_ new BABYLON.Scene(engine)_sm_\n\tscene.collisionsEnabled _eq_ true_sm_\n\n\tlet camera _eq_ new BABYLON.FreeCamera(_qt_MainCamera_qt__co_ new BABYLON.Vector3(0_co_ 2.5_co_ 5)_co_ scene)_sm_\n\tcamera.speed _eq_ 0.5_sm_\n\tcamera.angularSensibility _eq_ 1000_sm_\n\tcamera.minZ _eq_ .001\n\tscene.activeCamera.attachControl(canvas_co_ true)_sm_\n\n\tlet light0 _eq_ new BABYLON.HemisphericLight(_qt_Hemi0_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n\tlight0.diffuse _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n\tlight0.specular _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n\tlight0.groundColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n\n\tlet myBox _eq_ BABYLON.Mesh.CreateBox(name_co_ 2_co_ scene_co_ true)_sm_\n\n\twindow.setInterval(function() {\n\t\tlet pos _eq_ myBox.getVerticesData(BABYLON.VertexBuffer.PositionKind)\n\t\tfor (let index_eq_0_sm_ index&lt_sm_pos.length_sm_ index_eq_index+3) {\n\t\t pos[index] _eq_ pos[index]+0.01\n\t\t}\n\t\tmyBox.updateVerticesData(BABYLON.VertexBuffer.PositionKind_co_ pos)_sm_\n\t}_co_ 100)_sm_\n\n\treturn scene\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freignat","Date":"2018-04-07T19:39:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey_co_ after a while_co_ i begging to have to same issues on playground with the code in my previous node. On_co_ some angles the box disappears_co_ but it needs to spend  a little time_co_ let the box go_co_ and turn around the box to find the bad angles.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ i_t_m pretty sure that the way i update vertexes is not good.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-04-09T13:59:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31060-freignat/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31060_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31060-freignat/_qt_ rel_eq__qt__qt__gt_@freignat_lt_/a_gt_ and welcome to the forum from me. First of all it is helpful if you save the playground and provide a link to it rather than just giving a copy of the code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VB9KDE%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#VB9KDE#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is not simply that you are turning the camera so that the box is out of view of the camera_co_ is it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17835_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_04/boxview.png.01da6da87711bfec380a32f356952c28.png_qt_ alt_eq__qt_boxview.png.01da6da87711bfec380a32f356952c28.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes the same thing happen if you do not update the vertex data (ie comment out line 23)_co_ if so it cannot be an updateVertexData problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat happens of you change to an arc rotate camera. This will keep the box in view until it move outside the camera orbit. _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VB9KDE%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#VB9KDE#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave you read about how the different cameras work? _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/cameras_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/cameras_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-04-10T14:41:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhhhh... it DOES happen in _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VB9KDE%231_qt_ rel_eq__qt_external nofollow_qt__gt_the #1 playground_lt_/a_gt_.  I see it.  Firefox 52 ESR on Win 7 Inspiron desktop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse various arrow keys... while holding down left mouse button for aiming. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps wait for the mesh to move for 10-15 seconds_co_ then pan the cam to make mesh go off-screen on either side. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSometimes/Often.... it appears to _qt_pop_qt_ out of view... too soon.  I think its gets worse... with more time or larger move-increments.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExact procedure... hold left arrow for 3 secs_co_ then LMB-pan camera left and right_co_ watching mesh as it disappears from both sides of screen.  Re-center mesh... repeat procedure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSoon_co_ mesh will be disappearing at the wrong time_co_ or even disappearing with up/down arrow moves.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(simpler_co_ keep panning cam hard left/right_co_ while occasionally holding some arrow keys)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ it might be easier to see happen... after you let the mesh move for some time_co_ or maybe move the mesh in larger increments.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-----------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBUT...  I THINK... this is a boundingBox NOT-updating... thing... which is fooling the FOV.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  The mesh is leaving its bounding area... behind_co_ when it moves!  (maybe)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI put a _lt_strong_gt_myBox.refreshBoundingInfo()_sm_ _lt_/strong_gt_at line 24 of _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VB9KDE%233_qt_ rel_eq__qt_external nofollow_qt__gt_#3 version_lt_/a_gt__co_  and it seems to work better.  This might be the solve.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did _lt_em_gt_some_lt_/em_gt_ nav testing with the arrows and the panning_co_ and I haven_t_t been able to repeat the problem.  Help me test this possible solve_co_ gang.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFreignat... you_t_re not going insane.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  I have seen what you have seen.  Yay!   Good catch/report_co_ F!  Interesting issue!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freignat","Date":"2018-04-15T14:19:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry_co_ i could not answer for days because of work_co_ but i_t_m back now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJohnK_co_ yes i_t_ll save the playground and provide a link next time. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHappy_co_ that Wingnut could see the issue_co_ i was about the provide another playground more clear.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI added _lt_strong style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_refreshBoundingInfo()_co_ _lt_/strong_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_in my code and YES! it works well._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Thanks very much for your help to you two._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_I_t_m trying to have a physique engine working with different kind of matter_co_ steal_co_ stone_co_ wood_co_ plastic_co_ ... and have cube deformation/collision considering the real matter technical parameters (Young module_co_ elasticity_co_....)._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]