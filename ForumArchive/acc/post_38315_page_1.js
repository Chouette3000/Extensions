[{"Owner":"AlexB","Date":"2018-06-18T21:14:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI notice that there_t_s a setTextureArray method_co_ but I don_t_t see any corresponding methods for vec2s_co_ vec3s_co_ etc. _lt_br /_gt_\n\t_lt_br /_gt_\n\tAs an example_co_ if I want something like_dd__lt_br /_gt_\n\t_lt_br /_gt_\n\t(Typescript)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_const offsets_dd_ Vector2[] _eq_ [\nnew Vector2(1_co_ 1)_co_\nnew Vector2(2_co_ 1)_co_\nnew Vector2(3_co_ 1)_co_\nnew Vector2(4_co_ 1)_co_\n]_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd I want to be able to use this in my shader_co_ like this_dd__lt_br /_gt_\n\t_lt_br /_gt_\n\t(GLSL)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_uniform offsets vec2[4]_sm_\n\nfor (int i _eq_ 0_sm_ i &lt_sm_ 4_sm_ i++) {\n vec3 tex _eq_ texture2D(sampler_co_ uv * offsets[i])_sm_\n// do something awesome here\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI don_t_t see any easy way to do it. Any clues?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-18T21:53:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe should definitely add it _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_do you want to tackle it?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-06-19T04:56:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfew examples_dd__lt_br /_gt_\n\tfor loops_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#4LDXG1%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#4LDXG1#1_lt_/a_gt__lt_br /_gt_\n\tsetArray2_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#4LDXG1%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#4LDXG1#5_lt_/a_gt__lt_br /_gt_\n\tsetTextureArray_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#4LDXG1%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#4LDXG1#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlexB","Date":"2018-06-19T14:32:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you_co_ this helps a lot!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]