[{"Owner":"SebRomeo","Date":"2017-02-18T15:11:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m struggeling on something. I want to make a static particle system that is child of a mesh for all particles to be relatively positionned to that element.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tried to getWorlMatrix() of mesh_co_ to parent the mesh to particle system and mess with all matrix functions with no results...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample_dd__lt_br /_gt_\n\t-I have spaces cubes (8) that I move according to player position to give the effect of an infinite map (see previous post _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ )_lt_br /_gt_\n\t-my particles are _qt_dust_qt_ in those cubes that are created once and are static\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when I move my cube to another position_co_ particles stays at the same place...._lt_br /_gt__lt_br /_gt_\n\tHave you got a clue ?_lt_br /_gt__lt_br /_gt_\n\tEdit_dd_ another noob more general question_dd_ How to select all particles as an object like (for using clone_co_ createInstance_co_ position...)?_lt_br /_gt_\n\tThank you guys _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-02-18T15:36:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHave you considered making your dust from a _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/solid_particle_system_qt_ rel_eq__qt_external nofollow_qt__gt_solid particle system_lt_/a_gt_ instead of particles? A SPS is a mesh containing solid particles and since it is a mesh it can be given a parent.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SebRomeo","Date":"2017-02-18T15:40:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk thanks for your fast reply _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ !!_lt_br /_gt_\n\tI just wonder if this will cost a lot more process consumption ?_lt_br /_gt__lt_br /_gt_\n\tIf not_co_ I_t_m definitely on it !_lt_br /_gt__lt_br /_gt_\n\tI may have no choice but to do so in fact _dd_/_lt_br /_gt__lt_br /_gt_\n\tI wonder if performancewise is best to have 8 particle systems or 1 solidParticleSystem but clonned several times ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]