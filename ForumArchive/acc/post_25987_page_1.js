[{"Owner":"hen","Date":"2016-10-24T16:00:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tas some of you already know_co_ we are working on to port a three.js game to babylon.js since a while.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne part of the app is a player character editor that involves morphing to the body and head mesh._lt_br /_gt_\n\tWith the old three.js version we did use morphtargets on the head and a optimized skeleton to scale bones for the body._lt_br /_gt_\n\tReason to morph the body by using bones was that attachments such as cloths are automaticly aligned to the applied changes._lt_br /_gt__lt_br /_gt_\n\tActually with babylon we went running in to the problem that the bone size is part of the animation take matrix like explained in this thread_dd_ \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/17411-how-do-i-scale-a-bone/?do_eq_embed&amp_sm_comment_eq_98009&amp_sm_embedComment_eq_98009&amp_sm_embedDo_eq_findComment#comment-98009_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tMorphing the body like we do with the face mesh is of course the better solution_co_ because the design can be more detailed compared to the bone solution._lt_br /_gt_\n\tJust this does not align skinned attachments. I created a demo playground _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#GXIPL%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#GXIPL#7_lt_/a_gt_ that shows the problem at the belly area (if it doesnt load you might need to set a higher timeout)._lt_br /_gt__lt_br /_gt_\n\tIm wondering if someone has an idea how this could be solved without to create extra morphs for each cloth item._lt_br /_gt__lt_br /_gt_\n\tCheers_lt_br /_gt_\n\tHen\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-24T16:22:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnot sure to understand the problem with matrix and bone. Even in 3js every bone only has a single matrix.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you elaborate more on a simpler example about your issue?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-10-24T16:56:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_148683_qt_ data-ipsquote-contentid_eq__qt_25987_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477326161_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tnot sure to understand the problem with matrix and bone. Even in 3js every bone only has a single matrix.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tcan you elaborate more on a simpler example about your issue?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe difference to 3js is that they have a scale property on the bones._lt_br /_gt_\n\tSo i can just do something like bone[index].scale.y _eq_ value to change the size._lt_br /_gt__lt_br /_gt_\n\tWhen i manipulate the matrix in babylon like that_co_ it breaks on the next animation frame unlike i run this before every render shown in that other threads demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy old skeleton has a tricky skinning designed to change the character size_co_ muscles_co_ belly and others without to break the look of animations by scaling the bones within a specific range._lt_br /_gt_\n\tThe playground i posted above does apply only morphs for the same approach_co_ but as you can see with the increased belly morph_co_ clothings do not align like they would do when doing the same with bone scaling._lt_br /_gt__lt_br /_gt_\n\tI would be happy with any kind of solution for this problem either if its doing it by bones or somehow with body morphs or maybe something i just dont know yet._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-24T18:11:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk understood. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ will soon publish an update to add bone.rotate (and I guess he could easily add bone.scale as well)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-25T16:04:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_148725_qt_ data-ipsquote-contentid_eq__qt_25987_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477332715_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t21 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t(and I guess he could easily add bone.scale as well)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tShould this be a function like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbone.scale(x_co_ y_co_ z)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbone.scale(Vector3)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\talso_co_ should I add an optional param for dontScaleChildren or scaleChildren.  If so_co_ what should it default to?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-25T16:16:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would say don_t_t by default\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-10-25T17:44:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_148808_qt_ data-ipsquote-contentid_eq__qt_25987_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477411464_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tShould this be a function like this_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tbone.scale(x_co_ y_co_ z)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tor\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tbone.scale(Vector3)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\talso_co_ should I add an optional param for dontScaleChildren or scaleChildren.  If so_co_ what should it default to?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey adam_co_ first of all thank you for helping out!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving a dontScaleChildren param would be really perfect._lt_br /_gt_\n\tWill this create a scaling property on the bones? I just ask because somehow i have to get the data of the current xyz scalings before changing them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBig thanks again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHen\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-25T17:50:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy plan was just to make the function_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbone.scale(x_co_ y_co_  z_co_  _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_scaleChildren _eq_ false)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-10-25T18:31:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_148833_qt_ data-ipsquote-contentid_eq__qt_25987_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477417841_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t35 minutes ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMy plan was just to make the function_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tbone.scale(x_co_ y_co_  z_co_  _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_scaleChildren _eq_ false)_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo worries_co_ i can keep records of the scalings on another layer._lt_br /_gt_\n\tIt will be interesting how you do it_co_ because until yesterday i thought this is mission impossible with how bones/animation work _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-28T15:36:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis was a lot harder than I thought it would be.  The issue was maintaining the correct scale when rotating.  I finally figured it out and will submit a PR tonight or tomorrow.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m adding a Bone.getScale() and a Bone.getScaleToRef(vec) so that you don_t_t have to keep track it of it in your code.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-01T19:33:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBone.setScale demo_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#I6RJJ%2346_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#I6RJJ#46_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]