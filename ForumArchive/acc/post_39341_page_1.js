[{"Owner":"ozRocker","Date":"2018-08-09T05:01:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes anyone know if its possible to morph part of a mesh to its target?  For example_co_ if you start clicking on areas of a mesh those areas will start to morph to the target\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI could code this via CPU but I_t_m just wondering if its possible to do this via GPU.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-09T12:38:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWould Morph Targets not work in this case ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_morphtargets_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_use_morphtargets_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-08-09T13:42:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_224563_qt_ data-ipsquote-contentid_eq__qt_39341_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533818328_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWould Morph Targets not work in this case ?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_morphtargets_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_use_morphtargets_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tBut how can I use that to morph part of the mesh?  As far as I know_co_ morph target will morph the whole mesh only\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-09T13:57:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEither you could split the mesh (less than ideal)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr you could leave some of the mesh information unchanged and only touch the other vertex.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-08-09T14:00:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_224585_qt_ data-ipsquote-contentid_eq__qt_39341_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533823041_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tEither you could split the mesh (less than ideal)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tOr you could leave some of the mesh information unchanged and only touch the other vertex.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYeh_co_ that_t_s the one.  I want to leave some of the mesh unchanged.  Like if I had a paintbrush I want only the vertices under the paintbrush to morph towards the target.  The Morph Target Manager can do this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-09T14:04:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyup_co_ in the morph target manager you can define manually the vertex data for start and end as you can see here_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HPV2TZ%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#HPV2TZ#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could adapt only half of the mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-08-09T14:13:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_224588_qt_ data-ipsquote-contentid_eq__qt_39341_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533823452_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 minutes ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyup_co_ in the morph target manager you can define manually the vertex data for start and end as you can see here_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HPV2TZ%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#HPV2TZ#15_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou could adapt only half of the mesh.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m not sure how that would work in my case.  It looks like you are still doing a complete morph.  Here_t_s an example_dd_ I have a skinny girl as base and a really fat girl (fat everywhere) as the target.  I want to just morph maybe the hips_co_ or the breasts_co_ or the neck.  I don_t_t want to create a morph target for each possible bodypart because there might be 20 or more.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-09T14:16:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYup this might get tricky_co_ but as long as you morph from A to A it feels like it is not morphing but you would need to identify every single vertex you need to morph and left the other untouched.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-08-10T05:57:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_224591_qt_ data-ipsquote-contentid_eq__qt_39341_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533824173_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYup this might get tricky_co_ but as long as you morph from A to A it feels like it is not morphing but you would need to identify every single vertex you need to morph and left the other untouched.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tDo you know if this is possible with Morph Manager?  To be able to morph different areas with different influence amounts?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-10T07:24:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNope you can not control this aside of manually creating the corresponding vertex data as on the sample provided.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]