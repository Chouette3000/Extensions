[{"Owner":"bser","Date":"2017-04-01T21:37:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello. We are trying to figure out how to do a Raycast from the camera_co_ in order for a user to look at a mesh and be able to modify it. For example if we want a wall mesh to change into a heart mesh_co_ we would want the user to look at the wall and it will change it to a heart mesh. How are you able to create this functionality? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JLHolmes","Date":"2017-04-01T21:59:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there... one quick way to do this is using observables... like so_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.onPointerObservable.add (function(evt) {\n        var pi _eq_ evt.pickInfo_sm_\n    }_co_BABYLON.PointerEventTypes.POINTERDOWN)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe pickInfo of the event contains a lot of information about the event (_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/2.5/pickinginfo_qt_ rel_eq__qt_external nofollow_qt__gt_PickInfo_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could also use scene.pick()_co_ which takes X_co_Y coords you can grab from a standard mousedown event from addEventListener.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bser","Date":"2017-04-01T22:13:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you for your response. It does work when you click on something_co_ but how can you do it when you just move the mouse on top of a mesh without clicking. I tried POINTERMOVE_co_ but I just get null for most things.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-04-01T22:18:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you tried using _t_onmousemove_t_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2017-04-02T05:03:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo get it to pick with pointerMove_co_ you need to set constantlyUpdateMeshUnderPointer to true for the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1A7ZCT%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1A7ZCT#0_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Eric McG","Date":"2017-10-20T14:02:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@bser I wanted to do the same thing_co_ and came up with this demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1A7ZCT%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1A7ZCT#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe scene displays 4 spheres and continually creates rays using _lt_strong_gt_Ray.CreateNewFromTo()_lt_/strong_gt_  from the camera_t_s current position to a target (0_co_0_co_0).  If a ray intersects a sphere_co_ a decal is drawn on the sphere.  We detect the intersection using_lt_strong_gt_ scene.multiPickWithRay()_lt_/strong_gt_.  If multiple meshes are found_co_ we choose the one that is closest to the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]