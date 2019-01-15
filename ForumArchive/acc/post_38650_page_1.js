[{"Owner":"abhivaidya","Date":"2018-07-05T11:33:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am loading an OBJ file but generally it appears a bit dark. However_co_ if I turn off the Ambient texture or the Diffuse texture channel from the inspector_co_ it seems to be _qt_lit_qt_ enough.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny idea why this happens and if through code I need to turn off the channels how can I do it?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-07-05T12:06:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can check what textures are be4ing loaded in the .mtl file and manipulate them correctly after the .obj is loaded.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe it is a matter of lighting? Want to share images_co_ or better yet - a scene?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-07-05T18:48:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23468_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/_qt_ rel_eq__qt__qt__gt_@abhivaidya_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ advises_co_ I almost always edit my .mtl files when importing textures with my .obj_sm_ as material attributes don_t_t necessarily represent your exported mesh attributes in your 3D application. I often simply remove the .mtl file (also must edit and remove the .mtl reference in the .obj file) and let the importer set default materials on the mesh. Then assign what you like within the babylon.js framework.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-06T05:31:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you are using blender when you export to OBJ you can also deselect _qt_Write Materials_qt__co_ which will use the default material as dbawel has suggested.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ Which editor are you using for the 3D model?  I think you need to share an example.  cheers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"abhivaidya","Date":"2018-07-06T10:19:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the replies guys!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ Here are the images.....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe first is a capture with all channels on by default in the inspector\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe second is a capture with Ambient channel turned off in the inspector (the result is the same if you turn off the diffuse channel as well)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_19037_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/With.jpg.3bac9a6b7b5176d3680e8dfd87d7bdaf.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_With.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19037_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/With.thumb.jpg.c7a2cf4ee01a433d92c7e73b19cb184a.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/Without.jpg.b0d8cf87999025008122ba86371ecfb3.jpg_qt_ data-fileid_eq__qt_19038_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Without.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19038_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/Without.thumb.jpg.b5efd5505aeda2f9933a157ada5ae03c.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ Not very sure about editing the obj. Your suggestion does make sense but since I am only learning and evaluating BJS for an internal project_co_ I was trying to keep it simple. If nothing works_co_ I will surely look into the editing bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_We are using 3DS max. Sadly dont have access to a Blender expert inhouse and they are used to working with Unity _dd_(. I am just trying to make a case for BJS!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-06T14:56:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhy not exporting .Babylon file if you are in 3dsmax? You should get a better support of all bjs features directly\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you need to stick with obj_co_ you should check inside the generated file if the diffuse channel or ambient channel are not too dark (this could come from your obj exporter)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-07-07T06:34:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23468_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/_qt_ rel_eq__qt__qt__gt_@abhivaidya_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOBJ files are simply text files. If you edit these_co_ there are no consequences other than what you edit. If you haven_t_t look at an OBJ file in a text editor_co_ here_t_s what the first 13 lines look like_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t####_lt_br /_gt_\n\t\t\t#_lt_br /_gt_\n\t\t\t# ---_lt_br /_gt_\n\t\t\t# GeneratorVersion_dd_ 1.0.A.0.49_lt_br /_gt_\n\t\t\t# CoordSystemRUF_dd_ [+X_co_-Y_co_+Z]_lt_br /_gt_\n\t\t\t# Vertices_dd_ 8223_lt_br /_gt_\n\t\t\t# Faces_dd_ 15096_lt_br /_gt_\n\t\t\t# SphinxScanType_dd_ 257_lt_br /_gt_\n\t\t\t# ..._lt_br /_gt_\n\t\t\t####_lt_br /_gt_\n\t\t\tmtllib mesh.mtl_lt_br /_gt_\n\t\t\to mesh_lt_br /_gt_\n\t\t\t####\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSimply remove line 11 and the OBJ will not reference the MTL file and automatically revert to default materials. Then you can (and often should generally) set your own material values within the babylon framework.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ if you want to go further_co_ you can keep the reference to the MTL file in your OBJ file and edit the MTL file. Here_t_s an example of one of my production MTL files in a text editor_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t####_lt_br /_gt_\n\t\t\t#_lt_br /_gt_\n\t\t\t#_lt_br /_gt_\n\t\t\t####\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tnewmtl mesh_lt_br /_gt_\n\t\t\tNs 100_lt_br /_gt_\n\t\t\tKa 0.000000 0.000000 0.000000_lt_br /_gt_\n\t\t\tKd 1.000000 1.000000 1.000000_lt_br /_gt_\n\t\t\tKs 0.500000 0.500000 0.500000_lt_br /_gt_\n\t\t\tNi 1.000000_lt_br /_gt_\n\t\t\td 1.000000_lt_br /_gt_\n\t\t\tillum 0_lt_br /_gt_\n\t\t\tmap_Kd mesh.jpeg\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThey are self explanatory. However_co_ If you want to know how extensive these can get_co_ then take a look at the online explaination I found below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//paulbourke.net/dataformats/mtl/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//paulbourke.net/dataformats/mtl/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI generally stick to the basics as you see in my example_co_ however_co_ all of the work can be accomplished within the format if you don_t_t want to work within the babylon framework. And again_co_ there_t_s very few edits that will cause errors_sm_ even removing lines. However_co_ as you get into more extensive edits and/or additions to the file_co_ that_t_s when you will get errors upon loading. But these files are simple to understand and edit_co_ and extremely powerful. I hope this helps others as well who are restricted by believing they must use a .babylon converter to export geometry and all of it_t_s material and texture attributes relying upon the existing exporters.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe_t_ve been relying upon OBJ and MTL files for decades without issues. Just a few minutes of playing around_co_ and you can be an expert. This is NOT to say that I don_t_t use the existing exporters as they are AWESOME. The Devs writing the exporters are working extremely hard to make it much simpler for everyone to export their scenes into the Babylon framework. However_co_ it_t_s always good practice to have a reliable fallback when you aren_t_t able to export your geometry as you foresee_co_ and using the OBJ format is always reliable. At least it has been for me for over 20 years.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"abhivaidya","Date":"2018-07-09T05:44:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_220694_qt_ data-ipsquote-contentid_eq__qt_38650_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530888975_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 7/6/2018 at 8_dd_26 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhy not exporting .Babylon file if you are in 3dsmax? You should get a better support of all bjs features directly\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you need to stick with obj_co_ you should check inside the generated file if the diffuse channel or ambient channel are not too dark (this could come from your obj exporter)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_!!! Well we did try the babylon file. However the normals were inverted for some surfaces strangely. We are actually facing this issue with our character models as well. However_co_ when we used the OBJ format_co_ it worked fine. Hence we stuck to using this format.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_220782_qt_ data-ipsquote-contentid_eq__qt_38650_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530945244_qt_ data-ipsquote-userid_eq__qt_11286_qt_ data-ipsquote-username_eq__qt_dbawel_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 7/7/2018 at 12_dd_04 PM_co_ dbawel said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23468_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/_qt_ rel_eq__qt__qt__gt_@abhivaidya_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tOBJ files are simply text files. If you edit these_co_ there are no consequences other than what you edit. If you haven_t_t look at an OBJ file in a text editor_co_ here_t_s what the first 13 lines look like_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSimply remove line 11 and the OBJ will not reference the MTL file and automatically revert to default materials. Then you can (and often should generally) set your own material values within the babylon framework.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHowever_co_ if you want to go further_co_ you can keep the reference to the MTL file in your OBJ file and edit the MTL file. Here_t_s an example of one of my production MTL files in a text editor_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThey are self explanatory. However_co_ If you want to know how extensive these can get_co_ then take a look at the online explaination I found below_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//paulbourke.net/dataformats/mtl/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//paulbourke.net/dataformats/mtl/_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI generally stick to the basics as you see in my example_co_ however_co_ all of the work can be accomplished within the format if you don_t_t want to work within the babylon framework. And again_co_ there_t_s very few edits that will cause errors_sm_ even removing lines. However_co_ as you get into more extensive edits and/or additions to the file_co_ that_t_s when you will get errors upon loading. But these files are simple to understand and edit_co_ and extremely powerful. I hope this helps others as well who are restricted by believing they must use a .babylon converter to export geometry and all of it_t_s material and texture attributes relying upon the existing exporters.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWe_t_ve been relying upon OBJ and MTL files for decades without issues. Just a few minutes of playing around_co_ and you can be an expert. This is NOT to say that I don_t_t use the existing exporters as they are AWESOME. The Devs writing the exporters are working extremely hard to make it much simpler for everyone to export their scenes into the Babylon framework. However_co_ it_t_s always good practice to have a reliable fallback when you aren_t_t able to export your geometry as you foresee_co_ and using the OBJ format is always reliable. At least it has been for me for over 20 years.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tDB\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks for the lovely explanation _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_! I am going to try this today and let you know how it works. BTW I immediately did try editing the MTL and OBJ when you suggested_co_ and it was simple enough. However_co_ the output was kinda same. However_co_ let me try and do that again and I will let you know what I come up with.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-07-09T06:24:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23468_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/_qt_ rel_eq__qt__qt__gt_@abhivaidya_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease pay close attention to the link to the docs I included. There_t_s very little you can_t_t do with materials and textures using (modifying/deleting/adding) these attributes. However_co_ my preference is always to import my OBJ into the babylon framework_co_ and then I can modify my materials and textures with much simpler control and more specific and dynamically. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-09T15:43:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23468_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23468-abhivaidya/_qt_ rel_eq__qt__qt__gt_@abhivaidya_lt_/a_gt__dd_ If you found a bug with the Babylon exporter for 3dsmax_co_ please provide a repro and create an issue here_dd__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Exporters_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Exporters_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe will fix it in less than a week _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]