[{"Owner":"Pryme8","Date":"2016-08-20T20:03:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThere is nothing wrong with your model or BJS. you need to recalculate your normals... please see my first response._lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/nothing_wrong.jpg.8bd18ef51a96f384efc440fe6890700e.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9127_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/nothing_wrong.thumb.jpg.569f902b2733262f16de76160eae69c7.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_nothing_wrong.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-21T06:16:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tu just skip the mlt file_co_ not a big deal_co_ no need to recompute anything _lt_br /_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#27EM1D%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#27EM1D#1_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tjust give this a try_lt_/span_gt_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/24229-loaded-object-always-flat-shaded/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-08-21T08:12:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23152-dams/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23152_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23152-dams/_qt_ rel_eq__qt__qt__gt_@Dams_lt_/a_gt_ I had taken your file and exported with a Hemi light knowing the normals were correct (as I posted above). Tonight I went back and looked at your file - then I noticed the object scaling was a little extreme  -Yscale 50x Zscale ( see image below). So my mind said_co_  _qt_what happens if I apply the scale?_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe answer is in the second image below A - Unapplied Scale_co_  B- Applied Scale. It seems that applying that extreme scale solved the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I did replace your light with a Hemi - but nothing else has changed. If you want to try yourself my file  with the scale unapplied is in the link below. Open the Blender file and export. Then apply the scale and export again with a slightly different name. Open each one in the BJS Sandbox\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/dams/TestSubSurf04_scale.blend_qt_ rel_eq__qt_external nofollow_qt__gt_TestFile_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSame as before - in Blender applied the Subsurf Modifier first_co_ recalculated normals outside_co_ checked the normals_co_ then turned on backfaceculling  - everything looked fine _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe difference between the two babylon Sandbox renders - seems to be  the scale issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_9130_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/scale1.png.e042e339a6f75f026e874d42f3dd1c80.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_scale1.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9130_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/scale1.png.e042e339a6f75f026e874d42f3dd1c80.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_9131_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/scale2.png.a1733458a4861a1b8e9da491a60d7e8e.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_scale2.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9131_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/scale2.thumb.png.b392774ca21f924097de2a88695d908b.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-21T15:48:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI should upload my model validator_co_ that would of saved a lot of conversation.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-21T20:58:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\ti went back few pages in the forum_co_ the first guy who run into this was back in 1851_co__lt_br /_gt__lt_br /_gt_\n\tits a miss leading marketing strategy of the most 3d model warehouses _lt_strong_gt_pbr obj download_lt_/strong_gt_._lt_br /_gt_\n\tobj supports reflective material_co_ therefor babylonjs does not_co__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/extensions/OBJ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/extensions/OBJ_lt_/a_gt_ the very end of the pages addresses this kind of problem. _lt_br /_gt__lt_br /_gt_\n\tyou could also strip the 2-3 lines of code from the the _t_mlt file_co_ its text format_co_ pure javascript skills_co_ should work here_co_ - check if is some mirror material definition is applied._lt_/span_gt__lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23152-dams/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23152_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23152-dams/_qt_ rel_eq__qt__qt__gt_@Dams_lt_/a_gt_ what is this thing ?_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dams","Date":"2016-08-22T08:06:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ Really good job ! I applied the scale under Blender (Ctrl+A in Blender &gt_sm_ Apply Scale) and it solves my problem !!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much to everyone thats helps me to fix the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee you_t_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]