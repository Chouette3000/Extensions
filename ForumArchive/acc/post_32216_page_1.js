[{"Owner":"FunFetched","Date":"2017-08-07T21:04:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there! I_t_ve been busy working on a modification to the Blender exporter and Babylon in an effort to support smooth interpolation natively_co_ based on FCurve handles_co_ as opposed to having to bake every frame of every animation prior to export_co_ which can be rather time and space-consuming.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo far_co_ I have a system which works fairly well_co_ feeding the _qt_right handle_qt_ offset of each keyframe to Babylon which then packs that information into the inTangent and outTangent properties of each imported keyframe. This has smoothed out my animations considerably_co_ but it_t_s not a 1_dd_1 reproduction_co_ and I feel like I could do more. inTangent and outTangent data is currently fed to Babylon_t_s Hermite interpolation equation_co_ which is certainly better than the Linear default_co_ but still not as sweet as it would be if it used Bezier just as Blender does. Unfortunately_co_ my Bezier kung-fu is weak_co_ and making the translation from X/Y handle coordinates to Bezier coordinates for each axis is confusing me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ in summary_co_ I_t_m now able to import the key and handle coordinates for each frame in Blender animations. I_t_m just having some trouble figuring out how to translate those into a contiguous Bezier curve at the time of animation. I_t_m familiar with the vector3InterpolateFunctionWithTangents() function_co_ but inTangent and outTangent data doesn_t_t seem to be enough for a full Bezier calculation. I could add more easily enough_sm_ I_t_m just a little fuzzy on how to go about it_co_ and my experiments so far have resulted in some pretty crazy animations. Any thoughts? I would love to be able to wrap this up into a nice and tidy pull request.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]