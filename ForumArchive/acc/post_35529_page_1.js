[{"Owner":"pichou","Date":"2018-02-06T21:42:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t undestand why the updateFunction of my particle system is still called after I stop the system._lt_br /_gt_\n\t_lt_br /_gt_\n\tSee console in this playground _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DJVT90_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DJVT90_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tI stop the particle system after a 1 second timeout and the console show that the updateFunction is still called._lt_br /_gt_\n\t_lt_br /_gt_\n\tThanks_co_ Pichou\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-06T21:54:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you mind creating an issue for me on the repo?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2018-02-06T22:25:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOK done_co_ I have another question!_lt_br /_gt_\n\t_lt_br /_gt_\n\tIs there a way to have the particle position relative to the emitter? _lt_br /_gt_\n\tI want the particle to follow the {x_co_ y_co_ z} emitter system which has a particular position and rotation in the scene. But the particle always follow the {x_co_ y_co_ z} scene system._lt_br /_gt_\n\t_lt_br /_gt_\n\tI don_t_t know if this is clear! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pichou","Date":"2018-02-06T22:41:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBy the way_co_ if I am not mistaken_co_ it seems like the original position of the particle is not {x_dd_0_co_ y_dd_0_co_ z_dd_0} but equal to the emitter position in the scene.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-07T17:47:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tparticles are created at emitter position and then they will live their (short) life \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut as you can control the updateFunction and the createFunction you can do whatever you want if this is not what you want\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]