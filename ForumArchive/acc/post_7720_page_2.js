[{"Owner":"jiweigang1","Date":"2014-07-15T03:32:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_i  think  _lt_a href_eq__qt_https_dd_//github.com/lo-th/Oimo.js_qt_ rel_eq__qt_external nofollow_qt__gt_Oimo.js_lt_/a_gt_ will be better  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-07-15T19:44:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is a Babylon plugin to Oimo.js in preparation ? Their _lt_a href_eq__qt_http_dd_//lo-th.github.io/Oimo.js/test_basic.html_qt_ rel_eq__qt_external nofollow_qt__gt_demos _lt_/a_gt_are really awesome !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-15T19:50:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m thinking about writing a plugin for Oimo.js_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_CheckCollisions is used only for collisions and collisions are checked only when using a freeCamera or calling mesh.moveWithCollisions function_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-07-17T01:08:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1OPWP_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1OPWP_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ I have done some testing of this playground scene (made by another user - adopted for my use).  Under normal conditions (in my FF30)_co_ you can click on the canvas as fast as you wish_co_ and it will stack the boxes tightly_co_ and the restitution (bounce) will act correctly.  As soon as you click the RUN button_co_ mouse over to the canvas with no delay_co_ and start clicking real fast.... for a good box stacking._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But keep messing with it.  Change the clearColor_co_ make some edits_co_ hit Run_co_ over and over.  Click on the canvas repeatedly_co_ and fast (spawn boxes).  If you do the right things_co_ you will see it change to _qt_super bounce_qt_ mode.  Then it acts diffferent... bouncing boxes wildly_co_ and you will no longer be able to tightly stack boxes (with fast clicking).  It will keep being in super bounce mode_co_ until you reload it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Please_co_ users... test this.  Super bounce mode is not caused by physics objects being spawned atop/near each other.  Super-bounce is an intermittent condition caused by... umm... I have no idea.  Play-around in the editor_co_ add some blank lines_co_ remove some blank lines_co_ and hit Run quite a few times_co_ click the canvas fast_co_ or something.  I cannot seem to find a pattern of actions... which will cause that scene to go into super bounce.  But I saw it happen about 5 times... in 30 minutes of playing with that scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Help us find this issue.  See if you can determine what actions... cause the scene to go into super bounce mode.  Thanks.  At least help me prove that J1 and I are not going insane.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Definitely report back here IF you attain super bounce mode.  You_t_ll know it when you see it.  VIOLENT high-speed bounces._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-17T10:53:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_46922_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_7720_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1405453809_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I_t_m thinking about writing a plugin for Oimo.js_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Excellent news. Thank you_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Try this Wingnut scene. I made some modification of yours._lt_/p_gt__lt_div_gt_I find it works best like this._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_The impostor ground needs just a mass zero_co_ nothing more. I also increase the severity so that the cube floats less_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I also correct the small error or you put .1 (likelihood of confusion) rather than 0.1 and the function do not need_sm_ at the end._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1OPWP%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1OPWP#2_lt_/a_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-07-17T14:40:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_*nod*  Thanks for the fixes.  It wasn_t_t my code.  I just pasted it from another person_t_s demo.  What I most want to hear about... is if anyone sees this demo suddenly change.  When it does this change (into super bounce mode)... its restitution becomes very powerful._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In this PG demo... _lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1QOY2K_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1QOY2K_lt_/a_gt_  I see WAY-powerful restitution as soon as I load it.  DK claims its caused by spawning physics objects too close to one another.  I_t_m not swallowing that reason_co_ easily.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried a version that spawned 10 spheres perfectly atop one another.  It turned out VERY strange and funny.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1QOY2K%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1QOY2K#6_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think I_t_m going insane.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  DK_co_ have you seen this super bounce mode_co_ ever?  Where spheres and boxes and linked spheres... shoot out of the scene in less than 20 seconds_co_ and are never seen again?  The powerful restitution is not ONLY at object spawn time.  It continues for about 10-20 seconds_co_ until most of the objects are gone from the scene... shot into outer space.  _dd_/_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ I will say no more (in this post)... but I STILL believe something is stinky in fish town... something more than object spawn proximity.  But maybe its FF30 only_co_ or maybe its my machine only_co_ or maybe I_t_m insane.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-17T14:53:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think that we should expects that a plugin is done with Oimo.js._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]