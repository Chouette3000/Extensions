[{"Owner":"diyo-games","Date":"2017-12-09T03:59:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI need to create the _qt_radar screen_qt_ to locate asteroids and ships_co_ but I can not understand how coordinates systems work in BabylonJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen the game starts_co_ the ship is at 0_co_0_co_0\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16176_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/dudaBaby1.png.dcc0338647b5626961ed550a66888544.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_dudaBaby1.thumb.png.d9a19409bb97d27e4f73a3fbd2eaa77b.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16176_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/dudaBaby1.thumb.png.d9a19409bb97d27e4f73a3fbd2eaa77b.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tafter moving on the x axis_co_ (or what I believe was moving on that axis).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow is it possible for the z-axis values to change?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ I do not move on the y axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16177_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/dudaBaby2.png.e1b5ec1516742aebfeb7161452d4e145.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_dudaBaby2.thumb.png.b60c996dc0a2bc702149568e738a2e1a.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16177_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/dudaBaby2.thumb.png.b60c996dc0a2bc702149568e738a2e1a.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt what point did I move 145 units on the Z axis?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat am I doing wrong ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the second image you can see the options that I have tried ..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand i tried this too\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16178_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/dudaBaby3.png.11576eb01de20d0e3f12a92bfa435361.png_qt_ alt_eq__qt_dudaBaby3.png.11576eb01de20d0e3f12a92bfa435361.png_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-12-09T05:21:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you tried mesh.getAbsolutePosition()?_lt_br /_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/3.1/abstractmesh#getabsoluteposition-rarr-vector3-classes-3-1-vector3-_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/3.1/abstractmesh#getabsoluteposition-rarr-vector3-classes-3-1-vector3-_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ see you have that in your screenshot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow sure are you that red line is an x-axis? Maybe put one of these in your game?_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#EYZE4Q%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#EYZE4Q#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"diyo-games","Date":"2017-12-12T01:16:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tmany thanks_co_ It helped me a lot_co_ I had rotated the camera and that_t_s why I moved in two directions at the same time ...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]