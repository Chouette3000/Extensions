[{"Owner":"hunts","Date":"2017-03-23T14:47:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__co_ i_t_ve been trying to load a scene from my github_co_ but it doesn_t_t load anything\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!DOCTYPE html&gt_sm_\n&lt_sm_html&gt_sm_\n    &lt_sm_head&gt_sm_\n        &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_ /&gt_sm_\n\n        &lt_sm_title&gt_sm_Babylon.js sample code&lt_sm_/title&gt_sm_\n        &lt_sm_!-- Babylon.js --&gt_sm_\n        &lt_sm_script src_eq__qt_http_dd_//www.babylonjs.com/hand.minified-1.2.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_http_dd_//www.babylonjs.com/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_http_dd_//www.babylonjs.com/oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_http_dd_//www.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_style&gt_sm_\n            html_co_ body {\n                overflow_dd_ hidden_sm_\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                margin_dd_ 0_sm_\n                padding_dd_ 0_sm_\n            }\n\n            #renderCanvas {\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                touch-action_dd_ none_sm_\n            }\n        &lt_sm_/style&gt_sm_\n    &lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n    &lt_sm_div id_eq__qt_canvasZone_qt_&gt_sm_\n        &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n    &lt_sm_/div&gt_sm_\n    &lt_sm_script&gt_sm_\n        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n        var scene _eq_ new BABYLON.Scene(engine)_sm_\n        \n            if (BABYLON.Engine.isSupported()) {\n                var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n                var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n        \n                BABYLON.SceneLoader.Load(_qt_https_dd_//raw.githubusercontent.com/BabylonJS/Website/master/Scenes/Sponza/_qt__co_ _qt_Sponza.babylon_qt__co_ engine_co_ function (scene) {\n                    // Wait for textures and shaders to be ready\n                    scene.executeWhenReady(function () {\n                    scene.activeCamera.attachControl(canvas)_sm_\n        \n                        // Once the scene is loaded_co_ just register a render loop to render it\n        var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 0.3_co_ scene)_sm_\n        \n            // Move the sphere upward 1/2 its height\n            sphere.position.y _eq_ 1_sm_\n        \n        scene.onPointerDown _eq_ function (evt_co_ pickResult) {\n        console.log(pickResult)_sm_\n        \t\t\t\t\t\tif(pickResult.hit){\n               //  if the click hits the ground object_co_ we change the impact position\n                if (pickResult.pickedMesh.name _eq_ _qt_sphere1_qt_) {\n                  sphere.dispose()\n                }\n                }\n            }_sm_\n        \n                        engine.runRenderLoop(function() {\n        sphere.position.z -_eq_ 0.002_sm_\n                            scene.render()_sm_\n                        })_sm_\n                    })_sm_\n                }_co_ function (progress) {\n                    // To do_dd_ give progress feedback to user\n                })_sm_\n        \n            }\n\n        engine.runRenderLoop(function () {\n            scene.render()_sm_\n        })_sm_\n\n        // Resize\n        window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm_\n    &lt_sm_/script&gt_sm_\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-03-23T14:55:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou need a camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/creating_a_basic_scene_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/creating_a_basic_scene_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hunts","Date":"2017-03-23T15:41:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ it works without the camera on the PG_co_ but when i download the scene as a zip file_co_ it doesn_t_t show anthing_co__co_ importMesh seems to work fine\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-03-23T15:50:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat does your console say?  There is no such thing as _qt_ doesn_t_t load anything_qt_.  This is programming.  You can also turn on additional logging for sceneloader by placing this before the load statement_co_ should the console does not show you your issue_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.loggingLevel _eq_ BABYLON.SceneLoader.DETAILED_LOGGING_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]