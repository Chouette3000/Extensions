[{"Owner":"ian","Date":"2016-09-05T08:22:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs.com/Demos/INSTANCES/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/Demos/INSTANCES/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tok here is demo for instances._lt_br /_gt__lt_br /_gt_\n\tHow Is design one three(base tree component). Is three one mesh(object) or is it made with more meshes(objects) ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf base tree component is made with more objects. For example(two objects) with trunk and treetop. If we design tree(base tree component) in blender. Then if I add multi trees with _qt_Duplicate linked_qt_ to another layer. Everythink is ok. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCAN WE ADD THIRD OBJECT (for example snow) on base tree component so that_co_ all _qt_Duplicate linked_qt_ objects will reflect change. So that all _qt_duplicate linked_qt_ object will reflect snow?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Blender or 3D Max). How can we achive that. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(WITH NO CODING IN BLENDER) (JUST DESIGN IN BLENDER OR 3D MAX)._lt_br /_gt__lt_br /_gt_\n\t(I know that if we add object snow on base tree component_co_ and than code in babylon instances that snow will reflect on all instances. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBUT HOW WE DO THIS IN BLENDER OR 3D MAX? CAN WE ADD OBJECTS TO THE BASE INSTANCE OBJECT SO THAT ALL DUPLICATE LINKED OBJECTS WILL REFLECT NEW ADDED OBJECT?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tgreetings_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tian\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-09-05T08:48:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDo you have any plan to support group(s) and group instance(s)?_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-09-05T08:55:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou just had to be in edit mode and then model everything you want_co_ or select the new object then select the duplicate object and ctrl + j.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-09-05T15:07:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tV!nc3r thanx for your respond._lt_br /_gt__lt_br /_gt_\n\tyes it works well. _qt_Duplicated Linked_qt_ reflected what is changed in original component mesh. And component is always one mesh. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut we always have one component mesh. I would like to build component with more separated objects._lt_br /_gt_\n\tI try build component like parent-child and then from component do _qt_Duplicated Linked_qt_. This works well_co_ but when I add new child_co_ then _qt_Duplicated Linked_qt_ does not reflected change._lt_br /_gt__lt_br /_gt_\n\tThe main problem is that I would like to build component with separated objects. (I also would like to add each of this separated object primitive collider. And when I create more group instances_co_ then they retained colliders.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do not want to build component like one mesh._lt_br /_gt_\n\tI know that this is capable to do with groups and group instances (with blender). But babylon doesn_t_t support groups.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny advice? I am still prefer to go with groups and group instances._lt_br /_gt_\n\tMaybe I should at THE END OF constructed scene(final model) convert (all group instances) to meshes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr should I build the smallest components with _qt_Duplicated Linked_qt_ and larger with groups of _qt_Duplicated Linked_qt_? Any Advice?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgreetings_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tian_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-09-05T15:14:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know your level on Blender_co_ so I ask just in case _dd_ do you know that you can have_co_ in one object_co_ several vertex groups or material assignation ? It_t_s very useful to have a complex mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOtherwise_co_ could we have an example ? I_t_m pretty sure that you can_t_t export group however.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-09-05T16:02:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tV!nc3r thank you for your respond.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tI_t_ll try to do some example. And post it to you_co_ what I would like to do. (maybe tomorow)_lt_br /_gt_\n\tI don_t_t know about vertex groups. About materials do you think multi material assigantion on one mesh of object?_lt_br /_gt__lt_br /_gt__lt_strong_gt_Can you give me any references of vetrex groups (blender)_co_ can I see this_co_ any examples or youtube to see what you mean with _qt_vertex groups_qt_. Meybe I will need _qt_vertext groups_qt_ and _qt_Duplicated Linked_qt_(complex mesh). Or complex mesh with several _qt_vetex groups_qt_. _lt_/strong_gt__lt_br /_gt_\n\tI know that I can add (assign) different materials on one complex mesh(so let say one object).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tgreetings\n_lt_/p_gt_\n\n_lt_p_gt_\n\tian\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-09-06T07:16:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes the easiest way is to assign _lt_a href_eq__qt_https_dd_//www.blender.org/manual/render/blender_render/materials/multiple_materials.html_qt_ rel_eq__qt_external nofollow_qt__gt_multi materials_lt_/a_gt__co_ in edit mode you can easily find a part with the _lt_a href_eq__qt_https_dd_//www.blender.org/manual/_images/material-matmenu-matadded-editmode.png_qt_ rel_eq__qt_external nofollow_qt__gt_buttons assign_co_ select_co_ deselect_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs for vertex groups_co_ you can also _lt_a href_eq__qt_https_dd_//www.blender.org/manual/modeling/meshes/vertex_groups/vertex_groups.html_qt_ rel_eq__qt_external nofollow_qt__gt_check the doc_lt_/a_gt_. It will allow to make sort of set of vertex preselection_co_ aside from materials.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-09-06T09:48:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanx for your infos V!nc3r._lt_br /_gt__lt_br /_gt_\n\tI hope this things helps also other users of blender and bayblonjs _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]