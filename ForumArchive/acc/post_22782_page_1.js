[{"Owner":"Gwir","Date":"2016-05-25T10:49:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi!\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have a scene with some meshes and a FreeCamera_co_ i interact with meshes using a Leap Motion. The user hands are represented by two cursors (two spheres in the scene). I need to set the cursors position relative to the camera orientation too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt the moment i managed to do it relatively to camera translation_co_ the cursors correctly follow the camera position in the scene. I can_t_t set the correct cursors position if the camera rotates. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_handCursorR.position.x _eq_ (camera._currentTarget.x) + frame.hands[0].palmPosition[0]/motionScaleFactor_sm_\nhandCursorR.position.y _eq_ (camera._currentTarget.y-10) + frame.hands[0].palmPosition[1]/motionScaleFactor_sm_\nhandCursorR.position.z _eq_ (camera._currentTarget.z+10) -frame.hands[0].palmPosition[2]/motionScaleFactor_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-31T22:53:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya Gwir... welcome to the forum!  Wow_co_ I_t_m sorry for slow replies.  Have you had any success_co_ yet?  Any chance you could parent both spheres...TO the camera?  Then when the camera turns_co_ both spheres should remain at the same location in the camera view.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps.  I_t_m thinking on it. (not really a good thing)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m off to research Leap Motion... see what the heck that thing is.  Looks kind of cool.  There_t_s probably a 2D layer/sub-canvas involved_co_ and that needs to be aligned with BJS clientX/Y_co_ and ohh... it might be messy.  Learning... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ welcome.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gwir","Date":"2016-06-01T08:32:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_130727_qt_ data-ipsquote-contentid_eq__qt_22782_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1464735180_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHiya Gwir... welcome to the forum!  Wow_co_ I_t_m sorry for slow replies.  Have you had any success_co_ yet?  Any chance you could parent both spheres...TO the camera?  Then when the camera turns_co_ both spheres should remain at the same location in the camera view.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHope this helps.  I_t_m thinking on it. (not really a good thing)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI_t_m off to research Leap Motion... see what the heck that thing is.  Looks kind of cool.  There_t_s probably a 2D layer/sub-canvas involved_co_ and that needs to be aligned with BJS clientX/Y_co_ and ohh... it might be messy.  Learning... \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAgain_co_ welcome.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tParenting cursors with camera is actually the solution_co_ need to sync mesh movement with camera but i solved some days ago. Thanks anyway for help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]