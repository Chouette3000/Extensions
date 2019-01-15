[{"Owner":"thrice","Date":"2017-11-04T01:19:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tin 3.5 scene was rending at 60 fps_co_  now I_t_m stuck around 45 fps as soon as I upgraded to 3.7\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEven worse_co_ load time of the scene increased from 28ish seconds to 75 seconds.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy only hint is a cryptic webgl warning being thrown \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWebGL_dd_ INVALID_ENUM_dd_ getQuery_dd_ invalid parameter name\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut even then_co_ I doubt it_t_s responsible for the 15 fps drop (maybe the initial loading increase_co_ IDK)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-- side issue\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdditionally_co_ I tried looking at drawCalls_co_ as that was my KPI in the past for figuring out why frame rate was so low_co_ and I am met with an unhelpful _qt_drawCalls is deprecated. Please use SceneInstrumentation class_qt_ warning_co_ and draw calls returning 0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I instantiate the instrumentation_co_ and I still don_t_t see draw calls. I would think having that metric easily discoverable is pretty important?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-11-04T09:25:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFirst of all... I get this alot too_co_ because every now and then I grab the latest PREVIEW release to make sure the toolkit is compatible with the UP AND COMING changes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith that being said... IT IS A PREVIEW RELEASE... That means some guy (anybody) can really make changes to the codebase and submit a PR... It may compile and get built in to the latest preview .... That does NOT mean everything is all tested and working... If you want TESTED and WORKING code_co_  you gotta stick with the official releases.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso... we are currently in ALPHA so there are gonna be some issues with just grabbing the latest release... you gotta ride it out_co_ check back in a few days_co_ grab again and try rebuild.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you had a version of Babylon.js that is working ... STICK WITH THAT... Use ANOTHER project to test the viability of the current PREVIEW release.. If ok then update your main project babylon.js\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW... We should be going to beta soon_co_ so things will be a little more ironed out in the preview release _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-11-04T10:41:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for reporting.  It is important to know if there are drops in performance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you could give us some detail about your scene or reproduce the issue_co_ that would be very helpful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is where you should now be getting drawCall info_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/0bd16a8b659d71f98c39adf3c1197232d8551830/src/Instrumentation/babylon.sceneInstrumentation.ts#L395_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/0bd16a8b659d71f98c39adf3c1197232d8551830/src/Instrumentation/babylon.sceneInstrumentation.ts#L395_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also use the debug layer to see the number of draw calls.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/debug_layer_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/debug_layer_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-04T13:36:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_193947_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1509787536_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFirst of all... I get this alot too_co_ because every now and then I grab the latest PREVIEW release to make sure the toolkit is compatible with the UP AND COMING changes.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWith that being said... IT IS A PREVIEW RELEASE... That means some guy (anybody) can really make changes to the codebase and submit a PR... It may compile and get built in to the latest preview .... That does NOT mean everything is all tested and working... If you want TESTED and WORKING code_co_  you gotta stick with the official releases.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAlso... we are currently in ALPHA so there are gonna be some issues with just grabbing the latest release... you gotta ride it out_co_ check back in a few days_co_ grab again and try rebuild.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you had a version of Babylon.js that is working ... STICK WITH THAT... Use ANOTHER project to test the viability of the current PREVIEW release.. If ok then update your main project babylon.js\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBTW... We should be going to beta soon_co_ so things will be a little more ironed out in the preview release _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m well aware_co_ I_t_m simply trying to help out and narrow down what could have changed between versions to cause issues in my project locally.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-04T13:37:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_193951_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1509792111_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThanks for reporting.  It is important to know if there are drops in performance.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you could give us some detail about your scene or reproduce the issue_co_ that would be very helpful.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tEdit_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHere is where you should now be getting drawCall info_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/0bd16a8b659d71f98c39adf3c1197232d8551830/src/Instrumentation/babylon.sceneInstrumentation.ts#L395_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/0bd16a8b659d71f98c39adf3c1197232d8551830/src/Instrumentation/babylon.sceneInstrumentation.ts#L395_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou can also use the debug layer to see the number of draw calls.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/debug_layer_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/debug_layer_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAh_co_ thanks for the draw call info. I will look into it further.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-04T13:57:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tTrying to load the debug layer is now throwing _lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fdc726779eb_Screenshot2017-11-0407_56_03.png.91ea1beae89d1a6de5e330e5f4c4e3e3.png_qt_ data-fileid_eq__qt_15542_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15542_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fdc7270651a_Screenshot2017-11-0407_56_03.thumb.png.d0500e4e1d7e30459d3c9660cca00fc3.png_qt_ alt_eq__qt_59fdc7270651a_Screenshot2017-11-0407_56_03.thumb.png.d0500e4e1d7e30459d3c9660cca00fc3.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-11-04T14:50:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_193960_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1509802606_qt_ data-ipsquote-userid_eq__qt_24959_qt_ data-ipsquote-username_eq__qt_thrice_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ thrice said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_m well aware_co_ I_t_m simply trying to help out and narrow down what could have changed between versions to cause issues in my project locally.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI didn_t_t mean to offend_co_ was just trying to clarify _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-11-04T14:53:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_193962_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1509803851_qt_ data-ipsquote-userid_eq__qt_24959_qt_ data-ipsquote-username_eq__qt_thrice_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t54 minutes ago_co_ thrice said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTrying to load the debug layer is now throwing _lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_15542_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fdc726779eb_Screenshot2017-11-0407_56_03.png.91ea1beae89d1a6de5e330e5f4c4e3e3.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59fdc7270651a_Screenshot2017-11-0407_56_03.thumb.png.d0500e4e1d7e30459d3c9660cca00fc3.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15542_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/59fdc7270651a_Screenshot2017-11-0407_56_03.thumb.png.d0500e4e1d7e30459d3c9660cca00fc3.png_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tUnfortunately_co_ the inspector is currently not working well in IE or Edge.  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-04T16:20:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_193966_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1509807221_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tUnfortunately_co_ the inspector is currently not working well in IE or Edge.  \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m using chromium_co_ app is packaged via electron. So_co_ I can_t_t switch to a diff browser to run it ATM to see if I get different results/debug.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m going to downgrade back to previous version for now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-04T16:21:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_193965_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1509807013_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI didn_t_t mean to offend_co_ was just trying to clarify _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo offense taken _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-06T19:09:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cannot repro the performance issue. The load time increase is also utterly suspicious. I_t_m really interested to understand this because it is too much for a simple bug\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFurthermore_co_ I do not repro the getQuery issue. Can you try outside of Electron? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you profile as well to help me understand where the issue is?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-10T00:38:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Delta!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try and dig into it again this weekend. Unfortunately I can_t_t just run it without electron ATM because of the way I am loading assets (via the node process) - Ya I wasn_t_t expecting you to be able to reproduce the getQuery issue was more hoping someone knew what it meant_co_ or possibly what it could allude to in terms of the code itself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will get a profile if I can_t_t figure out what is going on. Honestly the bigger issue is the fact that my go to tool for figuring out what is going on(simply_co_ engine.drawCalls)_co_ has been removed_co_ and I am unable to load any of the new instrumentation stuff currently_co_ so I can_t_t even see if my current draw calls matches bumped version draw calls.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had a similar issue in the past IIRC_co_ which I saw the drawCalls spiking after upgrading_co_ so I was able to determine that a large number of the meshes that I load off screen and disable (for the sake of tooltips/hover states)_co_ were being loaded in at 0_co_0_co_0_co_ which was being covered up_co_ so basically the camera was trying to render hundreds more meshes than it should have been. - The reason I think it may be different this time is the strange webgl error_co_ but IDK. Will try and debug it further when I have time.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-10T16:52:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor pure drawcallm here is a hack_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis.scene.getEngine()._drawCalls will give you the value\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-11-14T17:51:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24959_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/_qt_ rel_eq__qt__qt__gt_@thrice_lt_/a_gt_ the new 3.1 Beta looks good... Check it out if you haven_t_t already _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-11-14T17:57:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ve noticed my scene running slower too_co_ even on 3.1.0 beta.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-11-14T18:56:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_195128_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1510682262_qt_ data-ipsquote-userid_eq__qt_5580_qt_ data-ipsquote-username_eq__qt_agmcleod_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t52 minutes ago_co_ agmcleod said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_ve noticed my scene running slower too_co_ even on 3.1.0 beta.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell some of my scenes have issues with the current 3.1 but performance is NOT one of them. They all run much faster than a few versions ago.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe there was a bug in there for a HOT-SECOND. But my safari builds where running DOG SLOW like 5 - 15 FPS. But now the run at full 60FPS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am getting a bunch of uniforms blocking errors_co_ but I am going to track those down and try post the error.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut all and all_co_ compared to a few versions ago 3.1 beta is great so far... Will get better if we can get these little issues tracked down and sent to _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can run most (actually_co_ all but one_co_ my space shooter) scenes again at full 60FPS on my Mac OSX. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-14T19:03:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5580-agmcleod/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5580_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5580-agmcleod/_qt_ rel_eq__qt__qt__gt_@agmcleod_lt_/a_gt_ can you help me identifying the bottleneck? Can you repro on the PG (using stable vs latest) ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-11-14T19:37:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI found one... This is the scene I made to test shadow baking... On These Later BabylonJS preview release it does seem to be more CPU intensive_co_ especially if I leave the focus of the browser to another window or application_co_ My WHOLE Computer slows down a bit and of course the browser games drop to about 10 - 20 FPS... If I click back and give browser focus... On Chrome and Firefox it speeds back up to 60 FPS... But again seems a bit CPU intensive than before.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere was a version of babylon 3.1 alpha that worked smoothly on all browser for that same scene... I used to show snapshots all at 60 FPS\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyways... I put that scene on my server at_dd_ _lt_a href_eq__qt_http_dd_//mackey.cloud/games/survive/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//mackey.cloud/games/survive/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ ... Can you please take look and see if your can tell whats up... It does list any errors in console... just real slow on safari and a bit CPU intensive on all others and it was not that way before (at least a few version ago_co_ not sure the number)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the raw project files_dd__lt_a href_eq__qt_http_dd_//mackey.cloud/games/survive/survive.zip_qt_ rel_eq__qt_external nofollow_qt__gt_ Export Output Zip_lt_/a_gt_ in case you want to put on server and check out all the files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-11-14T19:45:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ I may have been misunderstanding the core issue. I don_t_t think FPS actually drops_co_ but the scene itself takes longer. It_t_s a physics based scene using cannon.js. The results seem to be the same_co_ but it just runs longer for some reason.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-14T22:53:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tok let me know if you find what is the issue\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-14T22:55:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ I do not see something obvious on the perf side of your demo\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWorks pretty well here\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/image.png.b498a9588b1d0bcab06efebf61e0243f.png_qt_ data-fileid_eq__qt_15665_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15665_qt_ data-unique_eq__qt_pxglwdm63_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/image.thumb.png.5fb5d077285b3e178653711e55fb35cb.png_qt_ alt_eq__qt_image.png_qt__gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you run a profile session on your device as well?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-11-14T23:46:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_195173_qt_ data-ipsquote-contentid_eq__qt_33800_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1510700109_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t50 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ I do not see something obvious on the perf side of your demo\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWorks pretty well here\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_15665_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/image.png.b498a9588b1d0bcab06efebf61e0243f.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_image.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15665_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/image.thumb.png.5fb5d077285b3e178653711e55fb35cb.png_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tCan you run a profile session on your device as well?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI checked on windows too... Works pretty good.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt must just be with the Mac Version... Can you try it on Mac ???\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-15T00:12:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do not have a Mac. I have several PC though and none has an issue. Did you have the same on firefox as well?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you run the profiler on your Mac?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-11-15T15:54:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24959_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24959-thrice/_qt_ rel_eq__qt__qt__gt_@thrice_lt_/a_gt_ ... Did you ever make any head way... I have noticed the same issues on a scene that I had where I use cannon physics for everything. Kinda real sluggish not to mention the collisions... Let me know if you make any headway here_co_ I will do the same _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-11-30T01:23:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ sorry for slow response_co_ just saw you tagged me. - I_t_m just finally digging back into this. - I can tell you though that I don_t_t use cannon for anything_co_ so not sure thats the culprit. Unless it somehow is autoloaded/started in newer release or something? (I do see when I yarn install the latest version that it adds cannon as a dependency by default).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I just updated to latest release_co_ and scene instrumentation now working for me (yay) - good news and bad_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGOOD news is the issue regarding the scene load time seems to be fixed_co_ and it is loading about the same amount of time as my locked version branch.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBAD news is FPS is still sluggish. Upper 40/low 50s -\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve collected some output from various instrumentation calls_co_ was hoping you could take a look and see if you see anything abnormal_co_ because I_t_m not sure exactly what to look for. - Also I did some grouping and counting of other objects in the scene that in my limited experience_co_ have seemed to affect performance the most (and I_t_ve optimized scene to do many_co_ i.e. freezingWorldMatrix and disabling meshes that are not currently in use_co_ of which I have many_co_ because my project is a card game and I render a master list of all the relevant cards off screen for sake of hovers and what not)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_activeMeshesEvaluationTimeCounter\n{\n  _qt__startMonitoringTime_qt__dd_ 48000.035_co_\n  _qt__min_qt__dd_ 0_co_\n  _qt__max_qt__dd_ 125.875_co_\n  _qt__average_qt__dd_ 1.927268518518444_co_\n  _qt__lastSecAverage_qt__dd_ 1.3325480769225089_co_\n  _qt__current_qt__dd_ 2.6350000000020373_co_\n  _qt__totalValueCount_qt__dd_ 324_co_\n  _qt__totalAccumulated_qt__dd_ 624.4349999999758_co_\n  _qt__lastSecAccumulated_qt__dd_ 17.705000000009022_co_\n  _qt__lastSecTime_qt__dd_ 47866.435000000005_co_\n  _qt__lastSecValueCount_qt__dd_ 14\n}\n\nrenderTargetsRenderTimeCounter\n{\n  _qt__startMonitoringTime_qt__dd_ 85556.585_co_\n  _qt__min_qt__dd_ 0_co_\n  _qt__max_qt__dd_ 0_co_\n  _qt__average_qt__dd_ 0_co_\n  _qt__lastSecAverage_qt__dd_ 0_co_\n  _qt__current_qt__dd_ 0_co_\n  _qt__totalValueCount_qt__dd_ 660_co_\n  _qt__totalAccumulated_qt__dd_ 0_co_\n  _qt__lastSecAccumulated_qt__dd_ 0_co_\n  _qt__lastSecTime_qt__dd_ 0_co_\n  _qt__lastSecValueCount_qt__dd_ 660\n}\n\nframeTimeCounter\n{\n  _qt__startMonitoringTime_qt__dd_ 47999.685000000005_co_\n  _qt__min_qt__dd_ 0_co_\n  _qt__max_qt__dd_ 2674.9200000000055_co_\n  _qt__average_qt__dd_ 28.738333333333202_co_\n  _qt__lastSecAverage_qt__dd_ 6.943367346938894_co_\n  _qt__current_qt__dd_ 6.405000000006112_co_\n  _qt__totalValueCount_qt__dd_ 162_co_\n  _qt__totalAccumulated_qt__dd_ 4655.609999999979_co_\n  _qt__lastSecAccumulated_qt__dd_ 229.41500000000087_co_\n  _qt__lastSecTime_qt__dd_ 47396.780000000006_co_\n  _qt__lastSecValueCount_qt__dd_ 31\n}\n\nengine.gpuFrameTimeCounter\n{\n  _qt__startMonitoringTime_qt__dd_ 0_co_\n  _qt__min_qt__dd_ 0_co_\n  _qt__max_qt__dd_ 2800898000_co_\n  _qt__average_qt__dd_ 14517034.810126582_co_\n  _qt__lastSecAverage_qt__dd_ 4680863.636363637_co_\n  _qt__current_qt__dd_ 4774000_co_\n  _qt__totalValueCount_qt__dd_ 316_co_\n  _qt__totalAccumulated_qt__dd_ 4587383000_co_\n  _qt__lastSecAccumulated_qt__dd_ 45263000_co_\n  _qt__lastSecTime_qt__dd_ 85156.96_co_\n  _qt__lastSecValueCount_qt__dd_ 10\n}\n\nengine.shaderCompilationTimeCounter\n{\n  _qt__startMonitoringTime_qt__dd_ 73101.945_co_\n  _qt__min_qt__dd_ 0_co_\n  _qt__max_qt__dd_ 60.06500000000233_co_\n  _qt__average_qt__dd_ 12.432499999999386_co_\n  _qt__lastSecAverage_qt__dd_ 15.997708333332412_co_\n  _qt__current_qt__dd_ 15.690000000002328_co_\n  _qt__totalValueCount_qt__dd_ 36_co_\n  _qt__totalAccumulated_qt__dd_ 447.5699999999779_co_\n  _qt__lastSecAccumulated_qt__dd_ 0_co_\n  _qt__lastSecTime_qt__dd_ 73117.63500000001_co_\n  _qt__lastSecValueCount_qt__dd_ 0\n}\n\n// these lodash methods if you_t_re not familiar with the library_co_ are just calling the properties/methods and grouping by the count of the results\n\n_.groupBy(_.map(play_game.scene.babylon.meshes_co_ _t_isWorldMatrixFrozen_t_))\nObject {false_dd_ Array[430]_co_ true_dd_ Array[1395]}\n\n_.groupBy(_.invokeMap(play_game.scene.babylon.meshes_co_ _t_isEnabled_t_))\nObject {true_dd_ Array[487]_co_ false_dd_ Array[1345]}\n\n_.groupBy(_.map(play_game.scene.babylon.meshes_co_ _t_areNormalsFrozen_t_))\nObject {false_dd_ Array[1263]_co_ undefined_dd_ Array[576]}\n\n_.groupBy(_.map(_.compact(play_game.scene.babylon._activeMeshes.data)_co_ _t_areNormalsFrozen_t_))\nObject {false_dd_ Array[91]_co_ undefined_dd_ Array[143]}\n\nplay_game.scene.babylon._activeMeshes.data.length\n256\n\n_.filter(play_game.scene.babylon._activeMeshes.data_co_ _.isUndefined).length\n23\n// (note_dd_ ^_co_ is this a problem that there are 23 undefined values in _activeMeshes.data?)\n\n_.groupBy(_.invokeMap(_.compact(play_game.scene.babylon._activeMeshes.data)_co_ _t_getClassName_t_))_sm_\nObject {Mesh_dd_ Array[91]_co_ InstancedMesh_dd_ Array[143]}\n\n_.groupBy(_.invokeMap(_.compact(play_game.scene.babylon.meshes)_co_ _t_getClassName_t_))\nObject {Mesh_dd_ Array[1263]_co_ InstancedMesh_dd_ Array[576]}\n\nplay_game.scene.babylon.materials.length\n690\n\nObject {ShaderMaterial_dd_ Array[7]_co_ GradientMaterial_dd_ Array[1]_co_ StandardMaterial_dd_ Array[682]_co_ PBRMaterial_dd_ Array[2]}\n\n_.groupBy(play_game.scene.babylon.materials_co_ _t_isFrozen_t_)\nObject {false_dd_ Array[692]}\n// ^ this freeze / isFrozen on materials option_co_ I_t_ve just recently seen in docs_co_ is this new and or could this be related? Was it auto freezing in the past or something like that?_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]