[{"Owner":"Abdullah","Date":"2016-12-24T17:43:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello Everyone.. hope so everyone is fine. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually i want to check the collision of two imposters and i am using this code below.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  sphere.physicsImpostor.registerOnPhysicsCollide(floor.physicsImpostor_co_ function (main_co_ collided) {_lt_br /_gt_\n\t                main.object.material.diffuseColor _eq_ new BABYLON.Color3(Math.random()_co_ Math.random()_co_ Math.random())_sm__lt_br /_gt_\n\t            })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit is working too inconsistently in my code. sometimes it change colour and sometimes not...!!!  _lt_br /_gt_\n\ti don_t_t know whats the issue. So kindly help me out.. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tThank you...!!!_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18592-getzel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18592_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18592-getzel/_qt_ rel_eq__qt__qt__gt_@getzel_lt_/a_gt_ .... any help please??? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-12-31T15:04:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Abdullah.  I_t_m not a VS user_co_ and I have never monitored physics collisions in that way.  But_co_ you know how it works around here.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Please create a _lt_strong_gt_simple_lt_/strong_gt_ playground demo that reproduces this issue.   Then it is easier for all of us to help.  Thanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAww heck_co_ I_t_ll make one for us.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1AAQUN%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1AAQUN#21_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Using_The_Physics_Engine#setting-the-time-step_qt_ rel_eq__qt_external nofollow_qt__gt_time step value_lt_/a_gt_ in line 27 is likely important.  And yes_co_ I see some _qt_misses_qt__co_ where the sphere collider function does not trigger.  But perhaps I am seeing happenstance repeating random colors_co_ instead.  Not sure.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure there is anything that can improve it.  JS-based physics engines have some inconsistencies and _qt_slop_qt_.  I think it is because computer physics needs to run REAL fast_co_ for the most-accurate reproduction.  JS does not run real fast.  But I_t_m speculating.  Watch the sphere carefully_co_ and you will even see inertia/energy inconsistencies and anomalies_co_ where energy is ADDED to the sphere bounce.  Not perfect_co_ and I_t_m not sure why.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is likely we will see physics engines built-into the hardware of future consumer-grade computers.  That will be a wonderful day_co_ but then we will push them harder_co_ and find more inconsistencies_co_ I suppose.  ie. _qt_Why won_t_t the colors change on ALL 1000 bouncing spheres?_qt_  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWe have a playground example_co_ now_co_ so others can test easier_co_ and comment.  Let_t_s see what others have to say.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Addenda_lt_/strong_gt__dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12SEYV%2310_qt_ rel_eq__qt_external nofollow_qt__gt_Here is an OIMO playground_lt_/a_gt_ where the author used a world object (line 29) and then _qt_stepped_qt_ the physics within the render loop (line 125).  Not sure what THAT is about.  Cannon has a _lt_em_gt_world_lt_/em_gt_ object_co_ too... but there is no _lt_em_gt_step()_lt_/em_gt_ func on Cannon_t_s _lt_em_gt_world_lt_/em_gt_.  Both Cannon and Oimo are 3rd-party apps_co_ essentially not part of BJS.  We could use more experts_co_ so teach us things that you discover_co_ okay Abdullah?  (thx)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Abdullah","Date":"2016-12-31T18:00:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\they _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_... thanx for your reply first of all... _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tnow i think the issue is that in my main index.html file.. i am doing so many things like mesh loading and collisions and keyEvents etc. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tso i think this is the issue that collision function is not working very consistently... _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti just make one file separately in separate project in visual studio.... and then i just put one ground and one sphere in that and that works very fine.. _lt_br /_gt_\n\tso may be it is a issue of threading.... means in one thread physics engine is not able to do all that things.... _lt_br /_gt_\n\tthese are my point of views... i need yours.. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-04T19:11:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24295-abdullah/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24295-abdullah/_qt_ rel_eq__qt__qt__gt_@Abdullah_lt_/a_gt_! can you reproduce the issue in the PG?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-05T13:47:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ we already have a _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1AAQUN%2322_qt_ rel_eq__qt_external nofollow_qt__gt_PG for this issue_lt_/a_gt__co_ but_co_ as you can see_co_ restitution is inconsistent and the sphere never sleeps.  Brownian jitter (no-sleep) has been an issue in our physics engines for a long time_co_ and I_t_m not sure _qt_isSleeping_qt_ EVER goes true (except maybe with restitution set 0.1 on both colliding bodies).  But bounce-inconsistency and no-sleep jitter... is not the issue_co_ here_co_ of course.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think... when Abdullah has more activity happening in his scene_co_ this _lt_em_gt_OnPhysicsCollide _lt_/em_gt_(line 29) fails to trigger much more often.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s load-up.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1AAQUN%2324_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1AAQUN#24_lt_/a_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDarn_co_ I was hoping to bog-down into the 30 fps range with this test... but I only bogged to 45 fps area_co_ for my Firefox.  Collide still seems consistent. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe I should have loaded-up the scene with more physics activity. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbdullah... POSSIBLY... it is this failure of physics engine to .allowSleep that is causing OTHER physics activity in your scene... to make this collider fail more often.  Try to ensure that your physics engine is never _qt_loaded-down_qt_ with any continuous collisions or continuous physics body overlapping.  (Avoid physics bodies _qt_rubbing_qt_ on each other_co_ and physics bodies NOT going to sleep when movement is tiny).  Try to learn the _qt_rules_qt_ (criteria) used by physics engines to determine WHEN they _qt_sleep_qt_ a physics body.  Avoid continuous _qt_rubbing_qt_ to maximize physics engine performance_co_ I_t_d say.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this issue is solved_co_ as best it CAN be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor those who might want to continue investigating _lt_em_gt_sphere.physicsImpostor._physicsBody.sleepState_co_ _lt_/em_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1AAQUN%2327_qt_ rel_eq__qt_external nofollow_qt__gt_here is a playground_lt_/a_gt_ that prints sphere_t_s _lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Body.html#property_sleepState_qt_ rel_eq__qt_external nofollow_qt__gt_sleepState_lt_/a_gt_ on the PG toolbar once per frame.  It is NOT in continuous collide_co_ or we would see the scene color flashing.  But it won_t_t sleep.  This PG is a good place to play-with restitutions and other _lt_em_gt_physicsImpostor._physicsBody _lt_/em_gt_properties..._lt_em_gt_ _lt_/em_gt_such as ._lt_em_gt_sleepTimeLimit_lt_/em_gt__co_ ._lt_em_gt_sleepSpeedLimit_lt_/em_gt__co_ ._lt_em_gt_timeLastSleepy_lt_/em_gt__co_ and ._lt_em_gt_allowSleep_lt_/em_gt_  (see console).   _lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_First person to make the sphere sleep... without using force... gets the _qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_BJS Golden Puppy-Stool Award_lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm__qt__gt__qt_ !!_lt_/span_gt_  YAY!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBack to the original PG demo (bouncing)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...sphere energy roll-off is terrible_co_ eh?  Sphere bounces higher_co_ then lower_co_ then higher_co_ etc.  Darn.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn another subject... if I change line 14... to 110 lights_co_ Firefox bogs_co_ ground material disappears_co_ and I get a big shader-fail dump to console.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BJS - [07_dd_24_dd_14]_dd_ Error_dd_ ERROR_dd_ 0_dd_? _dd_ _t__t_ _dd_ syntax error \nbabylon.js_dd_3_dd_25521\n\nBJS - [07_dd_24_dd_14]_dd_ Vertex shader_dd_defaultbabylon.js_dd_3_dd_25521\n\nBJS - [07_dd_24_dd_14]_dd_ Fragment shader_dd_defaultbabylon.js_dd_3_dd_25521\n\nBJS - [07_dd_24_dd_14]_dd_ Trying next fallback.babylon.js_dd_3_dd_25521\n\nError_dd_ WebGL_dd_ shaderSource_dd_ Source has more than 262143 characters. (Driver workaround)babylon.js_dd_4_dd_7591\nBJS - [07_dd_24_dd_14]_dd_ Unable to compile effect_dd_ \n\n(and lots more)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI am having the same issue with _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2571-the-wingnut-chronicles/?do_eq_findComment&amp_sm_comment_eq_156976_qt_ rel_eq__qt__qt__gt_a LiteBrite demo that I have been working-on... in the Wingnut Chronicles_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdd too many lights_co_ and a shader fails.  It_t_s a higher number of lights allowed_co_ in IE_co_ but material fails for IE_co_ too (but no shader error dump.) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is off-topic for THIS thread_co_ so perhaps I should start a new forum topic_co_ or remain in the Wingnut Chronicles.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-05T16:28:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk regarding the physics_co_ let_t_s bump _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(regarding the shader error_co_ this is expected as there is a limitation to the number of instructions per shader. But the new webgl2 runtime will help increasing this number _sm_))\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-05T17:21:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tahhh_co_ I dunno_co_ DK.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tDid you visit the Firefox version of my LiteBrite demo?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#18TRYT%2324_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#18TRYT#24_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn FF_co_ the 3rd light... (add another _qt_o_qt_ to line 65) ...causes the shader crash and box material loss.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-----------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow for the IE version...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#18TRYT%2325_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#18TRYT#25_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t86th light bulb... causes material loss on _qt_box_qt_.  (but no shader error dump)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdd one _qt_o_qt_ to line 76 - box material is gone. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the post about it...  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2571-the-wingnut-chronicles/?do_eq_findComment&amp_sm_comment_eq_156976_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/2571-the-wingnut-chronicles/?do_eq_findComment&amp_sm_comment_eq_156976_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyone else getting same indications?  Maybe not_co_ eh?  Maybe I_t_m broken_co_ locally_co_ or mentally.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNo hurry to address this_co_ but... I think there_t_s more happening here... than a webGL limitation.  *shrug*\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-06T00:53:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI filed a bug for Firefox_dd__lt_a href_eq__qt_https_dd_//bugzilla.mozilla.org/show_bug.cgi?id_eq_1329051_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//bugzilla.mozilla.org/show_bug.cgi?id_eq_1329051_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor Chrome and IE this is shaders limitations _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ (try it on Chrome with WebGl2 enabled in about_dd_flags)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-06T04:04:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWow_co_ cool.  Thanks.  Now I wish I would have provided a simpler playground.  My code is all messy and stinky.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-01-06T16:10:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWait hold up we have 2.0 access now? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-06T16:33:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ (Check my announcement in Announcements section)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-01-06T21:01:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tY_t_all might lose me for a few days now. Lots of reading to do.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-01-24T15:11:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta note about the physics part - \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI didn_t_t quite understand what the problem is. Is it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) Sometimes the event doesn_t_t trigger?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) The event is triggered too often_co_ even when the sphere is not jumping anymore?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhether 1 or 2_co_ the answer is kind_t_a the same - the physics engine is responsible for this. we are just a proxy.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving said that - if it is 1 - I would be very happy to see that reproduced!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif it is 2 - The sphere doesn_t_t stop. it keeps on jumping we are talking about very very low values_co_ but it simply colliding with the ground constantly. You could check if the velocity is smaller than a predefined alpha_co_ and not change the color. Or reset the velocity and it will stop jumping.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]