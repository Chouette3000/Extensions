[{"Owner":"javalang","Date":"2017-08-05T23:37:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHI everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy _qt_miniexport_qt_ of a simple unwrapped model lacks in automatic texture baking_co_ which should be possible if using cycles render.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\ttexture baking will be automatic when_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_ul_gt__lt_li_gt_\n\t\t\t\tcycles render is the current render engine_co_\n\t\t\t_lt_/li_gt_\n\t\t\t_lt_li_gt_\n\t\t\t\tprocedural textures are used.\n\t\t\t_lt_/li_gt_\n\t\t_lt_/ul_gt__lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSo there is the questions_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat are blender procedural textures (are this the cycles nodes from the popup-menu _qt_Texture_qt_ _co_ like Voronoi etc. ) ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I_t_m doing wrong? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ I understand _qt_automatic texture baking_qt_ in the sense of no manual baking and saving to disc_co_ but exporter will do this or exports inline if this option was checked.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-08-06T02:52:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnswering myself_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tohhh_co_ this is a bad pitfall _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBJS-Exporter V5.4.0 is checking the blender version via existence of a layout label named _lt_strong_gt__qt_UV Editing_lt_/strong_gt__qt_. This is an user definable label_co_ if someone has modified this label or is using a very common extension like _lt_strong_gt_Sensei_lt_/strong_gt_-_lt_strong_gt_Format _lt_/strong_gt_ which uses another layout schemes_co_ the exporter fails even if the newest blender version is used.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is really bad_co_ the check should be something like _qt__lt_strong_gt_if bVersion _lt_/strong_gt_..._qt_ (variable already initialized in the script).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ for a first workaround_co_ be sure your blender startup-file has a layout named _qt_UV Editing_qt__co_ then the Images from Cycles render will be automatically generated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-07T16:52:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDo you think you could work on a PR to have a better check?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-08-07T17:02:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do not follow. bVersion is assigned as a result of a call to _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/src/babylon-js/material.py#L412_qt_ rel_eq__qt_external nofollow_qt__gt_blenderMajorMinorVersion()_lt_/a_gt_ from the file package_level.py_co_ shown below_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_def blenderMajorMinorVersion()_dd_\n    # in form of _t_2.77 (sub 0)_t_\n    split1 _eq_ app.version_string.partition(_t_._t_) \n    major _eq_ split1[0]\n    \n    split2 _eq_ split1[2].partition(_t_ _t_)\n    minor _eq_ split2[0]\n    \nreturn float(major + _t_._t_ + minor)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe _qt_UV Editing_qt_ screen is only used for baking procedure textures (noise_co_ Voronoi) from the internal render.  Yes_co_ that is not really great_co_ but as far as I could find out there is no _qt_bake_qt_ API call like for Cycles\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-08-07T22:52:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ Yes you_t_re right_co_ this is for the procedural textures only as I mentioned in the first message of this thread.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe problematic spot is here_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        # check for really old .blend file_co_ eg. 2.49_co_ to ensure that everything requires exists\n        if self.needsBaking and bpy.data.screens.find(_t_UV Editing_t_) _eq__eq_ -1_dd_\n            Logger.warn(_t_Contains material requiring baking_co_ but resources not available.  Probably .blend very old_t__co_ 2)\n            \n            self.needsBaking _eq_ False\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tChanging this check using\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if self.needsBaking and (bpy.app.version[0]*1000+ bpy.app.version[1])&lt_sm_2049_dd__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\thelps in my case_co_ but of course it_t_s much easier to add a new layout _qt_UV Editing_qt_  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_. Anyway_co_  it_t_s a charm to generate these synthetic textures _t_on the fly_t_ now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is another position where the string _qt_UV Editing _qt_ appears_co_ but it_t_s not affecting my scenario._dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_def bakeInternal(self_co_ bake_type_co_ image_co_ uvName_co_ extension)_dd_\n....\n        # assign the image to the UV Editor_co_ which does not have to shown\n        bpy.data.screens[_t_UV Editing_t_].areas[1].spaces[0].image _eq_ image\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs I don_t_t know exactly what this piece code does (maybe it_t_s for Blender-Render only)_co_ I leave the code as it is until someone knows what to do. But in the meantime giving a hint in the docu would be great for other people...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNevertheless_co_ thank you all for this really fantastic module_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers Hans\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-08-08T15:44:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tah_co_ I forgot about this.  This is not really checking your version of Blender_co_ as the preceding comment says.  It is attempting to determine what version of Blender saved the .blend file.  Right now the 5.4 exporter refuses to run on a version of Blender less than 2.76_co_ so this check would never get triggered.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis check was put in when baking was added.  Someone got a really old .blend from BlendSwap_co_ specifically 2.49.  Unfortunately_co_ I could not find where you can determine this.  Anyway_co_ back then there was either no such window or it had a different name back then.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps_co_ a custom function which detected something else that a UV Editor window had would be better.  It could be used for this check as well as internal baking.  Found _lt_a href_eq__qt_https_dd_//docs.blender.org/api/blender_python_api_2_78a_release/bpy.types.Screen.html#bpy.types.Screen_qt_ rel_eq__qt_external nofollow_qt__gt_this _lt_/a_gt_on the screen class.  Perhaps_co_ the UV editor always returns True for _lt_span style_eq__qt_color_dd_#e74c3c_sm__qt__gt__lt_code_gt_use_play_image_editors_lt_/code_gt__lt_/span_gt_ _co_ like_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_def findUVEditor(self)_dd_\n    for screen in bpy.data.screens_dd_\n        if screen.use_play_image_editors_dd_ return screen\n\n    return None_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tEither way_co_ I do not plan on trying to fix some ancient thing.  The way you can fix this is to create a NEW scene_co_ and File-&gt_sm_Append the stuff from the old .blend\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-08-08T16:13:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ good to know_co_ thank you for your effort.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]