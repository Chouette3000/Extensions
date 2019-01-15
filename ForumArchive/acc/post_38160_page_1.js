[{"Owner":"unobruno","Date":"2018-06-11T06:51:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys_co_ i got the following scene_dd_ _lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_18670_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/1359017216_Bildschirmfoto2018-06-11um08_20_18.png.9874ef86d26f733275962a93927be5ac.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_989085648_Bildschirmfoto2018-06-11um08_20_18.thumb.png.61cf42e7c66a47b380b73ef0ad1356f1.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18670_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_06/989085648_Bildschirmfoto2018-06-11um08_20_18.thumb.png.61cf42e7c66a47b380b73ef0ad1356f1.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see the text is stretching. How do i draw a text and keep the ratio ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy code so far_dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_createRect _eq_ function(scene_co_ bId_co_ id_co_  x_co_ y_co_ z_co_ width_co_ depth_co_ height_co_ rotation) {\n    //Add example mesh to the scene\n    let cube _eq_ BABYLON.Mesh.CreateBox(bId_co_ 1_co_ scene)_sm_\n    let moduleTexture _eq_ new BABYLON.DynamicTexture(_qt_dynamic texture_qt__co_ 2048_co_ scene_co_ true)_sm_\n    let cubeMat _eq_ new BABYLON.StandardMaterial(bId_co_ scene)_sm_\n    cubeMat.diffuseTexture _eq_ moduleTexture_sm_\n    cubeMat.diffuseTexture.uOffset _eq_ 0.02_sm_\n    cubeMat.diffuseTexture.wAng _eq_ 1.57_sm_\n    cubeMat.diffuseColor _eq_ new BABYLON.Color3(0.92_co_ 0.92_co_ 0.92)_sm_\n    cubeMat.specularColor _eq_ BABYLON.Color3.Black()_sm_\n    cube.material _eq_ cubeMat_sm_\n    cube.enableEdgesRendering()_sm_\n    cube.edgesWidth _eq_ 5.0_sm_\n    cube.edgesColor _eq_ new BABYLON.Color4(0.4_co_ 0.4_co_ 0.4_co_ 1)_sm_\n    cube.position _eq_ new BABYLON.Vector3(x_co_y_co_z)_sm_\n    cube.scaling _eq_ new BABYLON.Vector3(width_co_ height_co_ depth)_sm_\n    cube.rotate(BABYLON.Axis.Y_co_ rotation * Math.PI / 180 _co_ BABYLON.Space.WORLD)_sm_\n\n\n    var clearColor _eq_ _qt_white_qt__sm_\n    var font _eq_ _qt_bold 50em Arial_qt__sm_\n    var invertY _eq_ true_sm_\n    var text _eq_ id_sm_\n    var color _eq_ _qt_black_qt__sm_\n    var x _eq_ 200_sm_\n    var y _eq_ 1224_sm_\n    moduleTexture.drawText(text_co_ x_co_ y_co_ font_co_ color_co_ clearColor_co_ true_co_ true)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tPS_dd_ I got a orthographic camera with a top down view\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-06-11T14:33:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHave you seen this thread?_lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14975-drawtext-and-keep-ratio-without-stretching-in-3d-text/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/14975-drawtext-and-keep-ratio-without-stretching-in-3d-text/_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would try to switch to GUI.  I_t_m not recommending this_co_ but here is a way to center text without stretching_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var planeTexture _eq_ new BABYLON.DynamicTexture(_t_dynamicBABYLON.Texture_t__co_ 512_co_ this.scene_co_ true)_sm_\n\n// remove typing if you are using JavaScript\nlet textureContext_dd_ CanvasRenderingContext2D _eq_ planeTexture.getContext()_sm_\n// needed for measuring\ntextureContext.font _eq_ _t_bold 200px verdana_t__sm_\nlet size _eq_ planeTexture.getSize()_sm_\n\ntextureContext.save()_sm_\ntextureContext.fillStyle _eq_ _t_#BBBBBB_t__sm_\ntextureContext.fillRect(0_co_ 0_co_ size.width_co_ size.height)_sm_\n\nlet textSize _eq_ textureContext.measureText(text)_sm_\ntextureContext.fillStyle _eq_ _t_Black_t__sm_\ntextureContext.fillText(text_co_ (size.width - textSize.width) / 2_co_ (size.height + 20) / 2)_sm_\n\ntextureContext.restore()_sm_\nplaneTexture.update()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-06-11T18:51:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUsing GUI is probably the best idea. However if you want to use dynamicTexture then read on. For the text not to stretch the width and height of the mesh must be in the same proportion as the width and height of the dynamictexture.  Instead of a single number as the second parameter you can use an object which has width and height as properties ie {width_dd_  width_co_ height_dd_ height}. The next issue is that when the fourth parameter (generateMinMaps) is set to true the width and height of the dynamictexture will be changed to the closest power of two and so also change the proportion of width to height.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTwo methods\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.  rectangle width _eq_ 100_co_ height _eq_ 120 then for any n use\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_dynamicTexture(_qt_mytexture_qt__co_ {width_dd_100*n_co_ height_dd_120*n}_co_ scene_co_ false)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t2. Use powers of two for width and height of rectangle\n_lt_/p_gt_\n\n_lt_p_gt_\n\trectangle width _eq_ 128_co_ height _eq_ 256\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_dynamicTexture (_qt_mytexture_qt__co_ {width_dd_128*n_co_ height_dd_256*n}_co_ scene_co_ true)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]