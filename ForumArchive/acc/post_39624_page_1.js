[{"Owner":"mafof","Date":"2018-08-24T20:55:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ i_t_am installed babylonjs-gui version 3.2.0 and read him_co_ i found that there is no class GUI3DManager...\n_lt_/p_gt_\n\n_lt_p_gt_\n\talso i have error to my browser_lt_br /_gt_\n\t`Uncaught TypeError_dd_ babylonjs_gui__WEBPACK_IMPORTED_MODULE_0__.GUI3DManager is not a constructor`\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit_t_s my package.json\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  _qt_devDependencies_qt__dd_ {\n    _qt_@babel/core_qt__dd_ _qt_^7.0.0-beta.42_qt__co_\n    _qt_@babel/plugin-proposal-object-rest-spread_qt__dd_ _qt_^7.0.0-beta.42_qt__co_\n    _qt_@babel/preset-env_qt__dd_ _qt_^7.0.0-beta.42_qt__co_\n    _qt_babel-loader_qt__dd_ _qt_^8.0.0-beta.2_qt__co_\n    _qt_babylonjs_qt__dd_ _qt_^3.2.0_qt__co_\n    _qt_babylonjs-gui_qt__dd_ _qt_^3.2.0_qt__co_\n    _qt_babylonjs-loaders_qt__dd_ _qt_^3.2.0_qt__co_\n    _qt_webpack_qt__dd_ _qt_^4.2.0_qt__co_\n    _qt_webpack-cli_qt__dd_ _qt_^2.0.12_qt_\n  }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tit_t_s place where i recieve error\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import * as GUI from _t_babylonjs-gui_t__sm_\nclass AppGui {\n    constructor(mainApp) {\n        if(mainApp _eq__eq_ undefined || typeof mainApp.scene !_eq_ _qt_object_qt_) throw new Error(_qt_Select instance application_qt_)_sm_\n        this.manager _eq_ new GUI.GUI3DManager(mainApp.scene)_sm_\n        // let button _eq_ this.addButton()_sm_\n\n        // button.onPointerDownObservable.add(() _eq_&gt_sm_ {\n        //     console.log(button.name)_sm_\n        // })_sm_\n        // this.manager.addControl(button)_sm_\n    }\n\n    /**\n     * @deprecated\n     */\n    addButton() {\n        return new GUI.Button3D(_qt_click me_qt_)_sm_\n    }\n\n    addCallbackButton(button_co_ functionName) {\n        button.onPointerDownObservable.add(functionName)_sm_\n    }\n}_sm_\nexport default AppGui_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-24T21:36:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello this is expected as the 3D GUI was introduced with 3.3\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can get it from NPM as well (as a preview)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mafof","Date":"2018-08-25T09:02:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_226119_qt_ data-ipsquote-contentid_eq__qt_39624_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1535146578_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello this is expected as the 3D GUI was introduced with 3.3\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou can get it from NPM as well (as a preview)_lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-27T16:50:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFlagging as solved\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]