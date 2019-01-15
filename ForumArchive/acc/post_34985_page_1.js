[{"Owner":"dsman","Date":"2018-01-10T11:30:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf there are too many similar meshes in my scene_co_ what do I do in unity such that when I export the scene to Babylon_co_ those meshes are instances of one of them and not remain individual meshes in Babylon? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso if there many similar meshes in my scene_co_ which does require separate materials_co_ what do I do in Unity such that when I export the scene to Babylon_co_ those meshes become clones of one of them and not remain individual meshes in Babylon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-01-10T23:37:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you place several meshes in the scene_co_ there will be several meshes in the output scene (Unity As Well) weather you have separate material instances for each mesh or not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the Toolkit by default_co_ materials are SHARED_co_ meaning that only one single _t_JSON_t_ exported Babylon Material per material name (Unless lightmap is used_co_ then it gets an internal instance because of the different material.lighptmapTexture and coordinates info used for baked shadow of THAT game object with the same material name). If you need a specific object to use a TOTALLY separate material. Just duplicate the material and give another name and use the dup material as an _qt_Material Instance_t_... Remember you want has FEW as possible actual materials used in the GPU... Every separate material on a mesh cost you a draw call.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIm sure you know all of this_co_ just pointing that out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy toolkit does a few features to help out... if all these meshes that similar are static_co_ they don_t_t move... just put them on the _t_Babylon Static_t_ layer in Unity Layers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy static layer will group all static meshes by material and combine them together and used the the merged materials... I also have texture atlas baking tools in there to. You could bake ALL those meshes (or groups of meshes) into a texture atlas. that would put all those meshes on a single material with its UV coordinates adjusted to offset to the texture in the atlas... You can take a WHOLE scene of geometry like _t_candyland_t_... Bake them all into a 4096 texture atlas then all your candyland props will be one a single material even though its over 200 separate meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen put all those candyland props on the _t_Babylon Statics_t_ layer in Unity Editor. (Uncheck static mesh vertex limit in Toolkit Exporter Default Settings)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif all you had where the candyland environment meshes all combined into a single static mesh using the texture atlas materials and it will only cost 1 single draw call\n_lt_/p_gt_\n\n_lt_p_gt_\n\t If you really need _t_Runtime Instances_t_... Put the meshes (including any sub mesh hierarchies with script components and everything) on the _t_Babylon Prefab_t_ layer in Unity Editor...  This will make that mesh a PREFAB that is used just like UNITY prefabs at runtime. You can make MATSER meshes at desgin time... script em up with any components and functionality and make em prefabs_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an Example Enemy Ship setup as a prefab with the _qt_Make Instance_t_ Option checked (Prefabs are fully cloned copies... using the make instance clones the mesh as an MeshInstance... so cant change materials on instanced clones like you can a fully cloned copy)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthen in would use code to instantiate your prefabs at whatever position and rotation you like.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16584_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a56a018c92a1_ScreenShot2018-01-10at1_19_20PM.png.cdee390a48c56a81122db6cd9c737051.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a56a0194715f_ScreenShot2018-01-10at1_19_20PM.thumb.png.e2ade90ae974e2aff59cc0df6361dbc2.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16584_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a56a0194715f_ScreenShot2018-01-10at1_19_20PM.thumb.png.e2ade90ae974e2aff59cc0df6361dbc2.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn code the Enemy ship gets instantiated_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private spawnPlayerHazard()_dd_void {\n    if (this.gameOverFlag _eq__eq__eq_ true) return_sm_\n    this.spawnTimeIndex _eq_ this.manager.time_sm_\n    if (SpaceController.LoadState _eq__eq__eq_ true || SpaceController.WaitState _eq__eq__eq_ true) return_sm_\n    \n    // Spawn hazard prefab\n    this.spawnCount++_sm_\n    this.hazardIndex++_sm_\n    var enemyRatio_dd_number _eq_ BABYLON.Scalar.Clamp(SpaceController.EnemyRatio_co_ 1_co_ 3) + 3_sm_\n    var randomMark_dd_number _eq_ (this.spawnCount &lt_sm__eq_ 3) ? 3 _dd_ enemyRatio_sm_\n    var randomIndex_dd_number _eq_ Math.round(BABYLON.Scalar.RandomRange(1_co_ randomMark))_sm_\n    var hazardPrefab_dd_string _eq_ (randomIndex &gt_sm__eq_ 4) ? _qt_Enemy_qt_ _dd_ _qt_Asteroid__qt_ + randomIndex.toString()_sm_\n    var spawnPosition_dd_BABYLON.Vector3 _eq_ new BABYLON.Vector3(BABYLON.Scalar.RandomRange(-this.spawnValues.x_co_ this.spawnValues.x)_co_ this.spawnValues.y_co_ this.spawnValues.z)_sm_\n    this.manager.instantiatePrefab(hazardPrefab_co_ _qt_Hazard__qt_ + hazardPrefab + _qt___qt_ + this.hazardIndex.toString()_co_ spawnPosition_co_ BABYLON.Vector3.Zero())_sm_\n    if (this.hazardIndex &gt_sm__eq_ Number.MAX_VALUE) this.hazardIndex _eq_ 0_sm_\n    \n    // Validate spawning waves\n    if (this.spawnCount &gt_sm__eq_ SpaceController.HazardCountMark) {\n        this.spawnCount _eq_ 0_sm_\n        this.allowSpawn _eq_ false_sm_\n        if (SpaceController.GameLevel &lt_sm_ 3) {\n            // Wait for next wave\n            SpaceController.WaitState _eq_ true_sm_\n            this.manager.delay(()_eq_&gt_sm_{ this.checkWaitStatus()_sm_ }_co_ 1000)_sm_\n        } else {\n            // Wait for you win\n            SpaceController.WinState _eq_ true_sm_\n            this.manager.delay(()_eq_&gt_sm_{ this.checkWinStatus()_sm_ }_co_ 1000)_sm_\n        }\n    }\n}\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNote the_dd_ _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ this.manager.instantiatePrefab() _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt_I am using that to instance my enemy ship or asteroid\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy enemy ship the mesh is just visual sugar that is a child of the enemy ship object. its just along for the ride so you have something to see. But it is setup so that when you create a prefab clone copy of the enemy ship called _t_Enemy_t_ the actual mesh _t_Enemy_Ship_t_ is set to create as a babylon instanced mesh because will not and cannot change the material for that instance. That is part of how i keep the whole space shooter demo under 20 draw calls for all the meshes and laser bolt instances and particle system explosions \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16586_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a56a2fc4c031_ScreenShot2018-01-10at1_27_07PM.png.7b57d37f38754c13342288fa8feb4615.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a56a2fcbb4eb_ScreenShot2018-01-10at1_27_07PM.thumb.png.2ac5b531b77a725a217c0769f7789081.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16586_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a56a2fcbb4eb_ScreenShot2018-01-10at1_27_07PM.thumb.png.2ac5b531b77a725a217c0769f7789081.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope that helps... I will try to make a video about using my _t_babylon art tools_t_ to help you doo all the stuff i said above _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCheck out my _lt_a href_eq__qt_http_dd_//mackey.cloud/games/space_qt_ rel_eq__qt_external nofollow_qt__gt_Space Shooter Demo_lt_/a_gt_ ... Still working on particle systems and explosions _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-01-12T09:57:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_   You are awesome. While I started to read the answer_co_ a thought came to mind what if there was a good video explaining mesh optimization (combining meshes and creating texture atlas_co_ and resuing meshes as instance )? And then at the end I read you too are thinking about a video. Yes_co_ a video would be great. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ we will try with what you said and try to optimize both mesh count and reuse of mesh using instances. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Babylon toolkit for Unity is clearly a much much better replacement for Babylon Editor. Can_t_t thank you enough for creating this. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-01-12T11:22:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_  Is it like the Babylon Prefab_co_ and hence instance_co_ can be used only in the scripting and it can_t_t be exported in the .bayblon file?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ParadoxMaster","Date":"2018-11-18T17:55:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do not quite understand if I have a scene with hundreds of identical meshes_co_ e.g trees in a forest. Is there a possible way to have one mesh per babylon scene with many instances? How should such cases be optimized?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-19T02:46:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you speaking in general or through the unity exporter ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn general_co_ instancing will only use 1 draw call vs 1 per tree which is a huge gain of speed as it is all directly managed by the hardware.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you are speaking from the unity exporter_co_ let s ping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ParadoxMaster","Date":"2018-11-19T07:06:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ it is about the exporter. I_t_ll wait for this Unity exporter_t_s superhero)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-19T20:54:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe prefab system is the core tech behind this kind of thing. You have a couple ways of doing this type of thing using prefabs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1... Manually create instances from prefab meshes\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2... Use the built in Tree _lt_span class_eq__qt_ipsEmoji_qt__gt_🌲_lt_/span_gt_ system I made to support Terrains (not complete because I could never get anyone to help me write the terrain shader all the way)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI’m sorry_co_ I have company visiting me this week. But when I get a chance I’ll try make a quick video showing the Terrain and Tree  Painting so you can use the Editor to scatter trees over the terrain . Including Tree LOD’s\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ParadoxMaster","Date":"2018-11-20T00:17:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235461_qt_ data-ipsquote-contentid_eq__qt_34985_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542660850_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe prefab system is the core tech behind this kind of thing. You have a couple ways of doing this type of thing using prefabs.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t1... Manually create instances from prefab meshes\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t2... Use the built in Tree _lt_span class_eq__qt_ipsEmoji_qt__gt_🌲_lt_/span_gt_ system I made to support Terrains (not complete because I could never get anyone to help me write the terrain shader all the way)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI’m sorry_co_ I have company visiting me this week. But when I get a chance I’ll try make a quick video showing the Terrain and Tree  Painting so you can use the Editor to scatter trees over the terrain . Including Tree LOD’s\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks_co_ I think I realized how to optimize trees using build-in layers. But the video will always be useful to users. You made a amazing and powerful toolkit!  The only problem is that there is little documentation and examples_co_ and users need to figure out in many things by yourself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_But now I have more questions on_lt_/span_gt__lt_/span_gt_ _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_ another topic_dd_ _lt_/span_gt__lt_/span_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/41340-textures-for-terrain-painting-in-unity/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/41340-textures-for-terrain-painting-in-unity/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-20T08:20:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is another area that I repeatedly asked someone to help... Terrain exporting and the shader need to render... I have implemented how Unity does terrain splatmapping but could never really get results I was looking for... so that part is just stuck there in limbo....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFYI... Advance Character Animation and State Machines are I. The same limbo because again ... I can’t get NO ONE to actually help with the code for Calaculate Input Weights (2D) needed to fully implement blend trees... I already did 98% of all the coding for this stuff but can’t get anyone (everyone I asked is too busy to help with my project or just plain and simply refused to help... I even offered to pay several people out of my own pocket... but they all basically told me to screw myself_co_ they won’t help with the Math or coding) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso got some issues with Particle Systems but I’m afraid I will get no help there either\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyways... that’s were my toolkit development is... in limbo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut I will try to make an Non-official video of how i do the whole terrain_co_ instancing and LOD stuff to PAINT your trees on the Terrain and export everything \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-20T13:59:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_ I am happy to look in any bugs on the babylon side of things you might encounter about the other aspects_co_ it is way harder as it requires to deep dive in the exporter itself and time wise I am unfortunately stuck to take on smthg new at the moment.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-11-22T10:24:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ ... I REALLY NEED HELP Calculating Input Weights for 2D Blend Trees (I dont understand the game math used for Polar Gradient Bands create by Rune ... The Unity Locomotion Guy...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you _lt_strong_gt_PLEASE_lt_/strong_gt_ contact me so we can talk... I think i still get your cell_co_ you can text me so we can hook up and i can show you all the details. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI really need this to close up and create my Game mechanics stuff (Which most is based of my implementation of the Unity Mechanim Animation State Machine System)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Secondary_lt_/strong_gt_ would be the Shader... _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ needs to help with that _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-22T13:26:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Calculating Input Weights for 2D Blend Trees ? unfortunately I have even no idea what it is so I am probably the worst place to help on that._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_I can definitely tackle down issues on the Babylon side if that helps _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😞_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2018-11-23T05:57:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twhat can i do ? notic that  ( maybe tile atlas mapping is available if we append texture2DLodExt  ) \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]