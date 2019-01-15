[{"Owner":"al404","Date":"2016-04-15T16:52:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m loading a mesh exported from blender with \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_../3d-models/_qt__co_ _qt_model.babylon_qt__co_ scene_co_ function (newMeshes) _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\ti than access my mesh\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_myimportedmesh _eq_ newMeshes[0]_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand count vertices\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var verticesCount _eq_ myimportedmesh.getTotalVertices()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\ti see almost 9000 vertices if a log to console verticesCount that is about the sam number displayed from blander\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti than create a SolidParticleSystem of 9000 \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis works correctly but i don_t_t know how to retrive vertex position so i can position my particles on my loaded mesh vertices\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcreate something similar from example and i used a sphere instead of my loaded mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1LIVJD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1LIVJD#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat i can_t_t understand how to do it is hot to retrive vertices position\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also try with sps.digest()_sm_ but i get a javascript error_dd_ SPS.digest is not a function\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIm not even sure that digest can do what i expect\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe other thing i don_t_t know how to do is assigned a name or an id to each particle_co_ i need to retrive that on click\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-15T17:06:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t[EDITED]\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_quite difficult to understand without a playground_lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanyway ... if you create a SPS with _lt_em_gt_addShape(model_co_ 9000)_lt_/em_gt__co_ this will create 9000 particles similar to your model. It is to say that if your model has 9000 vertices_co_ you_t_ll get a sps mesh of 9000 * 9000 vertices !!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to transform a 9000 vertices mesh in a sps_co_ you have to use _lt_em_gt_digest(model)_lt_/em_gt_. The sps mesh will be built with the same geometry than the mesh model_co_ it is to say that each of its particles will be set in the (mesh local) space at the same positions than the subparts of the model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can then read each particle position property what will be set for you by the method digest().\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have an original mesh with 9000 vertices already set at the right position_co_ I guess you need _lt_em_gt_digest()_lt_/em_gt_ to transform it into a particle system in a single call _sm_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEverything is documented_co_ with examples_co_ here _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the sps_co_ each particle is pickable (please read the pickability part in the doc) and you can access its ID.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can set every of your own property (like a name if you want) to each particle whenever you want_co_ say_co_ maybe in initializeParticles(). Well_co_ a solid particle is just a JS object_co_ it_t_s extensible dynamically as you need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"al404","Date":"2016-04-15T17:27:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti download this example\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HDHQN_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HDHQN_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthat load babylon.js from here _lt_a href_eq__qt_http_dd_//www.babylonjs.com/babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/babylon.js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif i switch to the version i used for my test i also get the same error _qt_sps-digest.html_dd_68 Uncaught TypeError_dd_ sps.digest is not a function_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti did download babylon from github not more than a week ago_co_ i use the /script-library/Babylon.js-master/dist/babylon.2.3.js i also try with the max version\n_lt_/p_gt_\n\n_lt_p_gt_\n\tis it a bug or i_t_m missing something?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-15T19:04:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tdid you download the BJS core version ? the SPS is in the full version... the core version is a very light one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tanyway if you search for the word _qt_digest_qt_ here _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/babylon.js_lt_/a_gt_  you_t_ll find it _sm_-) and this is the lone method called like this in the whole framework\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut you are right the _lt_em_gt_digest() _lt_/em_gt_method is not in the 2.3 version_co_ this feature is added in the forthcoming 2.4 only _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/what_t_s%20new.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/what_t_s%20new.md_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"al404","Date":"2016-04-15T19:47:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfrom what i read and seen in examples particles in this case ( with _lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd_Inconsolata_sm_font-size_dd_16px_sm_white-space_dd_pre_sm_background-color_dd_rgb(248_co_248_co_248)_sm__qt__gt_digest_lt_/span_gt_ function ) are the _qt_skin_qt_ ok a mesh split in pieces _eq_ particles \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti need to position little circles / dots or little spheres on my mash to cover it_co_ and i guess this is not possible with digest\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-04-16T05:51:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes_co_ digest() decomposes the mesh in facets or group of facets\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you want dots or circles or any solid particles_co_ you should then build them first as models_co_ then add them to the sps with addShape() and finally set their positions that you could retrieve with getVerticesData() applied to the big mesh whom you want to get the geometry \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"al404","Date":"2016-04-16T09:40:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks it seems to work!\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti also looked at this example_co_ that was helpful for me\n_lt_/p_gt_\n\n_lt_p_gt_\n\tunfortunately in my case if a try to create a vertex in between it end in a position that doesn_t_t make any sense\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#15O3MB%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#15O3MB#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-04-16T14:37:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20835-al404/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20835_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20835-al404/_qt_ rel_eq__qt__qt__gt_@al404_lt_/a_gt_  if you are going to place a particle for each vertex then you need plenty of vertices. In the following playground I have added them by increasing the number of segments from 10 to 50 (line 11) and converting the mesh to flatshaded ( line 13).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1LIVJD%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1LIVJD#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-04-16T15:26:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis one also allows you to pick a particle and get its id and position. You were asking about it in an earlier topic.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1LIVJD%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1LIVJD#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"al404","Date":"2016-04-16T22:03:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_125234_qt_ data-ipsquote-contentid_eq__qt_21951_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1460817473_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20835-al404/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20835_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20835-al404/_qt_ rel_eq__qt__qt__gt_@al404_lt_/a_gt_  if you are going to place a particle for each vertex then you need plenty of vertices. In the following playground I have added them by increasing the number of segments from 10 to 50 (line 11) and converting the mesh to flatshaded ( line 13).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1LIVJD%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1LIVJD#2_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\twow this really looks cool_co_ i_t_m loading a mesh exported from blander and i guess is not possible to increase vertex after loading_co_ but i_t_m not sure\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks_co_ for the examples \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-04-17T09:13:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCheck out the function increasedFacets _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/Fur#meshes-where-the-number-of-facets-is-not-user-controlled-on-creation_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/extensions/Fur#meshes-where-the-number-of-facets-is-not-user-controlled-on-creation_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis will increase the number of facets of an existing mesh and so also the number of vertices.  To get a good spread of vertices you will probably find it better_co_ for example_co_ to do\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_increasedFacets(mesh_co_ 10)\nincreasedFacets(mesh_co_ 10)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\trather than\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_increasedFacets(mesh_co_ 100)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]