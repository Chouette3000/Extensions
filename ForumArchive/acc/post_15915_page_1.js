[{"Owner":"hit2501","Date":"2015-07-23T00:45:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I´m having problems trying to put a html code inside a babylon script. I want to put several html buttons with different actions that will modify a babylon mesh. This is the idea I have but I dont know how to make it work_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_body&gt_sm_         &lt_sm_form&gt_sm_    &lt_sm_canvas id_eq__qt_renderCanvas_qt_ width_eq__qt_600_qt_ height_eq__qt_300_qt_&gt_sm_&lt_sm_/canvas&gt_sm_    &lt_sm_script&gt_sm_        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_        var onoff _eq_ 1_sm_        var createScene _eq_ function () {        var scene _eq_ new BABYLON.Scene(engine)_sm_        scene.clearColor _eq_ new BABYLON.Color4(0_co_ 0_co_ 0_co_ 0)_sm_        var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ -7_co_ 1_co_ 0.8_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_        camera.attachControl(canvas_co_ true)_sm_        var light1 _eq_ new BABYLON.HemisphericLight(_qt_hemi1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_        light1.intensity _eq_ 1_sm_        var light2 _eq_ new BABYLON.HemisphericLight(_qt_hemi2_qt__co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_        light2.intensity _eq_ 1_sm_        BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_Babylon/_qt__co_ _qt_Arholma10D.babylon_qt__co_ scene_co_ function (newMeshes) {            var supports _eq_ scene.getMeshByName(_qt_bjalkar_ar.001_qt_)_sm_            var borders _eq_ scene.getMeshByName(_qt_knutar_arh.001_qt_)_sm_            var roof _eq_ scene.getMeshByName(_qt_tak_arholm.001_qt_)_sm_            var walls _eq_ scene.getMeshByName(_qt_vaggar_arh.001_qt_)_sm_            /*I DONT KNOW WHAT I CAN DO TO PUT HERE THE FOLLOWING HTML CODE...            &lt_sm_center&gt_sm_                &lt_sm_button type_eq__qt_button_qt_&gt_sm_&lt_sm_img src_eq__qt_images/rocky_svart.jpg_qt_ width_eq__qt_90_qt_ height_eq__qt_90_qt_&gt_sm_                    &lt_sm_script&gt_sm_                        roof.setEnabled(false)_sm_                    &lt_sm_/script&gt_sm_                &lt_sm_/button&gt_sm_            &lt_sm_/center&gt_sm_            */UNTIL THIS PLACE        })_sm_        scene.registerBeforeRender(function() {            if(onoff _eq__eq_ 1)            {                camera.alpha +_eq_ .01_sm_            }        })_sm_        return scene_sm_        }_sm_        var scene _eq_ createScene()_sm_        engine.runRenderLoop(function () {            scene.render()_sm_        })_sm_        // Resize        window.addEventListener(_qt_resize_qt__co_ function () {            engine.resize()_sm_        })_sm_    &lt_sm_/script&gt_sm_&lt_sm_/form&gt_sm_  &lt_sm_/body&gt_sm__lt_/pre_gt__lt_p_gt_Can anybody help me?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-23T07:26:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If you want elements in a permanent HUD you should be putting the HTML outside of the javascript code_co_ like this (I_t_m using inline styling for demonstration even tho it should be in a separate CSS declaration)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_html&gt_sm_&lt_sm_body&gt_sm_   &lt_sm_div name_eq__qt_footer_qt_ style_eq__qt_position_dd_ fixed_sm_ width_dd_ 100%_sm_ height_dd_ 70px_sm_ position_dd_ fixed_sm_ bottom_dd_ 0_sm_ left_dd_ 0_sm_ z-index_dd_ 1_qt_&gt_sm_      Babylon.js rocks!   &lt_sm_/div&gt_sm_   &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_   &lt_sm_script&gt_sm_      //Do 3D stuff   &lt_sm_/script&gt_sm_&lt_sm_/body&gt_sm_&lt_sm_/html&gt_sm__lt_/pre_gt__lt_p_gt_If you want to inject HTML code dynamically you_t_d have to manipulate the DOM.  Here_t_s a JQuery example_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var elementButton _eq_ $(_t_&lt_sm_button type_eq__qt_button_qt_&gt_sm_&lt_sm_img src_eq__qt_images/rocky_svart.jpg_qt_ width_eq__qt_90_qt_ height_eq__qt_90_qt_&gt_sm_&lt_sm_/button&gt_sm__t_)_sm_$(_qt_body_qt_).append(elementButton)_sm__lt_/pre_gt__lt_div_gt_If you have elements in the same spot that appear and disappear_co_ just make it permanent in the body and use display_dd_ none_co_ then in your Javascript script you can set display_dd_ block to show it._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-23T07:38:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For your specific case_co_ you can put some buttons in a footer HUD like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_html&gt_sm_&lt_sm_body&gt_sm_   &lt_sm_div name_eq__qt_footer_qt_ style_eq__qt_position_dd_ fixed_sm_ width_dd_ 100%_sm_ height_dd_ 70px_sm_ position_dd_ fixed_sm_ bottom_dd_ 0_sm_ left_dd_ 0_sm_ z-index_dd_ 1_qt_&gt_sm_      &lt_sm_button style_eq__qt_position_dd_absolute_sm_ top_dd_0_sm_ left_dd_0_qt_ onClick_eq__qt_changeColor()_qt_&gt_sm_Color&lt_sm_/button&gt_sm_      &lt_sm_button style_eq__qt_position_dd_absolute_sm_ top_dd_0_sm_ left_dd_200px_qt_ onClick_eq__qt_changeShape()_qt_&gt_sm_Shape&lt_sm_/button&gt_sm_   &lt_sm_/div&gt_sm_   &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_   &lt_sm_script&gt_sm_      //Render 3D      function changeColor() {         //Color changing code      }      function changeShape() {         //Shape changing code      }   &lt_sm_/script&gt_sm_&lt_sm_/body&gt_sm_&lt_sm_/html&gt_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-23T07:45:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You could use one of the user interface extension that people have created_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_bGUI extension by Temechon_dd__lt_/span_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     - Source code _dd_ _lt_a href_eq__qt_https_dd_//github.com/Temechon/bGUI_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Temechon/bGUI_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     - Demo _dd_ _lt_a href_eq__qt_http_dd_//temechon.github.io/bGUI/_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//temechon.gith...0_qt_&gt_sm_bGUI&lt_sm_/span&gt_sm_/_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     - Documentation _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_25102_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs...age.php?p_eq_25102_lt_/a_gt__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Dialogue extension by JCPalmer_dd__lt_/p_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_     _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/Dialog_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/B...e/master/Dialog_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_It also has to the extentions _lt_/span_gt__lt_strong_gt_CastorGUI.  _lt_/strong_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_It is part of the extensions to create GUI which create a layer above the canvas. It is as simple to use._lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/span_gt__lt_br_gt__lt_strong_gt_Topic_dd__lt_/strong_gt__lt_br_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/15121-extension-castorgui-a-gui-library-for-canvas/?p_eq_85691_qt_ title_eq__qt__qt__gt_http_dd_//www.html5game...canvas/?p_eq_85691_lt_/a_gt__lt_br_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/span_gt__lt_br_gt__lt_strong_gt_Extention_dd__lt_/strong_gt__lt_br_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/B...onJS/Extensions_lt_/a_gt__lt_br_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/span_gt__lt_br_gt__lt_strong_gt_Demo_dd__lt_/strong_gt__lt_br_gt__lt_a href_eq__qt_http_dd_//www.castorengine.com/castorengine/Data/JS/CastorGUI/demo/_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.castoreng...CastorGUI/demo/_lt_/a_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or you could use simple html and create bindings to you javascript code with frameworks like knockout.js or angular.js. If you just want something simple_co_ maybe do something like this_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1P6A1U_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1P6A1U_lt_/a_gt_ (of course you don_t_t have to create the buttons dynamically_co_ you could just write them as normal HTML and then just position them with CSS over your 3D canvas)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-07-23T10:53:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_CastorGUI Demo_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.castorengine.com/babylon/demoCastorGUI/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.castorengine.com/babylon/demoCastorGUI/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2015-07-23T15:06:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you all for your help._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ozRocker I tried to put the html outside the javascript code and the buttons appear well but the order_dd_ _qt__lt_span style_eq__qt_color_dd_rgb(136_co_0_co_0)_sm__qt__gt_roof.setEnabled(false)_sm__lt_/span_gt__qt_ dont work_co_ do you know how can I put the order_dd__qt__lt_span style_eq__qt_color_dd_rgb(136_co_0_co_0)_sm__qt__gt_roof.setEnabled(false)_sm__lt_/span_gt__qt_ inside your jQuery example?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_iiceman your example can work fo me but when I want to replicate the example in xampp the console shows me the following error_dd_ _qt_Uncaught ReferenceError_dd_ $ is not defined    index.html_dd_90_qt_ in the line where is _qt_$(_t_.button-container_t_).remove()_sm__qt_  how can I fix it?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry if this are too basic questions_co_ I´m learning yet  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-23T16:03:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The $ symbol refers to jQuery (or you could also use zepto instead). If you have included the jQuery/zepto library and it is actually loaded this should not happen. Make sure you include jQuery before your custom javascript code and maybe use $(document).ready(function(){ // your code goes here })_sm_ to make sue the document is ready and the libraries are loaded._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_jQuery_dd_ _lt_a href_eq__qt_https_dd_//jquery.com/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//jquery.com/_lt_/a_gt__lt_/p_gt__lt_p_gt_zepto_dd_ _lt_a href_eq__qt_http_dd_//zeptojs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//zeptojs.com/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-24T00:39:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_90158_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_15915_qt_ data-ipsquote-username_eq__qt_hit2501_qt_ data-cite_eq__qt_hit2501_qt_ data-ipsquote-timestamp_eq__qt_1437663970_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Thank you all for your help._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ozRocker I tried to put the html outside the javascript code and the buttons appear well but the order_dd_ _qt__lt_span style_eq__qt_color_dd_rgb(136_co_0_co_0)_sm__qt__gt_roof.setEnabled(false)_sm__lt_/span_gt__qt_ dont work_co_ do you know how can I put the order_dd__qt__lt_span style_eq__qt_color_dd_rgb(136_co_0_co_0)_sm__qt__gt_roof.setEnabled(false)_sm__lt_/span_gt__qt_ inside your jQuery example?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thats _t_cos the scope of the _qt_roof_qt_ variable only exists within the ImportMesh function_co_ since that_t_s where its initial declaration is based.  You_t_ll need to make it a global variable in order to access it anywhere.  I suggest putting a _qt_var roof_sm__qt_ on the line after _qt_var onoff _eq_ 1_sm__qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you are getting errors with the $ symbol its because you haven_t_t linked to a JQuery library. Just add_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_script src_eq__qt_http_dd_//code.jquery.com/jquery-latest.min.js_qt_ type_eq__qt_text/javascript_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/pre_gt__lt_p_gt_ inside your &lt_sm_head&gt_sm_&lt_sm_/head&gt_sm_ and that_t_ll link you to the latest JQuery_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-07-24T18:13:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Excellent helper comment_co_ OzR!  You covered the bases perfectly.  Have you done help-desk work?  You have an excellent style.  Thanks for helping forum users... I_t_m glad you_t_re hanging around with us._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now_co_ about that picture.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  You_t_re scaring the dog.  You aren_t_t gonna kick our butts or anything_co_ right?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You could be an action hero on TV!  You got the look.  I wonder what your smile looks like.  (ahem)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2015-07-25T01:09:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks to all of you_co_ with all your help I made it this way_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var botonContenedorA1 _eq_ $(_t_.boton-contenedorA1_t_).remove()_sm_    $(_t_body_t_).append(_t_&lt_sm_div class_eq__qt_boton-contenedorA1_qt_&gt_sm_&lt_sm_/div&gt_sm__t_)_sm_    $(_t_.boton-contenedorA1_t_).append(_t_&lt_sm_div class_eq__qt_column-1_qt_&gt_sm_&lt_sm_ul&gt_sm_&lt_sm_li class_eq__qt_boxy_qt_&gt_sm_&lt_sm_button type_eq__qt_button_qt_&gt_sm_&lt_sm_img src_eq__qt_images/rocky_svart.jpg_qt_ width_eq__qt_90_qt_ height_eq__qt_90_qt_&gt_sm_&lt_sm_/button&gt_sm_&lt_sm_/li&gt_sm_&lt_sm_/ul&gt_sm_&lt_sm_/div&gt_sm__t_)                        $(_t_.boton-contenedorA1 button_t_).click(function () {      roof.setEnabled(false)_sm_    })_lt_/pre_gt__lt_p_gt_I´m glad too to belong to this community   _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2015-07-25T03:17:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_90324_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_15915_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1437761603_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Excellent helper comment_co_ OzR!  You covered the bases perfectly.  Have you done help-desk work?  You have an excellent style.  Thanks for helping forum users... I_t_m glad you_t_re hanging around with us._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just giving back to the community _t_cos all you guys are helping me out as well!_lt_/p_gt__lt_p_gt_I_t_ve worked as an iOS developer and web developer for media agencies_co_ telcos_co_ government offices and software dev houses.  They require all documentation_co_ code_co_ git commits_co_ etc... to be completely thorough and well explained since I_t_m not always dealing with developers (I_t_m usually the only iOS developer there!)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I know I look like a bit of a thug haha!  When I_t_m in the U.S people think I_t_m ex-marine (but I_t_m Aussie/Thai).  I used to be an MMA fighter (Brazilian juijitsu and Thai boxing).  Also I live in the red-light district in Melbourne which can get scary sometimes.  I need to be able to protect myself and the people I care about.   _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-25T08:01:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@hit2501_dd_ That appending in my demo was jsut to show you on the playground how to do it. We cant edit the HTML there directly so I had to use the function to append it in runtime. But of course you can directly add the needed html like the div elements and buttons to your html structure. The important part_co_ the only thing you actually have to do in the javascript is your click function_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_span_gt_$ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__t_.boton-contenedorA1 button_t__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)._lt_/span_gt__lt_span_gt_click_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_function_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_()_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_{_lt_/span_gt__lt_br_gt__lt_span_gt_   roof_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_setEnabled_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_sm__lt_/span_gt__lt_br_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_})_lt_/span_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I how you know what I mean _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Good luck!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]