[{"Owner":"andy","Date":"2017-04-29T16:08:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat benefits importing assets in .babylon format has over .obj format?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich is better for performance_co_ especially for loading very big high poly objects (for example_co_ 100mb)? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-30T00:07:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tbabylon files can be converted directly in memory if you use binary format. Furthermore babylon files contain more than just the mesh (lights_co_ materials_co_ cameras_co_ etc..)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"andy","Date":"2017-04-30T09:19:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you for your reply.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill have some questions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) Do you mean that from the performance point of view it_t_s better to use .babylon format?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to load ~110mb high poly object using .obj file. It worked well. Will it be _lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_converted _lt_/span_gt_quicker using .babylon format?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) As I read in another posts .babylon files have limit of max ~64000 vertices_co_ so I can_t_t load big objects using .babylon format? Is it a limitation of .babylon format itself or just Blender export plugin?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-04-30T15:33:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCouple of things_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tBlender is working around the limitations of old WebGL implementations not the other way around.  You could change one line in the exporter_co_ upping the limit to be in a single mesh_co_ if you require.  The result might not work on obsolete hardware_co_ but since you seem comfortable with where your .obj runs_co_ you should be ok.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tMaking that big of an object is a mistake in the first place (either that or your obj producer is a pig). You may need to worry about your competition_co_ the Browser Stop_co_ Back_co_ and Close Tab buttons.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tIf you load it into Blender_co_ you could switch to edit mode_co_ select all vertices_co_ hit space and type _t_limited dissolve_t_. It can greatly reduce your vertex count.  There will be an area that appears in the bottom left to adjust how much.  Always delimit by UV_t_s for textured meshes.  Increase / decrease the degree to your level comfort of info loss.\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12793_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/limited_disolve.jpg.4f38614de32a0c0ba743651fe2efb9de.jpg_qt_ alt_eq__qt_limited_disolve.jpg.4f38614de32a0c0ba743651fe2efb9de.jpg_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-01T17:53:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo add more info_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. If using binary version yes\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. This is not completely true. We can support more than 64k vertices but it requires hardware support. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"andy","Date":"2017-05-02T12:27:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@_lt_strong_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F30108-babylon-format-vs-obj%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ style_eq__qt_color_dd_inherit_sm__qt_ title_eq__qt_Go to JCPalmer_t_s profile_qt_ rel_eq__qt__qt__gt_JCPalmer_lt_/a_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI agree with you and thanks for the _lt_font color_eq__qt_#141414_qt__gt_tip _lt_/font_gt_about Blender. To explain more I_t_m developing an app where users will upload models themselves.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I_t_m investigating limits and what requirements I can set for users. This app will support WebGL2 only which supports pretty big numbers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo seems it_t_s worth to make a server side tool that will convert obj files to .babylon files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t@_lt_strong_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F30108-babylon-format-vs-obj%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ style_eq__qt_color_dd_inherit_sm__qt_ title_eq__qt_Go to Deltakosh_t_s profile_qt_ rel_eq__qt__qt__gt_Deltakosh_lt_/a_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll is clear_co_ thank you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]