[{"Owner":"Wingnut","Date":"2018-04-29T10:11:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi gang!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was testing fullscreen ADT _lt_strong_gt_._lt_em_gt_background_lt_/em_gt__lt_/strong_gt_ options_co_ and found an _t_oddness_t_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#GL5SIM%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#GL5SIM#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen using left-mouse-drag of pointer/camera_co_ pointer goes in-active over red buttons.  Or maybe I should say... pointer gets _qt_commandeered_qt_.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(LMB-drag the camera_co_ making pointer cross the red buttons)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps GUI buttons should NOT check for onMouseOver IF a mouse button is already depressed (drag in-progress).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSeems ESPECIALLY important when ADT is set !isForeground  (set as backgrounded).  But issue is seen in foreground mode_co_ too.  [_lt_strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#GL5SIM%234_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt__lt_/strong_gt_]\n_lt_/p_gt_\n\n_lt_p_gt_\n\tReally_co_ though_co_ whether ADT isForeground or not_co_ I think _lt_u_gt_nothing_lt_/u_gt_ should interrupt a drag in-progress.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDuring a drag_co_ CSS cursor MIGHT be set as _qt_grabbing hand_qt__co_ perhaps dragging a mesh.  We don_t_t want the drag interrupted when crossing ADT controls_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway... just checking.  Everything might be fine.  Thx for verification/thoughts.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-29T17:11:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe priority capture is expected as ADT is supposed to be foreground _co_it captures the input before the scene is in.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor a foreground ADT you are right this is a bug (And I literally have only a few hours to fix it before we ship 3.2...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4236_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4236_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-04-29T17:27:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell good luck_co_ and thx for the reply (on a Sunday_co_ even). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI always use rubber dead-lines... which makes them live-lines_co_ which makes them very flexible. (less stress)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Wingy hands DK a 100 meter roll of live-line). _lt_span class_eq__qt_ipsEmoji_qt__gt_🤠_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood luck with the shipping.  (I wonder where it is shipping-to_co_ and via what carrier)  _lt_span_gt__lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-29T19:22:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks! I_t_ve found a fix\n_lt_/p_gt_\n\n_lt_p_gt_\n\twill be in next commit and even better in official 3.2 _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]