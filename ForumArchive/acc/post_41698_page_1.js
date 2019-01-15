[{"Owner":"CorayThan","Date":"2018-12-04T22:51:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m trying to create a 2D plane with the normal alpha of the PNG I_t_m applying to it as a texture. The PNG as a gradient. I can get the mesh plane to use alpha_co_ but it makes the image into a solid block of color instead of using the normal alpha. How do I fix this so it uses the alpha gradient?_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1U5KWI_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1U5KWI_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-12-05T09:47:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27701-coraythan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27701_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27701-coraythan/_qt_ rel_eq__qt__qt__gt_@CorayThan_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thttps_dd_//www.babylonjs-playground.com/#1U5KWI#1\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"CorayThan","Date":"2018-12-05T17:33:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Nasimi! Unfortunately I can_t_t get it to work in my project. I_t_m using Typescript and the _qt_CustomMaterial_qt_ constructor doesn_t_t resolve. Even when I tried ignoring the errors it apparently isn_t_t a constructor_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Uncaught TypeError_dd_ BABYLON.CustomMaterial is not a constructor_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI switched the playground to be the same version of Babylon I_t_m using too_co_ so not sure what_t_s going on there.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-12-05T18:45:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou need to add a reference to the material library_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]