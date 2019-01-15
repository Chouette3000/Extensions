[{"Owner":"georage","Date":"2016-07-09T15:22:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ I am a bit new to this_co_ but have a working hockey rink with a puck and walls that stop the puck_co_ but it seems I cannot use any other impostor shape other than sphere on my puck even though it is defined as a cylinder when created. Thus_co_ the puck ROLLS along the ice instead of sliding like a puck.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a bit of code for the puck and ice.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ice _eq_ BABYLON.Mesh.CreateGround(_t_ice_t__co_ 200_co_ 85_co_ 2_co_ scene)_sm_\n\npuck _eq_ BABYLON.MeshBuilder.CreateCylinder(_qt_puck_qt__co_ {diameter_dd_ 0.3_co_ height_dd_ 0.1_co_ tessellation_dd_ 32}_co_ scene)_sm_\n\n...\n\nice.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(ice_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass_dd_ 0_co_ restitution_dd_ iceBouncy_co_ friction_dd_ lessSlippery }_co_ scene)_sm_\n\npuck.physicsImpostor _eq_ new BABYLON.PhysicsImpostor(puck_co_ BABYLON.PhysicsImpostor.CylinderImpostor_co_ { mass_dd_ 1_co_ restitution_dd_ bouncy_co_ friction_dd_ slippery }_co_ scene)_sm_\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBUT_co_ if I change BABYLON.PhysicsEngine.CylinderImpostor to BABYLON.PhysicsEngine.SphereImpostor it bounces off the ice as expected. Other shapes also do not work. I test with BoxImposter and it did not stop the puck from falling through the ice either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there some reason I can_t_t use CylinderImpostor? I feel this must be something simple I am not doing correctly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for any assistance!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ I am using babylon 2.4 and the latest version of cannon.js\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_script src_eq__qt_http_dd_//cdn.babylonjs.com/2-4/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_script src_eq__qt_http_dd_//www.babylonjs.com/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-07-09T15_dd_24_dd_07Z_t_ title_eq__t_07/09/2016 03_dd_24  PM_t_ data-short_eq__t_2 yr_t__gt_July 9_co_ 2016_lt_/time_gt_ by georage_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_added versions of babylon and cannon i am using\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"georage","Date":"2016-07-10T14:24:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSOLVED_dd_ The secret is to not use GROUND mesh for collisions_co_ apparently. Once I defined _qt_ice_qt_ as a box mesh it gave me a collision with _qt_cylinder_qt_ meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tice _eq_ BABYLON.MeshBuilder.CreateBox(_qt_ice_qt__co_ {height_dd_ 2_co_ width_dd_ 200_co_ depth_dd_ 85}_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure what ground is useful for if it cannot interact with all mesh types???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-11T20:13:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDo you mind creating a sample in the repo? This should work with a ground obejct\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"georage","Date":"2016-07-12T00:20:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUmmmm ... not sure what you mean but I made a playground. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1943IM%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1943IM#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem is that cylinders and other mesh types have to have a minimum height to collide with a ground mesh. In my testing anything under 0.36 cylinder height will fall through a ground mesh_co_ but not a box mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA small box also falls through a ground mesh. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tA small sphere does not fall through a ground mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course I may be doing something wrong. My solution was to use a box for a ground mesh (since the ice surface is flat) and increase the size of my cylinder ... which also helped with collision detection it seems. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-07-12T00_dd_25_dd_19Z_t_ title_eq__t_07/12/2016 12_dd_25  AM_t_ data-short_eq__t_2 yr_t__gt_July 12_co_ 2016_lt_/time_gt_ by georage_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_added more detail\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-12T01:40:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22750-georage/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22750_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22750-georage/_qt_ rel_eq__qt__qt__gt_@georage_lt_/a_gt__co_ welcome to the forum.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1943IM%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1943IM#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHockey!  YAY!  Love it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had to drop the puck from a higher altitude.  Not sure why that changed things_co_ but it did.  Physics engines are weird.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI advanced it a bit further... hope you don_t_t mind.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1943IM%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1943IM#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t get stick-to-puck collisions working.  Maybe others will have better luck.  I forgot how to do physics_co_ somewhere along the trail.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"georage","Date":"2016-07-12T02:37:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for looking at it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat seems like a strange solution_co_ since a hockey puck will drop onto ice from various heights at random times during a game. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSeems like ice should stop a puck no matter what height you dropped it from.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCannon seems very flukey with collisions. I_t_ve never found a good javascript physics engine outside of C. Do we know if the Energy plugin is going to happen? I_t_d like to test that one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-13T14:47:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlright_co_ ya got a big sheet of white ice at the bottom of that last post!  Game on!  hehe  (just having some fun)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1943IM%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1943IM#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTried OimoJS plugin.  (line 65).  Removed the _t_new_t_ keyword_co_ and it acts just like CannonJS. (I also changed cylinder imposter to box imposter_co_ just for testing.  Last I knew_co_ Oimo had no cylinderImposter_co_ and changes cylinderImposters into boxImposters internally_co_ anyway_co_ I believe).  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBack to the Oimo version... when we include the _t_new_t_ keyword in line 65...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1943IM%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1943IM#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...the puck drops at insane speeds_co_ right through the ice_co_ and the sticks drop through_co_ as well. \n_lt_/p_gt_\n\n_lt_p_gt_\n\thmm.  I have not had much chance to play-with the physics engines interface since it was over-hauled by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ a while ago.  Have you toured _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Using_The_Physics_Engine_qt_ rel_eq__qt_external nofollow_qt__gt_his docs_lt_/a_gt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFall-thru has been an issue with these physics engines from day 1... and I don_t_t know what the story is.  Head to the web and search for _t_physics_t_ along with _qt_through wall_qt_ and _qt_through floor_qt_.  Lots of people have this issue.  I wish I could help more.  Maybe others will give opinions/comments.  I will keep thinking_co_ too.  If you do more tests_co_ let us know what you discover_co_ please.  thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-07-13T18:14:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1943IM%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1943IM#7_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-07-13T18:43:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi gang_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlane impostor only collides against spheres and particles (if I remember correctly. Sorry_co_ on mobile now).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCannon has a wonderful collision system_co_ and energy will have it as well ☺. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry using a box impostor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith oimo_co_ try using very large objects (multiply by 100 position and scale). It_t_s an oimo issue which I hope I_t_ll fix soon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEnergy will arrive with 2.5.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"georage","Date":"2016-07-14T12:07:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_135955_qt_ data-ipsquote-contentid_eq__qt_23718_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1468433696_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1943IM%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1943IM#7_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s very cool Adam. Thanks for posting that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]