[{"Owner":"HBakri","Date":"2018-02-28T12:02:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI getting this annoying error when loading GLTF  3D models on my Apache web server on Linux system.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_babylon.glTFFileLoader.js_dd_2571 Uncaught TypeError_dd_ this._errorCallback is not a function\n    at GLTFLoader._onError (babylon.glTFFileLoader.js_dd_2571)\n    at babylon.glTFFileLoader.js_dd_3265\n    at e.callback (babylon.glTFFileLoader.js_dd_3168)\n    at e.notifyObservers (babylon.js_dd_3)\n    at babylon.glTFFileLoader.js_dd_3180\n    at XMLHttpRequest.e.onreadystatechange (babylon.js_dd_3)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe code runs like a charm locally. I mean if I have the .gltf_co_ .bin and the textures. When uploaded to the  web server connected to a back-end _lt_a href_eq__qt_https_dd_//omeka.org/classic/_qt_ rel_eq__qt_external nofollow_qt__gt_Omeka _lt_/a_gt_(a digital asset management system) where we are storing our 3D models files with metadata. The following  JS code is the one used_co_ it loads Objs and gltf. Apparently the .gltf and .bin are fetched but not the textures. Although the JSON images field  in the gltf contain the right names and paths.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_script&gt_sm_\n    function RenderLocal(RelativePath_co_ MeshName) {\n        console.log(_qt_I entered RenderLocal(RelativePath_co_ MeshName) _qt_)_sm_\n        console.log(_qt_RelativePath_dd_ _qt_ + RelativePath + _qt_  MeshName_dd_ _qt_ + MeshName)_sm_\n\n\t\t//Making sure there is no trailing spaces\n        var RelativePathTrimmed _eq_ RelativePath.trim()_sm_\n        var MeshNameTrimmed _eq_ MeshName.trim()_sm_\n\n\n        //Retrieving form Canvas\n        var canvas _eq_ document.getElementById(_t_renderCanvas_t_)_sm_\n\n        //Creating an instance from the Engine and assigning it to the Canvas\n        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n        //Loading text is controlled using loadingUIText _dd_\n        engine.loadingUIText _eq_ _qt_Please wait for the Model to load..._qt__sm_\n\n        var createScene _eq_ function () {\n            console.log(_qt_NEW - Trimmed RelativePath_dd_ _qt_ + RelativePathTrimmed + _qt_  MeshName_dd_ _qt_ + MeshNameTrimmed)_sm_\n\n\n            //Creating a BABYLON scene\n            var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n            //Clear the background scene as black\n            scene.clearColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n\n            //Adding a light\n            //var light _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(20_co_ 20_co_ 100)_co_ scene)_sm_\n            var light _eq_ new BABYLON.HemisphericLight(_qt_Omni_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n            light.intensity _eq_ 1_sm_\n\n            //var loader _eq_ new BABYLON.AssetsManager(scene)_sm_\n\n            // This creates and positions a free camera (non-mesh)\n            var camera _eq_ new BABYLON.FreeCamera(_qt_camera1_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ scene)_sm_\n\n            //Adding an Arc Rotate Camera\n            // var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 0.8_co_ 100_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n            //camera.attachControl(canvas_co_ false)_sm_\n\n\n            //Adding an Arc Rotate Camera\n            // var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 0.8_co_ 100_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n            // camera.attachControl(canvas_co_ false)_sm_\n\n            var assetsManager _eq_ new BABYLON.AssetsManager(scene)_sm_\n\n            var meshTask _eq_ assetsManager.addMeshTask(_qt_skull task_qt__co_ _qt__qt__co_ RelativePathTrimmed_co_ MeshNameTrimmed)_sm_\n\n            //BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ RelativePath_co_ MeshName_co_ scene_co_ ready)_sm_\n\n            meshTask.onSuccess _eq_ function (task) {\n\n                var myMesh _eq_ task.loadedMeshes[0]_sm_\n                task.loadedMeshes[0].position _eq_ BABYLON.Vector3.Zero()_sm_\n\n                // Create a default arc rotate camera and light.\n                scene.createDefaultCameraOrLight(true_co_ true_co_ true)_sm_\n\n                // The default camera looks at the back of the asset.\n                // Rotate the camera by 180 degrees to the front of the asset.\n                scene.activeCamera.alpha +_eq_ Math.PI_sm_\n\n                // myMesh.computeWorldMatrix(true)_sm_\n                // myMesh.refreshBoundingInfo()_sm_\n                // var meshCamera _eq_ new BABYLON.ArcRotateCamera(_qt_ArcRotateCamera_qt__co_ -Math.PI / 2_co_ 1.2_co_ 140_co_ new BABYLON.Vector3(0_co_ 0_co_ -10)_co_ scene)_sm_\n                // meshCamera.attachControl(canvas_co_ false)_sm_\n                // scene.activeCamera _eq_ meshCamera_sm_\n\n            }_sm_\n\n            meshTask.onError _eq_ function (task_co_ message_co_ exception) {\n                console.log(message_co_ exception)_sm_\n            }_sm_\n\n\n\n            // Move the light with the camera\n            scene.registerBeforeRender(function () {\n                light.position _eq_ camera.position_sm_\n            })_sm_\n\n            assetsManager.onProgress _eq_ function (remainingCount_co_ totalCount_co_ lastFinishedTask) {\n                engine.loadingUIText _eq_ _t_We are loading the scene. _t_ + remainingCount + _t_ out of _t_ + totalCount + _t_ items still need to be loaded._t__sm_\n            }_sm_\n\n            assetsManager.onFinish _eq_ function (tasks) {\n                engine.runRenderLoop(function () {\n                    scene.render()_sm_\n                })_sm_\n            }_sm_\n\n            assetsManager.load()_sm_\n\n            return scene_sm_\n        }_sm_\n\n        var scene _eq_ createScene()_sm_\n\n        engine.runRenderLoop(function () {\n            scene.render()_sm_\n\n        })_sm_\n        //$(_qt_#renderCanvas_qt_).resizeCanvas(width _eq_ _qt_800_qt__co_ height _eq_ _qt_600_qt_)_sm_\n        // Resize\n        window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm_\n    }\n\n    var htmlInput_PHP _eq_ &lt_sm_?php echo json_encode( $item )_sm_ ?&gt_sm__sm_\n\tconsole.log(_qt_List in htmlInput_PHP_dd_ _qt_ + htmlInput_PHP )_sm_\n    var htmlInput_PHP_length _eq_ htmlInput_PHP.length_sm_\n    var OBJRegExp _eq_ _t_.obj_t__sm_\n\tvar GLTFRegExp _eq_ _t_.gltf_t__sm_\n    var ObjFileToLoad _eq_ _t__t__sm_\n    for (var i in htmlInput_PHP) {\n        if (htmlInput_PHP[i].endsWith(OBJRegExp)|| htmlInput_PHP[i].endsWith(GLTFRegExp)) {\n            console.log(_qt_htmlInput_PHP[i] is_dd_ _qt_)_sm_\n            console.log(htmlInput_PHP[i])_sm_\n            ObjFileToLoad _eq_ htmlInput_PHP[i]_sm_\n        }\n    }\n    var filename _eq_ ObjFileToLoad.replace(/^.*[\\\\\\/]/_co_ _t__t_)\n    console.log(_qt_FileName Extracted_dd_ _qt_ + filename)_sm_\n    var relativePath _eq_ ObjFileToLoad.replace(filename_co_ _qt__qt_)_sm_\n    console.log(_qt_Relative Path Extracted is_dd_ _qt_)_sm_\n    console.log(relativePath)_sm_\n    RenderLocal(relativePath_co_ filename)_sm_\n\n&lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe following injection of PHP code in JS\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var htmlInput_PHP _eq_ &lt_sm_?php echo json_encode( $item )_sm_ ?&gt_sm__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAttached 2 images (console of Google Chrome + an image on the Network Inspector of Google Chrome)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is to fetch a PHP array from Omeka back-end and transforming it to JS so that we have  the full paths of the gltf file_co_ .bin binary file and all textures pertaining to the item chosen by the user as you can see in the images attached the list of paths are correct so what is the problem?  Actually this code worked fine with other items in the .obj format. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible the .manifest thing that keeps showing in the console or Network inspector or I reckon maybe the gltf JSON _t_images_t_ field should contain some relative path I am not sure so that Apache can go and fetch the textures? I am extremely confused\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease any help is appreciated...\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/Error.PNG.6dab5238638ec098aa2ba455d3257435.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_17239_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/Error.thumb.PNG.f34a21fed3640b147f710c4da5b3b5c5.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Error.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/NetworkConsoleChrome.PNG.4fb31138c7d419e7c342cc9ce2cb29c0.PNG_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_17240_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/NetworkConsoleChrome.thumb.PNG.35035487e39486f54a5ef83d624908b7.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_NetworkConsoleChrome.PNG_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-28T15:03:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou are on a pretty old version of BJS\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you mind moving to the latest one? (including the gltf loader)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HBakri","Date":"2018-03-05T11:56:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the reply. Sorry I live in UK and we had a severe snow storm. Now back to work _dd_-) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will check and get back to you. Even with an old version_co_  why it is working locally but not remotely on Apache server?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HBakri","Date":"2018-03-05T12:53:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWith the latest version only a warning shows and the gltf model do not load. I should mention the model works like a charm in the Sandbox.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI  generated today the Babylon script_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_script src_eq__qt_js/babylon.custom05-03.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI am getting a warning please see the Yellow warning_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_babylon.custom05-03.js_dd_3 BJS - [12_dd_45_dd_54]_dd_ _lt_u_gt_Unable to find a plugin to load .gltf files_lt_/u_gt_. Trying to use .babylon default plugin._lt_/strong_gt__lt_br /_gt_\n\tt._WarnEnabled @ babylon.custom05-03.js_dd_3_lt_br /_gt_\n\tt._getPluginForExtension @ babylon.custom05-03.js_dd_32_lt_br /_gt_\n\tt._getPluginForFilename @ babylon.custom05-03.js_dd_32_lt_br /_gt_\n\tt._loadData @ babylon.custom05-03.js_dd_32_lt_br /_gt_\n\tt.ImportMesh @ babylon.custom05-03.js_dd_32_lt_br /_gt_\n\ti.runTask @ babylon.custom05-03.js_dd_45_lt_br /_gt_\n\te.run @ babylon.custom05-03.js_dd_45_lt_br /_gt_\n\tt._runTask @ babylon.custom05-03.js_dd_45_lt_br /_gt_\n\tt.load @ babylon.custom05-03.js_dd_45_lt_br /_gt_\n\tcreateScene @ objectsBabylonGLTF.php?id_eq_27_dd_163_lt_br /_gt_\n\tRenderLocal @ objectsBabylonGLTF.php?id_eq_27_dd_168_lt_br /_gt_\n\t(anonymous) @ objectsBabylonGLTF.php?id_eq_27_dd_199\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am desperate so I tried an older Babylon Custom  Script generated maybe in Aug/ Sep 2017._lt_u_gt__lt_strong_gt_ I got  maybe something  more meaningful_dd__lt_/strong_gt__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_babylonFinally.js_dd_3 BJS - [12_dd_50_dd_41]_dd_ Buffer access is out of range_lt_/strong_gt__lt_br /_gt_\n\tt._ErrorEnabled @ babylonFinally.js_dd_3_lt_br /_gt_\n\t(anonymous) @ babylonFinally.js_dd_28771_lt_br /_gt_\n\tGLTFLoader._onRenderReady @ babylonFinally.js_dd_28771_lt_br /_gt_\n\tGLTFLoader.removePendingData @ babylonFinally.js_dd_29387_lt_br /_gt_\n\t(anonymous) @ babylonFinally.js_dd_29315_lt_br /_gt_\n\te.notifyObservers @ babylonFinally.js_dd_2_lt_br /_gt_\n\t(anonymous) @ babylonFinally.js_dd_29326_lt_br /_gt_\n\te.onreadystatechange @ babylonFinally.js_dd_3_lt_br /_gt_\n\tXMLHttpRequest.send (async)_lt_br /_gt_\n\th @ babylonFinally.js_dd_3_lt_br /_gt_\n\tt.LoadFile @ babylonFinally.js_dd_3_lt_br /_gt_\n\tGLTFLoader._loadBufferAsync @ babylonFinally.js_dd_29324_lt_br /_gt_\n\tGLTFLoader._loadBufferViewAsync @ babylonFinally.js_dd_29337_lt_br /_gt_\n\tGLTFLoader._loadAccessorAsync @ babylonFinally.js_dd_29375_lt_br /_gt_\n\t_loop_2 @ babylonFinally.js_dd_29017_lt_br /_gt_\n\tGLTFLoader._loadVertexDataAsync @ babylonFinally.js_dd_29065_lt_br /_gt_\n\t_loop_1 @ babylonFinally.js_dd_28960_lt_br /_gt_\n\tGLTFLoader._loadMeshData @ babylonFinally.js_dd_28996_lt_br /_gt_\n\tGLTFLoader._loadMesh @ babylonFinally.js_dd_28926_lt_br /_gt_\n\t(anonymous) @ babylonFinally.js_dd_28869_lt_br /_gt_\n\tGLTFLoader._traverseNode @ babylonFinally.js_dd_29163_lt_br /_gt_\n\tGLTFLoader._traverseNode @ babylonFinally.js_dd_29168_lt_br /_gt_\n\tGLTFLoader._traverseNode @ babylonFinally.js_dd_29168_lt_br /_gt_\n\tGLTFLoader._traverseNode @ babylonFinally.js_dd_29168_lt_br /_gt_\n\tGLTFLoader._traverseNode @ babylonFinally.js_dd_29168_lt_br /_gt_\n\tGLTFLoader._traverseNodes @ babylonFinally.js_dd_29157_lt_br /_gt_\n\tGLTFLoader._loadScene @ babylonFinally.js_dd_28869_lt_br /_gt_\n\tGLTFLoader._loadAsync @ babylonFinally.js_dd_28760_lt_br /_gt_\n\tGLTFLoader.importMeshAsync @ babylonFinally.js_dd_28726_lt_br /_gt_\n\tGLTFFileLoader.importMeshAsync @ babylonFinally.js_dd_26275_lt_br /_gt_\n\t_ @ babylonFinally.js_dd_28_lt_br /_gt_\n\t(anonymous) @ babylonFinally.js_dd_28_lt_br /_gt_\n\te.onreadystatechange @ babylonFinally.js_dd_3_lt_br /_gt_\n\tXMLHttpRequest.send (async)_lt_br /_gt_\n\th @ babylonFinally.js_dd_3_lt_br /_gt_\n\tt.LoadFile @ babylonFinally.js_dd_3_lt_br /_gt_\n\tu @ babylonFinally.js_dd_28_lt_br /_gt_\n\tt @ babylonFinally.js_dd_28_lt_br /_gt_\n\t(anonymous) @ babylonFinally.js_dd_28_lt_br /_gt_\n\tXMLHttpRequest.send (async)_lt_br /_gt_\n\tt.checkManifestFile @ babylonFinally.js_dd_28_lt_br /_gt_\n\tt @ babylonFinally.js_dd_28_lt_br /_gt_\n\tt.ImportMesh @ babylonFinally.js_dd_28_lt_br /_gt_\n\tt.run @ babylonFinally.js_dd_40_lt_br /_gt_\n\th._runTask @ babylonFinally.js_dd_40_lt_br /_gt_\n\th.load @ babylonFinally.js_dd_40_lt_br /_gt_\n\tcreateScene @ objectsBabylonGLTF.php?id_eq_27_dd_162_lt_br /_gt_\n\tRenderLocal @ objectsBabylonGLTF.php?id_eq_27_dd_167_lt_br /_gt_\n\t(anonymous) @ objectsBabylonGLTF.php?id_eq_27_dd_198_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy there is nothing that says what is the problem in new Babylon Build... Attached first picture latest Babylon (05-03-2018)_co_ the second picture (a script from maybe Aug 2017)_co_ the third when I checked everything in _lt_a href_eq__qt_https_dd_//www.babylonjs.com/versionbuilder/_qt_ rel_eq__qt_external nofollow_qt__gt_VersionBuilder _lt_/a_gt_and generated the Babylon JS Script.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGetting_dd_ _lt_strong_gt_BJS - [13_dd_37_dd_21]_dd_ glTF Loader_dd_ #/bufferViews/2_dd_ Invalid typed array length_dd_ 13734960_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is going on here?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_17309_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/BabylonProblem.PNG.77ee7d4314107f2ff2b3faefb417e7e8.PNG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_BabylonProblem.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17309_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/BabylonProblem.thumb.PNG.73649671e5021b722a91be018a7b6ee3.PNG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_17310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/withBybylonScriptGeneratedNov2017.PNG.b687d776434a0c052c9be83306a900e1.PNG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_withBybylonScriptGeneratedNov2017.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17310_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/withBybylonScriptGeneratedNov2017.thumb.PNG.d24a5b90976b66d15a1aac1896067389.PNG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_17313_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/FullLibraryLoaded.PNG.9df193e3d616b7fd7f854f52fd6e6071.PNG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_FullLibraryLoaded.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17313_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/FullLibraryLoaded.thumb.PNG.cd24e3f17f805d0da360c5802044238c.PNG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-05T16:10:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you loading the GLTFLoader module? _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/gltf_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/gltf_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSeems like the plugin is missing\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-05T16:38:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you make sure that your custom build includes the gltf loader?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-03-05T19:00:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso_co_ it is likely that the glTF asset you are trying to load isn_t_t valid. Check the asset against the _lt_a href_eq__qt_http_dd_//github.khronos.org/glTF-Validator/_qt_ rel_eq__qt_external nofollow_qt__gt_glTF Validator_lt_/a_gt_ to see if it passes the checks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-05T19:26:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI like it that there are 3 totally valid answers to this issue _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]