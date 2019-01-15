[{"Owner":"Ericky14","Date":"2018-01-09T19:28:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is the best way to optimize mesh selection? Going by the babylonjs inspector_co_ it always takes around ~5ms with ~1200 meshes and over 10ms with ~2000 meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any way to disable it and don_t_t use it at all? I_t_m fine with always rendering every mesh as it doesn_t_t impact the performance as much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ using `alwaysSelectAsActiveMesh` on every mesh does not boot performance of mesh selection significantly.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-01-09T19:32:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tUsing an octree can be\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ericky14","Date":"2018-01-09T19:38:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOctree didn_t_t seem to boost the performance by a lot either... is the default octree settings good enough? I don_t_t know much about octrees and how it helps rendering.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-10T17:45:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tmarking all meshes as active will remove the need to do frustum clipping but it is not the only task done by the mesh selection\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou may want to also freeze your meshes with mesh.freezeWorldMatrix() which will remove the world matrix computation from the mesh selection task\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]