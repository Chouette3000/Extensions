[{"Owner":"F3/*X","Date":"2018-11-18T09:18:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDear Forum\n_lt_/p_gt_\n\n_lt_p_gt_\n\t I found the babylonjs models on my computer don_t_t look not as good as on the iphone_co_ so i tested the resolution_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMacbook 12_qt_ (2304 x 1440px)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPixel ratio_dd_ 1\n_lt_/p_gt_\n\n_lt_p_gt_\n\trender height_dd_ 714\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcanvas height_dd_ 714\n_lt_/p_gt_\n\n_lt_p_gt_\n\twindow.devicePixelRatio_dd_ 2\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tiphone 8 4.7_qt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPixelRatio_dd_ 1\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRenderHeight_dd_ 1393\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCanvasHeight_dd_ 1393\n_lt_/p_gt_\n\n_lt_p_gt_\n\twindow.devicePixelRatio_dd_ 2\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t-\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso my iphone is haft the physical size and double the screen resolution_co_ thats absurd no? Is it possible that the retina display of my macbook was not recogniced by the browser? \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti tried_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar scene _eq_ new BABYLON.Scene(engine)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tengine.setHardwareScalingLevel(0.5)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut nothing changes. Is there a way to detect all retina displays and boost the resolution?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"F3/*X","Date":"2018-11-18T10:02:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsorry - the _qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_engine.setHardwareScalingLevel(0.5)_sm__qt_ was just not working_co_ because i forgot the _qt__sm__qt_. Now it_t_s all good. - looks way better..._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_engine.setHardwareScalingLevel(0.5)_sm__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_﻿_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-11-18T17:49:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235234_qt_ data-ipsquote-contentid_eq__qt_41351_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542532737_qt_ data-ipsquote-userid_eq__qt_32521_qt_ data-ipsquote-username_eq__qt_F3/*X_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ F3/*X said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIs there a way to detect all retina displays and boost the resolution?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi F3/*X - Welcome to the forum!!  There_t_s an optional 4th parameter when you create the engine to do this automatically.  It defaults to false._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.engine#constructor_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/api/classes/babylon.engine#constructor_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tThe code in the Engine constructor that handles this for you is here_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Engine/babylon.engine.ts#L1165_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Engine/babylon.engine.ts#L1165_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_const devicePixelRatio _eq_ Tools.IsWindowObjectExist() ? (window.devicePixelRatio || 1.0) _dd_ 1.0_sm_\n\nvar limitDeviceRatio _eq_ options.limitDeviceRatio || devicePixelRatio_sm_\nthis._hardwareScalingLevel _eq_ adaptToDeviceRatio ? 1.0 / Math.min(limitDeviceRatio_co_ devicePixelRatio) _dd_ 1.0_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIf you don_t_t set adaptToDeviceRatio to true in Engine constructor_co_ then you may want to account for other devicePixelRatios.  I am on a laptop right now with a devicePixelRatio of 2.5 _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"F3/*X","Date":"2018-11-19T07:02:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\toh great_co_ thanks! Just one _qt_true_qt_ more for the engine constructor and all is set _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]