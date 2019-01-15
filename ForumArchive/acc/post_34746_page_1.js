[{"Owner":"Lanktor","Date":"2017-12-26T15:28:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tGreetings all_co_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tI am have been a _t_C_t_ and Assembler systems coder for over 35 years. I am retired now and I want to try my hand at writing a game. I have been reading the documentation a great deal as well as looking at many examples. I have also been in communication with Dad72 who is a member here. He has been very kind. \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tThat being said I have some questions regarding the mechanics of Babylon.js. I am a real noob when it comes to this framework as I have always programmed _t_on the wire_t_ and never used a scripted language that is not strictly type cast so please forgive my ignorance. \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tMy goal is to build a 3D game that has a detective who runs around and solves crimes. He will go into several areas looking for clues and then use those clues to solve the crime. As an example_co_ the detective may be sent to a warehouse where he will open a safe after finding the combination and then see some clues that will lead him to a suspects home. There will be human models_co_ as well as different things that can be picked up examined and used. The story may be outside sometimes as well as inside. This is a very basic description of the mechanics of the game but I think you can see where I am going.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tI need some advice on what documentation I should read. What forums I should frequent and perhaps even some examples. I am really at a loss as my area is low level operating system programming in Windows_co_ Linux_co_ and DOS. I do have some questions about what I think may help me_co_ so if you would not mind I would like to ask them.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tI have been doing some reading and stumbled upon SceneLoader.Append.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tIs it possible to build an entire level in Blender_co_ then export that with the Babylon.js Blender exporter_co_ then load that with SceneLoader.Append? Is that the best way to build the game I described.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tAfter a level is loaded can I then set up collision detection with actions?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tCan I bring in different models with their textures and place them in the scene after it is loaded? As an example_co_ opening a container will expose a model that was not there before. \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tCan I also delete models from the scene after some action.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tI have no idea how to accomplish any of this. I cannot load a terrain and place a model on it and keep it from falling through the terrain. I can_t_t even build walls for a room and set up collision detection within the room. \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tThe one thing I do have is lots of time as I am retired and a clear understanding of programming principles.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tThank you so much for your time_co_ it is greatly appreciated.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tRegards_co_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tRichard\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-26T18:25:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere are some answers_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* For the forum_co_ you already found it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ We have the best community here and you will always find valuable people willing to help you\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* I would also suggest to read about TypeScript and perhaps this one_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_start_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_start_lt_/a_gt_. You will see how we build babylon.js and also how we setup VS code to use it with TypeScript\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* Regarding blender_dd_ Yes you can build everything in Blender (or 3dsmax) and export it to babylon.js. Each level could be a .babylon file and you can then use SceneLoader.Append to load each level.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* After loading each level_co_ you can setup collisions (you can even set them up in Blender_sm_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* Regarding models_dd_ you can use SceneLoader.ImportMesh to bring new models in your scene afterwards\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* Deleting as well _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ (mesh.dispose)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would recommend to first create a simple plane in Blender and export it. Then use this doc to load it_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_assetsmanager_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_assetsmanager_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen try to add a sphere or any object by using ImportMesh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-12-26T18:33:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29731-lanktor/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29731_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29731-lanktor/_qt_ rel_eq__qt__qt__gt_@Lanktor_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\tWelcome to the forum &amp_sm_ Babylonjs._lt_br /_gt__lt_br /_gt_\n\tInteresting project _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tWhat kind of controls have you imagined for your detective?_lt_br /_gt_\n\tclick-to-move? keyboard keys?_lt_br /_gt__lt_br /_gt_\n\ti would suggest using babylon_t_s built-in collision system_co_ compared to a physics engine which_co_ with your description of models falling through the ground_co_ i suspect you have been playing around with._lt_br /_gt_\n\tYou can see it in action here_sm_ (camera vs mesh)_lt_br /_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#P00AG7_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#P00AG7_lt_/a_gt__lt_br /_gt_\n\tIt also works mesh vs mesh_co_ using the _qt_ mesh.moveWithCollisions(moveVector3) _qt_ function_lt_br /_gt_\n\tDocs_sm_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/cameras_co__mesh_collisions_and_gravity_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/cameras_co__mesh_collisions_and_gravity_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Lanktor","Date":"2017-12-27T13:38:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello All!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat a great community! Thank you so much for all of your suggestions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have viewed some of the examples and read a lot of the documentation. I have also installed Blender and am working my way through a very nice beginner tutorial that is provided by Blender Guru. Sounds like he is from Massachusetts. Once I get through the tutorial I am going to make a very simple scene and export it using the Babylon.js plugin. This will probably take a few days but it is really worth the effort. I am learning a so much and between the documentation for Babylon.js and Blender I can see a great deal of potential!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s wonderful finally having the time to work on a project as if it is my job!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for all of the suggestions and help. I am sure I will be back with more questions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRichard\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-27T17:13:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_m glad you found your way.. Welcome to the family!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]