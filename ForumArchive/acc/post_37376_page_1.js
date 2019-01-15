[{"Owner":"Raitch","Date":"2018-05-03T08:07:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ I_t_ve been for a long time making an overlay meant for _lt_a href_eq__qt_https_dd_//obsproject.com_qt_ rel_eq__qt_external nofollow_qt__gt_OBS_lt_/a_gt_ streams. Before I started working too much on it I confirmed that Babylon worked in OBS. However I only tested in Ubuntu/Linux OBS and it works perfectly_co_ but found out the hard way today that I can_t_t really get it to work for Windows OBS. Have been googling quite a bit trying to find a solution and here_t_s what I_t_ve come up with_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tBoth _lt_a href_eq__qt_https_dd_//github.com/bazukas/obs-linuxbrowser/releases_qt_ rel_eq__qt_external nofollow_qt__gt_Linux_lt_/a_gt_ and _lt_a href_eq__qt_https_dd_//github.com/obsproject/obs-browser/releases_qt_ rel_eq__qt_external nofollow_qt__gt_Windows_lt_/a_gt_ OBS uses _lt_a href_eq__qt_https_dd_//github.com/tilemill-project/cefclient_qt_ rel_eq__qt_external nofollow_qt__gt_CEF_lt_/a_gt_. However due to some inconsistencies in Windows_co_ they seem to differ and have GPU disabled by default\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tI run _lt_a href_eq__qt_https_dd_//github.com/obsproject/obs-browser/issues/41_qt_ rel_eq__qt_external nofollow_qt__gt_OBS with gpu enabled_lt_/a_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tI visited _lt_a href_eq__qt_http_dd_//html5test.com/_qt_ rel_eq__qt_external nofollow_qt__gt_HTML5Test_lt_/a_gt_ through OBS and confirmed that both WebGL and WebGL 2 were checked Yes\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tBut when trying to simply run _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com_qt_ rel_eq__qt_external nofollow_qt__gt_Playground_lt_/a_gt_ with OBS I get _qt_Your browser does not support WebGL_qt_ error and no 3D is shown\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tAnd this is basically where I_t_m stuck. I_t_m not sure if there_t_s some other core feature missing that HTML5Test/me am missing to run babylon.js. Has anyone had similar problems before with CEF or just know what more Babylon.js requires apart from WebGL to be run? All clues are helpful at the moment. Cheers!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raitch","Date":"2018-05-03T11:00:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay so apparently I only have this issue on my Windows 10 computer and not on by Windows 7 computer when testing around. Not really sure why that_t_s the case. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-03T22:06:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was not aware of this project. Looks really cool\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut unfortunately we cannot help more here as this seems related to OBS itself\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnnyDevNull","Date":"2018-05-03T23:01:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe the playground has a browser check?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//stackoverflow.com/a/9851769/3634274_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//stackoverflow.com/a/9851769/3634274_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//php.net/manual/de/function.get-browser.php_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//php.net/manual/de/function.get-browser.php_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen you could test it with a local installment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you know the user agent of this browser? Or can you fake it?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-03T23:34:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LBK25C_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LBK25C_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tconsole.log(navigator)_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]