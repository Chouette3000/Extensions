[{"Owner":"paleRider","Date":"2017-11-30T09:12:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_strong_gt_everybody_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe are starting a VR project and_co_ as we want it to be as cross-platform as possible with a unique base code_co_ I_t_m thinking on giving a chance to _lt_strong_gt_BJS_lt_/strong_gt_ (maybe this is not the best case of use for this awesome engine).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is_co_ indeed_co_ not a genuine 3D Engine development_co_ in terms of 3D scenes with different assets into it (characters_co_ props_co_ effects_co_ ...)_co_ but a theatrical experience where the user sees an omni-directional stereo (ODS) pre-renderized CG animation_co_ walking on the streets of a medieval village_co_ going downhill from the cathedral to the palace. We need this approach in order to have high-quality CGs. As said we are not looking for a pseudo-VR_co_ consisting in a planar projection of a 360º video on the inner side of a sphere_co_ but a real VR video experience.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnder this assumption we_t_ll need a different video stream for each eye_co_ in order to give the user a sense of depth as you look around in every direction. Near things look near_co_ far things look far.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course we_t_ll be rendering texts and other CG effects overlays on the video streams.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m searching through the docs and this forum for a starting point on all this_co_ but I_t_m only finding pseudo-VR approachs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this type of _qt_dual-camera_qt_ planned to be incorporated to BJS in future versions?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-30T10:27:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDual cameras are integrated since version 1 probably _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI am not sure what you refer to as _qt_pseudo-VR_qt__co_ but screen-split can be easily achieved using the activeCameras array and modifications of the viewport. We do have many types of camera to support that_co_ which you can also change to your own needs. Check a simple demo on the website_co_ and click the camera on the right to switch between them - _lt_a href_eq__qt_http_dd_//www.babylonjs.com/demos/spaceship/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/demos/spaceship/_lt_/a_gt_ (The Device-orientation requires you to click and move the mouse once_co_ if you don_t_t use mobile). The distortion compensation can be adjusted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMulti-Views - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_multi-views_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_multi-views_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also check what we do with the rig-cameras in the camera class for better understanding on how we solved the multi-camera issue in VR and WebVR (and the anaglyph camera as well _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh and - Obviously_co_ Babylon is the right choice for your project _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-11-30T10:35:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for your quick answer _lt_strong_gt_RaananW_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I_t_m talking about is the type of dual-camera contained in this doc_dd_ _lt_a href_eq__qt_https_dd_//developers.google.com/cardboard/jump/rendering-ods-content.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_ODS content_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-30T11:01:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18630-palerider/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18630_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18630-palerider/_qt_ rel_eq__qt__qt__gt_@paleRider_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat is the difference between that and the VR camera without connecting it to the motion sensor? I didn_t_t read the entire thing (I read it like I read books - look at the pictures and try figuring out what they meant). I saw something about HUD and vertical stacking (which is configurable - instead of setting the width to 0.5_co_ set the height to 0.5 in the viewport).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-11-30T11:14:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDear _lt_strong_gt_RaananW_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ as said this is a project in its starting point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ the difference is that we don´t want this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16051_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/image.png.59c00d420f73aa88f6085f1ea88f64ee.png_qt_ alt_eq__qt_image.png.59c00d420f73aa88f6085f1ea88f64ee.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16052_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/image.png.dce274a9ba7ed58a17d71e84f1b42424.png_qt_ alt_eq__qt_image.png.dce274a9ba7ed58a17d71e84f1b42424.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSaid this_co_ obviously I need to read all about BJS VR Cameras and try to match its behavior with the specifications of OSD approach.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll return to this thread as soon as I have a clear image of the whole thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-30T11:41:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt seems like the projection matrix needs to be different. So it is all about changing viewports and the calculation of the projection matrix. A hint can be provided in the WebVR camera as well (there is a different projection and view matrix function to the rig cameras (child-cameras). Start at the rig-camera configuration in the camera class and take it from there. It can be a bit confusing at time_co_ so if you need any help let us know.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2017-11-30T17:08:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you sure you need ODS from BabylonJS cameras ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe did something similar last month (bake an HD scene to run it in VR)_co_ and our workflow was the following\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Create scene in Blender\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Generate two spherical textures_co_ it uses your ODS-generated projection. Blender takes care of it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Apply the textures on two spheres_co_ in Babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Use a VR Camera from Babylon (it uses you first projection +- eye crossing) from inside the spheres. Each sphere is rendered on only one camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Then you can look around (but not move !)_co_ the HD scene appears in 3D with the quality of a baked render.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(repeat many times to get an animation)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt worked pretty well. As far as I know_co_ the ODS projection is used to generated a texture from a 3D Scene. There no need to use it in real time when watching your result.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(our demo is not for public use_co_ but if it_t_s unclear I can try to make a light demo so you tell me if we_t_re talking about the same problem)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"paleRider","Date":"2017-12-01T08:04:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_strong_gt_SvenFrankson_lt_/strong_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ the approach you followed is admissible if the spheres rotate when the head does so_co_ in order to not to have both eyes in the same line of sight_co_ doesn_t_t it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]