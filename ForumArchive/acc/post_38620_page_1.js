[{"Owner":"babbleon","Date":"2018-07-04T05:53:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone know why I get the error _t_Earcut was not found_co_ the polygon will not be built._t_ when using BABYLON.MeshBuilder.ExtrudePolygon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created a PG with the exact same function_co_ but on the PG it works fine_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3DDQSZ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3DDQSZ_lt_/a_gt_ ...click on the plane to create a shape.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt does not work in my code though which is annoying.. here_t_s the error_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BJS - [06_dd_47_dd_49]_dd_ Earcut was not found_co_ the polygon will not be built.\n\nUncaught TypeError_dd_ i is not a function\n    at t.build (babylon.js_dd_44)\n    at Function.t.CreatePolygon (babylon.js_dd_32)\n    at Function.t.ExtrudePolygon (babylon.js_dd_32)\n    at r.scene.onPointerDown (scene.js_dd_60)\n    at r._processPointerDown (babylon.js_dd_12)\n    at HTMLCanvasElement._onPointerDown (babylon.js_dd_13)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThank you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2018-07-04T05:58:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEarcut is no longer included in the babylon.js build. Its optional. You have to include it manually in your project._lt_br /_gt_\n\tJust download the _qt_earcut.min.js_qt_ from here _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist _lt_/a_gt_and add it to your project.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-07-04T06:00:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16973-kesshi/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16973_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16973-kesshi/_qt_ rel_eq__qt__qt__gt_@Kesshi_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorted!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]