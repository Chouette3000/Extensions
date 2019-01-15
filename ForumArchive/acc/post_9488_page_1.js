[{"Owner":"joshcamas","Date":"2014-09-26T23:02:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello guys!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve been working on a project that works as a terrain editor. One large problem however_co_ is editing the textures in real time - aka texture painting._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is this possible in the browser? Is there any code somewhere that has this working at all?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-28T18:01:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can use DynamicTexture for that_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var texture _eq_ new BABYLON.DynamicTexture(_qt_dynamic texture_qt__co_ 512_co_ scene_co_ true)_sm_texture.hasAlpha _eq_ true_sm_var textureContext _eq_ texture.getContext()_sm_var size _eq_ texture.getSize()_sm_var text _eq_ _qt_Hey I can write text on my texture!!_qt__sm_textureContext.clearRect(0_co_ 0_co_ size.width_co_ size.height)_sm_textureContext.font _eq_ _qt_bold 120px Calibri_qt__sm_var textSize _eq_ textureContext.measureText(text)_sm_textureContext.fillStyle _eq_ _qt_white_qt__sm_textureContext.fillText(text_co_ (size.width - textSize.width) / 2_co_ (size.height - 120) / 2)_sm_texture.update()_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-28T20:51:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_oh_co_ sweet! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_ Hmmmm...._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How does one use this_co_ other than drawing text? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT 2_dd_ OHHHH the texture is like a canvas? So you can draw images like a canvas!? If so_co_ that_t_s amazing - I once worked on a 2D Javascript engine! Reuse code time! Huzzah!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I load a image using the assets manager_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this.binaryTask _eq_ Game.assetsManager.addBinaryFileTask(_qt_binary task_qt__co_ _qt_../Assets/map.png_qt_)_sm_this.onSuccess _eq_ function (task) {\tthis.testImage _eq_ task.data_sm_}_lt_/pre_gt__lt_p_gt_And then_co_ after everything is loaded_co_ use the drawImage() function on it_t_s context_co_ it gives this error_dd_ _qt_Uncaught TypeError_dd_ Failed to execute _t_drawImage_t_ on _t_CanvasRenderingContext2D_t__dd_ No function was found that matched the signature provided. _qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Is task.data a image_co_ or not?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-29T15:44:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes you can use everything you can do on a 2d Canvas _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Using addBinaryFileTask returns an typed array and not an image_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-29T17:07:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_With the very last version_co_ you can now do this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this.binaryTask _eq_ Game.assetsManager.addImageTask(_qt_image task_qt__co_ _qt_../Assets/map.png_qt_)_sm_this.onSuccess _eq_ function (task) {\tthis.testImage _eq_ task.image_sm_}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-29T23:16:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmmm...._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I can_t_t seem to get it working_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var imageTask _eq_ Game.assetsManager.addImageTask(_qt_image task_qt__co_ _qt_../Assets/map.png_qt_)_sm_imageTask.onSuccess _eq_ function (task) {\tthis.testImage _eq_ task.image_sm_\tconsole.log(_qt_worked!_qt_)_sm_}\t\timageTask.onError _eq_ function (task) {\tconsole.log(_qt_error_qt_)_sm_}_lt_/pre_gt__lt_p_gt_Nothing gets logged! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ one nice feature for the assetsmanager could be if there is nothing to load just run onFinish()_lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-29T23:35:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oups...I must be tired _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Bug fixed_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-09-29T23:49:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ahhhh thanks so much!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]