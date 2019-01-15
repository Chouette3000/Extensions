[{"Owner":"Dreik","Date":"2018-08-20T06:44:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI encountered really weird situation with texture_t_s property isBlocking. At start of the program everything works well but after I dispose enginge_co_ scene...well everything and I start over and try to create texture again the property _isBlocking is always true so none of the meshes using that texture doesn_t_t render. How does this property work_co_ when does the engine should change this property to false ? (Texture constructor sets it to true).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-20T09:08:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_isBlocking is always true on texture expect if you manually put it to false._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_isBlocking is used to prevent materials  to render during the download of textures. when set to true a default (0_co_0_co_0_co_0) texture is used while a texture download._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_It needs to be used pretty cautiously as the visual result might not be the one looked after._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_This should not impact anything with your dispose case would be cool to have more info about your repro._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dreik","Date":"2018-08-20T10:03:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo how can anything with diffuseTexture be ever rendered if isBlocking is always true?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at the function here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.standardMaterial.ts#L590_qt_ rel_eq__qt_external nofollow_qt__gt_Babylon Standard Material_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis will always return fals resulting in failing to render any mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-20T10:37:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthe function is isReadyOrNotBlocking_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt either checks for the flag to render before the texture has been loaded or for the fact that the texture is ready (fully downloaded and uploaded to the gpu).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the entire goal of isBlocking prevent to render if not ready when flagged has true.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dreik","Date":"2018-08-20T10:40:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo as I said if _isBlocking is set to true nothing will render right?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-20T11:09:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tno_co_ nothing renders only if the texture is not ready so during download time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce the texture is ready everything starts rendering.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-20T11:19:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is what the function checks_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_public_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ isReadyOrNotBlocking()_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ boolean {_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_return_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_!_lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_.isBlocking _lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_||_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_.isReady()_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_}_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_So either not blocking or texture being ready (meaning downloaded and uploaded to the gpu)._lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dreik","Date":"2018-08-20T11:40:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok I fixed my bug... thanks for help\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]