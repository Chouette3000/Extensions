[{"Owner":"Wingnut","Date":"2015-10-16T13:00:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for showing us that_co_ JcP._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any news_co_ OzR? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just to bump things_co_ OzRocker has brought us two issues that could use solutions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1.  No billboard mode for webVRCams (found when trying to use a billboarded light gizmo mesh to keep the light Y-aimed in the same direction as the cam)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2.  No easy way to activate an adjustable-width gap between the right/left eye areas.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JSXHW%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JSXHW#10_lt_/a_gt_  In this demo_co_ we can see that line 42 (metrics.lensSeparationDistance) has widened the VIEW inside-of the left/right _qt_ocular areas_qt__co_ but it does not separate the two ocular areas with black space.  (open some nose-bridge space).  I haven_t_t looked at the shader(s)_co_ yet.  I_t_m a little scared to.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regarding #1... here is a new demo_co_ OzR.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JSXHW%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JSXHW#11_lt_/a_gt_ .  (I think the gizmo is sitting under the camera_co_ here_co_ but still 30% visible.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have turned-off billboard mode_co_ and used a simple camera.rotation.y copy-to-gizmo in the render loop.  It seems to work just fine.  I think you will need to use this solution until we determine if billboard mode will ever be activated for webVRcams._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regarding #2 - I_t_m still working on it.  I/we could use advice from everyone.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  (nooo_co_ not advice like rocking back and forth on the toilet - sheesh_co_ heh)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To remind_co_ I believe OzR is seeking adjustable _qt_black space_qt_ between the left and right viewing areas._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks again for your input_co_ JcP.  That got us some good leads._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-10-16T14:45:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_There is one other way in combination with changing the VRCameraMetrics.  Kind of radical. Fork Camera &amp_sm_ change the size &amp_sm_ location of the 2 viewports for the cameras of this rig uses.  This would do it for sure_co_ but you would probably need to change the VRCameraMetrics to compensate for side effects._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BTW_co_ I thought the renaming of this rig away from Oculus was because there was some standard way to handle this VR / AR devices.  Shouldn_t_t you be getting the VRCameraMetrics from the dev manufacturer_co_ Google?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-10-16T15:13:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ thanks JcP!  Well done._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JSXHW%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JSXHW#14_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Lines 77-78 spread the viewports apart_co_ and there we go.  Perfect!  (after adding a scene.clearColor)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  yay!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry for all the learning debris in there.  Lap it up_co_ folks_co_ it_t_s all nutritious stuff.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Addenda_dd_  Jeff... umm... I just glanced at things_co_ but maybe when camera._vrEnabled _eq_ true... THEN it looks to the device for camera metrics.  Maybe I am currently working in a _qt_preview_qt_ mode_co_ and maybe that_t_s why it is using local preset metrics.  But that is a pure GUESS on my part._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-10-18T00:03:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s awesome!  Thanx guys.  Its like Babylon.js can do anything _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-10-18T04:37:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Cool! Those were a couple of good challenges_co_ OzR... I enjoyed the chase._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hmm... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JSXHW%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JSXHW#14_lt_/a_gt_ has gone broken_co_ too (ff).  I see someone_t_s toolbox open behind the Playground_co_ so I think some mad scientist work is going-on._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ozr_co_ how is your height-to-width ratio (aspect ratio)? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I noticed that the _qt_shape_qt_ of the eyepieces seen on _lt_a href_eq__qt_http_dd_//www.punkoffice.com/services_qt_ rel_eq__qt_external nofollow_qt__gt_your rotating box_lt_/a_gt_... _lt_u_gt_don_t_t match_lt_/u_gt_ the Babylon VR cam viewport-shape very well.  For example_co_ when I made the gap for the nose area... I noticed that the edges adjacent to the nose area... were quite vertically-flat.  The pictures you have on your rotating box... show shapes that have a gentle curve on all sides.  *shrug*_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you think you could ever put a _qt_button panel_qt_ on some wall of your 4-way website... where VR users could make adjustments to camera metrics values_co_ and maybe let the user adjust nose-bridge width via that wall-menu?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe those 4 directions_co_ should be 4 doors... and off we go exploring!  If you allowed 8 directions in each cylinder-room_co_ then we_t_re starting to get Zork-like.  Yeah!  8 doors... some marked normally_co_ and some marked _qt_Danger_qt_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_   Hundreds of 8-door rooms_co_ all connected together by doors_co_ all generated by OzRocker_t_s new 8-door room generator!  Maybe 8 buttons around a compass flower up in the corner... for turning?  Wow!  Might need BIG buttons in that environment_co_ though._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_*shrug*  Just thinkin_t__co_ feel free to ignore me.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-10-18T08:00:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_oh yeh_co_ I see what you mean.  The gap for the bridge ended up flattening out the barrel distortion on those edges._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Google cardboard V2 and all variations now has a conductive button so it would be cool to have a VR website that uses it.  I like your idea of rooms leading into other rooms.  That sounds like a good way to map out a website hierarchy.  Also means I could lazy-load each room (as a separate Babylon.js scene) if I wanted complex rooms.  The biggest obstacle in making 3D websites more commonplace is loading times.  When people see a progress bar they will bounce.  It would be cool if everything got loaded gradually_co_ like wireframe meshes_co_ low quality-texture_co_ then high quality-texture so its instantly functional and the quality increases as its loading._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-10-18T13:52:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The gap for the bridge ended up flattening out the barrel distortion on those edges._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Oh_co_ you said that SO much easier than I.  hehe.  Yes_co_ exactly!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Loading... yeah... that_t_s trouble.  We have something laying around here... called _lt_em_gt_incremental loading_lt_/em_gt_.  I don_t_t know much about it_co_ and even if you DID use it_co_ it MIGHT add so much OVERALL load-time... that the user-pleasure gained short-term... would be lost again long-term._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe the answer... is in the AssetsManager (the loading progress device).  Maybe we need a way to entertain the users during loading... a bit more than an orbiting progress meter.  One railroad simulator I have... does a slide show of still pics.  I_t_ve seen other games play a video during scene loads.  Sometimes slideshows with text captions that are hilarious.  Anything to entertain the users while the load is happening._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Putting-up a low-budget animated gif... like _lt_a href_eq__qt_http_dd_//i.imgur.com/HrbcgsK.gif_qt_ rel_eq__qt_external nofollow_qt__gt_the famous blue balls gif_lt_/a_gt_... can keep users busy while big things load_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe if you get really good-at it_co_ people will visit your site simply to see your _qt_Progress Meter Shows_qt_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  A random _qt_comic book story_qt_ (progress meter story) with every visit to _lt_a href_eq__qt_http_dd_//www.punkoffice.com_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_www.punkoffice.com_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  or not.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  But_co_ hmm.  Yeah_co_ progress meter entertainment is a whole new area of pondering_co_ huh?  Or not.  hah_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]