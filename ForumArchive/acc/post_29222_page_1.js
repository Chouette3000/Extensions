[{"Owner":"BangTao","Date":"2017-03-21T09:48:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried to create a ball and let it intersect with a custom mesh_co_but it didn_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#17141O%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#17141O#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr the method _qt_balloon2.intersectsMesh(plan2_co_ true)_qt_ at _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?10_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/?10_lt_/a_gt_(line 69) is only used with _qt_BoundingBox_qt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hunts","Date":"2017-03-21T12:45:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25175_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25175-bangtao/_qt_ rel_eq__qt__qt__gt_@BangTao_lt_/a_gt_ console.log(balloon2.intersectsMesh(customMesh)) returns true_co_ what are you really trying to do_co_ please kindly specify.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers hunts_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-21T12:52:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNope...in my PG_dd__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#17141O%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#17141O#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe balloon2.material.emissiveColor changed before it _lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_intersects customMesh ...and i have set the second param as true.... _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt__qt_balloon2.intersectsMesh(plan2_co_ true)_qt__lt_/code_gt__lt_/pre_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_it_t_s not a right result!_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_@hunts_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-03-21T14:04:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tintersectsMesh only works when the bounding boxes of the meshes intersect. This PG _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#17141O%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#17141O#2_lt_/a_gt_ shows the bounding boxes and when the balloon changes color relative to the bounding boxes.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]