[{"Owner":"Michael3D","Date":"2017-08-28T15:59:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI am trying to create a light on the camera that light up the area when the camera gets close to an object. I had tried it with a point light_co_ where it wouldn_t_t give me the effect I needed unless the intensity too high_co_ causing the shadows on the wall the be bleached out._lt_br /_gt__lt_br /_gt_\n\tNow I am trying it with the spot light. This give a slightly better effect_co_ but the light doesn_t_t act light a flashlight when I start to rotate around an arch. I cant understand how the spotlight can rotate in the correct directing the camera is facing._lt_br /_gt__lt_br /_gt_\n\tDEMO_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#6FUUGB_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#6FUUGB_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tIssue_dd_ The light mirrors the cameras rotation_co_ eg. I rotate the camera anti-clockwise(to the left)_co_ I should start to see the spotlight shining to the right corner of the wall. Instead the light moves the the left of the wall before appearing only on the right wall.  _lt_br /_gt__lt_br /_gt_\n\tDesired Results_dd_ When I rotate the camera to look right_co_ I wish for the spot light to shine in that direction._lt_br /_gt__lt_br /_gt_\n\tIf there is any more info needed. please ask._lt_br /_gt__lt_br /_gt_\n\tIgnore the Black and Red as there are textures I have on my local computer._lt_br /_gt__lt_br /_gt_\n\tThanks in advance.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-28T17:44:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdo you mind simplifying your demo a bit. There are too much non related code. A simple plane should be enough_dd_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBased on this_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Lights/babylon.shadowLight.ts#L87_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Lights/babylon.shadowLight.ts#L87_lt_/a_gt__co_ the behavior you want SHOULD work \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-08-29T06:06:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tmath_co_ math _co_math... and of course a simple material and shader or texture. But DK is correct... you_t_re overthinking this way too much.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-08-31T14:20:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28275-michael3d/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28275_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28275-michael3d/_qt_ rel_eq__qt__qt__gt_@Michael3D_lt_/a_gt_ _dd_ Hi and welcome to the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou might want to have a look at this example I created. Walk around in the maze\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.3dworlds.ca/maze1/index1.html_qt_ rel_eq__qt_external nofollow_qt__gt_Maze_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt uses a single point light attached to the camera and two hemi lights to provide up and down _qt_fill_qt_ lighting (lighting the floor and ceiling parts).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe point light uses a _lt_strong_gt_range_lt_/strong_gt_ not _qt__lt_em_gt_radius_lt_/em_gt__qt_ which you tried in your code I notice!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI set the range to 5_co_  the intensity to 3 and diffuseColor to 0.4708_co_0.477_co_0.2397.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSometimes it takes a bit of playing around to get exactly what you want.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPS hi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ _dd_ good to see you again - I_t_ve sent you a PM. gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Michael3D","Date":"2017-09-06T14:19:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSorry for my late reply._lt_br /_gt__lt_br /_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ for your suggestion. I was able to get the effect needed more with the light exponent value and mixing a few other values with the other lights._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-09-06T14:23:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyou might be able to convert my old scene from playcanvas to bjs _lt_a href_eq__qt_https_dd_//playcanv.as/p/KldzHOs6/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playcanv.as/p/KldzHOs6/_lt_/a_gt_ which kind of simulates _qt_fire_qt_ light\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]