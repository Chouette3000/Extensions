[{"Owner":"Pryme8","Date":"2016-03-10T01:43:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow would I go about only applying impulses to an imposter if it is in contact with another mesh that uses a mesh imposter?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.registerBeforeRender(function(){\n\t\tinsideSphere.position _eq_ sphere.position_sm_\n\t\t\n\t\tvar forward _eq_ scene.activeCamera.position.subtract(sphere.position).normalize()_sm_\n\t\tforward.y _eq_ 0_sm_\n\t\t\n\t\tif(keys.up){\n\t\t\tsphere.applyImpulse(forward.scale(-1)_co_ sphere.position)_sm_\n\t\t}else if(keys.down){\n\t\t\tsphere.applyImpulse(forward.scale(1)_co_ sphere.position)_sm_\n\t\t\t\n\t\t}\n\t\t\n\t\tif(keys.left){\n\t\t\tcamera.spinAccel +_eq_ 0.1_sm_\n\t\t\tcamera.rotationOffset -_eq_ camera.spinAccel_sm_\n\t\t\t\n\t\t\t\n\t\t}else if(keys.right){\n\t\t\tcamera.spinAccel +_eq_ 0.1_sm_\n\t\t\tcamera.rotationOffset +_eq_ camera.spinAccel_sm_\t\t\t\n\t\t\t\n\t\t}\n\t\t\n\t\tif(!keys.left &amp_sm_&amp_sm_ !keys.right){camera.spinAccel _eq_ 1}\n\t\t\t\n\t})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand then on a side note_co_ is it possible to apply torque as apposed to an impulse?  I tried using_dd__lt_br_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var mq _eq_ sphere.rotationQuaternion_sm_\n\t\t// create quaternion to add\n\t\tvar q _eq_ BABYLON.Quaternion.RotationYawPitchRoll(0_co_ -0.1_co_ 0)_sm_\n\t\tsphere.rotationQuaternion _eq_ q.multiply(mq)_sm_\n\t\tsphere.body.body.setQuaternion(sphere.rotationQuaternion)_sm_\n\t\tsphere.body.body.sleeping _eq_ false_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tbut unfortunately that only spins the model and does not react to the physics engine it looks like?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-10T11:29:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo your first question - you can only apply impulses to meshes that have physics impostors (of course you could simulate it by yourself_co_ but then the physics engine is not iin the game at all). So you will have to create an impostor to this mesh and simply apply an impulse!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr_co_ did I misunderstand your question?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout your second question_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you use Oimo.js you could apply angular velocity to the body_co_ which will cause it to spin_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_sphere.body.body.angularVelocity.init(velocity.x_co_ velocity.y_co_ velocity.z)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-10T15:02:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen using OIMO.js_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can check sphere.body.body.numContacts to see if it is in contact with another imposter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse sphere.body.body.contactLink (linked list) to access the shapes it is in contact with.  Use shape.parent to get the rigidbody.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-03-10T15:28:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYour awnsers combined solved all my questions concerning torque and grounded state thanks you friends! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-03-11T03:52:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok_co_ I dont mean to be a bother but..._lt_br_gt__lt_br_gt_\n\tHow can I do the torque and the collide with cannon?  I need the meshImposter support..._lt_br_gt__lt_br_gt_\n\t***HALF SOLVED***_lt_br_gt_\n\tthis is how I got around the grounded state_lt_br_gt__lt_br_gt_\n\twhen I create the Imposter_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_playerObj.MESH.body.grounded _eq_ false_sm_\n\t\t\t\t\n\t\t\t\tplayerObj.MESH.body.collisionResponse _eq_ 0_sm_\n\t\t\t\tplayerObj.MESH.body.addEventListener(_qt_collide_qt__co_ function(e){ playerObj.MESH.body.grounded _eq_ true_sm_\n\t\t\t\tplayerObj.MESH.body.collisionResponse _eq_ 1_sm_\n\t\t\t\t } )_sm_\n\t\t\t\tgameSettings.playerObject _eq_ playerObj.MESH_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\ton my scene register_dd__lt_br_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if(gameSettings.playerObject.body.collisionResponse){\n\t\t\tgameSettings.playerObject.body.grounded _eq_ true_sm_\n\t\t\t}else{\n\t\t\tgameSettings.playerObject.body.grounded _eq_ false_sm_\t\n\t\t\t}\n\t\t\tif(keys.space &amp_sm_&amp_sm_ gameSettings.playerObject.body.grounded){\n\t\t\t\tgameSettings.playerObject.body.collisionResponse _eq_ 0_sm_\n\t\t\t\tvar jumpVector _eq_ new BABYLON.Vector3(0_co_6.5_co_0)_sm_\n\t\t\t\tgameSettings.playerObject.applyImpulse(jumpVector_co_ gameSettings.playerObject.position)_sm_\t\n\t\t\t\t\t\n\t\t\t}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tthere is a little extra script in there but anyone that wants check if an object is grounded can go about it in this manor.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-03-11T22:32:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_public setAngularVelocity(velocity_dd_ Vector3) {\n            this._physicsEngine.getPhysicsPlugin().setAngularVelocity(this_co_ velocity)_sm_\n        }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI have found this line in _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/babylon.physicsEngine.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/babylon.physicsEngine.ts_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut for some reason all attempts to call this method have failed_lt_br_gt_\n\ti figured it would be as simple as playerObject.setAngularVelocity(vec3) or playerObject.body.setAngularVelocity(vec3) or even playerObject.body.body.setAngularVelocity()  but all have failed _dd_-(\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-17T21:18:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis line if from the physics impostor and not from the physics engine. Which would give a clue as to which object holds it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_playerObject.physicsImpostor.setAngularVelocity(vec3) _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_span_gt_would do the job._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]