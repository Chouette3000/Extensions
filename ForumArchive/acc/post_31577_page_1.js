[{"Owner":"javalang","Date":"2017-07-11T21:13:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using blender-BJS-Exporter 5.4.0 and have a blender scene with a keyframed animation starting from start Frame_dd_0 to Frame_dd_120. Unfortunately there are much more frames exported than expected (up to 640 but with gaps). It seems the scene is looped a second time but with some garbage and some gaps inbetween.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m new to blender but I_t_m quite sure to have a consistent scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ data-fileid_eq__qt_13817_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_13817_qt_ rel_eq__qt__qt__gt_cubecircle.blend_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_13818_qt_ data-fileid_eq__qt_13818_qt_ rel_eq__qt__qt__gt_testbabylon17.babylon_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-07-11T21:31:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou are probably using the JSON / .babylon exporter_co_ but I can explain using the source code generating exporter_co_ Tower of Babel.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou are doing non-skeleton animation_co_ so you get animations for position_co_ then rotation_co_ then scaling.  You are not scaling in your case_co_ but this is really not detectable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou do have 3 actions in your .blend_co_ so the # of frames are cumulative.  These 3 animation ranges get created.  The gaps are just for sanity of separating where each action starts / ends.  If you are only interested in Action.001_co_ then delete the others.  The exporter does all.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this.createAnimationRange(_qt_Action.001_qt__co_ 0_co_ 120)_sm_\nthis.createAnimationRange(_qt_Action.002_qt__co_ 130_co_ 250)_sm_\nthis.createAnimationRange(_qt_BezierCircleAction_qt__co_ 260_co_ 380)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAlso_co_ if the rotation or position is linear_co_ you can remove frames in the middle_co_ I think &amp_sm_ save some space.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-07-11T22:01:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ thank you very much for reply.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf you are only interested in Action.001_co_ then delete the others\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis is the problem_co_ I have only  _lt_strong_gt_one _lt_/strong_gt_action in my blender file... so how to delete the others? I baked an animation from a follow path constraint...and deleted the curve afterwards . Maybe garbage in the blender file!\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAlso_co_ if the rotation or position is linear_co_ you can remove frames in the middle_co_ I think &amp_sm_ save some space\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMy target scene will not be linear_co_ it_t_s only a test_co_ but thanks for the hint.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTower of Babel\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes I_t_ve installed this plugin_co_ but I don_t_t know to use it and I red something about that this software was replaced by exporter?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you drop me some lines how to use?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ Oh I see_co_ there will be a file.js created...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you again\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-07-11T22:57:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOK_co_ problem found_co_ it was garbage in the blender file. Blender has some difficulties in deleting animation data_co_ now after _qt_real_qt_ deleting_co_ saving and reloading the right count of frames are finally  generated_co_  see _lt_a href_eq__qt_https_dd_//blender.stackexchange.com/questions/62695/delete-action-from-list_qt_ rel_eq__qt_external nofollow_qt__gt_delete-action-from-list_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]