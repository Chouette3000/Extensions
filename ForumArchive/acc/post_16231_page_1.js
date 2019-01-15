[{"Owner":"croustibat","Date":"2015-08-05T11:12:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello Babylon devs_co__lt_/p_gt__lt_p_gt_I_t_m new to babylon_co_ I used to develop on the Unity framework_co_ but my need to build good webgl apps led me to focus on Babylon js. My experience on html5 and JS is quite low_co_ though._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ here is my need_dd__lt_/p_gt__lt_p_gt_I want to make a camera rotate around a target with a mouse drag (let_t_s say button 0) witch is exactly what arc camera does._lt_/p_gt__lt_p_gt_I want my camera to translate (both camera and target) on an horizontal plane while dragging the mouse (let_t_s say button 2)_lt_/p_gt__lt_p_gt_I want all the movements to be smoothed_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I would do using Unity_dd__lt_/p_gt__lt_p_gt_I would parent the camera to a node called _t_target_t__lt_/p_gt__lt_p_gt_Dragging mouse button 0-&gt_sm_rotate the target node_lt_/p_gt__lt_p_gt_Dragging mouse button 2-&gt_sm_translate the target node_lt_/p_gt__lt_p_gt_Smoothing could be done by rotating and translating a node called _t_target command_t_ instead of _t_target_t__co_ and every frame make rotation and translation of _t_target_t_ interpolated values between  the _t_target_t_  values and the _t_target command_t_ ones._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My questions_dd__lt_/p_gt__lt_p_gt_Is this design compatible with babylon js paradigms?_lt_/p_gt__lt_p_gt_Is there a most straight forward way to do that such as customizing the ArcCamera?_lt_/p_gt__lt_p_gt_What is the better way to get the mouse drag input?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-08-06T07:02:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi croustibat and welcome to the forum! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I understand you right_co_ the arcRotateCamera can already do those things. Rotating (click and move the mouse - check)_co_ Panning (hold down CTRL and click and move the mouse - check)... and it_t_s all smooth_co_ isn_t_t it? (can be adjusted with the camera.inertia value)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If that_t_s not what you want let me know_co_ because then I guess I misunderstood your question _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"croustibat","Date":"2015-08-06T08:14:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi iiceman_co_ thanks for your answer!_lt_/p_gt__lt_p_gt_In fact_co_ I completely missed the panning functionality since it doesn_t_t seem to be in the documentation nor on the tutorial!_lt_/p_gt__lt_p_gt_But it_t_s almost perfect for me_co_ the only problem is that I need to pan on a horizontal plane (the one intersecting the arccam target) instead of a plane parallel to the screen._lt_/p_gt__lt_p_gt_Anyway_co_ that_t_s a far better start point than I thought._lt_/p_gt__lt_p_gt_Maybe that would be a good functionality to add  a plane axis parameter to the BABYLON.ArcRotateCamera constructor parameters? If I manage to do that_co_ would it be accepted? I_t_m ok to try to modify the source_co_ but if the modifications are not taken into account in the future updates of babylon_co_ i_t_m gonna have a bad time _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Perhaps it_t_s even a better solution to create a new camera extending arcrotatecamera..._lt_/p_gt__lt_p_gt_Ok_co_ now is the time for me to have a look at the sources_co_ I guess._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"croustibat","Date":"2015-09-01T16:15:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_After some work on other parts of my app_co_ I returned to this camera customization work._lt_/p_gt__lt_p_gt_I just copy/pasted the babylon.arcRotateCamera.js commented the _qt_var BABYLON_sm__qt_ renamed every _qt_ArcRotateCamera_qt_ into _qt_ArcRotatePanCamera_qt__co_ included it in my project and began the dirty work._lt_/p_gt__lt_p_gt_And I ended up with that camera. With almost no modifications._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1OIVT0%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1OIVT0#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Left mouse_dd_ pan along the xOz plane_lt_/p_gt__lt_p_gt_Right mouse_dd_ arcrotate_lt_/p_gt__lt_p_gt_And a new function BABYLON.ArcRotatePanCamera.goToPosition that smoothly translates the target towards a given point until it_t_s close to it (BABYLON.Engine.Epsilon)_lt_/p_gt__lt_p_gt_A pointer down or gesture start event interrupts this behaviour._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think this is an interesting cam behaviour for games such as RTS and similar. A smooth follow can be done with minor modifications of this version._lt_/p_gt__lt_p_gt_I_t_m pretty happy with that_co_ unfortunately_co_ there is a lot of duplicated code (99% at least) between this cam and arcRotateCamera_co_ I should have made this new cam inherit from the arcRotateCam in order to make it maintainable_co_ but my js skills kind of suck_co_ and I didn_t_t know how to do that_co_ so feel free to explain me how to proceed!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-01T16:35:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just FYI_co_ now the arcrotatecamera supports panning _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.2-alpha/ArcRotateCamera#inertialpanningx-number_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.2-alpha/ArcRotateCamera#inertialpanningx-number_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"croustibat","Date":"2015-09-02T09:29:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The arcrotate cam now supports panning_co_ yes_co_ but on a plane parallel to the camera_t_s xOy plane_co_ I wanted a panning on the world xOz plane to easily move the cam along a map_co_ which is mainly horizontal_co_ right?_lt_/p_gt__lt_p_gt_You can try the playground I gave_co_ and alternately replace my cam by the arcrotatecam to see the difference _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Indeed_co_ I just had to tweak the panning direction of the arcrotate cam to get the right effect!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-02T15:39:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_that was what I meant _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]