[{"Owner":"HHerglotz","Date":"2016-08-04T12:51:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is meant as help to anyone that runs into the same problem as I did.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI install the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/3ds%20Max_qt_ rel_eq__qt_external nofollow_qt__gt_3ds Max babylon exporter_lt_/a_gt_ as explained in the repository. I downloaded the file and exported all dlls and directories in the respective subdirectory of 3ds max 2017.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I was starting 3ds max up_co_ it would however not load the assemblies. I would get an error from the .NET framework saying that it cannot load any property that was downloaded from a network.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe error message would roughly look like the picture attached.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGoogle research suggest to deinstall the .NET framework (which is almost impossibly to do under Windows 10)_co_ update your graphic card drivers or select another graphic card driver in the 3ds max preferences.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNONE OF THEM WORK!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt was driving me nuts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI solved the problem like follows_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOpen the directory where you copied your dlls into (_qt_YOUR3DSMAXDIRECTORY_qt_/bin/assemblies).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight click on every dll that you copied into that directory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSelect _qt_unblock_qt_ from the bottom right corner. It will look something like this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//www.limilabs.com/blog/wp-content/uploads/2012/10/Unblock_dll.png_qt_ alt_eq__qt_Unblock_dll.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tConfirm the dialog with OK.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRepeat for all dlls that you copied in the directory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRestart 3ds max and Voila. It_t_s going to work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this will help some other people that had the same issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/0EM30000000QhVm.png.64530c25329ebbef0e8dfecdbf842c38.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8884_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/0EM30000000QhVm.png.64530c25329ebbef0e8dfecdbf842c38.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_0EM30000000QhVm.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-04T17:47:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep this is in the documentation _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/exporters/3DSMax_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/exporters/3DSMax_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]