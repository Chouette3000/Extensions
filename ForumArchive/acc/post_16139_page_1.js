[{"Owner":"Gerente","Date":"2015-08-01T18:21:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Any idea how to change the Mouse cursor on mouse over?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21YCLG_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21YCLG_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-08-01T20:29:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Eh_co_ what do you want to change it to? to make it change automatically_co_ set the mesh to be pickable._lt_/p_gt__lt_p_gt_This is a cleaner version of what you did - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21YCLG%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21YCLG#1_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gerente","Date":"2015-08-02T00:36:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_91348_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16139_qt_ data-ipsquote-username_eq__qt_RaananW_qt_ data-cite_eq__qt_RaananW_qt_ data-ipsquote-timestamp_eq__qt_1438460999_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Eh_co_ what do you want to change it to? to make it change automatically_co_ set the mesh to be pickable._lt_/p_gt__lt_p_gt_This is a cleaner version of what you did - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21YCLG%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21YCLG#1_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t understand what change you did. When the mouse is over the sphere I want a _qt_MOVE_qt_ cursor_co_ when it leaves it need to go back to the _qt_DEFAULT_qt__co_ but for some reason the _qt_hand_qt_ cursor is overwriting any cursor that you assign in the Action function._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-08-02T19:04:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21YCLG%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21YCLG#2_lt_/a_gt__lt_/p_gt__lt_p_gt_There must be some better way of doing it_co_ but hey - I love those little hacks _dd_-)_lt_/p_gt__lt_p_gt_The scene itself is changing the pointer_co_ and there is no way internally to change this function. So registering an after-render function is a safe way to solve it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gerente","Date":"2015-08-02T23:37:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_91426_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16139_qt_ data-ipsquote-username_eq__qt_RaananW_qt_ data-cite_eq__qt_RaananW_qt_ data-ipsquote-timestamp_eq__qt_1438542242_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21YCLG%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21YCLG#2_lt_/a_gt__lt_/p_gt__lt_p_gt_There must be some better way of doing it_co_ but hey - I love those little hacks _dd_-)_lt_/p_gt__lt_p_gt_The scene itself is changing the pointer_co_ and there is no way internally to change this function. So registering an after-render function is a safe way to solve it._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the idea_co_ I will see if I use it_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kemal UÇAR","Date":"2016-10-11T18:06:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnew way for that maybe helps someone _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  thanks for DK\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPG _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21YCLG%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21YCLG#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-10-11T18:27:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tindeed_co_ there _lt_strong_gt_scene.hoverCursor_lt_/strong_gt_ to change the cursor value.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kemal UÇAR","Date":"2016-10-11T18:56:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTY Dad72 _sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti searched many topics and found solution here _co_ but no PG _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ then add newone for helping\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif works ways not very important .\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kemal UÇAR","Date":"2016-10-20T18:17:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMicrosoft Edge Browser dont support .png file types for cursor in Babylon scene _sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti tested in Chrome ok_co_ Firefox ok_co_ but Edge not_co_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tif convert .png to .cur file type its working\n_lt_/p_gt_\n\n_lt_p_gt_\n\t( pls test this PG  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21YCLG%235_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm_text-decoration_dd_underline_sm_background-color_dd_rgb(255_co_255_co_255)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_http_dd_//www.babylonjs-playground.com/#21YCLG#5_lt_/a_gt_  )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]