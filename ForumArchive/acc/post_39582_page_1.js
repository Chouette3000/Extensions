[{"Owner":"JonVarner","Date":"2018-08-23T04:33:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI seem to have an issue where one of my sub mesh objects (the rings) disappear when I rotate the camera while up close. My first thoughts was clipping plan_co_ but when I played around with the clipping plans it caused clipping but of a different sort. The mesh is one single object with sub meshes. Anyway_co_ any suggestion on where I might look to solve the problem would be greatly appreciated. Thanks. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/image.png.592c88c158f7ac92bd6e1547cd39ff0b.png_qt_ data-fileid_eq__qt_19729_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19729_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/image.thumb.png.a71cd2025044dd2a2423e0c84c59fafd.png_qt_ alt_eq__qt_image.thumb.png.a71cd2025044dd2a2423e0c84c59fafd.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-08-23T12:04:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tjust a guess_co_ but maybe the camera is too close?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry making the camera a bit farther away.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso if you can try making a playground or put it on a website so everyone can see exactly what you mean.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-23T14:36:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis will make it so your objects won_t_t disappear ever_co_ but you should turn on your bounding boxes and look more at the scene_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.alwaysSelectAsActiveMesh_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.abstractmesh#alwaysselectasactivemesh_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/api/classes/babylon.abstractmesh#alwaysselectasactivemesh_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-23T16:16:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso other idea_dd_ can you make sure that the pivot of your mesh is correctly set (and not completely offset from the center)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JonVarner","Date":"2018-08-23T18:57:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Deltakosh_co_ I will look into that first and let you know if that solves it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-08-23T19:48:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI bet the frustrum is saying the mesh is not visible.  check your bounding box._lt_br /_gt_\n\t_lt_br /_gt_\n\tI had this happen when I made planes with incorrect bounding boxes_co_ it would hide them if my _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_pivot_lt_span_gt_ _lt_/span_gt__lt_/span_gt_point was not in focus but when I manually enabled bounding boxes on them it fixed it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JonVarner","Date":"2018-08-23T20:03:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Pyrme8 I think you are on to something as I was having issues with the frustum and shadows. I am wondering if I made a mistake there. I will look into this as well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-08-23T21:41:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmake a cube mesh that would encapsulate the entire coil mesh.  Then set the coil meshs boundingbox as the cube meshs bounding box (I think it might be a _variable but is still read/write-able...) and then dispose the cube and see if that fixes it._lt_br /_gt_\n\t_lt_br /_gt_\n\tI cant remember exactly how I did it in the past but I think that was close to the steps._lt_br /_gt_\n\t_lt_br /_gt_\n\tI might of actually just manually changed its bounding extents... damn I cant remember now Id have to look it up.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-24T16:09:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYOu should not have to update the bounding box as Babylon.js does it for you. I_t_m still on the pivot position problem _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JonVarner","Date":"2018-08-27T21:03:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk so I was able to fix the problem but still not 100% sure what the root cause was. Basically what was happening was that the mesh was being moved by joints. So when the rings are in the center of the scene their actual pivot point and bounding box information is that of its original state. So when I zoomed in the pivot point got clipped and I think this is what also clipped the geometry. To fix this I simply exported the mesh in the centered state so that both the center of the bounding boxs and the pivot point are at the center of the scene. At some point_co_ I will spend more time looking into this but it seems for now I have a solution.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]