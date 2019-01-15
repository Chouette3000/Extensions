[{"Owner":"webGLmmk","Date":"2016-08-03T05:11:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m trying to include a constructor i_t_ve put in another file. There_t_s something module related I_t_m not getting here. I have this constructor that works fine in the main html file. When i try to load it in an external file in the head_co_ it won_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is just a normal...JavaScript constructor.  Im trying to create star objects_co_ and later on planet objects_co_ etc_co_ for a space scene. Not having trouble with the code itself_co_ just creating the module. This is my new point of progression.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStarting with the html file_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_head&gt_sm_\n&lt_sm_!-- ....  --&gt_sm_\n        &lt_sm_script src_eq__qt_js/hand.minified-1.2.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_js/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_js/oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_js/babylon.js_qt_ &gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_js/star.js_qt_ &gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n    &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n    &lt_sm_script&gt_sm_\n       /*...babylon stuff*/\n\n      //star instances\n\tvar star1 _eq_ new Star(new BABYLON.Vector3(500_co_ 500_co_ 1000))_sm_\n\tvar star2 _eq_ new Star(new BABYLON.Vector3(0_co_ -100_co_ 200))_sm_\n\tvar star3 _eq_ new Star(new BABYLON.Vector3(-600_co_ 200_co_ 1200))_sm_\n\n      /* ... more babylon stuff ...*/\n\n\n    &lt_sm_/script&gt_sm_\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s star.js. Entirely whats in the file_co_ basically just the Star constructor.  When i put it directly in the script tag in the html file_co_ it works. I_qt_ve also tried putting the script tag in the body.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var Star _eq_ function (position) {\n\tthis.sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 50_co_ 100_co_ scene)_sm_\n\tthis.mat _eq_ new BABYLON.StandardMaterial(_qt_white_qt__co_ scene)_sm_\n\tthis.mat.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/suntexture.jpg_qt__co_ scene)_sm_\n\tthis.mat.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n\tthis.sphere.material _eq_ this.mat_sm_\n\tthis.sphere.position _eq_ position_sm_\n\t\n\n\tthis.particleSystem _eq_ new BABYLON.ParticleSystem(_qt_particles_qt__co_ 15000_co_ scene)_sm_\n\tthis.particleSystem.particleTexture _eq_ new BABYLON.Texture(_qt_textures/fireflare.jpg_qt__co_ scene)_sm_\n\tthis.particleSystem.emitter _eq_ this.sphere_sm_\n\tthis.particleSystem.color1 _eq_ new BABYLON.Color4(0.984_co_ 0.337_co_ 0.047_co_ 1)_sm_\n\tthis.particleSystem.color2 _eq_ new BABYLON.Color4(0.984_co_ 0.757_co_ 0.047_co_ 1)_sm_\n\tthis.particleSystem.minSize _eq_ 8_sm_\n\tthis.particleSystem.maxSize _eq_ 30_sm_\n\tthis.particleSystem.minLifeTime _eq_ 0.5_sm_\n\tthis.particleSystem.maxLifeTime _eq_ 0.8_sm_\n\tthis.particleSystem.emitRate _eq_ 15000_sm_\n\tthis.particleSystem.direction1 _eq_ new BABYLON.Vector3(-120_co_ -120_co_ -120)_sm_\n\tthis.particleSystem.direction2 _eq_ new BABYLON.Vector3(120_co_ 120_co_ 120)_sm_\n\tthis.particleSystem.minAngularSpeed _eq_ 0_sm_\n\tthis.particleSystem.maxAngularSpeed _eq_ Math.PI_sm_\n\tthis.particleSystem.minEmitPower _eq_ 1_sm_\n\tthis.particleSystem.maxEmitPower _eq_ 3_sm_\n\tthis.particleSystem.updateSpeed _eq_ 0.01_sm_\n\tthis.particleSystem.start()_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve read all about modules_co_ but putting them in practice is another thing...and its a seemingly endless topic. I_t_m trying to refresh myself but I could spend countless hours in convoluted Google results. Posting here is more relevant to what I_t_m trying to accomplish. Please dont send me to StackOverflow _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tgrazie\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-08-03T16:18:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat errors are you getting in the console? Here is a guess - you are trying to call the star function before it is loaded.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry putting this stuff\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\n       /*...babylon stuff*/\n\n      //star instances\n\tvar star1 _eq_ new Star(new BABYLON.Vector3(500_co_ 500_co_ 1000))_sm_\n\tvar star2 _eq_ new Star(new BABYLON.Vector3(0_co_ -100_co_ 200))_sm_\n\tvar star3 _eq_ new Star(new BABYLON.Vector3(-600_co_ 200_co_ 1200))_sm_\n\n      /* ... more babylon stuff ...*/\n\n\n _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tInto a function called by window.onload. Something like\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_script&gt_sm_\nWindow.onload _eq_ main_sm_\n\nfunction main() {\n       /*...babylon stuff*/\n\n      //star instances\n\tvar star1 _eq_ new Star(new BABYLON.Vector3(500_co_ 500_co_ 1000))_sm_\n\tvar star2 _eq_ new Star(new BABYLON.Vector3(0_co_ -100_co_ 200))_sm_\n\tvar star3 _eq_ new Star(new BABYLON.Vector3(-600_co_ 200_co_ 1200))_sm_\n\n      /* ... more babylon stuff ...*/\n\n}\n\n\n    &lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHaving a problem editing above code window.onload shouls NOT start with a capital.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"webGLmmk","Date":"2016-08-04T01:44:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_re on track with it being a scope issue. Someone on stack overflow helped me after all _dd_).  Sorry Stack Overflow_co_ I_t_ll never talk smack about you again\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//stackoverflow.com/questions/38748121/creating-a-module-for-babylon-js-scene_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//stackoverflow.com/questions/38748121/creating-a-module-for-babylon-js-scene_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImportant to understand about putting a constructor in an external file-- put scene as a parameter in the constructor.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tvar Star _eq_ function (position_co_ scene) {\n\t\tthis.sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 50_co_ 100_co_ scene)_sm_\n\t\tthis.mat _eq_ new BABYLON.StandardMaterial(_qt_white_qt__co_ scene)_sm_\n\t\tthis.mat.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/suntexture.jpg_qt__co_ scene)_sm_\n\n                \n                 // ...\n\t}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBabylon.js constructors and properties like createSphere() and Texture_co_ etc_co_ have _qt_scene_qt_ passed into them. So if you put the constructor in another file without passing scene in_co_ you_t_ll have an error and the page won_t_t load_co_ because it won_t_t know what scene is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen when you create an instance in your main script file or html file_co_ pass in scene. \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tvar star1 _eq_ new Star(new BABYLON.Vector3(500_co_ 500_co_ 1000)_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIf you_t_ve built part of Babylon.js_co_ this may seem pretty obvious. But there have to be a few people like me that have looked through the source code and don_t_t get the significance until it_t_s immediately relevant. NOW i understand why scene is passed in to new  class instances_co_ and why you see (BABYLON) passed in as a parameter when you look in the modules. (though I_qt_m still pretty fuzzy about all the encapsulation and why _qt_var BABYLON_sm__qt_  needs to be created each time. )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt also works if you put scene in the global scope_co_ outside of createScene(){ /* ..*/}. I_t_m not at the point where doing that would create a problem_co_ but I may as well start understanding encapsulation better.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]