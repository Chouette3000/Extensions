[{"Owner":"JCPalmer","Date":"2016-10-13T21:01:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have been adding a temporary HighlightLayer when some meshes are displayed.  There is also a very fast morph going on to expand mesh from origin to full size.  The HighLightLayer stays on for an additional 100 millis.  It really pops!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did not see any reason to dispose of the HighlightLayer.  Another mesh could be instanced &amp_sm_ display later also with that _t_Entrance_t_ type.  The use case of a permanent HighlightLayer would probably be more common anyway.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI began rebuilding a scene I had with a Dialog displayed using an ortho camera.  When the character mesh is popping_co_ you can briefly see part of the dialog where the mesh is.  The rest of the time the area is black when the layer doesn_t_t even have any meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI switched my entrance type to another with a different animation_co_  and you get what I have below (still working on the eyes).  I can probably get around this by either _dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tnuking layer when done &amp_sm_ delaying the dialog till done_co_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tnot using that entrance type when there is a dialog.\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t but the common use case of a permanent HighLightLayer could not.  This area bordered in yellow is all black with the layer._lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_9832_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/Selection_013.jpg.4777ce40976ff877f449c0fe5f0d48d5.jpg_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Selection_013.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9832_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/Selection_013.thumb.jpg.57573ce06599d3ff804c6cf57ce01922.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-10-13T22:02:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible to create a playground for it ? I have to admit I do not understand totally the issue _dd_-) it is only 3 PM so still to early in the day for my brain to start.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThans\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-14T01:36:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can_co_ but setting up ortho camera_co_ layermasks_co_ &amp_sm_ viewports is not something done by hand often.  Will transcribe a simple example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHad another thought_co_ 3D rigs could also have problems.  They are a 1 line change to test.  Was _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CDHKK%235_qt_ rel_eq__qt_external nofollow_qt__gt_right_lt_/a_gt_ they look weird_co_ but in a different way.  Probably be mid-day Eastern before I have one with ortho.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-14T14:46:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CDHKK%236_qt_ rel_eq__qt_external nofollow_qt__gt_done_lt_/a_gt_ .  Just un comment out the HighlightLayer.  Did not get plane position perfect_co_ which is tricky when using a viewport.  But when there is erroneous glow_co_ the mesh shows_co_ but it is black elsewhere\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-10-15T01:22:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk got it_co_ thx_co_ I ll see what I can do_co_ probably a layer or camera attached to the highlight layer to ensure it only renders when requested_co_ it is currently part of the whole scene.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-10-15T04:28:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_table-layout_dd_fixed_sm_width_dd_1077.33px_sm_line-height_dd_1.6_sm_color_dd_rgb(39_co_42_co_52)_sm_font-size_dd_14px_sm_margin-bottom_dd_20px_sm_margin-top_dd_0px_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm__qt__gt_\n\t\tPR is in for the fix_dd_ _lt_strong style_eq__qt_font-weight_dd_bold_sm__qt__gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1413_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm_text-decoration_dd_underline_sm_background-color_dd_transparent_sm__qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1413_lt_/a_gt__lt_/strong_gt_ \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm__qt__gt_\n\t\tIt should work nicely if you precise on the highlightlayer the layermask of the non orthocamera.\n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"meteoritool","Date":"2016-10-15T10:44:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOff-topic question _dd_ Just curious to know_co_ how long does it take for the javascript to be compiled from truescript on Github ? Can_t_t wait to try the new function &gt_sm__&lt_sm_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-10-15T19:25:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tChange the fix in a last PR to ensure I can add other features later. Basically precise the camera the highlights are attached to in the constructor_dd_ var hl1 _eq_ new BABYLON.HighlightLayer(_qt_hl1_qt__co_ scene_co_ { camera_dd_ camera })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1419_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1419_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe changes should be allin and in the playground monday. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17254-meteoritool/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17254_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17254-meteoritool/_qt_ rel_eq__qt__qt__gt_@meteoritool_lt_/a_gt_ The project is build each day by DK and pushed to the playground at the same time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCU_co_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-10-16T17:41:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere it is_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CDHKK%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CDHKK#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-17T15:06:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks_co_  still the problem with VR cameras_co_ which I also highlighted _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CDHKK%235_qt_ rel_eq__qt_external nofollow_qt__gt_earlier_lt_/a_gt_.  Just for reference_co_ A 3D camera is a camera with 2 sub-cameras.  After each sub camera renders_co_ the parent camera produces the final output using postprocesses &amp_sm_ sometimes also viewports.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not sure that you / HighlightLayer is the one that needs to do all the fixing though.  I recently made it so you can also also run early post processes along with a 3D rig.  Still problems with people who want to run very late post processes.  These rigs can sort of break things_co_ but as soon as someone thinks to try this in VR_co_ it will get brought up again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFortunately_co_ you do not have to worry about orthographic cameras &amp_sm_ 3D rigs at the same time.  I thought about doing something for them to play together_co_ but since I use the Dialog extension for my GUI_co_ I can easily just put the dialog in the scene in billboard mode.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThink it might be a good to add a setter for the camera_co_ if it is simple.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-10-17T15:26:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tRhoooooooo_co_ Missed this one_co_ I ll try to look at it tonight.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-10-18T05:05:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI ll fix it this week end due to a busy work week... sorry for the delay_co_ do not hesitate to shout if you need it earlier.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-10-25T03:33:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis PR should do it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1462_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1462_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis will be in the pg probably tomorrow evening. There is still a scale issue (taller than large for the highlight). This will be fixed by the resize issue_co_ I kept the best for the end.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCU_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-25T16:15:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPG updated\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]