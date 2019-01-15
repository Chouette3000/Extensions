[{"Owner":"SeagullCZ","Date":"2018-08-25T14:25:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am creating an game which displays a map where I would like to mark some points (base on these points will be various models placed - it depends on data from backend). These points I am creating in the Blender by _lt_em_gt_Plain Axes_lt_/em_gt_ empty object. This objects appears also in exported_lt_em_gt_ *.babylon_lt_/em_gt_ file in _lt_em_gt_meshes _lt_/em_gt_part of file.  So far so good_co_ but problem is that I need somehow mark these points_co_ the _lt_em_gt_Tag _lt_/em_gt_feature seems like good choice_co_ but there isn_t_t a _lt_em_gt_Tag_lt_/em_gt_ field in Blender UI like is for meshes. So my first question is_dd_ Do you know any way how to add tags at empty entity? And second one_dd_  Do you know any other way how to mark such points? I was thinking about simple small circle but it seems like very ugly workaround for me. I was also thinking about using of entity name as a _qt_tag_qt__co_ this solution seems like candidate for me_co_ but delaing with multiple tags on one object will needs some ugly name/tag conversion.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for help\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSeagullCZ\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-08-26T13:28:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Seagull_co_ welcome to the forum!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have some ideas for this... using a Blender _qt__lt_a href_eq__qt_https_dd_//docs.blender.org/manual/en/dev/data_system/custom_properties.html?highlight_eq_metadata_qt_ rel_eq__qt_external nofollow_qt__gt_custom property_lt_/a_gt__qt_ that you name _t_metadata_t_.  It _lt_u_gt_must_lt_/u_gt_ be named _lt_strong_gt__lt_em_gt_metadata_lt_/em_gt__lt_/strong_gt_ so that it arrives in BJS (imported) as the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.abstractmesh#metadata_qt_ rel_eq__qt_external nofollow_qt__gt_mesh.metadata property_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Note_dd__lt_/strong_gt_  Lights and cameras ALSO carry the .metadata property_co_ but let_t_s ONLY talk about mesh.metadata_co_ here/now.   [_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_q_eq_metadata&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_28_co_29_co_30_co_31_co_38&amp_sm_search_and_or_eq_or_qt_ rel_eq__qt__qt__gt_click here for forum-wide search for _t_metadata_t__lt_/a_gt_]\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn Blender_co_ this mesh/object property VALUE could be set as a string value_co_ and that string COULD BE a serialized JSON object.  After the .metadata string arrives into a BJS scene_co_ it can be JSON parsed_co_ and it will become an object.  That object COULD be a database of marker names_co_ and each marker_t_s worldspace position (x/y/z).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne problem.  Imagine you have 100 or more markers on a ground/floor.  The string you must edit/paste into the _lt_a href_eq__qt_https_dd_//docs.blender.org/manual/en/dev/data_system/custom_properties.html?highlight_eq_metadata#editing-properties_qt_ rel_eq__qt_external nofollow_qt__gt_Property Value text-input field_lt_/a_gt_... (with each marker_t_s name and position) will be long and ugly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--------------------_lt_br /_gt_\n\tWe need to talk with _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ and other Blender exporter experts... for a moment.  Jeff/others... do you think it is possible to make the exporter... TRY to run a little _qt_extra_qt_ user-written Python func.... during the exporting?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tObjectives of the user-created Python func_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t  - Ignore the existence-of (don_t_t export) ANY mesh named _lt_strong_gt__marker_###_lt_/strong_gt_ (where ### _eq_ some number 000-999+)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  - Assemble a giant metadata string (serialized JSON) containing the names and positions of all _markers_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  - Place that long string into parentMesh.metadata ... for export to BJS scene... where Seagull can use that _markers_ database._lt_br /_gt_\n\t-------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ Seagull_co_ in your Blender scene... you could place little boxes or spheres at every _marker_ point_co_ and if you named each...  _lt_strong_gt__marker_xxx_lt_/strong_gt__co_ then they would _lt_u_gt_NOT be included_lt_/u_gt_ in the scene export-from-Blender_co_ but their names and positions WOULD be included... in someOtherMesh.metadata string.  A suitcase or traveling bag.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you think this would work... for your needs_co_ Seagull?  I don_t_t know if it is possible_co_ but_co_ let_t_s run it up the flagpole and see if anyone salutes it.  _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Would that user-coded Python func be called an exporter _lt_em_gt_pre-processor_lt_/em_gt_?  *shrug*_lt_/span_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy whole idea might be the wrong approach_co_ as I_t_m not an _lt_s_gt_export_lt_/s_gt_ expert.  All ideas/comments welcome_co_ always.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-08-27T14:33:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust use a plane mesh.  It only has 2 faces.  You can disable it right in the exporter Custom properties UI_co_ which should perform identically to empties.  There is also a place to add tags which get exported.  No need to assign a material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19777_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/tags.JPG.038ec0073af661c882a8d91eda3e9f6b.JPG_qt_ alt_eq__qt_tags.JPG.038ec0073af661c882a8d91eda3e9f6b.JPG_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-08-27T14:40:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was just thinking about just a single verts_co_ but it seems not convenient.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI took a look on the mesh.py addon file_co_ but play with empties doest not appear easy (example_co_ they aren_t_t bpy.types.Empty - I could be wrong)_co_ so I don_t_t success to show a Tags input box _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😕_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_By writing this_co_ _t_thought maybe the simpliest solution_dd_ create a custom mesh-empty without faces_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_nh7iN09.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_540_qt_ src_eq__qt_https_dd_//i.imgur.com/nh7iN09.png_qt_ width_eq__qt_1000_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]