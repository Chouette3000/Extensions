[{"Owner":"reddozen","Date":"2014-01-11T15:34:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_My scene loads a little slow_co_ so the gravity on the camera it taking effect before the ground loads and I_t_m falling forever... lol_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How can I set the gravity after all my scene elements have fully loaded?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-11T18:35:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can set the camera.checkCollisions _eq_ false and wait for the scene to be ready_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-01-11T19:09:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_well_co_ got it to work... but as soon as gravity comes on and you_t_re walking_co_ the FPS drops from 45 to 6... completely unusable._lt_/p_gt__lt_p_gt_any suggestions?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-14T01:49:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_it seems like your ground is a complex mesh right? You need to create some invisible but simple impostors if you need to achieve a certain performance_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-01-14T14:32:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Got ya... I_t_ll work on something for that._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]