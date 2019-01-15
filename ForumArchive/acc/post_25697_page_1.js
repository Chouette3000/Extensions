[{"Owner":"haestflod","Date":"2016-10-11T17:23:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ in our app we have parent &amp_sm_ child relations tree that could be for example have this structure_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_rootmesh\n   mesh\n   mesh\n      mesh\n        mesh_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tEach mesh should have their own scale so if a parent is scaled it will remove that scale by dividing the parents scale.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe recently added scaling and eventually found unintended behavior where rootmesh has a non-uniform scaling and if a mesh under has a rotation it skews that mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs reproduced in this playground_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CWAMX%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CWAMX#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I was wondering if it was possible to solve somehow by math somehow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-11T17:59:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello the problem here is that the child is rotated (and scaled around a different pivot due to the translation). You may need to first cancel completely parent scaling with the mesh.setPivotmatrix(parentScaling.inverse) (&lt_sm_-- pseudo code and not actual code as I_t_m on my phone)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"haestflod","Date":"2016-10-12T16:52:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHey_co_ I tried inverting some values with no luck.   Could you clarify a bit of what I_t_d have to do? Sorry I don_t_t have much experience with pivotMatrices.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-12T17:33:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis might help_dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/22271-matrix-decompose-issue/?do_eq_embed&amp_sm_comment_eq_127332&amp_sm_embedComment_eq_127332&amp_sm_embedDo_eq_findComment#comment-127332_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-10-13T09:37:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInstead of scaling set the values of the box to be those needed at the start. _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CWAMX%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CWAMX#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnless of course the parent needs to change scale over time.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"haestflod","Date":"2016-10-13T14:22:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s an interesting solution JohnK but is that applicable to a .babylon loaded mesh somehow? Like clone the geometry and alter all the vertice points?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd no the parent will not change scale as long as it has a child attached.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd thanks Adam for that piece of code if I can_t_t find a way solve it without creating a helper mesh to act as parent.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-13T14:38:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhy parent it then? Why not just position them to the _qt_parents_qt_ position and have them to rotate in relation to the _qt_parents_qt_ center axis then they will have their own scaling.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe other option is to just scale the child back after its parents resize_co_ and all the sub children should come back to size.  So if you scale down by 0.5 I think you would have to scale the child up by 2 if I_t_m not mistaken to get it back to size.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"haestflod","Date":"2016-10-13T14:42:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBecause it made it simple to move &amp_sm_ rotate them after adding as child mesh. All that is needed is to move &amp_sm_ rotate the parent and children automatically does the same.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso the child &amp_sm_ parent relations can be edited on the fly by either adding a mesh or remove a mesh and the children of that mesh by selecting with mouse.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd__lt_br /_gt_\n\tSo in the end I solved it using adam_t_s approach by adding an empty mesh._lt_br /_gt_\n\tHere_t_s a static version with 3 meshes_dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CWAMX%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CWAMX#15_lt_/a_gt__lt_br /_gt_\n\tHere_t_s the same but with some rotation &amp_sm_ scale being altered each frame_dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CWAMX%2318_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CWAMX#18_lt_/a_gt__lt_br /_gt_\n\tI did try using some kind of matrix decomposition at first but it never worked so alas adam_t_s approach it was!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]