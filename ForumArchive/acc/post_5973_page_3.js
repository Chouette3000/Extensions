[{"Owner":"garidan","Date":"2014-11-21T14:00:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can put any html element in front of your viewports_co_ with the proper z-index_co_ and _qt_decorate_qt_ them._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"garidan","Date":"2014-11-21T14:17:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI updated my code_dd_ it didn_t_t work on smartphones because hardwareScaling was not considered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI added an HTML div where to write debug info while dragging.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow it_t_s ok in iPhone and Android phone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn my Android 4.4 Moto G it_t_s too small and you can only move the blue cube_co_ on Iphone it is small the same but you can drag and drop the other solids too_co_ don_t_t know why ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI noticed in the playground now there is babylon.js built on 20 november which in this example has a bug_co_ not found in build of 16 november_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen 2 meshes are one over the other_co_ it_t_s picked the lower one and not the visible one_co_ when picking from the top view viewport (upper right).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my local _lt_span style_eq__qt_font-size_dd_14.3999996185303px_sm__qt__gt_16 november build it works correctly._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14.3999996185303px_sm__qt__gt_Do I have to file a issue ?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1PA7HW%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1PA7HW#17_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-11-21T16:30:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_AS far as I_t_m concern there is no difference related to picking between these versions. Can you do a compare between your version and the current one?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-11-21T16:40:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh I saw that you are using fast check_dd__lt_/p_gt__lt_p_gt_scene.pick(mouse.x_co_ mouse.y_co_ function (mesh) { return mesh !_eq__eq_ ground &amp_sm_&amp_sm_ mesh.draggable_sm_ }_co__lt_u_gt__lt_strong_gt_true_lt_/strong_gt__lt_/u_gt__co_targetCamera)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Fast check returns the first mesh found not the nearest_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]