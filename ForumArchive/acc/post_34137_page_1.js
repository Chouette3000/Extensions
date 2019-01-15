[{"Owner":"BlackMojito","Date":"2017-11-21T08:08:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve looked into the source code of Texture and I did not find any code which allowed loading texture directly in sRGB. I could not find them in the default.fragment.fx either something which handled the linearity. The only thing I_t_ve seen was converting the output to linear space if applying image processing afterwards. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother question is that do we have a built-in gamma correction effect? I know it_t_s simple to implement but I_t_d rather use the built-in one if existing _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBTW_co_ should I still apply the gamma correction if I apply tone mapping before it? I am not familiar with the tone mappers and not sure if gamma correction has already been baked in them...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-11-21T08:45:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI researched this a little bit_co_ but could not find the place where srgb-&gt_sm_linear and linear-&gt_sm_srgb display space conversions happen in Babylon._lt_br /_gt_\n\tMaybe it is somewhere_co_ maybe all is done in SRGB display space (which kind of works_co_ but not correct)_lt_br /_gt__lt_br /_gt_\n\tin webGL 2_co_ there is a way to load textures with automatic srgb-&gt_sm_ linear correction like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_gl.texImage2D(\n    gl.TEXTURE_2D_co_\n    0_co_ // Level of details\n    gl.SRGB8_co_ // Format\n    gl.RGB_co_\n    gl.UNSIGNED_BYTE_co_ // Size of each channel\n    image\n)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the texture creation_co_ babylon do not do this automatic correction for sure_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/8f752185e4cfd962ebf687dd25bb4f1ebaa32a46/src/Engine/babylon.engine.ts#L3112_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/8f752185e4cfd962ebf687dd25bb4f1ebaa32a46/src/Engine/babylon.engine.ts#L3112_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let internalFormat _eq_ format ? this._getInternalFormat(format) _dd_ ((extension _eq__eq__eq_ _qt_.jpg_qt_) ? gl.RGB _dd_ gl.RGBA)_sm_\n\ngl.texImage2D(gl.TEXTURE_2D_co_ 0_co_ internalFormat_co_ internalFormat_co_ gl.UNSIGNED_BYTE_co_ img)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tBut elsewhere maybe?!_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-11-21T09:42:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tA little more research_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#T23QTP%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#T23QTP#6_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tThis shows a png image (which is in SRGB as nearly all other png and jpg images on the web)_lt_br /_gt_\n\tThe browser loads and correctly shows this on the upper right._lt_br /_gt_\n\tIt is displayed correctly_co_ because the 0_co_255 rgb values (stripes) look the same luminance as the 187 (middle grey) value. (In linear_co_ 128 would be the middle grey value)_lt_br /_gt__lt_br /_gt_\n\tOn the boxes_co_ the same texture is loaded on to a emissive texture (black diffuse) and a diffuse texture._lt_br /_gt_\n\tStandard materials._lt_br /_gt_\n\tThe emissive texture should look correctly too IF the texture is loaded from SRGB_co_ corrected to linear RGB values_co_ light calculated (no change because it is an emissive texture)_co_ and then corrected back to SRGB (display space)_lt_br /_gt_\n\tIt should look correctly without SRGB correction at all_co_ because the input is srgb and the outout is srgb too._lt_br /_gt__lt_br /_gt_\n\tEdited_dd_ It looks correctly now with good monitor settings._lt_br /_gt_\n\tSo_co_ it kind of works without SRGB/linear and linear/SRGB corection_co_ so I think everything is done in display space._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-11-21T11:07:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_195933_qt_ data-ipsquote-contentid_eq__qt_34137_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1511257376_qt_ data-ipsquote-userid_eq__qt_7708_qt_ data-ipsquote-username_eq__qt_BitOfGold_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ BitOfGold said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tA little more research_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#T23QTP%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#T23QTP#6_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t\t\tThis shows a png image (which is in SRGB as nearly all other png and jpg images on the web)_lt_br /_gt_\n\t\t\tThe browser loads and correctly shows this on the upper right._lt_br /_gt_\n\t\t\tIt is displayed correctly_co_ because the 0_co_255 rgb values (stripes) look the same luminance as the 187 (middle grey) value. (In linear_co_ 128 would be the middle grey value)_lt_br /_gt__lt_br /_gt_\n\t\t\tOn the boxes_co_ the same texture is loaded on to a emissive texture (black diffuse) and a diffuse texture._lt_br /_gt_\n\t\t\tStandard materials._lt_br /_gt_\n\t\t\tThe emissive texture should look correctly too IF the texture is loaded from SRGB_co_ corrected to linear RGB values_co_ light calculated (no change because it is an emissive texture)_co_ and then corrected back to SRGB (display space)_lt_br /_gt_\n\t\t\tIt should look correctly without SRGB correction at all_co_ because the input is srgb and the outout is srgb too._lt_br /_gt__lt_br /_gt_\n\t\t\tEdited_dd_ It looks correctly now with good monitor settings._lt_br /_gt_\n\t\t\tSo_co_ it kind of works without SRGB/linear and linear/SRGB corection_co_ so I think everything is done in display space._lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYeah but it is quite weird though as there is no _qt_pow 2.2_qt_ in the StandardMaterial_t_s shader either. Where is the correction done then? _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-11-21T12:17:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think no correction done in standard material_co_ at all._lt_br /_gt_\n\tThat_t_s not really a problem_co_ theese are only values. SRGB in_co_ SRGB out _eq_ works._lt_br /_gt__lt_br /_gt_\n\tYou have to convert and output srgb value in every shader material_co_ that_t_s all._lt_br /_gt_\n\tAnd I don_t_t really know if this works in PBR - but I think it_t_s working_co_ most workflows output SRGB maps._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-21T23:33:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCorrect_co_ In the standard no correction is applied and gamma to gamma workarounds it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the pbr material Most of the texture fetched will be converted to linear space before using in the equation and then converted back to gamma before display. As the texture sRGB is not available everywhere we do it manually to ensure a cross browser/device consistent result. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe function are available in the Helpers include. and the textures themselves have a flag isGamma helpfull to know that for instance the env hdr texture are stored in a linear way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-11-22T03:04:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_196029_qt_ data-ipsquote-contentid_eq__qt_34137_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1511307207_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCorrect_co_ In the standard no correction is applied and gamma to gamma workarounds it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIn the pbr material Most of the texture fetched will be converted to linear space before using in the equation and then converted back to gamma before display. As the texture sRGB is not available everywhere we do it manually to ensure a cross browser/device consistent result. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe function are available in the Helpers include. and the textures themselves have a flag isGamma helpfull to know that for instance the env hdr texture are stored in a linear way.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi Sebavan_co_ where can I find the _qt_then converted back to gamma before display_qt_ stuff?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-11-22T04:58:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is part of the imageProcessing which is applied in the PBR here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/ShadersInclude/imageProcessingFunctions.fx#L85_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/ShadersInclude/imageProcessingFunctions.fx#L85_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is in here because imageProcessing can be applied either during the main pass or through post process to increase perf.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]