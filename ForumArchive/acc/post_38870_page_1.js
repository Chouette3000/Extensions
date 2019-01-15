[{"Owner":"xiphiaz","Date":"2018-07-16T10:53:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSee my example_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#165IV6%23435_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#165IV6#435_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a lathe mesh that is a swept surface_co_ that I want to appear smooth around the surface_co_ but not have the vertex normals be vertically smooth (if that makes sense?). Basically without converting to flat mesh_co_ the normals make it appear to curve around hard edges that should remain to be hard.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way I can update the normals to make it appear to have hard edges_co_ but not be faceted on the cylindrical surfaces?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-17T15:41:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging our lathe master_dd_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-17T17:18:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thttps_dd_//www.babylonjs-playground.com/#165IV6#436\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-07-17T19:06:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#165IV6%23439_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#165IV6#439_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat did I do ? I just repeated the points in the list where the normals musn_t_t be smoothed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNice hack Pryme8 _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😄_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"xiphiaz","Date":"2018-07-31T14:50:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAwesome thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ &amp_sm_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_. For completeness this is what I ended up with.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t```ts\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#141414_sm_color_dd_#f8f8f8_sm_font-size_dd_11.3pt_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt_private _lt_/span_gt__lt_span style_eq__qt_color_dd_#979748_sm__qt__gt_generateFlatLathe_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_name_lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt__dd_ string_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_shape_lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt__dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9b703f_sm__qt__gt_Vector3_lt_/span_gt_[]_lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_)_lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt__dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9b703f_sm__qt__gt_Mesh _lt_/span_gt_{\n  _lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt_return _lt_/span_gt__lt_span style_eq__qt_color_dd_#9b703f_sm__qt__gt_MeshBuilder_lt_/span_gt_._lt_span style_eq__qt_color_dd_#9b703f_sm__qt__gt_CreateLathe_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_(\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_    _lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_name_lt_/span_gt__co_\n    {\n      _lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_shape_lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt__dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_shape_lt_/span_gt_._lt_span style_eq__qt_color_dd_#979748_sm__qt__gt_reduce_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_((_lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_duplicatedPoints_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_point_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_index_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_allPoints_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_) _lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt__eq_&gt_sm_ _lt_/span_gt_{\n        _lt_span style_eq__qt_color_dd_#5f5a60_sm__qt__gt_// only duplicate the non start &amp_sm_ end points\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#5f5a60_sm__qt__gt_        _lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_index _lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt_!_eq__eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#cf6a4c_sm__qt__gt_0 _lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt_&amp_sm_&amp_sm_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_index _lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt_&lt_sm_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_allPoints_lt_/span_gt_._lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_length _lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt_- _lt_/span_gt__lt_span style_eq__qt_color_dd_#cf6a4c_sm__qt__gt_1\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#cf6a4c_sm__qt__gt_          _lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt_? _lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_duplicatedPoints_lt_/span_gt_._lt_span style_eq__qt_color_dd_#979748_sm__qt__gt_push_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_point_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_point_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_)\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_          _lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt__dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_duplicatedPoints_lt_/span_gt_._lt_span style_eq__qt_color_dd_#979748_sm__qt__gt_push_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_point_lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_)_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_        _lt_/span_gt__lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt_return _lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_duplicatedPoints_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_      _lt_/span_gt_}_co_ []_lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_)_lt_/span_gt__co_\n    }_co_\n    _lt_span style_eq__qt_color_dd_#cda869_sm__qt__gt_this_lt_/span_gt_._lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_scene\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#7587a6_sm__qt__gt_  _lt_/span_gt__lt_span style_eq__qt_color_dd_#afafaf_sm__qt__gt_)_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm_\n_lt_/span_gt_}_lt_/pre_gt_\n\n_lt_p_gt_\n\t```\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-31T15:36:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat is clean.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]