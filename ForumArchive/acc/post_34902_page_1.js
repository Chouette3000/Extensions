[{"Owner":"d13","Date":"2018-01-05T20:20:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Everyone!_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is another question related to my other post about drawing orbit lines for planets_dd_ \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed5763284248_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/34862-efficient-orbit-lines-for-planets/?do_eq_embed_qt_ style_eq__qt_height_dd_205px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tI_t_ve realized I need to pre-render these lines_co_ without knowing in advance what all the points of the orbit will be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone know how to use 3 captured points to calculate and then draw a complete ellipse?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-05T20:46:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_var detail _eq_ 12_sm_\nvar pieDiv _eq_ 2/detail_sm_\nvar divArray _eq_ []_sm_\nvar radius _eq_ 0.5_sm_\nvar offset _eq_ {x_dd_0_co_ y_dd_0}_sm_\n\n  for(var i _eq_ 0_sm_ i &lt_sm_ detail_sm_ i++){\n    divArray.push(Math.PI*(pieDiv*i))_sm_\n  }\n\n  var newPath_eq_ []_sm_\n  for(var i _eq_ 0_sm_ i &lt_sm_ divArray.length_sm_ i++){\n\tnewPath.push(new BABYLON.Vector3((radius * Math.cos(divArray[i])+offset.x)_co_ (0+offset.y)_co_ (radius * Math.sin(divArray[i])+offset.x)))_sm_\n\t}\n\tnewPath.push(newPath[0])_sm_\n\t_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAs long as you know the radius this will work._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#35LJSZ%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#35LJSZ#5_lt_/a_gt__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#35LJSZ%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#35LJSZ#6_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-05T21:23:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_Thank you so much!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will try that. I could measure the distance of each planet from the sun to figure out the radius - it will probably be close enough for most.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMercury and Pluto have a very eccentric orbits... there_t_s probably a way to tweak the math... I_t_ll explore and get back to you _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-05T21:25:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes I can shift to calculate ellipses as well_co_ one second.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#35LJSZ%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#35LJSZ#7_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tMATH MUTHA F*****S_lt_br /_gt__lt_br /_gt_\n\tI_t_m planning on going back to take some more calculus and trig classes here soon... &gt_sm__&lt_sm_ starting to realize I_t_m losing it from not using it... getting older sucks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-05T21:50:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_Aweome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try plugging in the correct eccentricity values for each planet and see what happens\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ what do the x and y offset do?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSome of the planets (like Venus) actually move up and down slightly when they orbit - could the x and y offset be used to account for that? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-05T21:53:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthe offset will move it around on a 2d plane_co_ you can extend it to be 3d and then to make the tilt just adjust the rotation of the line system._lt_br /_gt__lt_br /_gt_\n\tYou can also use my Camera Boone prototype to animate the planets on the path as opposed to using cos/sin which will fix having to adjust your math for the tilt._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/21594-camera-boom-prototype/?tab_eq_comments#comment-122980_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/21594-camera-boom-prototype/?tab_eq_comments#comment-122980_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t-&gt_sm_ older example _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AGOCE%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AGOCE#5_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-05T21:59:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tP.S.  All the help I have been giving you I hope lands me a shout out in the credits of the scene when ever you_t_re finished! &lt_sm_3\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-05T22:01:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ I_t_m actually getting the planet position data from here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/mgvez/planet-positions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/mgvez/planet-positions_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProbably there would be some way to actually use that data to pre-render the orbit path but I think an approximation (using your method) will be close enough. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-05T22:02:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_200481_qt_ data-ipsquote-contentid_eq__qt_34902_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515189556_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tP.S.  All the help I have been giving you I hope lands me a shout out in the credits of the scene when ever you_t_re finished! &lt_sm_3\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOf course_co_ I_t_ll add you to the credit list!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-05T22:04:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tjust jack this_dd__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n\t\tname_dd_ _t_sun_t__co_\n\t\ttitle _dd_ _t_The Sun_t__co_\n\t\tmass _dd_ 1.9891e30_co_\n\t\tradius _dd_ 6.96342e5_co_\n\t\tk _dd_ 0.01720209895 //gravitational constant (μ)\n\t}_co_\n\t{\n\t \tname_dd_ _t_mercury_t__co_\n\t\ttitle _dd_ _t_Mercury_t__co_\n\t\tmass _dd_ 3.3022e23_co_\n\t\tradius_dd_2439_co_\n\t\torbit _dd_ { \n\t\t\tbase _dd_ {a _dd_ 0.38709927 * ns.AU _co_  e _dd_ 0.20563593_co_ i_dd_ 7.00497902_co_ l _dd_ 252.25032350_co_ lp _dd_ 77.45779628_co_ o _dd_ 48.33076593}_co_\n\t\t\tcy _dd_ {a _dd_ 0.00000037 * ns.AU _co_  e _dd_ 0.00001906_co_ i_dd_ -0.00594749_co_ l _dd_ 149472.67411175_co_ lp _dd_ 0.16047689_co_ o _dd_ -0.12534081}\n\t\t}\n\t}_co_\n\t{\n\t\tname_dd_ _t_venus_t__co_\n\t\ttitle _dd_ _t_Venus_t__co_\n\t\tmass _dd_ 4.868e24_co_\n\t\tradius _dd_ 6051_co_\n\t\torbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 0.72333566 * ns.AU _co_  e _dd_ 0.00677672_co_ i_dd_ 3.39467605_co_ l _dd_ 181.97909950_co_ lp _dd_ 131.60246718_co_ o _dd_ 76.67984255}_co_\n\t\t\tcy _dd_ {a _dd_ 0.00000390 * ns.AU _co_  e _dd_ -0.00004107_co_ i_dd_ -0.00078890_co_ l _dd_ 58517.81538729_co_ lp _dd_ 0.00268329_co_ o _dd_ -0.27769418}\n\t\t}\n\t}_co_\n\t{\n\t\tname_dd__t_earth_t__co_\n\t\ttitle _dd_ _t_The Earth_t__co_\n\t\tmass _dd_ 5.9736e24_co_\n\t\tradius _dd_ 3443.9307 * ns.NM_TO_KM_co_\n\t\tsideralDay _dd_ ns.SIDERAL_DAY_co_\n\t\ttilt _dd_ 23+(26/60)+(21/3600) _co_\n\t\torbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 1.00000261 * ns.AU_co_ e _dd_ 0.01671123_co_ i _dd_ -0.00001531_co_ l _dd_ 100.46457166_co_ lp _dd_ 102.93768193_co_ o _dd_ 0.0}_co_\n\t\t\tcy _dd_ {a _dd_ 0.00000562 * ns.AU_co_ e _dd_ -0.00004392_co_ i _dd_ -0.01294668_co_ l _dd_ 35999.37244981_co_ lp _dd_ 0.32327364_co_ o _dd_ 0.0}\n\t\t}\n\t}_co_\n\t{\n\t\tname_dd__t_mars_t__co_\n\t\ttitle _dd_ _t_Mars_t__co_\n\t\tmass _dd_ 6.4185e23_co_\n\t\tradius _dd_ 3376_co_\n\t\tsideralDay _dd_ 1.025957 * ns.DAY_co_\n\t\torbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 1.52371034 * ns.AU _co_  e _dd_ 0.09339410_co_ i_dd_ 1.84969142_co_ l _dd_ -4.55343205_co_ lp _dd_ -23.94362959_co_ o _dd_ 49.55953891}_co_\n\t\t\tcy _dd_ {a _dd_ 0.00001847 * ns.AU _co_  e _dd_ 0.00007882_co_ i_dd_ -0.00813131_co_ l _dd_ 19140.30268499_co_ lp _dd_ 0.44441088_co_ o _dd_ -0.29257343}\n\t\t}\n\t}_co_\n\t{\n\t \tname_dd__t_jupiter_t__co_\n\t\ttitle _dd_ _t_Jupiter_t__co_\n\t\tmass _dd_ 1.8986e27_co_\n\t\tradius _dd_ 71492_co_\n\t\torbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 5.20288700 * ns.AU _co_  e _dd_ 0.04838624_co_ i_dd_ 1.30439695_co_ l _dd_ 34.39644051_co_ lp _dd_ 14.72847983_co_ o _dd_ 100.47390909}_co_\n\t\t\tcy _dd_ {a _dd_ -0.00011607 * ns.AU _co_  e _dd_ -0.00013253_co_ i_dd_ -0.00183714_co_ l _dd_ 3034.74612775_co_ lp _dd_ 0.21252668_co_ o _dd_ 0.20469106}\n\t\t}\n\t}_co_\n\t{\n\t\tname_dd__t_saturn_t__co_\n\t\ttitle _dd_ _t_Saturn_t__co_\n\t\tmass _dd_ 5.6846e26_co_\n\t\tradius _dd_ 58232_co_\n\t\ttilt _dd_ 26.7_co_\n\t\torbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 9.53667594 * ns.AU _co_  e _dd_ 0.05386179_co_ i_dd_ 2.48599187_co_ l _dd_ 49.95424423_co_ lp _dd_ 92.59887831_co_ o _dd_ 113.66242448}_co_\n\t\t\tcy _dd_ {a _dd_ -0.00125060 * ns.AU _co_  e _dd_ -0.00050991_co_ i_dd_ 0.00193609_co_ l _dd_ 1222.49362201_co_ lp _dd_ -0.41897216_co_ o _dd_ -0.28867794}\n\t\t}\n\t}_co_\n\t{\n\t\tname_dd_ _t_uranus_t__co_\n\t\ttitle _dd_ _t_Uranus_t__co_\n\t\tmass _dd_ 8.6810e25_co_\n\t\tradius _dd_ 25559_co_\n\t\torbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 19.18916464 * ns.AU _co_  e _dd_ 0.04725744_co_ i_dd_ 0.77263783_co_ l _dd_ 313.23810451_co_ lp _dd_ 170.95427630_co_ o _dd_ 74.01692503}_co_\n\t\t\tcy _dd_ {a _dd_ -0.00196176 * ns.AU _co_  e _dd_ -0.00004397_co_ i_dd_ -0.00242939_co_ l _dd_ 428.48202785_co_ lp _dd_ 0.40805281_co_ o _dd_ 0.04240589}\n\t\t}\n\t}_co_\n\t{\n\t\tname_dd__t_neptune_t__co_\n\t\ttitle _dd_ _t_Neptune_t__co_\n\t\tmass _dd_ 1.0243e26_co_\n\t\tradius _dd_ 24764_co_\n\t\torbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 30.06992276  * ns.AU_co_  e _dd_ 0.00859048_co_ i_dd_ 1.77004347_co_ l _dd_ -55.12002969_co_ lp _dd_ 44.96476227_co_ o _dd_ 131.78422574}_co_\n\t\t\tcy _dd_ {a _dd_ 0.00026291  * ns.AU_co_  e _dd_ 0.00005105_co_ i_dd_ 0.00035372_co_ l _dd_ 218.45945325_co_ lp _dd_ -0.32241464_co_ o _dd_ -0.00508664}\n\t\t}\n\t}_co_\n\t{\n\t\tname_dd_ _t_pluto_t__co_\n\t\ttitle _dd_ _t_Pluto_t__co_\n\t\tmass _dd_ 1.305e22+1.52e21_co_\n\t\tradius _dd_ 1153_co_\n\t\torbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 39.48211675 * ns.AU _co_  e _dd_ 0.24882730_co_ i_dd_ 17.14001206_co_ l _dd_ 238.92903833_co_ lp _dd_ 224.06891629_co_ o _dd_ 110.30393684}_co_\n\t\t\tcy _dd_ {a _dd_ -0.00031596 * ns.AU _co_  e _dd_ 0.00005170_co_ i_dd_ 0.00004818_co_ l _dd_ 145.20780515_co_ lp _dd_ -0.04062942_co_ o _dd_ -0.01183482}\n\t\t}\n\t}_co_\n\t{\n\t\tname_dd_ _t_halley_t__co_\n\t\ttitle _dd_ _t_Halley\\_t_s Comet_t__co_\n\t\tmass _dd_ 2.2e14_co_\n\t\tradius _dd_ 50_co_\n\t\torbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 17.83414429 * ns.AU _co_  e _dd_ 0.967142908_co_ i_dd_ 162.262691_co_ M _dd_ 360 * (438393600 / (75.1 * ns.YEAR * ns.DAY))_co_ w _dd_ 111.332485_co_ o _dd_ 58.420081}_co_\n\t\t\tday _dd_ {a _dd_ 0 _co_  e _dd_ 0_co_ i_dd_ 0_co_ M _dd_ (360 / (75.1 * 365.25) )_co_ w _dd_ 0_co_ o _dd_ 0}\n\t\t}\n\t}_co_\n\t{\n\t\tname_dd_ _t_moon_t__co_\n\t\ttitle _dd_ _t_The Moon_t__co_\n\t\tmass _dd_ 7.3477e22_co_\n\t\tradius _dd_ 1738.1_co_\n\t\tsideralDay _dd_ (27.3215782 * ns.DAY) _co_\n\t\ttilt _dd_ 1.5424_co_\n\t\tfov _dd_ 1_co_\n\t\trelativeTo _dd_ _t_earth_t__co_\n\t\torbitCalculator _dd_ MoonRealOrbit_co_\n\t\torbit_dd_ {\n\t\t\tbase _dd_ {\n\t\t\t\ta _dd_ 384400_co_\n\t\t\t\te _dd_ 0.0554_co_\n\t\t\t\tw _dd_ 318.15_co_\n\t\t\t\tM _dd_ 135.27_co_\n\t\t\t\ti _dd_ 5.16_co_\n\t\t\t\to _dd_ 125.08\n\t\t\t}_co_\n\t\t\tday _dd_ {\n\t\t\t\ta _dd_ 0_co_\n\t\t\t\te _dd_ 0_co_\n\t\t\t\ti _dd_ 0_co_\n\t\t\t\tM _dd_ 13.176358_co_//360 / 27.321582_co_\n\t\t\t\tw _dd_ (360 / 5.997) / 365.25_co_\n\t\t\t\to _dd_ (360 / 18.600) / 365.25\n\t\t\t}\t\n\t\t}\n\t}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-08T12:09:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ Yes_co_ I_t_ve been using it to move the planets and it works great - I just have no idea how to use that data to display pre-renderd orbit lines.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-08T15:44:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tArrgh_co_ those calculations turned out not to be accurate enough _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt looks like I_t_m back to the drawing board again. I_t_ll need to do one of these two things_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Calculate the ellipse dynamically by extrapolating from a few points of captured planet position data.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Figure out how to calculate an accurate ellipse using this data_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_orbit _dd_ {\n\t\t\tbase _dd_ {a _dd_ 17.83414429 * ns.AU _co_  e _dd_ 0.967142908_co_ i_dd_ 162.262691_co_ M _dd_ 360 * (438393600 / (75.1 * ns.YEAR * ns.DAY))_co_ w _dd_ 111.332485_co_ o _dd_ 58.420081}_co_\n\t\t\tday _dd_ {a _dd_ 0 _co_  e _dd_ 0_co_ i_dd_ 0_co_ M _dd_ (360 / (75.1 * 365.25) )_co_ w _dd_ 0_co_ o _dd_ 0}\n\t\t}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t... Can anyone make sense out of that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-08T17:02:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\ta _eq_ Base distance in AU_t_s from the sun_lt_br /_gt_\n\te _eq_ Orbital Eccentricity_lt_br /_gt_\n\ti _eq_ Inclination of Orbit to Ecliptic_lt_br /_gt_\n\to _eq_ Orbit speed in km/s_lt_br /_gt__lt_br /_gt_\n\tNot sure the other stuff_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.windows2universe.org/our_solar_system/planets_orbits_table.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.windows2universe.org/our_solar_system/planets_orbits_table.html_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI think that_t_s all you would need unless you want to do their spin as well.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-08T20:02:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#AEBA7P%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#AEBA7P#6_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tIll help out more here_co_ I just gotta figure out if I want to do it in true scale_co_ or to shrink the AU units._lt_br /_gt__lt_br /_gt_\n\tDid you ever see my Celest System? For procedural creation Solar Systems.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-08T20:09:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m scaling down by a factor of 100_co_000_co_000_co_ but use a slider to scale up to 1_dd_1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo_co_ I haven_t_t Celest System\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-08T20:32:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHere is an old school prototype. _lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SI34M%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SI34M#3 _lt_/a_gt_ //System seed_dd_ Rachel_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SI34M%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SI34M#5_lt_/a_gt_ //Changed seed of system to Pryme8_lt_br /_gt__lt_br /_gt_\n\tyou can change the seed on like 581_lt_br /_gt__lt_br /_gt_\n\tmake sure you have the console up_co_ that_t_s where all the butter is._lt_br /_gt__lt_br /_gt_\n\tFeel free to jack what ever you need._lt_br /_gt__lt_br /_gt_\n\tSidenote_co_ if anyone can generate something other then a Class M star I would love to see it! They are super rare and the system is based on real world data._lt_br /_gt__lt_br /_gt_\n\tand here is an update for the real world system _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AEBA7P%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AEBA7P#9_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-08T23:03:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AEBA7P%2313_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AEBA7P#13_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tSo here is a question for you_co_ what number represents the angle of the  _lt_b style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt__lt_a href_eq__qt_https_dd_//nssdc.gsfc.nasa.gov/planetary/factsheet/planetfact_notes.html#orbe_qt_ rel_eq__qt_external nofollow_qt__gt_Eccentricity_lt_/a_gt_.   _lt_/b_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn relation to the earths orbit? Basically the y Rotation of the orbit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-08T23:33:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#AEBA7P%2314_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#AEBA7P#14_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tIf this is correct then... good god Pluto is odd...\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-09T12:16:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes That_t_s correct!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPluto_t_s weirdness is one of the reasons it was demoted as a planet.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HerryKun","Date":"2018-02-16T10:13:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys_co_ i was reading along and this post helped me a lot since i am quite a newbie in Babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a question to your Playground Link_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SI34M%235_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#3d6594_sm_font-size_dd_14px_sm__qt__gt_https_dd_//www.babylonjs-playground.com/#SI34M#5_lt_/a_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do you create this amazing lighting from the center star? I currently use a glow layer but it kind of flickers and disappears if you zoom out.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-16T11:55:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30367-herrykun/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30367_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30367-herrykun/_qt_ rel_eq__qt__qt__gt_@HerryKun_lt_/a_gt_!  Welcome to the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SI34M%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SI34M#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow that we have removed most of the data from _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__t_s star-system-from-hell_co_ we can more-easily see things.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA little diffuseColor_co_ a little emissiveColor_co_ and the fun _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/using_the_volumetric_lightscattering_post-process_qt_ rel_eq__qt_external nofollow_qt__gt_VolumetricLightScattering_lt_/a_gt_ (sometimes called VLS or GodRays) feature.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPost-processes such as VLS... are actually 2D... not 3D.  So_co_ sometimes they have interesting _qt_artifacts_qt_ when multiple VLS are active in a single scene... and they overlap (need depth-sorting).  I_t_m not an expert on these things. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 32-35 are fun VLS values to play-with_co_ so experiment_co_ experiment_co_ experiment.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Make edits to playgrounds_co_ make more SAVES_co_ you can_t_t hurt anything in the playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you create an interesting playground save_co_ and you want to talk about it_co_ then paste the URL into this thread so we can all see it (like you did perfectly in your first post)_co_ and we_t_ll discuss it and PLAY with it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVLS/GodRays are a pretty nice feature_co_ eh?  I love _t_em. I hope I_t_ve been helpful.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HerryKun","Date":"2018-02-22T15:44:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ for giving me the hint_co_ it was exactly what I needed _dd_ )_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]