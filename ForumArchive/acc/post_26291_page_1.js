[{"Owner":"amo yeh","Date":"2016-11-09T08:25:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTwo questions I would like to ask for this great library.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a scene I made with 3ds max_co_ I used biped and exported as animation_co_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2AMWUJ%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2AMWUJ#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. The model world position changes on this animation. I noticed that skeletonViewer is not following the animation position_co_ is this correct or I missed something?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. I used attachToBone to attach a box on the head_co_ how to affect only the position and rotation but not scale on this box? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks any one who knows the above \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-11-09T16:27:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1.  The model isn_t_t technically changing world position.  You have rotation &amp_sm_ translation on the root bone.  Apparently skeleton viewer does not take that into account.  It is better to move &amp_sm_ rotate the meshes as a separate animation.  That way_co_ the mesh_t_es permanent position is accurate.  The skeleton viewer is just a developer tool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Kind of an all or nothing thing.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-09T22:31:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI got it working here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2AMWUJ%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2AMWUJ#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut that change messes up the skeletonViewer with other models_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BZJVJ%2324_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BZJVJ#24_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try to come up with a better fix tomorrow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ I agree with what JCP said about moving and rotating the mesh instead of the root bone.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-09T22:55:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOne difference between the dancing model and dude is that needInitialSkinMatrix is set to true on the dancer.  \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amo yeh","Date":"2016-11-10T00:22:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_11.5pt_sm__qt__gt_Thanks JCPalmer for pointing out the root bone concept. _lt_br /_gt_\n\tThe scene we are making only contains static animation with people dancing around_co_ I guess it is fine to move the root bone. I will keep this concept in mind for making interactive characters_co_ since mesh position matters. _lt_/span_gt__lt_strong_gt__lt_span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_11.5pt_sm__qt__gt_Adam that was great response with the demo code_co_ really appreciated for the help_co_ I will dig some more on the _lt_span style_eq__qt_font-size_dd_11.5pt_sm_font-family_dd_Helvetica_co_ _t_sans-serif_t__sm_background_dd_#FFFFFF_sm__qt__gt_needInitialSkinMatrix and see how that works._lt_/span_gt__lt_/span_gt__lt_br /_gt__lt_span style_eq__qt_font-size_dd_11.5pt_sm__qt__gt_as for the _lt_span style_eq__qt_font-size_dd_11.5pt_sm_font-family_dd_Helvetica_co_ _t_sans-serif_t__sm_background_dd_#FFFFFF_sm__qt__gt_attachToBone question_co_ I guess I can always get the bone position and rotation and update my mesh manually? T_lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_font-size_dd_11.5pt_sm_font-family_dd_Helvetica_co_ _t_sans-serif_t__sm_background_dd_#FFFFFF_sm__qt__gt__lt_span style_eq__qt_float_dd_none_sm_word-spacing_dd_0px_sm__qt__gt_he version 2.5 _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_font-size_dd_11.5pt_sm_font-family_dd__t_Segoe UI_t__co_ _t_sans-serif_t__sm_background_dd_#FFFFFF_sm__qt__gt__lt_span style_eq__qt_float_dd_none_sm_word-spacing_dd_0px_sm__qt__gt_Bone.getAbsolutePosition_lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_font-size_dd_11.5pt_sm__qt__gt_ and other related_lt_span style_eq__qt_font-size_dd_11.5pt_sm_font-family_dd_Helvetica_co_ _t_sans-serif_t__sm_background_dd_#FFFFFF_sm__qt__gt_ function looks promising_co_ will try it and see how that works._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-10T00:34:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2AMWUJ%235_qt_ rel_eq__qt_external nofollow_qt__gt_I_lt_/a_gt_ think I figured out a good fix for this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2AMWUJ%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2AMWUJ#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BZJVJ%2325_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BZJVJ#25_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll submit a PR tomorrow or Friday.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-10T00:39:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_150516_qt_ data-ipsquote-contentid_eq__qt_26291_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1478737355_qt_ data-ipsquote-userid_eq__qt_16997_qt_ data-ipsquote-username_eq__qt_amo yeh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 minutes ago_co_ amo yeh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_font-size_dd_11.5pt_sm__qt__gt__lt_span style_eq__qt_font-size_dd_11.5pt_sm_font-family_dd_Helvetica_co_ _t_sans-serif_t__sm_background_dd_#FFFFFF_sm__qt__gt_I guess I can always get the bone position and rotation and update my mesh manually? T_lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_font-size_dd_11.5pt_sm_font-family_dd_Helvetica_co_ _t_sans-serif_t__sm_background_dd_#FFFFFF_sm__qt__gt__lt_span style_eq__qt_float_dd_none_sm_word-spacing_dd_0px_sm__qt__gt_he version 2.5 _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_font-size_dd_11.5pt_sm_font-family_dd__t_Segoe UI_t__co_ _t_sans-serif_t__sm_background_dd_#FFFFFF_sm__qt__gt__lt_span style_eq__qt_float_dd_none_sm_word-spacing_dd_0px_sm__qt__gt_Bone.getAbsolutePosition_lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_font-size_dd_11.5pt_sm__qt__gt_ and other related_lt_span style_eq__qt_font-size_dd_11.5pt_sm_font-family_dd_Helvetica_co_ _t_sans-serif_t__sm_background_dd_#FFFFFF_sm__qt__gt_ function looks promising_co_ will try it and see how that works._lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThere currently isn_t_t a getRotation function for bone.  I can probably add that this weekend.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-10T18:51:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tFix merged and PG updated\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amo yeh","Date":"2016-11-24T05:19:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the update_co_ by the way I was able to use bone getAbsolutePosition() and getRotation() function to relocate the box without scaling\n_lt_/p_gt_\n\n_lt_p_gt_\n\there is the updated demo\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2AMWUJ%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2AMWUJ#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-28T18:20:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tLovely!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]