[{"Owner":"Pawan Jadhav","Date":"2016-06-23T08:48:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCurrently we are using threeJS to render webgl content.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is what i do _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe have  _lt_span style_eq__qt_color_dd_rgb(128_co_128_co_128)_sm_font-family_dd_Arial_co_ Helvetica_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_20px_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(13_co_13_co_13)_sm__qt__gt_Jupiter Tesselation_lt_/span_gt_  formated files_co_ we convert these files to Json format. We are able to load these JSON files into threeJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut i couldn_t_t see any option in babylon where i can load these JSON files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee attached JSON files\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_8326_qt__gt_1.json_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_8327_qt__gt_2.json_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-23T15:30:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello the file seems pretty easy to load. There is no support per se of this format.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an example of how to create a mesh from similar data_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1H7L5C%2319_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1H7L5C#19_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pawan Jadhav","Date":"2016-06-24T04:49:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks. I will give a try_co_ will let you know.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-06-27T14:01:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I wrote a partial 3 JS importer and thought that I could add on to use your file as well but ran into an issue. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes 1.json load into Three js ? Looking at the faces array the format looks wrong. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_faces_qt__dd_[_lt_br /_gt_\n\t         80_co_ 0_co_ 1_co_ 2_co_ 0_co_ 0_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t80 means index to face color_co_ but you have only one color and yet there are several indices. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t    _qt_colors_qt__dd_[_lt_br /_gt_\n\t        3355443_lt_br /_gt_\n\t    ]_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the code to decode it. \n_lt_/p_gt_\n\n_lt_table style_eq__qt_border-spacing_dd_0px_sm_border-collapse_dd_collapse_sm_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Helvetica_co_ arial_co_ nimbussansl_co_ liberationsans_co_ freesans_co_ clean_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_13px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_18.2px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_tbody_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt_if_lt_/span_gt_ ( hasFaceVertexColor ) {\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_18px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm_border-style_dd_solid_sm_border-color_dd_rgb(238_co_238_co_238)_sm_border-width_dd_0px 1px 0px 0px_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_18px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm_border-style_dd_solid_sm_border-color_dd_rgb(238_co_238_co_238)_sm_border-width_dd_0px 1px 0px 0px_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt_for_lt_/span_gt_ ( i _lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt__eq__lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm__qt__gt_0_lt_/span_gt__sm_ i _lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt_&lt_sm__lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm__qt__gt_3_lt_/span_gt__sm_ i _lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt_++_lt_/span_gt_ ) {\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_18px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm_border-style_dd_solid_sm_border-color_dd_rgb(238_co_238_co_238)_sm_border-width_dd_0px 1px 0px 0px_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_18px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm_border-style_dd_solid_sm_border-color_dd_rgb(238_co_238_co_238)_sm_border-width_dd_0px 1px 0px 0px_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\tcolorIndex _lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt__eq__lt_/span_gt_ faces[ offset _lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt_++_lt_/span_gt_ ]_sm_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_18px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm_border-style_dd_solid_sm_border-color_dd_rgb(238_co_238_co_238)_sm_border-width_dd_0px 1px 0px 0px_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm__qt__gt_face_lt_/span_gt_._lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm__qt__gt_vertexColors_lt_/span_gt_._lt_span style_eq__qt_color_dd_rgb(0_co_134_co_179)_sm__qt__gt_push_lt_/span_gt_( _lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt_new_lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(121_co_93_co_163)_sm__qt__gt_THREE.Color_lt_/span_gt_( colors[ colorIndex ] ) )_sm_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_18px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm_border-style_dd_solid_sm_border-color_dd_rgb(238_co_238_co_238)_sm_border-width_dd_0px 1px 0px 0px_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_18px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm_border-style_dd_solid_sm_border-color_dd_rgb(238_co_238_co_238)_sm_border-width_dd_0px 1px 0px 0px_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t}\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_18px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm_border-style_dd_solid_sm_border-color_dd_rgb(238_co_238_co_238)_sm_border-width_dd_0px 1px 0px 0px_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td style_eq__qt_padding_dd_0px 10px_sm_width_dd_50px_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_line-height_dd_18px_sm_text-align_dd_right_sm_vertical-align_dd_top_sm_border-style_dd_solid_sm_border-color_dd_rgb(238_co_238_co_238)_sm_border-width_dd_0px 1px 0px 0px_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_padding_dd_0px 10px_sm_vertical-align_dd_top_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_color_dd_rgb(51_co_51_co_51)_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t\t}\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(167_co_29_co_93)_sm__qt__gt_new_lt_/span_gt_ _lt_span style_eq__qt_color_dd_rgb(121_co_93_co_163)_sm__qt__gt_THREE.Color_lt_/span_gt_( colors[ colorIndex ] would explode because there is only one color in the file. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pawan Jadhav","Date":"2016-06-28T05:04:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI could load this using threeJS\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-06-28T18:32:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have to figure out how that works. When I looked at the raw code it doesn_t_t make sense. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will be able to look more into this tomorrow. Have some other work that is pressing. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]