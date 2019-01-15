[{"Owner":"The Snow Irbix","Date":"2017-08-30T16:06:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHellooo !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was trying to improve my little voxel engine with the tuto here _dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/optimizing_your_scene_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/optimizing_your_scene_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBabylon.js uses an advanced and automatic shaders engine. This system will keep shaders up to date regarding material options. If you are using a static material (ie. an immutable material) then you can let it know to Babylon.js by using the following code_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt_material_lt_/span_gt__lt_span_gt_.freeze_lt_/span_gt_()_sm_\n_lt_/code_gt__lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I came with a bug that causes my boxes to disappear when I freeze the material and move the camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI recreated it in the PG _dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#NXU14G_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#NXU14G_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you move the camera so the center of the cube is not in the frustum culling anymore_co_ all instances seem to disappear _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote that this bug only occurs when working with instances_co_ if you replace\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let instance _eq_ box.createInstance(_t__t_+x+y+z)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tby\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let instance _eq_ box.clone(_t__t_+x+y+z)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tit works well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan someone help me or explain me why I can_t_t freeze the material when working with instances ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-30T20:33:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately this is a known limitation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut with the recent updates we did on the material_co_ you should not see a big improvements but using freeze(). \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Snow Irbix","Date":"2017-08-31T12:14:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you for your reply ! Indeed there is not much performance difference_co_ so I will do without.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]