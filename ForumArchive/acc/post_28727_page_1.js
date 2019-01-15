[{"Owner":"RobiNERD","Date":"2017-02-27T19:13:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey so I wanted to know how to decide a resolution to render to and then downscale the render_sm_ specifically get the user_t_s screen width_co_ *3 and then scale it down to /3 to get a subpixel effect_co_ using 3 times more available pixels (also if probably causing artifacts). I don_t_t even know if this method works so i would really know how to do this/a working method. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-02-28T08:48:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThere is engine.setHarwaresScalingLevel(0.333)_sm__lt_br /_gt_\n\tBut. the anti-aliasing quality does not worth it (still looks bad)._lt_br /_gt_\n\tThe rendering cost is so high_co_ If I switch this on with my UHD screen_co_ it even hangs windows 10_co_ no other program can do this _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tIf any post-processing is switched on_co_ the default built-in MSAA in the browser switches off._lt_br /_gt_\n\t(It only works if rendering directly to the frame buffer)_lt_br /_gt_\n\tThis looks awful._lt_br /_gt__lt_br /_gt_\n\tThe best would be somehow implement TAA (Temporal Anti Aliasing)_lt_br /_gt_\n\t _lt_a href_eq__qt_https_dd_//threejs.org/examples/webgl_postprocessing_taa.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//threejs.org/examples/webgl_postprocessing_taa.html_lt_/a_gt__lt_br /_gt_\n\tThree.js does it and looks really good with very little cost._lt_br /_gt_\n\tI tried_co_ but failed_co_ I really don_t_t know (yet) how to render the camera jittering by subpixels._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2017-02-28T14:05:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt is possible to implement TAA with BabylonJs. I did it already. You can see it here_dd_ _lt_a href_eq__qt_https_dd_//box.pcon-solutions.com/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//box.pcon-solutions.com/_lt_/a_gt__lt_br /_gt_\n\tFor the jittering you have to generate your own camera projection matrix._lt_br /_gt_\n\tI can_t_t give you the source code of my implementation because this is a commercial project._lt_br /_gt__lt_br /_gt_\n\tRendering a higher resolution and downsample it is very easy._lt_br /_gt_\n\tHere is a playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1DEDHH%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1DEDHH#0_lt_/a_gt__lt_br /_gt_\n\tIn line 30 i create a postprocess which renders 4 times bigger._lt_br /_gt_\n\tThe other 2 postprocesses are used to downsample it.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-28T16:26:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16973-kesshi/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16973_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16973-kesshi/_qt_ rel_eq__qt__qt__gt_@Kesshi_lt_/a_gt__co_ I would have love to get a PR on this one _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]