[{"Owner":"2x4b","Date":"2017-11-15T06:46:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUsing camera.resetToCurrentRotation() I am able to set my camera to point to z+.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI really need to set the camera rotation on the y axis to face z- or x+ or x- as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately I have been blundering about with quaternions for 2 days_co_ and I can_t_t seem to make it do what I want. Or it will do what I want_co_ but only when the device is pointing a specific direction(very odd).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"2x4b","Date":"2017-11-15T09:20:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI gave up on Quaternions. Solved my problem with Euler instead.\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#1e1e1e_sm_color_dd_#d4d4d4_sm_font-size_dd_12px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__initialQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_x_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#b5cea8_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__initialQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_z_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#b5cea8_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__initialQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_y_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_*_eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_-_lt_/span_gt__lt_span style_eq__qt_color_dd_#b5cea8_sm__qt__gt_1_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__initialQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_normalize_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_()_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_rot_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__initialQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_toEulerAngles_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_()_lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_rot_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_y_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_+_eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#4ec9b0_sm__qt__gt_Number_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#b5cea8_sm__qt__gt_180_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_toRadians_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_()_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_Quaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_RotationYawPitchRollToRef_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_rot_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_y_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_rot_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_x_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_rot_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_z_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__initialQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__initialQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_normalize_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_()_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#608b4e_sm__qt__gt_// Apply to camera_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt__initialQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_multiplyToRef_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_rotationQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_cam_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_rotationQuaternion_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-15T19:28:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThere is always a way _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]