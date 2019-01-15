[{"Owner":"mop","Date":"2015-09-18T21:02:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a few planes and I want to change textures on them as quickly as possible using preloaded HTMLImage Elements (same size). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Initially I was disposing() and recreating Textures. That was obviously very slow._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I then changed to the DynamicTexture and painted them in the corresponding 2d context. Performance got notably better but as the texturing is still my bottleneck and using the 2d canvas seems overhead to me I started creating some kind of replacable image texture_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#17OT80_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#17OT80_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Try playing with count (16 seems to be a good count to see performance problems _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) in the bottom and exchange doImage() and doDynamic()._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Would something like this be a useful addition? Are there any existing solutions which I didn_t_t see? Would you implement that as a new texture class or would one pimp the existing texture class?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thoughts?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-10-04T00:52:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_[bump]_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Interesting topic_co_ Mop_co_ and it_t_s good to see that you are still hanging-around with us.  I hope you are well._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This subject is way the hell over my head_co_ but the framework authors need to see this... and give you a decent response.   This is the first PG that I_t_ve seen... using Promise_co_ too.  Nice.  I remember following _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/13053-scene-compositing-problems/_qt__gt_your composite glow thread_lt_/a_gt_... which was interesting but also way over my head.  I learn much by reading your posts and studying your playgrounds.  Thanks! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ texture-wrangling Gods (if there_t_s some around)...  _lt_u_gt_has Mop built something viable for including in the framework_co_ here?_lt_/u_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looks fast to me.  Smokin_t_ fast. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks Mop... sorry for the slow response._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-10-04T01:25:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is the number of possible textures fixed_co_ or open-ended?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I mean_co_ is there any reason you can_t_t use a Texture Atlas_co_ or just preallocate all the Texture objects you_t_re going to need?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]