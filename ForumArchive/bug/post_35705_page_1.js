[{"Owner":"Hersir","Date":"2018-02-14T14:33:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen I dispose  null engine after unit test get error_sm_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// before unit test\nvar engine _eq_ new NullEngine()_sm_\nvar scene _eq_ new Scene(engine)_sm_\n\n// after unit test is executed\nengine.dispose()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_pre_gt_\n_lt_code_gt_TypeError_dd_ Cannot read property _t_deleteProgram_t_ of undefined\n      \n      at NullEngine.Object.&lt_sm_anonymous&gt_sm_.Engine._deleteProgram (node_modules/babylonjs/dist/preview release/babylon.max.js_dd_9898_dd_26)\n      at NullEngine.Object.&lt_sm_anonymous&gt_sm_.Engine.releaseEffects (node_modules/babylonjs/dist/preview release/babylon.max.js_dd_11840_dd_22)\n      at NullEngine.Object.&lt_sm_anonymous&gt_sm_.Engine.dispose (node_modules/babylonjs/dist/preview release/babylon.max.js_dd_11874_dd_18)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tUsing_dd_ 3.1.1 babylon\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-14T16:44:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is fixed in 3.2\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-02-15T06:41:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]