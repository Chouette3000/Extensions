[{"Owner":"JLHolmes","Date":"2018-02-11T23:51:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys... need some help here_co_ I_t_m getting this error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbabylon.js?98a3_dd_20 Uncaught TypeError_dd_ Cannot read property _t_globalPosition_t_ of null_lt_br /_gt_\n\t    at Function.t.BindEyePosition (babylon.js?98a3_dd_20)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow... I only get this error after I_t_ve reinitialized the engine a second time on a whole new canvas_co_ while previously shutting down the old instance with engine.dispose(). The scenario that inits the scene is complex enough... and part of another project... so creating a playground would be difficult. (The playground seems to rebuild the whole dom and init anyways).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis appears to be coming from the MaterialHelper class_co_ and the activeCamera variable appears to be null... not sure why_co_ though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny leads on what this might be before I start digging?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JLHolmes","Date":"2018-02-12T05:41:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo I_t_ll answer my own question in case someone else hits this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomewhere in the code_co_ I had used MeshBuilder.CreateSphere()_co_ but I had admitted the last parameter... the scene. It still worked_co_ however... been working for months... UNLESS you happen to re-init the engine without refreshing the page from scratch.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-12T15:37:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]