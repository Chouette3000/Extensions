[{"Owner":"AndyBeaulieu","Date":"2013-12-11T15:04:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello! I just tried a Babylon demo under Windows 7 with IE 11 and got an error _t_MSGesture_t_ is undefined here on line 3_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this._onGestureStart_eq_function(e){    if(!that._MSGestureHandler){        that._MSGestureHandler_eq_new MSGesture()_sm__lt_/pre_gt__lt_p_gt_It looks like the MSGesture object requires Windows 8 according to this - _lt_a href_eq__qt_http_dd_//msdn.microsoft.com/en-us/library/ie/hh968249(v_eq_vs.85).aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//msdn.microsoft.com/en-us/library/ie/hh968249(v_eq_vs.85).aspx_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Other than that_co_ things seemed to render and work OK. Any chance of official support for IE11 on Win7?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt__lt_p_gt_-Andy_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-12-11T15:19:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here is an answer to your question_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//our.componentone.com/groups/topic/script5009-msgesture-is-undefined/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//our.componentone.com/groups/topic/script5009-msgesture-is-undefined/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-12-11T16:14:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Next version will fix the problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-12-11T16:22:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_New version is online _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AndyBeaulieu","Date":"2013-12-11T17:05:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow that was fast_co_ thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The update fixed the mouse input problem in IE11 on Windows 7._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But for some reason the addition of _qt_use strict_qt_ in babylon.js caused issues with my project (BABYLON is undefined error)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I can dig around a little more on this_co_ but was the addition of _qt_use strict_qt_ purposeful here?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-12-11T18:20:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The aim of use strict is to guarantee strictness of our code. But I will remove it for the next version _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-12-11T18:38:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I re-uploaded a new babylon.1.7.2.js without _qt_use strict_qt__sm__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ariel Yust","Date":"2013-12-12T13:00:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I confirm that MSGesture Error doesn_t_t appear anymore._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_On a sad note_lt_/strong_gt_ -&gt_sm_ I would like to point out that clicking doesn_t_t work._lt_/p_gt__lt_p_gt_moving mouse works_co_ but clicking doesn_t_t get a reaction in the canvas._lt_/p_gt__lt_p_gt_outside the canvas I receive clicks without a problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Issue happends only using_dd_ Win7 IE11 and Babylon.js 1.7.2_lt_/p_gt__lt_p_gt_on Chrome everything_t_s safe and sound._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_also chrome works a lot faster now as well as in full screen_co_ more speed is welcome  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ alt_eq__qt_^_^_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ariel Yust","Date":"2013-12-12T13:11:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Never mind the clicking problem_co_ I just found the reason_co_ the fps was soo low in IE11 that it wouldn_t_t register my clicks_co_ when I cleared the screen the fps was a bit better and clicks worked_co_ my bad._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_wierd thing anyways._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]