[{"Owner":"Carharttguy","Date":"2017-07-27T14:39:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m learning the AssetsManager_co_ but I bump into this problem_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-family_dd_Menlo_sm__qt__gt_\n\n_lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_var _lt_/span_gt__lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_meshtask _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt__assetManager_lt_/span_gt_._lt_span style_eq__qt_color_dd_#7a7a43_sm__qt__gt_addMeshTask_lt_/span_gt_(name_co_ _lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt__qt__lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_rooturl_lt_/span_gt__co_ fileName)_sm_\n_lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_meshtask_lt_/span_gt_._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_onSuccess _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_function _lt_/span_gt_(task) {\n    task.loadedMeshes[_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_0_lt_/span_gt_]._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_position _lt_/span_gt__eq_ BABYLON.Vector3._lt_span style_eq__qt_font-style_dd_italic_sm__qt__gt_Zero_lt_/span_gt_()_sm_\n}_lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tBut one way or another_co_ task.loadedMeshes doesn_t_t exist. How is this possible?_lt_br /_gt_\n\tEdit_dd_ I also should call .load first_co_ but I don_t_t think that_t_s the problem here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2017-07-27T14:59:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you mean loadedMeshes doesn_t_t exist? Is it undefined?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the doc_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_assetsmanager_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_assetsmanager_lt_/a_gt_ containing a sample on the PG_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ZJYNY%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#ZJYNY#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDavod\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carharttguy","Date":"2017-07-27T18:09:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt__co_ thanks for your fast answer._lt_br /_gt_\n\tI found the problem. The error shown was something like this_dd__lt_br /_gt_\n\tTS2099_dd_ loadedMeshes not found on IAssetTask. So i figured I should_t_ve defined the type of _t_task_t_ this way_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-family_dd_Menlo_sm__qt__gt_\n\n_lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_meshtask_lt_/span_gt_._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_onSuccess _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_function _lt_/span_gt_(task_dd_ BABYLON.MeshAssetTask) {\n    task._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_loadedMeshes_lt_/span_gt_[_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_0_lt_/span_gt_]._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_position _lt_/span_gt__eq_ BABYLON.Vector3._lt_span style_eq__qt_font-style_dd_italic_sm__qt__gt_Zero_lt_/span_gt_()_sm_\n}_lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAnd this works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWouldn_t_t it be an idea to also have TypeScript examples in the docs? So the reader can choose which code examples are shown? I_t_m willing to translate the parts I can._lt_br /_gt_\n\tAlso poking _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ for this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carharttguy","Date":"2017-07-27T18:22:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tLittle side question_dd_ Why are the loadedMeshes abstract meshes? Is it safe to typecast them to meshes?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-27T21:54:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes it could be a good idea and actually we could even do it already.If you want you can initiate some_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Documentation_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Documentation_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]