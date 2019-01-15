[{"Owner":"saldukoo","Date":"2016-03-08T10:48:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello. I have a rigged and UV mapped model in blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using the addon to export .babylon files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see the horrible results below (from blender to browser). I noticed that the animation/mesh are deformed. Also the material has specular(?) lightning_co_ i don_t_t want that. What to do?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ fixed the material issue by setting light.specular _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_ The mesh still looks wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_p2.png.83f6e9f61b2e4d8adfdeb80b5cc028b3._qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_6700_qt_ data-unique_eq__qt_rw1yc0hp0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_03/p2.png.83f6e9f61b2e4d8adfdeb80b5cc028b3.png_qt__gt__lt_img alt_eq__qt_p1.png.d12f2edb9ec7230c07ac10016b43ac5e._qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_6699_qt_ data-unique_eq__qt_zn481e6jm_qt_ height_eq__qt_432_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_03/p1.png.d12f2edb9ec7230c07ac10016b43ac5e.png_qt_ width_eq__qt_250_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIm using this\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_/assets/game/imports/_qt__co_ _qt_plr03.babylon_qt__co_ scene_co_ function (newMeshes_co_ particleSystems_co_ skeletons) { \n    ...\n    newMeshes[0].material.diffuseTexture _eq_ new BABYLON.Texture(_qt_/assets/game/imports/player.png_qt__co_ scene)_sm_ // UV map\n    ...\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd this\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.beginAnimation(player.animation_co_ 0_co_ 100_co_ false_co_ player.speed * 70)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-03-08T15:30:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcheck a flat normal i think that is for your mesh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-08T19:33:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou need to export your mesh with flat support on (or you can also force it after load using this_dd__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Mesh#converttoflatshadedmesh-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/Mesh#converttoflatshadedmesh-rarr-void_lt_/a_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"saldukoo","Date":"2016-03-09T15:05:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the support.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI managed to solve the problem by resetting any scaling in object mode (alt+S).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-10T23:58:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSounds good!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]