[{"Owner":"MackeyK24","Date":"2017-08-30T09:37:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy Man... _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ got another one for your review _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIn Unity for animations that move around (like walk that actual move the skinned mesh forward) they have switch _t_Apply Root Motion_t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen apply root motion is off and they ar using an animation that IS NOT INPLACE they do something to make that skin the bones are on stay\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_t_IN PLACE_t_ ... Does anybody know how I can do something to make my animations stay in place... Maybe at the transform matrix level that I encode into the animation. This is where I _t_Sample_t_ the transform compute the matrix to get key for each bone and stack all those on the bone.animation... Maybe I could do something here that _t_Keeps_t_ the X_co_Y AND Z at the original position (like an in place animation)... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr is there some other trick to using NON IN PLACE animations as character movement in BabylonJS ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOtherwise you will have to go replace ALL the individual animations on a Unity character controller with in place animations for each blend tree node walk_co_ strafe_co_ crouch etc... If you can find IN-PLACE animations to fit your existing Avatar Controller setup.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I can somehow do what unity does (Preferable at the export level when build that bone matrix so I would not have to compensate at runtime or anything like that) and _t_DISABLE ROOT MOTION_t_ which keeps a NON-IN-PLACE animation in-place ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is how I build the bone.animation for your reference_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_AnimationMode.BeginSampling()_sm_\nfor (var i _eq_ 0_sm_ i &lt_sm_ clipFrameCount_sm_ i++)\n{\n    clip.SampleAnimation(source_co_ i * frameTime)_sm_\n    var local _eq_ (transform.parent.localToWorldMatrix.inverse * transform.localToWorldMatrix)_sm_\n    float[] matrix _eq_ new[] {\n        local[0_co_ 0]_co_ local[1_co_ 0]_co_ local[2_co_ 0]_co_ local[3_co_ 0]_co_\n        local[0_co_ 1]_co_ local[1_co_ 1]_co_ local[2_co_ 1]_co_ local[3_co_ 1]_co_\n        local[0_co_ 2]_co_ local[1_co_ 2]_co_ local[2_co_ 2]_co_ local[3_co_ 2]_co_\n        local[0_co_ 3]_co_ local[1_co_ 3]_co_ local[2_co_ 3]_co_ local[3_co_ 3]\n    }_sm_\n    var key _eq_ new BabylonAnimationKey\n    {\n        frame _eq_ (i + frameOffest)_co_\n        values _eq_ matrix\n    }_sm_\n    keys.Add(key)_sm_\n}\nAnimationMode.EndSampling()_sm_\nframeOffest +_eq_ clipFrameCount_sm_\ntotalFrameCount +_eq_ clipFrameCount_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthen dump on the bone_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var babylonAnimation _eq_ new BabylonAnimation\n{\n    name _eq_ bone.name + _qt_Animation_qt__co_\n    property _eq_ _qt__matrix_qt__co_\n    dataType _eq_ (int)BabylonAnimation.DataType.Matrix_co_\n    loopBehavior _eq_ (int)BabylonAnimation.LoopBehavior.Cycle_co_\n    framePerSecond _eq_ frameRate_co_\n    keys _eq_ keys.ToArray()\n}_sm_\nif (animationState !_eq_ null)\n{\n    babylonAnimation.loopBehavior _eq_ (int)animationState.loopBehavior_sm_\n    babylonAnimation.enableBlending _eq_ animationState.enableBlending_sm_\n    babylonAnimation.blendingSpeed _eq_ animationState.blendingSpeed_sm_\n}\nbone.animation _eq_ babylonAnimation_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs always .. any info will help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-08-30T12:26:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHolly Shit... I think I got it... I can_t_t believe that worked... So simple but I can now _t_NOT_t_ apply root motions on root bones_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t... If the transform (the bone) _eq__eq_ the skinnedMesh.rootBone and (Apply Root Motion is Turn OFF) I simple make the matrix using 0 x and z for JUST THE ROOT bone transform... AND IS FUCKING WORKING... I can_t_t believe it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_AnimationMode.BeginSampling()_sm_\nfor (var i _eq_ 0_sm_ i &lt_sm_ clipFrameCount_sm_ i++)\n{\n\n    clip.SampleAnimation(source_co_ i * frameTime)_sm_\n    Matrix4x4 local _eq_ (transform.parent.localToWorldMatrix.inverse * transform.localToWorldMatrix)_sm_\n    if (applyRootMotion _eq__eq_ false &amp_sm_&amp_sm_ transform _eq__eq_ skinnedMesh.rootBone) {\n        local _eq_ Matrix4x4.TRS(new Vector3(0_co_transform.localPosition.y_co_0)_co_ transform.localRotation_co_ transform.localScale)_sm_\n    }\n    float[] matrix _eq_ new[] {\n        local[0_co_ 0]_co_ local[1_co_ 0]_co_ local[2_co_ 0]_co_ local[3_co_ 0]_co_\n        local[0_co_ 1]_co_ local[1_co_ 1]_co_ local[2_co_ 1]_co_ local[3_co_ 1]_co_\n        local[0_co_ 2]_co_ local[1_co_ 2]_co_ local[2_co_ 2]_co_ local[3_co_ 2]_co_\n        local[0_co_ 3]_co_ local[1_co_ 3]_co_ local[2_co_ 3]_co_ local[3_co_ 3]\n    }_sm_\n    var key _eq_ new BabylonAnimationKey\n    {\n        frame _eq_ (i + frameOffest)_co_\n        values _eq_ matrix\n    }_sm_\n    keys.Add(key)_sm_\n}\nAnimationMode.EndSampling()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t So for the ROOT BONE ONLY ... I don_t_t want the local to world matrix calculation... I just want the local with 0 X and Z ... It looks JUST LIKE unity runtime when they are actually NOT applying root motion to the Skinned Mesh Root Bone Transform... FUCKING AWESOME _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]