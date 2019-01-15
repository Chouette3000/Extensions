[{"Owner":"chicagobob123","Date":"2018-02-07T23:22:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou know how google earth goes between a ORTHOGRAPHIC_CAMERA street view to the 3D view. Well I want to do the same thing. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tChanging modes makes the view crazy. So how do you go about it? Whats the ABC_t_s \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-08T17:43:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe will need some kind of repro in the PG to help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2018-02-21T17:32:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis was a interesting subject.  The _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_ORTHOGRAPHIC_CAMERA_lt_span_gt_ view the _lt_/span_gt__lt_/span_gt_ortho rectangle is square but your browser window is not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince most monitors are wider than taller I used the width as a variable and the height an absolute value. So when you change\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe window you need to alter the width and height of the _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_ORTHOGRAPHIC_CAMERA_lt_span_gt_ _lt_/span_gt__lt_/span_gt_based view.  What you see in the code\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbelow is how I keep the view square while changing the browser window size. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t  // the canvas/window resize event handler_lt_br /_gt_\n\t   window.addEventListener(_t_resize_t__co_function() {_lt_br /_gt_\n\t   // NOTE may have to be done all the time for correct guiAspectRatio_lt_br /_gt_\n\t   // we need to resize the current view.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   if(scene.activeCamera.mode  _eq__eq_ BABYLON.Camera.ORTHOGRAPHIC_CAMERA)_lt_br /_gt_\n\t      {_lt_br /_gt_\n\t       var prevheight_eq_scene.activeCamera.orthoTop-scene.activeCamera.orthoBottom_sm__lt_br /_gt_\n\t       var width_eq_document.getElementById(_t_renderCanvas_t_).clientWidth_sm__lt_br /_gt_\n\t       var height_eq_document.getElementById(_t_renderCanvas_t_).clientHeight_sm__lt_br /_gt_\n\t       guiAspectRatio_eq_width/height_sm__lt_br /_gt_\n\t       var zoom_eq_prevheight/groundDimension_sm__lt_br /_gt_\n\t       height _eq_groundDimension * zoom_sm__lt_br /_gt_\n\t       height/_eq_2_sm__lt_br /_gt_\n\t       scene.activeCamera.orthoLeft _eq_ (-height * guiAspectRatio)_sm__lt_br /_gt_\n\t       scene.activeCamera.orthoRight _eq_ (height * guiAspectRatio)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       scene.activeCamera.orthoBottom _eq_ -height_sm__lt_br /_gt_\n\t       scene.activeCamera.orthoTop _eq_ height_sm__lt_br /_gt_\n\t      }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    engine.resize()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]