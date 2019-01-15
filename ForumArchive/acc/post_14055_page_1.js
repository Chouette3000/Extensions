[{"Owner":"JohnK","Date":"2015-04-24T15:15:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Having created three Bezier curves_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Attempt 1_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var curve_0 _eq_ BABYLON.Curve3.CreateCubicBezier(start_0_co_ control1_0_co_ control2_co__0 destination_0_co_ nb_of_points)_sm_var curve_1 _eq_ BABYLON.Curve3.CreateCubicBezier(start_1_co_ control1_1_co_ control2_co__1 destination_1_co_ nb_of_points)_sm_var curve_2 _eq_ BABYLON.Curve3.CreateCubicBezier(start_2_co_ control1_2_co_ control2_co__2 destination_2_co_ nb_of_points)_sm__lt_/pre_gt__lt_p_gt_I then formed a new curve by joining them together using._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var myFullCurve _eq_ curve_0.continue(curve_1).continue(curve_2)_sm__lt_/pre_gt__lt_p_gt_However as start_1 and start_2 where not the origin (0_co_0_co_0) myFullCurve had kinks in it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By ensuring that curve_1 and curve_2 started at (0_co_0_co_0) using_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Attempt 2_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var curve_0 _eq_ BABYLON.Curve3.CreateCubicBezier(start_0_co_ control1_0_co_ control2_co__0 destination_0_co_ nb_of_points)_sm_var curve_1 _eq_ BABYLON.Curve3.CreateCubicBezier(start_1.subtract(start_1)_co_ control1_1.subtract(start_1)_co_ control2_1.subtract(start_1)_co_ destination_1.subtract(start_1)_co_ nb_of_points)_sm_var curve_2 _eq_ BABYLON.Curve3.CreateCubicBezier(start_2.subtract(start_2)_co_ control1_2.subtract(start_2)_co_ control2_2.subtract(start_2)_co_ destination_2.subtract(start_2)_co_ nb_of_points)_sm__lt_/pre_gt__lt_p_gt_I obtained a continuous curve._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I read in this _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12923-curve3-object/_qt__gt_topic_lt_/a_gt_  that there was a suggestion by Jerome to_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_.... imagine you_t_ve got many curves with different origins and you want to _qt_stick_qt_ them together one after the other without knowing/handling each curve origin and end._lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and gathered from the date (16 Mar 2015) curve3 and continue are recent additions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now using _lt_em_gt_subtract.start _lt_/em_gt_to create the curve does not require you to know _lt_em_gt_start_lt_/em_gt_ but you do have to handle it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Have I misunderstood something or applied continue incorrectly or was it the intention that something like Attempt 1 should have formed a continuous curve and does not as yet do so?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-24T20:54:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This one is for Jerome _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-25T08:33:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You are right _dd_ I just focused on the last hypothetical unknown point position and my PG were all with curves starting at (0_co_ 0_co_ 0)._lt_/p_gt__lt_p_gt_The _lt_em_gt_continue()_lt_/em_gt_ method should work the same way with any curve starting point.. and it doesn_t_t.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_mellow.png_qt_ alt_eq__qt__dd_mellow_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will do a quick fix so the _lt_em_gt_continue()_lt_/em_gt_ method will work the way you expect_co_ which is the expected way according to what I wrote in the doc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your workaround is_co_ well_co_ just what I forgot to implement _dd_ an initial subtract down to the origin.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-27T14:11:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Since I _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14113-gulp-param-missing/?p_eq_80348_qt__gt_can_t_t compile for now_lt_/a_gt__co_ could someone please change this line _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Math/babylon.math.ts#L3431_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Math/babylon.math.ts#L3431_lt_/a_gt_ in the math.ts file to this line instead _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_continuedPoints.push(curvePoints[i].subtract(curvePoints[0]).add(lastPoint))_sm__lt_/pre_gt__lt_p_gt_then compile and_co_ if ok_co_ push it into the BJS repo._lt_/p_gt__lt_p_gt_It should fix the Curve3 _lt_em_gt_continue()_lt_/em_gt_ method so it will work as expected whatever the starting points in space of the concatened curves._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-28T07:52:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_PR submitted._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]