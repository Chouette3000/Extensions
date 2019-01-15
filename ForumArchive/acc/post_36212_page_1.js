[{"Owner":"Manos","Date":"2018-03-08T11:33:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbabylon newbie here _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_. So I have created a simple scene using WebVRFreeCamera and testing it with WebVR chrome plugin. Is there someway to emulate the touch controllers??\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-08T12:56:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30639-manos/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30639_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30639-manos/_qt_ rel_eq__qt__qt__gt_@Manos_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNice to have you around _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course_co_ the controllers are already integrated in the system. If you use the VR-Helper you will have them automatically integrated in your scene (including transportation control and a lot of other nice features). You can read about the experience helper here - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/webvr_helper_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/webvr_helper_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have any questions_co_ please dont hesitate to ask\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MichaelD","Date":"2018-03-09T09:06:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think what he is asking (and would like to know my self as well) is how can we emulate the controller events without actually having any physical controllers or VR-Set (if possible).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-09T10:54:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ I see _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf this is the case - it will be hard to emulate those controllers. They are a part of the Gamepad API_co_ and you will need to find a proper emulator that fits the newer extensions API (which also has the device pose_co_ a main component in the vr controllers). I found this in a quick search - _lt_a href_eq__qt_http_dd_//greggman.github.io/hft-gamepad-api/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//greggman.github.io/hft-gamepad-api/_lt_/a_gt_ _co_ but this is more for the regular gamepads. The rest of the API will need to be emulated as well . The API is described here - _lt_a href_eq__qt_https_dd_//w3c.github.io/gamepad/extensions.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//w3c.github.io/gamepad/extensions.html_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Manos","Date":"2018-03-14T10:33:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_207469_qt_ data-ipsquote-contentid_eq__qt_36212_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1520513803_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 3/8/2018 at 2_dd_56 PM_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30639-manos/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30639_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30639-manos/_qt_ rel_eq__qt__qt__gt_@Manos_lt_/a_gt__co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tNice to have you around _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tOf course_co_ the controllers are already integrated in the system. If you use the VR-Helper you will have them automatically integrated in your scene (including transportation control and a lot of other nice features). You can read about the experience helper here - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/webvr_helper_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/webvr_helper_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you have any questions_co_ please dont hesitate to ask\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso I have been playing with the VR-Helper and I_t_m trying to catch the event of gazing on a mesh. Works fine when I gaze to any mesh but there is an error when I try to insert the _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_onSelectedMeshUnselected event. This is the code_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var VRHelper _eq_ scene.createDefaultVRExperience()_sm_\nVRHelper.enableInteractions()_sm_\n\nVRHelper.onNewMeshSelected.add((mesh)_eq_&gt_sm_{\n   console.log(_t_gazed_t_)_sm_\n})_sm_\n\nVRHelper.onSelectedMeshUnselected.add((mesh) _eq_&gt_sm_ {\n   console.log(_t_not gazed_t_)_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWhat am I missing here?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]