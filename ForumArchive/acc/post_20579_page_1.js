[{"Owner":"qqdarren","Date":"2016-02-17T16:36:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAll the extrude examples I_t_ve found (e.g. _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion )_lt_/a_gt_ require you to describe the shape with a series of 3d coords. I was hoping there might be a more user-friendly way_co_ so I could draw something in Inkscape_co_ save it as SVG_co_ and import that? (Though_co_ as far as I can see the shape to be extruded must be made of straight lines only_co_ no curves or splines_co_ so maybe that is a show-stopper?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAside_dd_ what I_t_m really looking for is the equivalent of Three.js_t_s TextGeometry_co_ so I can include a custom font_co_ and turn it into 3D text. But being able to work from an SVG would get the job done_co_ and would also be more flexible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Even just an offline script to convert SVG to Babylon code could be useful.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-02-17T17:03:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust a suggestion - if the SVG has a path_co_ transform this path to something the PolygonMeshBuilder can understand and use it to create a mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom experience - there is currently no way of extruding such a mesh (and if there is - PLEASE tell me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ ). There are external libraries that might be helpful_co_ but they are not yet integrated in BJS.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-02-17T17:23:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tEven just an offline script to convert SVG to Babylon code could be useful.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi qqdarren. Take a look at _lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_ows2QTiMRPg_qt_ rel_eq__qt_external nofollow_qt__gt_this video_lt_/a_gt_ which shows you how to easily convert and extrude  an SVG file in Blender. The result is a series of _qt_curves_qt_ which can be converted to a mesh by ALT + C.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen export from Blender as you would any mesh(es).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould be quite simple.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-02-17T17:27:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//forum.goocreate.com/t/svg-to-mesh-script/239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//forum.goocreate.com/t/svg-to-mesh-script/239_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthey did it... but they use this external lib _dd_ _lt_a href_eq__qt_https_dd_//github.com/mattdesl/svg-mesh-3d_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/mattdesl/svg-mesh-3d_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you use the same lib_co_ you_t_ll just a series of Vector3... just like what our extrusion function expects _sm_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI agree that BJS lacks the same Text3D that 3Js has. But 3Js Text 3D relies also on an external lib and uses pre-computed fonts only.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to  dynamically parse (one day) any font (svg_co_ true type_co_ etc) in the browser context and then generate/extrude any Unicode character from this data source. Currently_co_ I don_t_t know how to access from javascript to the font definition that the browser knows.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"qqdarren","Date":"2016-02-17T17:45:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Ranaan_sm_ I_t_d not looked at PolygonMeshBuilder before. Still going to be a bit low-level.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks Gryff_dd_ that is the way I currently do it. But the Babylon exported file is huge compared to the the svg required to describe each glyph.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks Jerome. The svg-mesh-3d lib looks like it almost does what I need. Regarding your last paragraph_co_ if the font is svg_co_ you could load and parse it just like any other text (xml) file. (A custom icon font I have is 35KB for the svg version_co_ compared to 11KB for the TTF/EOT/WOFF versions_co_ but the difference is less once the fonts are gzipped.) But how hard is it to convert d_eq__qt_M362.666 21.333h-170.667c-35.285 0-64 28.714-64 64v256c0 ..._qt_ into Babylon instructions_co_ I wonder.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-02-18T18:16:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBut the Babylon exported file is huge compared to the the svg required to describe each glyph.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell qq there may be a few reasons for that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen Blender uses curves it sets a default resolution of 12 - this can be reduced. See image below of two Bezier Circles. The unselected one has a preview resolution of 12_co_ the selected one 3. So you can play with that value to reduce vertex count of your eventual mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd/Or_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce a curve has been converted to a mesh - go into Edit mode_co_ select all the vertices then _qt_Remove Doubles_qt_. You maybe surprised at the number of doubles - a quick test I did removed 50% of the vertices in many cases.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter removing doubles_co_ do a _qt_Limited Dissolve_qt_ (hit space bar and type _qt_limited_qt_ into the box). You will find you can set an angle for the dissolve in the tool bar - bigger angle more verts removed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/svg1.png.7182d719444b6175554697e974f3afb0.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_6435_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_02/svg1.png.7182d719444b6175554697e974f3afb0.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_svg1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]