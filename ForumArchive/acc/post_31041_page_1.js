[{"Owner":"lhx880619","Date":"2017-06-13T09:27:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thow all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have a path data of Vector3[] _co_ and i want to show  dashed line of this path by babylon.gui_co_ are there any suggestions? (gui line end point to tracking the 3d positions)\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat i am looking for is a path navgation like the following_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13372_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/2017-06-13_17-37-59.png.4f11634dcf600634c1dc0fc507b7dd81.png_qt_ alt_eq__qt_2017-06-13_17-37-59.png.4f11634dcf600634c1dc0fc507b7dd81.png_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-13T23:47:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can easily do it with Babylon.GUI\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust create a Babylon.GUI.Line per segment and set line coordinate to the projection of the 3D vector.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow to project a 3d vector? like this _dd__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/gui/src/advancedDynamicTexture.ts#L177_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/gui/src/advancedDynamicTexture.ts#L177_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your case the mesh.getWorldMatrix will be set to Matrix.Identity\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]