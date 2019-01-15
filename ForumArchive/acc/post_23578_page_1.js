[{"Owner":"PeapBoy","Date":"2016-07-02T23:48:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi amazing Babylon community ! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tI_t_m working with BabylonJS for only 3 weeks_co_ so I have still a lot to learn and I have so many questions ! Before all_co_ thanks for your work._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tCurrently_co_ I_t_m working on an easy normal depth shader and I have exactly the same problem as _lt_a href_eq__qt_https_dd_//forum.processing.org/two/discussion/3250/how-to-store-information-in-the-alpha-channel_qt_ rel_eq__qt_external nofollow_qt__gt_this guy_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tActually_co_ I want to use this shader as a pass to store information into a normalDepthTexture I_t_ll then pass to my final fragment shader._lt_br /_gt_\n\tStoring normal data into rgb components of gl_FragColor works great_co_ but anything stored into alpha channel will be blended or something like that._lt_br /_gt_\n\tI tried setting needAlphaTesting / needAlphaBlending but it does not solve the problem. In the thread above_co_ the solution is to use use blendMode(REPLACE) but I don_t_t know how to do that in Babylon._lt_br /_gt__lt_br /_gt_\n\tHere a PR to reproduce my issue _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LNXGT%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LNXGT#11_lt_/a_gt__lt_br /_gt_\n\tTo see the difference_co_ at lines 29 and 47_co_ change the _t_a_t_ component to _t_r_t_ component by commenting / uncommenting the relevant part of the shader._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tThank you all ! _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-03T19:02:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi _dd_ welcome to froum\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti don_t_t understand correctly your task \n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee this sample _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1HECPU%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1HECPU#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti am on your post try to understand problem\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2016-07-04T08:17:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Nasimi !_lt_br /_gt__lt_br /_gt_\n\tSorry_co_ I should have been more precise_sm_ _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tIn the PR_co_ in the first shader I do this _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_gl_FragColor.a _eq_ vDepth.x / vDepth.y_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo_co_ I_t_m just storing the depth value in the alpha channel of gl_FragColor. Because I want to create a depth sampler I_t_ll use in another shader (I could also use scene.enableDepthRenderer to get a depth sampler but here I want to do it myself)._lt_br /_gt__lt_br /_gt_\n\tIn the second shader_co_ I take this depth sampler and I do this _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_float depth _eq_ texture2D(normalDepthSampler_co_ vUV).a_sm_\ngl_FragColor _eq_ vec4(depth_co_ depth_co_ depth_co_ 1.0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tJust to see the result. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//imgur.com/HDsS0wZ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//imgur.com/HDsS0wZ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tNow_co_ if I comment these lines and if I replace them by these _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_gl_FragColor.r _eq_ vDepth.x / vDepth.y_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t... in the first shader (storing in the red channel rather than the alpha channel)._lt_br /_gt_\n\tAnd _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_float depth _eq_ texture2D(normalDepthSampler_co_ vUV).r_sm_\ngl_FragColor _eq_ vec4(depth_co_ depth_co_ depth_co_ 1.0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t... in the second shader to see the result. You can see that the result is different._lt_br /_gt__lt_a href_eq__qt_http_dd_//imgur.com/zxRsMsF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//imgur.com/zxRsMsF_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tThat means that depth information isn_t_t stored in the same way in rgb and alpha channel. There is blending of the value in alpha channel or something like that. But that_co_ I_t_m sure you already knew it. _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tSo here comes in my question _dd__lt_em_gt_ is there any way in BabylonJS to disable this blending ?_lt_/em_gt__lt_br /_gt_\n\tI do not want my value to be altered_co_ just pass them from one shader to another using the texture created by the first one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tI looked at your PR_co_ I don_t_t really understand because I never used _qt_eash_qt_. Is it your own creation ? (I saw it on your github _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt_)_lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tThank you very much for considering my question !_lt_br /_gt__lt_br /_gt_\n\tUPDATE _dd_ wrong link for the first image _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-07-04T08_dd_42_dd_03Z_t_ title_eq__t_07/04/2016 08_dd_42  AM_t_ data-short_eq__t_2 yr_t__gt_July 4_co_ 2016_lt_/time_gt_ by PeapBoy_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Wrong image link\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-04T08:33:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_134908_qt_ data-ipsquote-contentid_eq__qt_23578_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1467620244_qt_ data-ipsquote-userid_eq__qt_22373_qt_ data-ipsquote-username_eq__qt_PeapBoy_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 minutes ago_co_ PeapBoy said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI looked at your PR_co_ I don_t_t really understand because I never used _qt_eash_qt_. Is it your own creation ? (I saw it on your github _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt_)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tit is old version of shaderBuilder\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust notice the out put\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy point is that r u want have Depth texture  behind of surface on surface ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-07-04T08:42:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello_lt_br /_gt__lt_br /_gt_\n\ti_t_m just interested in this topic_co_ cant wait to start using shaders_co_ i already using 3% of babylonjs_co_ so it might take a while._lt_br /_gt_\n\ti can_t_t see any pictures._lt_br /_gt_\n\ti also have google it_co_ and one guy on stackoverflow said_co_ that the problem is_co_ - you can use gl_Fragcolor only once_co_ the second call will be ignored. just tested it_co_ - it looks like this._lt_br /_gt_\n\talso big fan processing_lt_br /_gt__lt_br /_gt_\n\tI following this topic. excited of results._lt_br /_gt__lt_br /_gt_\n\tBest\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/shader-alpha.JPG.eb492078153d35a94a24931a41b89d2e.JPG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8464_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/shader-alpha.JPG.eb492078153d35a94a24931a41b89d2e.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_shader-alpha.JPG_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/shader-rgb.JPG.e658617bf0b2184f94c561bd3843d09c.JPG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8465_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/shader-rgb.JPG.e658617bf0b2184f94c561bd3843d09c.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_shader-rgb.JPG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-04T08:45:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twait for me i make my sample for you\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2016-07-04T08:55:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou_t_re too fast for me guys ! _lt_img alt_eq__qt__dd_lol_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ title_eq__qt__dd_lol_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_134909_qt_ data-ipsquote-contentid_eq__qt_23578_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1467621202_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 minutes ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tmy point is that r u want have Depth texture  behind of surface on surface ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMy plane (used to display the result of the shader) is arbitrarily located ahead of the cube I use._lt_br /_gt_\n\tSo_co_ not sure to understand your question_co_ but no_co_ I don_t_t necessarily want to see what_t_s behind my plane on my plane._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_134910_qt_ data-ipsquote-contentid_eq__qt_23578_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1467621774_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 minutes ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\ti can_t_t see any pictures.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSorry_co_ I failed. _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2016-07-04T09:02:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_i also have google it_co_ and one guy on stackoverflow said_co_ that the problem is_co_ - you can use gl_Fragcolor only once_co_ the second call will be ignored. just tested it_co_ - it looks like this._lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMmh strange_co_ I can_t_t see any difference when calling gl_FragColor only once in each shader_co_ like this _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_gl_FragColor _eq_ vec4(vNormal_co_ vDepth.x / vDepth.y)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tRather than in two lines.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-07-04T12:06:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello i_t_m just experimenting_lt_br /_gt__lt_br /_gt_\n\ti get a different result if set the alpha value .1 with two gl_GLFragcolor it behaves much different. when setting the alpha to 0.1_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LNXGT%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LNXGT#12_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tso did i understand u correctly_co_ you want_co_ when i comment/uncomment the lines that the second example should looks like the first one ?_lt_br /_gt__lt_br /_gt_\n\tBest_lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ Don_t_t go too crazy. I_t_ll wait. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/shaderunikkk.png.e76aaf8974539da9046a292ea779939d.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8473_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/shaderunikkk.png.e76aaf8974539da9046a292ea779939d.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_shaderunikkk.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2016-07-04T12:25:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Nabroski No problem_co_ thank you for helping me _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tYes_co_ you_t_re totally right_co_ I want to tell WebGL to behave the same for red and alpha channel. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_134927_qt_ data-ipsquote-contentid_eq__qt_23578_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1467634002_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 minutes ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\ti get a different result if set the alpha value .1 with two gl_GLFragcolor it behaves much different. when setting the alpha to 0.1_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LNXGT%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LNXGT#12_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNot enough experimented to understand why alpha does _qt_bright_qt_ the diffuse color when _qt_needAlphaTesting_qt_ or _qt_needAlphaBlending_qt_ is set to false. _lt_img alt_eq__qt__dd_mellow_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_mellow.png_qt_ title_eq__qt__dd_mellow_dd__qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]