[{"Owner":"juanmajr93","Date":"2017-01-24T17:46:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ I have done a SPS whose some particles have a little transparency and others not. However_co_ I have a problem with particles that I dont want to apply alpha because now they are not solid cube!!. When I enable alpha chanel_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                #spsArquetas.mesh.hasVertexAlpha _eq_ true_sm_ for the solid particle I get this result_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11352_qt_ height_eq__qt_226_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/1.PNG.025fb94a86ab727275378cf91e56328e.PNG_qt_ width_eq__qt_280_qt_ alt_eq__qt_1.PNG_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe result that I want to get is the follow_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11353_qt_ height_eq__qt_217_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/1.PNG.7994d5decd4f9967c322bc4669ce5ba5.PNG_qt_ width_eq__qt_276_qt_ alt_eq__qt_1.PNG_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-01-24T19:02:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s what I explained to you in the PM_dd_ once you enabled the alpha channel_co_ even if the value is 1.0_co_ the vertices aren_t_t z-sorted for performance reasons. The sort is done only at the mesh level.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s why you can sometimes see such weird shapes inside-out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis tutorial is a must-read to understand this _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs the SPS s a single mesh_co_ if you enable particle transparency_co_ you have to accept that this can happen. If you don_t_t want it_co_ you need then to manage two SPS_co_ one with transparent particles_co_ the other with opaque ones.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-24T21:16:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t@jerome ok so I will need to use 2 Sps if there isnt any way to repair this bug. However_co_ performance of my scene is very important and I always try to render the less number of meshes that is posible.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]