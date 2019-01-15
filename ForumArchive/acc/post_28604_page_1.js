[{"Owner":"etnbrd","Date":"2017-02-22T00:58:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am developing a game with babylon.js_co_ and I use an isometric view (so z coordinate_co_ is actually pointing top left of the screen_co_ and x bottom left) _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var zoom _eq_ 2_sm_\nvar cameraPosition _eq_ new BABYLON.Vector3(5*zoom_co_ 4.1*zoom_co_ 5*zoom)_sm_\n\nvar scene _eq_ new BABYLON.Scene(engine)_sm_\nvar camera _eq_ new BABYLON.TargetCamera(_qt_camera1_qt__co_ cameraPosition_co_ scene)_sm_\ncamera.mode _eq_ BABYLON.Camera.ORTHOGRAPHIC_CAMERA_sm_\ncamera.orthoTop _eq_ 2.5 * zoom_sm_\ncamera.orthoBottom _eq_ -2.5 * zoom_sm_\ncamera.orthoLeft _eq_ -5 * zoom_sm_\ncamera.orthoRight _eq_ 5 * zoom_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tTherefore_co_ when the player wants to go up (velocity.top)_co_ the controlled mesh should increment both z_co_ and x_co_ which results in the following equations _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (player.velocity.top !_eq__eq_ 0 &amp_sm_&amp_sm_ player.velocity.left !_eq__eq_ 0)\n  var d _eq_ 0.7071_sm_ // Cos(45°)\nelse\n  var d _eq_ 1_sm_\n\nplayer.position.z +_eq_ Math.sign(player.velocity.top - player.velocity.left) * d * t_sm_\nplayer.position.x +_eq_ Math.sign(player.velocity.top + player.velocity.left) * d * t_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAll this seems to be working fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Now_co_ I would like the orthographic camera to follow the player when he is moving._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t make the camera target the player_co_ as it breaks the isometric view _dd_ the camera doesn_t_t move to follow the player_co_ it rotates_co_ and as the angle of the camera changes_co_ the isometric view breaks._lt_br /_gt_\n\tInstead_co_ I think I need to move the bounding box of the orthographic camera to be centered on the player position. But because the camera is orthographic_co_ the bounding box doesn_t_t seem to be related to the same coordinates as the player _dd_ the same way position.z is an arbitrary combination of velocity.top and veloctiy.left_co_ orthoTop should be the inverse combination of position.z and position.x.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo instead_co_ my idea was to increment the bounding box by the same amount the player moves (as the velocity is in the same direction than the bounding box).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy tweaking the values_co_ I came up with this approximate solution_co_ which I have a hard time to understand.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (player.velocity.top !_eq__eq_ 0 &amp_sm_&amp_sm_ player.velocity.left !_eq__eq_ 0)\n  var d _eq_ 0.35_sm_ // Cos(45°)³\nelse\n  var d _eq_ 1_sm_\n\ncamera.orthoTop -_eq_ Math.sign(player.velocity.top) * d * t * .7_sm_\ncamera.orthoBottom -_eq_ Math.sign(player.velocity.top) * d * t * .7_sm_\ncamera.orthoLeft -_eq_ Math.sign(player.velocity.left) * d * t * 1.4_sm_\ncamera.orthoRight -_eq_ Math.sign(player.velocity.left) * d * t * 1.4_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt is approximate_co_ because it only minimizes the error of movement between the camera and the mesh. But if the player goes one direction long enough_co_ it will eventually go out of the screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am pretty sure there is an explanation for all this_co_ but can_t_t find it._lt_br /_gt__lt_strong_gt_What is the correct way to make an orthographic camera follow a target in an Isometric view ?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Valik","Date":"2017-09-22T11:12:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti dont know the correct way with the _lt_span_gt_ORTHOGRAPHIC_CAMERA but i also played around with the iso view. Check this pg_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#4NUAEA_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#4NUAEA_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit is not that perfect_co_ changing the camera Position watching the target causes the normal up-down-left-right moving to right-up right-down etc. i corrected it but it still seems not to work like intended.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]