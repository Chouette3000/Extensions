[{"Owner":"Kesshi","Date":"2018-09-20T08:45:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn my application i_t_m doing something like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_renderTarget.renderList _eq_ []_sm_\nfor (var mesh of myMeshes) {\n    if(...) {    \n        renderTarget.renderList.push(mesh)_sm_\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAfter updateing to BJS version 3.3 i noticed a big performance issue if i do this because i have many meshes in my scene._lt_br /_gt_\n\tIt seems that this commit is the problem_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/d40a5d75b461d13b5cee893a59e1a13a85b34829#diff-88a5439ab0e1c1dad3feb18bdfbc0b8c_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/d40a5d75b461d13b5cee893a59e1a13a85b34829#diff-88a5439ab0e1c1dad3feb18bdfbc0b8c_lt_/a_gt__lt_br /_gt_\n\tCurrently everytime you call push_co_ all meshes of the scene will be iterated. Is this intended?_lt_br /_gt_\n\tIt takes about 250ms to update the renderList in my case._lt_br /_gt_\n\t_lt_br /_gt_\n\tI changed my code like this to avoid that bottleneck. Now it takes about 8ms to update the renderlist.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var myRenderlist _eq_ []_sm_\nfor (var mesh of myMeshes) {\n   if(...) {  \n       myRenderlist.push(mesh)_sm_\n   }\n}\nrenderTarget.renderList _eq_ myRenderlist_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-20T14:54:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is kind of intended.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe reason is that if you have meshes with materials that use this rendertarget for shadowmap_co_ they have to regenerate the shaders.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour solution is fine but I will try to find a smarter way to deal with this problem\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]