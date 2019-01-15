[{"Owner":"JackFalcon","Date":"2018-05-10T06:43:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis code converts a Screen Pick in World Space down to a Local Space on one side of a rotated cube_co_ so that user can move objects around on each face of the cube...\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var invertParentWorldMatrix _eq_ northPlane.getWorldMatrix().clone()_sm_\ninvertParentWorldMatrix.invert()_sm_\nvar local_position _eq_ BABYLON.Vector3.TransformCoordinates(pickPointNext_co_ invertParentWorldMatrix)_sm_\npickObj.position.copyFrom(local_position)_sm_\npickObj.position.addInPlace(moveVector)_sm_  //MOVE-TO-POSITION-._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tProblem arises in optimizing the Cube. By making it small and scaling it up.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe translation above didn_t_t scale. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe pick still moves_co_ but at tiny-scale.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ the translation (above) needs to scale up to match the parent_co_ northPlane.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it seems like the scaling is... lost in translation somehow?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny tips on how to scale up the transform above? Does it need baking?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks much_co_ Looking around... _dd_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2018-05-10T15:22:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSOLUTION - here is a solution found to scale the transformCoordinate_co_ thanks to the babylon docs_co_ and a post from 2015( _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5363-gwenael/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5363_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5363-gwenael/_qt_ rel_eq__qt__qt__gt_@gwenael_lt_/a_gt_ ).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you know of an updated or more performant way please ping_co_ otherwise_co_ hope it helps someone else.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_//TRANSFORM-FROM-2D-PROJECTION-TO-WORLD-TO-LOCAL-SPACE-.\nvar invertParentWorldMatrix _eq_ basePlane.getWorldMatrix().clone().invert()_sm_\nvar pickMoveVector _eq_ pickPointNext.subtract(pickPoint)_sm_ //vector of mouse move_co_ GLOBAL.\nvar local_position _eq_ BABYLON.Vector3.TransformCoordinates(pickPointNext_co_ invertParentWorldMatrix)_sm_\n//SCALE-TRANSFORMATION-TO-MATCH-PARENT-SCALING-.\nvar originInLocalSpace _eq_ BABYLON.Vector3.Zero()_sm_\nvar move _eq_ originInLocalSpace.subtract(local_position).normalize()_sm_\nvar moveScaledInLocalSpace _eq_ move.scale(8).add(local_position)_sm_ \n//SET-SCALED-LOCAL-POSITION-.\npickObj.position.copyFrom(moveScaledInLocalSpace)_sm_\npickObj.position.addInPlace(pickMoveVector)_sm_  //MOVE-TILE-TO-POSITION-._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBONUS_dd_ if you have insight on these related concepts_co_ I would love to understand more about_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta) why does a tiny then scaled up version of a mesh seem to perform quaternion rotations faster than a mesh imported at large scale from blender?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(found that tip in a different old-thread_co_ if I_t_m not mistaken)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tb) what is happening conceptually for _qt_invert_qt_ ParentWorldMatrix_co_ is it _qt_invert_qt_ as in - expand from a smaller local matrix into a larger world matrix?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tc) in the subtract() scale() then add() sequence of calls (above)_co_ is that basically scaling the difference between the move point and the local origin?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tReally curious on how these things work at a deeper level_co_ I_t_ll dip in the src l8r...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Hope this help someone._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Thanks._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-10T19:06:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214452_qt_ data-ipsquote-contentid_eq__qt_37541_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1525965777_qt_ data-ipsquote-userid_eq__qt_25131_qt_ data-ipsquote-username_eq__qt_aFalcon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ aFalcon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\twhat is happening conceptually for_lt_span_gt_﻿_lt_/span_gt_ _qt_invert_lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt__lt_/span_gt__lt_/span_gt__qt__lt_span_gt_﻿_lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe inverse matrix. Q is the inverse of P when PQ _eq_ I_co_ the identity matrix.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2018-05-10T19:30:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_! I get identity matrix_co_ so that relation makes sense and is very helpful. Also... I will look for that ref in the src. +1!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2018-05-11T04:49:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTIP_dd_ if you are writing a babylon App in Electron... and you have Web app and Electron app running simultaneously... you should know that your GPU will be split between the two!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had 5 running. And... it gets slow. _lt_span_gt__dd_ ]_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_So the best performance optimization (was not scaling down the 3D world in blender_co_ then scaling it up again in babylon) it was closing the Babylon Web App while working on the Babylon electron app. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__dd_ )_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]