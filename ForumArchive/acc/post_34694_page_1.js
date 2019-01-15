[{"Owner":"Ericky14","Date":"2017-12-22T03:49:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI get an error when I try to run the babylon inspector with \n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#1e1e1e_sm_color_dd_#d4d4d4_sm_font-size_dd_12px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_scene_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_debugLayer_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_show_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_()_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tAnd it only happens when I go to the GUI tab.\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#1e1e1e_sm_color_dd_#d4d4d4_sm_font-size_dd_12px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__qt_babylonjs_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#ce9178_sm__qt__gt__qt_3.1.1_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__qt_babylonjs-gui_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#ce9178_sm__qt__gt__qt_^3.1.1_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a3c805ec8423_ScreenShot2017-12-21at10_44_35PM.png.66f3449f9a81c97b79c8d331bcaf3528.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_16352_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a3c805f6502b_ScreenShot2017-12-21at10_44_35PM.thumb.png.059b0fd540355107064545fd46a57edd.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screen Shot 2017-12-21 at 10.44.35 PM.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ericky14","Date":"2017-12-22T15:00:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBump\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t even find the line of code which caused the error on the source code in the installed babylonjs-gui package.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_updateFct_dd_function(){return i._sceneInstrumentation.textureCollisionsCounter.current.toString()}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"haestflod","Date":"2017-12-22T16:17:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI get the same error trying to access the Stats tab._lt_br /_gt_\n\tI do not have babylonjs-gui._lt_br /_gt__lt_br /_gt_\n\tWhat_t_s happening is probably that the inspector since it_t_s loaded from a preview build relies on some function that exists only in 3.2.alpha\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_DebugLayer.InspectorURL _eq_ _t_https_dd_//preview.babylonjs.com/inspector/babylon.inspector.bundle.js_t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-22T17:14:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWould you mind opening an issue for this bug in our repo?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks a lot_co_ I_t_ll make sure to have it fixed\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ericky14","Date":"2017-12-27T13:10:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI created it_co_ I hope I did it in the right place. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Spector.js/issues/84_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Spector.js/issues/84_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-27T17:13:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWe moved it to the right repo _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]