[{"Owner":"smatt","Date":"2016-08-01T21:08:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m currently working on a simple weapon animation using Blender (2.77a / 2.69) with the Babylon.JS exporter 4.5.0 and it_t_s failing._lt_br /_gt_\n\tThe animation is working perfectly in blender but when exporting to a babylon structure the mesh / armatures spread around the rifle in a _qt_random_qt_ way._lt_br /_gt_\n\tIn Babylon.JS (or even in the sandbox) the exported file isn_t_t working properly._lt_br /_gt__lt_br /_gt_\n\tAre there any _lt_strong_gt_step-by-step tutorials_lt_/strong_gt_ getting started for using Babylon.JS with blender animations?_lt_br /_gt_\n\tOr are there some important checkboxes I need to enable to get this animation working?_lt_br /_gt__lt_br /_gt_\n\tI_t_ve attached two screenshots_co_ one showing the animation in blender and one show the result of an export. The blend file is in the attachments too._lt_br /_gt__lt_br /_gt_\n\tThanks for every answer_co_ Simon\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/WeaponAnimExportFailing.png.301eb4ce7e97b8a51ab3abc053dc2431.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8839_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/WeaponAnimExportFailing.thumb.png.fdf24a6d74bc8568553afbc408b45efb.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_WeaponAnimExportFailing.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/WeaponAnimWorking.png.36726658d71661b47772b64bf6363cdf.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8840_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/WeaponAnimWorking.thumb.png.511613fb3810313f53e182d6ce360fb4.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_WeaponAnimWorking.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_8841_qt__gt_hunting_rifle.blend_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-01T22:28:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_var createScene _eq_ function () {\n    var scene _eq_ new BABYLON.Scene(engine)_sm_\n\tscene.clearColor _eq_ new BABYLON.Color3(0.1_co_ .3_co_.3)\n\n    // This creates a light_co_ aiming 0_co_1_co_0 - to the sky (non-mesh)\n    var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n\tlight.specular _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)\n\t\t\n    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_ArcRotateCamera_qt__co_1.8_co_ 1.5_co_ 15_co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_\n    camera.target _eq_ new BABYLON.Vector3(0_co_ -1_co_ 0)_sm_\n\t\nBABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_pathtoyourfile_qt__co_ _qt_hunting_rifle.babylon_qt__co_ scene_co_ function (newMeshes) {\n\tscene.executeWhenReady(function () {\n\tscene.activeCamera.attachControl(canvas_co_ false)_sm_\n\tscene.beginAnimation(scene.getSkeletonById(0)_co_ 1_co_ 61_co_ !0_co_ 1)_sm_})_sm_\n\t})_sm_\n\treturn scene_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI don_t_t know if Blender  _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_span_gt_ _lt_/span_gt_2.77a is supported by babylon. it works with 2.75)_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ABIIF%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ABIIF#0_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-08-02T03:40:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_138354_qt_ data-ipsquote-contentid_eq__qt_24205_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1470085702_qt_ data-ipsquote-userid_eq__qt_22935_qt_ data-ipsquote-username_eq__qt_smatt_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ smatt said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBlender (2.77a / 2.69) with the Babylon.JS exporter 4.5.0 and it_t_s failing.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAs _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ says Blender 2.77a is not supported. It is a _qt_Release Candidate(RC)_qt_. There is a second RC _dd_ Blender 2.77b. All trying to find bugs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ who writes the exporter does not write a new exporter for Blender versions that may contain bugs. Also Blender 2.77 no longer supports Windows XP - so we have no idea  what changes have been made _qt_under the hood_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse Blender 2.76 and the exporter 4.6.1 - the most up to date combo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]