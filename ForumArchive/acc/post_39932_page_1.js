[{"Owner":"DylanD","Date":"2018-09-11T13:39:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey everyone_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have recently switched machines_co_ from a mac to a windows machine.  I am trying to set up my vscode enviroment and am having trouble with npm and its dependencies.  I am still new to npm and am not sure how to go about this problem.  Specifially i am using babylonjs_dd__qt_^3.30-beta.5_qt__co_ babylonjs-gui_dd__qt_^3.2.0_qt__co_ and babylonjs-materials_dd__qt_3.3.0-beta.5_qt_.  These are all in my package.json_co_ when i was on my mac they all worked great together_co_ although i had slowly upgraded from using babylonjs version 3.2.0_co_ to all three of those dependencies.  Now when i try to do npm install to get all of the packages i need on my new machine i get this error_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_npm WARN babylonjs-gui@3.2.0 requires a peer of babylonjs@&gt_sm__eq_3.2.0-alpha but none is installed. You must install peer dependencies yourself._lt_br /_gt_\n\tnpm WARN babylonjs-materials@3.3.0-beta.5 requires a peer of babylonjs@&gt_sm__eq_3.2.0-alpha but none is installed. You must install peer dependencies yourself._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Any ideas what im doing wrong?  I tried installing both babylonjs-gui and babylonjs-materials with_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnpm install --save babylonjs babylonjs-gui\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_npm install --save babylonjs babylonjs-materials_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut that didnt seem to help _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-09-11T13:42:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tjust noticed in my git changes that somewhere when downloading and npm install ing it switch some stuff around in my package.json_co_ thats gotta be the problem\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit switch my package.json from\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ _qt_babylonjs_qt__dd_ _qt_^3.3.0-alpha.13_qt__co_\n _qt_babylonjs-gui_qt__dd_ _qt_^3.2.0_qt__co_\n _qt_babylonjs-materials_qt__dd_ _qt_^3.3.0-alpha.13_qt__co__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tto_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ _qt_babylonjs_qt__dd_ _qt_^3.3.0-beta.5_qt__co_\n _qt_babylonjs-gui_qt__dd_ _qt_^3.2.0_qt__co_\n _qt_babylonjs-materials_qt__dd_ _qt_^3.3.0-beta.5_qt__co__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tvery strange_co_ also im not sure how to change it back yet...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ proboably just how to uninstall and install the correct packages\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit2_dd_ that didnt work either_co_ still get missing dependencies problem\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-09-11T13:58:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tits seems i have a lot more problems than this too.  like vscode just not accepting my tsconfig.json\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlooks like i have to figure most of this out myself\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-09-11T14:25:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlright so i still have the dependencies problem but it was as simple as updating vscode... it was on version 1.14_co_ current version is 1.27 so that helped a lot.  Not sure how much those dependencies are really impacting my game since i can build and run and it seems fine_co_ except for a really weird change to how one of my shaders looks_co_ which i need to look into and make another post for_co_ could be my machine specific.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now its solved i guess_co_ however i would still like to hear what you all think about just leaving the _qt_missing_qt_ dependencies missing. (it says i need babylonjs3.2.0-alpha when i am using babylonjs3.3.0-alpha.13).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway thanks again for being my echo chamber i guess _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-09-11T16:02:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou should match the versions of all NPM projects for best results.  Do you mind me asking why you are not updating GUI?  For the shader I would create a new specific question_co_ but make sure you have set the static Engine.ShadersRepository_co_ if needed_co_ and that files are being served to browser.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-11T18:13:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep matching NPM versions is likely a good idea. Glad you managed to get it working. For me_co_ in a new project running_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_npm install babylonjs babylonjs-gui babylonjs-materials_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tor\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_npm install babylonjs@preview babylonjs-gui@preview babylonjs-materials@preview_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tfor the latest version_co_ does not spit out any dependency errors\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]