[{"Owner":"KramSurfer","Date":"2018-07-28T11:01:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m attempting to move a WebVRFreeCamera camera around a scene_co_ but setting it_t_s position while in VR mode sees to have no effect._lt_br /_gt_\n\t_lt_br /_gt_\n\tI_t_ve created a WebVRFreeCamera and a ExperenceHelper with the trackPosition option off._lt_br /_gt_\n\t_lt_br /_gt_\n\tThe WebVR emulator in chrome has no effect on the position of the camera_co_ so that false value is applied. _lt_br /_gt_\n\t_lt_br /_gt_\n\tIt is not parented to anything nor has children._lt_br /_gt_\n\t_lt_br /_gt_\n\tTracing the camera_t_s position values in the render loop confirms changing position values_co_ but the camera is not moving in the scene.  Appears stuck at the origin._lt_br /_gt_\n\t_lt_br /_gt_\n\tThe playground exhibits the expected behavior.  With the camera.y incremented before render_co_ the camera should animate away.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#00A2ML%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#00A2ML#9_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\tAny Ideas welcome.  I_t_ve spent ~5 hours already on this one issue_lt_br /_gt_\n\t_lt_br /_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-28T18:38:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSince you are using the experience helper_co_ did you try_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_experienceHelper.currentVRCamera.position.y +_eq_ 0.01_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tEdit - that_t_s only going to have an effect when you are in VR mode.  Check this code if you want to animate the movement_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/VR/babylon.vrExperienceHelper.ts#L1485_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/VR/babylon.vrExperienceHelper.ts#L1485_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KramSurfer","Date":"2018-07-28T21:36:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ that_t_s it.  Just came back to post this solution  and now see your answer.  _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tApparently when using the Experience Helper_co_ the WebVRCamera is parented to the ExperienceHelper._lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]