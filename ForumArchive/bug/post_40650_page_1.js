[{"Owner":"Arte","Date":"2018-10-15T19:59:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have strange behaviour in NullEngine using setPivotPoint with CSG\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSame Code_co_ different results?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Blue background in Playground_co_ grey background NULL ENGINE)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PIKRZ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PIKRZ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20539_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/1043609227_cut-outbabylon.PNG.ae9078ad8952d9b493061d53dc729155.PNG_qt_ alt_eq__qt_1043609227_cut-outbabylon.PNG.ae9078ad8952d9b493061d53dc729155.PNG_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20538_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/2002090363_cut-outbabylonnullengine.PNG.96d396e1dd2178395cb6f4b76661cc1b.PNG_qt_ alt_eq__qt_2002090363_cut-outbabylonnullengine.PNG.96d396e1dd2178395cb6f4b76661cc1b.PNG_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ do you have any idea?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you in advance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-15T22:20:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twait..how do you get render from NullEngine?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-16T06:34:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLogic on server side_co_ render on client side.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-16T16:46:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twoot _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ This is kind of interesting use! Can you provide a repro? This should work as CSG is pure javascript code_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-10-16T16:50:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you are performing logic on the server side and passing only data such as position to the client you might run into errors because the way the pivot works_co_ changing the pivot may not update the position. I would recommend using a parent object instead of the pivot_co_ see first paragraph here _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/pivots_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/pivots_lt_/a_gt_ and this PG_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#GH4N1R%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#GH4N1R#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-16T17:33:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_231854_qt_ data-ipsquote-contentid_eq__qt_40650_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1539708627_qt_ data-ipsquote-userid_eq__qt_29361_qt_ data-ipsquote-username_eq__qt_trevordev_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t38 minutes ago_co_ trevordev said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf you are performing logic on the server side and passing only data such as position to the client you might run into errors because the way the pivot works_co_ changing the pivot may not update the position. I would recommend using a parent object instead of the pivot_co_ see first paragraph here _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/pivots_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/pivots_lt_/a_gt_ and this PG_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#GH4N1R%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#GH4N1R#1_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s exactly what_t_s happening now. I like what you suggested_co_ but. I think NullEngine should mach client side _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-10-16T17:54:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy guess is they are the same in data. Like if you print out the positions_co_ they should be the same if the logic was done in the exact same order in the client vs the server_t_s null engine. If you have a repro where numbers printed out by null vs non-null engine are different please do share.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-16T18:20:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m using same code from _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PIKRZ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PIKRZ_lt_/a_gt_ (for NullEngine and Client Side). This is happening if I_t_m using CSG. I think BABYLON.CSG.FromMesh creating a problem (loosing information about pivot). I_t_m not that clever to check it _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-16T19:36:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_231874_qt_ data-ipsquote-contentid_eq__qt_40650_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1539712483_qt_ data-ipsquote-userid_eq__qt_29361_qt_ data-ipsquote-username_eq__qt_trevordev_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ trevordev said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMy guess is they are the same in data. Like if you print out the positions_co_ they should be the same if the logic was done in the exact same order in the client vs the server_t_s null engine. If you have a repro where numbers printed out by null vs non-null engine are different please do share.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAll numbers a same.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-16T23:37:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo all numbers are the same but you still get different positioning? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-16T23:44:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOoo yes _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-16T23:50:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthis looooks suspicious _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Are you sure of your code?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-16T23:53:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t100%\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSame as in PlayGround\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_///////////////////////////////_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// CODE FROM NULL ENGINE_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ parent _eq_ BABYLON.MeshBuilder.CreateBox(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_Parent_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ {height_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_3.2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ width_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_2.2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ depth_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1.2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_sideOrientation_dd_ BABYLON.Mesh.DOUBLESIDE}_co_ scene)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ mat _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ BABYLON.StandardMaterial(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_material_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ scene)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_mat.alpha _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0.3_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_parent.material _eq_ mat_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ part _eq_ BABYLON.MeshBuilder.CreateBox(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_Part_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ {height_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_3_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ width_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ depth_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_sideOrientation_dd_ BABYLON.Mesh.DOUBLESIDE}_co_ scene)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_part.setPivotPoint(_lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ BABYLON.Vector3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_))_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_part.position.x _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// part.rotation.x _eq_ -1_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_part.parent _eq_ parent_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ tool _eq_ BABYLON.MeshBuilder.CreateBox(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_Tool_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ {height_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ width_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ depth_dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_2_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_sideOrientation_dd_ BABYLON.Mesh.DOUBLESIDE}_co_ scene)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_tool.material _eq_ mat_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_tool.setPivotPoint(_lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ BABYLON.Vector3(_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_5_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_-_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_))_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_tool.position.x _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_tool.rotation.x _eq_ -_lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// tool.parent _eq_ parent_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ partCSG _eq_ BABYLON.CSG.FromMesh(part)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ toolCSG _eq_ BABYLON.CSG.FromMesh(tool)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ newPartCSG _eq_ partCSG.subtract(toolCSG)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ newPart _eq_ newPartCSG.toMesh(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt_csg_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ part.material_co_ scene)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// tool.dispose()_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_part.dispose()_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_// CODE FROM NULL ENGINE_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_///////////////////////////////_lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-17T13:53:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOK can you repro on a page with the NullEngine (using Babylon.max.js) I will try to debug it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso (I am traveling and I don_t_t have too much free time this week)_co_ perhaps you could try to do a per mesh comparison between engine and NullEngine regarding properties like world matrix (is this matrix the same on all meshes between both engine)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you also try to force a mesh.computeWorldMatrix(true) on all meshes before doing csg?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-17T13:55:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso how do you render on client side when using NullEngine? Are you sure your local renderer interpret the pivot like Babylon.js?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-17T14:46:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_231982_qt_ data-ipsquote-contentid_eq__qt_40650_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1539784426_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t40 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOK can you repro on a page with the NullEngine (using Babylon.max.js) I will try to debug it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAlso (I am traveling and I don_t_t have too much free time this week)_co_ perhaps you could try to do a per mesh comparison between engine and NullEngine regarding properties like world matrix (is this matrix the same on all meshes between both engine)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tCan you also try to force a mesh.computeWorldMatrix(true) on all meshes before doing csg?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOkay\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_231983_qt_ data-ipsquote-contentid_eq__qt_40650_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1539784549_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t38 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAlso how do you render on client side when using NullEngine? Are you sure your local renderer interpret the pivot like Babylon.js?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_I_t_m creating everything on server side and passing data through _lt_/span_gt_assetsManager.addMeshTask. Does that make sense?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your time. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-17T20:34:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tShared files_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tindex.html // create and download (serialised scene)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tserializedScene.json // downloaded json file (serialised scene)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLoader.html // load serialised scene\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/Gal-Arte/BabylonTest/tree/master/NULL%20ENGINE%20using%20setPivotPoint%20and%20CSG_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Gal-Arte/BabylonTest/tree/master/NULL ENGINE using setPivotPoint and CSG_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground to compare _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PIKRZ%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PIKRZ#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLets hope for the best _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-18T17:38:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan I ask you something else? Can you serialized the scene from a regular PG and reload it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m pretty sure this comes from the serializer which does not take the pivot correctly in account\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-18T20:48:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Regular PG results\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Serializer!!!_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20588_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/255935350_regularPGtest.PNG.b03f88bda590f34c02c84b669d1190b1.PNG_qt_ alt_eq__qt_255935350_regularPGtest.PNG.b03f88bda590f34c02c84b669d1190b1.PNG_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-19T15:11:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk so I think I can fix it _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Can you share the PG where you serialized and reload it? I will use it to fix the serializer_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-19T16:23:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PIKRZ%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PIKRZ#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you comment out line 55. Original part position - Out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr comment out lines 67-79_co_ to see original view.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-22T16:17:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFixed_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/1e37e3b9d1c7cb5e6eb8a63557b278e65f0d393b_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/1e37e3b9d1c7cb5e6eb8a63557b278e65f0d393b_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-22T17:16:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNow I can go-ahead with my project _qt_Parametric Cabinet_qt_. Thank you and _lt_span class_eq__qt_ipsEmoji_qt__gt_👍_lt_/span_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-23T15:02:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood luck _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-10-28T11:30:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI updated npm babylonjs _qt_Babylon.js null engine (v3.3.0)_qt_ _co_ but for some reason I have same results as before. On PG is working perfect. _lt_span class_eq__qt_ipsEmoji_qt__gt_😕_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t***EDITED***\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried what _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ suggested _qt_I would recommend using a parent object instead of the pivot_qt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tResults_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PIKRZ%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PIKRZ#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.CSG ignoring not just pivot but parenting as well???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy bad. I forgot sphere.computeWorldMatrix(true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#8PIKRZ%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#8PIKRZ#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut npm babylonjs still issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]