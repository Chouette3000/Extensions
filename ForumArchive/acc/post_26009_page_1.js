[{"Owner":"dbawel","Date":"2016-10-25T19:48:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow might I add ocillation to a physics object with an impulse vector already applied? I thought it would be simple_co_ but cannot get the function correct. The following playground scene oscillates scaling_co_ but I need to apply this to the meshes position while they are already moving on an applyImpuse vector3 so that they oscillate while on the impuse vector - but I cannot seem to add the oscillation to the object_t_s absolute potosition (abs). I won_t_t even both with my attemps_co_ as they are more problematic than helpful. But below is the last playground I was sent on a former post scling the ojects using math sin function as you can see. I thought this might be a starting point to get abs position and add the sin oscillation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1MJ09V%2327_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1MJ09V#27_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-26T17:00:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou_t_re a madman_co_ DB!  hehe.  What an idea.  Could I get you the moon and the stars_co_ too? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh gosh.  Ok_co_ um... I think you need the physics impostor to oscillate its position... and not _lt_em_gt_just_lt_/em_gt_ the mesh that is _lt_em_gt_directed_lt_/em_gt_ by it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I think there is only one way to do that.  Oscillate the impostor_t_s linearVelocity (periodically adding your zig-zagging to the current linearVelocity).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut guess what.  Your zig-zagging can cause a sideways collision with another mesh_co_ which will completely change the general direction velocity that you were zig-zagging along-upon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut think about this.  You set an airplane in motion along its fuselage axis... and then you blow it from side to side (oscillating cross-winds) with applyImpulses or summing your zig-zags with the current LV.  Ya gotta do it with impulses/LV.  Back in the old days_co_ we had .updatePhysicsBody()... which seemed like a way to _qt_force-around_qt_ the impostor... via repositioning the mesh it applied-to.  But that... is evil.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe impostor makes the call... on positioning physics active mesh.  Anything less... is unnatural.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSoooo... I think... you HAVE TO zig-zag the impostor_co_ and the mesh will come along for the ride.  The zig-zag has to be_qt_summed_qt_ with the current physicsBody LV_co_ I think.  In effect_co_ each periodic impulse will be pushing the impostor sideways AND forward at the same time.  45 degrees left_co_ then 45 degrees right_co_ back and forth.... up and down.  Sure to make my dog vomit.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut like I know anything.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_m just here for the free beer.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-26T17:19:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1MJ09V%2328_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1MJ09V#28_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-27T00:46:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce again you come through. Although I just spent the day schooling myself in Math.sin() as it_t_s allot of math to get the oscillations just right - especially since I_t_m also using your speed limit function for the collision imposters - which completely contradict each other._lt_img alt_eq__qt__dd_blink_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ title_eq__qt__dd_blink_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tEven though it took me all day to get the oscillation correct_co_ I couldn_t_t have done it without your help. Thanks much._lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-27T01:47:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t(Wingy peeks into DB_t_s campfire kettle... trying to see what he is cooking-up)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-27T05:46:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to see_co_ here_t_s a link - but the code is more messy than ever. I cleaned it up today_co_ but was asked to remove the oscillation - after several days work and loads of help from _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//qedsoft.com/DEMOS2014/PE_KYP/index22.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//qedsoft.com/DEMOS2014/PE_KYP/index22.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain PLEASE ignore the sloppy code. Below is the nice clean code - same scene_co_ but no oscillation_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//qedsoft.com/DEMOS2014/PE_KYP/index22.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//qedsoft.com/DEMOS2014/PE_KYP/index23.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-27T13:30:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDo you want predicable occolation or random?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-27T18:12:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe project required random oscillation_co_ but now that I spent a day building it_co_ they decided they wanted it removed._lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ So it was a waste of time in building_co_ but I learned so much in building it and getting it to work. Hopefully_co_ I can help others in new ways now that I went through all the pain - not in understanding any new math_co_ but in incorporating this into a physics engine with spped limits on mesh movement. My primary need right now is two things_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. build a shader or effect that replicates draging your finger through still water - I_t_m considering adapting the Fire Material in BJS for this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. I must be able to support two users in the same touch application for pointerdown_co_ pointerup_co_ and pointermove events simultaniously.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-27T18:58:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tfor number 1_co_ I think shader toy might have on like that_co_ and for number 2 web workers and separate ports will handle that._lt_br /_gt__lt_br /_gt_\n\tfor the oscillation you need to track a few things_lt_br /_gt__lt_br /_gt_\n\tAccel _eq_&gt_sm_ {x_co_y_co_z}_lt_br /_gt_\n\tCurrentWiggle _eq_&gt_sm_ {x_co_y_co_z}_lt_br /_gt_\n\tMax/Min Wiggle _eq_&gt_sm_ {x_co_y_co_z}_lt_br /_gt_\n\twiggleBaseValue _eq_&gt_sm_ low number like 0.0001_sm__lt_br /_gt__lt_br /_gt_\n\tthen set a before render function that takes the base wiggleValue_co_ and calculates a random accel for all three directions being negative or positive does not matter_co_ take the now accell and add that to the currentWiggle values_co_ check that they are in range and push back into min max if not_co_ and then apply this directly to the mesh.body.velocity.(direction) respectively_lt_br /_gt__lt_br /_gt_\n\tThis will make it like a wobble of the camera or object_co_ and can be tailored to simulate walking effects_co_ stairs ect if you apply it to the cameras rotation instead of the object in a first person setting (just a side note)_lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tAll velocities and torques can be edited directly if you go right for the single value.  so velocity.x velocity.y velocity.z... but if you want to pass a vector to jsut velocity then you need to convert the vector object to what ever that physics engine expects so if your using cannon you need to make a cannon vec3 to pass to the body to have it set correctly... or just go for it directly.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]