[{"Owner":"Xetar","Date":"2017-11-19T15:46:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello ! I_t_m working on a game and I need to the GUI extension.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ as needed_co_ I added this line\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t&lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/gui/babylon.gui.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tafter including the babylon.js file_co_ I made run my script but I get this error\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_qt_TypeError_dd_ scene.onPreKeyboardObservable is undefined_qt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAnd\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_qt_Source map error_dd_ request failed with status 404_lt_br /_gt_\n\t\t\tResource URL_dd_ _lt_a href_eq__qt_https_dd_//preview.babylonjs.com/gui/babylon.gui.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//preview.babylonjs.com/gui/babylon.gui.js_lt_/a_gt__lt_br /_gt_\n\t\t\tSource Map URL_dd_ button.js.map_qt_ in the console\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt_t_s been yesterday I was looking for the answer but I did_t_nt find any\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        Please help me_co_ Thanks !\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-11-20T03:36:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\thi.  there_t_s a working version here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/demos/gui/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/demos/gui/_lt_/a_gt__lt_br /_gt_\n\tAre you loading (order of scripts in the html page) babylon.gui.js after babylon.js?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-11-20T13:07:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBe careful to use version 3.0 or 3.1 of BabylonJS\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xetar","Date":"2017-11-20T18:35:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ I included babylon.gui.js after babylon.js file (like this _dd_ )\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t&lt_sm_script src_eq__qt_/Babylonjs/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_br /_gt_\n\t\t\t&lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/gui/babylon.gui.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAnd_co_ Yes I am using Babylonjs 3.0 (It_t_s written on my console)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-20T23:34:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou actually need babylon.js_lt_strong_gt_ 3.1_lt_/strong_gt_ to work with the latest version of GUI\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xetar","Date":"2017-11-21T06:16:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_195882_qt_ data-ipsquote-contentid_eq__qt_34105_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1511220896_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou actually need babylon.js_lt_strong_gt_ 3.1_lt_/strong_gt_ to work with the latest version of GUI\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks_co_ that was the solution !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-21T23:11:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPerfect!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]