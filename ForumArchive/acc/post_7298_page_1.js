[{"Owner":"Metalx1000","Date":"2014-06-20T19:19:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So I_t_ve been working on a game (First Person Shooter)_dd__lt_br_gt__lt_a href_eq__qt_http_dd_//filmsbykris.com/scripts/metal_bullets_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//filmsbykris.com/scripts/metal_bullets_lt_/a_gt__lt_br_gt__lt_br_gt_One of the problems I have now is with the gravity._lt_br_gt_In stead of having people look through the mess of the code for that project_co_ I_t_ve simplified it here_dd__lt_br_gt__lt_b_gt_http_dd_//_lt_/b_gt__lt_b_gt_tinyurl_lt_/b_gt__lt_b_gt_.com/pfgjthp_lt_/b_gt__lt_br_gt__lt_br_gt_That scene might take a minute to load. _lt_br_gt_It creates 3_co_000 random spheres in the scene._lt_/p_gt__lt_p_gt_You can make the camera jump by clicking the mouse._lt_br_gt__lt_br_gt_The problem is this._lt_br_gt_When the scene gets complicated_co_ and the frame rate drops_co_ gravity slows down._lt_br_gt_So_co_ in this example scene with the 3_co_000 spheres I get 60fps in chrome on my desktop._lt_/p_gt__lt_p_gt_When I jump_co_ it lasts less then a second with my current settings._lt_br_gt_But_co_ on my laptop (or in a browser that renders slower - example_dd_ Firefox)_lt_br_gt_were I get 20fps in that scene_co_ the jump lasts about 4 seconds._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This becomes a real problem in my game because on slower machines you can fly across the board with one jump_co__lt_/p_gt__lt_p_gt_If I change the settings and adjust them for slower computers_co_ then on faster computers the jump time is to short._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there a better way of doing this?_lt_br_gt__lt_br_gt_Thanks for any help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-20T19:49:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Try using Octree to optimize the scene _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if(scene._activeMeshes.length &gt_sm_ 100) scene.createOrUpdateSelectionOctree()_sm__lt_/pre_gt__lt_p_gt_This should increase your fps._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Metalx1000","Date":"2014-06-20T20:09:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_dad72_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the advise.  I haven_t_t really learned how to use Octree yet.  I_t_ve read about it_co_ and I think I understand the basic concept_co_ but I haven_t_t used it in code yet._lt_/p_gt__lt_p_gt_I know Octree can be use for collision detection_co__lt_/p_gt__lt_p_gt_but I_t_m guessing it can improve performance in other ways_lt_/p_gt__lt_p_gt_since in this since the only collisions would be between the camera and the ground._lt_/p_gt__lt_p_gt_The line you gave _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if(scene._activeMeshes.length &gt_sm_ 100) scene.createOrUpdateSelectionOctree()_sm__lt_/pre_gt__lt_p_gt_I_t_m guessing that that checks if there are more then 100 meshes visible to the camera and if so use Octree._lt_/p_gt__lt_p_gt_I_t_m assuming this has to be checked regularly_co_ so do I put it in the render loop?_lt_br_gt_If so I just tried that and it made no difference._lt_br_gt_If it goes somewhere else_co_ or only needs to be called once_co_ please let me know._lt_br_gt__lt_br_gt_Although it seems like Octree is important and something I need to learn to improve performance of my project_co__lt_/p_gt__lt_p_gt_I also feel like even if this did help_co_ it would be more of a work around then a fix._lt_br_gt_Because_co_ even if I improve performance_co_ there will still be times where the game might still run slow_co_ and if it does_co_ it shouldn_t_t effect the game like this._lt_br_gt__lt_br_gt_Is there any way to make gravity work on a time base rather then a render rate?_lt_br_gt_I_t_m sure I could hack something together_co_ I_t_m just hoping that there is already something that I can use rather then create something._lt_/p_gt__lt_p_gt_In my head_co_ the way I would do it would be based on a time interval and it would move the camera down a certain amount based on time._lt_br_gt__lt_br_gt_So_co_ if anyone knows of a way that this is already done_co_ please let me know._lt_/p_gt__lt_p_gt_Other wise I might start working on throwing something together myself._lt_br_gt_Which will probably be ugly and I will spend forever tweaking it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-20T20:49:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_IMO all movement should be distance over time (which oddly enough is the definition of speed...). Currently I don_t_t think that it compensates the distance based on FPS. I remember reading about how to do it in one of my game gems or gpu gems books... I remember that there was a formula for calculating movement by frame_co_ based on FPS_co_ in order to ensure that proper distances and timing were adhered to and in sync._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Google_t_s not helping my find it though today..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Metalx1000","Date":"2014-06-20T21:57:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_reddozen_co_  You are correct_co_ distance over time. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-20T22:43:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Babylon.js give you a scaled value to autmatically fit your animations/values_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_scene.getAnimationRatio()_lt_/pre_gt__lt_p_gt_So in your case you can scale your jump value by this value. scene.getAnimationRatio() will be greater when FPS is low to compensate_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-06-20T22:44:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_awesome_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-06-20T23:14:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Good to know_co_ I would have learned something with getAnimationRatio()_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"smatt","Date":"2016-08-04T19:11:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_43574_qt_ data-ipsquote-contentid_eq__qt_7298_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1403304220_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 6/21/2014 at 0_dd_43 AM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBabylon.js give you a scaled value to autmatically fit your animations/values_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre class_eq__qt_ipsCode prettyprint prettyprinted_qt__gt_\n\n_lt_span class_eq__qt_pln_qt__gt_scene_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_._lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_getAnimationRatio_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_()_lt_/span_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSo in your case you can scale your jump value by this value. scene.getAnimationRatio() will be greater when FPS is low to compensate\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ this post is two years later extremely helpful! This should be mentioned in the documentation! Maybe here_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/Cameras_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/Cameras_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-04T19:32:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNo problem feel free to update the doc _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"smatt","Date":"2016-08-05T06:52:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor those who get here because they are having problems with different camera speeds on low-end devices_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.FreeCamera.prototype._computeLocalCameraSpeed _eq_ function() {\n  return this.speed * scene.getAnimationRatio()_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]