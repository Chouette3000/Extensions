[{"Owner":"Dad72","Date":"2016-10-28T15:50:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a small problem that I do not understand with addMeshTask().\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I do this_co_ it does not work. (I have no error in the console and I get out the value of _t_key_t_)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Not Work\n$.getJSON(global.game.nameProjet_co_ function(json) {\n\t$.each(json_co_ function (key_co_ val) {\n\t\taddTask(key)_sm_\n\t})_sm_\n})_sm_\t\n\nfunction addTask(key) {\n\tglobal.game.meshTask _eq_ global.game.assetsManager.addMeshTask(key_co_ _qt__qt__co_ _qt_../../scene/_qt_+key+_qt_/_qt__co_ key+_qt_.babylon_qt_)_sm_\n\tglobal.game.meshTask.onSuccess _eq_ function(task) {\n\t\ttask.loadedMeshes[0].position _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm_\n\t}\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut if I do this_co_ it works_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Work\nfunction addTask(key) {\n\tglobal.game.meshTask _eq_ global.game.assetsManager.addMeshTask(key_co_ _qt__qt__co_ _qt_../../scene/_qt_+key+_qt_/_qt__co_ key+_qt_.babylon_qt_)_sm_\n\tglobal.game.meshTask.onSuccess _eq_ function(task) {\n\t\ttask.loadedMeshes[0].position _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm_\n\t}\n}\naddTask(_qt_scene_name_qt_)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to load multiple scene with addMeshTask() from a list of json file_co_ but it does not work. Why ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your help.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-10-28T16:57:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk_co_ I solved the problem with a setTimeout before using assetsManager.load()_sm_ _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]