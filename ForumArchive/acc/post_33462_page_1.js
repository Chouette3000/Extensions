[{"Owner":"MackeyK24","Date":"2017-10-16T15:01:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ can you possibly add support in the shader/material system to use both Lightmaps (as shadowmap) and ambient occlusion ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCurrently the toolkit ONLY allow light map creation if the material DOES NOT have a ambient occlusion texture... If I override and allow both_co_ it completely\n_lt_/p_gt_\n\n_lt_p_gt_\n\tignores on some (or appears to ignore) the light map as shadow map or shows it funny.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo there seems to be some issue_co_ I don_t_t know if its by design or some webgl limitation or what... But do you think you can add support to use both...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have some really Kool looking scene _lt_a href_eq__qt_https_dd_//www.assetstore.unity3d.com/en/#!/content/40756_qt_ rel_eq__qt_external nofollow_qt__gt_Survival Shooter Assets_lt_/a_gt_ from Unity Asset Store that use PBR materials that have a Occlusion Map and also receives shadows (the floor for example has planks that have a occlusion texture but must also render the shadows of the other items in the scene via its light map index)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now... I have to remove the ambient occlusion from the floor wood planks and the walls so the the received shadows show up (via LightmapTexture as Shadow Map)... It looses a bit of the detail from the original PBR scene without the occlusion for all the little cracks in the planks...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPLEASE se what you can do _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBTW... Check out this shot (without the occlusion in the floor and walls...still looks BEAUTIFUL to me)... Smooth looking shadows with PBR look... check out the to train on the floor... looks like PAINTED WOOD toy train... and its detail placement of the shadow underneath_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheck out the little HDR Color as the Emission color PBR materials used for the stars on wall... That is directly rendered using  BABYLON.PBRMaterial with a HDR color as the emission channel to give it the glowing look... All OUT-THE-BOX rendering the \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_15233_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/59e4c792ae67b_ScreenShot2017-10-16at4_49_17AM.png.428dddb4823ddd51a9e919d80f0c2271.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59e4c79453358_ScreenShot2017-10-16at4_49_17AM.thumb.png.899165cd041d96946ff9a225cf623f44.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15233_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/59e4c79453358_ScreenShot2017-10-16at4_49_17AM.thumb.png.899165cd041d96946ff9a225cf623f44.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is shot of the ORIGINAL Unity Game View of the scene (Obviously our shader/render pipeline a little different than unity default render pipeline... BUT IT LOOKS FREAKING GOOD TO ME compared to the original unity assets used to create scene)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_15234_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/59e4c873b9644_ScreenShot2017-10-16at4_53_27AM.png.48895a85380c8668ab15dc81c86150bf.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59e4c874cd9b2_ScreenShot2017-10-16at4_53_27AM.thumb.png.7096d9f17c39f7201929031a61469d04.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15234_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/59e4c874cd9b2_ScreenShot2017-10-16at4_53_27AM.thumb.png.7096d9f17c39f7201929031a61469d04.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot bad ehh _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt__lt_strong_gt_EDIT_dd__lt_/strong_gt__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFIXED_dd_ Babylon Toolkit - Version 3.1.044 (Or Greater) fixes this issue _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a06dbd1c3074_ScreenShot2017-11-11at1_14_47AM.png.0c58dcbcc40349875c79a5440009f494.png_qt_ data-fileid_eq__qt_15634_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15634_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a06dbd42033e_ScreenShot2017-11-11at1_14_47AM.thumb.png.f5b377172fa8cbac7e84fcd8110dbcb7.png_qt_ alt_eq__qt_5a06dbd42033e_ScreenShot2017-11-11at1_14_47AM.thumb.png.f5b377172fa8cbac7e84fcd8110dbcb7.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2017-10-16T18:07:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWow! Impressive work. Congrats.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-16T18:28:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe need to first release a version of your toolkit. I cannot keep adding features without giving the export to the community.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease stop adding new feature just for a while_co_ publish the tool and the documentation (you can even call it 0.5 if you want)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBecause so far_co_ I can_t_t even test what I add for you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HeadClot","Date":"2017-10-17T02:00:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_192066_qt_ data-ipsquote-contentid_eq__qt_33462_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1508178521_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\twe need to first release a version of your toolkit. I cannot keep adding features without giving the export to the community.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tPlease stop adding new feature just for a while_co_ publish the tool and the documentation (you can even call it 0.5 if you want)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBecause so far_co_ I can_t_t even test what I add for you\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWould have to agree. I am waiting to jump in to BJS but the Unity toolkit must come out first. That is the only thing holding me back.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]