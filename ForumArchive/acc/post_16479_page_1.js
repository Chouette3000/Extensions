[{"Owner":"Statics","Date":"2015-08-14T15:53:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ I_t_ve done quite a bit of improvement on my pool game since it was last posted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#T2I6X%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#T2I6X#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was wondering if anyone knows a way to keep the balls from moving so much? It seems that they don_t_t stop regardless of how long I wait. I tried messing around with the friction settings but that didn_t_t seem to change much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ is there a way to make the hit detection on the holes more accurate? The balls disappear before they actually touch them in most cases.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for all the help so far!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Statics","Date":"2015-08-14T16:25:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So I tried messing around in the debug mode_co_ and when I turned the bounding boxes on the cue ball moved differently than the rest of the balls._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The cue ball appears to slide along the ground while the rest of the balls roll around. Any idea why this is happening?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-08-14T17:27:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI played around with it a little and got the balls to slow down.  You will probably need to tweak it some more.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#T2I6X%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#T2I6X#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvelThreshold _eq_ .3_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#T2I6X%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#T2I6X#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Statics","Date":"2015-08-14T18:08:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks!_lt_/p_gt__lt_p_gt_I actually set it to 1.5_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-08-14T18:19:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tvelThreshold _eq_ .2\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdampAngVel _eq_ .98\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#T2I6X%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#T2I6X#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\traised the restitution of the balls a little\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#T2I6X%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#T2I6X#10_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]