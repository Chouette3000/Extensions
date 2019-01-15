[{"Owner":"maxime1992","Date":"2018-03-15T12:41:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi! _lt_br /_gt_\n\t_lt_br /_gt_\n\tI_t_m completely a newbie in 3D world and BabylonJs._lt_br /_gt_\n\t_lt_br /_gt_\n\tWhat I_t_d like to do is to be able to select a given mesh by clicking on it and change it_t_s color to show that it has been selected._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\tI_t_ve created a really basic scene with 2 meshes and googled my problem but couldn_t_t find anything about that._lt_br /_gt_\n\tMaybe it_t_s super trivial (?)_lt_br /_gt_\n\t_lt_br /_gt_\n\tHere_t_s my example_co_ thanks for any help or any useful resource to get started on this task _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TC2K69_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TC2K69_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-03-15T13:03:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30747-maxime1992/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30747_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30747-maxime1992/_qt_ rel_eq__qt__qt__gt_@maxime1992_lt_/a_gt__lt_br /_gt_\n\tWelcome to the forums._lt_br /_gt_\n\t_lt_br /_gt_\n\tPretty simple task_sm_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TC2K69%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TC2K69#1_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tYou can read more about picking here_sm_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/picking_collisions_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/picking_collisions_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"maxime1992","Date":"2018-03-15T13:44:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ thanks for the quick answer (and the demo!) _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tI_t_m facing 1 issue though with your demo_dd__lt_br /_gt_\n\t_lt_br /_gt_\n\tIt_t_s selecting or loosing the focus on a mesh if I drag and drop in/out of one of them._lt_br /_gt_\n\tFor example the biggest part is selected_co_ you just want to rotate the camera and drag from/to an empty point_co_ you_t_ll lose the focus._lt_br /_gt_\n\t_lt_br /_gt_\n\tI thought of using \n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_scene.onPointerPick_lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tBut I_t_m getting _lt_span style_eq__qt_background-color_dd_#c73228_sm_color_dd_#ffffff_sm_font-size_dd_medium_sm__qt__gt_scene.onPointerPick is not a function_lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tI tried to search into the event but there does not seem to be a starting and ending position so I don_t_t know how to figure out whether it_t_s a drag or not\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-03-15T14:07:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ttry this with line #36 commented out._dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TC2K69%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TC2K69#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-03-15T14:36:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30747-maxime1992/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30747_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30747-maxime1992/_qt_ rel_eq__qt__qt__gt_@maxime1992_lt_/a_gt_ _lt_br /_gt_\n\tI added the following code to allow de-selecting \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if(selected) {\n  selected.material.diffuseColor _eq_ BABYLON.Color3.White()_sm_\n  selected _eq_ null_sm_\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tYou can move it inside the hit-test to only allow de-selecting when selecting a new mesh_co_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if(evt.pickInfo.hit &amp_sm_&amp_sm_ evt.pickInfo.pickedMesh &amp_sm_&amp_sm_ evt.event.button _eq__eq__eq_ 0){\n  if(selected) {\n    selected.material.diffuseColor _eq_ BABYLON.Color3.White()_sm_\n  }\n  selected _eq_ evt.pickInfo.pickedMesh_sm_\n  evt.pickInfo.pickedMesh.material.diffuseColor _eq_ BABYLON.Color3.Green()_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tOr you can check if the pointer moves between pointerdown &amp_sm_ pointerup_lt_br /_gt_\n\t(this will however make it difficult/impossible to pick if the pointer moves even slightly)_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TC2K69%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TC2K69#4_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tYou can also create pointerCaches and check how much a pointer has moved between pointerDown and pointerUp_co__lt_br /_gt_\n\tAvoids a million pointerMove fires_co_ and lets you set a limit for how much a pointer is allowed to move and still fire the de-/select code_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#TC2K69%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#TC2K69#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"maxime1992","Date":"2018-03-15T14:53:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29929-babbleon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29929_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29929-babbleon/_qt_ rel_eq__qt__qt__gt_@babbleon_lt_/a_gt_ tried but it_t_s not working as expected _lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ thx it_t_s getting closer _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tBUT_co_ if you make the scene rotating with your mouse and while it_t_s rotating/in motion_co_ click on a part it_t_ll not be selected/unselected.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"maxime1992","Date":"2018-03-15T15:10:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_eq_x my bad _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ !!!_lt_br /_gt_\n\t_lt_br /_gt_\n\tIt_t_s perfect_co_ thanks for your help _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]