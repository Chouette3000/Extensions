[{"Owner":"Convergence","Date":"2017-05-31T00:38:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo save performance I check the easy-to-use scene.workerCollisions  of Babylon 2.x\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ when an object is colliding with another object_co_ it will bounce back slightly when a collision happens. This is visible when an object for example is colliding with the ground mesh due to gravity_co_ it won_t_t stay still_co_ but  rather bounce up and down ever so slightly. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index2_5.html#2E0XAJ%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index2_5.html#2E0XAJ#1_lt_/a_gt_ PS. 3.0 did not seem to have worker collisions using this code?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother issue I have with collisions in general (main thread or off thread) is that if the ground has the slightest of an angle_co_ the mesh will _t_slide down_t_ to the lowest point_co_ even though in real life most objects have friction preventing that. Any way to _t_fake_t_ friction when using the built-in collision system?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-31T02:29:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t3.0 removed worker collisions from the main js file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can still use it here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/babylon.worker.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/babylon.worker.js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately_co_ due to poor way to synchronize between main thread and worker_co_ the issue your are mentioning are tough to fix _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding the sliding issue_co_ this is because initially collisions were made to do FPS camera. If you want better _qt_collisions_qt_ between objets I suggest using one of the physics plugin\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2017-05-31T08:00:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176318_qt_ data-ipsquote-contentid_eq__qt_30751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496197778_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t3.0 removed worker collisions from the main js file.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou can still use it here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/babylon.worker.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/babylon.worker.js_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUnfortunately_co_ due to poor way to synchronize between main thread and worker_co_ the issue your are mentioning are tough to fix _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tRegarding the sliding issue_co_ this is because initially collisions were made to do FPS camera. If you want better _qt_collisions_qt_ between objets I suggest using one of the physics plugin\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks for the reply _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIs there no way for get the angle of collision (and pray_co_ the mesh id of collision) back from the worker? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-31T17:00:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot now _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ But if you are brave enough you can try to update the code to do it\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-31T17:01:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat about using camera.onCollide event?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit will give you the mesh which collided with the camera\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2017-06-01T06:12:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176418_qt_ data-ipsquote-contentid_eq__qt_30751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496250001_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tNot now _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ But if you are brave enough you can try to update the code to do it\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI might give it a try.. would you mind to point me to the function name that does the _t_pushback_t_?\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176419_qt_ data-ipsquote-contentid_eq__qt_30751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496250086_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhat about using camera.onCollide event?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tit will give you the mesh which collided with the camera\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tcool_co_ I_t_ll have to check it out _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-01T15:06:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAround here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Collisions/babylon.collisionCoordinator.ts#L304_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Collisions/babylon.collisionCoordinator.ts#L304_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-01T16:15:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thehe.  Oops_co_ there are TWO kinds of _qt_push-back_qt_ happening here.   Possible confusion.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t#1 - _qt_push back_qt_ _eq_ message returning from worker thread.  _lt_em_gt_I think_lt_/em_gt_ Deltakosh was talking about THIS type... not sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t#2 - _qt_push back_qt_ _eq_ tiny re-positioning of mesh AFTER collision (in opposite direction of collision)... to _qt_clear_qt_ collision condition. (causes jitter/shaky_co_ maybe?)  I have no proof that this type of _qt_push back_qt_ happens at all.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tConvergence... which did you mean?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (this is kind-of funny - it makes me smile)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s tour _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ demo_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylon.actifgames.com/moveCharacter/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylon.actifgames.com/moveCharacter/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse Z key and mouse... to drive _qt_dude_qt_ into wall.  Keep holding Z... see jitter/shaky. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSome of us _lt_s_gt_think_lt_/s_gt_ speculate that this jitter is caused by collision_co_ then push-back out of collision_co_ then collision_co_ then push-back out of collision_co_ rinse_co_ repeat.  #2\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis #2 push-back (ahem) might be done automatically... SOMEWHERE in framework code.  But maybe not.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2017-06-02T11:04:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176615_qt_ data-ipsquote-contentid_eq__qt_30751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496333750_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\thehe.  Oops_co_ there are TWO kinds of _qt_push-back_qt_ happening here.   Possible confusion.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t#1 - _qt_push back_qt_ _eq_ message returning from worker thread.  _lt_em_gt_I think_lt_/em_gt_ Deltakosh was talking about THIS type... not sure.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t#2 - _qt_push back_qt_ _eq_ tiny re-positioning of mesh AFTER collision (in opposite direction of collision)... to _qt_clear_qt_ collision condition. (causes jitter/shaky_co_ maybe?)  I have no proof that this type of _qt_push back_qt_ happens at all.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tConvergence... which did you mean?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (this is kind-of funny - it makes me smile)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tLet_t_s tour _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ demo_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylon.actifgames.com/moveCharacter/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylon.actifgames.com/moveCharacter/_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUse Z key and mouse... to drive _qt_dude_qt_ into wall.  Keep holding Z... see jitter/shaky. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSome of us _lt_s_gt_think_lt_/s_gt_ speculate that this jitter is caused by collision_co_ then push-back out of collision_co_ then collision_co_ then push-back out of collision_co_ rinse_co_ repeat.  #2\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis #2 push-back (ahem) might be done automatically... SOMEWHERE in framework code.  But maybe not.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ yeah I_t_m referring to #2_co_ personally I_t_d call #1 a callback. Yeah the BABYLON source can be a bit abstract at times with many nested function calls having very similar names.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-02T13:06:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah... but these _lt_em_gt_worker_lt_/em_gt_ _qt_callbacks_qt_ actually carry _qt_payloads_qt_... so would that be _qt_pay-backs_qt_?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWhen we do the barrel-to-barrel collision tests in _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWCK0%2332_qt_ rel_eq__qt_external nofollow_qt__gt_Tomas_t_ #32 PG_lt_/a_gt__co_ there is very little jitter/shake... during held-keypress continuous collisions (head-ons_co_ rub-arounds_co_ rub-overs_co_ rub-unders).   I wonder why.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m sure that I_t_m not using the correct names for these types of collider activities.  I HOPE folks understand what I mean. These are things you see... when you continue to apply moveWithCollisions in same direction_co_ after initial/first collision has happened.  (holding-down keys... forcing continuous collision via moveWithCollisions()_co_ or doing continuous fake gravity pull-downs with renderLoop)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHeadbutt &amp_sm_ The Work-Arounds.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Good band name.  The moved mesh either stops-dead (when colliding ellipsoids are somewhat aligned)_co_ or moved-mesh moves/rubs left_co_ right_co_ under_co_ or over the static (non-moving) collider/mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tANYway_co_ perhaps the reason for lower jitters in barrel tests... is the low-power/magnitude of the moveWithCollisions(_lt_em_gt_thisVector_lt_/em_gt_). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tConvergence_co__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index2_5.html#2E0XAJ%231_qt_ rel_eq__qt_external nofollow_qt__gt_ you were lowering mesh 1 unit of Y per frame_lt_/a_gt_... (within renderLoop).  That_t_s a somewhat-powerful down-force velocity.  SO_co_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index2_5.html#2E0XAJ%236_qt_ rel_eq__qt_external nofollow_qt__gt_I changed your line 33 to a -.01 down-force_lt_/a_gt_... to see if the amount of collider velocity... affects jitter amount.  No change seen.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index2_5.html#2E0XAJ%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index2_5.html#2E0XAJ#1_lt_/a_gt_ PG_co_ does anyone else see that mesh goes well-below ground and then pushes-back out-of the ground?  I think that is #2 push-back in action.  #2 push-back... sounds messy_co_ somehow.  heh_co_ ewww.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_***_lt_/strong_gt_ Okay_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and/or anyone else... we_t_d like to find WHERE/HOW the collider does this #2 type-of push-back... on the moved mesh. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it_t_s hidden in the collider code somewhere.  I will do some good research today.  If anyone already knows where that code is located_co_ we_t_d love to hear it. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI saw some talk of _qt_old position_qt_ in _lt_em_gt_some_lt_/em_gt_ code_co_ there_co_ but that may be for _qt_the rubs offs_qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWhy do these words_co_ somehow_co_ make me feel _qt_dirty_qt_?  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-02T13:24:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tShould be here (If I understood correctly)_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.ts#L1418_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.ts#L1418_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-02T13:26:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s it!  YAY!  Thx DK!  Fastest answer to a forum question EVER_co_ I think.  Too cool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(It was directly UNDER .moveWithCollisions() code!  I_t_m pretty stupid_co_ eh?  Yikes!)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow we can do some studying.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI bet that _lt_em_gt_Engine.CollisionsEpsilon_lt_/em_gt_ is the determiner for WHEN a collider head-butts_co_ and/or when it _qt_rub-moves_qt_ left/right/under/over the static collider.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is a collider positional-offset thresh-hold. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Wow_co_ look at me speaking like a grown-up!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYep_co_ there_t_s good stuff in THAT code... good learn-ables.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2017-06-02T13:40:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176741_qt_ data-ipsquote-contentid_eq__qt_30751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496410011_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThat_t_s it!  YAY!  Thx DK!  Fastest answer to a forum question EVER_co_ I think.  Too cool.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tNow we can do some studying.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI bet that _lt_em_gt_Engine.CollisionsEpsilon_lt_/em_gt_ is the determiner for WHEN a collider head-butts_co_ and/or when it _qt_rub-moves_qt_ left/right/under/over the static collider.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIt is a collider positional-offset thresh-hold. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Wow_co_ look at me speaking like a grown-up!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYep_co_ there_t_s good stuff in THAT code... good learn-ables.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYeah_co_ changing BABYLON.Engine.CollisionsEpsilon to .1 seems to stop the jitter.. but I wonder what_t_s the drawback because nothing comes free _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2017-06-02T13:44:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAh_co_ I found the drawback_co_ when a mesh moves too slow it won_t_t move at all anymore..\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-02T13:49:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt affects the _qt_dead-stop_qt_ zone.  It determines how far off-center the two colliders can be... before dead-stop changes-into rub-around.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt_  (possibly drawback #2)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen you hit those _qt_won_t_t move at all_qt_ places... did you keep holding keypress for a really long time... like... jam a coin into the _t_D_t_ key and go have breakfast?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  They still might be rubbing-around... just real real slow.  But maybe not.  If using barrel demo_co_ you can watch the numbers_co_ I guess... see that it_t_s not starting a rub-around.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInteresting!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust in case... _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I made a _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWCK0%2337_qt_ rel_eq__qt_external nofollow_qt__gt_new #37 barrels demo_lt_/a_gt_. (barrels initially Y/Z aligned) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSame WASD QE R keys active.  Default collision epsilon. BUT_co_ this PG has the position read-out to 12 decimal places_co_ so we can see tiny position changes... if they happen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice... hold _t_D_t_ key... left barrel Y position changes from 6.000000000000 ...to 6.000000001788 ... upon collision with other barrel?  Weird.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ these #37 barrels have a reluctance (unwillingness) to climb-over/dive-under_co_ for some reason.  Not sure why_co_ but interesting.  Still learning.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2017-06-02T13:57:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor now I_t_ve settled on a Epsilon of .02_co_ seems to stop the jitter but allows my slowest-moving-mesh to still move at their normal speed _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ As an additional benefit it seems to stop the sliding down minimal inclines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the help!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf there are additional drawbacks I guess we_t_ll find out _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]