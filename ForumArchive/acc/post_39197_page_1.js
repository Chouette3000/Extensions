[{"Owner":"Hersir","Date":"2018-07-31T13:05:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttrying to achieve mesh scaling from parent but with maintained aspect ratio_co_ so if parent is scaled_co_ child mesh will scale together but will maintain aspect ratio.\n_lt_/p_gt_\n\n_lt_p_gt_\n\twould it be possible to do that by overriding `computeWorldMatrix` or there is better way to override default scaling behaviour ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to override `_afterComputeWorldMatrix` to update world and local matrix_co_ but no luck _co_ probably doing something totally wrong _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ protected _afterComputeWorldMatrix() {\n        super._afterComputeWorldMatrix()_sm_\n        const min _eq_ Math.min(this._worldMatrix.m[0]_co_ this._worldMatrix.m[10])_sm_\n        this._worldMatrix.m[0] _eq_ min_sm_\n        this._worldMatrix.m[10] _eq_ min_sm_\n        this._localWorld.m[0] _eq_ min_sm_\n        this._localWorld.m[10] _eq_ min_sm_\n    }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tthanks for any hint\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-31T15:00:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey! what do you mean by maintain aspect ratio? Like if I scale the parent with (1_co_5_co_1) the children should scale with what?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-08-01T06:02:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ by that I mean if there is square plane with scaling (1_co_1_co_1) and it has child  square box scale (1_co_1_co_1)_co_ if plane is scaled box should still be square so it should react to changes on both axes (x_co_z) if just 1 axis is scaled it should not change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave small _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#408PC9%231_qt_ rel_eq__qt_external nofollow_qt__gt_PG_lt_/a_gt_ with example_co_ if commented line is added_co_ child box should still be square (scaled by smallest world scale ratio from x_co_z ?)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-08-01T09:07:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMade some POC _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#408PC9%232_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_ just position is off (moved up from plane)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BartW","Date":"2018-08-01T09:30:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would extend TransformNode as a container and add the plane and cube to it. This container should never actually scale itself but assign scales and positions to its child meshes..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if you add a custom scale property or overwrite its scaling property and calculate the new positions and scales of the submeshes you would not have to mess with the worldMatrix per mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould that work for you?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-08-01T11:18:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#408PC9%233_qt_ rel_eq__qt_external nofollow_qt__gt_PG_lt_/a_gt_ I made some changes. I changed the plane to a ground_co_ simply because rotating the plane swapped reference to y and z when scaling plane and hence box and this confused my simple brain.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo a scaling of the ground by (2 _co_ 1_co_  3) must scale the box also by (2_co_ 1_co_  3) giving a box of course of width 2_co_ height 1 and depth 3. So if you want a face (say the font and back faces) to be square then the height has to be 2 also_co_ so the above PG scales the child_t_s y by 2_co_ since the scaling is carried out relative to the ground and the child is at 0.5 relative to the ground the child needs re-aligning to the ground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA simpler way_co_ given that you know you want a square face is to adjust y from the start as in this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#408PC9%234_qt_ rel_eq__qt_external nofollow_qt__gt_second PG_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-08-01T11:58:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ thanks for input_co_ but looks like I have not explained correctly_co_ I needed to scale parent lets say for (4_co_ 2_co_ 2) but child would scale all sides by 2 (min scale) and would remain square box not becoming rectangle box_co_ like in my _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#408PC9%236_qt_ rel_eq__qt_external nofollow_qt__gt_POC_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-08-01T14:15:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBy square box I presume you mean cube (width_co_ height and depth all the same)_co_ and by rectangle box a cuboid (width_co_ height and depth not all the same)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomething like _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#408PC9%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#408PC9#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-08-02T06:20:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_Yes_co_ you are right_co_ (should chose words more careful)_co_ looks close to what_co_ need_co_ will see how I can automate it_co_ as I have approx 60 such children and need to animate parent scaling_co_ so children will need to be updated during animation.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-08-02T10:47:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe bone scale method might be helpful_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.bone.ts#L519_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Bones/babylon.bone.ts#L519_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2018-08-03T07:29:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk made working using _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ proposide solution_co_ just added listener on parent for `onAfterWorldMatrixUpdateObservable`_co_ cached scaling and looped through children and applied scale fix. Just 1 thing is that children can be rotated_co_ any good ways to apply proper scaling on rotated meshes_co_ as axes are fliped_co_ on way what I thought was to wrap them in transform node that is not rotated and scale it but maybe there are other means to calculate proper scaling for rotated meshes ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBig thank for help\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-08-03T11:25:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_224019_qt_ data-ipsquote-contentid_eq__qt_39197_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533281367_qt_ data-ipsquote-userid_eq__qt_26231_qt_ data-ipsquote-username_eq__qt_Hersir_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Hersir said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tJust 1 thing is that children can be rotated_co_ any good ways to apply proper scaling on rotated meshes_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tLook at bone scale code.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Eh_co_  I thought about it some more and the lack of local matrix might be a problem. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-08-03T11:59:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just found this function I wrote a while ago for dealing with this issue_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#28IXSE%2336_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#28IXSE#36_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tclicking the PG parents box1 to box2 using the parentMesh function.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]