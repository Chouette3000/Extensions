[{"Owner":"JonVarner","Date":"2018-07-28T16:54:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey all_co_ I am currently working on a project that has a mesh driven by joints. However_co_ during the animation I need to be able to determine the actual real world position for one of the vertices. I have tried\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_.getVerticesData(BABYLON.VertexBuffer.PositionKind_co_ true)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis gives me the position of the vertex(s)  at its starting point and not where it actually is as it deforms. I also tried\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.Vector3.TransformCoordinates(vertex_co_ mesh.getWorldMatrix()_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis of course gave me the real world coordinates of the vertex at its starting point. Again not quite what I was after.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I guess I am hoping that someone can point me in the direction of finding the location of a vertex after it has been moved by a joint. Thanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-30T16:38:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! unfortunately (in your case) the bones are processed on GPU side to be fast!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo you cannot get the real world value of a vertex directly unless you turn off the GPU processing. It is possible but it will consume more CPU.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can do it with mesh.computeBonesUsingShaders _eq_ false. In this case all the transformed values will be in  getVerticesData(BABYLON.VertexBuffer.PositionKind_co_ true)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-07-30T23:46:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you don_t_t need the exact vertex position_co_ you might be able to use bone.getAbsolutePositionFromLocal.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.bone.ts#L1045_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.bone.ts#L1045_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-07-31T00:05:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere_t_s an example_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#EG1J26%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#EG1J26#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]