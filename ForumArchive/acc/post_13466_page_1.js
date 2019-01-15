[{"Owner":"jdurrant","Date":"2015-03-28T18:22:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I don_t_t know if this is a bug_co_ but I thought I_t_d post about it in case it_t_s helpful to others. When I place an image texture on a plane_co_ the bottom portion of the image _qt_bleeds_qt_ into the top portion. To illustrate_co_ I made a small PNG file that is entirely transparent_co_ except the top row of pixels is red and the bottom row is blue. Here it is rendered on to a plane_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-63009000-1427566542.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-63009000-1427566542.png_qt_ data-fileid_eq__qt_3969_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-13453-0-63009000-1427566542.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can see_co_ there_t_s a bit of blue in the red_co_ and a bit of red in the blue._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To see if this problem was somehow related to transparency_co_ I saved as a jpg too. Same issue_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-34521000-1427566559.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-34521000-1427566559.png_qt_ data-fileid_eq__qt_3970_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-13453-0-34521000-1427566559.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To confirm my theory that this is somehow related to _qt_texture wrapping_co__qt_ I padded the image with a 1px-thick margin on the top and bottom row of the image_co_ and the problem vanished_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-44742600-1427566575.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-44742600-1427566575.png_qt_ data-fileid_eq__qt_3971_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-13453-0-44742600-1427566575.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This isn_t_t so big a deal in most contexts_co_ but there are some cases when it causes noticeable problems. For example_co_ I_t_ve created a grass field using lots of planes and transparent PNGs. Because the bottom row of pixels (not transparent) bleeds just a bit into the top row (fully transparent)_co_ a ton of lines end up hovering above the grass_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-07296400-1427566610.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-07296400-1427566610.png_qt_ data-fileid_eq__qt_3972_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-13453-0-07296400-1427566610.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is especially noticeable when the texture dimensions are small._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve seen this _qt_bleeding texture_qt_ issue in both Firefox and Chrome_co_ on Mac OS X. I_t_d appreciate any additional suggestions beyond padding the textures with transparent margins. Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-03-28T19:27:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have to admit this is really weird_co_ I have never experienced that._lt_/p_gt__lt_p_gt_Did a little test_co_ using the perfectly fitting dutch flag_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//raananweber.com/img/flag.png_qt_ alt_eq__qt_flag.png_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There are no bleeding edges_co_ it seems like a normal plan with the correct texture._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What version of babylon are you using?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-03-28T20:35:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just a guess_co_ but are the .png_t_s dims a power of 2?  It is not a requirement as of OpenGL 2.0 (WebGL is a derivative of 2.0)_co_ but that seems like a reason that you might get this_co_ but nobody else does._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]