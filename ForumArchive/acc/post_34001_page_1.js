[{"Owner":"MSLX","Date":"2017-11-14T15:17:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am facing an issue where Door animation is not playing in a particular situation. If I am loading only one babylon file then the animation plays without any issues. But If I have multiple babylon files then the animation is not played.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is part of my js code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif (BABYLON.Engine.isSupported()) {_lt_br /_gt_\n\t        _lt_br /_gt_\n\t        canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm__lt_br /_gt_\n\t        engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_br /_gt_\n\t        scene _eq_ new BABYLON.Scene(engine)_sm_    \n_lt_/p_gt_\n\n_lt_p_gt_\n\t        BABYLON.SceneLoader.Append(_qt_./_qt__co_ _qt_Walls.babylon_qt__co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        scene.executeWhenReady(function () {_lt_br /_gt_\n\t            _lt_br /_gt_\n\t            scene.gravity _eq_ new BABYLON.Vector3(0_co_ -0.9_co_0)_sm__lt_br /_gt_\n\t            scene.activeCamera.ellipsoid _eq_ new BABYLON.Vector3(1000_co_1000_co_1000)_sm__lt_br /_gt_\n\t            scene.collisionsEnabled _eq_ true_sm__lt_br /_gt_\n\t            scene.activeCamera.checkCollisions _eq_ true_sm__lt_br /_gt_\n\t            //scene.activeCamera.applyGravity _eq_ true_sm_    _lt_br /_gt_\n\t            scene.activeCamera.maxZ _eq_ 80000_sm_    _lt_br /_gt_\n\t            _lt_br /_gt_\n\t            // Attach camera to canvas inputs_lt_br /_gt_\n\t            scene.activeCamera.attachControl(canvas)_sm__lt_br /_gt_\n\t            _lt_br /_gt_\n\t            BABYLON.SceneLoader.ImportMesh(null_co_ _qt_./_qt__co_ _qt_Ceiling.babylon_qt__co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            var door1 _eq_ scene.getMeshByName(_qt_Door1_qt_)_sm__sm__lt_br /_gt_\n\t            var frameRate _eq_ 20_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            // Trigger Boxes_lt_br /_gt_\n\t            var openTriggerBox _eq_ BABYLON.Mesh.CreateBox(_qt_openTriggerBox_qt__co_ 3000_co_ scene)_sm__lt_br /_gt_\n\t            openTriggerBox.position.x _eq_ 746.9932_sm__lt_br /_gt_\n\t            openTriggerBox.position.y _eq_ 1500_sm__lt_br /_gt_\n\t            openTriggerBox.position.z _eq_ -4287.0_sm__lt_br /_gt_\n\t            openTriggerBox.checkCollisions _eq_ true_sm__lt_br /_gt_\n\t            openTriggerBox.isVisible _eq_ false_sm__lt_br /_gt__lt_br /_gt_\n\t            scene.activeCamera.onCollide _eq_ function (colMesh) {_lt_br /_gt_\n\t                if (colMesh.uniqueId _eq__eq__eq_ openTriggerBox.uniqueId) {_lt_br /_gt_\n\t                    openTriggerBox.collisionsEnabled _eq_ false_sm__lt_br /_gt_\n\t                    openTriggerBox.checkCollisions _eq_ false_sm__lt_br /_gt_\n\t                    scene.beginDirectAnimation(hingeDoor1_co_ [openDoor1]_co_ 0_co_ 25 * frameRate_co_ false)_sm__lt_br /_gt_\n\t                    scene.beginDirectAnimation(hingeDoor2_co_ [openDoor2]_co_ 0_co_ 25 * frameRate_co_ false)_sm__lt_br /_gt_\n\t                }_lt_br /_gt_\n\t            }_lt_br /_gt__lt_br /_gt_\n\t            var hingeDoor1 _eq_ BABYLON.MeshBuilder.CreateBox(_qt_hinge1_qt__co_ {}_co_ scene)_lt_br /_gt_\n\t            hingeDoor1.isVisible _eq_ false_sm__lt_br /_gt_\n\t            door1.parent _eq_ hingeDoor1_sm__lt_br /_gt_\n\t            hingeDoor1.position.y _eq_ 2_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            //for door 1 to open and close_lt_br /_gt_\n\t            var openDoor1 _eq_ new BABYLON.Animation(_qt_openDoor1_qt__co_ _qt_position.x_qt__co_ frameRate_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            var open1_keys _eq_ []_sm_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t            open1_keys.push({_lt_br /_gt_\n\t                frame_dd_ 0_co__lt_br /_gt_\n\t                value_dd_ 0_lt_br /_gt_\n\t            })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            open1_keys.push({_lt_br /_gt_\n\t                frame_dd_ 3 * frameRate_co__lt_br /_gt_\n\t                value_dd_ -1000_lt_br /_gt_\n\t            })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            openDoor1.setKeys(open1_keys)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            engine.runRenderLoop(function() {_lt_br /_gt_\n\t                scene.render()_sm__lt_br /_gt_\n\t            })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I remove \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.SceneLoader.ImportMesh(null_co_ _qt_./_qt__co_ _qt_Ceiling.babylon_qt__co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tline from above code then the animation works without any issues. Can anyone please point me to the mistake I am doing in this code or the solution to the problem.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-11-14T15:54:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would put the 2nd importMesh before the executeWhenReady.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mr_pinc","Date":"2017-11-14T15:58:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCreate a playground that illustrates the problem and we_t_ll be able to help you sort it out. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MSLX","Date":"2017-11-15T07:00:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_195100_qt_ data-ipsquote-contentid_eq__qt_34001_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1510674850_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI would put the 2nd importMesh before the executeWhenReady.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIf I put ImportMesh before executeWhenReady_co_ the files never load. It will keep showing babylonjs default loading screen.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_195101_qt_ data-ipsquote-contentid_eq__qt_34001_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1510675137_qt_ data-ipsquote-userid_eq__qt_26336_qt_ data-ipsquote-username_eq__qt_mr_pinc_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ mr_pinc said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCreate a playground that illustrates the problem and we_t_ll be able to help you sort it out. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI am not aware of how to use SceneLoader in playground. However_co_ I have attached a simple scene with a box and sphere to replicate the issue. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tb.babylon has a plane_co_ box and sphere. t.babylon has a teapot. A simple animation is attached to Sphere. Whenever camera collides with the Box_co_ sphere moves 5000 units in x direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I load only b.babylon the animation plays. But If I load t.babylon also using ImportMesh then the animation doesn_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_15676_qt__gt_anim.zip_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-15T19:32:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tlet me try to fix your code in blind mode _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_language-javascript_qt__gt_if (BABYLON.Engine.isSupported()) {\n        \n        canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n        engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n        scene _eq_ new BABYLON.Scene(engine)_sm_    \n\n        BABYLON.SceneLoader.Append(_qt_./_qt__co_ _qt_Walls.babylon_qt__co_ scene)_sm_\n\n        scene.executeWhenReady(function () {\n            \n            scene.gravity _eq_ new BABYLON.Vector3(0_co_ -0.9_co_0)_sm_\n            scene.activeCamera.ellipsoid _eq_ new BABYLON.Vector3(1000_co_1000_co_1000)_sm_\n            scene.collisionsEnabled _eq_ true_sm_\n            scene.activeCamera.checkCollisions _eq_ true_sm_\n            //scene.activeCamera.applyGravity _eq_ true_sm_    \n            scene.activeCamera.maxZ _eq_ 80000_sm_    \n            \n            // Attach camera to canvas inputs\n            scene.activeCamera.attachControl(canvas)_sm_\n            \n            BABYLON.SceneLoader.ImportMesh(null_co_ _qt_./_qt__co_ _qt_Ceiling.babylon_qt__co_ scene_co_ function() {\n var door1 _eq_ scene.getMeshByName(_qt_Door1_qt_)_sm__sm_\n            var frameRate _eq_ 20_sm_\n\n            // Trigger Boxes\n            var openTriggerBox _eq_ BABYLON.Mesh.CreateBox(_qt_openTriggerBox_qt__co_ 3000_co_ scene)_sm_\n            openTriggerBox.position.x _eq_ 746.9932_sm_\n            openTriggerBox.position.y _eq_ 1500_sm_\n            openTriggerBox.position.z _eq_ -4287.0_sm_\n            openTriggerBox.checkCollisions _eq_ true_sm_\n            openTriggerBox.isVisible _eq_ false_sm_\n\n            scene.activeCamera.onCollide _eq_ function (colMesh) {\n                if (colMesh.uniqueId _eq__eq__eq_ openTriggerBox.uniqueId) {\n                    openTriggerBox.collisionsEnabled _eq_ false_sm_\n                    openTriggerBox.checkCollisions _eq_ false_sm_\n                    scene.beginDirectAnimation(hingeDoor1_co_ [openDoor1]_co_ 0_co_ 25 * frameRate_co_ false)_sm_\n                    scene.beginDirectAnimation(hingeDoor2_co_ [openDoor2]_co_ 0_co_ 25 * frameRate_co_ false)_sm_\n                }\n            }\n\n            var hingeDoor1 _eq_ BABYLON.MeshBuilder.CreateBox(_qt_hinge1_qt__co_ {}_co_ scene)\n            hingeDoor1.isVisible _eq_ false_sm_\n            door1.parent _eq_ hingeDoor1_sm_\n            hingeDoor1.position.y _eq_ 2_sm_\n\n            //for door 1 to open and close\n            var openDoor1 _eq_ new BABYLON.Animation(_qt_openDoor1_qt__co_ _qt_position.x_qt__co_ frameRate_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\n\n            var open1_keys _eq_ []_sm_ \n\n            open1_keys.push({\n                frame_dd_ 0_co_\n                value_dd_ 0\n            })_sm_\n\n            open1_keys.push({\n                frame_dd_ 3 * frameRate_co_\n                value_dd_ -1000\n            })_sm_\n\n            openDoor1.setKeys(open1_keys)_sm_\n\n            engine.runRenderLoop(function() {\n                scene.render()_sm_\n            })_sm_\n})_sm_\n\n           _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe trick is that Append or ImportMesh are asynchronous due to the need of loading data from Internet. So you have to use the callback to continue your code when everything is loaded\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MSLX","Date":"2017-11-16T06:44:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_195291_qt_ data-ipsquote-contentid_eq__qt_34001_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1510774366_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tlet me try to fix your code in blind mode _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt_if_lt_/span_gt_ (BABYLON.Engine.isSupported()) {\n        \n        canvas _eq_ document.getElementById(_lt_span_gt__qt_renderCanvas_qt__lt_/span_gt_)_sm_\n        engine _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.Engine(canvas_co_ _lt_span_gt_true_lt_/span_gt_)_sm_\n        scene _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.Scene(engine)_sm_    \n\n        BABYLON.SceneLoader.Append(_lt_span_gt__qt_./_qt__lt_/span_gt__co_ _lt_span_gt__qt_Walls.babylon_qt__lt_/span_gt__co_ scene)_sm_\n\n        scene.executeWhenReady(_lt_span_gt__lt_span_gt_function_lt_/span_gt_ _lt_span_gt_()_lt_/span_gt_ {_lt_/span_gt_\n            \n            scene.gravity _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.Vector3(_lt_span_gt_0_lt_/span_gt__co_ -_lt_span_gt_0.9_lt_/span_gt__co__lt_span_gt_0_lt_/span_gt_)_sm_\n            scene.activeCamera.ellipsoid _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.Vector3(_lt_span_gt_1000_lt_/span_gt__co__lt_span_gt_1000_lt_/span_gt__co__lt_span_gt_1000_lt_/span_gt_)_sm_\n            scene.collisionsEnabled _eq_ _lt_span_gt_true_lt_/span_gt__sm_\n            scene.activeCamera.checkCollisions _eq_ _lt_span_gt_true_lt_/span_gt__sm_\n            _lt_span_gt_//scene.activeCamera.applyGravity _eq_ true_sm_    _lt_/span_gt_\n            scene.activeCamera.maxZ _eq_ _lt_span_gt_80000_lt_/span_gt__sm_    \n            \n            _lt_span_gt_// Attach camera to canvas inputs_lt_/span_gt_\n            scene.activeCamera.attachControl(canvas)_sm_\n            \n            BABYLON.SceneLoader.ImportMesh(_lt_span_gt_null_lt_/span_gt__co_ _lt_span_gt__qt_./_qt__lt_/span_gt__co_ _lt_span_gt__qt_Ceiling.babylon_qt__lt_/span_gt__co_ scene_co_ _lt_span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_()_lt_/span_gt_ {_lt_/span_gt_\n _lt_span_gt_var_lt_/span_gt_ door1 _eq_ scene.getMeshByName(_lt_span_gt__qt_Door1_qt__lt_/span_gt_)_sm__sm_\n            _lt_span_gt_var_lt_/span_gt_ frameRate _eq_ _lt_span_gt_20_lt_/span_gt__sm_\n\n            _lt_span_gt_// Trigger Boxes_lt_/span_gt_\n            _lt_span_gt_var_lt_/span_gt_ openTriggerBox _eq_ BABYLON.Mesh.CreateBox(_lt_span_gt__qt_openTriggerBox_qt__lt_/span_gt__co_ _lt_span_gt_3000_lt_/span_gt__co_ scene)_sm_\n            openTriggerBox.position.x _eq_ _lt_span_gt_746.9932_lt_/span_gt__sm_\n            openTriggerBox.position.y _eq_ _lt_span_gt_1500_lt_/span_gt__sm_\n            openTriggerBox.position.z _eq_ -_lt_span_gt_4287.0_lt_/span_gt__sm_\n            openTriggerBox.checkCollisions _eq_ _lt_span_gt_true_lt_/span_gt__sm_\n            openTriggerBox.isVisible _eq_ _lt_span_gt_false_lt_/span_gt__sm_\n\n            scene.activeCamera.onCollide _eq_ _lt_span_gt__lt_span_gt_function_lt_/span_gt_ _lt_span_gt_(colMesh)_lt_/span_gt_ {_lt_/span_gt_\n                _lt_span_gt_if_lt_/span_gt_ (colMesh.uniqueId _eq__eq__eq_ openTriggerBox.uniqueId) {\n                    openTriggerBox.collisionsEnabled _eq_ _lt_span_gt_false_lt_/span_gt__sm_\n                    openTriggerBox.checkCollisions _eq_ _lt_span_gt_false_lt_/span_gt__sm_\n                    scene.beginDirectAnimation(hingeDoor1_co_ [openDoor1]_co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_25_lt_/span_gt_ * frameRate_co_ _lt_span_gt_false_lt_/span_gt_)_sm_\n                    scene.beginDirectAnimation(hingeDoor2_co_ [openDoor2]_co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_25_lt_/span_gt_ * frameRate_co_ _lt_span_gt_false_lt_/span_gt_)_sm_\n                }\n            }\n\n            _lt_span_gt_var_lt_/span_gt_ hingeDoor1 _eq_ BABYLON.MeshBuilder.CreateBox(_lt_span_gt__qt_hinge1_qt__lt_/span_gt__co_ {}_co_ scene)\n            hingeDoor1.isVisible _eq_ _lt_span_gt_false_lt_/span_gt__sm_\n            door1.parent _eq_ hingeDoor1_sm_\n            hingeDoor1.position.y _eq_ _lt_span_gt_2_lt_/span_gt__sm_\n\n            _lt_span_gt_//for door 1 to open and close_lt_/span_gt_\n            _lt_span_gt_var_lt_/span_gt_ openDoor1 _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.Animation(_lt_span_gt__qt_openDoor1_qt__lt_/span_gt__co_ _lt_span_gt__qt_position.x_qt__lt_/span_gt__co_ frameRate_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\n\n            _lt_span_gt_var_lt_/span_gt_ open1_keys _eq_ []_sm_ \n\n            open1_keys.push({\n                frame_dd_ _lt_span_gt_0_lt_/span_gt__co_\n                value_dd_ _lt_span_gt_0_lt_/span_gt_\n            })_sm_\n\n            open1_keys.push({\n                frame_dd_ _lt_span_gt_3_lt_/span_gt_ * frameRate_co_\n                value_dd_ -_lt_span_gt_1000_lt_/span_gt_\n            })_sm_\n\n            openDoor1.setKeys(open1_keys)_sm_\n\n            engine.runRenderLoop(_lt_span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_()_lt_/span_gt_ {_lt_/span_gt_\n                scene.render()_sm_\n            })_sm_\n})_sm_\n\n           _lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe trick is that Append or ImportMesh are asynchronous due to the need of loading data from Internet. So you have to use the callback to continue your code when everything is loaded\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tyour blind mode hit a bulls-eye.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-17T19:19:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHahaha. I_t_m proud then _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MSLX","Date":"2017-11-22T13:31:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave one more query. What is the procedure for running keyframe animation(no bones or skeltons) done in 3ds max?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnimation runs when only one babylon file is loaded. But if I load multiple files animation doesn_t_t run. Typically same as above problem_co_ can you throw some light on how to handle this in callback.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tried following in the callback function_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor (i_eq_0_sm_ i&lt_sm_meshes.length_sm_i++)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t{\n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene.beginAnimation(meshes_lt_em_gt__co_ 0_co_100_co_ true_co_1.0)_sm_\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t}\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tThanks and Regards\n_lt_/em_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-11-22T14:38:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28886-mslx/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28886_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28886-mslx/_qt_ rel_eq__qt__qt__gt_@MSLX_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry \n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#2b2b2b_sm_color_dd_#a9b7c6_sm_font-size_dd_9pt_sm__qt__gt_\n_lt_span style_eq__qt_background-color_dd_#344134_sm__qt__gt_scene_lt_/span_gt_._lt_span style_eq__qt_color_dd_#ffc66d_sm__qt__gt_beginAnimation_lt_/span_gt_(meshes[i]_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_100_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_1.0_lt_/span_gt_)_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm__lt_/span_gt__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MSLX","Date":"2017-11-22T17:50:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_196098_qt_ data-ipsquote-contentid_eq__qt_34001_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1511361501_qt_ data-ipsquote-userid_eq__qt_27658_qt_ data-ipsquote-username_eq__qt_Arte_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Arte said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28886-mslx/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28886_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28886-mslx/_qt_ rel_eq__qt__qt__gt_@MSLX_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTry \n\t\t_lt_/p_gt_\n\n\t\t_lt_pre style_eq__qt_background-color_dd_#2b2b2b_sm_color_dd_#a9b7c6_sm_font-size_dd_9pt_sm__qt__gt_\n\n_lt_span style_eq__qt_background-color_dd_#344134_sm__qt__gt_scene_lt_/span_gt_._lt_span style_eq__qt_color_dd_#ffc66d_sm__qt__gt_beginAnimation_lt_/span_gt_(meshes[i]_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_0_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_100_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__co__lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt_1.0_lt_/span_gt_)_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__sm__lt_/span_gt__lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOh sorry_co_ my mistake in last reply. The code inside for loop i tried was \n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene._lt_span style_eq__qt_color_dd_#ffc66d_sm__qt__gt_beginAnimation_lt_/span_gt_(meshes_lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__lt_em_gt__co_ _lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt__lt_em_gt_0_lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__lt_em_gt__co__lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt__lt_em_gt_100_lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__lt_em_gt__co_ _lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__lt_em_gt_true_lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#cc7832_sm__qt__gt__lt_em_gt__co__lt_/em_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#6897bb_sm__qt__gt__lt_em_gt_1.0_lt_/em_gt__lt_/span_gt__lt_em_gt_)\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tApparently that didn_t_t work. \n_lt_/em_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MSLX","Date":"2017-11-22T17:50:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_196127_qt_ data-ipsquote-contentid_eq__qt_34001_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1511373022_qt_ data-ipsquote-userid_eq__qt_28886_qt_ data-ipsquote-username_eq__qt_MSLX_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 minutes ago_co_ MSLX said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOh sorry_co_ some problem with forum post. I am typing squre bracket with i but when i submit reply it is not showing\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_  _lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-11-22T18:35:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you create playground or show all animation code?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooks like missing_dd_\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#2b2b2b_sm_color_dd_#a9b7c6_sm_font-size_dd_9pt_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#808080_sm__qt__gt_scene.beginDirectAnimation(meshes[i]_co_ [openDoor1]_co_ 0_co_ 1_co_ true)_sm__lt_/span_gt__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MSLX","Date":"2017-11-23T14:28:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk. Finally I was able to get the animation playing. At the same time I made few observations regarding callbacks in SceneLoader.ImportMesh. I don_t_t know whether it is the intended behavior or some issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1 - If there is only one babylon file and mesh is loaded using ImportMesh then callback is required otherwise animation will not play.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2 - If there are multiple babylon files imported using ImportMesh then_co_ all ImportMesh needs to have a callback_sm_ not only the file which has animated meshes. Even if one ImportMesh doesn_t_t have a callback then animation will not play.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3 - It doesn_t_t matter whether callback function has any code to execute or not. Even an empty callback will make sure the animation works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4 - In my case_co_ I am seeing an improved loading time when a callback is present.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ I have done keyframe animation in 3DS Max and exported with Auto Animation and Loop checked under Babylon properties for meshes. I haven_t_t checked this with Bone or Skeletal animation\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]