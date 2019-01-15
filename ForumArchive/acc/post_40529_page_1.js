[{"Owner":"mind0n","Date":"2018-10-09T06:51:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRefer to the link below_co_ it looks like that the fatness of the font will be impacted by the width &amp_sm_ height of the plain mesh.  This is not what I expected. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually I want the font be rendered normally no matter what the mesh size is.  Is there way to fix this issue?  How to calculate an appropriate size to make the font look better?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#YFRMAK%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#YFRMAK#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_image.png.f174b89fb85b94117cddb90e9312adf1.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20443_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/image.png.f174b89fb85b94117cddb90e9312adf1.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Solution_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#YFRMAK%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#YFRMAK#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-10-09T10:29:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you read this yet it could help _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/dynamictexture#text-and-area-matching_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/dynamictexture#text-and-area-matching_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mind0n","Date":"2018-10-10T03:41:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_231052_qt_ data-ipsquote-contentid_eq__qt_40529_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1539080956_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 hours ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHave you read this yet it could help _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/dynamictexture#text-and-area-matching_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/dynamictexture#text-and-area-matching_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt__co_ if you look at my code_co_ what I_t_m using is AdvancedDynamicTexture_co_ not the DynamicTexture within the provided link above.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_rgb(0_co_0_co_255)_sm__qt__gt_var_lt_/span_gt_ tx _eq_ BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plain)_sm_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_tx.diffuseColor _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ BABYLON.Color3.White()_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_tx.emissiveColor _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ BABYLON.Color3.White()_sm__lt_/span_gt_\n\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_tx.width _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_3000_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t\t\t\t\t\t_lt_/div_gt_\n\n\t\t\t\t\t\t_lt_div_gt_\n\t\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_tx.height _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#09885a_sm__qt__gt_1000_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t\t_lt_/div_gt_\n\t\t\t\t_lt_/div_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe advancedDynamicTexture were created based on the mesh size automatically. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSetting the width &amp_sm_ height of AdvancedDynamicTexture does not make any difference of the TextBlock rendering. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd setting the width &amp_sm_ height of the StackPanel / TextBlock will only crop the rendered text.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_image.png.a5d18c511305fcd6b63cb72602cef4b4.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20457_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/image.png.a5d18c511305fcd6b63cb72602cef4b4.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any way to adjust the rendering resolution of the AdvancedDynamicTexture so the text could rendered better?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-10-10T09:35:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGald you found the solution_co_ in case somebody wonders_co_ the solution link is in the first post _lt_span_gt__dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#YFRMAK%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#YFRMAK#15_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]