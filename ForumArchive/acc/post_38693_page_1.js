[{"Owner":"inteja","Date":"2018-07-07T05:47:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI read in another thread that BabylonJS intelligently handles multiple uses of the one texture for optimal performance i.e. internally if the texture path is the same then no extra vram is used for subsequent new textures with the same path.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI suspect I_t_ve been overcomplicating things up until now but here_t_s some related questions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Question 1_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I load my textures with AssetsManager like so_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var textureTask _eq_ assetsManager.addTextureTask(_qt_my-texture_qt__co_ _qt_./path/to/my-texture.jpg_qt_)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAre the following methods of applying the textures equivalent behind the scenes (i.e. neither uses more VRAM)?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Method 1\ntextureTask.onSuccess _eq_ function(task) {\n  material.diffuseTexture _eq_ task.texture_sm_\n}\n\n// Method 2 - elsewhere in application after assetsManager.onFinish() has been called.\nmaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_./path/to/my-texture.jpg_qt__co_ scene)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Question 2_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I_t_ve been doing up until now is assigning loaded assets to an assets array which I then pass around to various objects to use what they need like so_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_textureTask.onSuccess _eq_ function(task) {\n\n  assets[task.name] _eq_ task.texture_sm_\n}\n\n// Stuff ...\n\nvar myCustomObject _eq_ new CustomObject(assets)_sm_\n\n// In CustomObject ...\n\nmaterial.diffuseTexture _eq_ assets[_qt_my-texture_qt_].clone()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe reason for the .clone() is when I need different uv scale and offset per instance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf my method 1 and 2 are functionally equivalent and don_t_t result in any additional vram usage or performance hit then I_t_m wasting my time passing around an array of loaded assets when I could simply instantiate a new texture with the same path that I know has already been loaded by AssetsManager.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan anyone shed some light on this? How do other people manage this efficiently?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2018-07-07T07:03:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnother related question _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_If I load a .babylon of .gltf model using the AssetsManager_co_ does the AssetsManager consider the asset fully loaded when that file is loaded _lt_strong_gt_or_lt_/strong_gt_ when that file and _lt_strong_gt_all textures etc referenced by that file_lt_/strong_gt_ are loaded?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-07-07T07:08:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22801-inteja/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22801_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22801-inteja/_qt_ rel_eq__qt__qt__gt_@inteja_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour approach might work_co_ however I_t_ve had issues with your specific structure before. I generally use _lt_span style_eq__qt_background-color_dd_#fbfbfb_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_loader.onFinish (loader is variable for array) to write the function as in the previous post_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed1768976967_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/38587-is-there-a-way-to-use-the-babylonassetsmanager-to-load-textures/?do_eq_embed_qt_ style_eq__qt_height_dd_221px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tI use this call to set material and other attributes if needed (as in creating a GUI). However_co_ I wrap my scene creation in a separate function and call the scene function from _lt_span style_eq__qt_background-color_dd_rgb(251_co_251_co_251)_sm__qt__gt_loader.onFinish _eq_ function() to make everything much clearer to debug. I hope this makes sense. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_rgb(251_co_251_co_251)_sm__qt__gt_DB_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2018-07-07T07:23:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes my experimentation and questions above were prompted by that post - it inspired me to try out a few different approaches including what you_t_ve suggested. My current project has a pretty deep structure and it_t_s not that convenient to apply all assets in the one loader.onFinish() call at the same time. My application is more dynamic than that_co_ which is why I was curious about whether my approach of passing an array of assets around makes any sense given it seems like I could just do new BABYLON.Texture(path_co_ scene) at any point in time after all assets have been loaded and in theory it shouldn_t_t impact memory usage or performance ... maybe.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-07-07T14:11:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22801-inteja/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22801_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22801-inteja/_qt_ rel_eq__qt__qt__gt_@inteja_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou might want to consider you_t_re above approach with one additional function. I don_t_t know if this makes sense for your needs_co_ but I often manage asset memory in my apps by using the asset manager in the way you_t_ve clearly grasp_sm_ but call a separate function to clear out all memory in the asset array by utilizing _t_dispose_t_ as this clears the assets from memory. Perhaps this is something you_t_ve considered? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_rgb(251_co_251_co_251)_sm__qt__gt_DB_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-09T17:55:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1. Yes they are equivalent_co_ the engine is keeping a cache for you\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. True. There is no need for that. The Engine caches an array of InternalTexture so all the VRAM is safe _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_3. The meshAssetTask consider the task completed when the file is loaded and not when the textures are loaded_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2018-07-09T22:18:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood information to know.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]