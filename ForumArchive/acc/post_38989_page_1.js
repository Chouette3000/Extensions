[{"Owner":"Pryme8","Date":"2018-07-20T16:13:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo most mesh builder methods require the mesh the be double-side in order to define a custom UV with the constructors.  Is there a way to do that on initialization without doubleside turned on?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-20T16:39:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-07-20T17:46:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhy do think the mesh must be double-sided ? I can_t_t remember this limitation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually the optional parameter called _lt_em_gt_customUV_lt_/em_gt_ exists only for the ribbon (and maybe ribbon based shapes_co_ I just can_t_t remember) and can be used for any number of sides.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe parameters frontUV and backUV work for double-sided meshes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-20T17:59:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCasue its very specific and in bold in the docs that it is a limit.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-07-20T19:16:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOOopps_co_ I just read the DK_t_s ping and not the post title. You were speaking about frontUVs and backUVs_co_ not about customUV (that_t_s not even documented_co_ tsss). I read too fast ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually_co_ you_t_re right the frontUVs parameter (as the backUVs one) only works for double-sided meshes for now_co_ knowing that people usually use rather the texture uOffset and uScale properties instead when dealing with one side only.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat said_co_ maybe the frontUVs parameter could also be used for single-sided meshes ... this needs to be implemented (I can_t_t before next september_co_ sorry)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEverything happens here _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.vertexData.ts#L2750_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.vertexData.ts#L2750_lt_/a_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDITED] the current documentation about frontUVs and backUVs _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/frontandbackuv_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/frontandbackuv_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-20T19:21:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI bet I can fix it for sure_co_ thanks._lt_br /_gt_\n\t_lt_br /_gt_\n\tAnd Im a dummy I forgot about uScale_co_ vScale.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]