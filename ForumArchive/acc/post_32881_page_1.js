[{"Owner":"abhivaidya","Date":"2017-09-12T10:09:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am just evaluating BabylonJS for a client project and since this is a large corporation_co_ I will have to deploy the files (especially the meshes) as common file formats (eg. .js or .json). The reason being_co_ I am assuming (also with some experience in dealing with such clients) that if I deploy a project with files with custom extensions (like .babylon)_co_ they wont load and they wont add it to the mimetype to load such files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHence_co_ can I customize or rename the extension to something else_co_ like ones mentioned above_co_ for easy deployment?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-09-12T11:38:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tUnless you have to deal with MIME type restrictions (the MIME type is usually written by the server in the http response headers)_co_ from the browser point of view_co_ an extension of a file name has strictly no importance. So renaming a .babylon file to .json should work out of the box.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-12T11:43:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi marcus_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe .babylon file is not more than a json file renamed to .babylon for the sake of proper definition.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you register the standard babylon loader to load .json files instead of .babylon files_co_ it should be working. It should anyhow work_co_ as the default loader will trigger (for example_co_ like this_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#81WPUC_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#81WPUC_lt_/a_gt_) . This is important if you register more than one loader.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"abhivaidya","Date":"2017-09-12T13:06:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_188564_qt_ data-ipsquote-contentid_eq__qt_32881_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1505216613_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi marcus_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tthe .babylon file is not more than a json file renamed to .babylon for the sake of proper definition.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you register the standard babylon loader to load .json files instead of .babylon files_co_ it should be working. It should anyhow work_co_ as the default loader will trigger (for example_co_ like this_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#81WPUC_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#81WPUC_lt_/a_gt_) . This is important if you register more than one loader.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat works like a charm!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-12T15:40:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat_t_s a good news _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]