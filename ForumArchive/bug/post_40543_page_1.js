[{"Owner":"JohnnyDevNull","Date":"2018-10-09T20:39:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDear Developers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have the following Error after updating from 3.2.0 BayblonJS to 3.3.0_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ERROR in node_modules/babylonjs/babylon.d.ts(8665_co_5)_dd_ error TS2717_dd_ Subsequent property declarations must have the same type.  Property _t_leftBounds_t_ must be of type _t_number[]_t__co_ but\nhere has type _t_Float32Array | number[]_t_.\nnode_modules/babylonjs/babylon.d.ts(8666_co_5)_dd_ error TS2717_dd_ Subsequent property declarations must have the same type.  Property _t_rightBounds_t_ must be of type _t_number[]_t__co_ but here has type _t_Float32Array | number[]_t_._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI have no idea to fix that_co_ seems it is a error in the type definition?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLink to the project_dd_ _lt_a href_eq__qt_https_dd_//github.com/JohnnyDevNull/ng-babylon-template_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/JohnnyDevNull/ng-babylon-template_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk downgrade to 3.2.0 also doesn_t_t work... don_t_t know how this compiled before...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-09T21:00:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Johnny\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou may need to use Typescript 3.0\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnnyDevNull","Date":"2018-10-09T21:02:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs not possible with Angular 6.x_co_ but ok then i have to downgrade to a stable babylonjs version for TS 2.9.2 and wait until angular 7 is released. There is typescript 3.x supported...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnnyDevNull","Date":"2018-10-09T21:12:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh ok i found the problem_co_ my package.json version scope did install 3.3.0. In 3.2.0 everything is fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFixed that until angular 7 arrives...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-09T22:38:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk excellent!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]