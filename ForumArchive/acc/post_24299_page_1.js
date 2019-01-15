[{"Owner":"Steffen","Date":"2016-08-05T09:15:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know how to describe or if it_t_s the right term in the title....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m importing a kinematic model/hierarchy from blender (mesh with multiple submeshes) and have to change the transparency of the whole mesh. My problem is that the meshes are partially overlapping.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a simple playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#NL9YJ%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#NL9YJ#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it_t_s self-explanatory.  Is it possible to make Babylon use the distance vertex-camera for alpha blending and not the distance center-camera? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-08T11:15:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21825-steffen/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21825_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21825-steffen/_qt_ rel_eq__qt__qt__gt_@Steffen_lt_/a_gt_.  I am not qualified to answer this_co_ but I can bump a topic like any pro bumper.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHave you browsed these two documents_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Blend_Modes_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Blend_Modes_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthough the author(s) of these two documents did a great job_co_ the subject is still _qt_deep_qt_.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSorry it has taken so long to get a response_co_ and my answer is not a good one_co_ but perhaps you can find something useful in those documents.  I suggest 2 days_co_ 1 test playground/scene_co_ and 4 pots of coffee.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   I might do it myself... so I can learn how it all works/looks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Steffen","Date":"2016-08-09T08:10:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks for the links. I did not know the _qt_how to use blend modes_qt_. Although very helpful_co_ it did not solve my problem. I also played with some index variations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt the moment_co_ my workaround is to make the inner cylinder solid and only the outer one semi transparent. That works of course_co_ but thats actually not the result my client asked for.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if there is somebody out there_co_ I appreciate your answers _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBtw_co_ I am porting some functions from an Threejs app_co_ and there it works. Do they use another strategy?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-09T09:52:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBreaking up the cylinder into three pieces might work for you_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#NL9YJ%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#NL9YJ#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-09T11:54:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_139260_qt_ data-ipsquote-contentid_eq__qt_24299_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1470730224_qt_ data-ipsquote-userid_eq__qt_21825_qt_ data-ipsquote-username_eq__qt_Steffen_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Steffen said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBtw_co_ I am porting some functions from an Threejs app_co_ and there it works. Do they use another strategy?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi again_co_ guys.  I_t_m pinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ for that question.  He might know something magical. (I_t_ve seen him do wizard-like things_co_ often)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSeems to me... this is a webGL/openGL issue_co_ and _lt_strong_gt_if_lt_/strong_gt_ it can be done in 3JS_co_ then the same _qt_option_qt_ can be done with BJS.  Speculation_co_ on my part_co_ though.  Perhaps_co_ BJS had to do a give_t_n_t_take_co_ giving-up one feature/option_co_ in order to gain another.  More speculation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOverlapping mesh_co_ on combination-models (multi-mesh models)... and the _lt_u_gt_whole_lt_/u_gt_ model needs to go transparent or not (cloaked ship). Yep.  I could see a definite need for that to happen... and properly.  Long ago_co_ I was a TinkerToys junkie_co_ and if that _lt_a href_eq__qt_http_dd_//previews.123rf.com/images/kozzi/kozzi1301/kozzi130103888/17150777-Close-up-image-of-helicopter-made-of-tinker-toy-against-white-background-Stock-Photo.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_tech_lt_/a_gt_ is to continue (via assembling BJS primitives into cool toys)... we need cylinders inside-of/through other cylinders.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-09T12:16:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_139260_qt_ data-ipsquote-contentid_eq__qt_24299_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1470730224_qt_ data-ipsquote-userid_eq__qt_21825_qt_ data-ipsquote-username_eq__qt_Steffen_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Steffen said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI am porting some functions from an Threejs app_co_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt might help if you showed us an example of this working in 3JS.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-09T20:33:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_m not a wizard unfortunately. I need to see original code. But you are right. If it works in 3js_co_ there is a way to make it work with bjs\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-11T14:55:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21825-steffen/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21825_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21825-steffen/_qt_ rel_eq__qt__qt__gt_@Steffen_lt_/a_gt_ please keep us updated.  I could benefit from this if you find a better solution than what I suggested.  Thanks\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Steffen","Date":"2016-08-11T15:34:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ sry for my late late answer. Unfortunately the alpha problematic was set some places back on my priority list. There are some major things I have to implement first (such as parallel kinematics like delta robots). But I have a note here_co_ as soon as there is some time_co_ I will look after the code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour workaround isn_t_t what I want_co_ so I_t_m still looking for a better solution - but less focused at the moment _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll keep you updated.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-08-21T12:27:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_  hi \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWho we can get or set Alpha priority List any List or Array we have in BABYLON JS for that\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti know we can change that runtime with \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_gl.blendEquation( gl[_qt_FUNC_ADD_qt_] )_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_gl.blendFunc( sourceBlendType  _co_  destinationBlendType _co_ blendEquation )_sm__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_gl.enable(gl.BLEND)_sm__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_gl.depthMask(false)_sm__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can see parameter value from thire\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//msdn.microsoft.com/en-us/library/dn302371(v_eq_vs.85).aspx_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//msdn.microsoft.com/en-us/library/dn302371(v_eq_vs.85).aspx_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe just need list of alpha Object (for find gl Render Object ) and refresh that when we change camera position\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//delphic.me.uk/webglalpha.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//delphic.me.uk/webglalpha.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDemo _dd_ _lt_a href_eq__qt_http_dd_//delphic.me.uk/Fury/demos/AlphaTest/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//delphic.me.uk/Fury/demos/AlphaTest/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Steffen","Date":"2016-08-25T07:34:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_/span_gt__lt_br /_gt_\n\tI_t_ve looked into the _qt_old_qt_ threejs sample and there the transparency works better but still not perfect. I_t_ve attached a picture. It is like there is no yellow behind the grey cylinder. Not perfect - but better._lt_br /_gt__lt_br /_gt_\n\tI have to mention that a lib called _qt_Ros3D_qt_ is used to load URDF models._lt_br /_gt__lt_br /_gt_\n\tHere is the code for setting the new material to the whole mesh_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_/* Urdf.js (ros3djs pckg) */\nROS3D.Urdf.prototype.setHomed _eq_ function(isHomed) {\n  // [...]\n  this.traverse(function(obj) {\n     if(obj.material &amp_sm_&amp_sm_ obj.originalMaterial) {\n       var newMat _eq_ obj.originalMaterial.clone()_sm_\n       newMat.transparent _eq_ true_sm_\n       newMat.opacity _eq_ that.errorOpacity_sm_ \n       obj.material _eq_ newMat_sm_  \n       height _eq_ Math.max(height_co_ obj.matrixWorld.elements[14])_sm_\n     } \n  })_sm_\n}_sm_\n\n\n// Maybe important (on the last line in the _qt_Urdf.js_qt_ file of the ROS3D pckg)\nROS3D.Urdf.prototype.__proto__ _eq_ THREE.Object3D.prototype_sm_\n\n/* App.js (own) */\n// how setHomed() is called_dd_\nrobot.setHomed(msg.isHomed)_sm_\n\n/* Ros3D.js (ros3djs pckg) */\n// creates a THREE material based on given RGBA values\nROS3D.makeColorMaterial _eq_ function(r_co_ g_co_ b_co_ a) {\n  var color _eq_ new THREE.Color()_sm_\n  color.setRGB(r_co_ g_co_ b)_sm_\n  if (a &lt_sm__eq_ 0.99) {\n    return new THREE.MeshBasicMaterial({\n      color _dd_ color.getHex()_co_\n      opacity _dd_ a + 0.1_co_\n      transparent _dd_ true_co_\n      depthWrite _dd_ true_co_\n      blendSrc _dd_ THREE.SrcAlphaFactor_co_\n      blendDst _dd_ THREE.OneMinusSrcAlphaFactor_co_\n      blendEquation _dd_ THREE.ReverseSubtractEquation_co_\n      blending _dd_ THREE.NormalBlending\n    })_sm_\n  } else {\n    return new THREE.MeshPhongMaterial({\n      color _dd_ color.getHex()_co_\n      opacity _dd_ a_co_\n      blending _dd_ THREE.NormalBlending\n    })_sm_\n  }\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/alpha_old.PNG.33271cb0d47f5a5a7dbcad27f957c78e.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9184_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/alpha_old.PNG.33271cb0d47f5a5a7dbcad27f957c78e.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_alpha_old.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-08-25T11:17:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ here is a good summary of the alpha techniques_dd_ _lt_a href_eq__qt_https_dd_//www.sjbaker.org/steve/omniv/alpha_sorting.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.sjbaker.org/steve/omniv/alpha_sorting.html_lt_/a_gt_ (the page does not look good but the explanation are nice).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn BJS the current default is no depth write and back to front sorting for the transparent mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your threejs exemple you basically render to depth preventing several layer of transparency ( _lt_span style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(35_co_36_co_31)_sm__qt__gt_depthWrite _dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(35_co_36_co_31)_sm__qt__gt__co__lt_/span_gt_ ) and as the grey part seems to be rendered first it explains why you are not seeing the yellow part behind. Disabling depth will end up being like BJS_co_ rendering in the reverse order will make the grey part looking transparent but not the yellow and so on... None of the solutions are good appart from splitting your mesh here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is not an engine issue_co_ this is a common 3d issue where as long as the sorting is not a per pixel one you all end up in this cases.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe could add a parameter to configure wether or not disabling depth write on the transparent pass but that would not help with your case.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-10-04T12:57:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/21260-video-alpha-channel-approaches/?do_eq_embed&amp_sm_comment_eq_143544&amp_sm_embedComment_eq_143544&amp_sm_embedDo_eq_findComment#comment-143544_qt__gt__lt_/iframe_gt_\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]