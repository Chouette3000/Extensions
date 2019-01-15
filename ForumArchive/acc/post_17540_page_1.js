[{"Owner":"Tableuraz","Date":"2015-09-30T14:08:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve got an issue_co_ and I guess _qt_it_t_s not a bug it_t_s a feature_qt__co_ but when applying scaling to an object and setting an other object_t_s parent as the aforementioned object_co_ the scaling of both objects becomes the same_co_ even if parenting is set up after applying scale on the parent._lt_/p_gt__lt_p_gt_Here is a Playground to demonstrate the issue _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ZY97E_qt_ rel_eq__qt_external nofollow_qt__gt_Playground link_lt_/a_gt__lt_/p_gt__lt_p_gt_Here you can see that the sphere_t_s scaling should be (1_co_ 1_co_ 1)_co_ the default scaling_co_ but instead it has the same scaling as its parent (2_co_ 3_co_ 5)_co_ even if the scaling has been set up before linking those objects._lt_/p_gt__lt_p_gt_I guess that Babylon sets the scaling matrix of the parent to be the same as its childs (I_t_ll investigate the source code to confirm that)_co_ but it shouldn_t_t_co_ every child should have their own scaling matrix_co_ and change their scaling vector relatively according to their parent. That_t_s how I would do it anyway..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance for your answers  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-09-30T14:35:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The way it is now makes sense to me._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Call bakeCurrentTransformIntoVertices before you parent the sphere if you don_t_t want the sphere to scale._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ZY97E%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#ZY97E#2_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-09-30T14:39:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again Tab!  Good to see you.  Inherited scaling is normal_co_ in BJS... and it can sometimes get in the way._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Have you been following this thread?  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/17044-evolution-for-out-of-the-box-meshes-creation/_qt__gt_http_dd_//www.html5gamedevs.com/topic/17044-evolution-for-out-of-the-box-meshes-creation/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We are now able to create basic objects... pre-scaled (pre-sized).  In your example_co_ you used a createGround as your parent_co_  and createGround already let_t_s you size it specifically.  But our other basic shapes are getting the same power..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WRH6X%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WRH6X#12_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(children box2 and sphere2 still inherit scaling_co_ but the scaling on both parents is still 1_co_1_co_1... even though they LOOK scaled)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ that is another _qt_feature_qt_ that you should know about_co_ too.  And thanks_co_ Adam... that_t_s a great solve_co_ too.  Be well._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tableuraz","Date":"2015-09-30T14:58:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Wingnut_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The ground mesh was just an example_co_ I am not working with basic objects in the web solution I am developping_co_ but rather scaling 1x1x1 complex objects to their real size in meters (they are specific kinds of objects who need exact scaling and can have various sizes). And indeed parents scaling can sometimes get in the way_co_ most of the time I end up unparenting objects and moving them together with my own code_co_ but I just encountered a case where I really need objects parenting.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_br_gt__lt_br_gt_Also_co_ using bakeCurrentTransformIntoVertices generates amazing artefacts and log the following _qt_WebGL_dd_ INVALID_OPERATION_dd_ vertexAttribPointer_dd_ no bound ARRAY_BUFFER_qt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-09-30T15:29:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_*nod*... understood.  Thanks for the reply._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I rarely/never import meshes_co_ but_co_ you have probably seen how our basic shapes have an _t_updatable_t_ flag.  Does your mesh have that set true?  I think it will need to be so... for the bake to work.  *shrug*   But I_t_m not sure if that is causing the error._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-30T17:00:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ this is the expected behavior_dd_ children inherits the complete parent_t_s matrix including scaling_co_ rotation and position. So in your case if you want to restore child scaling to 1_co_1_co_1 you have to use the inverse of parent_t_s scaling_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#ZY97E%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#ZY97E#3_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]