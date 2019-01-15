[{"Owner":"JohnK","Date":"2015-11-13T11:35:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sometimes the shader I am creating will be given an image file to use as a texture sampler and sometimes it will not. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the shader when the image file is given I need the line_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_uniform sampler2D refTexture_sm__lt_/pre_gt__lt_p_gt_and in the main function a line along the lines of_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_float x _eq_ 0.5 * texture2D(refSampler_co_ uv).rgb.x_sm__lt_/pre_gt__lt_p_gt_and when no image file is given then_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_float x _eq_ 0.5 * position.x_lt_/pre_gt__lt_p_gt_From looking at the code in the samplers in the materialsLibrary I see there are some conditions on the uniforms such as_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_#if defined(SPOTLIGHT0) || defined(DIRLIGHT0)varying vec4 vPositionFromLight0_sm_uniform sampler2D shadowSampler0_sm_#elseuniform samplerCube shadowSampler0_sm_#endif_lt_/pre_gt__lt_p_gt_1. Is there a condition I can use for_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_#if ..................uniform sampler2D refTexture_sm_#endif_lt_/pre_gt__lt_p_gt_2. Is there a conditional statement within the main function I can use for_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_IF texture loaded    float x _eq_ 0.5 * texture2D(refSampler_co_ uv).rgb.x_sm_ELSE    float x _eq_ 0.5 * position.xENDIF_lt_/pre_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-11-13T12:18:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_maybe this will help _dd_ _lt_a href_eq__qt_http_dd_//www.shaderific.com/glsl-statements/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.shaderific.com/glsl-statements/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know GLSL_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2015-11-13T14:29:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think you can define a variable in your material.js file _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_like _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Material.prototype.isReady _eq_ function (mesh_co_ useInstances) {     if (texture loaded) {        defines.push(_qt_#define variable_name_qt_)_sm_     }}_lt_/pre_gt__lt_p_gt_and in you shader check _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_#ifdef variable_name    float x _eq_ 0.5 * texture2D(refSampler_co_ uv).rgb.x_sm_#else    float x _eq_ 0.5 * position.x_sm_#endif_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2015-11-13T14:55:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@jerome  &amp_sm_ @bulisor thanks for suggestions_co_ after  reading these and looking further at the sample files in the materialsLibrary I can see that I can define a public variable in the class defines in the typescript file which can be set as true if there is a texture file given - just got to work out how I actually do this and then use #ifdef in the shader file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More thinking to do yet._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]