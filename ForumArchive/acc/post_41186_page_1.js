[{"Owner":"TheSkrapper","Date":"2018-11-10T21:35:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(working better in Chrome than Safari)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_edit&gt_sm__lt_em_gt_ I have changed the background to white and it seems that the issue is not just the seems but that the transparent portions seem to show when viewed on edge._lt_/em_gt_&lt_sm_/edit&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m new to BabylonJS and have been working on different implementations of the Menger Sponge fractal to learn the framework.  I_t_m on my third implementation now which allows me to quickly generate an L4 Menger sponge using only 984 vertices!!!!  I accomplish this by using 81 planes in each dimension that have different parts of the Sierpinski carpet as materials. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m having issues with artifacts/seams where perpendicular planes are intersecting and I_t_m not sure where to go with it. (artifact may be the wrong term)  I_t_ve Googled but may not be using the best search terms.  I_t_ve tried re-creating my textures in case the images were off by a few pixels but that doesn_t_t seem to be the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMoving the camera show the artifacts/seams blinking in and out_co_ specifically around the hollow center.  It makes it look like it is assembled with small blocks but it isn_t_t.  That is where the planes intersect.  At certain angles with certain lighting they seem to disappear which leads me to believe they are artifact related and not due to the texture images. _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#MFTLRX%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#MFTLRX#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy goal is to make this into a single multi-material object that I can instance to get really intricate sponges utilizing very little resources.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your time and any ideas/advice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-mc\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-11T03:00:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and first of all congrats for your great code. This is really cool to see _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you try to make the planes overlap just a tiny bit? Just wondering if it is float precision issue or texture filtering issue\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TheSkrapper","Date":"2018-11-11T05:30:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the reply Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe planes are spaced from each other to simulate the edges of the boxes.   They only overlap/intersect perpendicularly.  Looking through the center is looking through 81*3 alpha textures which I think may be related to the problem.  I_t_m playing around with the material alpha types and rendering order options but it is all so new to me.  It really would be cool to solve the issue though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as float issues_co_  I_t_ve tried to design it so that each plane is on a whole number.  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-11-11T05:49:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot sure to understand well why you are using so many materials_co_  but I don_t_t know this fractal.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ you could build exactly the same with the same algo (but not the same mesh) by using a SPS instead of several planes and several textures.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/solid_particle_system_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/solid_particle_system_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust replace your planes by quad planar particles built from a plane model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust set all your different texture images in a single big image (texture atlas) and then set planar particle _lt_em_gt_uvs_lt_/em_gt_ property values to match the related texture in the big image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_ll get finally one mesh and one material_co_ so one draw call only.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TheSkrapper","Date":"2018-11-11T06:33:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the reply Jerome. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI definitely have too many materials because they were auto generated with an x_co_y_co_z loop.  Most of them repeat but I ran into this rendering issue first and haven_t_t taken the time to optimize them.  I will work on removing the repeated materials and it will probably drop to 10 or so.  Then I will map each layer to the correct material.  That was just the first basic programatic implementation for proof of concept.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for the particle idea.  I will look into that when I optimize my materials.  It almost sounds like dealing with sprites.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-12T16:13:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe seams seem to come from weird texture filtering but I even tried with no filter and I still can see them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou are sure that there is nothing weird on your texture alpha?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TheSkrapper","Date":"2018-11-12T23:54:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPossibly_co_ but I wouldn_t_t know why.  The textures are created by starting with an empty 2D canvas and only drawing rects where I need texture.  Maybe I need to actually fill the empty spaces with an actual alpa rect.  I will give that a shot.  Thanks for the idea.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TheSkrapper","Date":"2018-11-13T01:25:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI recreated the textures first filling the canvas with an actual full alpha rect before drawing on my other rects.  I also minimized my textures down to the 8 unique ones.  There still seems to be the problem but it might not be as bad????  I can_t_t tell. _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#MFTLRX%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#MFTLRX#12_lt_/a_gt_ . \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s also published with github pages and has the same problem which rules out any possible playground issues.  _lt_a href_eq__qt_https_dd_//mcoons.github.io/mengerplanes/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//mcoons.github.io/mengerplanes/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-13T02:52:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you have a way to reproduce it but with less planes (ideally 2)?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TheSkrapper","Date":"2018-11-13T03:31:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do believe the issue may have to do with the following code that I got from another issue/post that I can_t_t find it now_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#1e1e1e_sm_color_dd_#d4d4d4_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ convertToFlat _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_function_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_()_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_{_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_for_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_var_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ index _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#b5cea8_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt__sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ index _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ scene_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_textures_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_length_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt__sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ index_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_++)_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_{_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_scene_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_textures_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_[_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_index_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_]._lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_updateSamplingMode_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_Texture_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_NEAREST_SAMPLINGMODE_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_}_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_}_lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_scene_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_executeWhenReady_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_function_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_()_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_{_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_convertToFlat_lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_()_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#dcdcdc_sm__qt__gt_})_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tI used that code because my textures were being ??smoothed??  and not looking square but when that code is removed the alpha glitches seem to go away or at least minimize.  Although_co_ my textures get messed up again and are not square.  It also produces a similar boxed built look but that has to do with the smoothing I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo updating the sampling mode seems to mess with the alpha?  Using _lt_strong_gt_BABYLON.Texture.NEAREST_LINEAR_lt_/strong_gt_ seems to clean it up the most but there are still issues.  Does that point to anything?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#MFTLRX%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#MFTLRX#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try to get an example with less planes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-13T16:13:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes nearest means no texture filtering. Let_t_s see with a simpler sample _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TheSkrapper","Date":"2018-11-13T23:35:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve stripped things down.  Now you can only see the intersection problem which is now very minor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#MFTLRX%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#MFTLRX#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it is now just an issue where different texture pixels are occupying the same point and its a render ordering problem.  I_t_m not sure if there is a fix.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-14T00:10:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell the remaining issue is a depth precision issue\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I moved the vertical plane a bit there is no more problem_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#MFTLRX#13_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#MFTLRX#13_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]