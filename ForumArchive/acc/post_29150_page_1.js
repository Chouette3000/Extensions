[{"Owner":"jessepmason","Date":"2017-03-18T17:23:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! Its awesome to see support for a right handed coordinate system_co_ since my main application is Maya it helps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I am wondering if the FBX Exporter supports exports to the right handed coordinate system? Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-20T08:07:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi J!  Good to see you again.  I_t_m not qualified to talk about this_co_ but a search of our github site... for _t_fbx_t_ + _qt_handed_qt_... returned an interesting hit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/FBX/3rdParty/Fbx2017.0.1/include/fbxsdk/scene/fbxaxissystem.h_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/FBX/3rdParty/Fbx2017.0.1/include/fbxsdk/scene/fbxaxissystem.h_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere sure is lots of talk in there... that _lt_em_gt_could be_lt_/em_gt_ pertinent.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Hope this helps.  Maybe smarter people than I... will comment soon.  Stay tuned.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jessepmason","Date":"2017-03-20T14:30:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks! Good to be back.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter a little bit of digging I don_t_t think it is supported yet but...\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti_t_m not sure if it_t_s the right way but it seems to work anyway as I know nothing about c++....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this file _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/FBX/BabylonFbxNative/BabylonMesh.cpp_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/FBX/BabylonFbxNative/BabylonMesh.cpp_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just switched the X and Y indices_co_ inverted the Z normal and Z vertex positions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is probably a lot more to it so ya Ill just stick to the left handed system for now lol\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-20T17:39:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tby default exporters use left handed but there is perhaps a way for you_dd_ We have a pretty good gltf importer (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/loaders/src/glTF_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/loaders/src/glTF_lt_/a_gt_) which is right handed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jessepmason","Date":"2017-03-20T18:49:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tO okay cool! Thanks\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]