[{"Owner":"Carharttguy","Date":"2017-07-07T08:06:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to create a new material to be applied on a hightmap. But I get this error_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTypeError_dd_ r is undefined[Meer info]  babylon.js_dd_16_dd_7807\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt_\n\t\t\t    t _lt_a href_eq__qt_http_dd_//localhost_dd_5381/babylonjs/babylon.js_dd_16_dd_7807_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost_dd_5381/babylonjs/babylon.js_dd_16_dd_7807_lt_/a_gt__lt_br /_gt_\n\t\t\t    r _lt_a href_eq__qt_http_dd_//localhost_dd_5381/babylonjs/babylon.js_dd_16_dd_14755_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost_dd_5381/babylonjs/babylon.js_dd_16_dd_14755_lt_/a_gt__lt_br /_gt_\n\t\t\t    LoadZone _lt_a href_eq__qt_http_dd_//localhost_dd_5381/editorfunctions.js_dd_2_dd_26_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost_dd_5381/editorfunctions.js_dd_2_dd_26_lt_/a_gt__lt_br /_gt_\n\t\t\t    Editor.prototype._ProcessXojoMessages _lt_a href_eq__qt_http_dd_//localhost_dd_5381/editor.js_dd_49_dd_17%5B/quote%5D_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost_dd_5381/editor.js_dd_49_dd_17_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe code of loadzone is_dd_\n_lt_/p_gt_\n\n_lt_pre class_eq__qt_ipsCode prettyprint lang-javascript_qt__gt_\nfunction LoadZone(scene_dd_ BABYLON.Scene_co_ hmURL_dd_ string_co_ texURL_dd_ string_co_ Width_dd_ number_co_ MaxHeight_dd_ number_co_ Length_dd_ number)\n{\n    let groundMaterial _eq_ new BABYLON.StandardMaterial(_qt_groundMaterial_qt__co_ scene)_sm_\n    groundMaterial.diffuseTexture _eq_ new BABYLON.Texture(texURL_co_ scene)_sm_\n\n    let ground _eq_ BABYLON.MeshBuilder.CreateGroundFromHeightMap(_qt_ground_qt__co_ hmURL_co_ {width_dd_Width_co_ height_dd_Length_co_ subdivisions_dd_4_co_ minHeight_dd_0_co_ maxHeight_dd_MaxHeight_co_ updatable_dd_false}_co_ scene)_sm_\n    ground.material _eq_ groundMaterial_sm_\n}_lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wanted to get my code in a playground_co_ but my usecase is too specific_dd_ I have a websocket connecting to a server_co_ and once a certain message is received_co_ this function is called.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-07-07T08:15:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tusual error\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou have to wait that your GroundMesh is created (the heightmap file dowload can last a little) before assigning it a material. For this_co_ just use the callback parameter _lt_em_gt_onReady_lt_/em_gt_ in the parameter list _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/meshbuilder#static-creategroundfromheightmap-name-url-options-scene-rarr-groundmesh-classes-2-5-groundmesh-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.5/meshbuilder#static-creategroundfromheightmap-name-url-options-scene-rarr-groundmesh-classes-2-5-groundmesh-_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carharttguy","Date":"2017-07-07T08:28:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Jerome for your superfast answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut now the error changed_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTypeError_dd_ n is undefined[Meer info]  babylon.js_dd_6_dd_28905_lt_br /_gt_\n\t\t\t    i http_dd_//127.0.0.1_dd_5381/babylonjs/babylon.js_dd_6_dd_28905_lt_br /_gt_\n\t\t\t    r http_dd_//127.0.0.1_dd_5381/babylonjs/babylon.js_dd_13_dd_3003_lt_br /_gt_\n\t\t\t    i http_dd_//127.0.0.1_dd_5381/babylonjs/babylon.js_dd_23_dd_1515_lt_br /_gt_\n\t\t\t    t.CreateGroundFromHeightMap http_dd_//127.0.0.1_dd_5381/babylonjs/babylon.js_dd_14_dd_14863_lt_br /_gt_\n\t\t\t    LoadZone http_dd_//127.0.0.1_dd_5381/editorfunctions.js_dd_8_dd_18_lt_br /_gt_\n\t\t\t    Editor.prototype._ProcessXojoMessages http_dd_//127.0.0.1_dd_5381/editor.js_dd_49_dd_17\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_EDIT_dd_ Chrome gave me a slightly better error_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_float_dd_right_sm_text-align_dd_right_sm_margin-left_dd_4px_sm_color_dd_rgb(48_co_57_co_66)_sm_font-family_dd_Menlo_co_ monospace_sm_font-size_dd_11px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_240_co_240)_sm__qt__gt__lt_span style_eq__qt_color_dd_rgb(84_co_84_co_84)_sm_text-decoration_dd_underline_sm__qt__gt_babylon.js_dd_6_lt_/span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#FF0000_sm_font-family_dd_Menlo_co_ monospace_sm_font-size_dd_11px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_240_co_240)_sm__qt__gt_Uncaught _lt_span style_eq__qt_font-family_dd_Menlo_co_ monospace_sm_white-space_dd_pre-wrap_sm_font-size_dd_11px_sm__qt__gt__lt_span_gt_TypeError_dd_ Cannot read property _t_addMesh_t_ of undefined at i [as constructor] (_lt_span style_eq__qt_color_dd_rgb(84_co_84_co_84)_sm_text-decoration_dd_underline_sm__qt__gt_babylon.js_dd_6_lt_/span_gt_)_lt_br /_gt_\n\t\t\tat i.r [as constructor] (_lt_span style_eq__qt_color_dd_rgb(84_co_84_co_84)_sm_text-decoration_dd_underline_sm__qt__gt_babylon.js_dd_13_lt_/span_gt_)_lt_br /_gt_\n\t\t\tat new i (_lt_span style_eq__qt_color_dd_rgb(84_co_84_co_84)_sm_text-decoration_dd_underline_sm__qt__gt_babylon.js_dd_23_lt_/span_gt_) at Function.t.CreateGroundFromHeightMap (_lt_span style_eq__qt_color_dd_rgb(84_co_84_co_84)_sm_text-decoration_dd_underline_sm__qt__gt_babylon.js_dd_14_lt_/span_gt_)_lt_br /_gt_\n\t\t\tat LoadZone (_lt_span style_eq__qt_color_dd_rgb(84_co_84_co_84)_sm_text-decoration_dd_underline_sm__qt__gt_editorfunctions.ts_dd_10_lt_/span_gt_)_lt_br /_gt_\n\t\t\tat WebSocket.Editor._ProcessXojoMessages (_lt_span style_eq__qt_color_dd_rgb(84_co_84_co_84)_sm_text-decoration_dd_underline_sm__qt__gt_editor.ts_dd_71_lt_/span_gt_)_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMy code is now changed too_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-family_dd_Menlo_sm__qt__gt_\n\n_lt_span style_eq__qt_color_dd_#808080_sm_font-style_dd_italic_sm__qt__gt_/// &lt_sm_reference path_eq__qt_babylonjs/babylon.d.ts_qt_/&gt_sm_\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_import _lt_/span_gt_GroundMesh _eq_ BABYLON.GroundMesh_sm_\n_lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_let _lt_/span_gt__lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm_font-style_dd_italic_sm__qt__gt_currentScene_lt_/span_gt__dd_ BABYLON.Scene\n_lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_let _lt_/span_gt__lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm_font-style_dd_italic_sm__qt__gt_textureURL_lt_/span_gt__dd_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_string_lt_/span_gt__sm_\n_lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_function _lt_/span_gt__lt_span style_eq__qt_font-style_dd_italic_sm__qt__gt_LoadZone_lt_/span_gt_(scene_dd_ BABYLON.Scene_co_ hmURL_dd_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_string_lt_/span_gt__co_ texURL_dd_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_string_lt_/span_gt__co_ Width_dd_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_number_lt_/span_gt__co_ MaxHeight_dd_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_number_lt_/span_gt__co_ Length_dd_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_number_lt_/span_gt_)\n{\n    _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm_font-style_dd_italic_sm__qt__gt_currentScene _lt_/span_gt__eq_ scene_sm_\n    _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm_font-style_dd_italic_sm__qt__gt_textureURL _lt_/span_gt__eq_ texURL_sm_\n\n    _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_let _lt_/span_gt__lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_ground _lt_/span_gt__eq_ BABYLON.MeshBuilder._lt_span style_eq__qt_font-style_dd_italic_sm__qt__gt_CreateGroundFromHeightMap_lt_/span_gt_(_lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_ground_qt__lt_/span_gt__co_ hmURL_co_ {_lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_width_lt_/span_gt__dd_Width_co_ _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_height_lt_/span_gt__dd_Length_co_ _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_subdivisions_lt_/span_gt__dd__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_4_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_minHeight_lt_/span_gt__dd__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_0_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_maxHeight_lt_/span_gt__dd_MaxHeight_co_ _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_updatable_lt_/span_gt__dd__lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_false_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_onReady_lt_/span_gt__dd__lt_span style_eq__qt_font-style_dd_italic_sm__qt__gt_HeightMapLoaded_lt_/span_gt_}_co_ scene)_sm_\n\n}\n\n_lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_function _lt_/span_gt__lt_span style_eq__qt_font-style_dd_italic_sm__qt__gt_HeightMapLoaded_lt_/span_gt_(mesh_dd_ GroundMesh)\n{\n    _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_let _lt_/span_gt__lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_groundMaterial _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_new _lt_/span_gt_BABYLON.StandardMaterial(_lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_groundMaterial_qt__lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm_font-style_dd_italic_sm__qt__gt_currentScene_lt_/span_gt_)_sm_\n    _lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_groundMaterial_lt_/span_gt_._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_diffuseTexture _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_new _lt_/span_gt_BABYLON.Texture(_lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm_font-style_dd_italic_sm__qt__gt_textureURL_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm_font-style_dd_italic_sm__qt__gt_currentScene_lt_/span_gt_)_sm_\n    mesh._lt_span style_eq__qt_color_dd_#660e7a_sm_font-weight_dd_bold_sm__qt__gt_material _lt_/span_gt__eq_ _lt_span style_eq__qt_color_dd_#458383_sm__qt__gt_groundMaterial_lt_/span_gt__sm_\n}_lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe error is now on the BABYLON.MeshBuilder.CreateGroundFromHeightMap\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a debugbuild of babylonjs? I must be overlooking it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-07-07T08:51:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-family_dd_Menlo_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_function _lt_/span_gt__lt_span style_eq__qt_font-style_dd_italic_sm__qt__gt_HeightMapLoaded_lt_/span_gt_(mesh)  instead of _lt_/pre_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-family_dd_Menlo_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_function _lt_/span_gt__lt_span style_eq__qt_font-style_dd_italic_sm__qt__gt_HeightMapLoaded_lt_/span_gt_(mesh_dd_ GroundMesh)_lt_/pre_gt_\n\n_lt_p_gt_\n\tprobably ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carharttguy","Date":"2017-07-07T09:07:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Jerome\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat wasn_t_t the problem. When I just put one line in LoadZone_co_ straight from the docs_co_ I also get the same error_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_pre_gt_\n\nvar ground _eq_ BABYLON.MeshBuilder.CreateGroundFromHeightMap(_qt_gdhm_qt__co_ _qt_assets/heightmaps/default.png_qt__co_ { width_dd_ 6_co_ subdivisions_dd_ 4 }_co_ scene)_sm__lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSo there must be something wrong with my setup_co_ however_co_ the createscene works as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnybody can view the source here_dd_ _lt_a href_eq__qt_http_dd_//conservatorium-brugge.be/babylon/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//conservatorium-brugge.be/babylon/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut you won_t_t see the error because there probably won_t_t be a websocket server running on your localhost which sends the right commands.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it maybe impossible to load a heightmap after the createScene function?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-07T14:08:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_180960_qt_ data-ipsquote-contentid_eq__qt_31491_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1499418470_qt_ data-ipsquote-userid_eq__qt_20175_qt_ data-ipsquote-username_eq__qt_Carharttguy_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Carharttguy said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIs it maybe impossible to load a heightmap after the createScene function?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo it is not._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#INY9N0%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#INY9N0#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carharttguy","Date":"2017-07-07T19:49:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmh_co_ I tried about everything I possibly can_co_ the error only shows up after I call it from an incoming websocketmessage.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ could it be possible that the websocketevents break babylonjs in any way?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created the simplest possible script I could to show of the _t_bug_t_. There is nothing wrong with the websocketcode_co_ it is called an the alert(_qt_groundcreation_qt_) is called.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tScript_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_/// &lt_sm_reference path_eq__qt_babylonjs/babylon.d.ts_qt_/&gt_sm_\nvar Editor _eq_ (function () {\n    function Editor(canvasElement) {\n        // Create canvas and engine\n        this._canvas _eq_ document.getElementById(canvasElement)_sm_\n        this._engine _eq_ new BABYLON.Engine(this._canvas_co_ true)_sm_\n        this._socketConnection _eq_ new WebSocket(_qt_ws_dd_//127.0.0.1_dd_5382_qt_)_sm_\n    }\n    Editor.prototype.createScene _eq_ function () {\n        // create a basic BJS Scene object\n        this._scene _eq_ new BABYLON.Scene(this._engine)_sm_\n        // create a FreeCamera_co_ and set its position to (x_dd_0_co_ y_dd_5_co_ z_dd_-10)\n        this._camera _eq_ new BABYLON.FreeCamera(_t_camera1_t__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ this._scene)_sm_\n        // target the camera to scene origin\n        this._camera.setTarget(BABYLON.Vector3.Zero())_sm_\n        // attach the camera to the canvas\n        this._camera.attachControl(this._canvas_co_ false)_sm_\n        // create a basic light_co_ aiming 0_co_1_co_0 - meaning_co_ to the sky\n        this._light _eq_ new BABYLON.HemisphericLight(_t_light1_t__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ this._scene)_sm_\n        // create a built-in _qt_sphere_qt_ shape_sm_ with 16 segments and diameter of 2\n        var sphere _eq_ BABYLON.MeshBuilder.CreateSphere(_t_sphere1_t__co_ { segments_dd_ 16_co_ diameter_dd_ 2 }_co_ this._scene)_sm_\n        // move the sphere upward 1/2 of its height\n        sphere.position.y _eq_ 1_sm_\n    }_sm_\n    Editor.prototype.animate _eq_ function () {\n        var _this _eq_ this_sm_\n        // run the render loop\n        this._engine.runRenderLoop(function () {\n            _this._scene.render()_sm_\n            var fpsLabel _eq_ document.getElementById(_qt_fpslabel_qt_)_sm_\n            fpsLabel.innerHTML _eq_ _this._engine.getFps().toFixed() + _qt_ fps_qt__sm_\n        })_sm_\n        // the canvas/window resize event handler\n        window.addEventListener(_t_resize_t__co_ function () {\n            _this._engine.resize()_sm_\n        })_sm_\n        this._socketConnection.addEventListener(_t_open_t__co_ function () {\n            this.send(_qt_EditorIsReady_qt_)_sm_\n        })_sm_\n        this._socketConnection.addEventListener(_t_message_t__co_ this._ProcessXojoMessages)_sm_\n    }_sm_\n    Editor.prototype._ProcessXojoMessages _eq_ function (me) {\n        var params _eq_ me.data.split(_qt_|_qt_)_sm_\n        switch (params[0]) {\n            case _qt_LoadZone_qt__dd_\n                alert(_qt_groundcreation_qt_)_sm_\n                var ground _eq_ BABYLON.Mesh.CreateGroundFromHeightMap(_qt_ground_qt__co_ _qt_assets/heightmaps/default.png_qt__co_ 256_co_ 256_co_ 245 * 256_co_ 0_co_ 30_co_ this._scene)_sm_\n                break_sm_\n        }\n    }_sm_\n    return Editor_sm_\n}())_sm_\nwindow.addEventListener(_t_DOMContentLoaded_t__co_ function () {\n    // Create the game using the _t_renderCanvas_t_\n    var game _eq_ new Editor(_t_renderCanvas_t_)_sm_\n    // Create the scene\n    game.createScene()_sm_\n    // start animation\n    game.animate()_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-07T23:49:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo it would not_co_ sounds like a scope issue.  I am at a wedding getting drunk right now so yeah... sorry I can_t_t be more help at this moment but if no one else jumps on this I_t_ll help by tommrow.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut r undefined I can guarantee is a variable in the constructor is not being referenced correctly. Most likely the scene.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-08T01:47:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPlease try with babylon.max.js to get a better error message. Try also without websocket just in case\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]