[{"Owner":"jerome","Date":"2017-11-16T15:31:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi people_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBased on the internal initial code from _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt__co_ here are the per point colors for LineMesh and LineSystem\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt_var points _eq_ [arrayVector3]_sm_ \nvar lineColors _eq_ [arrayColor4]_sm_ \nvar line _eq_ BABYLON.MeshBuilder.CreateLines(_qt_l_qt__co_ {points_dd_ points_co_ colors_dd_ lineColors}_co_ scene)_sm_ \n// same for LineSystems \nvar lines _eq_ [arrayVector3[] ]_sm_ \nvar colors _eq_ [arrayColor4[] ]_sm_ \nvar lineSystem _eq_ BABYLON.MeshBuilder.CreateLineSystem(_qt_ls_qt__co_ {lines_dd_ lines_co_ colors_dd_ colors}_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n\t_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tNote1 _dd_ this works also with updatable LineMesh or LineSystem objects as the colors array can be updated live._lt_br /_gt_\n\tNote2 _dd_ when set at construction time_co_ the parameter _lt_code_gt_colors_lt_/code_gt_ overwrite the hypothetical line or lineSystem _lt_code_gt_.color_lt_/code_gt_ property. If _lt_code_gt_colors_lt_/code_gt_ is passed but undefined_co_ the object color falls back to the _lt_code_gt_.color_lt_/code_gt_ property value.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDITED]Note3 _dd_ _lt_s_gt_if you need to enable the alpha blending (line or segment transparency)_co_ just set the parameter _qt_useVertexAlpha_qt_ to true at construction time _dd__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDITED 2] the alpha blending is now enabled by default. So when you don_t_t need it_co_ just set _qt_useVertexAlpha_qt_ to false instead _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var lineSystem _eq_ BABYLON.MeshBuilder.CreateLineSystem(_qt_ls_qt__co_ {lines_dd_ lines_co_ colors_dd_ colors_co_ useVertexAlpha_dd_ true}_co_ scene)_sm_\n\nvar line _eq_ BABYLON.MeshBuilder.CreateLines(_qt_l_qt__co_ {points_dd_ points_co_ colors_dd_ colors_co_ useVertexAlpha_dd_ true}_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis will allow you to create rulers_co_ axes_co_ graduation systems with multiple colors and to draw them in a single draw call.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs usual_co_ documentation and PG examples coming soon ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmeanwhile _dd_ _lt_a href_eq__qt_http_dd_//jerome.bousquie.fr/BJS/test/linesystem.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jerome.bousquie.fr/BJS/test/linesystem.html_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-18T14:04:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tExample 1 _dd_ a simple ruler _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#1_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample 2 _dd_ colorized mesh normal visualization _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1ENDNT%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1ENDNT#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(same less dark _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1ENDNT%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1ENDNT#6_lt_/a_gt_ )\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-18T16:16:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tVery nice_co_ J-man!  THANKS!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf anyone can bend that ruler_t_s base-line into a (semi-) circle (for me) (ahem)... I might have some usages for that... on the faces of some round gauges and meters (car speedometer_co_ etc).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Only if anyone is bored and wants a little weekend challenge.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDarn_co_ line thickness would be soooo useful_co_ though.  But_co_ as most know_co_ thickness is not part of _qt_the nature-of_qt_ these type of lines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wonder... would a _qt_linesThickenerLayer_qt_... be anywhat similar to a highLightLayer?  hmm.  Any post-process thickener... is going to suffer from the same hassles as highLightLayer and similar.  Problems with depth/overlap.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ thx agn_co_ J... for the cool new features.  Well done!  Thank YOU too_co_ JcPalmer!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-18T16:54:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust play then with the vars _dd_ radius_co_ angle_co_ max_co_ width\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can set the red line internal radius at the line 35\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-18T17:04:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcasino royale ? _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] as usual_co_ can_t_t stop playing then _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT 2] colors and alpha _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-18T21:44:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\talways the Wingnut_t_s vu-meter (Wu-meter ?) with slightly different parameter values _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#8_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-19T17:20:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tchronos ... one draw call _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tstessed ? _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunny _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#11_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-19T19:51:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsoooooooo cooooooool!  omg!  Jerome... not only are you a fine artist... but just a little crazy_co_ too.  Excellent!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry some rain_co_ maybe?  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_  Let_t_s see_co_ what else could be tried?  A pyramid?  umm.  Long/Short needle pine tree? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think Nikos123 was looking for tree-growing (gource boy).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHe_t_d probably explode in happiness if ya made a 3D tree-o-lines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you REALLY want to get a tumor... use structureInfo for your tree-o-lines... based-upon a tree-walk of the playground_t_s &lt_sm_body&gt_sm_ element.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Ouch! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat might not be very _lt_em_gt_deep_lt_/em_gt__co_ though.  We need some tree structure/json that is 20-50 levels of containers of containers of containers_co_ etc.  Good tree-stuff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know I can make an html div_co_ containing divs of divs of divs of divs... with a little JS _qt_motor_qt_.  HTML node-vomitter.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tTwo-stage.  ONE... grow big_co_ fat_co_ deep_co_ tree structure.  TWO... feed THAT to the tree-o-lines maker.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Demented.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHmm... linesMesh as SPS shapes.  hmm.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-20T09:28:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout the ability to add Lines in the SPS as shapes_co_ it_t_s not possible and still won_t_t be (unless dealing with some real high complexity) because the LineMesh has both a different basic geometry than a mesh (a segment instead of a facet_co_ so pair of indices to manage instead of triplets) and uses a different shader to be rendered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat said_co_ what could be done would be a LPS (Line Particle System) on the same design as the SPS. I know how to do this ... but it_t_s such a work and a big project. Not sure it_t_s worth it to invest time and energy in this as nobody requested such a feature up now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-20T10:52:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere_t_s a rain shower _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWait for seconds until the shower gets continuous. 5000 recycled drops.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s really naive_co_ everything is randomized. I could have set the drop speed according to its length instead. I could also have set slightly different colors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote that the alpha is used between the two drop segment points. More visible with a constant speed and longer drops _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can play with the drop number_co_ the drop length and the drop speed. Example _dd_ not more drops than before but longer and faster to simulate an intensive shower _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave fun _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] just change the camera position and target to get a budget starfield _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#15_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-20T12:39:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tVarying the alpha from 0.7 to 0.0 (instead from 1.0) gives a more realistic effect _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#16_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-20T14:01:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tgarden hose _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2319_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#19_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplease wait for the water jet to stabilize\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT]\n_lt_/p_gt_\n\n_lt_p_gt_\n\tstress1 _dd_ 50K drops at 60 fps on my muscle desktop _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2320_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#20 with FF57_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tstress2 _dd_ 100K drops still at 60 fps with Chrome _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2321_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#21_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-20T14:45:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tlittle modification _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2322_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#22_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe drop length varies with the drop velocity\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-20T15:41:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thahahaha  OH MY GOODNESS!  PERFECT!!!!  rofl.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFAR better than I imagined it could be.  Excellent!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course Mister Wingleberry needs his _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2324_qt_ rel_eq__qt_external nofollow_qt__gt_tooty-frooty colors_lt_/a_gt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_colors.push([_lt_br /_gt_\n\t     new BABYLON.Color4(Math.random()*3_co_Math.random()*3_co_Math.random()*3_co_1)_co__lt_br /_gt_\n\t     new BABYLON.Color4(Math.random()*3_co_Math.random()*3_co_Math.random()*3_co_1)_lt_br /_gt_\n\t])_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Works for ALL these demos).  x3 color hack.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWe added .Random() to Color3 class... but... no Color4 version.  No Color4 versions of .Red()_co_ .Blue()_co_ .Green()_co_ etc... either.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ nice job_co_ J-doggy-dog!  Thank you!!!  They_t_re so FAST_co_ too!  Just... amazing.  Well done!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-20T16:36:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  What the heck... let_t_s get stupid...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2325_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#25_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ I_t_m rockin_t_ the rain angle back and forth... AND... I borrowed DK_t_s cool particle effects demo_co_ and made some drop-circles on the ground.  FUN!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe ground particle_t_s _t_billboarding_t_ (particles always trying to face camera)... is screwing up the effect_co_ a bit_co_ but_co_ it_t_s a start.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-20T19:55:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tnot working (wrong colors) example of rocket flame _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#W9LE0U%2326_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#W9LE0U#26_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-20T22:13:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tLol guys! I had fun playing with your crazy examples _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]