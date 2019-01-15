[{"Owner":"Korven","Date":"2017-01-30T12:59:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve created a entire scene with Maya &amp_sm_ Blender and exported it as a .babylon_co_ all maps seems to load well but it also seems like the entire scene has _qt_softened_qt_ normals with this soft edge look. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve included a Maya and a Babylon playground screenshot to better show the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks !\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/capture1.PNG.41735d09a1991200e6f168cad4b764e7.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11427_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/capture1.thumb.PNG.87ed0e541ee90ba85e23975aef71f6c3.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_capture1.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/capture2.PNG.b6bad99ad8c8234432431151755dff99.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11428_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/capture2.thumb.PNG.129d7c3d1d5536eea3afb0278b729758.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_capture2.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-01-30T14:31:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt looks like you want to convert your scene to flat shading.\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/18524-convert-whole-scene-to-toflatshadedmesh/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Korven","Date":"2017-01-30T14:45:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you so much_co_ this thing was driving me mad !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne last thing still_co_ is it possible to use flat shading without showing the triangle or is it _qt_all or nothing_qt_ ? Sorry if I_t_m annoying !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-01-30T15:19:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWithin Blender_co_ you can trigger Flat Shading on the whole scene using the checkbox on the scene properties tab.  For individual meshes_co_ there is a checkbox on the Mesh Data properties tab.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe trade off of doing it in Blender vs on load is Blender requires less coding_co_ but the .blend file will be bigger.  If doing it in Blender causes the # of unique vertices to exceed 32K_co_ you might be better doing it at run time.  Consult your log file to know.  You will be warned if this happens_co_ I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as flat shading the quads / nGons as opposed to triangle_co_ sorry WebGL only supports triangles.  The export process converts to triangles on a temporary copy of the mesh data very early.  Knowing what the original geometry was is lost.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2017-01-30T15:20:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOn Blender you have to set an edge split modifier and set sharp edges on your geometry_co_ otherwise by default all your meshes will be smoothed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know the equivalent of this modifier on Maya_co_ in 3dsmax it_t_s called smoothing groups.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSharp edges are preserved when i export from 3dsmax to Blender using FBX_co_ i assume from maya it will do the same.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[edit] So to summarise if you want import your maya scene to blender _dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\texport from maya to fbx_co_ don_t_t know its exporter options_co_ but don_t_t check _qt_triangulate_qt_ or _qt_preserve edge orientation_qt_ if you want keep quads\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\timport fbx to Blender\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tselect your objet and set _lt_a href_eq__qt_http_dd_//lechuhu.com/files/tutorial_files/images/part_03/part_03_pic_02.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_shading to smooth_lt_/a_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tassign edge split modifier_co_ check/uncheck by edge angle if you want\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-01-30T15:36:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDoing it upstream of export_co_ making it such that it just goes through that way could be a way of preserving the illusion of quads.  I am not that good with the actual use of Blender to know that way.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Korven","Date":"2017-01-30T15:39:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor the record and to help futurs users _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can set the edge sharpness in maya using _qt_mesh display -&gt_sm_ harden/soften edge_qt_ and this setting will be well exported in fbx or obj files._lt_br /_gt_\n\tBut even if blender shows it in preview_co_ it is necessary to check the _qt_Flat shade entire scene_qt_ checkbox in the exporter options (see attached image).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway thanks everyone for your answers_co_ I_t_ll try to adapt the future geometry to adapt to the fact that triangles are made visible by this method.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/capture3.PNG.64b0f4af2dde2ef508b8dbce8100c62c.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11432_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/capture3.thumb.PNG.f4d9dad752ce87b4ca859b7dd29e1349.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_capture3.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2017-01-30T15:43:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBut by checking _qt_flat shade entire scene_qt__co_ you loose control of your smooth and hard shading set. This is_co_ i think_co_ more useful _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_YDJjcXw.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_546_qt_ src_eq__qt_http_dd_//i.imgur.com/YDJjcXw.png_qt_ width_eq__qt_1000_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]