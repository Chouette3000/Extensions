[{"Owner":"BlackMojito","Date":"2017-12-19T09:15:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI took a quick look at the source code and it seems that we have no way to update only one element of an uniform array? Just like below..\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_ul style_eq__qt_background-color_dd_#222222_sm_color_dd_#ffffff_sm_font-size_dd_12px_sm_text-align_dd_left_sm__qt__gt__lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#f3efb2_sm__qt__gt_// in JavaScript at init time_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#c397d8_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ someVec2Element0Loc _lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ gl_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_getUniformLocation_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_someProgram_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#b9ca4a_sm__qt__gt__qt_u_someVec2[0]_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#c397d8_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ someVec2Element1Loc _lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ gl_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_getUniformLocation_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_someProgram_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#b9ca4a_sm__qt__gt__qt_u_someVec2[1]_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#c397d8_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ someVec2Element2Loc _lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ gl_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_getUniformLocation_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_someProgram_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#b9ca4a_sm__qt__gt__qt_u_someVec2[2]_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#f3efb2_sm__qt__gt_// at render time_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_gl_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_uniform2fv_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_someVec2Element0Loc_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_[_lt_/span_gt__lt_span style_eq__qt_color_dd_#45e7a6_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#45e7a6_sm__qt__gt_2_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_])_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#f3efb2_sm__qt__gt_// set element 0_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_gl_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_uniform2fv_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_someVec2Element1Loc_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_[_lt_/span_gt__lt_span style_eq__qt_color_dd_#45e7a6_sm__qt__gt_3_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#45e7a6_sm__qt__gt_4_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_])_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#f3efb2_sm__qt__gt_// set element 1_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_gl_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_uniform2fv_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_someVec2Element2Loc_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_[_lt_/span_gt__lt_span style_eq__qt_color_dd_#45e7a6_sm__qt__gt_5_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#45e7a6_sm__qt__gt_6_lt_/span_gt__lt_span style_eq__qt_color_dd_#7ecce0_sm__qt__gt_])_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#eaeaea_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#f3efb2_sm__qt__gt_// set element 2_lt_/span_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell I need to hack like this...\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ locs _eq_ engine.getUniforms(material.getEffect()._program_co_ [_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__t_test1[0]_t__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_])_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_engine.setFloat3(locs[_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_]_co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1.0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-12-19T10:31:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnother problem I found was that there was no setInt() in class Engine...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-19T20:54:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello_co_ are you using the engine directly or are you using the ShaderMaterial? For the latter we can definitely add the required API for you\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-12-20T01:40:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_199085_qt_ data-ipsquote-contentid_eq__qt_34642_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513716882_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello_co_ are you using the engine directly or are you using the ShaderMaterial? For the latter we can definitely add the required API for you\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah I am using ShaderMaterial_co_ and also the CustomMaterial made by NasamiAsl. I am just hacking by using engine directly. If you add such API_co_ that would be super cool!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-12-20T01:51:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_199085_qt_ data-ipsquote-contentid_eq__qt_34642_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513716882_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello_co_ are you using the engine directly or are you using the ShaderMaterial? For the latter we can definitely add the required API for you\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSo for now if I would like to use uniform int_co_ I should use an float instead and cast it to float in the shader (for workaround)?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-12-20T03:42:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed2165109616_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/34167-setfloat-work-for-booleans/?tab_eq_comments&amp_sm_do_eq_embed&amp_sm_comment_eq_196137&amp_sm_embedComment_eq_196137&amp_sm_embedDo_eq_findComment#comment-196137_qt__gt__lt_/iframe_gt_\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-12-20T10:34:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#UXCB15%2323_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#UXCB15#23_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor customMaterial\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_material.getEffect().setArray3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__t_test1_t__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_[ _lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// fs vec3 _lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0._lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0._lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// sc vec3_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_1_co__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0._lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0._lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_])_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tnotice  array struct for vec3[2]\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-20T18:46:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPlease feel free to open an issue to describe your need so I won_sm_t forget about it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-12-21T03:46:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_199190_qt_ data-ipsquote-contentid_eq__qt_34642_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513795616_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tPlease feel free to open an issue to describe your need so I won_sm_t forget about it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSure. It is logged at _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3432_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3432_lt_/a_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-21T18:05:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWill work on it asap!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]