[{"Owner":"Mpman","Date":"2017-02-11T20:16:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI loaded 2 JS files into a web application (2 different zones and roles)_co_ both work great_co_ the issue comes when i use the first JS file area_co_ the camera is not dragging on screen once i call the second JS_co_ almost as if the second JS killed the first JS camera functionality.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to Reload events in Babylon? so when i access the first JS a function can reload the camera?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBoth use the same camera but different camera name/vars.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do not wish to load multiple models_co_ but multiple Babylon JS files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-02-11T20:46:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25463-mpman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25463_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25463-mpman/_qt_ rel_eq__qt__qt__gt_@Mpman_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tare you talking about two actual babylon.js files?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-02-12T16:18:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe also need your loading method... If you use SceneLoader.Load twice_co_ that may be your problem _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mpman","Date":"2017-02-12T18:00:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi thanks for responding!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI simply loaded 2 JS files into 2 separate divs in the same application.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThey see each other and there are no conflicts other than when i load the second JS_co_ the first one_t_s camera is not functioning (you drag the mouse and nothing happens).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf i reload the first div it works but is slower than before. i suspect that there is a way to reload the camera part (which i tried)_co_ or use code that avoids the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also removed the div that holds the second JS and went back to the first div and the issue remained almost as if the initiation of the second JS changed the first one forever (upon initiation).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEach JS does use _qt_BABYLON.SceneLoader.ImportMesh_qt_ and by renaming similar vars i.e. camera --&gt_sm_ camera2 i managed to avoid any other conflicts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mpman","Date":"2017-02-12T18:32:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tISSUE RESOLVED _dd_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn the second JS i used _lt_u_gt_scene_lt_/u_gt_ in the main code and a new var for the createScene part (_lt_u_gt_scene2_lt_/u_gt_)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also removed the babylon.js lib call from the second JS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_FIRST JS_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_var _lt_u_gt_scene _lt_/u_gt__eq_ createScene()_sm__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_engine.runRenderLoop(function () {_lt_br /_gt_\n\t            _lt_u_gt_scene_lt_/u_gt_.render()_sm__lt_br /_gt_\n\t        })_sm__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_SECOND JS_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_var _lt_u_gt_scene2_lt_/u_gt_ _eq_ createScene()_sm__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_engine.runRenderLoop(function () {_lt_br /_gt_\n\t            _lt_u_gt_scene2_lt_/u_gt_.render()_sm__lt_br /_gt_\n\t        })_sm__lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]