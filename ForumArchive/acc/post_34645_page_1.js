[{"Owner":"Pierre Glibert","Date":"2017-12-19T14:39:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI read this about gltf _dd_ _lt_a href_eq__qt_https_dd_//pissang.github.io/qtek-model-viewer/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pissang.github.io/qtek-model-viewer/_lt_/a_gt_ and test it with _qt_Adam head _qt_ _dd_ _lt_a href_eq__qt_https_dd_//sketchfab.com/features/gltf_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//sketchfab.com/features/gltf_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe render system is the same than Sketchfab for post processes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s really cool because when there is no animations_co_ the engine calculate step by step a better render quality.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPost processes like ambiant occlusion look really great and not drop fps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis allow us to run scene with 60fps with animation and to return a beautiful image when all meshes are fixe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll post processes and shadows seem to be calculate with a rough noise at the beginning and with more precision at the end. ( It_t_s look like a trick to get more performance ...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I open this post to discuss about that and to see if it will be a great idea to add it in Babylon _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you think ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave a nice day !\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS _dd_ I ask this because I_t_m working on this _dd_ \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed8770616538_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/31108-assetmanager-sceneoptimizer-contribution/?do_eq_embed_qt_ style_eq__qt_height_dd_207px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-19T20:40:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! Keep in mind that Sketchfab is designed to be a great viewer. Babylon.js is designed to serve multiple purposes (including gaming and obviously viewing objects as well)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith that being said_co_ we can also offer similar experience_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- You can decide to turn off renderLoop when the image is static\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- You can also decide to enable high quality rendering with engine.setHardwareScalingLevel(0.5) before turning the render loop off\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Same thing with postprocess_dd_ you can add SSAO and then turn the render loop off\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]