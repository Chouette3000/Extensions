[{"Owner":"unicomp21","Date":"2016-10-02T12:30:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHas anyone used xnormal mikkt space normal maps and ambient occlusion maps in babylonjs?  I_t_m getting artifacts in babylonjs which aren_t_t visible in the xnormal viewer.  It_t_s almost like the normals aren_t_t getting interpolated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-03T15:04:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do you use them? through a custom shader?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-10-04T08:00:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNo_co_ no customer shader_co_ just using the StandardMaterial.  Added a couple screen shots.  Polygons are visible in babylon.\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/xnormal.jpg.a983afd9a603afa09503138b78f4ed6e.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9717_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/xnormal.thumb.jpg.4d6e8c29dbecd6f43e7034e18e038e86.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_xnormal.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/babylon.jpg.c81473fbf91341d5f0c827f9c590a396.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9718_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/babylon.thumb.jpg.1703696eb004ff214a96fa00e125dd96.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_babylon.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-10-04T08:18:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyou need Make a normal Map\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-10-04T08:24:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat screenshot is with both the ambient occlusion and normal maps.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-10-04T08:45:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tso what is the problem now _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-10-04T09:03:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe quads are highly visible in babylon_co_ but not in xnormal viewer.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-04T17:04:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhere do you set the ambiant occlusion (As we do not support it in the standard shader _dd_))\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-10-04T23:15:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere_t_s my code_co_ it all seems to work_co_ but chunky looking in the bump texture.  Again_co_ looks good in xnormal viewer_co_ but not in babylonjs.\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-family_dd__t_Courier New_t__sm_font-size_dd_9pt_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_var _lt_/span_gt__lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_material _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_new _lt_/span_gt_BABYLON.StandardMaterial(_lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_material1_qt__lt_/span_gt__co_ scene)_sm_\n_lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_var _lt_/span_gt__lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_ext _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_.png_qt__lt_/span_gt__sm_\n_lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_material_lt_/span_gt_._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_bumpTexture _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_new _lt_/span_gt_BABYLON.Texture(_lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_geometry/meta_balls_normals_qt_ _lt_/span_gt_+ _lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_ext_lt_/span_gt__co_ scene)_sm_\n_lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_material_lt_/span_gt_._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_ambientTexture _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_new _lt_/span_gt_BABYLON.Texture(_lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_geometry/meta_balls_occlusion_qt_ _lt_/span_gt_+ _lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_ext_lt_/span_gt__co_ scene)_sm_\n_lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_//material.diffuseTexture _eq_ new BABYLON.Texture(_qt_geometry/metaballs_vcols_qt_ + ext_co_ scene)_sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_mesh_root_lt_/span_gt_._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_material _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_material_lt_/span_gt__sm_\n_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-10-04T23:16:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tbtw_co_ commenting out the bumpTexture_co_ I can see the ambient texture.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-05T17:31:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthe bump texture as to be a normal map like this_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Samples/blob/master/Assets/normalMap.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Samples/blob/master/Assets/normalMap.jpg_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-10-08T10:32:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe normal map indicated above appears to be mikkt space_co_ ie same as Blender_co_ which is the same format I_t_m exporting from xnormal.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-10-08T10:35:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tattached and my bump and ambient occlusion maps\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/meta_balls_normals.png.5d89b205ec0a78d9a9226db2bd5e553a.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9768_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/meta_balls_normals.thumb.png.89dd550966dcf2d75390a1389e096602.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_meta_balls_normals.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/meta_balls_occlusion.png.aae04c52d219f7e73fa46d1055c652f5.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9769_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/meta_balls_occlusion.thumb.png.6bfb686052276c3f0909638759302d5e.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_meta_balls_occlusion.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-10-08T10:36:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tand here is the low poly model ...\n_lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9770_qt__gt_meta_balls_lowpoly_quad.obj_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-10T16:29:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSure but this does not help a lot _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Can you create a repo on the Playground? (But basically_co_ this should work if UV are exported correctly)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2016-10-11T08:01:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk_co_ will do.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]