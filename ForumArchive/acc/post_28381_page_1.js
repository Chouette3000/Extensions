[{"Owner":"juanmajr93","Date":"2017-02-12T01:06:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi this is my heightmap where blue area is the lowest and orange color is the heightest. However_co_ babylonJS interprets the orange/red color to the lowest zone like blue area. How can change this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/heightmapInicio3.png.3dd57bd77806fb755089dbffc0988ac7.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11597_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/heightmapInicio3.png.3dd57bd77806fb755089dbffc0988ac7.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_heightmapInicio3.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-12T01:14:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe heigtmap are textures with colors of black and gray.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/height_map_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/height_map_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_worldHeightMap.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_500_qt_ src_eq__qt_http_dd_//www.babylonjs.com/tutorials/14%20-%20Height%20map/worldHeightMap.jpg_qt_ width_eq__qt_1000_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-02-12T13:13:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you use the _t_Black and White_t_ filter in Photoshop_co_ you can adjust the strength of all colors_co_ like the blue_co_ orange_co_ green etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis took literally 5 seconds_co_ and I_t_m sure there is something in GiMP that creates the same result if you prefer a free application.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/heightmapInicio3.png.3dd57bd77806fb755089dbffc0988ac7.png.31e7242265cb94010b657ab43fffd256.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11606_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_02/heightmapInicio3.png.3dd57bd77806fb755089dbffc0988ac7.png.31e7242265cb94010b657ab43fffd256.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_heightmapInicio3.png.3dd57bd77806fb755089dbffc0988ac7.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-02-12T14:05:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tElse you can also change the default behavior here _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.vertexData.ts#L1410_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.vertexData.ts#L1410_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-02-13T13:46:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just added the ability to define your own color filter _dd_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt_var filter _eq_ new BABYLON.Color3(1.0_co_ 0.5_co_ 0.2)_sm_ \nBABYLON.MeshBuilder.CreateGroundFromHeightMap(_t_m_t__co_ url_co_ {colorFilter_dd_ filter})_sm__lt_/code_gt__lt_/pre_gt_\n\n\t_lt_p_gt_\n\t\tThe ability to change the way the gradient to elevate the ground altitude is computed._lt_br /_gt_\n\t\tDefault _dd_ _lt_em_gt_Color3(0.3_co_ 0.59_co_ 0.11)_lt_/em_gt_ as usual grey gradient.\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tJust wait this PR is merged in the core_co_ please. \n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-02-13T17:56:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyeah! _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ I did it. I used Photoshop to change the image that is the same that you posted. I was my solution. Good advice _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]