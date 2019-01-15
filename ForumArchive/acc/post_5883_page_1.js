[{"Owner":"csakbalint","Date":"2014-04-23T14:18:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everybody!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_d like to create a modelling application with babylon.js._lt_/p_gt__lt_p_gt_My problem is to transform the world coordinates (or position whatever) to screen coordinates. I don_t_t find any page_co_ objects_co_ methods (lack of documentation?)_co_ which discuss this problem. I created my own algorithm to solve this problem_co__lt_/p_gt__lt_p_gt_but it gives back wrong numbers (-10000-3000)._lt_/p_gt__lt_p_gt_Another problem_dd_ there is no function to handle the operations between matrixes and vectors (multiply?)._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// to init every variablevar canvas _eq_  document.getElementById(_t_renderCanvas_t_)_co_    engine _eq_ new BABYLON.Engine(canvas_co_ true)_co_    scene  _eq_ new BABYLON.Scene(engine)_co_    camera _eq_ new BABYLON.ArcRotateCamera(_t_Camera_t__co_ 0_co_ 0.8_co_ 100_co_ new BABYLON.Vector3.Zero()_co_ scene)_sm_// in mousedown event handlervar pickResult _eq_ scene.pick(evt.offsetX_co_ evt.offsetY)_sm_\t\t\t\t\tif (!pickResult.hit) {    return_sm_}var vM _eq_ camera.getViewMatrix()_co_ \t\t  // viewMatrix 4*4    pM _eq_ camera.getProjectionMatrix()_co_\t\t  // projectionMatrix 4*4    vpA _eq_ pM.multiply(vM).asArray()_co_ \t\t  // viewProjectionMatrix 4*4    posA _eq_ pickResult.pickedPoint.asArray()_co_\t  // position 3    transform _eq_ []_co_\t\t\t\t  // store the matrix mult vector    globalView _eq_ camera.viewport.toGlobal(engine)_co_// globalViewPort store widht and height    width _eq_ globalView.width_co_\t\t\t  // screen width    height _eq_ globalView.height_sm_\t\t\t  // screen heightposA.push(0)_sm_ \t\t\t\t\t  // position 4for (var i _eq_ 0_sm_ i &lt_sm_ 4_sm_ i++) { \t\t\t  // matrix row\tvar value _eq_ 0_sm_\t\t\t\t  // temp value\t\t\t\t\t        for (var j _eq_ 0_sm_ j &lt_sm_ 4_sm_ j++) {\t\t  // matrix column\t\tvalue +_eq_ vpA[i*4 + j] * posA[i]_sm_  // multiply and add\t}\ttransform.push(value)_sm_\t\t\t  // store the tempvalue}var winX _eq_ Math.round((( transform[0] + 1 ) / 2.0) * width )_co_\t// screenX    winY _eq_ Math.round((( 1 - transform[1] ) / 2.0) * height )_sm_\t// screenYconsole.log(winX_co_ winY)_sm__lt_/pre_gt__lt_p_gt_My conclusion_dd_ i count with wrong variables_co_ (which i can_t_t know because of the lack of documentation)._lt_/p_gt__lt_p_gt_So i beg for your help_co_ what is the problem in my algorithm. (Sorry for that bad english)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T15:13:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/gwenaelhagenmuller/fwd5Y/show/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/gwenaelhagenmuller/fwd5Y/show/_lt_/a_gt__lt_/p_gt__lt_p_gt_Enter minX into the console to get its value_lt_/p_gt__lt_p_gt_Do the same for maxX_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You should get values between 0 and 1 if the object always stays on the screen. That_t_s the x coordinate on the screen when the object is on the left (minX) or on the right (maxX)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s the code_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/gwenaelhagenmuller/fwd5Y/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/gwenaelhagenmuller/fwd5Y/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BABYLON.Vector3.Project is what you_t_re looking for._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"csakbalint","Date":"2014-04-23T15:50:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks this example_co_ i can use it (and calculate my numbers)._lt_/p_gt__lt_p_gt_._lt_/p_gt__lt_p_gt_I use the BABYLON.Vector3.Project method in my code_co_ and the x range was [-0.5_co_ 1.5]_co_ if the picked object was on the left or right edge of the screen. I don_t_t understand completely_co_ what are these numbers._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My modest wish is to get the (mouse) event.offsetX from the position of a mesh (on the screen). Please tell me if i think wrong._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T15:59:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If the center of the local space of your object is on the screen_co_ the x will be between 0 and 1. It represents a percentage of the width of your canvas so if you know where your canvas is positioned in your page and you know its width_co_ you only have to do something like canvas.left + canvas.width * x to get what you want._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"csakbalint","Date":"2014-04-23T16:10:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks the answers really_co_ you helped me a lot_co_ i get the (right) numbers!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T16:17:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_My pleasure._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-23T16:18:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Do not hesitate to share your work. That could be another cool demo._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"csakbalint","Date":"2014-04-23T16:54:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Some extension_dd_ my meshes are almost never in the center_co_ but i can get the screen coordinates of the picked mesh between 0 and 1 if i don_t_t use the worldmatrix of the mesh but the worldmatrix of the center (unit matrix). This is cool_co_ but it will be a problem_co_ when i move my camera_co_ because i can_t_t see my center (i think it will give back wrong results)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My project wanna be a house modelling application. It will be my thesis_co_ so i want to make it nice. I hope it will be so good_co_ i can share it without shame. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]