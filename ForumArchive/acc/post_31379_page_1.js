[{"Owner":"thrice","Date":"2017-06-30T22:06:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can_t_t reproduce it in a playground_co_ so I am wondering if there is another setting_co_ i.e. on the material itself that I am setting which could be contributing to the problem_co_ or some other scene configuration that I am missing or whatever_co_ anyways_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTrying to set a bumpTexture on a material throws an error_co_ with a huge chunk of WebGL code. Screenshot is easiest to see _lt_a href_eq__qt_https_dd_//www.dropbox.com/s/c9ik0kmwl3zlscj/Screenshot%202017-06-30%2015.48.15.png?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/c9ik0kmwl3zlscj/Screenshot 2017-06-30 15.48.15.png?dl_eq_0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFull error message_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//gist.github.com/jasonayre/3f5aea25c5e09540f9e00f426211d808_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gist.github.com/jasonayre/3f5aea25c5e09540f9e00f426211d808_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBabylon version in my project (a couple of weeks agoish_co_ maybe a few weeks ago?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbabylonjs@^3.0.2-beta_dd__lt_br /_gt_\n\t  version _qt_3.0.2-beta_qt__lt_br /_gt_\n\t  resolved _qt_https_dd_//registry.yarnpkg.com/babylonjs/-/babylonjs-3.0.2-beta.tgz#a8fef0e6ee32ced2e158f00de6aa740e874f146a_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdiffuseTexture with the same asset works fine_co_ bumpTexture blows up_co_ i.e.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    this.plane.babylon.material.bumpTexture _eq_ BABYLON.Texture.CreateFromBase64String(this.backgroundNormalMap()_co_ this.background_normal_map_image_key)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   ^throws error_lt_br /_gt_\n\t    this.plane.babylon.material.diffuseTexture _eq_ BABYLON.Texture.CreateFromBase64String(this.backgroundNormalMap()_co_ this.background_normal_map_image_key)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   ^no error\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-- any ideas as to what could be happening here?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-06-30T22:36:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh also_co_ at the end of the error which throws the huge WebGL code block there is another error_co_ not sure if this is helps identify or not\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_client.js_dd_111264 BJS - [16_dd_34_dd_06]_dd_ Error_dd_ WARNING_dd_ 0_dd_81_dd_ _t_\n_t_ _dd_ extension directive should occur before any non-preprocessor tokens \nERROR_dd_ 0_dd_743_dd_ _t_NORMALXYSCALE_t_ _dd_ unexpected token after conditional expression \nt._ErrorEnabled @ client.js_dd_111264Effect._prepareEffect @ client.js_dd_111274(anonymous function) @ client.js_dd_111274Effect._processShaderConversion @ client.js_dd_111274(anonymous function) @ client.js_dd_111274Effect._processIncludes @ client.js_dd_111274(anonymous function) @ client.js_dd_111274Effect._loadFragmentShader @ client.js_dd_111274(anonymous function) @ client.js_dd_111274Effect._processShaderConversion @ client.js_dd_111274(anonymous function) @ client.js_dd_111274Effect._processIncludes @ client.js_dd_111274(anonymous function) @ client.js_dd_111274Effect._loadVertexShader @ client.js_dd_111274Effect @ client.js_dd_111274n.createEffect @ client.js_dd_111266r.isReadyForSubMesh @ client.js_dd_111277r.render @ client.js_dd_111273t.render @ client.js_dd_111274t.renderUnsorted @ client.js_dd_111270t.render @ client.js_dd_111269t.render @ client.js_dd_111269r._renderForCamera @ client.js_dd_111271r._processSubCameras @ client.js_dd_111271r.render @ client.js_dd_111271(anonymous function) @ client.js_dd_134915n._renderLoop @ client.js_dd_111265\nclient.js_dd_111264 BJS - [16_dd_34_dd_06]_dd_ Trying next fallback._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-07-01T14:48:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tLooks like upgrading to babylonjs@3.0.4-beta fixed it\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-07-01T17:13:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell. I had the same issue about ~a week ago_co_ only with 2 imported models and their default materials.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis issue isn_t_t present now_co_ after testing the nightly preview build. So someone must have fixed a mistake along the way _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]