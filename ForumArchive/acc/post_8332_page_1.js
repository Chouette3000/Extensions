[{"Owner":"reddozen","Date":"2014-08-04T23:01:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is there a way to render a scene to a texture built into babylon?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Kinda like this_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//learningwebgl.com/blog/?p_eq_1786_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//learningwebgl.com/blog/?p_eq_1786_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"burbonvagin","Date":"2014-08-05T04:26:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_maybe a mirror texture? i don_t_t think the mirror plane has to be the same as the mesh that the texture is applied to. This might be nonsense because I don_t_t completely understand mirror textures. Tutorial link_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/14-Advanced-Texturing_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/14-Advanced-Texturing_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-08-05T12:05:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For the moment I had no need for render to texture in babylon_co_ so I_t_m not able to answer you precisely_co_ but I know renderTargetTexture exists_co_ I_t_m pretty sure this could do the job._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24711_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24711_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(you can easily find related post in the forum)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-08-05T12:07:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BTW_co_ mirror texture would_t_n be a good solution_co_ it doesn_t_t do exactly what needed_co_ and it_t_s a lot CPU consuming_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-08-05T21:01:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I guess the better question is can I push things just to the renderbuffer for preprocessing things like depth and visible color mapping_co_ or does this have to be completely done outside of Babylon?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-08-06T01:19:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can do that easily with a renderTexture_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var renderTexture _eq_ new BABYLON.RenderTargetTexture(_qt_render_qt__co_ 512_co_ scene_co_ true)_sm_scene.customRenderTargets.push(renderTexture)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-08-06T13:39:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Awesome_co_ I_t_ll play with this tonight. I_t_ll let you know if I run into anything weird._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-08-06T13:57:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here is a playground sample with it _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#QOO0F_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#QOO0F_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The magic happens when you move the camera ! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2014-08-06T15:01:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_very cool. I wont be displaying the texture though. I_t_m going to use it to limit what renders in the scene. Even with octrees on etc_co_ it_t_s still loading models that aren_t_t actually visible to the camera. Like stuff that is inside buildings etc. That being the case_co_ I give up on the octree stuff_co_ and am going to try another route._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll post my results as this will also be used for level of detail through depth mapping._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]