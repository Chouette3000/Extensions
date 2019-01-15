[{"Owner":"jahow","Date":"2015-02-10T20:54:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi all_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I found something weird while optimizing my code_dd_ I was using InstancedMesh as much as possible_co_ and switched all my materials to ShaderMaterial. And then boom_co_ everything disappeared._lt_/p_gt__lt_p_gt_After a bit of research_co_ it seems instanced meshes will simply not be drawn when their source has a ShaderMaterial assigned. Playground repro_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TWDEA%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TWDEA#6_lt_/a_gt__lt_/p_gt__lt_p_gt_Uncomment lines 40 to 44 to see for yourself. It_t_s actually a bit more complex than that_dd_ when you assign a shader material to it_co_ even the source mesh disappears if it has been instantiated (?)_co_ but only if its instances are in the field of view._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m currently looking at BJS code and ANGLE_instanced_arrays doc (the extension used for drawing instanced meshes)_co_ but I thought I_t_d come here to fish for ideas..._lt_/p_gt__lt_p_gt_FYI these are two errors I noticed in the log when this problem showed (errors not always there)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_drawElementsInstancedANGLE_dd_ at least one enabled attribute must have a divisor of 0glDrawElementsInstancedANGLE_dd_ attempt to draw with all attributes having non-zero divisors_lt_/pre_gt__lt_p_gt_Thanks _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-02-10T21:18:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_A very(!) uneducated guess_dd__lt_/p_gt__lt_p_gt_All Materials have useInstances variable in their isReady() function_co_ shader material is missing it._lt_/p_gt__lt_p_gt_StandardMaterial adds this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_defines.push(_qt_#define INSTANCES_qt_)_sm_attribs.push(_qt_world0_qt_)_sm_attribs.push(_qt_world1_qt_)_sm_attribs.push(_qt_world2_qt_)_sm_attribs.push(_qt_world3_qt_)_sm__lt_/pre_gt__lt_p_gt_if useInstance is set to true. Maybe this is a place to check?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-02-11T09:43:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah_co_ I_t_m starting to understand the issue_co_ and it_t_s related to the lines you point at._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically_co_ only the StandardMaterial supports instances by default_co_ since it_t_s the only one that passes the transformation matrix as an attribute when drawing instanced meshes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I got it to work almost perfectly by adding these to the shader material object_dd__lt_/p_gt__lt_p_gt_- attributes_dd_ _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_world0_co_ world1_co_ world2_co_ world3_lt_/span_gt_ (these are actually the world transform matrix of the current instance_co_ decomposed in vertices)_lt_/p_gt__lt_p_gt_- uniform_dd_ _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_viewProjection_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here it is_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TWDEA%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TWDEA#9_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s not perfect yet_dd_ when there is no instanced mesh on screen but only the original one (left ball)_co_ the rendering process switches to no-instance rendering and doesn_t_t provide these attributes anymore_co_ and then a WebGL error pops out. The StandarMaterial uses the lines pointed out by RaananW to make that switch_co_ but the ShaderMaterial doesn_t_t handle that._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For now I_t_ll make my own custom material class to handle this_co_ but I believe it would be a good thing for BJS to handle this case by default. Although that may require some serous change on the ShaderMaterial class..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-02-11T11:46:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You_t_re right. I add this one to my backlog. The shaderMaterial must support instances rendering. I_t_ll fix asap_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-02-11T12:28:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks! Hope you can think of a simple way to do this_co_ because I can_t_t _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-11T12:46:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@DK _dd_ backlog_co_ backlog ?_lt_/p_gt__lt_p_gt_Are you a Scrum guy btw ? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-02-11T12:56:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not at all...My backlog is my list of tasks _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-02-11T21:00:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is this ShaderMaterial a real boost / short cut?  If so_co_ may want to incorporate into my Blender source code generator. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is a sample of a scene with 3 materials.  I was being explicit like the way FileLoader is.  Is there a better pattern to use?  Here is the Javascript variant.  There is also a Typescript variant._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_    var matLoaded _eq_ false_sm_    function defineMaterials(scene_co_ materialsRootDir) {        if (!materialsRootDir) { materialsRootDir _eq_ _qt_./_qt__sm_ }        if (!BABYLON.Engine.Version || Number(BABYLON.Engine.Version.substr(0_co_ BABYLON.Engine.Version.lastIndexOf(_qt_._qt_))) &lt_sm_ 2.0) throw _qt_Babylon version too old_qt__sm_        if (matLoaded) return_sm_        BABYLON.Tools.Log(_t_In defineMaterials_t_)_sm_        if (materialsRootDir.lastIndexOf(_qt_/_qt_) + 1  !_eq__eq_ materialsRootDir.length) { materialsRootDir  +_eq_ _qt_/_qt__sm_ }        var material_sm_        var texture_sm_        material _eq_ new BABYLON.StandardMaterial(_qt_shape_key.cloth-like_qt__co_ scene)_sm_        material.ambientColor  _eq_ new BABYLON.Color3(1_co_1_co_1)_sm_        material.diffuseColor  _eq_ new BABYLON.Color3(0.8_co_0.8_co_0.8)_sm_        material.specularColor _eq_ new BABYLON.Color3(0.5_co_0.5_co_0.5)_sm_        material.emissiveColor _eq_ new BABYLON.Color3(0_co_0_co_0)_sm_        material.specularPower _eq_ 50_sm_        material.alpha _eq_  1_sm_        material.backFaceCulling _eq_ false_sm_        texture _eq_ new BABYLON.Texture(materialsRootDir + _qt_tableCloth.jpg_qt__co_ scene)_sm_        texture.name _eq_ materialsRootDir + _qt_tableCloth.jpg_qt__sm_        texture.hasAlpha _eq_ true_sm_        texture.level _eq_ 1_sm_        texture.coordinatesIndex _eq_ 0_sm_        texture.coordinatesMode _eq_ 0_sm_        texture.uOffset _eq_ 0_sm_        texture.vOffset _eq_ 0_sm_        texture.uScale _eq_ 1_sm_        texture.vScale _eq_ 1_sm_        texture.uAng _eq_ 0_sm_        texture.vAng _eq_ 0_sm_        texture.wAng _eq_ 0_sm_        texture.wrapU _eq_ 1_sm_        texture.wrapV _eq_ 1_sm_        material.diffuseTexture _eq_ texture_sm_        material _eq_ new BABYLON.StandardMaterial(_qt_shape_key.ground-like_qt__co_ scene)_sm_        material.ambientColor  _eq_ new BABYLON.Color3(0.8_co_0.8_co_0.8)_sm_        material.diffuseColor  _eq_ new BABYLON.Color3(0.64_co_0.64_co_0.64)_sm_        material.specularColor _eq_ new BABYLON.Color3(0.5_co_0.5_co_0.5)_sm_        material.emissiveColor _eq_ new BABYLON.Color3(0_co_0_co_0)_sm_        material.specularPower _eq_ 50_sm_        material.alpha _eq_  1_sm_        material.backFaceCulling _eq_ true_sm_        texture _eq_ new BABYLON.Texture(materialsRootDir + _qt_tmage512.png_qt__co_ scene)_sm_        texture.name _eq_ materialsRootDir + _qt_tmage512.png_qt__sm_        texture.hasAlpha _eq_ true_sm_        texture.level _eq_ 1_sm_        texture.coordinatesIndex _eq_ 0_sm_        texture.coordinatesMode _eq_ 0_sm_        texture.uOffset _eq_ 0_sm_        texture.vOffset _eq_ 0_sm_        texture.uScale _eq_ 1_sm_        texture.vScale _eq_ 1_sm_        texture.uAng _eq_ 0_sm_        texture.vAng _eq_ 0_sm_        texture.wAng _eq_ 0_sm_        texture.wrapU _eq_ 1_sm_        texture.wrapV _eq_ 1_sm_        material.diffuseTexture _eq_ texture_sm_        material _eq_ new BABYLON.StandardMaterial(_qt_shape_key.table_qt__co_ scene)_sm_        material.ambientColor  _eq_ new BABYLON.Color3(0_co_0_co_1)_sm_        material.diffuseColor  _eq_ new BABYLON.Color3(0_co_0_co_0.8)_sm_        material.specularColor _eq_ new BABYLON.Color3(0.5_co_0.5_co_0.5)_sm_        material.emissiveColor _eq_ new BABYLON.Color3(0_co_0_co_0)_sm_        material.specularPower _eq_ 50_sm_        material.alpha _eq_  1_sm_        material.backFaceCulling _eq_ true_sm_        matLoaded _eq_ true_sm_    }    shape_key.defineMaterials _eq_ defineMaterials_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-02-14T16:27:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It is not a boost if StandardMaterial can handle it_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-27T18:05:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWas this ever fixed? I am seeming to run into this issue now. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tI need to have instances specifically not clones with different shader params.  Ive tried cloning the shader tot he new instance and I get the same weird results.\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/26234-shader-talk/?page_eq_3&amp_sm_do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tI have a video demonstrating it on this page.  If I do the same process with my water hex instance and just don_t_t use my shader it goes to the correct position.  But I can not replicate on the playground so Im kinda at a loss_co_ then I came across this from 2015._lt_br /_gt__lt_br /_gt_\n\tI even simplified my shader to just output white_co_ and still get odd results.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-12-27T18:30:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI did a search against the repo for the include needed to process instances inside of Eclipse.  Looks like some vertex shaders are covered_co_ but not all.  Looking at this old thread_co_ there was only StandardMaterial (default shader)_co_ so something was done.  Supported here.  BTW_co_ if vertex and fragment shaders were in separate directories_co_ it would be easier.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10925_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/istances.jpg.d458d6b0afbd5f556545c9cbae54fc0a.jpg_qt_ alt_eq__qt_istances.jpg_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-12-27T18:51:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGET IT JC!! if you figure this out you will rock my world. _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-06-07T05:24:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI am also stuck on trying to instance a mesh that is using the shader material\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-06-07T05:42:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tme too _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-07T14:56:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe ShaderMaterial let you provide the code so if you want to support instances you will have to write the shader code _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHere are some hints to help_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- First of all everythng happens in the vertex shader\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- You need to include this shader include_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/default.vertex.fx#L24_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/default.vertex.fx#L24_lt_/a_gt_ to get all declarations done\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Then add this one in your vertex code(_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/default.vertex.fx#L99_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/default.vertex.fx#L99_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Makes sure you are using a variable named finalWorld to compute your vertex position\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- You need to add a shader define names INSTANCES\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Material helper can help you providing the required uniforms_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.materialHelper.ts#L304_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.materialHelper.ts#L304_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2017-09-19T23:21:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve been attempting to get instances working with shaderMaterial_co_ but am a bit stuck. _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QNFL1G_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QNFL1G_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I_t_ve done all the above_co_ except \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_177352_qt_ data-ipsquote-contentid_eq__qt_12416_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496847370_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 6/8/2017 at 2_dd_56 AM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t- You need to add a shader define names INSTANCES\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tas I_t_m not sure how to do this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vorion","Date":"2017-12-09T01:39:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24742_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/_qt_ rel_eq__qt__qt__gt_@sable_lt_/a_gt_ Have you been able to get it working?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr can anyone else help to get sable_t_s playground example to work? I_t_m quite new to shaders in general _dd_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2017-12-12T02:33:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29610-vorion/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29610_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29610-vorion/_qt_ rel_eq__qt__qt__gt_@Vorion_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNever got this to work sorry_co_ ended up just using the standard material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould be interested in a solution though.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vorion","Date":"2017-12-12T18:24:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24742_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/_qt_ rel_eq__qt__qt__gt_@sable_lt_/a_gt_ and anyone who_t_s interested in this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA friend of mine fixed got it fixed. Define instances was missing_co_ and the _qt_gl_position_qt_ matrix multiplication was in the wrong order.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QNFL1G%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QNFL1G#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]