[{"Owner":"hen","Date":"2016-10-06T00:59:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is a question to the Babylon Core Devs...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould it might be possible to change how the skeletons work in Babylon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am asking because the current implementation with the skeleton holding the keyframes has several limitations._lt_br /_gt_\n\tOne problem is that the bones cannot be transformed/scaled at runtime._lt_br /_gt_\n\tAnother major one is that it makes dynamic player interactions with animation related objects impossible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere some examples about typical game features that doesnt work right now_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-  Character body customization by bone scaling (really common in many games and without alternative)_lt_br /_gt_\n\t-  Interaction with objects that require specific animation takes_co_ such as furniture like chairs where a model specific animation is required_co_ cars or guns where each asset requires unique fitting animation_lt_br /_gt_\n\t-  Dynamic Character emotes such dance animations selected from a pool of takes_lt_br /_gt_\n\t-  Sequencing between multiple animations_lt_br /_gt_\n\t-  Event based animation like gestures\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course some of those are possible right now when the scope is small enough that animations can be preloaded with the initial character._lt_br /_gt_\n\tBut we do have to implement a really huge amount of animations_co_ wich seems impossible with the current skeleton.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat i would recomment is to remove the keyframes from the bones and add a animation take property where multiple takes can be pushed to array._lt_br /_gt_\n\tAs well as an animation mixer (similar to three.js) wich allows to trigger a take by index and to interpolate between them (sequencing)._lt_br /_gt__lt_br /_gt_\n\tI know that some other guys here has been running in to similar problems._lt_br /_gt_\n\tNo idea how big this change really is_co_ but i am ready to help working on it fulltime because it has high priority for us.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHen_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-07T13:58:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIs your data in Blender?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-07T14:12:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m open to every improvement we can make. But I don_t_t see why having animations hold elsewhere will fix your issue\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe way we support multiple animation now is through AnimationRange_sm_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.skeleton.ts#L76_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.skeleton.ts#L76_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can have multiple animation range per skeleton and switch between them using beginAnimation(name)_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.skeleton.ts#L177_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.skeleton.ts#L177_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo it is (from my understanding) the same as what you call _t_take_t_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe also support animation blending_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Animations#animation-blending_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Animations#animation-blending_lt_/a_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-07T14:44:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOn your question(in another thread) regarding loading animations. You can load animations using ImportMesh and then add them at the end of your current animation list.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso let_t_s say you have a first animation from key 0 to 100. You can then add the following one from 101 to 200 and so on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI could possibly(if this works) add a mergeAnimations function for you on skeleton.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-10-07T15:02:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_146532_qt_ data-ipsquote-contentid_eq__qt_25609_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1475851480_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOn your question(in another thread) regarding loading animations. You can load animations using ImportMesh and then add them at the end of your current animation list.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tso let_t_s say you have a first animation from key 0 to 100. You can then add the following one from 101 to 200 and so on.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI could possibly(if this works) add a mergeAnimations function for you on skeleton.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tyes thats exactly what i was looking for!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually i would probably not use the importmesh function but create some alternative binary format wich holds only the animation related properties._lt_br /_gt_\n\tReason is to keep files small as possible_co_ because we have to load them at runtime.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ i saw an info about an collada loader in a older babylon release note._lt_br /_gt_\n\tDoes that one still exists? Because i cant find it on the repo._lt_br /_gt_\n\tI dont plan to load the collada format_co_ but it would help alot to write some conversion tools.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOur assets are all fbx_co_ they could be imported to blender_co_ but we usually dont work with it.\n_lt_/p_gt_\n\n_lt_h3 style_eq__qt_font-size_dd_20px_sm_color_dd_rgb(0_co_0_co_0)_sm_line-height_dd_1.2_sm_font-weight_dd_400_sm_margin_dd_0px 0px 3px_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-style_dd_normal_sm_letter-spacing_dd_normal_sm_text-align_dd_center_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_strong style_eq__qt_font-weight_dd_bold_sm__qt__gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F25609-separate-skeleton-and-animations%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ style_eq__qt_color_dd_inherit_sm_text-decoration_dd_none_sm_background-color_dd_transparent_sm__qt_ title_eq__qt_Go to JCPalmer_t_s profile_qt_ rel_eq__qt__qt__gt_JCPalmer_lt_/a_gt__lt_/strong_gt_\n_lt_/h3_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-10T16:47:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk sounds good_dd_ If you can provide me simple sample of a mesh with two animations I can create the mergeAnimations function\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCollada can be loaded using the FBX exporter\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-10-11T16:34:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_146816_qt_ data-ipsquote-contentid_eq__qt_25609_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1476118078_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t23 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOk sounds good_dd_ If you can provide me simple sample of a mesh with two animations I can create the mergeAnimations function\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tCollada can be loaded using the FBX exporter\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks. If you dont mind i would create a merge and remove feature and push it to the repo. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it actually possible to compile the fbx exporter for linux/ubuntu?_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-11T18:00:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI don_t_t think so as it uses the FBX windows SDK (I dunno if there is a linux version)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-11T18:28:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//usa.autodesk.com/adsk/servlet/pc/item?id_eq_24735038&amp_sm_siteID_eq_123112_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//usa.autodesk.com/adsk/servlet/pc/item?id_eq_24735038&amp_sm_siteID_eq_123112_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-10-11T18:31:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_146532_qt_ data-ipsquote-contentid_eq__qt_25609_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1475851480_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 07/10/2016 at 4_dd_44 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI could possibly(if this works) add a mergeAnimations function for you on skeleton.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis could be very useful _t_mergeAnimations_t_. Good idea. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-10-11T18:49:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_146978_qt_ data-ipsquote-contentid_eq__qt_25609_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1476210515_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t16 minutes ago_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//usa.autodesk.com/adsk/servlet/pc/item?id_eq_24735038&amp_sm_siteID_eq_123112_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//usa.autodesk.com/adsk/servlet/pc/item?id_eq_24735038&amp_sm_siteID_eq_123112_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHa.. i was just about to post same _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tWondering how this could be turned in to a linux converter._lt_br /_gt_\n\tActually babylon has no conversion tools to run server side_co_ this would be a big win.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"getzel","Date":"2016-10-13T13:16:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes it would be cool to access and change rotation (and maybe position) of bones with simple functions (like meshes).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-10-13T16:02:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_147196_qt_ data-ipsquote-contentid_eq__qt_25609_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1476364573_qt_ data-ipsquote-userid_eq__qt_18592_qt_ data-ipsquote-username_eq__qt_getzel_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ getzel said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYes it would be cool to access and change rotation (and maybe position) of bones with simple functions (like meshes).\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tActually you can change the rotation. Just not the scale/size.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]