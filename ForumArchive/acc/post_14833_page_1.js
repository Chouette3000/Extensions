[{"Owner":"DellaFree","Date":"2015-05-28T21:47:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span_gt_Hi_co_ I am a newbie_co_ that recently I started studying Babylon.js . I would ask _co_ though it may sound trite and silly _co_ how to position an object in relation to another ? Let me explain_dd_ I created a cube and a pyramid _co_ separated _co_ and I view them in a canvas _sm_ now I would like _co_ through a function that will be called by a button _co_ position the pyramid above the cube . I would understand_co_ how to implement this function in order to position the pyramid above the cube _co_ no matter where I place the cube ( the cube could move) . I repeat I_t_m a newbie and I have not even a starting point to show you an example . Any advice is welcome . Thank you again for your attention ._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-28T22:20:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello and welcome.._lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think you can do this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_pyramid.parent _eq_ cubepyramid.position _eq_ new BABYLON.Vector3(0_co_ 1_co_ 0)_sm_// AboveORpyramid.position _eq_ cube.position.add(new BABYLON.Vector3(0_co_ 1_co_ 0))_sm_// Above_lt_/pre_gt__lt_p_gt_​_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DellaFree","Date":"2015-05-28T23:45:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_84256_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_14833_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1432851610_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hello and welcome.. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think you can do this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_pyramid.parent _eq_ cubepyramid.position _eq_ new BABYLON.Vector3(0_co_ 1_co_ 0)_sm_// AboveORpyramid.position _eq_ cube.position.add(new BABYLON.Vector3(0_co_ 1_co_ 0))_sm_// Above_lt_/pre_gt__lt_p_gt_​_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Great _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ it_t_s what I_t_m looking for. Is there another way to get the cube_t_s height_co_ instead using the value 1 ? Thanks a lot._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-29T01:45:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can use mesh.getBoundingInfo().boundingBox._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here are the properties of the bounding box_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24939_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24939_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DellaFree","Date":"2015-05-31T10:01:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_84267_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_14833_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1432863926_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_You can use mesh.getBoundingInfo().boundingBox._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here are the properties of the bounding box_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24939_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24939_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Yes! That_t_s it. Again_co_ thank you so much. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]