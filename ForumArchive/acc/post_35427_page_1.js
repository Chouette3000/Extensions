[{"Owner":"HoloLite","Date":"2018-02-02T01:45:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI noticed that when viewed inside the vr headset it_t_s easy to notice the jagged lines of meshes like boxes_co_ rectangles_co_ lines_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe same scene looks perfectly fine (no jagged lines whatsoever) when viewed inside desktop browser.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter experimenting with several approached_co_ I found the following codes which enable anti aliasing. With it I am seeing much smoother lines. Other anti aliasing enabling codes do not seem to work for vr. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wonder if perhaps there is a better approach to improve the smoothing further. How is this impacting the frame/sec rate ? Please advise. Thank you!\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this._vrHelper.onEnteringVR.add((vrHelper_dd_ BABYLON.VRExperienceHelper_co_ eventState_dd_ BABYLON.EventState) _eq_&gt_sm_ {\n    let defaultPipeline _eq_ new BABYLON.DefaultRenderingPipeline(_qt_default_qt__co_ true_co_\n        this.scene_co_ [vrHelper.vrDeviceOrientationCamera_co_ vrHelper.webVRCamera_co_\n        vrHelper.vrDeviceOrientationCamera])_sm_\n    defaultPipeline.fxaaEnabled _eq_ true_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-02T17:06:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya HoloLite._lt_br /_gt_\n\t_lt_br /_gt_\n\tI did a _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_jaggy%20VR&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_16_co_28_co_29_co_30_co_31_qt_ rel_eq__qt__qt__gt_forum search for jaggy + VR_lt_/a_gt_.  The 4th hit...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/31515-state-of-anti-aliasing-in-vr-rigs/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/31515-state-of-anti-aliasing-in-vr-rigs/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...looks interesting.  Particularly... Deltakosh_t_s post with the playground demo_dd_    \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AWFJV8_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AWFJV8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 30-32...\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    // Set samples to distortion postprocesses_dd_\n    camera.leftCamera.rigPostProcess.samples _eq_ 4_sm_\n    camera.rightCamera.rigPostProcess.samples _eq_ 4_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tMaybe helpful_co_ maybe not.  The 2nd hit looks interesting_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep us posted_co_ stay tuned... smarter people than I... are nearby.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-02-02T18:37:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI did play with calling the Engine ctor with both true or false like the following_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(53_co_60_co_65)_sm_font-family_dd_Roboto_co_ _t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_    _lt_strong_gt_new BABYLON.Engine(canvas_co_ _lt_/strong_gt__lt_/span_gt__lt_strong_gt__lt_strong style_eq__qt_background-color_dd_transparent_sm_color_dd_rgb(53_co_60_co_65)_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_700_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt__lt_span style_eq__qt_color_dd_rgb(192_co_57_co_43)_sm__qt__gt_true_lt_/span_gt__lt_/strong_gt__lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(53_co_60_co_65)_sm_font-family_dd_Roboto_co_ _t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_)_sm_ // tried false too_lt_/span_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(53_co_60_co_65)_sm_font-family_dd_Roboto_co_ _t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_But either case does not solve the jagged lines in vr_co_ which btw are very noticeable._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(53_co_60_co_65)_sm_font-family_dd_Roboto_co_ _t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_I also tried deltakosh suggestion on some old thread to enable anti-aliasing using FXAA like_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    _lt_strong_gt_var fxaa _eq_ new BABYLON.FxaaPostProcess(_qt_fxaa_qt__co_ 2.0_co_ camera)_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis also did not help in vr mode.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems like the default settings for vr camera is not optimized at all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo far enabling the anti-aliasing in the default pipeline when vr mode is being entered (codes showed previously) is the only effective way to do it. If other knows better techniques please let me know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn general_co_ I also want to hear other _t__lt_strong_gt_optimal settings for vr_t__lt_/strong_gt_ in babylonjs that would give the best rendering and perf.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-02T18:52:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe fxaa of the default pipeline is the same as the fxaa you mentioned\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you make sure that the fxaa is applied to the WebVRCamera?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-02-02T22:46:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ I tried your suggestion_co_ here is the actual code I used (as compared to the previous one which is commented out here)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ this._vrHelper.onEnteringVR.add((vrHelper_dd_ BABYLON.VRExperienceHelper_co_ eventState_dd_ BABYLON.EventState) _eq_&gt_sm_ {\n                /*\n                let defaultPipeline _eq_ new BABYLON.DefaultRenderingPipeline(_qt_default_qt__co_ true_co_ this.scene_co_ [vrHelper.vrDeviceOrientationCamera_co_ vrHelper.webVRCamera_co_ vrHelper.vrDeviceOrientationCamera])_sm_\n                defaultPipeline.fxaaEnabled _eq_ true_sm_\n                defaultPipeline.imageProcessing.contrast _eq_ 2.0_sm_\n                */\n                new BABYLON.FxaaPostProcess(_qt_fxaa_qt__co_ 2.0_co_ this.vrHelper.webVRCamera)_sm_\n            })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tJust to make sure I went back and forth between the 2 implementations and the results are consistent though_co_ the FxaPostProcess approach does not solve the jagged lines for vr. If there are any steps I might_t_ve missed_co_ let me know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-02T23:21:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCould you try to repro the issue in the playground? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf so_co_ I_t_ll make it work\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-02-02T23:44:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Ok I will try. I know only typescript_co_ I am not a real web developer _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut this is certainly doable. Will ping you when it_t_s ready.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-06T22:15:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-02-08T23:14:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the playground_co_ I am able to repro it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#0IFDHU%2316_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#0IFDHU#16_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCurrently the approach A (lines 16-18) is being used and it does a bit of smoothing on the jagged lines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you try approach B_co_ you will see that the jagged lines look worse.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe most interesting is that the whole jagged line issue actually starts to appear as soon as you enable teleportation. So please also try to disable the teleport (line 11) and you will see that you won_t_t see jagged lines issues (well only a bit). Is this a potential issue with teleport ? I would rather have the issues fixed by teleportation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-09T18:10:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk so it is definitely linked to teleportation (see your other post)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe will make sure to remove that issue\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]