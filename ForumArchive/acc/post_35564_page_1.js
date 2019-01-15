[{"Owner":"vrent","Date":"2018-02-07T23:22:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDisclaimer_dd_ I_t_m very new to Babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was playing around with this _lt_a href_eq__qt_https_dd_//blog.raananweber.com/2016/04/03/cloth-physics-simulation-for-babylon-js/_qt_ rel_eq__qt_external nofollow_qt__gt_cloth tutorial_lt_/a_gt__co_ and I wanted to make the cloth land on some sort of ground object.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo far_co_ I haven_t_t been able to find one that works.  You can see in this _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#JE2GZM%231_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_ how the cloth reacts to a box impostor_co_ side-by-side with a sphere behaving normally.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have the restitution of everything set to 0.  The sphere stops nicely but the cloth shoots off into the distance.  I_t_ve also tried this with a ground impostor (sphere works fine_co_ cloth doesn_t_t interact with the ground)_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand a plane impostor (cloth collides correctly_co_ but sphere shoots up into the stratosphere).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have also tried adjusting the initial linear velocity of the cloth particles.  More velocity _eq_ flies away faster_co_ less velocity _eq_ falls right through the ground.  My ultimate goal involves the cloth having an initial z velocity_co_ so I_t_d like to be able to make that work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan someone help me figure out what I_t_m missing here?  Does it have something to do with the distance joints connecting the particles in the cloth? Should I try using sphere impostors instead of particles?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(side note_dd_ is there a better way to translate the cloth_t_s position than the translatePositions function I made? The built-in ground.rotation.axis method rotates the cloth_co_ but not the actual particles themselves)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-08T00:37:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya vrent_co_ welcome to the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#JE2GZM%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#JE2GZM#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s see... your translate func had a _qt_fencepost error_qt_ (off-by-one).  Line 7 needed to be _qt_length+1_qt_.  Minor issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUm... line 27... enabling physics.  You have not specified WHICH physics engine you want to use... CannonJS or OimoJS.  Sooo... it automatically chooses CannonJS.  This USED TO BE... OimoJS by default.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAND.... this playground was likely intended for OimoJS_co_ but I_t_m not sure.  I_t_m speculating.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I_t_m not sure which physics engine(s) allow a _qt_particleImposter_qt_ and which don_t_t.  ParticleImpostors are sort of rare.  SO_co_ in line 89_co_ I changed ParticleImpostor... to SphereImpostor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I did that_co_ things started acting better.  At least the cloth-ground is colliding with the realGround_co_ now.  Yay!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also disabled line 52_co_ temporarily (turned off cloth texture so I could see _qt_the spheres_qt_ and imagine the many joints that bind them together).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh heck_co_ let_t_s go a bit further.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#JE2GZM%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#JE2GZM#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn line 90_co_ I changed BACK-TO ParticleImpostor_co_ and in line 26_co_ I _qt_forced_qt_ the use of OimoJS physics engine.  And look_co_ it works!  Yay.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ what we have deduced... is that ParticleImpostors for CannonJS... are grumpy or somehow not working.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s ping _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_... see if he wants to know about this.  He_t_s done lots of work on our physics engine interfaces.  He is real-life busy_co_ though... so perhaps you and I will go _qt_diving_qt_ into the CannonJS plugin and see if we can figure out why it dislikes ParticleImpostors (over a few days).  Perhaps other forum users will help/go-along.  But_co_ perhaps physics God RaananW... will know why CannonJS is being grumpy._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Meantime_co_ you have some working demos... you know a bit more_co_ and you can drop some cloth.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I once made a cloth demo_co_ based upon Raanan_t_s cloth_dd_  _lt_/span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1M67K8%2318_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1M67K8#18_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice something else?  It_t_s a CannonJS physics demo... with working ParticleImpostors!  hmm.  Wingnut_t_s hypothesis about Cannon disliking ParticleImpostors... is ALL WRONG!  OH NO!  _dd_/\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan we deduce anything new?  Just possibly... CannonJS dislikes your _qt_translatePositions_qt_.  Mr. Cannon doesn_t_t want his cloth tipped-sideways.  hmm.  But then again_co_ I have a reputation for being wrong_co_ often.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll leave the mystery hanging...  right there.  We have an investigation/case_co_ my dear Watson!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Be well_co_ talk soon.... hope I have been helpful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_  Need a little more speed from your physics engine?  _lt_strong_gt_scene.getPhysicsEngine().getPhysicsPlugin().setTimeStep(.07)_sm__lt_/strong_gt_   (I think default speed is about .0166)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vrent","Date":"2018-02-08T02:07:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst off_co_ thanks so much for diving into the code and coming up with such an in-depth response!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe original tutorial (Raanan_t_s actually) had a playground for both Cannon and Oimo.  I started using the Cannon one_co_ for no particular reason.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you don_t_t mind_co_ could you elaborate on why ParticleImpostors aren_t_t used very often?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn that vein_co_ I fixed the off-by-one error (whoops)_co_ and converted the cloth to use SphereImpostors with Cannon like you did and it behaves much better!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRE_dd_ rotating the _qt_cloth ground_qt_ and my translatePositions function_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit_t_s strange that rotating the cloth moved the ground itself but not its vertices. The vertices remain unchanged after a rotation_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_console.log(ground.getVerticesData(BABYLON.VertexBuffer.PositionKind))_sm_ // same result\n\nground.rotate(BABYLON.Axis.X_co_ Math.PI / 2)_sm_\n\nconsole.log(ground.getVerticesData(BABYLON.VertexBuffer.PositionKind))_sm_ // same result\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand I end up with a weird _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#JE2GZM%236_qt_ rel_eq__qt_external nofollow_qt__gt_shadow cloth_lt_/a_gt_ disembodied from the SphereImpostors.  Using your playgrounds as examples_co_ it_t_s more like _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1M67K8%2312_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt_ than _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1M67K8%2314_qt_ rel_eq__qt_external nofollow_qt__gt_that_lt_/a_gt_.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\ttranslatePositions ended up doing the trick_co_ but there is some strange behavior here that I don_t_t quite get.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLast point_dd_ I think you were on the money with there being something funky about Cannon.js_t_s ParticleImpostors_co_ at least when they interact with certain other impostors (like the box).  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#JE2GZM%237_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_ _lt_em_gt_with_lt_/em_gt_ the translatePositions method and a static sphere_co_ that works fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere are some _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#JE2GZM%237_qt_ rel_eq__qt_external nofollow_qt__gt_other_lt_/a_gt_  _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#JE2GZM%2310_qt_ rel_eq__qt_external nofollow_qt__gt_playgrounds_lt_/a_gt_ _lt_em_gt_without_lt_/em_gt_ using translatePositions_co_ where the cloth behaves strangely when interacting with a BoxImpostor. (the second one is a pretty sweet magic carpet).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d love to help hunt down further issues as best I can_co_ but I_t_m not sure how useful I_t_ll be at breaking down the inner workings of Cannon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-08T13:05:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ nice work!  By doing those playground experiments_co_ you have already helped the investigation MUCH.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m no expert_co_ but... rotating the cloth-ground... rotates the mesh_co_ but not the pattern/layout of the _qt_array of physics-active spheres_qt_ (this you have said already_co_ and it is the reason your coded the translatePositions func).  I think you need a mesh.bakeCurrentTransformIntoVertices()... after a standard .rotation_co_ but before the spheres-array building.  Then you will no longer need translatePositions() function.  (my theory)  More below.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour _qt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1M67K8%2312_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt__qt_ playground shows it perfectly.  The cloth_t_s mesh has been inverted_co_ but not the array-of-spheres.  Lines 54-78 builds the array-of-spheres_co_ of course.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t understand _qt_transforms_qt_ real well_co_ so_co_ you_t_ll have to play with that area to learn more.  If Raanan visits (author of the cloth demo)... perhaps he will explain more.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRaanan also has this demo pretty well documented... here_dd_  _lt_a href_eq__qt_https_dd_//blog.raananweber.com/2016/04/03/cloth-physics-simulation-for-babylon-js/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//blog.raananweber.com/2016/04/03/cloth-physics-simulation-for-babylon-js/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is command...  mesh.bakeCurrentTransformIntoVertices() that might be handy for you.  I don_t_t know if ANY BJS .rotation or .rotate... actually re-positions any vertices (inn localSpace).  I think they both _qt_apply a transformation_qt_... but to actually _qt_permanentize_qt_ (naturalize?) that transformation... we use the bake command as shown above. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ your sequence of events might be... rotate the cloth-ground_co_ bake its transforms into the vertices_co_ and THEN do the sphere-array building.  The array-builder will now have a MUCH different mesh to use... as it_t_s array-building template.  You can likely say goodbye to your translatePositions function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ if you are headed-for _qt_magic carpet_qt__co_ then there will need to be OTHER changes in the array-builder.  Primarily... this line... _lt_strong_gt_var mass _eq_ idx &lt_sm_ width ? 0 _dd_ 1_sm_  _lt_/strong_gt_That line... causes the top row of mass-less particleImpostors.  These are the anchor impostors that the cloth hangs-from (I sometimes call them _qt_steads_qt_ - short for _qt_steady_qt_ and derived from _qt_homestead_qt_). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen you rotate into flying carpet... you will need to _qt_hold-up_qt_ the carpet using some other methods.  You will AT LEAST need a mass-free particleImpostor on each of 4 corners... to keep the carpet from falling from the sky.  OR_co_ you need to turn-off scene gravity or physics engine gravity.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is another way - near-constantly doing tiny .applyImpulse in upward directions... on all the particleImpostors.  Some fancy things can be done... to _qt_overload_qt_ the particleImpostors... making them _qt_smart_qt_.  Each impostor might have a .checkMyAltitude() function.  This function would be called on each particleImpostor... constantly_co_ via a for/next loop inside the renderLoop (registerBeforeRender).  In that function... pseudo-code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif (carpet.wantedAltitude.y - this.position.y &gt_sm_ 1.0) { this.applyImpulse(new BABYLON.Vector3(0_co_ .35_co_ 0)_co_ this.position }  // thrust this impostor upward a bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo promises.  Just an idea_co_ and not a very good one.  Also_co_ this might cause a strange low-altitude wave pattern... to constantly pass-across the carpet.  It might look cool.  Not sure.  Nobody has tried this kind of thing before_co_ as far as I know.  You_t_re the first.  Just some thoughts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLastly_co_ do you know about Quaternions_co_ or more specifically_co_ mesh.rotationQuaternion?   I don_t_t either... but I_t_ll tell you what little I know.  Normally_co_ a BJS mesh has no .rotationQuaternion property_co_ and instead uses the Euler-based .rotation property to store it_t_s rotation (transformation).  You can see the affects of a bake... this way.  Try rotating the ground-cloth or ANY mesh (before adding any physics) with a mesh.rotation _eq_ whatever.  Dump your .rotation property to JS console_co_ so you can see it.  Now do the mesh.bakeCurrentTransformIntoVertices()... and view the .rotation property again.  It will show 0_co_0_co_0.  That_t_s why I call bake...a _qt_permanentizer_qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  It makes the rotation you added... permanent.  It does this by _qt_moving_qt_ (transforming?) all the positionKind data of the mesh (same as your translatePositions func). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMesh SHOULD need to be set _qt_updatable_qt_ _eq_ true... in order to do this.  BUT... I think bakes ignore the updatable flag on mesh.  Fun stuff to try.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as I know... ALL mesh need to use .rotationQuaternion for their rotation storage... when they are physics-active.  Physics engines LOVE Quaternions_co_ and in most cases... the Euler .rotation property will be completely ignored by physics engines.  So_co_ to _qt_see_qt_ the rotation of a physics-active mesh_co_ you might do _lt_strong_gt_console.log(mesh.rotationQuaternion)_lt_/strong_gt_ or _lt_strong_gt_console.log(mesh.rotationQuaternion.toEulerAngles())._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO much crap to deal-with_co_ eh?  Physics engines are somewhat complicated.  An adventuresome spirit and a big jug of enthusiasm juice... is often necessary.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-----------------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust a big pile of bad news from Wingnut_co_ eh?  Sorry.  There are some _qt_Gods_qt_ around here that know transformations like they are best friends... but not Mister Wingnut.  You have taken-on a pretty serious project here... but it IS do-able... and the result will be very cool_co_ I think.  Physics engines are pretty strict.  Often_co_ the impostor wants to have full control of the mesh_co_ and YOU_co_ as a programmer... sort of need to _qt_ask_qt_ the physics engine to perform movements that you want (floating in one place_co_ even while gravity is ON and masses are set).  The engine doesn_t_t really care what you want_co_ and if it thinks it is time for the carpet to drift-away... it will drift it away.  You will need to use .rotate()_t_s sister function... .translate()_co_ OR use applyImpulse() [puffs of thrust/wind]... to keep the carpet from drifting away.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s not really that bad... but p-engines tend to surprise us.  They seem to act very strange at times_co_ but_co_ both our engines are pretty well tested.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--------------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh yeah_co_ I forgot to answer WHY particleImpostors are rare.  It_t_s simply because not many people have experimented/tested with them.  Most people want to tumble a box. or roll a sphere_co_ or drive a vehicle across a heightMap impostor... which might also use particleImpostors... I haven_t_t investigated the code in our physicsPlugins to see how heightmapImpostors do their stuff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou... are being very brave and adventuresome.  Cool.  We just need to make sure that you don_t_t get a brain tumor_co_ or go insane.  If your project has a _qt_deadline_qt__co_ then... you might want to make sure that is plenty flexible. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  We have a shortage of physics experts around here_co_ because there aren_t_t any wonderful docs for these 3rd-party-authored engines.  AND... because learning the physics engines well... is a large time-consuming task.  SO... learning physics engines often comes down-to... experimenting - see what happens... see what works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ some of us are thinking... that the next generation of computers will have hardware/firmware physics engines that might be accessible from JS/webGL.  RaananW and others did a GREAT JOB at TRYING to make our physics interfaces to the 3rd party physics engines... as easy as possible.  But_co_ it_t_s still not wonderful... not without having a basic understanding of how ALL physics engines work.  This forum is actually STARVING for more physics experts... because lots of people LOVE physics sims.  They are very difficult to _qt_teach_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI dunno if you have been following my insane joint experiments in The Wingnut Chronicles thread... but it doesn_t_t take long to notice that I have talked 100_co_000 words in 20 posts... ONLY about an OimoJS hinge joint... and I_t_m still only half-way to being an expert.  JUST learning a basic hinge joint (although I took some breaks to experiment with Babylon GUI system).  There are about 8 different kinds of joints... and they each have math formulas that can scare a professor.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I estimate that... to learn ONE physics engine REAL NICELY... it would take about 3 years of dedicated study/experimenting.  erf!  But I foresee it as a _qt_hot commodity_qt_ for the future.  I foresee ALL 3D game/sim companies... having _qt_a physics person_qt_ on-staff_co_ all the time.  Hot hot hot.  High demand... even if the engines move to hardware-level in next-gen computers.  Folks will STILL need to know how to drive those physics engines_co_ no matter where they reside.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry... Wingnut rattling-on_co_ aimlessly... and surely from an odd and possibly discouraging perspective.  I don_t_t have great learning abilities_co_ myself.  I_t_m quite weak in math_co_ and projective geometry_co_ and matrix transformations.  I need to SEE IT HAPPEN_co_ and cannot see it happen by studying a math formula.  Others CAN do that_co_ though.  They can code math... while a 3D scene is happening in their head.  I envy those people. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe have a few of those around here_co_ but they are SO SO busy in real life... because of those same _qt_think math in 3d_qt_ -skills. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll be here to help/talk/mess-with your playgrounds.  My suggestion_dd_ turn OFF the gravity... and play with the code that builds the array of spheres.  Use a simple groundcloth.rotation.x _eq_ -Math.PI/2_co_ then do the _lt_strong_gt_bake_lt_/strong_gt_  (without using your translate func).  Then see what _qt_orientation_qt_ the array-builder... creates.  By turning off gravity_co_ there will be no _qt_falling_qt_ of any kind_co_ so you can easily see the natural orientation of the spheres-array/sheet.  You can see if your bake... worked.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Party on_co_ talk again soon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]