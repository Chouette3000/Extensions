[{"Owner":"MackeyK24","Date":"2016-11-06T13:51:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis request is more for the BabylonJS maintainers like David.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI talked you guys into letting me add node.metadata which is WORKING GREAT... SO GREAT that i really need (and hope you can see the same value as well) of having\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe same serializable metadata at the scene level. So i am asking SOMEONE to please_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ @serialize()\n public metadata_dd_any _eq_ null_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tto babylon.scene.ts so it can be used exactly like node.metedata.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now if i want to store SCENE level metadata i gotta put a DUMMY mesh (or node) into the scene and search the all the scene.meshes to find some node.metadata that has been aliased to be used as scene level data. That kinda sucks (Note_dd_ I DONT MEAN BABYLONJS sucks in any way... remember... I luv you guys and the very concept of babylonjs _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ ). Just not a clean way to store and retrieve any scene level metadata.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdding scene.metadata would give that same _t_automatic de-serialization_t_ of the built in babylon parsing framework. We will end up with a real javascript object scene.metadata JUST LIKE node.metadata\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease REALLY think about it... I would luv to clean up some of my BabylonJS loader code and having to look thru the scene nodes to grab a dummy node with my scene level metadata_co_ really bugs my OCD\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for even thinking about it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-11-08T17:02:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tbumpity bump bump.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  As best I can tell (not very)... this is quite an acceptable (and good) idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEver do github _lt_strong_gt_P_lt_/strong_gt_ull _lt_strong_gt_R_lt_/strong_gt_equests_co_ Mackey?  Fork the BJS source repository... to your personal repository_co_ edit the .ts file_co_ and submit a pull request.  BJS big dogs will look it over_co_ and determine if it is wise.  Then they will commit/merge it_co_ and it will be active after the next build.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can do a _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_28_co_16_co_29_co_30_co_31_qt_ rel_eq__qt__qt__gt_forum search_lt_/a_gt_ and _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_docs search_lt_/a_gt_ for _qt_contributing_qt_... should find more info.  Sorry for the slow replies.  Hopefully_co_ core coders will comment_co_ soon... and they are more intelligent and informed... than I.  Thanks for the contribution/suggestion.  I like it... and I like your great attitude_co_ too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-11-09T01:52:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI didn_t_t see any other @serializable properties on the scene like the node... Didn_t_t know if the scene runs thru the same de-serialization process as the node. SO i hoping someone with a little bit more knowledge on how the scene deserializes to help me out a bit _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-09T20:25:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello scene is not serialized using the automatic process.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I see no problem adding a metadata around here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Loading/Plugins/babylon.babylonFileLoader.ts#L219_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Loading/Plugins/babylon.babylonFileLoader.ts#L219_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-11-11T06:55:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tFYI ... All submitted and available on the latest github with scene level metadata\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-14T18:43:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMerged! Nightly will publish it\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot! (By the way I appreciated your Amiga reference in your video _sm_))\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]