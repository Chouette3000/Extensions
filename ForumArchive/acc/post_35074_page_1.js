[{"Owner":"ozRocker","Date":"2018-01-15T06:25:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m using Blender exporter 5.5\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a mesh that has a bunch of materials.  I exported to Babylon.js format but all the textures got merged into one texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI researched further and discovered that I had 5 materials but only 2 _qt_UV Map_qt_ entries.  I added a new _qt_UV Map_qt_ entry for each material and assigned their textures to use that UV map_co_ but it didn_t_t make a difference.  Is there something I_t_m forgetting to do?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-01-15T08:56:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you on Blender Render or Cycles ? On Cycles_co_ the exporter make automatic baking_co_ on Blender render this can happen when a texture is assigned on _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/blender#textures_qt_ rel_eq__qt_external nofollow_qt__gt_multiple influences_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout UV channels_co_ you_t_re limited to 2 channels_co_ and you certainly doesn_t_t have to make one channel per material. One use case could be UV1 for texture tiling_co_ UV2 for lightmapsn and they both can be used by all object materials.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-15T08:58:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_201369_qt_ data-ipsquote-contentid_eq__qt_35074_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516006603_qt_ data-ipsquote-userid_eq__qt_20526_qt_ data-ipsquote-username_eq__qt_V!nc3r_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 minutes ago_co_ V!nc3r said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAre you on Blender Render or Cycles ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m using Blender Render.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know what to do to preserve the multiple textures.  They all get merged into one.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-01-15T09:00:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCould you share your blend file_co_ or at least one object from this file ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-15T09:38:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_201371_qt_ data-ipsquote-contentid_eq__qt_35074_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516006851_qt_ data-ipsquote-userid_eq__qt_20526_qt_ data-ipsquote-username_eq__qt_V!nc3r_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t44 minutes ago_co_ V!nc3r said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCould you share your blend file_co_ or at least one object from this file ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSure thing mate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//preview.punkoffice.com/maddie.zip_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//preview.punkoffice.com/maddie.zip_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is one armature and one blend shape in there called _qt_pout_qt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-01-15T10:32:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTry to include alpha directly in your diffuse texture_co_ multiple influence assignation generate baking at export_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_MHpWW5sw3kAX.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_400_qt_ src_eq__qt_https_dd_//framapic.org/J2mnmv8FJptG/MHpWW5sw3kAX.jpg_qt_ width_eq__qt_396_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t(also_co_ off-topic point_co_ take care about transforms data_co_ they_t_re need to be cleaned_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_FX4L2YIt0F06.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_340_qt_ src_eq__qt_https_dd_//framapic.org/0hoCtekuQ5Q0/FX4L2YIt0F06.png_qt_ width_eq__qt_562_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-15T10:40:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tcrap! I forgot to apply transformations\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-15T16:51:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think 2 two UV limit is a .babylon format limit_co_ ( and obviously a blender issue by extension ).  The number of UV_t_s in BJS is 6_co_ as I recall.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-01-15T16:53:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOK_co_ I doesn_t_t known that !\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-15T21:56:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSo do I have too many materials?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-16T16:54:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn a given material slot_co_ you may not have more than one type of a texture of the same type of influence.  If you were building the code your self_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var mat _eq_ new BABYLON.StandardMaterial(blah_co_ blah_co_ blah)_sm_\nvar tex1 _eq_ new BABLYON.Texture(blah_co_ blah_co_ blah)_sm_\nvar tex2 _eq_ new BABLYON.Texture(blah_co_ blah_co_ blah)_sm_\nmat.diffuseTexture _eq_ tex1_sm_\nmat.diffuseTexture _eq_ tex2_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis will never work.  You also have a useless PunkOffice material.  Your teeth_co_ eyes_co_ tongue have duplicate textures with different names.  Every inefficient.  The Teeth is the error though. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou may use the texture for more than one type of influence.  Intensity &amp_sm_ color both translate to diffuse.  FYI_co_ things in the _qt_Image Sampling_qt_ have no meaning in BJS.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-01-17T08:21:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGot it!  My materials were messy and the double textures was unnecessary. I_t_ve cleaned it up and the textures are fine now. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]