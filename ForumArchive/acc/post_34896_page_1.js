[{"Owner":"BlackMojito","Date":"2018-01-05T14:29:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIs there an easy way to render a static 2D background? Like in Threejs_co_ we can pass a texture as the _qt_clear color_qt_ for each frame.\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a4f8b1d574a4_ScreenShot2018-01-05at8_02_53PM.png.0bade0ae7ddcba81c68d660ac91afcbe.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_16512_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a4f8b1e61ec6_ScreenShot2018-01-05at8_02_53PM.thumb.png.a901a8f4b86416e5fd58ad304e1aac87.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screen Shot 2018-01-05 at 8.02.53 PM.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2018-01-05T16:42:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I_t_d go this way\n_lt_/p_gt_\n\n_lt_p_gt_\n\tClear color with alpha _eq_ 0_co_ and image set behind the canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#XLEWBL_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#XLEWBL_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut there_t_s some odd cuts ^^ Maybe there_t_s a built-in method ? Never heard about it...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-01-05T16:45:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOr layer_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1SWPNU%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1SWPNU#9_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-01-05T16:47:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can also use a BABYLON.Layer _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_new BABYLON.Layer(_qt_myBackground_qt__co_ _qt_textures/grass.jpg_qt__co_ scene_co_ true)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#SY1R8P_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#SY1R8P_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_Edit_sm_  _lt_/em_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12295-mariang/_qt_ rel_eq__qt__qt__gt_@MarianG_lt_/a_gt_ beat me to it _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2018-03-19T08:46:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_200442_qt_ data-ipsquote-contentid_eq__qt_34896_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515170539_qt_ data-ipsquote-userid_eq__qt_25742_qt_ data-ipsquote-username_eq__qt_SvenFrankson_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2018/1/6 at 12_dd_42 AM_co_ SvenFrankson said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi_co_ I_t_d go this way\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tClear color with alpha _eq_ 0_co_ and image set behind the canvas.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#XLEWBL_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#XLEWBL_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBut there_t_s some odd cuts ^^ Maybe there_t_s a built-in method ? Never heard about it...\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt seems that the background does not work anymore?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]