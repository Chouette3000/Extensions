[{"Owner":"leechii","Date":"2017-08-22T15:51:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m already back with a new question _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I_t_m trying to achieve is a blured circle on top of a non blured circle/ plane / etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo blure the mesh on top (circle) I tried using the postProcessses but didn_t_t really achieve what I want.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TX31SD%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TX31SD#12_lt_/a_gt_ (this but with the blured circle on top)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope you can help me_lt_br /_gt__lt_br /_gt_\n\tEDIT_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmaybe some more information is needed what im trying to build in the end_dd__lt_br /_gt_\n\tI want to achieve a simple heatmap (no bump now/ rectangles on top for now) - therefore the gaussian _co_ black and white etc is needed to be applied to the same layer/ cam_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tlike this_dd_ _lt_img alt_eq__qt_social-heatmap-create2.jpeg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_345_qt_ src_eq__qt_http_dd_//getheatmap.com/create/assets/img/social-heatmap-create2.jpeg_qt_ width_eq__qt_546_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-22T17:48:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou were close but I would suggest using a rendertargettexture for that job_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#TX31SD%2314_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#TX31SD#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could think about adding a custom camera to keep your blue circle stable_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#TX31SD%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#TX31SD#15_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leechii","Date":"2017-08-22T18:42:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks a lot already!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- having troubles tough fitting it to the correct size._lt_br /_gt_\n\tdo you have some tips for that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#TX31SD%2319_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#TX31SD#19_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-23T16:48:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you want to perfectly align I suggest using the texture like a fullscreen quad\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is what I_t_m doing here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/gui/src/advancedDynamicTexture.ts#L376_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/gui/src/advancedDynamicTexture.ts#L376_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbasically the idea is to create a foreground layer and use this rtt as the texture so the texture can be perfectly aligned with the screen size\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leechii","Date":"2017-08-26T13:26:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tquickly scrolled through the code - that would mean that I_t_d have to create a custom abbreviation of the dynamicTexture that does the full screen calcs for the _qt_controls_qt_/ meshes (in my case the circles only) and then add my custom texture to it..._lt_br /_gt_\n\tone thing that_t_s kind of bothering me is that it all gets squashed down to a 2D context (if I_t_m not misled by this line_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/88811265e704cf5cd674f268b17cafc35a93225f/src/Materials/Textures/babylon.dynamicTexture.ts#L7_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/88811265e704cf5cd674f268b17cafc35a93225f/src/Materials/Textures/babylon.dynamicTexture.ts#L7_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\twouldn_t_t it be possible to just add a second canvas (since the background could be transparent) and link the eventHandlers to both (adding the same camera on both)?_lt_br /_gt_\n\tNot sure if that_t_d be a performance problem though but I guess for the heatmap not...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leechii","Date":"2017-08-27T13:26:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tquickly tried that - works but don_t_t know if there will be any traps _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\twill try to go with this idea for the heatmap I_t_m implementing. _lt_br /_gt__lt_a href_eq__qt_https_dd_//gist.github.com/robinfehr/81d576deed562086e8c69861f596c85b_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gist.github.com/robinfehr/81d576deed562086e8c69861f596c85b_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-08-27T15:52:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tVery interesting gist_co_ but I am left wondering why you need the second canvas.  If you draw the lines/curves (_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1PSZDF%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1PSZDF#2_lt_/a_gt_) slightly on top of the heatmap and pitch then I think you could get away with a single canvas_co_ but I don_t_t know how you are using events (ie_dd_ you want the events handled separately - forward + keypresses).  Maybe an alpha transparency material on top?  I have written a React component to show starting lines for football matches_co_ so have tried a couple of things like that_co_ but did not need the lines on top.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leechii","Date":"2017-08-27T18:41:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_ what do you mean by drawing lines on top of the heatmap and pitch? the heatmap layer (processed image) should be on top of an image/ non processed layer. _lt_br /_gt_\n\twhat I_t_m trying to achieve is something like a layer in an SVG where the image processing filters can be applied to a layer but below that or on top of that layer can be anything. _lt_br /_gt__lt_br /_gt_\n\tfor the heatmap example probably I could do that using a dynamicTexture on a plane placed above the image too I guess a bit like that (_lt_a href_eq__qt_https_dd_//github.com/pa7/heatmap.js/blob/master/src/renderer/canvas2d.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/pa7/heatmap.js/blob/master/src/renderer/canvas2d.js_lt_/a_gt_) - implementing a more complex canvas that also does the image processing (have to write it all myself there though too (blur_co_ gradient etc.))  - but I_t_d lose that I could just reuse the shader to process another image in case I want to implement the shaders also more general (e.g. params for the colors within the gradient shader). fyi_dd_ I have to generalize it for the project I_t_m working on _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ not that I_t_d want it so badly chch._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-08-28T00:34:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI re-read your question and took a better look at your image and realized what you are trying to achieve.  Unless you wanted to do screenshots and maybe layer masks (not exactly elegant) then I don_t_t see a way without the second canvas!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-28T18:18:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI see no big issue with a 2nd canvas\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]