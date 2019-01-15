[{"Owner":"Hersir","Date":"2018-07-03T10:19:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thave some question regarding `alwaysSelectAsActiveMesh`.\n_lt_/p_gt_\n\n_lt_p_gt_\n\twas experimenting with `alwaysSelectAsActiveMesh` and saw that in `_evaluateActiveMeshes` there is check for active meshes_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (mesh.alwaysSelectAsActiveMesh || mesh.isVisible &amp_sm_&amp_sm_ mesh.visibility &gt_sm_ 0 &amp_sm_&amp_sm_ ((mesh.layerMask &amp_sm_ this.activeCamera.layerMask) !_eq__eq_ 0) &amp_sm_&amp_sm_ mesh.isInFrustum(this._frustumPlanes)) ..._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAny reason why `isVisible` and `visibility ` is not checked before `alwaysSelectAsActiveMesh` ? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLike this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (mesh.isVisible &amp_sm_&amp_sm_ mesh.visibility &gt_sm_ 0 &amp_sm_&amp_sm_ (mesh.alwaysSelectAsActiveMesh || ((mesh.layerMask &amp_sm_ this.activeCamera.layerMask) !_eq__eq_ 0 &amp_sm_&amp_sm_ mesh.isInFrustum(this._frustumPlanes))) ..._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt have some specific semantics ? As for me if mesh is not visible it should not be rendered\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-03T15:06:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell no good reason _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I_t_ll fix that for next commit_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-07-10T07:42:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ saw that this was merged_co_ tried it_co_  all looked good but saw issues with visibility change_co_  for meshes were _lt_span style_eq__qt_color_dd_#16a085_sm__qt__gt_alwaysSelectAsActiveMesh_lt_/span_gt_ is _lt_span style_eq__qt_color_dd_#16a085_sm__qt__gt_true_lt_/span_gt__co_ they dont react to _lt_span style_eq__qt_color_dd_#16a085_sm__qt__gt_visibility_lt_/span_gt_ change until some child mesh is added to them. Could it be caused by this change or its related to _lt_span style_eq__qt_color_dd_#16a085_sm__qt__gt_freezeActiveMeshes_lt_/span_gt_ from scene ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-10T14:22:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tif you freezeActiveMeshes then they are no more evaluated and thus they stay in their current rendering bucket. Which means that if they were flagged with full visibility (opaque) they will stay opaque.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to change visibility or alpha for meshes_co_ you have to unfreeze / freeze _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-07-11T05:42:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ thanks for clarification\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]