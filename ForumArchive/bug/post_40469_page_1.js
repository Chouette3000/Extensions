[{"Owner":"phaselock","Date":"2018-10-06T04:30:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ my codes were working fine yesterday_co_ this morning something went awry with my pointer observables. Dug a little into it and found similar reproducible results in _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/interactions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/interactions_lt_/a_gt_ . The playground example (_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0XYMA9%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0XYMA9#1_lt_/a_gt_) is working fine for the stable version_co_ when I switch to latest version_co_ clicking on the sphere or plane no longer triggers the pointerup event until I doubleclick. Consistent in the console log as well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-10-06T11:29:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes I just saw the same behavior. The camera moves when you move the mouse after clicking on the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#EEUVTY%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#EEUVTY#11_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ssaket","Date":"2018-10-06T11:38:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyeah... this got introduced yesterday when we were trying to resolve - \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed622469980_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/40456-scene-event-fired-twice/?tab_eq_comments&amp_sm_do_eq_embed&amp_sm_comment_eq_230672&amp_sm_embedComment_eq_230672&amp_sm_embedDo_eq_findComment#comment-230672_qt_ style_eq__qt_height_dd_272px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s because introduction of this new variable -\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/9cc8c3e7a3a4c3e4d54f07a853acf6ca05ff1023#r30796147_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/9cc8c3e7a3a4c3e4d54f07a853acf6ca05ff1023#r30796147_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill make a new PR after testing thoroughly _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Meanwhile happy weekend ! My brain_t_s bursting out ! The pointer events are too complicated _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-06T14:00:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy bad! Will be fix in a couple of minutes!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-06T14:21:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tShould be good now!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-10-06T17:19:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ it_t_s good.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2018-10-08T00:34:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks_co_ marking thread as solved.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2018-10-09T19:51:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ Could you verify that -&gt_sm_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6K2WPZ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#6K2WPZ_lt_/a_gt_ When I use pointer down event and until i keep that_co_ then i move my mouse to other location and then pointer up event is not fired.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-10-09T20:04:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23452-tomaszfurca/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23452_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23452-tomaszfurca/_qt_ rel_eq__qt__qt__gt_@TomaszFurca_lt_/a_gt__lt_br /_gt_\n\tLooks like the pointerUp event is _t_counted_t_ as a pointerMove.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&gt_sm_ Observers still work_co_ only scene.onPointerUp seems to be affected._lt_br /_gt_\n\t&gt_sm_ clickInfo.ignore is always true. (should be false for onPointerUp..) _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#UM43F8%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#UM43F8#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_br /_gt_\n\tI have to run so i_t_ll tag this for you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene -&gt_sm_ attachControl -&gt_sm_  _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__initClickEvent -&gt_sm_ always sets _qt_clickInfo.ignore _eq_ true_qt_ before callback is called._lt_br /_gt_\n\tSee line 177 -&gt_sm_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#UM43F8%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#UM43F8#5_lt_/a_gt__lt_br /_gt_\n\t( commented it out_co_ and onPointerUp works again )_lt_br /_gt_\n\t_lt_br /_gt_\n\tIs there a reason for that to be there`? _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-09T22:43:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes this is still the same issue I try to fix since ages _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Hopefully it should be good now on the latest nightly_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2018-10-11T03:37:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDunno what was done_co_ but I_t_m now getting pointerup events firing twice in my app. Is there anything I should add into my codes with the new changes ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2018-10-11T06:29:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok_co_ this is a weird bug....finally got the repro. _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#0XYMA9%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#0XYMA9#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOpen the console and play with this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta) click in the PG canvas_co_ console should throw 2 counts of pointer up events.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tb) Comment out camera.attachControl FOR the arc rotate camera_co_ click run_co_ click in canvas_co_ console now throws 1 count of pointer up event.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tc) Comment out var camera _eq_ new BABYLON.ArcRotateCamera..._co_ uncomment the 2 lines on freecamera_co_ click run_co_ click in canvas_co_ console throws 1 count of pointer up event.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ it would seem like attach control for arc rotate camera is the bug....weird right ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-11T15:17:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWeird! I_t_m checking right now\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-11T15:37:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk will be fixed by next commit!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"QuintusHegie","Date":"2018-10-11T19:33:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFYI_lt_br /_gt_\n\tPlayground http_dd_//www.babylonjs-playground.com/#7RH606 from https_dd_//doc.babylonjs.com/how_to/gui probably has same error._lt_br /_gt_\n\tWhen you click the button it doesn_t_t count (call the onPointerClickObservable).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2018-10-18T11:09:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tlooks good for me now_co_ marking as solved. Thanks_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-11-06T16:17:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ I think the bug is still around. Again _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#C245A1%230_qt_ rel_eq__qt_external nofollow_qt__gt_here_co_ line 71_co_ never call_lt_/a_gt_. Only with latest version\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-06T16:47:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyep good catch..I missed that one _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Will be in next commit_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]