[{"Owner":"highvrahos","Date":"2013-12-27T08:28:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying to get some dimensions of models I load using GetBoundingInfo method on Mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Using console.log to debug the return values I see something I can_t_t understand. When the variables are printed in the console log_co_ the dimensions are wrong (first picture). But when I click on the variable on Firebug to see a tree view of the variable dimensions are correct (second picture)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you have any idea why that is happening?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sadly if I store the return value in a variable inside JS code_co_ the wrong values are stored._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you in advance_co__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2013/post-5854-0-57915800-1388132905.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2013/post-5854-0-57915800-1388132905_thumb.png_qt_ data-fileid_eq__qt_632_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5854-0-57915800-1388132905_thumb.pn_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2013/post-5854-0-42844700-1388132909.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2013/post-5854-0-42844700-1388132909_thumb.png_qt_ data-fileid_eq__qt_633_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5854-0-42844700-1388132909_thumb.pn_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-12-27T08:30:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Do you get the same behavior on Chrome or IE?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"highvrahos","Date":"2013-12-27T08:34:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just checked Chrome_co_ yes_co_ I_t_m getting the same behavior._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m working in Mac OS_co_ can_t_t test IE at this time._lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2013/post-5854-0-05093500-1388133266.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2013/post-5854-0-05093500-1388133266_thumb.png_qt_ data-fileid_eq__qt_634_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-5854-0-05093500-1388133266_thumb.pn_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2013-12-27T09:24:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not sure it_t_s linked to your issue but I know I_t_ve noticed that console.log doesn_t_t necesseraly print the value of your variable as it was at the moment of the call to console.log. To be sure to get the right value_co_ you have to throw an exception right after the call to console.log. Of course it_t_s only for you to be able to debug... In that case_co_ actually it_t_s the same behavior as using the javascript debugger of your browser._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The returned value that you store_co_ is it a reference or a copy? When you write _qt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_the wrong values are stored_qt__co_ do you mean that you checked them with a console.log or with the debugger?_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"highvrahos","Date":"2013-12-27T09:44:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I see_co_ I_t_ll have to keep experimenting with the debugger._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I say that the wrong values is strored_co_ what I mean is when I do the following_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_shape.position.y _eq_ shape.getBoundingInfo().boundingBox.center.y_lt_/pre_gt__lt_p_gt_The repositioned shape is positioned on the wrong value (first image)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2013-12-27T09:48:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What could be happened it_t_s that shape.position.y and shape_lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_getBoundingInfo_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_()._lt_/span_gt__lt_span_gt_boundingBox_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_center_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_y are linked. You set position.y according to center.y but center.y depends on position.y. I didn_t_t test but that could be the issue. Try to store shape_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_getBoundingInfo_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_()._lt_/span_gt__lt_span_gt_boundingBox_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_center_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_y in a local variable not in shape.position.y just to check you have the right value._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_P.S_dd_ no image is showed for me_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"highvrahos","Date":"2013-12-27T12:54:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think I have found the solution to this issue. The following code works both in the debugger as well as in code (returns always the correct value)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        setTimeout(function(){            shape.refreshBoundingInfo()_sm_            var height _eq_ shape.getBoundingInfo().boundingBox.maximumWorld.y - shape.getBoundingInfo().boundingBox.minimumWorld.y_sm_            shape.position.y _eq_ plates_height + height / 2_sm_            shape.setEnabled(true)_sm_        }_co_200)_sm__lt_/pre_gt__lt_p_gt_Mesh is loaded using SceneLoader.ImportMesh and code is placed in the _qt_then_qt_ function. What I thought in the beginning was the problem is to refreshBoundingInfo() inside scene.executeWhenReady(function (){}) function_co_ but that didn_t_t work out._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Only when putting a delay in the code script_co_ using setTimeout everything worked as expected._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you_co__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]