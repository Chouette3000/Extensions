[{"Owner":"fateriddle","Date":"2018-11-07T10:10:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m coding using babylonjs + reactjs. And I suspect there_t_s memory leak somewhere in the code as stuff gets laggy over time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo what_t_s the 101 list that I should check? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve imported a few assets_co_ then created instance of them_co_ also I_t_m creating new mesh as bullet everytime user click shoot button. _lt_br /_gt_\n\tIn componentWillUnmount_co_ I dispose every asset_co_ and that_t_s all I did. Is there something missing?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-07T16:13:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo you_t_re using React _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe thing to do is to use the F12 memory profiler. Run your app_co_ go to the profiler and capture a snapshot. Then do stuff and go to a state where you think you removed everything then do a second snapshot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can then compare them and see which objects were created and not removed\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]