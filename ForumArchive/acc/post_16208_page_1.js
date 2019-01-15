[{"Owner":"elkyu","Date":"2015-08-04T09:14:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have that _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#272WDW%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#272WDW#14_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Actually the image is in the scene behind the plane (material on a plane)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I want it_t_s put that image in html directly_co_ behind the canvas._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_I currently I get all the coordinates of all points which make the hole. And with that I calculate the center of the hole to place the image there. _lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I don_t_t know how we can translate the coordinate of the hole center into the html document ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-08-04T09:23:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_After giving that a thought I don_t_t think it will work like that. If you place the image directly on html you cant really zoom in using babylon. You know what I mean? The camera doesnt move closer to the html. It just moves in the virtual 3D space. If the images are not in that same 3D space_co_ I don_t_t think you can zoom on them by moving the camera... at least that_t_s how I imagine it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-08-04T09:30:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So_co_ to make this clear_co_ you_t_ll have to simulate the zoom effect on the image by modifying the image_t_s attributes (position_co_ size) along the way._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Are you sure you need to mix HTML and WebGL here? I mean_co_ once the zoom animation is over_co_ your WebGL canvas _lt_u_gt_is_lt_/u_gt_ pretty much your image._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you_t_re sure you_t_re going with that_co_ then it_t_s just a matter of creating an img element and animation its attributes. JQuery does that easily_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var img _eq_ $(_qt_&lt_sm_img&gt_sm__qt_).appendTo(_qt_body_qt_).offset( {top_dd_ 100_co_ left_dd_ 200} )_sm_img.animate({top_dd_ 0_co_ left_dd_ 0}_co_ 2.0_co_ function() { })_sm__lt_/pre_gt__lt_p_gt_Edit_dd_ iiceman explains it better _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-08-04T09:33:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span_gt_with the solution provided in the other topic I don_t_t need to do this_co_ yes_co_ but I_t_d still like to know how to do this _co_ it might serve me in the future. _lt_span_gt_Not necessarily to zoom in on the image._lt_br_gt_It_t_s just for satisfy my curiosity _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ alt_eq__qt__dd_rolleyes_dd__qt__gt_  (that_t_s why I created an other topic) _lt_span_gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]