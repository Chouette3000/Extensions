[{"Owner":"yoric","Date":"2015-08-29T13:31:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Hi everyone_co__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_This looks pretty simple to do_co_ but i_t_m badly stuck._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I_t_d like to apply a texture to a cube imported from Blender._lt_/div_gt__lt_br_gt__lt_div_gt_But i get a colored cube without the texture effect._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Below is a link to my playground code_lt_/div_gt__lt_br_gt__lt_div_gt_(1 cube is from Blender_co_ 1 other cube is created with BabylonJS)_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I can_t_t figure out why the same material doesn_t_t have the same rendering._lt_/div_gt__lt_br_gt__lt_div_gt_Are those two cubes different kind of mesh object ?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt__lt_img src_eq__qt_http_dd_//s21.postimg.org/3v9kon1w7/Babylon_js_Playground.jpg_qt_ alt_eq__qt_Babylon_js_Playground.jpg_qt__gt__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Playground link _dd__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#IZR8L_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#IZR8L#1_lt_/a_gt__lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yoric","Date":"2015-08-29T14:46:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve just upgraded to _qt_io_export_babylon.py_qt_ version 3.0.4 (was using 1.8.2 until now)_co_ using Blender 2.75_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The rendering now looks different on the cube imported from Blender (texture still doesn_t_t show up though)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//s16.postimg.org/7kozt8w6t/Babylon_js_Playground.jpg_qt_ alt_eq__qt_Babylon_js_Playground.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Playground update _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#IZR8L%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#IZR8L#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cube export log _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        Exporter version_dd_ 3.0.4_co_ Blender version_dd_ 2.75 (sub 0)_eq__eq__eq__eq__eq__eq__eq__eq__eq_ Conversion from Blender to Babylon.js _eq__eq__eq__eq__eq__eq__eq__eq__eq_        Python World class constructor completed        processing begun of mesh_dd_  Cube                processing begun of Standard material_dd_  Material                num positions      _dd_  36                num normals        _dd_  36                num uvs            _dd_  0                num uvs2           _dd_  0                num colors         _dd_  0                num indices        _dd_  36        processing begun of camera (FreeCamera)_dd_  Camera        processing begun of light (POINT)_dd_  Lamp_eq__eq__eq__eq__eq__eq__eq__eq__eq_ Writing of scene file started _eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_ Writing of scene file completed _eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_ end of processing _eq__eq__eq__eq__eq__eq__eq__eq__eq_elapsed time_dd_  0 min_co_ 0.0022 secs_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-08-29T14:58:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi yoric. Just a couple of thoughts which may or may not help._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I looked at the playground demo - the blender cube is green. If I REM out line 29 of your playground script the Blender cube is grey (Blender standard material?)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That suggests that the cube is getting its green colour from the grass texture._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ when I look at your babylon file there are no UVs _co_ and log file you post above has _qt_num uvs _dd_ 0_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ I am thinking that the grass texture is just being smeared over the cube._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just my thoughts._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-08-29T16:03:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Try this Yoric_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. In Blender select your cube object -&gt_sm_ go into Edit Mode -&gt_sm_ Select all the vertices._lt_/p_gt__lt_p_gt_2. Still in edit mode -&gt_sm_ Mesh -&gt_sm_ UV Unwrap -&gt_sm_Unwrap._lt_/p_gt__lt_p_gt_3. Now export your cube as Babylon file. This new .babylon file should now have a line_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__qt_uvs_qt__dd_[1_co_0_co_1_co_1_co_0_co_1_co_1_co_0_co_1_co_1_co_0_co_1_co_1_co_0_co_1_co_1_co_0_co_1_co_1_co_0_co_1_co_1_co_0_co_1_co_1_co_0_co_0_co_1_co_1_co_1_co_0_co_1_co_0_co_0_co_0_co_0_co_0_co_1_co_0_co_0_co_0_co_1_co_0_co_0_co_0_co_1_co_0_co_0_co_1_co_0_co_0_co_1_co_0_co_0_co_0_co_1]_lt_/pre_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yoric","Date":"2015-08-29T16:53:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Amazing  Gryff !_lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_i couldn_t_t believe it_co_ but it works like a charm  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_img src_eq__qt_http_dd_//s22.postimg.org/i6ez3oash/Babylon_js_Playground.jpg_qt_ alt_eq__qt_Babylon_js_Playground.jpg_qt__gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#IZR8L%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#IZR8L#3_lt_/a_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Before reading your last answer_co_ i was doing the UV Mapping / Unwrapping from Blender like this _dd__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_img src_eq__qt_http_dd_//s9.postimg.org/fqch2ff67/Capture_d_e_cran_29_08_2015_18_40.jpg_qt_ alt_eq__qt_Capture_d_e_cran_29_08_2015_18_40.jpg_qt__gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_So I was getting the cube textured from within Blender_co_ and i could then open it from BabylonJS_co_ giving this kind of result _dd__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_img src_eq__qt_http_dd_//s16.postimg.org/9t0x9933p/Babylon_js_Playground.jpg_qt_ alt_eq__qt_Babylon_js_Playground.jpg_qt__gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#IZR8L%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#IZR8L#4_lt_/a_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_But as you guessed_co_ i wanted to apply the texture from BabylonJS_co_ not from Blender._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_It_t_s getting a bit more clear to me now..._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I suppose things work like this _dd__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_With using _lt_strong_gt_BabylonJS only_lt_/strong_gt_ _dd__lt_/div_gt__lt_ol_gt__lt_li_gt_You create a mesh from BabylonJS_lt_/li_gt_\t_lt_li_gt_You apply a material with diffuseTexture() to this mesh_lt_/li_gt__lt_/ol_gt__lt_div_gt_With using _lt_strong_gt_Blender_lt_/strong_gt_ _dd__lt_/div_gt__lt_ol_gt__lt_li_gt_You create a mesh from Blender_lt_/li_gt_\t_lt_li_gt_You UV -&gt_sm_ Unwrap it from Blender_lt_/li_gt_\t_lt_li_gt_You import it from BabylonJS_lt_/li_gt_\t_lt_li_gt_You now can apply a material with diffuseTexture() and get the same result_lt_/li_gt__lt_/ol_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I thought creating a cube from BabylonJS or creating it from Blender and then importing it from BabylonJS was the same._lt_/div_gt__lt_div_gt_But obviously_co_ it is not._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Maybe it means BabylonJS creates the UV_t_s array under the hood when creating a mesh object._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Thank you so much again for your help Gryff !_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]