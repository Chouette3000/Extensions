[{"Owner":"Pryme8","Date":"2017-08-29T17:18:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSo I have noticed quite a large drop in FPS when I enable a GUI element to animate for a visual of the step/tick percentage of the block drop.  Im assuming it is because it is updating the 2d context of an entire canvas and not just a small section that is needed for this bar._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#FQE3AA%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#FQE3AA#17_lt_/a_gt_ &lt_sm_- with animation holds 49 fps_sm__lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#FQE3AA%2318_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#FQE3AA#18_lt_/a_gt_ &lt_sm_- without holds 60 fps_sm__lt_br /_gt__lt_br /_gt_\n\tIm sure there is a simple fix for this performance issue_co_ any ideas?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-08-29T17:39:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI get 60 no matter what.  Firefox drops to 59 every once in a while.  Am running win10 wt GTX 1050 on a 2560 x 1600 display.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-08-29T17:43:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twell your running a beast of a machine that_t_s why ^_^~!_lt_br /_gt_\n\tIm on a crap PC right now (which is cool because it_t_s closer to what most users will use)_co_ and so performance drops are more noticeable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh and on this client I have hardware accelerate turned off_co_ so maybe that_t_s whats doing it? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-08-29T17:59:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah.  Last dec I went to Win 10 &amp_sm_ the new video card_co_ &amp_sm_ motherboard with i5.  Before was on Ubuntu with an older card.  Firefox truly SUCKS on Linux ( was kind of nice ). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFYI_co_ the 1050 is great &amp_sm_ will make piece of crap much better_co_ since it is a short card with NO extra power reqd.  Still double slot though.  Forget PCI requirements.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-08-29T18:14:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah I_t_m sure my main rig its not a problem_co_ but here at the dental office we have a crap PC &gt_sm__&lt_sm_._lt_br /_gt__lt_br /_gt_\n\tSo there is no way to set up a _qt_render region_qt_ on the UI advance texture?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-29T22:31:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you have no hardware accelerated support this will be complex for sure!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can try to optimize it bu using a custom resolution_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/gui#adaptive-scaling_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/gui#adaptive-scaling_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Baker Xiao","Date":"2017-08-30T08:10:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot sure whether this is appropriate_co_ but totally just trying to be helpful - we have had the same problems and we ended up using a pixijs rendered canvas element for GUI_co_ overlayed on top of a babylonjs rendered one for 3d scene. Blazing fast even on mobile. So far the most performant GUI solution we have. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaven_t_t digged into it very deeply yet. I_t_m guessing it_t_s because of the overhead of redrawing the whole dynamic texture?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-08-30T16:51:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat_t_s what I was thinking too _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28015-baker-xiao/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28015_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28015-baker-xiao/_qt_ rel_eq__qt__qt__gt_@Baker Xiao_lt_/a_gt__co_ when I was working on my own game engine that_t_s the hindrance I came across was updating the entire context when just a small region was changing caused a huge drop in performance.  I had to script _qt_hot-zones_qt_  which were areas on the context that needed to be updated but that was a huge head-ache...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-30T19:36:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere is a mechanism in place to avoid refreshing the ui when nothing changes. But you are right_co_ if something change all the UI is redrawn\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could think about  using two GUI_dd_ one for static and one for dynamic controls (if it makes sense)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m also tracking the need for this feature here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/2719_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/2719_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-08-31T00:19:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah because it looks like setting the idealWidth even to 10px makes no effective difference in rendertime once its scaled up to the scene._lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#FQE3AA%2360_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#FQE3AA#60_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#FQE3AA%2361_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#FQE3AA#61_lt_/a_gt_ &lt_sm_- if anyone wants to see more stuff working with it.. asd inputs work as of right now.  Just trying to work out some dumb bugs and then ill finish this up... I just have no time to focus on anything anymore it sucks.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-31T16:34:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSO you think the perf lost comes from the update itself ? not from the rendering?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-08-31T19:42:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat is the scale up of the set width texture doing when it resizes it to fit the context? Is it restricting the data buffer to what ever you set the size to? if so then it might be the update itself if not it_t_s the rendering.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tit seems like it draws the same_co_ just changes your scale kinds.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-01T01:32:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthere is no resize per se to adapt. The shader will just pick it as a texture and scale it using hardware texture2d reads\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo basically if you create a texture of 100x100_co_ then the texture will remains at this size and it will be scale up by shaders so this is completely free.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-09-01T03:54:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_m starting to think the fps drop is reserved to the client I was working on.  On every other client it_t_s running fine so maybe it_t_s a hardware issue.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-09-01T07:33:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou have some very cool GUI controls also in other posts!  Thanks for sharing.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]