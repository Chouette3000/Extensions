[{"Owner":"AlbertTJames","Date":"2016-10-04T16:09:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just upgraded to OSX Sierra and this bit of code does not work anymore on chrome _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_/* --- Skybox --- */\n  var skyboxObject _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_ 10000.0_co_ scene)_sm_\n  var skyboxMaterial _eq_ new BABYLON.StandardMaterial(_qt_skyBox_qt_ + sceneKey_co_ scene)_sm_\n  skyboxMaterial.backFaceCulling _eq_ false_sm_\n  skyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(taskObject.ASSETS_FOLDER + _qt_/textures/fantasy/Sky_qt__co_\n    scene_co_ [_qt__px.png_qt__co_ _qt__py.png_qt__co_ _qt__pz.png_qt__co_ _qt__nx.png_qt__co_ _qt__ny.png_qt__co_ _qt__nz.png_qt_])_sm_\n  skyboxMaterial.reflectionTexture.coordinatesMode _eq_ BABYLON.Texture.SKYBOX_MODE_sm_\n  skyboxMaterial.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n  skyboxMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n  skyboxObject.material _eq_ skyboxMaterial_sm_\n  skyboxObject.rotation.x _eq_ Math.PI_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI get this _dd_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_text-align_dd_center_sm__qt__gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/57f3d3880a6de_ScreenShot2016-10-04at18_02_46.png.644e9c8e142812680b5df21cd3c6f063.png_qt_ data-fileid_eq__qt_9739_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9739_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/57f3d388f416a_ScreenShot2016-10-04at18_02_46.thumb.png.588cb9424054938906a57b1d3ab3942c.png_qt_ style_eq__qt_width_dd_500px_sm_height_dd_auto_sm__qt_ alt_eq__qt_Screen Shot 2016-10-04 at 18.02.46.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_text-align_dd_center_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnly one side of the cube. No error in the console.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will try to get more information on this_co_ I have been swamped these past few days... sorry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis bug is not present in safari.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-04T16:54:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf this is browser related you should mention it on their bug tracking system\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-10-07T06:57:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m pretty sure this is related to\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/25366-bad-ios-cache-managment-for-cubetexture-loading/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tbut for now I was not able to solve it yet so far...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"stormwarestudios","Date":"2016-10-31T02:37:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am experiencing this as well... thought I was going crazy until I did a bit of searching and came across this thread.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m on macOS Sierra 10.12 (16A323)_co_ noticed this bug after I_t_d updated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tConfirmed my code (similar in function to OP_t_s code) still behaves as expected in Safari (Version 10.0 (12602.1.50.0.10))_co_ however_co_ Chrome (Version 54.0.2840.71 (64-bit)) exhibits the one-side-per-skybox bug.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRelated to _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/25366-bad-ios-cache-managment-for-cubetexture-loading/_qt_ rel_eq__qt__qt__gt_this_lt_/a_gt__co_ I_t_ve tried _lt_strong_gt_engine.enableOfflineSupport _eq_ false_lt_/strong_gt_ but no change in behaviour.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve reported this through Chrome_t_s help tools_co_ if there_t_s a better medium please let me know...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-31T15:28:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPlease keep us posted\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Swiftwork","Date":"2016-11-11T04:29:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would like to quickly chime in that I have noticed this as well with macOS Sierra and Chrome. I will also try and figure out a work-around but this might be a tough one...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"stormwarestudios","Date":"2016-11-23T02:33:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tJust wanted to update that there has been no update yet... _dd_-\\\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wells","Date":"2017-01-08T00:08:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAh I have this same exact problem!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-10T17:42:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tShould be fixed on latest 2.6 version\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Swiftwork","Date":"2017-01-12T05:28:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ this issue still arises for me with MacOS Sierra 10.12.2 even with the latest build_co_ both locally and in the _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#GOQXV%230_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_. Do you know the cause and how the fix was attempted in the latest preview version? Is it something I must do locally?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKind Regards_lt_br /_gt_\n\t/Swiftwork\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-12T17:58:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt is a platform bug unfortunately. Can you try to set engine._badOS _eq_ true before creating the cubemap? this may helps\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Swiftwork","Date":"2017-01-13T00:37:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_158816_qt_ data-ipsquote-contentid_eq__qt_25585_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1484243881_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt is a platform bug unfortunately. Can you try to set engine._badOS _eq_ true before creating the cubemap? this may helps\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe issue still persists even with the _badOS flag set to true _dd_/\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-13T21:58:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately we have to track it with browsers vendors _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ It is not a bug in Babylon.js as it works everywhere else.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you find the source (I have no Mac) I can try to work on a workaround\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Valkan","Date":"2017-01-16T01:18:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI found some kind of workaround by passing the noMipMap parameter to true when calling the CubeTexture_t_s constructor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1N0TVT_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1N0TVT_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-17T18:32:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tok so you confirm it is related to mipMap?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"stormwarestudios","Date":"2018-01-10T01:04:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor anyone coming across this in 2018_co_ _lt_em_gt_the problem is solved in Babylon v3.2.0-alpha0_lt_/em_gt__sm_ however_co_ you may need to lower skybox texture sizes to 1024x1024 if they are higher.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been able to get this to work _lt_em_gt_without_lt_/em_gt_ the engine._badOS _eq_ true and _lt_em_gt_without_lt_/em_gt_ _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_noMipMap set to true_co_ using 1024x1024 skybox textures. When using something higher (all 2048x2048_co_ for example)_co_ only one side appears._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-03-01T08:21:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_200865_qt_ data-ipsquote-contentid_eq__qt_25585_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515546278_qt_ data-ipsquote-userid_eq__qt_11007_qt_ data-ipsquote-username_eq__qt_stormwarestudios_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 1/9/2018 at 3_dd_04 PM_co_ stormwarestudios said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFor anyone coming across this in 2018_co_ _lt_em_gt_the problem is solved in Babylon v3.2.0-alpha0_lt_/em_gt__sm_ however_co_ you may need to lower skybox texture sizes to 1024x1024 if they are higher.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI_t_ve been able to get this to work _lt_em_gt_without_lt_/em_gt_ the engine._badOS _eq_ true and _lt_em_gt_without_lt_/em_gt_ _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_noMipMap set to true_co_ using 1024x1024 skybox textures. When using something higher (all 2048x2048_co_ for example)_co_ only one side appears._lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat’s weird... I use full 8k hdr panorama source images to bake out 2048 x 2048 beautifully HDR to LDR tonemaped png as my skyboxes ...my main pewter has always been Mac... and been running high Sierra... all my skyboxes render no problem and maintain the higest pixel precision possible and again beautifully tone mapped from super hi res hdr\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tlet me know if you still having problems with skyboxes \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]