[{"Owner":"Pryme8","Date":"2016-10-29T00:29:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhy when I attach physics to a scene_co_ but do absolutely nothing with it_co_ like no collision tests nothings happening_co_ I get a super sharp drop in fps from about 30 in the scene to about 9..._lt_br /_gt__lt_br /_gt_\n\tIm really hoping to figure this out by tomorrow and have been holding off asking trying to figure it out_co_ but I am running out of time now!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-29T00:30:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis should not happen_co_ can you repro on the pG?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-29T00:30:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tno_co_ but I can upload a video best I can do.  Sorry its kinda their property.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-29T00:48:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/90pldrb5yb0?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tJust ignore the error that drops at the end that_t_s just from something else you just caught me mid changes on something else and this was happening before I was doing that_co_ plus the physics stuff is ahead on the stack so it happens first anyways._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-10-29T05:24:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t- Are the physics bodies sleeping or active?_lt_br /_gt__lt_br /_gt_\n\tI used this code to sleep at creation_dd_\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#002240_sm_color_dd_#ffffff_sm_font-family_dd_Inconsolata_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#feffff_sm__qt__gt_var _lt_/span_gt_pb _lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt__eq_ _lt_/span_gt_mesh_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_physicsImpostor_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_physicsBody_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt__sm_\n_lt_/span_gt_pb_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_sleepSpeedLimit _lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt__eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#258a25_sm__qt__gt_0.01_lt_/span_gt__lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt__sm_\n_lt_/span_gt_pb_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_sleepTimeLimit _lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt__eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#258a25_sm__qt__gt_5.0_lt_/span_gt__lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt__sm_\n_lt_/span_gt_mesh_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_physicsImpostor_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_sleep_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_()_sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t(I do wake up the player on every frame_co_ that wakes up every other body it gets into contact_dd_)\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#002240_sm_color_dd_#ffffff_sm_font-family_dd_Inconsolata_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#feffff_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_player_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_physicsImpostor_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_wakeUp_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_()_sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t- Another tip_dd_ the console really slows down if you write per frame. (even if its not shown in the developer tools). This took me some hairs pulled out_co_ console writing can half the fps._lt_br /_gt_\n\t- the debug screen can also lower the fps_co_ as compositing the DOM on a canvas is really slow in chrome. Firefox is slightly better in this. If I switch on debug screen on a QHD resolution_co_ it shows 40fps_co_ without it 60fps. HD resolution_ 5-10fps difference. (Showing fps in a Canvas2D text is faster.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-10-29T05:31:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOh and try it without scene.workerCollisions _co_ but with physics._lt_br /_gt_\n\tThe worker collisions does not help for me._lt_br /_gt_\n\tBut_co_ using an octree for collision and selection does help.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-29T05:59:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ll give that a shot that_t_s what I was thinking_co_ and nothing is moving really yet and no imposters are moving and really only one will so the octree being dynamic is not hard I think I just need to push the moving object to the dynamic array for it.  But yeah tommrow morning I_t_ll strip out the webworkers and see if that_t_s the issue thanks for offering input.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2016-10-29T07:54:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd one more piece of code_co_ which allows sleeping and_dd_\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#002240_sm_color_dd_#ffffff_sm_font-family_dd_Inconsolata_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#feffff_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_physics_engine_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt__physicsPlugin_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_world_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_broadphase _lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt__eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#feffff_sm__qt__gt_new _lt_/span_gt_CANNON_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_SAPBroadphase_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_( _lt_/span_gt__lt_span style_eq__qt_color_dd_#feffff_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_physics_engine_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt__physicsPlugin_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_world _lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_)_sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#feffff_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_physics_engine_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt__physicsPlugin_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_world_lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt_._lt_/span_gt_allowSleep _lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt__eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#feffff_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#e01b05_sm__qt__gt__sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tCannonJS uses a _qt_NaiveBroadphase_qt_ which is very slow at few (50?) bodies. (check everything collides with everything I think)_lt_br /_gt_\n\tSAP (Single Axis) Broadphase sorts out bodies at one axis_co_ this allows a few hundred bodies to work seamlessly._lt_br /_gt_\n\tThere is a grid broadphase which may be even faster in your city.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEven if all bodies are not moving and static_co_ if they are not sleeping_co_ they are checked for collision with each other._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-29T14:49:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWow_co_ where did you come from I think I have a new friend._lt_br /_gt__lt_br /_gt_\n\tI think it was the webworkers_co_ and the debug display_co_ just too much for my lil oll laptop...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]