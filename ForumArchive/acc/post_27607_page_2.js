[{"Owner":"wo997","Date":"2017-01-22T14:44:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHmm... is that something about making the world as object and using it in code? It will be hard to do for me_co_ there is lots of stuff do to and I can_t_t find any tutorial about it.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-23T13:09:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_160246_qt_ data-ipsquote-contentid_eq__qt_27607_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485094633_qt_ data-ipsquote-userid_eq__qt_22713_qt_ data-ipsquote-username_eq__qt_Raggar_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t22 hours ago_co_ Raggar said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI know Cannon has a removeConstraints function_co_ so if that_t_s the plugin you use_co_ maybe you could either try that_co_ or try the executeNativeFunction function.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI found this _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/2.4/CannonJSPlugin_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/2.4/CannonJSPlugin_lt_/a_gt_ but it_t_s not shown how to use it. Can you find babylon playground or any code with this (generate joint_co_ remove joint...)?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-23T13:25:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Constraint.html#method_disable_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Constraint.html#method_disable_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdisable... that_t_s a way to do it using native call.  (_lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/HingeConstraint.html_qt_ rel_eq__qt_external nofollow_qt__gt_hingeConstraint link_lt_/a_gt_)  (enable/disable methods are there_co_ too_co_ as you can see.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tconsole.log(scene.getPhysicsEngine()._physicsPlugin)_sm_  (the plugin).  But_co_ yeah_co_ I don_t_t see any constraint disable code on the plugin.  Not deemed important enough for plugin layer.  So_co_ go native.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ and the boys made native calls easy to do.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-01-23T14:38:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#15U9CT%2342_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#15U9CT#42_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn line 521/522_co_ I tried using both world.removeConstraint and constraint.disable() without any apparent difference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry picking the boxes to see it in action.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry running either of those functions natively using the function in the plugin.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-23T15:54:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_160394_qt_ data-ipsquote-contentid_eq__qt_27607_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485182338_qt_ data-ipsquote-userid_eq__qt_22713_qt_ data-ipsquote-username_eq__qt_Raggar_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 1/23/2017 at 8_dd_38 AM_co_ Raggar said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#15U9CT%2342_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#15U9CT#42_lt_/a_gt__lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tOn line 521/522_co_ I tried using both world.removeConstraint and constraint.disable() without any apparent difference.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTry picking the boxes to see it in action.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTry running either of those functions natively using the function in the plugin.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI tried it and it works even on my phone smoothly. I think that the script won_t_t create many boxes as it says because you have the same name for each of this. Am i right? I still can_t_t see the point of native functions because I have never done this before. I remember how to paste c++ into javascript but here I get stuck.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-01-23T16:15:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe name shouldn_t_t really matter as far as I know. They still have ID_t_s to uniquely identify every single mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry zooming out_co_ then it doesn_t_t run as smoothly_co_ but that is something entirely different than this thread.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImagine making a skyscraper you could bring down_co_ that would be cool_co_ but I_t_m not really sure Javascript is capable of doing that_co_ in a performant way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-23T18:08:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ I found this (below) and I will try to do it on my own _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/26731-disable-physics-mesh-rotation-help/?do_eq_embed&amp_sm_comment_eq_156759&amp_sm_embedComment_eq_156759&amp_sm_embedDo_eq_findComment#comment-156759_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-23T18:27:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tballM.physicsImpostor.executeNativeFunction(function (world_co_ body) {_lt_br /_gt_\n\t         world.removeConstraint(joint3)_sm__lt_br /_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoesn_t_t work_co_ ballM is a jointed body_co_ joint3 is a joint_co_ should I execute this function for the body or constraint? I have no errors.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-01-23T19:02:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor the constraint.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI haven_t_t personally toyed with the function_co_ but have you verified that the function itself works by doing something like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tballM.physicsImpostor.executeNativeFunction(function (world_co_ body) {_lt_br /_gt_\n\t         body.velocity.-y _eq_ 10_sm__lt_br /_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr maybe just log the output of the world and body_co_ to make sure everything is right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-23T20:56:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ I tried and everything is alright _dd_/ I have trouble with what I should call the function for_co_ for a body or a constraint? if for a constraint then how can I do this?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-01-25T09:12:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24961-wo997/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24961_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24961-wo997/_qt_ rel_eq__qt__qt__gt_@wo997_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ removing a constraint! That_t_s an interesting task _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Apparently_co_ I forgot an important function in the physics impostor class. the function exists_co_ however_co_ in both the physics engine and the physics plugins.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a demo of how to remove a joint (until I fix it in a nicer way)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#11OMIX%2320_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#11OMIX#20_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hijacked your setKeys function (line 138). When you press _qt_space_qt_ ballM loses all of its joints. You can decide which joints to filter_co_ of course. I am using a brute-force-method here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you tell me the API is not the best_co_ i would agree with you _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ . I am also accessing private members here_co_ due to the way I built the removeJoint function in the physics engine. You can keep a trace on all joints created and remove them as you wish_co_ if you know the main impostor and connected impostor. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain - I will find a nicer way of doing that. The best would actually be a dispose function on the joint itself! No idea why I never implemented that... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn my TODOs!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-01-25T09:12:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ BTW - \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti LOVE your demo. Carry on! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-25T10:14:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ Thank you for that. The next thing I wanted to implement was making it crashing not when it touches something_co_ but when the force is to high. To make that I will look for tiny differences of distance between connected objects. Is that a good way of thinking? When I finish this I will let you see the effect _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-01-25T10:51:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\they_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not sure what force you are referring to_co_ so I can_t_t really help. You are tracking many variables yourself_co_ so you could always have a combination of those_co_ you can check for velocities of each part_co_ so many options _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Would love to see the final result.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-01-25T12:06:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not entirely sure what you mean either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you mean measure the distance between two constrained bodies_co_ or something like\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.addEventListener(_t_collide_t__co_ function(body){\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif(body.velocity &gt_sm_ 10){\n_lt_/p_gt_\n\n_lt_p_gt_\n\t//Remove joints/Crash etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-25T12:34:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI can simply create an array of distances between bodies right after running and then in each frame check if the distance has changed to much - that means the force also must be to high to keep the object in one piece_co_ I will do it as quickly as possible _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-25T12:38:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBtw do you like my idea of creating something I call _qt_rigid joint_qt_ (line 206 in code)? It combines 3 hinge joints to keep the objects stable in the same position and direction.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-01-25T12:39:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just read what I wrote and it made no sense to me_co_ so - old me was silly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif it is about collisions and force during a collision checking the velocity will be the best (IMO). if it is about _qt_going too fast_qt__co_ then you can track the variables changed by the keyboard events.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-01-25T12:40:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_160835_qt_ data-ipsquote-contentid_eq__qt_27607_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485347914_qt_ data-ipsquote-userid_eq__qt_24961_qt_ data-ipsquote-username_eq__qt_wo997_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tJust now_co_ wo997 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBtw do you like my idea of creating something I call _qt_rigid joint_qt_ (line 206 in code)? It combines 3 hinge joints to keep the objects stable in the same position and direction.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tyes I do. that_t_s only in case you need the motor. Otherwise_co_ couldn_t_t you use a compound impostor?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-25T12:42:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_160837_qt_ data-ipsquote-contentid_eq__qt_27607_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485348007_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyes I do. that_t_s only in case you need the motor. Otherwise_co_ couldn_t_t you use a compound impostor?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ I think I should_co_ but it_t_s to much for me for now_co_ I will finish some basics first.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-25T12:51:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ Just a quick question_co_ how do I acces each of the joints separatelly?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried _joints[0] but I can_t_t just type forEach_co_ what else should go here? And I think it may be hard to use ID if I remove them_co_ disabling would be a better option_co_ do you see the point?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-01-25T12:55:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou need to keep a reference to your created joints_co_ this would be the easiest.\n_lt_/p_gt_\n\n_lt_p_gt_\n\timpostors and joints don_t_t have IDs_co_ they are independent objects that can be used however the developer wishes. So_co_ when creating a joint_co_ keep it referenced in an array / object of your choice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\thaving said that - those are javascript objects. you can add your own ID_co_ or even tag them using Babylon_t_s tagging system.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-25T13:06:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ Just imagine how my face looked when it finally worked_co_ hahahahaha _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-25T13:27:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve got some progress_co_ press space when flying to crash\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#11OMIX%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#11OMIX#21_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wo997","Date":"2017-01-26T22:07:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12304_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/_qt_ rel_eq__qt__qt__gt_@iiceman_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Try bumping into the wall or a _qt_house_qt_ with high speed. I think the final effect is pretty ok. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Am I the first who made crashing in Babylon.js? Sorry if you take it as spam.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#11OMIX%2322_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#11OMIX#22_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]