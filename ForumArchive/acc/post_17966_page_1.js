[{"Owner":"John Does","Date":"2015-10-18T16:33:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_While I was learning the documentation I decided to experiment with the code for a bit._lt_br_gt_and I encountered a problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I attempted to make a function that makes a new box_co_ then I would make an HTML Button and when clicking this button the function that I made should be triggered and a box should appear on the screen._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Since this didnt work I decided to see if you guys could possibly help me._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the code_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_&lt_sm_!DOCTYPE html&gt_sm__lt_br_gt_&lt_sm_html&gt_sm__lt_br_gt_    &lt_sm_head&gt_sm__lt_br_gt_        &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_ /&gt_sm__lt_br_gt__lt_br_gt_        &lt_sm_title&gt_sm_Babylon.js sample code&lt_sm_/title&gt_sm__lt_br_gt_        &lt_sm_!-- Babylon.js --&gt_sm__lt_br_gt_        &lt_sm_script src_eq__qt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/hand.minified-1.2.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/hand.minified-1.2.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/a_gt__lt_br_gt_        &lt_sm_script src_eq__qt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/cannon.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/a_gt__lt_br_gt_        &lt_sm_script src_eq__qt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/oimo.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/a_gt__lt_br_gt_        &lt_sm_script src_eq__qt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/a_gt__lt_br_gt_        &lt_sm_style&gt_sm__lt_br_gt_            html_co_ body {_lt_br_gt_                overflow_dd_ hidden_sm__lt_br_gt_                width_dd_ 100%_sm__lt_br_gt_                height_dd_ 100%_sm__lt_br_gt_                margin_dd_ 0_sm__lt_br_gt_                padding_dd_ 0_sm__lt_br_gt_            }_lt_br_gt__lt_br_gt_            #renderCanvas {_lt_br_gt_                width_dd_ 100%_sm__lt_br_gt_                height_dd_ 100%_sm__lt_br_gt_                _lt_br_gt_            }_lt_br_gt_            _lt_br_gt_            #mainDiv {_lt_br_gt_                background-color_dd_ green_sm__lt_br_gt_                width_dd_ 100px_sm__lt_br_gt_                height_dd_ 100px_sm__lt_br_gt_                position_dd_ relative_sm__lt_br_gt_                bottom_dd_ 300px_sm__lt_br_gt_            }_lt_br_gt_        &lt_sm_/style&gt_sm__lt_br_gt_    &lt_sm_/head&gt_sm__lt_br_gt_&lt_sm_body&gt_sm__lt_br_gt_    &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm__lt_br_gt_    &lt_sm_script&gt_sm__lt_br_gt_        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm__lt_br_gt_        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_br_gt__lt_br_gt_        var createScene _eq_ function () {_lt_br_gt_            var scene _eq_ new BABYLON.Scene(engine)_sm__lt_br_gt_            _lt_br_gt_            _lt_br_gt_            var camera _eq_ new BABYLON.FreeCamera(_qt_VJ_camera_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm__lt_br_gt_            camera.attachControl(canvas_co_ true)_sm__lt_br_gt_            _lt_br_gt_            var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm__lt_br_gt_            _lt_br_gt_            var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 100_co_ 100_co_ 2_co_ scene)_sm__lt_br_gt_            _lt_br_gt_            function random() {_lt_br_gt_            _lt_br_gt_            var box _eq_ new BABYLON.Mesh.CreateBox(_qt_box1_qt__co_  2.0_co_ scene)_sm__lt_br_gt_            _lt_br_gt_            }_lt_br_gt_            _lt_br_gt_            return scene_sm__lt_br_gt_        _lt_br_gt_        }_sm__lt_br_gt_        _lt_br_gt_        var scene _eq_ createScene()_sm__lt_br_gt__lt_br_gt_        engine.runRenderLoop(function () {_lt_br_gt_            scene.render()_sm__lt_br_gt_        })_sm__lt_br_gt__lt_br_gt_        // Resize_lt_br_gt_        window.addEventListener(_qt_resize_qt__co_ function () {_lt_br_gt_            engine.resize()_sm__lt_br_gt_        })_sm__lt_br_gt_    &lt_sm_/script&gt_sm__lt_br_gt_    &lt_sm_div id_eq__qt_mainDiv_qt_ &gt_sm__lt_br_gt_    &lt_sm_button onclick_eq__qt_random()_qt_&gt_sm_A button&lt_sm_/button&gt_sm__lt_br_gt_    &lt_sm_/div&gt_sm__lt_br_gt_&lt_sm_/body&gt_sm__lt_br_gt_&lt_sm_/html&gt_sm__lt_br_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m new to Babylon and also to this forum_co_ though I checked my code several times there might be something that I missed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And I will say this ahead of time. Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-10-19T00:21:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi John and welcome to the forum!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_First of all_co_ and maybe the most important thing_dd_ do you already know the playground? If not_co_ it_t_s here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It always helps if you can recreate your problem there. Then everybody can take a look and try stuff out._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think the problem with your code is that that click event binding does not work like that.. I think it should throw an error. Have you check your console output if it does? To avoid that you could use jQuery and do something like that_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1AFXQI_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1AFXQI_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or without jQuery_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1AFXQI%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1AFXQI#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope that helps_co_ if you have a question or if it doesn_t_t work out for you just let us know _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"John Does","Date":"2015-10-19T03:09:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you! iiceman this should work fine. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]