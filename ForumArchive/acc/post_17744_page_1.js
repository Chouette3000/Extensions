[{"Owner":"Blax","Date":"2015-10-08T15:01:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Please help me (yes_co_ again _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1A8B4B_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1A8B4B_lt_/a_gt__lt_br_gt__lt_br_gt_1. have _lt_strong_gt_StandardMaterial_lt_/strong_gt__co_ binded on mesh_sm__lt_/p_gt__lt_p_gt_2. delete this material_dd_  _lt_strong_gt_material.dispose()_lt_/strong_gt__lt_/p_gt__lt_p_gt_3. _lt_strong_gt_scene.materials_lt_/strong_gt_ not contains this material more_co_ its OK_co__lt_/p_gt__lt_p_gt_BUT ...._lt_/p_gt__lt_p_gt_4. If we get _qt__lt_strong_gt_material_lt_/strong_gt__qt_ property from mesh we get link on deleted material._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How it works?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Example_dd__lt_/p_gt__lt_p_gt_First we deleted anything materials (we not know how meshes binded on disposed material)._lt_/p_gt__lt_p_gt_Second we need know - _lt_strong_gt_deleted material on this mesh or not_lt_/strong_gt__co_ but how_co_ if we get _qt_material_qt_ we get normal _lt_strong_gt_StandardMaterial_lt_/strong_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Check every time contains _lt_strong_gt_scene.materials_lt_/strong_gt_ this material or not is horrable_co_ but how make this correct?_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-08T15:12:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perhaps I didn_t_t get your question but is this not enough_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1A8B4B%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1A8B4B#1_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-10-08T20:21:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s actually rather interesting._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you dispose a material that is currently being used_co_ it is not being fully disposed. You can only dispose it after you set the mesh_t_s material to null._lt_/p_gt__lt_p_gt_Maybe the dispose function should also search all meshes using the material and set their material to null._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1A8B4B%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1A8B4B#2_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_strike_gt_Look at both alerts. JavaScript sometimes puzzles me. I feel like something that is done is wrong_co_ but i can_t_t pinpoint it..._lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s even more interesting than I thought _dd_-) The first call removes it from the scene.materials_co_ but isn_t_t completely deleted (As i wrote before). But for some reason_co_ the second call removed the default material from the scene_t_s materials array. Odd... Debugging further. I slowly start to sound like Wingnut... _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2015-10-09T07_dd_47_dd_14Z_t_ title_eq__t_10/09/2015 07_dd_47  AM_t_ data-short_eq__t_3 yr_t__gt_October 9_co_ 2015_lt_/time_gt_ by RaananW_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-08T20:44:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually there is always a material in the list (the default one)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_the bug comes from the dispose which removes the default one from the list_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m gonna update the dispose to unbind disposed materials as well_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Blax","Date":"2015-10-09T07:15:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_100062_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17744_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1444317173_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Perhaps I didn_t_t get your question but is this not enough_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1A8B4B%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1A8B4B#1_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Its not solve problem._lt_/p_gt__lt_p_gt_Im not know how meshes got deleted material. Look over all scene meshes everytime may be slowly and not gracefully._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Blax","Date":"2015-10-09T07:20:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_100121_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17744_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1444337078_qt__gt__lt_div_gt__lt_p_gt_I_t_m gonna update the dispose to unbind disposed materials as well_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ it would be_lt_span_gt__lt_span_gt_ excellent!!!  Thanks!_lt_/span_gt__lt_/span_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_UPD_dd__lt_/p_gt__lt_p_gt_Perhaps would be usefull have one more material method_dd__lt_/p_gt__lt_p_gt__lt_strong_gt_Material.getBindedMeshes()_lt_/strong_gt_  --&gt_sm_ [Array] ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-09T15:50:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep..will be in next commit _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Blax","Date":"2015-10-26T07:09:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_100222_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17744_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1444405834_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Yep..will be in next commit _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Great!! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-26T16:32:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s in the box_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]