[{"Owner":"TimT77","Date":"2018-04-30T10:51:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody_co__lt_br /_gt_\n\t_lt_br /_gt_\n\tis it possible to create a closed polygon/path of cutmull spline (points)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSimply adding again the first point (to close the polygon) does not work._lt_br /_gt_\n\tThis will create a _qt_sharp corner_qt_ (point_dd_ -5_co_ 0_co_ 5) which i didn_t_t want.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee here_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1AU0M4%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1AU0M4#17_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tRegards_co__lt_br /_gt_\n\tTim\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-01T10:21:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31305-timt77/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31305_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31305-timt77/_qt_ rel_eq__qt__qt__gt_@TimT77_lt_/a_gt_ and welcome to the forum. Sorry for the slow reply but it took some thinking about. Strictly speaking given a set of points p0_co_ p1_co_ p2_co_ ......._co_ pn catmullrom uses 4 points p(i)_co_ p(i+1)_co_ p(i+2)_co_ p(i+3) to draw the spline through points p(i+1)_co_ p(i+2)_co_ with p(i) and p(i+3) as only control points_co_ and so since p0 and pn have no points in front of and after them respectively  they are not usually drawn. However the `_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_CreateCatmullRomSpline_lt_/span_gt_` method of Curve3 compensates for this and draws through all the given points.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA slightly different method is needed if you want the given points to be in a loop. In the following playground I produce a function _t__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_CreateCatmullRomSplineLoop_t_  _lt_/span_gt_(returns a Curve3 object) which will draw a loop through the given points. Note usage as it is not a BABYLON method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#K49ARR_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#K49ARR_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-05-01T10:55:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_ sorry for butting-in.  I dunno much about mulling cats_co_ but I think you guys should see this...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#14VFYX_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#14VFYX_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhenever I hear Catmull-Rom... I think of rounding the edges of mesh.  I know that_t_s not its only purpose_co_ but what the heck... you guys need to see some mesh rounding.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know who did this PG_co_ but I love it.  I think these shapes are quite high-vert-count mesh_co_ but they look SO COOL_co_ huh?  Ok_co_ Wingnut over and out.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TimT77","Date":"2018-05-02T06:56:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi JohnK and Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmany thanks for your help and answers!_lt_br /_gt_\n\tJohnK solution is exactly what i was looking for! Perfect! _lt_span class_eq__qt_ipsEmoji_qt__gt_👍_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd thx to Wingnut for this great playground. Perhaps i can use something of this _lt_span class_eq__qt_ipsEmoji_qt__gt_😃_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards_lt_br /_gt_\n\tTim\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TimT77","Date":"2018-05-03T05:54:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOne small change in addition to JohnKs solution_dd__lt_br /_gt_\n\ti_t_ve added_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_catmullRom.push(catmullRom[0])_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tto _qt_CreateCatmullRomSplineLoop_qt__dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_CreateCatmullRomSplineLoop _eq_ function (points_co_ nbPoints) {\n    var catmullRom _eq_ new Array()_sm_\n    var step _eq_ 1.0 / nbPoints_sm_\n    var amount _eq_ 0.0_sm_\n    var pointsCount _eq_ points.length_sm_\n    for (var i _eq_ 0_sm_ i &lt_sm_ pointsCount_sm_ i++) {\n        amount _eq_ 0_sm_\n        for (var c _eq_ 0_sm_ c &lt_sm_ nbPoints_sm_ c++) {\n            catmullRom.push(BABYLON.Vector3.CatmullRom(points[i % pointsCount]_co_ points[(i + 1) % pointsCount]_co_ points[(i + 2) % pointsCount]_co_ points[(i + 3) % pointsCount]_co_ amount))_sm_\n            amount +_eq_ step_sm_\n        }\n    }\n    catmullRom.push(catmullRom[0])_sm_\n    return new BABYLON.Curve3(catmullRom)_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand now i have a closed polygon! _lt_span class_eq__qt_ipsEmoji_qt__gt_😃_lt_/span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_👍_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#K49ARR%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#K49ARR#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-03T08:42:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31305-timt77/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31305_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31305-timt77/_qt_ rel_eq__qt__qt__gt_@TimT77_lt_/a_gt_ thank you for spotting that_co_ my old eyes had not noticed the gap. From V3.3  you can add a true parameter at the end of `_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_BABYLON.Curve3.CreateCatmullRomSpline_lt_/span_gt_` to close the curve. However I had made the same mistake when doing the PR so the gap will still appear until the next time V3.3 is updated _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1AU0M4%2319_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1AU0M4#19_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]