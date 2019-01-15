[{"Owner":"dbawel","Date":"2018-01-11T05:24:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope someone knows how to do this - I need to have a scene running_co_ and also a scanner beside it. As scanned heads are added to the scene as OBJ files_co_ I need them loaded and rendered in the scene without disposing of the scene. The paths to the new files must be added to an array.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI currently have a test scene online_co_ and am loading 2 heads at the start. Then I have a left mouse event add a new file path and folder to the array - but don_t_t know how to tell the loader to load again from the new path. I can delete any path in the array which has already had an OBJ loaded from it_co_ as the path will only be used once. The online scene is below - it might need to be loaded twice the first time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//qedsoft.com/SBSW/10_heads/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//qedsoft.com/SBSW/10_heads/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe main JS code is as follows_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm__lt_br /_gt_\n\t\t\t    var engine _eq_ new BABYLON.Engine(canvas)_sm__lt_br /_gt_\n\t\t\t    var scene _eq_ new BABYLON.Scene(engine)_sm__lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t    scene.clearColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm__lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t    var camera _eq_ new BABYLON.FreeCamera(_qt_camera_qt__co_ new BABYLON.Vector3(-2.15_co_ 0_co_ -3.2)_co_ scene)_sm__lt_br /_gt_\n\t\t\t    camera.MIN_VALUE _eq_ 0.01_lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t    var light _eq_ new BABYLON.PointLight(_qt_light_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -5)_co_ scene)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tvar pathsToLoadFrom _eq_ [_qt_./assets/obj_files_10/_qt__co_ _qt_./assets/obj_files_11/_qt_]_sm__lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\tdocument.addEventListener(_qt_mousedown_qt__co_ push_path_co_ false)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tfunction push_path(evt) {_lt_br /_gt_\n\t\t\t    pathsToLoadFrom.push(_qt_./assets/obj_files_12/_qt_)_sm__lt_br /_gt_\n\t\t\t}\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt_\n\t\t\t    var mesh_pos _eq_ -5_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t    if (pathsToLoadFrom.length &gt_sm_ 0) {_lt_br /_gt_\n\t\t\t        _lt_br /_gt_\n\t\t\t        _lt_br /_gt_\n\t\t\t    for (var p _eq_ 0_sm_ p &lt_sm_ pathsToLoadFrom.length_sm_ p++) {_lt_br /_gt_\n\t\t\t        \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t       let loader _eq_ new BABYLON.AssetsManager(scene)_sm__lt_br /_gt_\n\t\t\t        loader.useDefaultLoadingScreen _eq_ true_sm_  // Set to false to remove the default loading_lt_br /_gt_\n\t\t\t        let mesh_loaded_task _eq_ loader.addMeshTask(_qt_mesh_qt_ + p_co_ _qt__qt__co_ pathsToLoadFrom[p]_co_ _qt_mesh.obj_qt_)_sm__lt_br /_gt_\n\t\t\t        _lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t        _lt_br /_gt_\n\t\t\t        mesh_loaded_task.onSuccess _eq_ function (task) {_lt_br /_gt_\n\t\t\t             task.loadedMeshes.forEach(function(m) {_lt_br /_gt_\n\t\t\t                console.log(_qt_Loaded!_qt_)_sm__lt_br /_gt_\n\t\t\t                m.position.x _eq_ mesh_pos +_eq_ 0.5_sm__lt_br /_gt_\n\t\t\t                m.rotation _eq_ new BABYLON.Vector3(0_co_ 0_co_ 179.05)_sm__lt_br /_gt_\n\t\t\t                console.log(m)_sm__lt_br /_gt_\n\t\t\t             })_sm__lt_br /_gt_\n\t\t\t        }_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt_\n\t\t\t        _lt_br /_gt_\n\t\t\t        loader.onFinish _eq_ function() {_lt_br /_gt_\n\t\t\t            engine.runRenderLoop(function () {_lt_br /_gt_\n\t\t\t                scene.render()_sm__lt_br /_gt_\n\t\t\t            })_sm__lt_br /_gt_\n\t\t\t        }_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t        loader.load()_sm__lt_br /_gt_\n\t\t\t        _lt_br /_gt_\n\t\t\t    }_lt_br /_gt_\n\t\t\t    }\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI appreciate it if you can assist.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-11T06:22:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can dynamically load OBJ files on the fly - I don_t_t think the MTL will be loaded here yet_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMesh(\n  _t__t__co_\n  _t_folder/_t__co_\n  _t_file.obj_t__co_\n  scene_co_\n  loadedMeshes _eq_&gt_sm_ {\n    loadedMeshes.forEach(loadedMesh _eq_&gt_sm_ {\n      console.log(`loaded _t_${loadedMesh.name}_t_`_co_ loadedMesh)\n      this._loadedMeshes.push(&lt_sm_BABYLON.Mesh&gt_sm_ loadedMesh)_sm_\n    })_sm_\n  }\n)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-11T23:48:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried to implement several ways_co_ and have not been successful yet. I can_t_t find this in the documentation_co_ but the logic makes sense. So as long as I push a loaded mesh into the loadedMeshes array_co_ it should display while a scene is already rendering? And any thoughts on loading the MTL? Thanks for helping_co_ I really need it right now. I_t_m stuck at a Starbucks off the freeway which is now closed due to mudslides.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf there_t_s any additional info_co_ I_t_d be grateful - especially how I might load the MTL file if it doesn_t_t load automatically. However_co_ I still need to get the OBJ files loaded_co_and my problem is that the path will come from an array.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks much - I_t_ll keep trying.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-12T07:30:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe MTL will load but asynchronous. That code should show the mesh in your scene with the console.log at position (0_co_0).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-12T17:14:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEverytime I push the new mesh_co_ I receive a syntax error on the following line_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#f92672_sm_font-size_dd_14px_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_._loadedMeshes.push(&lt_sm_BABYLON.Mesh&gt_sm_ loadedMesh)_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo matter how I set the syntax. What am I doing wrong?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T17:25:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_this.loadedMeshs _eq_ []_sm_\n//If you want to keep object scope_dd_\nvar self _eq_ this_sm_\n\nBABYLON.SceneLoader.ImportMesh(\n  _t__t__co_\n  _t_folder/_t__co_\n  _t_file.obj_t__co_\n  scene_co_\n  (meshes)_eq_&gt_sm_ { \n    for(var i_eq_0_sm_ i&lt_sm_meshs.length_sm_ i++){\n      var mesh _eq_ meshes[i]_sm_\n       console.log(mesh)_sm_\n       self.loadedMeshs.push(mesh)_sm_\n     }\n  }\n)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThat syntax would never of worked.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-12T17:44:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy example was copied from working code.  Both ways should work_co_ do you have an array declared to push to - this first line in _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__t_s example?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou don_t_t need _qt_self_qt_ with fat arrow _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ So_co_ I don_t_t believe that was why it was not working..._lt_br /_gt__lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions_lt_/a_gt__lt_br /_gt_\n\t_qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#333333_sm_font-size_dd_medium_sm__qt__gt_An arrow function does not have its own_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_code style_eq__qt_background-color_dd_rgba(220_co_220_co_220_co_.5)_sm_border_dd_0px_sm_color_dd_#333333_sm_font-size_dd_medium_sm_padding_dd_0px 2px_sm__qt__gt_this_sm__lt_/code_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#333333_sm_font-size_dd_medium_sm__qt__gt_ the_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_code style_eq__qt_background-color_dd_rgba(220_co_220_co_220_co_.5)_sm_border_dd_0px_sm_color_dd_#333333_sm_font-size_dd_medium_sm_padding_dd_0px 2px_sm__qt__gt_this_lt_/code_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#333333_sm_font-size_dd_medium_sm__qt__gt__lt_span_gt_ _lt_/span_gt_value of the enclosing execution context is used._lt_/span_gt__qt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T18:05:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYup_co_ which would have scope of the window then... this syntax is wrong._lt_br /_gt__lt_br /_gt__lt_span style_eq__qt_color_dd_#f92672_sm_font-size_dd_14px_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_._loadedMeshes.push(&lt_sm_BABYLON.Mesh&gt_sm_ loadedMesh)_sm__lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\tis all sorts of wrong logic... first why would you push to the array your iterating through the same mesh that you are looping through?  Sounds like infinite recursion to me._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-12T18:36:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_-\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour code works_co_ but I don_t_t know where to rotate_co_ position_co_ etc for the newly imported mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T18:47:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tinside the response function._lt_br /_gt_\n\tthe var mesh_co_ you can manipulate or the _lt_br /_gt_\n\tObject.loadedMeshs array after the firing of the (meshs)_eq_&gt_sm_ response function._lt_br /_gt_\n\t&lt_sm_3\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-12T19:13:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think it_t_s unfair to say the syntax is wrong and there is _qt_all sorts of wrong logic_qt_ without trying it yourself.  Perhaps you are not familiar with how classes work to encapsulate logic.    Here is the same code unchanged and working_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#C02KIC_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#C02KIC_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_201178_qt_ data-ipsquote-contentid_eq__qt_35010_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515780349_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t25 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYup_co_ which would have scope of the window then...\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think you are confusing window scope and enclosing scope.  I would just refer you to same MDN link _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ - the callback is a good place to rotate/position/etc if you can do it all there_co_ but if you want to change it later just have a variable with external scope and it will be available afterwards or you can use a class like I did in the PG_co_ but note that the load is asynchronous_co_ so not available right after ImportMesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-12T19:13:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can set transforms there_co_ but can_t_t define how to incrementally position each head after I add each one (at a different time) so the models don_t_t overlap.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T19:15:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tdude_co_ I can prove it to you... first off_lt_br /_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_BABYLON.SceneLoader.ImportMesh_lt_/span_gt__lt_br /_gt_\n\tIs in window scope...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tand your first code was wrong then because_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_class_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ BotLoader {_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_constructor_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_(folder_co_ file) {_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_.meshes _eq_ []_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_console.log(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_`loading_qt_ ${_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_folder_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_}${_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_file_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_}...`_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_BABYLON.SceneLoader.ImportMesh(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt__qt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ folder_co_ file_co_ scene_co_ meshes _eq_&gt_sm_ {_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_meshes.forEach(mesh _eq_&gt_sm_ {_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_console.log(_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_`mesh_dd_ ${_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_mesh.name_lt_/span_gt__lt_span style_eq__qt_color_dd_#a31515_sm__qt__gt_}`_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ mesh)_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_this_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_.meshes.push(mesh)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_})_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_})_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_}_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_}_lt_br /_gt__lt_br /_gt_\n\t\tIS WAY DIFFERENT!_lt_br /_gt__lt_br /_gt_\n\t\tand yes now you have _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_encapsulate_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ scope... with this set up... which points the this to BotLoader instance..._lt_br /_gt__lt_br /_gt_\n\t\tyour original post had its scope pointing to the window though...  _lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#C02KIC%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#C02KIC#1_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\t\tArgue with me about scope some more_co_ its fun..._lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T19:16:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_201190_qt_ data-ipsquote-contentid_eq__qt_35010_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515784422_qt_ data-ipsquote-userid_eq__qt_11286_qt_ data-ipsquote-username_eq__qt_dbawel_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 minutes ago_co_ dbawel said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI can set transforms there_co_ but can_t_t define how to incrementally position each head after I add each one (at a different time) so the models don_t_t overlap.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThanks_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tDB \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\thave a running value variable outside of the scope of the function so it does not get overwritten.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-12T19:20:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Using a variable outside the function doesn_t_t allow me to manipulate the transforms - although it should. But it certainly works inside the callback_sm_ but only once._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_DB_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-12T19:22:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe code snippet to answer the question is 100% identical! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ But I have to concede that the full context does change things.  Glad the problem is solved. Cheers.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T19:22:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tshow me a PG Dave_co_ Ill fix this up in 30 seconds for you.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T19:24:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_201195_qt_ data-ipsquote-contentid_eq__qt_35010_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515784937_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 minutes ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe code snippet to answer the question is 100% identical! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ But I have to concede that the full context does change things.  Glad the problem is solved. Cheers.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tnot its not_co_ the scope is different... the second you added an encapsulating object it changed the way the syntax reacted._lt_br /_gt__lt_br /_gt_\n\tThat_t_s like saying a submarine performs the same in as out of the water..._lt_br /_gt__lt_br /_gt_\n\tI can also show proof of breaking the fat arrow_t_s scope depending on when you define the function but that_t_s a whole other discussion.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T19:26:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t**HIDE POST** unnecessary.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-12T19:36:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t make a playground scene because I can_t_t call the OBJ files or more specifically the paths to them. But the scene and code are below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//qedsoft.com/SBSW/10_heads/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//qedsoft.com/SBSW/10_heads/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe code is rough test code_co_ and I have it calling a new path and mesh on a mousedown event.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm__lt_br /_gt_\n\t\t\t    var engine _eq_ new BABYLON.Engine(canvas)_sm__lt_br /_gt_\n\t\t\t    var scene _eq_ new BABYLON.Scene(engine)_sm__lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t    scene.clearColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm__lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t    var camera _eq_ new BABYLON.FreeCamera(_qt_camera_qt__co_ new BABYLON.Vector3(-2.15_co_ 0_co_ -3.2)_co_ scene)_sm__lt_br /_gt_\n\t\t\t    camera.MIN_VALUE _eq_ 0.01_lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\t    var light _eq_ new BABYLON.PointLight(_qt_light_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -5)_co_ scene)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    var mesh_pos _eq_ -5_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tvar pathsToLoadFrom _eq_ [_qt_./assets/obj_files_10/_qt__co_ _qt_./assets/obj_files_11/_qt_]_sm__lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\tdocument.addEventListener(_qt_mousedown_qt__co_ push_path_co_ false)_sm_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tfunction push_path(evt) {_lt_br /_gt_\n\t\t\t    pathsToLoadFrom.push(_qt_./assets/obj_files_12/_qt_)_sm__lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\tthis.loadedMeshs _eq_ []_sm__lt_br /_gt_\n\t\t\tvar self _eq_ this_sm__lt_br /_gt_\n\t\t\t    _lt_br /_gt_\n\t\t\tBABYLON.SceneLoader.ImportMesh(_lt_br /_gt_\n\t\t\t  _t__t__co__lt_br /_gt_\n\t\t\t  _t_./assets/obj_files_12/_t__co__lt_br /_gt_\n\t\t\t  _t_mesh.obj_t__co__lt_br /_gt_\n\t\t\t  scene_co__lt_br /_gt_\n\t\t\t  (meshes)_eq_&gt_sm_ { _lt_br /_gt_\n\t\t\t    for(var i_eq_0_sm_ i&lt_sm_meshes.length_sm_ i++){_lt_br /_gt_\n\t\t\t      var mesh _eq_ meshes_lt_em_gt__sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t      mesh.rotation _eq_ new BABYLON.Vector3(0_co_ 0_co_ 179.05)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t      mesh.position.x _eq_ messh_pos +_eq_ 0.5_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t       console.log(mesh)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t       self.loadedMeshs.push(mesh)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t     }_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t  }_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t)_sm_    _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t}\n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\t    _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t    if (pathsToLoadFrom.length &gt_sm_ 0) {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t    for (var p _eq_ 0_sm_ p &lt_sm_ pathsToLoadFrom.length_sm_ p++) {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        \n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\t    _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t    _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t       let loader _eq_ new BABYLON.AssetsManager(scene)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        loader.useDefaultLoadingScreen _eq_ true_sm_  // Set to false to remove the default loading_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        let mesh_loaded_task _eq_ loader.addMeshTask(_qt_mesh_qt_ + p_co_ _qt__qt__co_ pathsToLoadFrom[p]_co_ _qt_mesh.obj_qt_)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t    _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        mesh_loaded_task.onSuccess _eq_ function (task) {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t             task.loadedMeshes.forEach(function(m) {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                console.log(_qt_Loaded!_qt_)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                m.position.x _eq_ mesh_pos +_eq_ 0.5_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                m.rotation _eq_ new BABYLON.Vector3(0_co_ 0_co_ 179.05)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                console.log(m)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t             })_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        }_sm_\n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\t_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        loader.onFinish _eq_ function() {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            engine.runRenderLoop(function () {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                scene.render()_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            })_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        }_sm_\n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\t        loader.load()_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t    }_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t    }\n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\t \n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\t_lt_/em_gt_\n_lt_/div_gt_\n_lt_em_gt_\n_lt_/em_gt_\n_lt_/blockquote_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tThanks\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tDB\n_lt_/em_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T19:38:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tcheck your typo _lt_em style_eq__qt_background-color_dd_#fbfbfb_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_messh_pos_lt_br /_gt__lt_br /_gt_\n\tand give me a min._lt_/em_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T19:48:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\nvar engine _eq_ new BABYLON.Engine(canvas)_sm_\nvar scene _eq_ new BABYLON.Scene(engine)_sm_\n\nscene.clearColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\nvar camera _eq_ new BABYLON.FreeCamera(_qt_camera_qt__co_ new BABYLON.Vector3(-2.15_co_ 0_co_ -3.2)_co_ scene)_sm_\ncamera.minZ _eq_ 0.01_sm_\nvar light _eq_ new BABYLON.PointLight(_qt_light_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -5)_co_ scene)_sm_\n\nvar pathsToLoadFrom _eq_ [_qt_./assets/obj_files_10/_qt__co_ _qt_./assets/obj_files_11/_qt__co_ _qt_./assets/obj_files_12/_qt_]_sm_\n    \n//document.addEventListener(_qt_mousedown_qt__co_ push_path_co_ false)_sm_\n\n\nloader _eq_ function(paths){\n\tthis.mesh_pos _eq_ -5_sm_\n\tthis.meshs _eq_ []_sm_\n\tfor(var i_eq_0_sm_ i&lt_sm_paths.length_sm_ i++){\n\t\tthis._run(paths[i])_sm_\n\t\tthis.mesh_pos +_eq_ 1_sm_\n\t}\n\t\n\treturn this_sm_\n}_sm_\n\nloader.prototype _eq_ {\n\t_run _eq_ function(path){\n\t\tvar self _eq_ this_sm_\n\t\tBABYLON.SceneLoader.ImportMesh(_t__t__co_ _t_./_t__co_ path_co_ scene_co_ (meshes)_eq_&gt_sm_ {\n\t\t\tfor(var i_eq_0_sm_ i&lt_sm_meshes.length_sm_ i++){\n\t\t\t\tvar mesh _eq_ meshes[i]_sm_\n\t\t\t\tmesh.position.x _eq_ self.mesh_pos_sm_\n\t\t\t\tself.meshs.push(mesh)_sm_\n\t\t\t}\n\t\t})_sm_\n\t}\n}_sm_\n        \n  \t\nengine.runRenderLoop(function () {\n   scene.render()_sm_\n})_sm_\n\nvar _l _eq_ new loader(pathsToLoadFrom)_sm_\n      \n        \n    }\n}\n\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis is off the top of my head and prolly will drop an error... I have no clue I have not tested it._lt_br /_gt_\n\tBut you had a lot of redundant stuff and things that were not effectively doing anything.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-12T20:03:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt line 27 which is  _lt_strong_gt_ _run _eq_ function(path){   _lt_/strong_gt_   _co_ I receive and error in the console_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSyntaxError_dd_ missing _dd_ after property id\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd can_t_t seem to fix it. Here_t_s the script with your code in place_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//qedsoft.com/SBSW/10_heads/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//qedsoft.com/SBSW/10_heads/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T20:04:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tprolly simple syntax error give me a min ill fix.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-12T20:05:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_document.addEventListener(_qt_DOMContentLoaded_qt__co_ ()_eq_&gt_sm_{\n\nvar canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\nvar engine _eq_ new BABYLON.Engine(canvas)_sm_\nvar scene _eq_ new BABYLON.Scene(engine)_sm_\n\nscene.clearColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\nvar camera _eq_ new BABYLON.FreeCamera(_qt_camera_qt__co_ new BABYLON.Vector3(-2.15_co_ 0_co_ -3.2)_co_ scene)_sm_\ncamera.minZ _eq_ 0.01_sm_\nvar light _eq_ new BABYLON.PointLight(_qt_light_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -5)_co_ scene)_sm_\n\nvar pathsToLoadFrom _eq_ [_qt_./assets/obj_files_10/_qt__co_ _qt_./assets/obj_files_11/_qt__co_ _qt_./assets/obj_files_12/_qt_]_sm_\n    \n//document.addEventListener(_qt_mousedown_qt__co_ push_path_co_ false)_sm_\n\n\nloader _eq_ function(paths){\n\tthis.mesh_pos _eq_ -5_sm_\n\tthis.meshs _eq_ []_sm_\n\tfor(var i_eq_0_sm_ i&lt_sm_paths.length_sm_ i++){\n\t\tthis._run(paths[i])_sm_\n\t\tthis.mesh_pos +_eq_ 1_sm_\n\t}\n\t\n\treturn this_sm_\n}_sm_\n\nloader.prototype _eq_ {\n\t_run _dd_ function(path){\n\t\tvar self _eq_ this_sm_\n\t\tBABYLON.SceneLoader.ImportMesh(_t__t__co_ _t_./_t__co_ path_co_ scene_co_ (meshes)_eq_&gt_sm_ {\n\t\t\tfor(var i_eq_0_sm_ i&lt_sm_meshes.length_sm_ i++){\n\t\t\t\tvar mesh _eq_ meshes[i]_sm_\n\t\t\t\tmesh.position.x _eq_ self.mesh_pos_sm_\n\t\t\t\tself.meshs.push(mesh)_sm_\n\t\t\t}\n\t\t})_sm_\n\t}\n}_sm_\n        \n  \t\nengine.runRenderLoop(function () {\n   scene.render()_sm_\n})_sm_\n\nvar _l _eq_ new loader(pathsToLoadFrom)_sm_\n\n }_co_ false)_sm_     _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tGive that a shot. Should work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]