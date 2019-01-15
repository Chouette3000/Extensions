[{"Owner":"JohnK","Date":"2016-11-01T15:22:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt seems that from BJS2.3 to BJS2.4 to BJS2.5 the function toEulerAngles when applied to a quaternion has been reinterpreted and changed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe confusion has probably arisen because there can be many interpretations of Euler Angles and how they are applied.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn BJS2.3 the toEulerAngles function was - given an orientation in quaternion form supply the Euler Angles that can be applied using the ZXZ convention to produce the same rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn BJS2.5 the function toEulerAngles is - given an orientation in quaternion form supply the Euler Angles in the order x_co_ y_co_ z that can be used as parameters for mesh.rotation\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn BJS2.4 I can see the reasoning was to add potentially more conventions but work with the same intention as for BJ2.3.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn other words I think the intention for BJS2.3 and BJS2.4_co_ in a limited way_co_ was knowing an orientation through a quaternion_co_ then for any given convention quaternion.toEulerAngles(convention) would return the alpha_co_ beta_co_ gamma to be used for that convention to produce the same rotation_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tie an inverse function EULER--&gt_sm_QUATERNION_co_ CONVENTION--&gt_sm_EULER.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn BJS2.5 knowing an orientation through a quaternion_co_ then quaternion.toEulerAngles() returns three angles to be plugged into mesh.rotation\n_lt_/p_gt_\n\n_lt_p_gt_\n\tie EULER--&gt_sm_QUATERNION--&gt_sm_NEW EULER ANGLES FOR CONVENTION ZXY in order x_co_ y_co_ z\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy questions are -\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tIs the interpetation used in BJS2.5 the one wanted? IMHO the answer is yes it is probably what most people expect_co_ though the original author will_co_ I expect_co_ not agree?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tAny breaking changes issues that anyone is worried about?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tAnybody require the inverse type interpretation as of 2.3 and 2.4 (if so new additional functions will be necessary)\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\tIf 1 and not 2 then I would drop the order parameter entirely and make sure that in the documentation for the classes BJS2.5 toEulerAngles and  toEulerAnglesToRef it is clear that the intention is to return three Euler Angles that can be plugged into mesh.rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ you may like to consider the above as I believe you PRd the changes for BJS2.5\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_16px_sm__qt__gt__lt_strong_gt_More words for those who wish to read further._lt_/strong_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn BJS mesh.rotation uses one particular interpretation which is - for three _qt_Euler Angles_qt_ alpha_co_ beta and gamma with alpha about axis x_co_ beta about axis y and gamma about axis z then\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotation _eq_ new BABYLON.Vector3(alpha_co_ beta_co_ gamma)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tapplies these in the order about z_co_ about x about y using world axes\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis can be seen by applying\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotate(BABYLON.Axis.Z_co_ gamma_co_ BABYLON.Space.WORLD)_sm_\nmesh.rotate(BABYLON.Axis.X_co_ alpha_co_ BABYLON.Space.WORLD)_sm_\nmesh.rotate(BABYLON.Axis.Y_co_ beta_co_ BABYLON.Space.WORLD)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tdirectly after the mesh has been created.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince using rotate produces a rotationQuaternion for the mesh you then do\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.rotationQuaternion.toEulerAngles() which in BJS 2.5 returns alpha_co_ beta_co_ gamma (in order x_co_ y_co_ z) but didn_t_t in BJS2.3 or BJS2.4\n_lt_/p_gt_\n\n_lt_p_gt_\n\t___________________________________________________________________________________________________________\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow take a different convention with alpha_co_ beta_co_ gamma as Yaw_co_ Pitch_co_ Roll about y (as vertical)_co_ x and z all applied around local axes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tApplying\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotate(BABYLON.Axis.Y_co_ Yaw_co_ BABYLON.Space.LOCAL)_sm_\nmesh.rotate(BABYLON.Axis.X_co_ Pitch_co_ BABYLON.Space.LOCAL)_sm_\nmesh.rotate(BABYLON.Axis.Z_co_ Roll_co_ BABYLON.Space.LOCAL)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tdirectly after mesh creation then\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.rotationQuaternion.toEulerAngles() returns Pitch_co_ Yaw_co_ Roll which are the angles  in the order  x_co_ y_co_ z for slotting into mesh.rotation\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotate _eq_ new BABYLON.Vector3(Pitch_co_ Yaw_co_ Roll) _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tproduces the same rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote BJS2.3 and BJS2.4 do not produce useful values for the convention ZXY.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t____________________________________________________________________________________________________________________________________\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFinally take a third convention alpha_co_ beta_co_ gamma in the order around z_co_ then x then z as world axes. Apparently this is a fairly standard convention when used with local axes but for reasons that should become apparent I will stick with world axes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tApplying\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotate(BABYLON.Axis.Z_co_ alpha_co_ BABYLON.Space.WORLD)_sm_\nmesh.rotate(BABYLON.Axis.X_co_ beta_co_ BABYLON.Space.WORLD)_sm_\nmesh.rotate(BABYLON.Axis.Z_co_ gamma_co_ BABYLON.Space.WORLD)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tdirectly after mesh creation then\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.rotationQuaternion.toEulerAngles() returns alpha_co_ beta_co_ gamma in BJS2.3_co_ nothing useful in BJS2.4 and\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin BJS2.5 three angles theta_co_ phi_co_ psi in the order x_co_ y_co_ z which can be plugged straight into mesh.rotation to give the same orientation eg\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.rotation _eq_ new BABYLON.Vector3(theta_co_ phi_co_ psi)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_Summary_lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo in BJS2.3 the function toEulerAngles  when given an orientation in quaternion form returns the Euler Angles that can be applied using the ZXZ convention to produce the same rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn BJS2.5 the functionf toEulerAngles when given an orientation in quaternion form returns the Euler Angles in the order x_co_ y_co_ z that can be used as parameters for mesh.rotation\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-01T16:08:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_149585_qt_ data-ipsquote-contentid_eq__qt_26147_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1478013737_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t21 minutes ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIn BJS2.5 the function toEulerAngles is - given an orientation in quaternion form supply the Euler Angles in the order x_co_ y_co_ z that can be used as parameters for mesh.rotation\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIsn_t_t the order y_co_ x_co_ z ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can add the old YZX code back to the toEulerAngles function.  I don_t_t think it should be the default though since the framework doesn_t_t use that order by default.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-11-01T16:28:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ I think that the toEulerAngles function returns in the correct order_co_ eg when E _eq_ mesh.rotationQuaternion().toEulerAngles() then mesh1.rotation(E.x_co_ E.y_co_ E.z)  matches the orientation of mesh1. Will add PG soon.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-01T16:31:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1FZQZH%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1FZQZH#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttoEulerAngles and BJS use the order y_co_ x_co_ z not x_co_ y_co_ z.  I might have misunderstood your statement above though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-01T16:37:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI agree with Adam (and I_t_m the original author _dd_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe may experience breaking changes but this is because the initial one was wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI like the idea of stating in the doc that the ToEulerAngle is stated to return values plugable in the mesh.rotation vector\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-11-01T17:16:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSomewhere along the lines we have crossed wires about the meaning of order x_co_ y_co_ z. I want _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt__t_s PG to stay.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the following PG angles are chosen at random_co_ axes are chosen at random and whether they are world or local is chosen at random. The box is rotated according to these results. From the rotationQuaternion Euler Angles are obtained and used in the order x_co_ y_co_ z within box1.rotation and the orientation of the two boxes match. This is what I mean by the order x_co_ y_co_ z.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ST43U%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ST43U#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-11-01T17:38:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tStill trying to be clear what you mean by\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_149600_qt_ data-ipsquote-contentid_eq__qt_26147_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1478017906_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBJS use the order y_co_ x_co_ z\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tbecause if you take mesh.rotation _eq_ new BABYLON.Vector3(x_co_ y_co_ z) then the rotations are done in the order z_co_ x_co_ y as seen in the match between box and box1 in this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ST43U%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ST43U#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSwapping the individual rotations to order y_co_ x_co_ z gives a mismatch\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ST43U%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ST43U#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMind you I have been playing around with this most of the afternoon _co_so as well as the meshes my head is spinning and as you did all the work on sorting toEulerAngles and that works excellently then I think it is only a communication problem as you are happy and I am happy that in practice it all now works as expected._lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLight Dawns (perhaps) if you do y_co_ x_co_ z in local axes then this matches with  mesh.rotation _eq_ new BABYLON.Vector3(x_co_ y_co_ z)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ST43U%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ST43U#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]