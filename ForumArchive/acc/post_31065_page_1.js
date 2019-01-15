[{"Owner":"max123","Date":"2017-06-14T10:40:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I reliably read running scene_t_s framerate?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I output to console values of engine.fps_co_ it gives me heartwarming 59-60fps. However_co_ visually my Babylon app runs at 7-8fps at most!_lt_br /_gt_\n\tWhere_t_s the catch?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe reason I need this is to disable certain features if framerate drops below 30fps for like 5-10 ticks. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr is there a better way to detect slower devices?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2017-06-14T13_dd_23_dd_12Z_t_ title_eq__t_06/14/2017 01_dd_23  PM_t_ data-short_eq__t_1 yr_t__gt_June 14_co_ 2017_lt_/time_gt_ by max123_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-06-14T11:17:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot directly related to question but you can also try _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/how_to_use_sceneoptimizer_qt_ rel_eq__qt_external nofollow_qt__gt_Scene Optimizer_lt_/a_gt_ to maintain frame rate.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-06-14T11:24:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_engine_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#6f42c1_sm__qt__gt_getFps_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_()._lt_/span_gt__lt_span style_eq__qt_color_dd_#6f42c1_sm__qt__gt_toFixed_lt_/span_gt__lt_span style_eq__qt_color_dd_#24292e_sm__qt__gt_()_lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2017-06-14T12:42:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26231_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/_qt_ rel_eq__qt__qt__gt_@Hersir_lt_/a_gt__co_ yep_co_ I_t_m aware of Scene Optimizer but will need more control (e.i. dispose _lt_em_gt_some_lt_/em_gt_ meshes or disable _lt_em_gt_certain_lt_/em_gt_ effects if needed).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt__co_ yep_co_ that_t_s essentially what I_t_m using at the moment_co_ minus the .toFixed() bit - makes no difference. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2017-06-14T13:24:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry guys_co_ it_t_s me being an idiot again_dd_ I have 5 devices all linked to Browsersync and somehow managed to read framerate from a wrong device!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-14T16:19:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tLOL...good catch _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]