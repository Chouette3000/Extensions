[{"Owner":"GrosSacASacs","Date":"2016-05-03T14:02:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI import mesh from a json babylon file into BabylonJS with BABYLON.SceneLoader.ImportMesh_co_ I then use scene.beginAnimation(allMeshes[meshName]_co_ 0_co_ 100_co_ true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis works well for 1 animation. How can I have multiple animation for 1 mesh ( walking_co_ running_co_ idle_co_ laughing) and use it in Babylon ? In Blender you can give names to the different actions. I searched the docs but didn_t_t found an answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1 temporary solution I see_co_ import the same mesh with 1 different animation multiples times_co_ and when we want to start an animation we replace the mesh with the same at the same position except it has a different animation and then call scene.beginAnimation .\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-03T16:33:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello we are supporting named animations (actions) from blender (suing  _lt_span style_eq__qt_color_dd_rgb(121_co_93_co_163)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_16.8px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_AnimationRang)_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.executeWhenReady(function () {\n     // Attach camera to canvas inputs\n     scene.activeCamera.attachControl(canvas)_sm_\n\n     // Once the scene is loaded_co_ register a render loop\n     engine.runRenderLoop(function() {\n         scene.render()_sm_\n     })_sm_\n     var skeleton1 _eq_ scene.getSkeletonByName(_qt_Armature_qt_)_sm_\n\n     skeleton1.beginAnimation(_qt_walk_qt_)_sm_         \n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tJust search the forum for _qt_AnimationRange_qt_ to get more example\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]