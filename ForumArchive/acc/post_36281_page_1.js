[{"Owner":"Shadow95","Date":"2018-03-11T10:56:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ I have an image which I created bits by bits with hand includes only black and white areas to use in heightmap creation. Also_co_ I have two spheres named as cat and rat. When I disabled the physics the spawn for cat and rat is correct_co_ but when I have enabled with HeightmapImpostor and SphereImpostor_co_ cat is correctly spawned but rat is not the coordinate what I want. You can think of heightmap as a maze only. I want to use its walls only to handle collisions. I did try normal plane and heightmap with different y coordinates_co_ but it did not work. I think only problem is the Impostors. Because I did try Plane and spheres and their impostors without heightmap and it worked. What can I do to create the maze which I want it for only its walls_co_ so I can construct plane + walls + spheres_co_ and no sphere spawn error. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have chosen heightmap because it is simple_co_ with blocks(cupes) walls can be created_co_ but I could not place the cubes on the plane. If you explain how to read from image and understand the color_co_ and how to use plane to place the cubes or not_co_ I believe I can create walls. I have tried canvas and image_co_ but only value I can get is 0_co_0_co_0_co_0 which is nonsense by the way because there are other colors in the image\n_lt_/p_gt_\n\n_lt_p_gt_\n\tForgot to mention I have tried to change ellipsoid and ellipsoidOffset_co_ believing maybe work but they did not\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using CannonJS_co_ you can suggest another for above mentioned problem to solve\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-11T16:09:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya s95!  Ya gotta look at this thing... from user _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt__lt_/span_gt_ I think.  It is SO nice... that any maze game programmer SHOULD look it over.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo physics... but darned good collisions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor YOUR maze.. you need to convert black and white image... to walls of maze (let_t_s start by using boxes_co_ like the PG demo above).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ you can temporarily turn OFF physics and heightmaps.  Let_t_s concentrate first... on creating basic box walls... FROM your black and white image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLuckily_co_ a BJS founding father/user named _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt_ did a strange project called _qt_QR-Code Maze_qt_... and I_t_m pretty sure... is uses a black and white image... to create maze walls.  But_co_ I didn_t_t read it.  He might be using an array for the QR-Code image.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.davrous.com/2014/02/19/coding4fun-tutorial-creating-a-3d-webgl-procedural-qrcode-maze-with-babylon-js/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.davrous.com/2014/02/19/coding4fun-tutorial-creating-a-3d-webgl-procedural-qrcode-maze-with-babylon-js/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m a little busy right now_co_ but this is _lt_em_gt_something_lt_/em_gt__co_ at least. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am quite sure that we CAN use black and white pixels from your image... as a _t_map_t_ to produce mesh in wanted positions.  The _qt_canvas and image_qt_ thing you tried... WILL work.  A simple mistake of some kind... caused your 0_co_0_co_0_co_0 results for all pixel values.  Possibly_co_ the image was not yet .isReady when you tried reading pixels from its buffer.  Perhaps it silently 404_t_d_co_ too.  *shrug*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have not done much work with imageBuffers and other context2d things... except maybe this_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#11JINV%2358_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#11JINV#58_lt_/a_gt_  It just gathers an imageBuffer from a BabylonJS GUI-control canvas_co_ fills it with random colors_co_ and puts it back.  Perhaps helpful_co_ perhaps not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will do some study on this_co_ soon.  I_t_m sure others have comments and helpful playgrounds_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn in-playground-code search for _t_getContext_t_ might produce a pile of playgrounds where others have played-with context 2d stuff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?code_eq_getContext_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/playground?code_eq_getContext_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour project is very cool and interesting!  Stay tuned.  Let_t_s build/position boxes from your image_co_ first.  Later we will add physics and heightmaps... if wanted.  One issue at a time_co_ perhaps.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Talk soon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Shadow95","Date":"2018-03-12T09:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks for reply I will try your suggestions _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2018-03-12T10:16:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ thanks for the mention_co_ this is the maze playgorund_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#LYCSQ%23250_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#LYCSQ#250_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tI started it but its now at version 265 I think? _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tOthers are re-working it._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2018-03-12T10:19:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAbout the heightmap_dd_ the BABYLON physics plugins make a heightmap body out of the _qt_ground_qt_ body_co_ but only an approximation_co_ so it only works if the terrain is _qt_soft_qt_ (no big height changes)._lt_br /_gt_\n\tI think it is better to use boxes for the maze_co_ and heightmap (or a box) for a _qt_soft_qt_ terrain._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-12T12:09:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tnot sure what you mean by that? Babylon_t_s cannon plugin (not oimo_co_ as oimo doesn_t_t support heightmap) uses cannon_t_s heightmap_co_ which is actually a wonderful heightmap implementation. It is true that the heightmap should be prepared in a certain way_co_ otherwise the physics engine will not be able to udnerstand it_co_ but it is very accurate. Do you have any example where it is not so?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2018-03-12T12:44:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ I agree_co_ Cannon heightmap is good - the problem is with the algorithm that makes a Cannon heightmap from a mesh._lt_br /_gt_\n\tI made a racetrack with blender_co_ sculpted and about 40k vertices._lt_br /_gt_\n\tThe vertices are not at all at a regular grid_co_ and the mesh is not rectangular. Maybe that is the problem_co_ BABYLON_t_s ground works much better in his situation!_lt_br /_gt_\n\tThe resulting Cannon heightmap was not at all usable_co_ because it had _qt_bumps_qt_ where the plugin filled the (sparse) heights._lt_br /_gt_\n\t_lt_br /_gt_\n\tI_t_m trying to make an example_co_ because I ported a code from cannon to SHOW the heightmap_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/schteppe/cannon.js/blob/569730f94a1d9da47967a24fad0323ef7d5b4119/build/cannon.demo.js#L977_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/schteppe/cannon.js/blob/569730f94a1d9da47967a24fad0323ef7d5b4119/build/cannon.demo.js#L977_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tAlso I made a better create cannon heightmap that fills the _qt_holes_qt_ in the heightmap with a variation of Dijkstra map._lt_br /_gt_\n\tIt works much better (for me)_co_ maybe someone can use it for a similar problem._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tShowing is the best telling so I_t_m back in a few hours..._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-12T13:09:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood thinkings_co_ guys.  Thx for the help.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_... do you remember if any of the entries from the maze-making contest... used a heightmap for its walls?  That would be good to see.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe SHOULD be able to get good no-taper corners and 90 degree angles... with a heightMap...  if the heightMap image has good_co_ clean_co_ no-dither/no-aliasing gray-scale color demarcations at height-change points.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s try one.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#131CZC%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#131CZC#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ ALMOST vertical walls. *shrug*  The image I chose MIGHT have color dithering/anti-aliasing between colors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShadow95_co_ perhaps you could try YOUR image in that playground... see what you think.  Using the image to produce a _lt_u_gt_heightmap-based_lt_/u_gt_ maze... would be easiest.  Other methods are available_co_ just maybe not as easy as this one.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  But there are interesting challenges... when using physics for collisions... mainly in navigating the player character.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-12T13:18:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBabylon_t_s heightmap calculator makes a few assumptions - the mesh is square_co_ and that the vertices are sorted in the way CreateGround is sorting them. This is true. The problem is that otherwise it is (almost) impossible to automate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe solution for that would be to use the MeshImpostor_co_ which will work as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf anyone wants to find a way to automate babylon-mesh to cannon-heightmap without those prerequisites_co_ we all will be very happy! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2018-03-12T15:48:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere it is_co_ press SPACE to show debug mesh on ground._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#131CZC%2327_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#131CZC#27_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tThis shows that create cannon heightmap works well with a groundmesh (as expected)_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2018-03-12T17:46:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis loads my little racetrack._lt_br /_gt_\n\tSPACE starts the heightfield debug (Take caution it can freeze the browser for a minute)_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#131CZC%2334_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#131CZC#34_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tAs you see from the image_co_ the cannon heightfield is not usable_co_ it has bumps and objects fall over._lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/bumpy_heightfield.jpg.a0f1b9a6581a02367451dd39fb3ac906.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_17444_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/bumpy_heightfield.thumb.jpg.9d44aeefc9e8de8027250d3ac9ec9e7e.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_bumpy_heightfield.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-12T18:51:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthis is mainly due to the limitations stated above. have you tried MeshImpostor? or was it too complex?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-12T18:59:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried meshimposter and its too complex kills the scene (even with timeset adjustments) and objects still drop through.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2018-03-12T20:03:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ even cannon heightmap is too slow (for my game_co_ 8 vehicles + many obstacles_co_ powerups and bullets_co_ on a 4-5 yo laptop it runs with 4fps_co_ on my PC 60fps)_lt_br /_gt_\n\tI_t_m now working on Bullet physics on the server side (Node-js _co_ with the wonderful colyseus library)_lt_br /_gt_\n\t_lt_br /_gt_\n\tMy code is here but I can_t_t get it to work._lt_br /_gt_\n\t(It works better_co_ fillse the holes and bumps_co_ but I did not use the physics plugin_co_ so this needs some rework)_lt_br /_gt_\n\tMaybe after some sleep..._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#131CZC%2337_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#131CZC#37_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-13T00:11:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#131CZC%2338_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#131CZC#38_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill broke but dumps possibly-useful traceback to console.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]