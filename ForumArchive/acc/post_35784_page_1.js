[{"Owner":"kurhlaa","Date":"2018-02-18T17:08:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn a Stackoverflow found an advice to set the mesh variable to _lt_strong_gt_null_lt_/strong_gt_ after the dispose call (to tell the GC he can collect). Something like_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ball.dispose()_sm_\nball _eq_ null_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t... is this needed nowadays or is already implemented in BJS ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-02-18T21:45:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s not BJS specific_co_ but JavaScript and is needed.  As long as there is something in memory pointing at your object then it cannot be released from memory.  If you are creating a lot of objects and not cleaning up then you will get a large memory footprint or memory leak.  The Garbage Collector can_t_t collect objects that have references - it can only collect _qt_garbage_qt_ or unreachable objects.  So_co_ if your ball variable is a reference that leaves scope then it is also cleaned up_co_ so you don_t_t need to set to null.   Good practice to set variables to null and avoid global references._lt_br /_gt_\n\t_lt_br /_gt_\n\tedit_dd_ A disposed mesh it is removed from the scene_co_ so I think you just need to make sure you don_t_t have any references in your own code.  BabylonJS takes care of references in framework for you_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/7112a6542efc8aeb26c8b7b6568c61535716c01a/src/Mesh/babylon.abstractMesh.ts#L1424_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/7112a6542efc8aeb26c8b7b6568c61535716c01a/src/Mesh/babylon.abstractMesh.ts#L1424_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNOTE_dd_ dispose() has two (for AbstractMesh) optional parameters_dd__lt_br /_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#e36209_sm_font-size_dd_12px_sm__qt__gt_doNotRecurse_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#d73a49_sm_font-size_dd_12px_sm__qt__gt_?_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#d73a49_sm_font-size_dd_12px_sm__qt__gt__dd__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#24292e_sm_font-size_dd_12px_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#005cc5_sm_font-size_dd_12px_sm__qt__gt_boolean_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#24292e_sm_font-size_dd_12px_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#e36209_sm_font-size_dd_12px_sm__qt__gt_disposeMaterialAndTextures_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#d73a49_sm_font-size_dd_12px_sm__qt__gt__dd__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#24292e_sm_font-size_dd_12px_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#005cc5_sm_font-size_dd_12px_sm__qt__gt_boolean_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#24292e_sm_font-size_dd_12px_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#d73a49_sm_font-size_dd_12px_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#24292e_sm_font-size_dd_12px_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#005cc5_sm_font-size_dd_12px_sm__qt__gt_false_lt_/span_gt__lt_br /_gt_\n\tSo_co_ you can be more specific when disposing with your intentions.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]