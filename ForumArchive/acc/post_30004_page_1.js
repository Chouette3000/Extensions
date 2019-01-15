[{"Owner":"Hartha","Date":"2017-04-25T10:59:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHI_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow to convert  world point to screen 2D point using specific camera_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m stuck and this is my try _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#25RB80%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#25RB80#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jellix","Date":"2017-04-25T15:43:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thave a look at _lt_span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs.com/demos/dragndrop_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs.com/demos/dragndrop_lt_/a_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Here you can see how the cursors position (2D) is transformed into a 3d-vector._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Maybe it helps?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hartha","Date":"2017-04-25T21:34:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21403-jellix/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21403_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21403-jellix/_qt_ rel_eq__qt__qt__gt_@jellix_lt_/a_gt_ for your answer_co_ but I need to convert 3D-vector to 2D position_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found this way to do that _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ let p _eq_ BABYLON.Vector3.Project(vector_co_ Identity_co_ scene.getTransformMatrix()_co_\n                    camera.viewport.toGlobal(engine.getRenderWidth()_co_ engine.getRenderHeight()))_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tBut I don_t_t know how to modify it to convert the vector according to specific camera_co_ I tried to change the camera view port but it dose not change anything as shown in the playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif anyone can explain the parameters it will be a good help_co_ Thanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-25T21:41:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello to take in account a specific camera you can just use this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let p _eq_ BABYLON.Vector3.Project(vector_co_ Identity_co_ camera.getViewMatrix().multiply(camera.getProjectionMatrix())_co_\n                    camera.viewport.toGlobal(engine.getRenderWidth()_co_ engine.getRenderHeight()))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hartha","Date":"2017-04-26T12:33:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk it works_co_ Thank you Deltakosh\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]