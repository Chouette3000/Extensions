[{"Owner":"Kjue","Date":"2018-07-06T06:51:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi! I_t_m hoping that someone else has tried this already. I want to reshape the texture in a projecting spotlight. I tried adjust the uScale and vScale on it and they did not work for me. I tried the same texture on a surface and obviously got the result I was looking for.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m looking for an effect where I can reshape the spotlight into other shape than circle really. I think I figured out why it is shaped like a circle because of the math involved. My idea was actually to produce a video projector scene very much like this PG here (Hit Run after loading for first time_co_ otherwise video won_t_t play)_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#CQNGRK%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#CQNGRK#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI basically pasted in the video texture from elsewhere and thought to make a drive-in scene from that. Then the spherical light really would not do there. Help? Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-06T15:36:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe circle shape is a circle because it comes from the spotlight actually. The texture is applied by projecting it where the light reaches the objects. So you won_t_t be able to change the shape without changing the lighting equation\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe projection matrix is computed here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Lights/babylon.spotLight.ts#L253_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Lights/babylon.spotLight.ts#L253_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kjue","Date":"2018-07-09T07:42:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks_co_ that confirms I found the right spots at least. Any thoughts on changing the shape of the projected texture? Do you think it would make sense to manipulate that instead of the lighting equation? I_t_m thinking of applying uv-mapping like thing here or padding the sides to make the shape correct.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-07-09T13:46:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1Z89KY%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1Z89KY#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingnut goofin_t_ around.  This requires shadowGenerator.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t make transplane2.visibility _eq_ 0_co_ though.  Not so far.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEssentially_co_ I_t_m shining light thru an inverse cookie-cutter.  Kludge.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is probably not helpful_co_ but I thought I should show it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_  This PG was contributed-to... by many people.   Line 44 - mat2trans.anisotropicFilteringLevel _eq_ 0_sm_  ...is not understood by me.  Future users may wish to investigate its use/need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-07-09T13:54:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_220982_qt_ data-ipsquote-contentid_eq__qt_38665_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531143967_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi guys.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1Z89KY%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1Z89KY#13_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWingnut goofin_t_ around.  This requires shadowGenerator.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI can_t_t make transplane2.visibility _eq_ 0_co_ though.  Not so far.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tEssentially_co_ I_t_m shining light thru an inverse cookie-cutter.  Kludge.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis is probably not helpful_co_ but I thought I should show it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think this is a really good simple solution to the problem.  Not sure if it is exactly what OP wants though\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-09T14:27:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI had the same idea as Wingnut_co_ so not sure if you are after that same effect done another way (look up)_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#X3XD2C%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#X3XD2C#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kjue","Date":"2018-07-10T12:37:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ and _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_ those are helpful! I updated the _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#CQNGRK%239_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_ (remember to hit Run!) to match those examples and took it a bit further. I noticed there are ways I can adjust the sort of U and V mapping of the texture being projected. This enabled me to clip the video to roughly match the size. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ you can always use the layerMask to exclude objects from the scene though they are in the renderlist for the shadow generator. I did that here._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_You can imagine I_t_m slightly restless with this kludge though I can see it working._lt_/span_gt_ I will think if I can put into place the clipping into the light function directly. I found this _lt_a href_eq__qt_https_dd_//stackoverflow.com/questions/22952742/creating-a-rectangular-light-source-in-opengl#24540415_qt_ rel_eq__qt_external nofollow_qt__gt_example_lt_/a_gt_ that does precisely that and I think others would love to have that in there too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-07-10T12_dd_43_dd_37Z_t_ title_eq__t_07/10/2018 12_dd_43  PM_t_ data-short_eq__t_Jul 10_t__gt_July 10_lt_/time_gt_ by Kjue_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Editor got temporarily broken.\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-07-10T13:30:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_221130_qt_ data-ipsquote-contentid_eq__qt_38665_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1531226248_qt_ data-ipsquote-userid_eq__qt_28353_qt_ data-ipsquote-username_eq__qt_Kjue_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t50 minutes ago_co_ Kjue said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ you can always use the layerMask to exclude objects from the scene though they are in the renderlist for the shadow generator.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey_co_ thanks_co_ Kjue.  I was wondering about that.  Good info... about the shadowMap renderLists not being layerMask-sensitive.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kjue","Date":"2018-07-10T13:30:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay I fine tuned it more and made it feasible for my use I think. Still based on the same idea_co_ the trouble was with box cutter not being exactly centered. Here is the _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#CQNGRK%2310_qt_ rel_eq__qt_external nofollow_qt__gt_last version_lt_/a_gt_. You should also notice_co_ that the transparent center of the box is smaller than the sides so it can accommodate the circle being cut. I just made it significantly smaller also.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-07-10T13:33:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTHAT ... is VERY cool!  haha.  Truly tasty mad-scientist stuff.  Time to open a VR movie theater_co_ because kjue has built the projectors.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-07-10T13:42:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWould you feel like editing your first post and adding _t_projector_t_ tag_co_ and maybe some other tags (theater_co_ movie_co_ gel_co_ etc)?  I can do it_co_ too_co_ if you like/approve.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe want to be able to find this... with forum searches.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI bookmarked it locally... so hard that i broke my mouse button.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kjue","Date":"2018-07-10T13:56:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ I_t_ll add them there!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]