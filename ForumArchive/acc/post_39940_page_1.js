[{"Owner":"dsman","Date":"2018-09-11T17:52:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat is the top level logic for creating avatars where the user can change some elements (clothes_co_ accessories etc)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCharacters can be made easily by skeleton/bones and animation but how to lay clothes which move/stretch as per animations?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-11T18:23:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13379_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/_qt_ rel_eq__qt__qt__gt_@dsman_lt_/a_gt_are you looking for something that looks along the lines of this? _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#0K8EYN%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#0K8EYN#0_lt_/a_gt_ or more complex clothing?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_ any ideas on how to do this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-09-11T21:55:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can dispose of meshes_co_ materials_co_ and textures at anytime. And I often use the _lt_strong_gt_RunAfterRender()_lt_/strong_gt_ function to apply different attributes to the scene. However_co_ there are may ways to do this... so _lt_strong_gt_RunAfterRender()_lt_/strong_gt_ may not work for your scene. However_co_ if you have a command of JavaScript_co_ then this should be simple... as the babylon.js framework has all the functions in place. If you need more assistance_co_ then post a playground scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2018-09-12T05:36:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_  Clothing on the character in PG your link is kind of simpler. I am talking about clothing like Fabric Motion demo on babylonjs.com home page. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBesides I want to understand how to change clothes for an avatar and still have clothes dynamically animated like the Fabric Motion demo. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-12T20:15:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI know babylon supports cloth simulation via physics plugins like cannon _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#7N1BRU%230_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#7N1BRU#0_lt_/a_gt_ but I_t_m not sure the performance and quality would meet your scenario.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32589_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32589-patrickryan/_qt_ rel_eq__qt__qt__gt_@PatrickRyan_lt_/a_gt_ do you have any ideas how this might be approached?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-09-12T23:17:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13379_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/_qt_ rel_eq__qt__qt__gt_@dsman_lt_/a_gt_ you may be able to bake the cloth animation using a DCC application (e.g. Blender) and bring it into Babylon using glTF if you have a consistent character animation_co_ similar to the Fabric Motion demo you mentioned.  But if you want the cloth to react dynamically to character movement_co_ it may be trickier to implement in a stable way.  You may be able to start with the cloth animation that _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ referred to_co_ but getting the animation you want could be a considerable investment.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PatrickRyan","Date":"2018-09-17T22:10:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13379_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/_qt_ rel_eq__qt__qt__gt_@dsman_lt_/a_gt_ I_t_m with _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_ on this one that unless you need procedural deformation of cloth for simulation using something like Canon.js_co_ baking out the animation from your DCC is the best alternative. Having the clothes skinned to the same skeleton as your character and exporting them as separate mesh objects to be loaded independently of the character mesh is the way most tech pipelines will take. It also depends on the complexity of what you are speaking of. If you are thinking of multiple clothing/accessory options for each character_co_ you will quickly get into trouble trying to do cloth simulation at runtime because you are speaking about many meshes per character all doing collision on the character per frame. If you were to bake out the animations into each piece of clothing_co_ the clothing mesh as well as the character mesh could share the same animations_co_ so they would be in sync. Ideally_co_ you would retarget the skin weights of the mesh to the skeleton of the character as well so that you are handling multiple skeletons as well. This way all of the physics calculations are baked into the animations rather than needing to have them on each character.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnything that does not need to deform_co_ like armor/shield/bracer for example_co_ could just be instantiated and parented to the correct bone. This means you would want extra bones in your skeleton rig for attachments but is the easiest way to accomplish this as the mesh doesn_t_t need any animation or skinning_co_ but just follows along with its parent joint. Hopefully_co_ this makes sense_co_ but please shoot back any questions you have.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]