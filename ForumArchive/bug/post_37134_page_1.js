[{"Owner":"sable","Date":"2018-04-21T04:49:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve noticed that when using an action manager with sprites_co_ both the OnPick and OnPickUp triggers are fired twice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis can be seen in the example (_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#9RUHH%235_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_)_co_ linked to from the documentation (_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_actions#sprites_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooking at the code_co_ this seems to because _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/c0674bdb4d68e83e30fe9e02040dbb28ba3cd029/src/babylon.scene.ts#L1844_qt_ rel_eq__qt_external nofollow_qt__gt_scene._initClickEvent_lt_/a_gt_ calls it_t_s callback twice (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/c0674bdb4d68e83e30fe9e02040dbb28ba3cd029/src/babylon.scene.ts#L1882_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_ and _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/c0674bdb4d68e83e30fe9e02040dbb28ba3cd029/src/babylon.scene.ts#L1951_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt__co_ cb being defined _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/c0674bdb4d68e83e30fe9e02040dbb28ba3cd029/src/babylon.scene.ts#L2065_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis could be solved by checking if clickInfo.ignore is true before doing all the sprite checking_co_ unless there is a good reason this wasn_t_t done in the first place.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-04-23T18:08:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-04-23T21:02:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks sable. That does sound like a bug and your solution seems reasonable to me. I created a PR with this change here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/4191_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/4191_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]