[{"Owner":"foumfo","Date":"2018-05-11T18:40:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey everyone I_t_m back!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a mesh that rotates around the Y axis whenever I click and drag along the screen_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var currRotationY _eq_ 0_co_ currPositionX _eq_ 0_co_ clicked _eq_ false_co_ originalRotation_sm_\n\ncanvas.addEventListener(_qt_pointerdown_qt__co_ function(evt) {\n\tcurrPositionX _eq_ evt.clientX_sm_\n\tcurrRotationY _eq_ player.mesh.rotation.y_sm_\n\toriginalRotation _eq_ player.axis.rads_sm_\n\tclicked _eq_ true_sm_\n})_sm_\n\ncanvas.addEventListener(_qt_pointermove_qt__co_ function(evt) {\n\tif (!clicked) return_sm_\n//player.mesh is my mesh\n\tplayer.mesh.rotation.y _eq_ currRotationY + (evt.clientX - currPositionX) / 500.0_sm_\n})_sm_\n\ncanvas.addEventListener(_qt_pointerup_qt__co_ function(evt) {\n\tclicked _eq_ false_sm_\n})_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhenever my mesh completes a 360deg turn_co_ its rotation.y value continues to grow beyond Math.PI*2.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like it to be reset to 0 whenever that happens.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-11T19:31:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tplayer.mesh.rotation.y %_eq_ 2*Math.PI\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"foumfo","Date":"2018-05-11T19:36:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214674_qt_ data-ipsquote-contentid_eq__qt_37583_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526067084_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 minutes ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tplayer.mesh.rotation.y %_eq__lt_span_gt_﻿_lt_/span_gt_ 2*Math.PI\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\twhere would this line of code fit exactly?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-11T20:17:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAfter you set the value. After \n_lt_/p_gt_\n\n_lt_p_gt_\n\tplayer.m........./ 500_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"foumfo","Date":"2018-05-11T21:47:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214683_qt_ data-ipsquote-contentid_eq__qt_37583_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526069873_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAfter you set the value. After \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tplayer.m........./ 500_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t player.mesh.rotation.y _eq_ currRotationY + (evt.clientX - currPositionX) / 500.0_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplayer.mesh.rotation.y %_eq__lt_span_gt_﻿_lt_/span_gt_ 2*Math.PI _sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tlike this right?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-12T09:42:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHopefully you have tried it out by now and it works. If not add a playground and I will have a look.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"foumfo","Date":"2018-05-12T11:56:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214722_qt_ data-ipsquote-contentid_eq__qt_37583_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526118177_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHopefully you have tried it out by now and it works. If not add a playground and I will have a look.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt works great thanks John! It was so simple. Everything I tried was much more complex.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd another thing_dd_ when the mesh rotates anticlockwise_co_ rotation.y_t_s value get_t_s reversed negative values. For example Math.PI/2*3 is -Math.PI/2. Essentially it_t_s the same thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould it be possible for the rotation.y_t_s value in this case to not be reversed?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-12T12:15:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat happens when you try it anti-clockwise?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"foumfo","Date":"2018-05-12T12:17:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214732_qt_ data-ipsquote-contentid_eq__qt_37583_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526127320_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tJust now_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhat happens when you try it anti-clockwise?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tyou mean rotate it anti-clockwise right? (Or dragging the pointer to the left)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplayer.mesh.rotation.y get_t_s negative values like -1.1\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-12T12:22:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI mean does everything work as you want it to without any more code changes? One of the best ways to answer the question\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214729_qt_ data-ipsquote-contentid_eq__qt_37583_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526126207_qt_ data-ipsquote-userid_eq__qt_30559_qt_ data-ipsquote-username_eq__qt_foumfo_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t22 minutes ago_co_ foumfo said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWould it be possible for the rotation.y_t_s value in this case to not be reversed? _lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tis to try it out and see what happens.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf what you want to happen does not happen and you do not know why create a simple playground and ask for help. If what you want to happen does happen Hurray!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"foumfo","Date":"2018-05-12T12:46:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#LFMEFD_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#LFMEFD_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you rotate it anti-clockwise you_t_ll see that it gets negative values\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-12T14:01:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tand if you tried it as is without the if statements it still rotates as expected _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#LFMEFD%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#LFMEFD#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214736_qt_ data-ipsquote-contentid_eq__qt_37583_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526129168_qt_ data-ipsquote-userid_eq__qt_30559_qt_ data-ipsquote-username_eq__qt_foumfo_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ foumfo said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tif you rotate it anti-clockwise you_t_ll see that it gets negative values\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tand the problem is?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"foumfo","Date":"2018-05-12T14:13:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnot a problem_co_ it_t_s just that when it rotates anti-clockwise I_t_d like the value to be something like that_dd_ -Math.PI/2 is equal to 3*Math.PI/2.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately I can_t_t explain it any other way\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-12T15:01:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh I see you do not like negative numbers. What you are asking for is for the angle to be such that 0 &lt_sm__eq_ angle &lt_sm_ 2 * Math.PI rather than -2*Math.PI &lt_sm_ angle &lt_sm_ 2*Math.PI OK\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#LFMEFD%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#LFMEFD#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"foumfo","Date":"2018-05-12T18:34:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214746_qt_ data-ipsquote-contentid_eq__qt_37583_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526137262_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOh I see you do not like negative numbers. What you are asking for is for the angle to be such that 0 &lt_sm__eq_ angle &lt_sm_ 2 * Math.PI rather than -2*Math.PI &lt_sm_ angle &lt_sm_ 2*Math.PI OK\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#LFMEFD%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#LFMEFD#2_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat did it! All it took was just 2 lines of code. It baffles me just how some complicated problems have such simple solutions\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]