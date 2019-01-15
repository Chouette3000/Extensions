[{"Owner":"digitspro","Date":"2016-12-06T09:15:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve successfully created a mini map. Now I_t_m trying to give it a custom opacity value to make it a littler transparent. I did not find any way to do this. Any help would be appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a good starting point for your kind help_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RE9QZ%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RE9QZ#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-12-06T11:08:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22210-digitspro/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22210_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22210-digitspro/_qt_ rel_eq__qt__qt__gt_@digitspro_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is (to my knowledge) not possible at this moment._lt_br /_gt__lt_br /_gt_\n\tYou would have to custom make it_co_ or plead and beg that _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ (or someone else all-knowning?) is willing and have time to add it _dd_-) \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-06T16:39:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22210-digitspro/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22210_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22210-digitspro/_qt_ rel_eq__qt__qt__gt_@digitspro_lt_/a_gt__lt_br /_gt_\n\tI also have no quick solution for you_co_ you can experiment with canvas2d. _lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RE9QZ%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RE9QZ#4_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tthey did it here\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/24100-the-worldspacecanvas-cant-use-pointevent-in-orthographic_camera/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tYou can also create a Post process_co_ and render an alpha channel. \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/26800-about-customproceduraltexture-and-sprite2d-of-canvas2d/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-12-06T18:09:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWould it be possiblle to map 3D coordinates to 2D (XY)_co_ so you could create your own minimap and style it using normal Javascript and CSS?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShouldn_t_t this be doable by using the positions you already have_co_ and plot them on a &lt_sm_div&gt_sm_ with the map image being the background source.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn that case_co_ you could say that any 3D (-/+) X coordinate corresponds to some amount of the maps X coordinates_co_ whereas Z coordinates corresponds to the maps Y coordinates.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf level and maps sizes are consistent_co_ I suppose you only have to find this magic value once (the unit conversion between the scene and the minimap div containing the map image).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr maybe this isn_t_t as easy as I make it out to be. I haven_t_t tried it after all.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-06T19:20:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t programming made to make things possible._lt_em_gt_Using normal Javascript and CSS ? _lt_/em_gt_You have to get some Context like a Picture of the WebGl Contex and than create a Div or something._lt_br /_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/Render_Scene_on_a_PNG_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/Render_Scene_on_a_PNG_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTheir is also a new feature without saving it to local drive. Try to search in this forum. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have a basic understanding of shaders_dd__lt_br /_gt_\n\ti would to go and render a projection matrix on a shape or something. and then go further. _lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos/#2KFSW5_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cyos/#2KFSW5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//gamedevelopment.tutsplus.com/tutorials/building-shaders-with-babylonjs-and-webgl-theory-and-examples--cms-24146_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gamedevelopment.tutsplus.com/tutorials/building-shaders-with-babylonjs-and-webgl-theory-and-examples--cms-24146_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_10574_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Shaders-6.png.250b25dd3c0ee7869109ab636c850378.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Shaders-6.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10574_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/Shaders-6.png.250b25dd3c0ee7869109ab636c850378.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"digitspro","Date":"2016-12-06T20:58:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_. I_t_m experimenting with ideas from what you pointed out. With LOTS to learn _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-12-06T22:54:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was actually thinking about some kind of unit conversion between 3D space and a fixed size div_co_ in which you could plug the map.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would allow you to create and style your own map in any image-editing package like Photoshop or GiMP_co_ and then _qt_simply_qt_ update the minimap-player_t_s position when needed (Doing movement etc).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made a dirty example_dd_ _lt_a href_eq__qt_https_dd_//jsfiddle.net/0von8sxs/2/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//jsfiddle.net/0von8sxs/2/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry moving the sphere around using the WASD keys_co_ and see how the dot on the minimap responds to that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA better way would be to use the actual position of the sphere/player_co_ and then find a way to convert these coordinates to your 2D map. What I_t_ve done (Nothing more than a test)_co_ might produce issues when using velocity instead of units_co_ but I guess the following would work_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGet the center of the map_co_ and link this offset to the zero position of the player mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGet the outer bounds of the map_co_ and link this offset to the outer bounds of the scene/level.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith a few more points_co_ you should be able to automatically calculate any new map positions_co_ I think _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"digitspro","Date":"2016-12-07T07:09:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_s_gt_I notice that all the stuff covered in _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/Using_the_Canvas2D_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/Using_the_Canvas2D_lt_/a_gt_ are gone in the current preview version 2.5-beta. I am worried to go the direction of using Canvas2D stuff if it is deprecated_co_ as it will hinder me from future upgrading to the latest of babylonjs _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFalse info. It was an issue with Visual Studio that made me think all these classes are gone. I had to open the d.ts files for V.S. to know these definitions exist\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-07T07:34:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ I think this is pretty awesome what you are doing. Keep on posting! I would love to contribute_co_ but unfortunately i_t_m out of time. _lt_br /_gt__lt_br /_gt__lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22210-digitspro/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22210_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22210-digitspro/_qt_ rel_eq__qt__qt__gt_@digitspro_lt_/a_gt_ we already in 2.6-alpha _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"digitspro","Date":"2016-12-07T08:00:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ that_t_s awesome. I just git-pulled _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-07T09:58:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_span_gt__lt_strong_gt_&lt_sm_--_lt_/strong_gt_Still using Notepad++_lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-12-07T11:51:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  Has anyone mentioned the renderTargetTexture method of overhead map view?  It is almost the same as extra cam/extra viewport method_co_ except no drag_t_n_t_drop allowed on overhead map.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WROZH%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WROZH#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the PG above_co_ camera 3 and tv/monitor #3 (third camera-parented plane at the bottom of the canvas)... is working as an overhead map view. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ it_t_s not really a map view.  It is a camera #3 view.  This method avoids the hassles of placing extra viewports_co_ and instead... just allows you to place a plane... to display the RTT upon. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs another feature... a person MIGHT be able to place (and parent) an _qt_overlay_qt_ transparency atop camera 3_co_ too (such as a road map that ONLY shows in THAT view).  There is some versatility to the RTT (renderTargetTexture).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCamera 3 has its .beta set to zero_co_ so it aims straight down (line 11)_co_ and of course_co_ that camera can be position-scrolled in all directions.  It is simply a camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe layerMask work in there... was done by Deltakosh.  It was done to prevent the 4 monitors being viewed in monitor #1 view... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WROZH%235_qt_ rel_eq__qt_external nofollow_qt__gt_as seen here_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne other note.  RenderTargetTextures use views from cameras... and not view from final render.  So_co_ downstream/postprocess things such as edgesRendering and fog... might not be seen in a RTT view.  The sampling used for RTT_t_s happens before (upstream-of) post-process effects.  But still... when it comes to putting a camera view on a plane_co_ there_t_s nothing easier than an RTT.  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-07T13:02:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ i think wingnut is totally the right person for such games. this is something for his Chronicles _lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#2KGC7U%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#2KGC7U#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-12-07T13:06:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis test uses a custom map and updates the position of the minimap dot_co_ based on the position of the sphere. This is all done in the renderloop_co_ instead of based on input.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//jsfiddle.net/0von8sxs/5/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//jsfiddle.net/0von8sxs/5/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNext step will be to find a way to follow the dot around and automatically move the map so the dot stays centered. This will be helpful when using bigger maps_co_ that might require some zooming to be useful at all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI thought about using some javascript to crop the image_co_ or maybe some tile-based action. However_co_ I think this should be easily achievable by using the same technique I use above_co_ by using some CSS to move a bigger image around_co_ and scale and crop it to only fit the sphere_t_s position + some view distance. We_t_ll see.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible to then set visibility to false on some meshes_co_ and let that change only be affected by the third camera? I_t_m thinking about a minimap for a multiplayer game_co_ and in that case you won_t_t always prefer seeing your enemies_t_ positions.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-12-07T13:10:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_153993_qt_ data-ipsquote-contentid_eq__qt_26849_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481115734_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 minutes ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ i think wingnut is totally the right person for such games. this is something for his Chronicles _lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#2KGC7U%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#2KGC7U#1_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe problem with adding rules is you have to clear the cache_co_ otherwise they_t_ll stack. I learned that the hard way. Lol.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-07T13:11:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_153996_qt_ data-ipsquote-contentid_eq__qt_26849_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481116230_qt_ data-ipsquote-userid_eq__qt_22713_qt_ data-ipsquote-username_eq__qt_Raggar_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ Raggar said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe problem with adding rules is you have to clear the cache_co_ otherwise they_t_ll stack. I learned that the hard way. Lol.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWhat do you mean with rules and stack ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-12-07T13:14:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_153997_qt_ data-ipsquote-contentid_eq__qt_26849_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481116301_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhat do you mean with rules ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOh. You use innerHTML. I used insertRule when applying CSS using Javascript. My mistake.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry pressing Run a few times_co_ the HTML/CSS will overlay the previously added HTML/CSS. Same thing happens when you use insertRule.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-07T13:19:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfixed_dd_ i dont what to spend to much time on this_co_ but its is possible\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#2KGC7U%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#2KGC7U#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-07T13:51:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tits only an interesting thing to hack_co_ nothing serious.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can search for chrome caching result. its a _lt_em_gt_big playground thing._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthat i can do it this way_co_ also resulting in some _qt__lt_em_gt_playground_qt_ bugs_lt_/em_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit would be kind of cool to implement this in in the future _co_ to save only_lt_em_gt_ the editor text and recompile everything._lt_/em_gt_ currently still somewhere few bits left from the previous result. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-12-07T14:04:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_  Get to know the _qt_layerMask_qt_ stuff.  I THINK... by setting enemy mesh layerMask different than home-team mesh layerMask... that RTT camera can be selective in what it renders.  A bit over my head.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSpeaking of over my head_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt__co_ are you saying that the Wingnut Chronicles does simple demos and kiddy-level experiments?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ that_t_s somewhat correct.  I_t_m not a very _qt_technical_qt_ person.  But kids love me_co_ and that_t_s all that is important.  heh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-07T14:29:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twingnut is the best_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1BDA0J%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1BDA0J#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ you had a nice playground i remember to hack isInFrustum behind a plane. if you know what i mean. useful for enemies behind walls\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-07T15:15:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry_co_ I can_t_t remember that PG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh_co_ I think I might member.  I probably won_t_t be able to find it though.  If it_t_s the one I_t_m thinking of_co_ it just used the dot product of the plane normal and the normal of the camera direction.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-12-07T17:15:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?q_eq_isInFrustum_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/playground?q_eq_isInFrustum_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnly 21 results!  No sweat.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-12-07T17:38:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tConsole Application3\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI feel like a Monkey typing Shakespeare_co_ if you know this story.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/opengl2.gif.2e4db4a5cc4dc74b3f53f03627262a39.gif_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_10599_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/opengl2.gif.2e4db4a5cc4dc74b3f53f03627262a39.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_opengl2.gif_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-12-07T23:06:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay_co_ I managed to progress a little with the above example._lt_br /_gt_\n\t But there really Must be some smarter way of doing this_co_ as it feels very hacky _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//jsfiddle.net/0von8sxs/9/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//jsfiddle.net/0von8sxs/9/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMove around using WASD_co_ and see how the minimap follows the dot around my manipulating the margins.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow press and hold M to get a map twice as big_co_ this time not following the dot_co_ but simply showing the dot_t_s position on the map.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBeside the map creation itself_co_ I_t_m not sure how to cut the work load_co_ but I_t_m starting to be satisfied with the result.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]