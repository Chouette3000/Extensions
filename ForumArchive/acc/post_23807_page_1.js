[{"Owner":"Terminator","Date":"2016-07-14T00:00:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using a code to define a VR camera_co_ so when I rotate my phone the camera move_co_ however I want to disable the default movement and change it based on a formula different than the normal one\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1st_co_ here is the code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  //camera\n       cameraPosition _eq_ new BABYLON.Vector3(0_co_ .5_co_ -1.8)_sm_\n       var camera _eq_ new BABYLON.VRDeviceOrientationFreeCamera (_qt_camera_qt__co_ cameraPosition_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand I was able to get the device rotation angles using these_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_window.addEventListener(_qt_deviceorientation_qt__co_ onDeviceMovement_co_ false)_sm_\n\nfunction onDeviceMovement(event){\n  console.log(_qt_Device movement (alpha_co_beta_co_gamma)_dd_ _qt_\n    + event.alpha + _qt__co_ _qt_\n    + event.beta + _qt__co_ _qt_\n    + event.gamma\n  )_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tso assuming that I have the alpha_co_ beta_co_ gamma_co_ how can I disable the current movement_co_ and replace the rotation angles of the camera based on a formula that includes alpha_co_beta and gamma?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-14T14:11:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWOW that would be awesome. What device is this you are using? Please say Gear VR \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the camera has an input which I think you can dispose\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcamera.input.dispose But I am not at all an expert just started using a gamepad with to control VR movement. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have this working it would be fantastic. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-14T15:57:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21732-chicagobob123/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21732_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21732-chicagobob123/_qt_ rel_eq__qt__qt__gt_@chicagobob123_lt_/a_gt_ is right. Thanks to the new input system_co_ you can just remove the current input like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#5W4LY_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#5W4LY_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen you can either implement your own input or just handle the inputs the way you do it right now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Terminator","Date":"2016-07-15T00:45:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor some reason this code didn’t work_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_camera.inputs.removeByType(_qt_FreeCameraVRDeviceOrientationInput_qt_)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\thowever I was able to remove all inputs using this (which solved the input problem for me)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_camera.inputs.clear()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNow my problem is with camera rotation_co_ I was just experimenting how to rotate the camera when I am in the VR Camera mode (in order to link the rotation to the device rotation angles in the next step) but it didn’t work (though the rotation code works with Free Camera).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis playground tries to rotate the VR camera in each frame (but it doesn_t_t work!)_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#18VZJM%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#18VZJM#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis playground is the exact same code as the above but the camera is Free Camera (and the rotation works!)_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#18VZJM%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#18VZJM#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso any idea why/how to make the rotation code works with VR camera?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-15T15:00:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is a mystery. One I have to figure out. I tried. The WebVRFreeCamera and it did not seem to work either. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith out without clearing the input. There has to be something different but I just dont see it yet. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill look at it after I get done with some other code. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-15T15:36:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is because VR camera are not using rotation but rotationQuaternion (To be aligned with what the browser provides)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-15T20:54:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo for your example to rotate the X you can do this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t           //Before rendering each frame_lt_br /_gt_\n\t      scene.registerBeforeRender(function () {_lt_br /_gt_\n\t        _lt_br /_gt_\n\t          var e _eq_ new BABYLON.Vector3(camera.rotation.x_co_0_co_0)_sm__lt_br /_gt_\n\t           camera.rotation.x +_eq_ 0.01_sm__lt_br /_gt_\n\t           camera.rotationQuaternion _eq_ BABYLON.Quaternion.RotationYawPitchRoll(e.y_co_ e.x_co_ e.z)_sm_            _lt_br /_gt_\n\t        })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSeems to work here. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a playground example\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#18VZJM%2325_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#18VZJM#25_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-15T21:23:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Deltakosh that was exactly it. In my GearVR with a bluetooth came controler I was able to get rotation and movement. Kinda nuts. Performance.. Well it was awful. The 3D items seem to move smooth but the camera movements were very rough.This could be because of the bluetooth input. Thats why I hope Terminator can tap into the great Samsung along with the buttons on the side for forward_co_ back_co_ up and down. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Terminator","Date":"2016-07-18T01:46:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tit is an important step that you were able to make the rotation work _lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt_ /_gt__co_ I am lately learning about the Quaternion rotation in order to understand it better_co_ btw I am actually using Google cardboard_co_ and the plan is to use the head rotation in order to rotate the camera_co_ but I am also using ultrasonic sensors in order to detect the player movement (left/right)_co_ so I am not using any controllers but rather the player movement in real life will be reflected in the game.. I am still experimenting with that_co_ so for now_co_ I have no idea how smooth this is going to be_co_ but I have finished a good part so far.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-18T02:02:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI was hoping for a Samsung Gear VR interface but have no idea about how to glue it together. Far as understanding_co_ have a partial on the math but rely on the a Euler conversion\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]