[{"Owner":"amorgan","Date":"2015-01-16T23:08:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not sure if it is supposed to work this way_co_ but if I assign a procedural texture to something and set the mesh.isVisible to false_co_ procedural texture seems to still be processed and use up resources. This happens also when it is not in the camera view._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Using v2.0_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit_dd_ Should specify this is specifically with the fireProcedural. The only other one I_t_ve used is marbleProcedural and it does not appear to happen on that one_co_ I would imagine because it is static._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-17T17:13:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes they are processed on every frame. You can stop processing a procedural texture by setting texture.refreshRate _eq_ 0_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amorgan","Date":"2015-01-17T18:27:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I assume it_t_s not easy to correlate the mesh_t_s visibility to whether or not a procedural texture should be processed? Or in other words_co_ when a mesh is hidden_co_ the procedural textures do not get processed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the info I will start using this._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-17T18:49:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It is even more difficult than that because a texture can be used by many materials on many objects_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]