[{"Owner":"hen","Date":"2016-08-29T14:35:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have a question about the cannon.js integration in babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually i am working with an authorative server where cannon is running_co_ not using the babylon impostors or any client side physics settings._lt_br /_gt_\n\tThe server is sending a binary stream via websocket to the client and interpolates the transforms of objects_co_ wich works pretty good so far with the most impostors. _lt_br /_gt__lt_br /_gt_\n\tMy problem is with the terrain transformations of the physics body. I create the shape server side similar like its done in babylon_dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_shape _eq_ new CANNON.Heightfield(node.physics.matrix_co_ {\n                    elementSize_dd_ node.physics.elementSize\n                })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThen trying to solve the transformations to be in sync with the heightfield terrain client side_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// quaternion calculated from client mesh\nvar minus90X _eq_ new BABYLON.Quaternion(-0.7071067811865475_co_ 0_co_ 0_co_ 0.7071067811865475)_sm_\nvar quaternion _eq_ mesh.rotationQuaternion.multiply(minus90X)_sm_\n\n// transforms calculated from client mesh\nvar center_sm_\nif (mesh.getBoundingInfo) {\n            center _eq_ mesh.getBoundingInfo().boundingBox.center_sm_\n        }\n        else {\n            center _eq_ mesh.position_sm_\n        }\n\n\nvar position _eq_ BABYLON.Vector3.Zero()_sm_\nposition.copyFrom(center)_sm_\n\nvar translation _eq_ mesh.getBoundingInfo().boundingBox.center.subtract(center).subtract(mesh.position).negate()_sm_\nposition.copyFromFloats(translation.x_co_ translation.y - mesh.getBoundingInfo().boundingBox.extendSize.y_co_ translation.z)_sm_\n\n// body created using the values above server side\nvar body _eq_ new CANNON.Body({\n            mass_dd_ node.physics.mass_co_\n            material_dd_ material_co_\n            quaternion_dd_ quaternion_co_\n            position_dd_ position\n        })_sm_\n\nbody.addShape(shape)_sm_\nphysicsWorld.addBody(body)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere must be something i am missing here_co_ because the body transformations are somehow wrong (wich is hard to debug without having a visualization of the physics body)._lt_br /_gt_\n\tMaybe someone has an idea?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHen\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-29T16:15:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-29T16:30:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17833-hen/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17833_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17833-hen/_qt_ rel_eq__qt__qt__gt_@hen_lt_/a_gt_... hope you_t_re well.  I just want to clarify.  Your scene physics bodies are .position_t_d wrong?  Or .rotationQuat wrong?  Or both?  Or?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe mesh are bouncing off the terrain slopes... incorrectly angled?  If it_t_s a problem with angular (orientation/rotation)... then MAYBE it is off-by exactly 90 degrees rotation around _lt_em_gt_some_lt_/em_gt_ axis?  If so_co_ maybe 3 test buttons in the scene. One - adds 90 degrees to physicsBody quat.x_co_ another to add 90 degrees to physicsBody quat.z_co_ etc.  Perhaps build yourself a trial_t_n_t_error testing scene.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ that_t_s the only idea I have.  You CAN _qt_watch_qt_ a physics imposter... by feeding it_t_s constantly-changing position and quat-rot... TO a standard mesh box... (do it inside the renderLoop).  The box will then exactly track the motions of the physics imposter being used on another mesh.  It is your _qt_imposter monitoring mesh_qt_... and it would likely be best if it had different colors on each face_co_ or possibly labeled top_co_ bottom_co_ rightside_co_ etc.  Also keep in mind that the Quat class on mesh.rotationQuaternion is a BJS Quat class... and the quat on the physics imposter... is a Cannon Quat class.  If you build that _qt_imposter monitor box_qt__co_ make sure you have accurate conversion from Cannon quat to BJS quat.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust thoughts.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-08-29T16:45:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Wingnut!  Thanks! I had to finish some other project wich tooked some time_co_ but now back working on my babylon MMO.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am actually not sure if the problem is with the position or rotation. Its a blackbox_co_ because on the server i see only the position vector and quaternoin values._lt_br /_gt_\n\tWith my test i added a few spheres to fall down to the terrain. On the client i see them falling correctly but they never collide with the (physical) terrain.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProbably im missing something with the transform calculation of the physics body._lt_br /_gt_\n\tI will try to stream a rotating terrain now like you mentioned_co_ may that helps to figure out where the problem is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-29T16:50:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ that could be .position or .rotation (the ground imposter might be tipped on-edge_co_ so it is difficult for a dropping sphere to hit it.) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps add REAL TALL mountains and DEEP valleys... and drop MANY spheres from random places... see if you can hit the side of a mountain/valley.  (indicating a tipped-on-edge ground meshImposter)  *shrug*  Raanan will visit and have good ideas_co_ soon.  He_t_s a genius.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-08-29T17:51:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tEdit_dd_ I solved it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-09-03T17:09:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGreat! Wanna share what the problem was?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-09-05T20:38:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_142567_qt_ data-ipsquote-contentid_eq__qt_24840_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472922598_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 3.9.2016 at 7_dd_09 PM_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tGreat! Wanna share what the problem was?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSure.. there was no problem within the physics code._lt_br /_gt_\n\tIt was my fault because one of the properties did not sync right with the physics server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis works really great now_co_ the players_co_ objects_co_ terrain_co_ its all simulated from the authorative server with an interpolated 10fps binary stream._lt_br /_gt_\n\tWithout to use any headless browser or other hacks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-09-06T00:58:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe keep having reoccurring questions about this_co_ maybe for I can finish my current tutorial that will be the next one.  There are a ton of different ways to accomplish the effect people are looking for but for the most part the information specifically targeted for it is lacking but if you can fill in the gaps it_t_s there.   They did a great job with how bjs handles these calculations and their implementation of different physics systems.  And in the announcement thread there was a mention about energy.js. Hopefully we can have some write ups from a few of the guys so we can get topics like these to be a thing of the past.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17833-hen/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17833_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17833-hen/_qt_ rel_eq__qt__qt__gt_@hen_lt_/a_gt_ Im stoked you figured it out. Is the 10fps binary stream your limit or are you pushing that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hen","Date":"2016-09-06T01:08:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_142856_qt_ data-ipsquote-contentid_eq__qt_24840_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473123524_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWe keep having reoccurring questions about this_co_ maybe for I can finish my current tutorial that will be the next one.  There are a ton of different ways to accomplish the effect people are looking for but for the most part the information specifically targeted for it is lacking but if you can fill in the gaps it_t_s there.   They did a great job with how bjs handles these calculations and their implementation of different physics systems.  And in the announcement thread there was a mention about energy.js. Hopefully we can have some write ups from a few of the guys so we can get topics like these to be a thing of the past.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17833-hen/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17833_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17833-hen/_qt_ rel_eq__qt__qt__gt_@hen_lt_/a_gt_ Im stoked you figured it out. Is the 10fps binary stream your limit or are you pushing that.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is just the update frequence wich interpolates to 60 fps on the client._lt_br /_gt_\n\tI saw the post about energy.js too_co_ wich looks great. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually cannon.js is the only physics engine that works server side with node.js._lt_br /_gt_\n\tEnergy could might be an option if they support that too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]