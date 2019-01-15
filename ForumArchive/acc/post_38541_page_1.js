[{"Owner":"MackeyK24","Date":"2018-06-29T01:33:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys... I never actually used the babylon action manager (or observables) before_co_ i was handling all interactions myself. But i want to setup some kind of metadata so i can configure\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh actions in the Unity Editor Toolkit. But what i think should is not... This is what i thought is a simple click action\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Setup pick action\nsphere.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\nsphere.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger_dd_ BABYLON.ActionManager.OnPickTrigger }_co_ function() {\n   console.log(_qt_Got Pick Action_qt_)_sm_\n}))_sm_    _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut dont get anything if _t_Click_t_ on the sphere _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Please check this playground _lt_/span_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#4SH4JZ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#4SH4JZ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SinhNQ","Date":"2018-06-29T02:28:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFixed_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#4SH4JZ%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#4SH4JZ#1_lt_/a_gt_ _lt_span class_eq__qt_ipsEmoji_qt__gt_😁_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-06-29T02:49:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou were nearly there_co_ but if you don_t_t supply a parameter with your constructor object_co_ then you need to pass a number (BABYLON.ActionManager.OnPickTrigger is a number) as SinhNQ did.  Here is your PG with the extra property added to trigger options_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#4SH4JZ%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#4SH4JZ#2_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tYou can see here in the super constructor that you need a parameter_co_ even if it_t_s empty_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Actions/babylon.action.ts#L37_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Actions/babylon.action.ts#L37_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-06-29T03:06:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks guys... Both of you _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-06-29T03:33:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOne more question... i assumed _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt_ was using a trigger action on the circle mesh in the mansion. His quote_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhen looking at the circle mesh on top of the door of the mansion_co_ the gaze cursor will change from white to blue and will become bigger. This is to indicate to the user he can launch an action associated to this mesh. To trigger it_co_ simply press the A button of the gamepad while looking at it.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell i tried to setup a mesh and change the material with the onpicktrigger... it does work from the mouse click... but in VR mode it does not....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is the trigger you are using to trigger the ghost in the window that works with gamepad A button ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_UPDATE_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think _lt_strong_gt_OnPickUpTrigger_lt_/strong_gt_ works with Mouse Click and Gamepad A button when no controller... Is That Right ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut not for VR Controller Trigger_co_ how the heck did he set that up _lt_strong_gt_ACTION_lt_/strong_gt_ in 3DS Max ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-06-29T04:03:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s all done in the .babylon file (50MB+)_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs.com/Scenes/Mansion/Mansion.babylon_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs.com/Scenes/Mansion/Mansion.babylon_lt_/a_gt__lt_br /_gt_\n\tThat file crashed my VSCode and took forever to open in Sublime_co_ but I did find some nested actions starting with OnLeftPickTrigger - does that work?  Find the action you are after and then you need to generate that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-06-29T04:34:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219974_qt_ data-ipsquote-contentid_eq__qt_38541_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530245015_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 minutes ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt_t_s all done in the .babylon file (50MB+)_dd__lt_br /_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs.com/Scenes/Mansion/Mansion.babylon_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs.com/Scenes/Mansion/Mansion.babylon_lt_/a_gt__lt_br /_gt_\n\t\t\tThat file crashed my VSCode and took forever to open in Sublime_co_ but I did find some nested actions starting with OnLeftPickTrigger - does that work?  Find the action you are after and then you need to generate that.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat did it... OnLeftPickTrigger works with Mouse Click_co_ Gamepad A Button And VR Pointer Click Or Trigger _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_ ..._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Wait til you guys  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ see the support i added to the toolkit for WebVR using Dave_t_s VRExperienceHelper in my SceneManager_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Things Like_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_strong_gt_Controller Prefabs_lt_/strong_gt_... Now you can use a fully scripted up with nested hierarchy component prefab as your Left and Right VR Controllers..._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Floor Mesh Tags_lt_/strong_gt_... You can now Unity Tag or Babylon Component Tag your floor meshes including terrains... But even though has been an awesome feature for me by itself_co_ i add \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbuilt in Unity Tag called _t_Navigation_t_ that the Camera Rig defaults to (you can change or add to it of course) . So you can simple tag your floor meshes with that... But wait... even BETTER...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Navigation Mesh Teleportation_lt_/strong_gt_... I tied the Built-in Unity Navigation Mesh Generator to TAG itself as _t_Navigation_t_... So instead of using a bunch of arbitrary meshes as floor meshes... You can bake a Navigation mesh with WALKABLE surfaces. The same Nav Mesh you would use for AI to say what is a walkable surface you can now TELEPORT on... It also prevents you from teleporting INSIDE static meshes because the nav mesh has CUTOUTS of NON-WALKABLE areas... You can also now bake the navmesh to use multiple levels in a building... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou basically DRAPE a navigation mesh over your entire scene defining walkable areas to teleport on... i am using it and works perfect... with the ONE single LOW poly mesh DRAPED accros my secene _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll this again... with NO lines of code_co_ just configure the camera rig.... Unless you need runtime access to the VRExperienceHelper for more complex intereactions...  You can easily using the internal scene manager VRExperienceHelper exposed as manager.webvr\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tComing Soon with the 3.3 Beta _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-06-29T08:52:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt_ i got another issue... While in VR Mode if you double click the mouse it comes out of VR mode as if i the the ESC button. Weird.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_UPDATE_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEven this simple VR demo exits VR mode on double click... _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#HARNA9%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#HARNA9#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs that by design?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2018-06-29T09:48:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes it_t_s by design to let mobile getting out of VR by double tapping on the screen. It shouldn_t_t be an issue as you_t_re not supposed to double click while in VR_co_ no?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-06-29T10:26:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tKool deal _lt_span class_eq__qt_ipsEmoji_qt__gt_😊_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]