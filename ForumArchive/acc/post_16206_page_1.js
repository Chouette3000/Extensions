[{"Owner":"Bob Razowsky","Date":"2015-08-04T08:35:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everybody_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a problem using refreshBoundingInfo()._lt_/p_gt__lt_p_gt_In my script_co_ I scale an object_co_ and I need to place meshes at it_t_s extremity._lt_/p_gt__lt_p_gt_Even after using refreshBoundingInfo()_co_ bounding infos don_t_t change._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am I missing something here?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your answers!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-08-04T08:40:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Bob_co__lt_/p_gt__lt_p_gt_try reproducing the problem in the playground_co_ this way we can all try and help out._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bob Razowsky","Date":"2015-08-04T08:56:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WO4DY_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WO4DY_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Box2 should be in the bottom left corner._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-08-04T09:10:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So_co_ technically_co_ you are right _dd_-) According to what one can understand from minimum and maximum_co_ it should work. there is always a _qt_But_qt_ _dd_-)_lt_/p_gt__lt_p_gt_A few pointers_dd__lt_/p_gt__lt_p_gt_1) After scaling and before the scene renders at least one time_co_ you will have to compute the 1st box_t_s world matrix_co_ to get the scaling factors integrated in its transformation._lt_/p_gt__lt_p_gt_2) minimum and maximum are confusing. If you wish to use the bounding box that is calculated using the world matrix_co_ you need to use minimumWorld of the bounding box_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is an example - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WO4DY%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WO4DY#1_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bob Razowsky","Date":"2015-08-04T09:27:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perfect_co_ thank you very much!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-04T17:30:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Minimum and maximum are in obejct space so they won_t_t never change. As Ranaan mentioned_co_ the minimumWorld and maximumWorld are the good to use _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]