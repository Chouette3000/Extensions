[{"Owner":"Vousk-prod.","Date":"2014-04-22T00:05:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello you_co__lt_br_gt__lt_br_gt_When my WebGL canvas is in the middle of a long HTML page_co_ the touch events which rotate the camera also scroll the HTML page._lt_br_gt__lt_br_gt_I know the CSS command _qt_touch-action_dd_ non_qt_ applied on canvas should prevent this behaviour_co_ but this line has no effect in the mobile browsers I tested (android default browser_co_ Firefox_co_ Chrome beta)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you know how to prevent the page from scrolling when user touches the canvas (but still rotating the camera) ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ericjbasti","Date":"2014-04-22T00:33:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You_t_ll want to look into using this event.preventDefault() on your touch events. This will cancel the default behavior. _lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/event.preventDefault_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/event.preventDefault_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-04-22T10:42:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_body_lt_/p_gt__lt_p_gt_{_lt_/p_gt__lt_p_gt_    position_dd_fixed_sm__lt_/p_gt__lt_p_gt_}_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_can solve your problem._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-23T00:00:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If you are using Hand.js_co_ it will preventDefault for you freely_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-04-23T07:16:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m currently using Hand.js_co_ but since event handling is done inside babylon.js I don_t_t know how to preventDefault behaviour. _lt_/p_gt__lt_p_gt_Do you have an example I can follow ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T07:30:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I expect that you remember the answer you posted _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/5023-problem-with-webgl-compatibility-check-and-touch-events-capture/?p_eq_34315_qt__gt_http_dd_//www.html5gamedevs.com/topic/5023-problem-with-webgl-compatibility-check-and-touch-events-capture/?p_eq_34315_lt_/a_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_. Otherwise I don_t_t have an answer for you_co_ sorry. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-04-23T09:39:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ I remember my answer _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_But I don_t_t get the link beetween both topic _dd_\\_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T10:15:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It was just to be sure that you called hand.js before calling babylon.js and not the opposite way._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-05-01T00:30:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Up_co_ please._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Knowing that I_t_m using a standard ArcRotateCamera and my code to attach control is simply _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_orbitalCamera.attachControl(canvas_co_ true)_sm__lt_/pre_gt__lt_p_gt_(_lt_strong_gt_true _lt_/strong_gt_option is to be able to scroll the website with the mousewheel)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_how can I use preventDefault method to prevent web page scrolling while manipulating something in the canvas_co_ but still maintaining the ability to scroll the web page when user swipes his finger outside the canvas ?_lt_/p_gt__lt_p_gt_(for now_co_ when user rotates the camera with touch events_co_ the whole web page is scrolling up and down at the same time_co_ not very convenient...)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can I do this simply there_co_ or do I need to change some code in ArcRotateCamera or somewhere else ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-01T00:36:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you then use _lt_span_gt_orbitalCamera_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_attachControl_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_canvas_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_false means that the canvas won_t_t transmit to window events handle by the camera but only INSIDE the canvas_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-05-01T00:56:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ thanks for your quick answer._lt_/p_gt__lt_p_gt_My problem is that if I put _lt_strong_gt_false_lt_/strong_gt_ the page scrolling is not possible anymore with the mouse wheel_co_ even when the mouse is outside the canvas..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-01T01:40:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_arg.. I see this is because the wheel is attached on the window _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll fix that for the next version but right now you can just edit arcrotatecamera.js and change the addEventListener from window to canvas_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-05-01T13:21:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Great ! Thank you. _lt_/p_gt__lt_p_gt_If I modify something in arcRotateCamera_co_ I then just have to include the modified .js file right after including babylon.js to have the changes taken in account ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-01T16:20:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-05-02T12:14:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry_co_ I_t_m pretty new to html5 and javascript concepts_co_ I_t_m certainly missing some obvious things but when I do _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_script src_eq__qt_hand.minified-1.3.4.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_babylon.1.10.0.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_babylon.arcRotateCamera.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/pre_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_(...)BABYLON.SceneLoader.Load(objectPath_co_ babylonObjectName_co_ engine_co_ function (scene) {scene.executeWhenReady( function () {(...)   var orbitalCamera _eq_ new BABYLON.ArcRotateCamera(_qt_CameraOrbit_qt__co_ (Math.PI * cam_startRoll / 180)_co_ (Math.PI * cam_startPitch / 180)_co_ 8_co_ targetCam_co_ scene)_sm_   orbitalCamera.attachControl(canvas_co_ false)_sm__lt_/pre_gt__lt_p_gt_I get _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_TypeError_dd_ this.getEngine is not a function - babylon.arcRotateCamera.js_dd_83_lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Concerned lines in arcRotateCamera _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ArcRotateCamera.prototype.attachControl _eq_ function (element_co_ noPreventDefault) {            var _this _eq_ this_sm_            var previousPosition_sm_            var pointerId_sm_            if (this._attachedElement) {                return_sm_            }            this._attachedElement _eq_ element_sm_line 83     var engine _eq_ this.getEngine()_sm_(...)_lt_/pre_gt__lt_p_gt_What is the problem ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-02T16:21:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I can suggest you to create a arcRorateCamera2 to get rid of this problem _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-05-02T17:08:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried to do what you suggest _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I replaced each occurrence of ArcRotateCamera by ArcRotateCamera2 in a babylon.arcRotateCamera2.js._lt_/p_gt__lt_p_gt_I included this new file in HTML and instanciated my orbital camera with _lt_span_gt_new_lt_/span_gt__lt_span_gt_ BABYLON_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_ArcRotateCamera2_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_...)_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_but exact same error in console..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It would be interesting for me to manage to solve this (for my own understanding of javascript behaviours)_co_ but I have many other things to do so for now I think I will simply wait for the next babylon release containing your fix._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-02T17:56:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could you link me a site with you code on it? I will find out what is going wrong_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-05-16T23:18:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m now using BJS 1.11_co_ where wheel event is attached to element and not to window anymore in arcRotateCamera_co_ but there still are problems _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Little recap _dd__lt_/p_gt__lt_ul_gt__lt_li_gt__lt_span_gt_ orbitalCamera_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_attachControl_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_canvas_lt_/span_gt__lt_span_gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_strong_gt__lt_span_gt_false_lt_/span_gt__lt_/strong_gt__lt_span_gt_)_sm__lt_/span_gt__lt_/li_gt__lt_/ul_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_- on PC _dd_ interactions inside canvas are correct (we can rotate with mouse drag and zoom with mouse wheel) but _lt_strong_gt_mouse wheel does not scroll html page_lt_/strong_gt_ (neither inside nor outside canvas) and _lt_strong_gt_wheel outside canvas also zoom the camera_lt_/strong_gt__lt_/p_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_- on touch devices _dd_ _lt_strong_gt_everything is ok_lt_/strong_gt__co_ we can scroll html page with swipes outside the canvas and rotate camera with swipes inside the canvas (without scrolling html page)_lt_/p_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_( _lt_a href_eq__qt_http_dd_//hapticmedia.fr/demo/3d/test_scroll/attach_false.html_qt_ rel_eq__qt_external nofollow_qt__gt_test scene_lt_/a_gt_ with attachControl set to false )_lt_/p_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_ _lt_/p_gt__lt_ul_gt__lt_li_gt__lt_span_gt_ orbitalCamera_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_attachControl_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_canvas_lt_/span_gt__lt_span_gt__co__lt_/span_gt__lt_span_gt_ _lt_strong_gt_true_lt_/strong_gt__lt_/span_gt__lt_span_gt_)_sm__lt_/span_gt__lt_/li_gt__lt_/ul_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_- on PC _dd_ interactions inside canvas are correct (we can rotate with mouse drag and zoom with mouse wheel) and mouse wheel outside canvas scrolls the html page_co_ but _lt_strong_gt_mouse wheel outside canvas also zoom the camera_lt_/strong_gt__lt_/p_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_- on touch devices _dd_ swipes outside canvas scroll the html page_co_ _lt_strong_gt_swipes inside canvas also scroll html page_lt_/strong_gt_ and _lt_strong_gt_rotate camera on randomly wrong axes_lt_/strong_gt_ (in fact_co_ on vertical swipes sometimes the way the camera rotates is ok_co_ sometimes it_t_s inverted_co_ and on horizontal swipes it seems that there is a conflict as if the camera wanted to turn simultaneously both ways_co_ resulting in not rolling the scene at all or very little_co_ in one or other way randomly)_lt_/p_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_margin-left_dd_40px_sm__qt__gt_( _lt_a href_eq__qt_http_dd_//hapticmedia.fr/demo/3d/test_scroll/attach_true.html_qt_ rel_eq__qt_external nofollow_qt__gt_test scene_lt_/a_gt_ with attachControl set to true)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-05-17T13:45:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_(I know that to prevent zooming I can specifiy camera_t_s lower and upper radius limits_co_ but I need to be able to zoom inside canvas_co_ and also this wouldn_t_t fix the fact that swipes to rotate camera on touch devices also scroll html page)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-17T16:08:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_did you try with babylonjs 1.12beta?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-05-17T18:39:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve just tried... and guess what... it WORKS !!!!!_lt_/p_gt__lt_p_gt_Many thanks_co_ you_t_re the best !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Thierry Mil","Date":"2017-07-14T13:07:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_36360_qt_ data-ipsquote-contentid_eq__qt_5839_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1398904567_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 01/05/2014 at 2_dd_36 AM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyou then use _lt_span_gt_orbitalCamera_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_attachControl_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_canvas_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_sm__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t--&gt_sm_ I add this Problem with my UniversalCamera _dd_ The arrows keys moved both_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t- the 3D Camera forward in my 3D scene (in may 3D canvs)  (good)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t- But also the html panel up and down_co_ thus the 3D-canves moved up ans down (bad).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAnd_co_as you said I changed this line _dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t  _lt_span_gt_orbitalCamera_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_attachControl_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_canvas_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_sm__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_to_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_orbitalCamera_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_attachControl_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_canvas_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_36360_qt_ data-ipsquote-contentid_eq__qt_5839_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1398904567_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t\t\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t\t\tOn 01/05/2014 at 2_dd_36 AM_co_ Deltakosh said_dd_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\tyou then use _lt_span_gt_orbitalCamera_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_attachControl_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_canvas_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_sm__lt_/span_gt_\n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\t \n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\t_lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_false means that the canvas won_t_t transmit to window events handle by the camera but only INSIDE the canvas_lt_/span_gt_\n\t\t\t\t_lt_/p_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/blockquote_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_sm__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_strong_gt_And now When I have the focus on my 3D-canvas_co_ the arrows keys does not move the panel html-up or down anymore. _lt_/strong_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis is wonderfull !\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTanks for the tip !\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tT\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 01/05/2014 at 2_dd_36 AM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_false means that the canvas won_t_t transmit to window events handle by the camera but only INSIDE the canvas_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]