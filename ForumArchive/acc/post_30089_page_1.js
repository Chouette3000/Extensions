[{"Owner":"usoban","Date":"2017-04-28T15:53:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve modeled a simple terrain in Blender_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- ground is a mesh which has been _qt_lowered_qt_ in certain areas with Proportional editing tool_lt_br /_gt_\n\t- water is a simple plane_lt_br /_gt__lt_br /_gt_\n\tI also have a _qt_sun_qt_ light placed in the scene in Blender. I_t_ve checked _qt_check collisions_qt_ and _qt_freeze world matrix_qt_ in the Babylon properties for both ground and water.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow in Blender_co_ all is good. But when I load the scene in BJS_co_ I get the result attached in image (lowered ground areas get no lightning apparently).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anybody point me towards the problem? Don_t_t know whether its connected to lightning in BJS or is it Blender related._lt_br /_gt_\n\tThanks.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/lightning.png.ac6813424553d3bbbc26bef9b8e6e164.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12770_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/lightning.thumb.png.bb8dbef15a6cc4d380d77011f553dc4f.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_lightning.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-04-28T16:02:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\the misses a light at your scene.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-04-28T18:27:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26758-usoban/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26758_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26758-usoban/_qt_ rel_eq__qt__qt__gt_@usoban_lt_/a_gt_ Welcome to the forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIit is hard to say where the problem lies from your pictures. Below is a simple scene I created_co_ exported from Blender and viewed in the sandbox.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created it using the description you give - it seems fine (no ugly black areas).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnly difference is I had no texture for the water - so it is just a simple _qt_blue_qt_ material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen replying to people having problems with Blender export_co_ I always suggest though _lt_u_gt_that they post the .blend file._lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMuch easier to figure out issues.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/terrain1.png.bce9fc0cae0174354e3d2b984a464ffa.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12776_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/terrain1.png.bce9fc0cae0174354e3d2b984a464ffa.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_terrain1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"usoban","Date":"2017-05-03T18:23:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ thank you for checking out!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was able to get better result with hemispheric light.  I_t_ve also tried with directional light in BJS_co_ but got the same result as with _qt_Sun_qt_ light in Blender (I guess the exporter converts _qt_Sun_qt_ light into directional light anyway).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo for now I_t_ve sticked with hemi light_co_ however I still get a little bit darker areas in the lower parts of the terrain (which does not happen in your example image).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy would hemi and directional light produce such a different result?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve attached the Blender file and both textures in the attachment below if you find the time to check it out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_12828_qt__gt_map_w_bridge.blend_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/sand.jpg.7e7190ec65e345a0000068ae01e9219a.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12829_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/sand.thumb.jpg.fde4703e26903a968f11a7bdb79d4eba.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_sand.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/water.jpg.de83706de2413177bf2fc79ab06bc955.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12830_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/water.thumb.jpg.58901416a1bb3e059334a87794e46ab5.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_water.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-05-03T18:31:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCould you create a playground with your example. Maybe this is a problem of material you use. It_t_s hard to see from an image that can be the problem.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2017-05-04T08:16:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen you share a .blend_co_ pack your textures (file &gt_sm_ external data &gt_sm_ pack).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ don_t_t forget to apply transform on meshes (3dview &gt_sm_ object &gt_sm_ apply &gt_sm_ scale is the most important).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre you under Cycles when you export ? _t_cause it looks like you have a baked texture on your ground on your BJS scene_co_ with dark areas due to precalculated lighting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I export directly from your .blend_co_ no issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-05-08T15:29:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26758-usoban/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26758_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26758-usoban/_qt_ rel_eq__qt__qt__gt_@usoban_lt_/a_gt_ TY for your .blend file _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe first image below is a close up of part of your _qt_river_qt_ in the Solid and Edit mode with _qt_Face Select_qt_ activated (*the faces have black dots where the normals are).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have coloured some of the quads red_co_ green and blue. Notice the red and green quads have _lt_strong_gt_no _lt_/strong_gt_black dots and that some of the quads around them are darker grey.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis suggests problems with the normals. A closer look at these red_co_ green and blue quads indicate that they are _qt_bent_qt_ - no longer flat - and the green ones are stretched.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI noticed that you used _qt_Proportional Editing_qt_ to produce the _qt_river_qt_ - you might want to try _qt_Sculpting_qt_ the river bed instead - which is what I actually did - as described below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Step 1. _lt_/strong_gt_Create a plane mesh and subdivide it - I ended up with ~ 3000 quads.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Step 2_lt_/strong_gt_. Go into _qt_Sculpt_qt_ mode and use the settings in the second image below. Star with the _qt_Draw_qt_ brush (A) _co_ Use Subtract (B)_co_ turn off any _qt_Symmetry Lock_qt_ (C). and _qt_Lock_qt_ the X and Y coordinates of the mesh (D). This last step will prevent quad _qt_stretching_qt_ which is seen in your method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Step 3. _lt_/strong_gt_Export your mesh and see what it looks like.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf there are all those ugly black patches - go back into _qt_Sculpt_qt__co_ Switch to the _qt_Smooth_qt_ brush and apply it to areas which should not be black. Re-export and check your mesh again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf this does not fix the issue - try triangulating the quads and re-export.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd as a final step you might have to flip the way some quads have been triangulated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow about black areas you should expect to see with a Directional Light. The third image below which uses the above Sculpt methods_co_ your textures_co_ and a single Directional Light at the top right corner of the scene. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have included a simple sphere(A) to show the impact of that light. Note the side of the sphere closest to the light is illuminated - the other side is dark. With the terrain_co_ the mesh faces pointing towards the light are illuminated (B)_co_ while those faces not facing directly towards the light are dark (C). You should expect _lt_u_gt_some_lt_/u_gt_ of this type of _qt_shadowing_qt_ with this type of light. If you add a Hemispherical light you can reduce the impact - a photographer_t_s _qt_Fill_qt_ light \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps. I was going to post this last Thursday - but The forum had a DDoS attack and then moved to a new server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/aterrain1.png.6818c17b504e1ea776eaa02cabe92187.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12884_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/aterrain1.png.6818c17b504e1ea776eaa02cabe92187.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_aterrain1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/sculpt1.png.5890834e931339d31431e4e4fa5dda9d.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12885_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/sculpt1.thumb.png.5146c4e0a0963c9ac8cb21ecd7b54cad.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_sculpt1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/sculpt2.png.2ecc8b8e4ff4ccc52f6e07c27eb592cd.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12886_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/sculpt2.png.2ecc8b8e4ff4ccc52f6e07c27eb592cd.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_sculpt2.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]