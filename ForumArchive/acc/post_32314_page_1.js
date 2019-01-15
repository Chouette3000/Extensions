[{"Owner":"unintellisense","Date":"2017-08-11T07:46:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not using ActionManagers or anything like that in a particular scene_co_ but I would like to change the default cursor for my scenes to something else. I found that babylon will set style.cursor back to _qt__qt_ if it doesn_t_t detect a mesh to use the hoverCursor property for.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI changed my fork to instead refer to a defaultCursor property in babylon.scene.ts which defaults to the same empty string that is being used in the _onPointerMove function when it doesn_t_t determine it should set the hoverCursor property for. Is that something that might be interesting to merge in? If so_co_ I_t_ll make a pull request.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for a awesome library as always.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-11T17:27:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah good idea _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ please go ahead with a PR\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unintellisense","Date":"2017-08-12T20:07:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat I don_t_t understand is why when I pull babylon.js master and build (without making any changes to ts files)_co_ the /dist files generated already shows diffs. It looks like it is just placing things into a different order_co_ but do not understand why? I cleaned node_modules from tools/gulp to be on the safe side_co_ but same results.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ here is the PR_co_ thanks _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/2661_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/2661_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-14T15:25:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah this happens to me as well. Seems like it depends on the version of TS you are using\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]