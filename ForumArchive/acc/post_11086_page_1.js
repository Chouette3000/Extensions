[{"Owner":"Xeonzinc","Date":"2014-12-15T19:22:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m having a lot of fun working with the shaders_co_ the tutorials around here are great! I_t_m stuck what I_t_m hoping is a simple problem_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_• I have a _lt_strong_gt_X_lt_/strong_gt_ number of meshes (all the same)_co_ but each also contains a variable (say an integer from 1-100)_lt_/p_gt__lt_p_gt_• Currently i can create _lt_strong_gt_X _lt_/strong_gt_versions of the material (passing the variable in the material constructor) - which then displays the texture differently on each object_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_• I_t_m trying to create a single material which can take a property of the mesh it_t_s applied to (and therefore only ever need to create one version of the material instead of _lt_strong_gt_X_lt_/strong_gt_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I imagine this must be possible as the shader is already getting the position etc... of the mesh it is applied to_co_ I just want to access another single variable_co_ but have no idea how!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-12-15T19:41:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s a good question actually!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can either inherit from ShaderMaterial and redefine the bind function to add your own code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I_t_m thinking about adding a callback to allow you to do this easily like shaderMaterial.onBind _eq_ ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-12-15T19:44:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I added a material.onBind callback_lt_/p_gt__lt_p_gt_You will be able to do_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_myMaterial.bind _eq_ function(mat) {_lt_/p_gt__lt_p_gt_mat.getEffect().setColor3(..._lt_/p_gt__lt_p_gt_}_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FreeFrags","Date":"2014-12-18T14:42:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Maybe a noob question but whats the difference between the solution above and using_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_shadedMaterial.setFloat(_qt_myVar_qt__co_ 1.0)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and defining this in your vertex shader_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_uniform float myVar_sm__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-12-18T18:01:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Both work for me_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]