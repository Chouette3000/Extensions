[{"Owner":"Pryme8","Date":"2018-08-29T20:38:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo to what extent does disposing the mesh_co_ clean up the entities that may be initialized under it like a non shared material or the texture used by that material?_lt_br /_gt_\n\t_lt_br /_gt_\n\tI know if there is a physicsImposter_co_ you need to dipose of it before the mesh... but how much other stuff needs to be cleaned up?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-29T20:56:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCalling mesh.dispose() will automatically dispose the children but not attached materials (unless you set the 2nd parameter to true)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.ts#L1811_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.mesh.ts#L1811_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe dispose will remove_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Geometry\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- observables\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- instances\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- actionmanagers\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- physicsImpostor (no need to dispose it beforehand_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.ts#L1542_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.ts#L1542_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- submeshes\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- selection octrees\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-08-29T21:14:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIve come into the situation where the physicsImposter does not_co_ is that because I sometimes name it body?_lt_br /_gt_\n\t_lt_br /_gt_\n\tI figured the dispose recursively goes through the variables assigned to the mesh and checks for a dispose method.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-29T21:39:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you need to first dispose the impostor then we have a bug _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-08-29T22:12:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thmm the scene where it happens is pretty complex... not sure if I could recreate it in a PG.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-08-30T08:01:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor any mesh_co_ if I don_t_t dispose of everything including materials and bounding meshes/impostors_co_ then they haven_t_t disposed from my browser memory. I wish I didn_t_t have to add so many extra lines of code_co_ but otherwise_co_ I see memory remnants.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-08-30T15:09:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmf_co_ I think we might have a bug then... ffuuuuuuu that means I gotta try to recreate this...  Ok then give me a while here and Ill put together a structure that at least displays this behavior with the physicsBodies\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-30T16:32:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ we should not_co_ please send a repro in the PG so I can fix it\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-08-30T21:18:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s old habit from a few versions back. Are you saying that disposing of a single mesh also disposes of all attributes of the mesh including materials_co_ textures_co_ shaders_co_ etc? We_t_re not talking scene dispose. But if mesh dispose works this way_co_ then what about shared attributes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-31T15:48:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can force the mesh to dispose its children as well as its material and textures_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.mesh#dispose_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/api/classes/babylon.mesh#dispose_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]