[{"Owner":"satguru","Date":"2016-04-28T14:58:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInstance of mulitmaterial mesh does not render properly on some hardware\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UFKIN_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UFKIN_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe MultiMaterial part starts at line 81\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis renders fine on my PC. My PC has a dedicated graphics card\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis does not render well on my laptop. My laptop does not have a dedicated graphics card\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn my laptop it appears as in the attached screenshot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/screenshot.jpg.87774db56e800b288fa9ef9161a23b0a.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7463_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/screenshot.thumb.jpg.2e7782c2f999db933ce55a746ef6ca22.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_screenshot.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-28T16:07:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you try without the instance? Just to check where the problem is\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2016-04-28T16:43:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tworks fine without instance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee below\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Screenshot2.png.8b853bfe73812fe920d2409ad2610916.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7465_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Screenshot2.thumb.png.655155cc6e4d47f7d807313bbb97fd59.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screenshot2.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Samuel Girardin","Date":"2016-04-28T16:53:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI encountered this problem with ff\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/16075-instances-multimaterial-with-firefox-windows/?do_eq_embed&amp_sm_embedComment_eq_91009&amp_sm_embedDo_eq_findComment#comment-91009_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2016-04-28T17:00:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/2211-samuel-girardin/?do_eq_hovercard_qt_ data-mentionid_eq__qt_2211_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/2211-samuel-girardin/_qt_ rel_eq__qt__qt__gt_@Samuel Girardin_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI checked your example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSame issue in chrome and firefox\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Screenshot3.jpg.8b5cadeb1ce07b83ba350f4a0e5cfa52.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7466_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Screenshot3.thumb.jpg.975414b90d2d123df8d52e5132fdd426.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screenshot3.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2016-04-28T17:17:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tif it_t_s anyhelp\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlaptop_dd_ DELL LATITUDE E6420 \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.cnet.com/products/dell-latitude-e6420/specs/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.cnet.com/products/dell-latitude-e6420/specs/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tos_dd_ windows 7 enterprise\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbrowser _dd_ chrome_dd_ Version 50.0.2661.75 m\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-28T22:46:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you check with debug layer is instances are hardware accelerated?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2016-04-28T22:54:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thow do i check that?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Samuel Girardin","Date":"2016-04-29T10:47:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOn my side_co_ that_t_s ok for ff. Only need to update to the latest version. Renderer in both case is unknonw.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/ff43.jpg.2b73ddf41f88a18b5deef8203f0e0098.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7474_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/ff43.jpg.2b73ddf41f88a18b5deef8203f0e0098.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_ff43.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/ff46.jpg.fb4b4bf872c1d98fea2d0ac59bf97b63.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7475_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/ff46.jpg.fb4b4bf872c1d98fea2d0ac59bf97b63.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_ff46.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2016-04-29T14:20:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok I see where this info is. Never noticed the scroll bar in the statistics windows _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tinstances are hardware accelerated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is what i see\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Screenshot4.jpg.6f36c5a00aeb86081bbcd4479078e60e.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7481_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Screenshot4.thumb.jpg.3176ac673c22ac288a9780b91fa1a693.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screenshot4.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2016-04-29T14:38:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI updated to Firefox version 45. works fine there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tworks fine on IE 11 too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tupgraded chrome to 50.0.2661.94 m but no luck _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-29T15:50:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tseems to be related to a driver issue _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2016-04-29T20:48:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou are probably right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease ignore for now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-29T22:55:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSorry about that..\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]