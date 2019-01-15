[{"Owner":"michaeltrim","Date":"2016-08-18T13:22:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes anyone know a simple playground example of animating a camera around a fixed point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo camera always looks in at single point_co_ but rotates 360 around that target.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-18T22:48:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22204-michaeltrim/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22204_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22204-michaeltrim/_qt_ rel_eq__qt__qt__gt_@michaeltrim_lt_/a_gt_.  Here_t_s our _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Cameras_qt_ rel_eq__qt_external nofollow_qt__gt_camera tutorial_lt_/a_gt_.  The big picture in there... is a diagram about the arcRotateCamera... it _qt_orbits_qt_ nicely.  By continually changing the _lt_em_gt_alpha_lt_/em_gt_ value of the arcRotateCamera_co_ it will orbit around its _lt_em_gt_target._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s take a look at a BJS Playground demo scene_co_ that helps us see it happen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#QRBXF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#QRBXF_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOur camera is nicely orbiting the torus_co_ right?  Let_t_s look at some code...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 4_dd_ That_t_s our arcRotateCamera... being constructed.  Let_t_s check out its params/args_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       var camera _eq_ new BABYLON.ArcRotateCamera(_qt__lt_strong_gt__lt_span style_eq__qt_color_dd_#4b0082_sm__qt__gt_Camera_lt_/span_gt__lt_/strong_gt__qt__co__lt_strong_gt_ _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_3 * Math.PI / 2_lt_/span_gt__lt_/strong_gt__co_ _lt_strong_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_1.2_lt_/span_gt__lt_/strong_gt__co_ _lt_strong_gt__lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_50_lt_/span_gt__lt_/strong_gt__co_ _lt_strong_gt__lt_span style_eq__qt_color_dd_#ee82ee_sm__qt__gt_BABYLON.Vector3.Zero()_lt_/span_gt__lt_/strong_gt__co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#800080_sm__qt__gt_1st param - name - _qt_Camera_qt_  (duh)_lt_/span_gt__lt_br /_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_2nd param - initial .alpha setting... in radians.  A value of -Math.PI/2 sets the camera facing +z (common).  So does the setting shown above.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_br /_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_3rd param - initial .beta setting... in radians.  A beta of 0 - camera looks straight down over north pole.  3.14 - south pole. 1.2?  You see it in the PG. _lt_/span_gt__lt_br /_gt__lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_4th param - initial .radius setting... in radians.  Distance to target.  Rarely a negative number.  This is a distance - no need for neg numbers._lt_/span_gt__lt_br /_gt__lt_span style_eq__qt_color_dd_#ee82ee_sm__qt__gt_5th param - initial target... in vector3 format ( set to x_dd_0_co_ y_dd_0_co_ z_dd_0 easily with our _lt_strong_gt_.Zero()_lt_/strong_gt_ func.  Could also use _lt_/span_gt__lt_span style_eq__qt_color_dd_#daa520_sm__qt__gt_new BABYLON.Vector3(0.0_co_ 0.0_co_ 0.0)_lt_/span_gt__lt_br /_gt_\n\t6th param - the scene object to use - almost always _lt_em_gt_scene_lt_/em_gt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ back to the playground editor window.  Look at lines 28/29.  I had to wait for torus to be created... in the code sequence... before I could do camera.setTarget(torus).  The arcRotateCamera _lt_em_gt_target_lt_/em_gt_... is a versatile property.  It was initially set as a Vector3-type _lt_strong_gt__lt_span style_eq__qt_color_dd_#ee82ee_sm__qt__gt_BABYLON.Vector3.Zero() _lt_/span_gt__lt_/strong_gt_but in line 29_co_ we use a mesh (torus) as the camera target.  Nice_co_ eh?  We can use torus (a mesh)_co_ or torus.position (a vec3)_co_ or new BABYLON.Vector3(x_co_ y_co_ z)... ALL will work!  Sweet!  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ about the auto-animation. There_t_s really two primary ways to animate... in BabylonJS.  #1 - the Animation system... a very powerful and versatile feature that comes with all the fun knobs and levers.  #2 - the render-loop wedge-in.  It is like a drive belt that you hook to the renderer... and borrow a bit of horsepower... to do fun stuff-with.  It_t_s quick and easy.  We_t_ll use that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 71... scene.before_you_render_the_next_frame() { do this stuff.  hurry_co_ and exit quick_co_ so as to _lt_u_gt__lt_strong_gt_not_lt_/strong_gt__lt_/u_gt_ load-down the scene } \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ I_t_m just being funny.  The property is named scene.beforeRender... and when you bind that property to a function (as seen)_co_ that function will run... once per frame.  Don_t_t put too many tons of code or load...  inside that func... it will hurt your frame rates.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo now we have our beforeRender() ready_co_ lets add some code.  Line 72... camera.alpha... there_t_s our orbiting property!  That _lt_strong_gt_+_eq__lt_/strong_gt_ means _lt_u_gt_add_lt_/u_gt_ this value to the current value. If it were _lt_strong_gt_-_eq__lt_/strong_gt_   ...then it would _lt_u_gt_subtract_lt_/u_gt_ that value_co_ causing the orbit to travel in the opposite direction. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn webGL/BJS_co_ it takes about 6.28 radians (neg or pos) to make a complete orbit. (2*Math.PI).  A half orbit would be 3.14 radians_co_ or Math.PI.  But you don_t_t have to worry about breaking the camera when you hit +6.28 or -6.28 radians_co_ because there are no stoppers.  Even if the camera.alpha goes all the way to 5000_co_ it_t_s all okay.  It has no practical limits - it just goes around and around.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou might think of changing camera.beta with our render-loop-based camera animator (inside our handy scene.beforeRender func)... and feel free to make that change and hit RUN again.  The camera will quit its equatorial orbit and begin a polar orbit_co_ and MIGHT flip-around when it passes the poles.  Experiment freely.  Have fun... save as often as wanted_co_ you can_t_t damage/overwrite other saved/pre-built playgrounds. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust bookmark your new URL... after each SAVE... so you can return to the fun. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe you_t_ll try animating camera.radius_co_ too (how close/far from target).  Wow.  Maybe animate all three properties at once!  Mad scientist warning!  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ Check out the lights demo at our playground... for render-loop-driven orbiting of spheres/lights... using animation just like we did.  Math.sin() and Math.cos() are GREAT fun when used in scene.beforeRender funcs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ sorry for the long reply.  Got more questions?  Ask freely.  Welcome aboard_co_ party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"michaeltrim","Date":"2016-08-19T10:57:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ thank you for the long reply! That_t_s fantastic and I_t_m working through it now_co_ I_t_ve managed to get a bunch of other things working with BabylonJS and am finding it a great framework to work with. Had assumed that ArcRotateCamera would do what I needed_co_ but had not quite cracked it_co_ having it explained so well is a real help_co_ thanks again.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]