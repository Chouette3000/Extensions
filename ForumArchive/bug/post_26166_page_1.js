[{"Owner":"jpdev","Date":"2016-11-02T11:46:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tgoToFrame has no lasting effect on running animations._lt_br /_gt_\n\tIt_t_s effect on paused animations is lost on resume.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1MLKDF%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1MLKDF#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe example sets up a running animation and three keybinds_dd__lt_br /_gt_\n\tg -&gt_sm_ goToFrame_co_ s -&gt_sm_ pause_co_ r -&gt_sm_ resume\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSteps to reproduce the bug_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1)_lt_br /_gt_\n\tClick on the animation to set the focus to the canvas_co_ so keystrokes go to the action manager. (You can open the console to make sure the keystrokes are actually reaching the engine_co_ there is a console.log for each key.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2)_lt_br /_gt_\n\tpress _qt_g_qt_ -&gt_sm_ goToFrame is called_co_ there is no effect\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3)_lt_br /_gt_\n\tpress _qt_s_qt_ -&gt_sm_ the animation is paused\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4)_lt_br /_gt_\n\tpress _qt_g_qt_ -&gt_sm_ goToFrame is called_co_ the correct frame of the animation is displayed\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5)_lt_br /_gt_\n\tpress _qt_r_qt_ -&gt_sm_ the animation is resumed_co_ but it skips back to the frame where it was before goToFrame was called\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tMy bug analysis (based on babylon.2.4.max.js_co_ from github dist) _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tIn Animation.prototype.animate (within the engine) a local variable _qt_currentFrame_qt_ is calculated without checking the this.currentFrame while the animation is running.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 26891 (babylon.2.4.max.js)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar currentFrame _eq_ returnValue ? from + ratio % range _dd_ to_sm__lt_br /_gt_\n\t_qt_this.currentFrame_qt_ goes completely ignored.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd after that in Animation.prototype._interpolate the new calculated value is assigned to this.currentFrame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis means the _qt_goToFrame_qt_-Function never has any effect on running animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt also means_co_ you can_t_t pause or stop the animation and use goToFrame because when the animation starts again_co_ currentFrame is recalculated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-02T16:29:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk understood\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you mind submitting a PR?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jpdev","Date":"2016-11-02T17:49:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am actually not sure how to fix this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy goal was to have multiple rigged characters all playing an idle animation and not be synced up._lt_br /_gt_\n\tThis implies_co_ that the animations all at the same time_co_ but at a different point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooking further into the code_co_ the only way to achieve this without new variables is to set _localDelayOffset in the Animatable._lt_br /_gt_\n\tBecause the same _qt_delay_qt_ goes into all animations started at the same time and _localDelayOffset is the only variable belonging to the Animatable influencing the calculation of currentFrame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo goToFrame would have to calculate the correct localDelayOffset so that the currentFrame calculation yields the desired frame - with the different easing functions available this seems impossible to me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor myself_co_ with the simple linear animations for my rigged models I hacked a _qt_currentFrameOffset_qt_ into the Animatable that is added after currentFrame is calculated (and then wraps _qt_currentFrame_qt_ around if it is greater than _qt_to_qt_)._lt_br /_gt_\n\tMy Animation_t_s goToFrame still iterates the Animatable but no longer calls goToFrame on the Animatables_co_ instead sets the currentFrameOffset.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis nicely achieves my goal (the shifting of the animations for multiple characters) but it_t_s not a real _qt_goToFrame_qt_ solution_co_ because it only sets an offset - if the animation is already running_co_ goToFrame(50) won_t_t actually make the animation continue from frame 50_co_ but offset it by 50 frames where ever it currently is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I guess I can_t_t do a PR - because I don_t_t know how to solve it with the way animation is setup_co_ sorry about that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-02T22:01:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf this looks good I_t_ll submit a PR_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1MLKDF%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1MLKDF#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_  I submitted the PR.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jpdev","Date":"2016-11-03T11:07:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Adam_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooks like I wasn_t_t too far off with my idea to set _localDelayOffset _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]