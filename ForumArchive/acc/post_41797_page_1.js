[{"Owner":"unintellisense","Date":"2018-12-10T21:04:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I had a couple questions about the ScrollViewer GUI component.\n_lt_/p_gt_\n\n_lt_ol_gt_\n\t_lt_li_gt_\n\t\tIs it possible from code to set the vertical or horizontal bar value_co_ say based on some event (in my case_co_ new text being added to a TextBlock inside the ScrollViewer)? For example_co_ I may want to set the vertical scrollbar to the bottom when new text is appended to the end.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tI notice that if a scrollViewer is set to the bottom of content that is larger than the scrollViewer_co_ if new content is added_co_ it doesn_t_t seem to update properly.\n\t\t_lt_ol_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tA playground probably demos this best_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#3EF49E%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#3EF49E#11_lt_/a_gt_ After loading the scene_co_ scroll the ScrollViewer to the bottom before 5 seconds is up and the setTimeout events start firing to update the TextBlock inside the scrollviewer. Until you manually scroll up and down again_co_ the new content isn_t_t shown.\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ol_gt_\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n_lt_p_gt_\n\tI was able to solve the first item in my own fork of the ScrollViewer_co_ but for the second_co_ I had issues unless I used delayed events (via setTImeout) to alter the scrollbar values_co_ which I suspect was because without the delay the new size of the TextBlock wasn_t_t calculated or something to that effect. using textBlock.onTextChangedObservable still seemed to be too early (I tried other variations which I don_t_t recall now).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks as always for this wonderful engine!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-12-10T21:14:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello please use our new forum_dd_ forum.babylonjs.com _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]