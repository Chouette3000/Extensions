[{"Owner":"Lightnet","Date":"2016-11-26T05:12:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe animation plays but it reset the position to zero when the play animation. using the assets manager loader. When I try to override position when it play it reset to zero that doesn_t_t work. I wonder if it a bug. I wanted to clone the mesh without need to clone the animation is kind of long way round.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tversion 2.4.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.beginAnimation(this.enemies[0].mesh_co_ 40_co_ 60_co_ true_co_ 0.5)_sm_ _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_for(var i _eq_ 0 _sm_ i &lt_sm_ this.meshes.length_sm_i++){\n            if(this.meshes[i].name _eq__eq_ _name){\n                var mid _eq_ uuid()_sm_//random id generator\n                model _eq_ this.meshes[i].clone(mid_co_null_co_true)_sm_\n                model.skeleton _eq_ this.meshes[i].skeleton.clone()_sm_\n                break_sm_\n            }\n        }\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAny idea?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-11-28T09:08:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24527-lightnet/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24527_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24527-lightnet/_qt_ rel_eq__qt__qt__gt_@Lightnet_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twould you be able to reproduce this in the playground? Have you tried 2.5?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-11-28T10:29:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tArray -1\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-11-28T12:51:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tEhhh.... what?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Lightnet","Date":"2016-11-28T15:19:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_scene.beginAnimation(this.enemies[0].mesh.skeleton_co_ 40_co_ 60_co_ true_co_ 0.5)_sm_ _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tManage to get it working. It need some different way to make thing work than examples. To tell them or it way it set animation to position to zero. When copying the mesh. Then chose clone mesh(reset to zero position) or mesh.skeleton.(play current position)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]