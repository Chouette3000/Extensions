[{"Owner":"Michael Ilyin","Date":"2017-02-13T15:40:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello. Is it possible by default to render sprite instead mesh at some LOD level?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-13T21:04:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello unfortunately this is not supported now. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut....you can define a quad mesh at desired LOD level and set it to use Billboard.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-02-14T05:28:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25605_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/_qt_ rel_eq__qt__qt__gt_@Michael Ilyin_lt_/a_gt__lt_br /_gt_\n\tyou can use a custom shader\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf_lt_/a_gt__lt_br /_gt_\n\tvec4 texture2D(sampler2D sampler_co_ vec2 coord_co__lt_strong_gt_ float bias_lt_/strong_gt_)_lt_br /_gt__lt_br /_gt_\n\tCombined\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/28340-fog-is-closer-at-center-of-view/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tIf you have less idea how to handel shaders. We can ask _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\the probability can write you a nice wrapper function. But it also depends on what you need_co_ as a trigger for LOD hard coded or distance related. ect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#1XWASD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#1XWASD#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood Luck \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Michael Ilyin","Date":"2017-02-14T09:41:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163283_qt_ data-ipsquote-contentid_eq__qt_28417_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487019853_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello unfortunately this is not supported now. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBut....you can define a quad mesh at desired LOD level and set it to use Billboard.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tUnfortunately_co_ LOD mesh inherits transformation from main and billboard not working for it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Michael Ilyin","Date":"2017-02-14T09:47:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_163335_qt_ data-ipsquote-contentid_eq__qt_28417_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487050105_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25605_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/_qt_ rel_eq__qt__qt__gt_@Michael Ilyin_lt_/a_gt__lt_br /_gt_\n\t\t\tyou can use a custom shader\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf_lt_/a_gt__lt_br /_gt_\n\t\t\tvec4 texture2D(sampler2D sampler_co_ vec2 coord_co__lt_strong_gt_ float bias_lt_/strong_gt_)_lt_br /_gt__lt_br /_gt_\n\t\t\tCombined\n\t\t_lt_/p_gt_\n\t\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/28340-fog-is-closer-at-center-of-view/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you have less idea how to handel shaders. We can ask _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\the probability can write you a nice wrapper function. But it also depends on what you need_co_ as a trigger for LOD hard coded or distance related. ect.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#1XWASD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#1XWASD#1_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tGood Luck \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI don_t_t understand_co_ shader for what? I mean I think about rendering 2D image (sprite is first I think about) instead of 3D mesh when camera is far away from some object.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-02-14T10:12:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25605_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/_qt_ rel_eq__qt__qt__gt_@Michael Ilyin_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Shading_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//en.wikipedia.org/wiki/Shading_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat you are request is not implemented yet. You have to find a creative workaround. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25605_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/_qt_ rel_eq__qt__qt__gt_@Michael Ilyin_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit would help the community if you make a little playground _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/_lt_/a_gt__lt_br /_gt_\n\tso your request / the missing feature would become more clearer and its highly that you will find support_co_ probably a working example that you can use in a real world project\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-14T12:18:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tChallenge is Accepted _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2017-02-14T12:38:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25605_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25605-michael-ilyin/_qt_ rel_eq__qt__qt__gt_@Michael Ilyin_lt_/a_gt_  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_table-layout_dd_fixed_sm_width_dd_1473px_sm_line-height_dd_1.6_sm_color_dd_rgb(39_co_42_co_52)_sm_font-size_dd_14px_sm_margin-bottom_dd_20px_sm_margin-top_dd_0px_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\tHello. Is it possible by default to render sprite instead mesh at some LOD level? _lt_br /_gt__lt_br /_gt_\n\t\tI_t_m sorry_co_ i kind of misunderstand your request. The Keywords are_dd_ render sprite mesh LOD level\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\tDeltakosh understand it_co_ so you got your answer\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\tAnd i got i wrong. NasimiAsl seems already have a prototype in his head._lt_br /_gt__lt_br /_gt_\n\t\tI need break. _lt_br /_gt__lt_strong style_eq__qt_font-weight_dd_bold_sm__qt__gt__lt_/strong_gt_\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-14T12:50:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ Actually i don_t_t try fix LOD for sprite i try to make new sprite in GeometryBuilder with LOD system\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut i see some limitation \n_lt_/p_gt_\n\n_lt_p_gt_\n\thow many face we can make in sprite system? any one try 100K ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-02-14T13:16:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tstep 1_dd_ make geometry \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QC9DP%2380_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1QC9DP#80_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t300*300 _eq_ 90k(face) - animation+ rotation in GPU side \n_lt_/p_gt_\n\n_lt_p_gt_\n\twithout LOD (yet )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QC9DP%2382_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1QC9DP#82_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t600*600 _eq_ 360k \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]