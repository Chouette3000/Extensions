[{"Owner":"dbawel","Date":"2018-01-03T01:14:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a test scene which loads fine but is a complete mess. So I cleaned it up today_co_ and the .babylon file won_t_t load no matter where I place it. The messy scene that loads fine is_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.qedsoft.com/DEMOS2017/build_01/index8.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.qedsoft.com/DEMOS2017/build_01/index8.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ I cleaned the scene up to show_co_ and the .babylon file cannot be loaded no matter where I place it - here is the scene_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//qedsoft.com/DEMOS2017/blimp_test/index_01.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//qedsoft.com/DEMOS2017/blimp_test/index_01.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also get the following console message_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tbabylon.max.js_dd_sourcemap_dd_6714 BJS - [17_dd_02_dd_27]_dd_ Unable to load from baloon.babylon_dd_ importScene of baloon.babylon from Blender version_dd_ 2.78 (sub 0)_co_ exporter version_dd_ 4.6.1_lt_br /_gt_\n\t\t\t    Lights_dd__lt_br /_gt_\n\t\t\t        Name_dd_ Lamp_co_ type_dd_ Point_lt_br /_gt_\n\t\t\tTools._ErrorEnabled @ babylon.max.js_dd_sourcemap_dd_6714\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe .babylon file and code are exactly the same. This has been a hell of a week_co_ so I just don_t_t know if it_t_s me right now - but I can_t_t see what the heck is different. It claims it cannot load the point light in the exact same .babylon file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-01-03T15:02:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe canvas is null_co_ engine is not really initialized. So_co_ there is no engine._gl_co_ and therefor nothing works.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-03T19:08:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_-\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti can_t_t see what i_t_m missing... If you can show me_co_ I_t_ll fix it. I_t_m at this job to set up other things. But I still shouldn_t_t have so much difficulty as I_t_ve been building scenes since 2014. I just don_t_t get it. Alzheimers?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tvar createScene _eq_ function(){\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    var canvas _eq_ document.getElementById(_t_renderCanvas_t_)_sm__lt_br /_gt_\n\t\t\t    var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_br /_gt_\n\t\t\t    var scene _eq_ new BABYLON.Scene(engine)_sm_ \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t    BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_baloon.babylon_qt__co_ engine_co_ function (newScene) {\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t        newScene.executeWhenReady(function () {_lt_br /_gt_\n\t\t\t            for(var i _eq_ 0_sm_ i &lt_sm_ newScene.meshes.length_sm_ i++){_lt_br /_gt_\n\t\t\t                let mesh _eq_ newScene.meshes_lt_em_gt__sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                mesh.isVisible _eq_ true_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                switch(mesh.name){_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    case _qt_Blimp_body_qt__dd__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    case _qt_engine_qt__dd__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                        mesh.scaling _eq_ new BABYLON.Vector3(1_co_1_co_1)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                        mesh.rotation _eq_ new BABYLON.Vector3.Zero()_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    break_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    case _qt_prop_qt__dd__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                        mesh.scaling _eq_ new BABYLON.Vector3(1_co_1_co_1)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                        mesh.rotation _eq_ new BABYLON.Vector3.Zero()_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                        mesh.setPivotMatrix(BABYLON.Matrix.Translation(0_co_ 0_co_ 10))_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    var mesh_prop _eq_ mesh_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    break_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    default_dd__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                    break_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                }_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            }_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            newScene.clearColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            \n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\t            //camera.attachControl(canvas_co_ true)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            newScene.activeCamera.attachControl(canvas)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            newScene.activeCamera.minZ _eq_ 0.001_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            newScene.activeCamera.maxZ _eq_ 10000_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            newScene.activeCamera.position _eq_ new BABYLON.Vector3(90_co_0_co_0)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            var light _eq_ new BABYLON.HemisphericLight(_t_light1_t__co_ new BABYLON.Vector3(0_co_1_co_0)_co_ newScene)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            var skyboxMaterial _eq_ new BABYLON.StandardMaterial(_qt_skyBox_qt__co_ newScene)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                skyboxMaterial.backFaceCulling _eq_ false_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                skyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_./assets/skybox/TropicalSunnyDay_qt__co_ newScene)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                skyboxMaterial.reflectionTexture.coordinatesMode _eq_ BABYLON.Texture.SKYBOX_MODE_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                skyboxMaterial.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                skyboxMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            var skybox _eq_ BABYLON.MeshBuilder.CreateBox(_qt_skyBox_qt__co_ {size_dd_1000.0}_co_ newScene)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                skybox.material _eq_ skyboxMaterial_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            scene _eq_ newScene_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            engine.runRenderLoop(function() {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t                scene.render()_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            })_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t    _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        })_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t    })_sm_\n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\t/****_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        scene.registerBeforeRender(function () {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        if (mesh_prop) {_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            mesh_prop.rotate(BABYLON.Axis.Y_co_ Math.PI / 64_co_ BABYLON.Space.LOCAL)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t            }_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        })_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t****/\n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\twindow.addEventListener(_t_resize_t__co_ function(){_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t    engine.resize()_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t})_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t        _lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t  return scene_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\t}_sm_\n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\t_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t\t\tcreateScene()_sm_\n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n\t\t_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t\t\t \n\t\t_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\t_lt_/em_gt_\n_lt_/div_gt_\n_lt_em_gt_\n_lt_/em_gt_\n_lt_/blockquote_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t \n_lt_/em_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-03T19:12:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThere is no canvas in your HTML page\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-01-03T19:20:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYour script is in the &lt_sm_header&gt_sm__co_ if you put it after your &lt_sm_canvas&gt_sm_ it should work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe &lt_sm_header&gt_sm_ is loaded before the &lt_sm_canvas&gt_sm_ is created. So your file is calling and looking for a canvas that it can not find.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-04T18:04:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt__co_ and everyone else who has answered a post from me the past couple of weeks. I suppose I was still in shock after my house burned_sm_ but that_t_s no excuse I can really quantify. I looked back at my questions the past couple of weeks_co_ and realized that they were all stupid procedural errors - in which I_t_ve been using all procedures for years now - as looking at these_co_ it_t_s so obvious what the problem is - just nonsensical garble.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I_t_m not certain what happened_co_ but I just sat down yesterday and created several scenes in about an hour which I was having issues with - all except the pivot rotate function - as I_t_ve never used this before. Suddenly_co_ I can write scenes from scratch once again_co_ and they work first time. So I wanted to apologize for wasting everyone_t_s time as there was never a real problem_sm_ the problem was that I simply couldn_t_t write a damn thing correctly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlready this morning_co_ I_t_m close to delivering most of what I am scheduled to deliver for the day. So perhaps it was shock_co_ stress_co_ whatever - but everything appears fine now. I just need to get my Wife back from looking after her Mother in Thailand next week_co_ and my life should have some order once again. But as far as babylon.js_co_ I don_t_t appear to have any issues now_co_ and am transitioning into ES6 much more.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just wanted you to know_co_ as I couldn_t_t look at a script and make any sense of it whatsoever. Totally weird.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-04T19:00:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt happens_co_ sometimes when our brains or overloaded with other stuff... and considering what was going down you get a pass for sure.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-04T19:03:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNo worry! we are here to help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-01-04T21:13:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ and all -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe all might get a pass from time to time_co_ but that was just some real dumb stuff. But I appreciate the understanding that we all go a little nuts sometimes. Honestly_co_ I just starred at the screen_co_ and had absolutely no idea what I was looking at. And I would still try and fix it without any clue as to what I was writing. It_t_s something I never want to experience again_sm_ as I could feel myself losing my mind..._lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt_ No joke.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ thanks again. I_t_ll try an put in some extra time on the forum to make up for it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-04T21:35:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you sure that your regaining of balance had nothing to do with what happened in CA on Jan 1?_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSorry_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]