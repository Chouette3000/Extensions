[{"Owner":"Dad72","Date":"2015-07-27T20:46:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_On the site I can not find the demo _qt_Editor_qt_ in the section FEATURES TESTS_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and since the latest version of Babylon_co_ this no longer works._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_switchObjects[nameObjetSelected].vecDistanceCameraMesh _eq_ switchObjects[nameObjetSelected].pickedPoint.subtract(switchObjects[nameObjetSelected].camera.position)_sm__lt_/pre_gt__lt_div_gt__lt_strong_gt_subtract()_lt_/strong_gt_ this tells me that is not a function. it always works before. I think there must be a bug._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Thank You_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-07-27T20:51:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_We_t_ve removed it. It was written a long time ago and didn_t_t reach our quality bar. It also needed too much rewrite to be compatible with out last versions._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-07-27T20:54:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh ok. are you planning to rewrite similar functionality?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edite_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_fixe the problem_dd__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var operation _eq_ new BABYLON.Vector3(parseFloat(switchObjects[nameObjetSelected].pickedPoint.x)_co_ parseFloat(switchObjects[nameObjetSelected].pickedPoint.y)_co_ parseFloat(switchObjects[nameObjetSelected].pickedPoint.z))_sm_switchObjects[nameObjetSelected].vecDistanceCameraMesh _eq_ operation.subtract(switchObjects[nameObjetSelected].camera.position)_sm__lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]