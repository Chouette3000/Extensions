[{"Owner":"Ingo Chou","Date":"2017-10-04T03:52:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is an error_dd_  _qt_importScripts_qt_ not found when I compile BABYLONJS source in VS2017.  And the source file is _qt_babylon.collisionWorker.ts_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy project is TYPESCRIPT.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I fix this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-04T07:18:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\timportScripts is a dom-feature_co_ existing natively in webworkers (_lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#Importing_scripts_and_libraries_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#Importing_scripts_and_libraries_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy assumption is that you are missing the type declaration for importScripts_co_ which should be defined in your tsconfig.json. Try adding _qt_webworker_qt_ to _qt_types_qt_ in your typescript configuration and see if it helps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW - what TS version are you using?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2017-10-04T13:16:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_{\n  _qt_compileOnSave_qt__dd_ true_co_\n  _qt_compilerOptions_qt__dd_ {\n    _qt_experimentalDecorators_qt__dd_ true_co_\n    _qt_module_qt__dd_ _qt_commonjs_qt__co_\n    _qt_target_qt__dd_ _qt_es5_qt__co_\n    _qt_sourceMap_qt__dd_ true_co_\n    _qt_lib_qt__dd_ [ _qt_dom_qt__co_ _qt_es2015.promise_qt__co_ _qt_es5_qt_ ]_co_\n    _qt_types_qt__dd_ [ _qt_webworker_qt_ ]\n  }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI add _qt_types_qt_ like this. Is it right ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut there is an error_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_tsc _dd_ error TS2688_dd_ Build_dd_Cannot find type definition file for _t_webworker_t_._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tMy TS version  is ES5. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-04T13:27:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAhh! sorry _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ as a lib_co_ not as types _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2017-10-05T02:59:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(656_co_5)_dd_ error TS2403_dd_ Build_dd_Subsequent variable declarations must have the same type.  Variable _t_source_t_ must be of type _t_any_t__co_ but here has type _t_Window_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(2505_co_5)_dd_ error TS2375_dd_ Build_dd_Duplicate number index signature.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(3695_co_14)_dd_ error TS2403_dd_ Build_dd_Subsequent variable declarations must have the same type.  Variable _t_srcElement_t_ must be of type _t_any_t__co_ but here has type _t_Element_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(3766_co_5)_dd_ error TS2375_dd_ Build_dd_Duplicate number index signature.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(8044_co_14)_dd_ error TS2403_dd_ Build_dd_Subsequent variable declarations must have the same type.  Variable _t_source_t_ must be of type _t_any_t__co_ but here has type _t_Window_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(13333_co_14)_dd_ error TS2403_dd_ Build_dd_Subsequent variable declarations must have the same type.  Variable _t_responseXML_t_ must be of type _t_any_t__co_ but here has type _t_Document_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14171_co_14)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_EventListenerOrEventListenerObject_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14707_co_13)_dd_ error TS2403_dd_ Build_dd_Subsequent variable declarations must have the same type.  Variable _t_location_t_ must be of type _t_WorkerLocation_t__co_ but here has type _t_Location_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14713_co_13)_dd_ error TS2403_dd_ Build_dd_Subsequent variable declarations must have the same type.  Variable _t_navigator_t_ must be of type _t_WorkerNavigator_t__co_ but here has type _t_Navigator_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14740_co_13)_dd_ error TS2403_dd_ Build_dd_Subsequent variable declarations must have the same type.  Variable _t_onerror_t_ must be of type _t_(this_dd_ DedicatedWorkerGlobalScope_co_ ev_dd_ ErrorEvent) _eq_&gt_sm_ any_t__co_ but here has type _t_ErrorEventHandler_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14752_co_13)_dd_ error TS2403_dd_ Build_dd_Subsequent variable declarations must have the same type.  Variable _t_onmessage_t_ must be of type _t_(this_dd_ DedicatedWorkerGlobalScope_co_ ev_dd_ MessageEvent) _eq_&gt_sm_ any_t__co_ but here has type _t_(this_dd_ Window_co_ ev_dd_ MessageEvent) _eq_&gt_sm_ any_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14823_co_13)_dd_ error TS2403_dd_ Build_dd_Subsequent variable declarations must have the same type.  Variable _t_self_t_ must be of type _t_WorkerGlobalScope_t__co_ but here has type _t_Window_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14897_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_AlgorithmIdentifier_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14898_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_BodyInit_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14920_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_IDBKeyPath_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14929_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_RequestInfo_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14930_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_USVString_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14934_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_IDBValidKey_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.dom.d.ts(14935_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_BufferSource_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.webworker.d.ts(1684_co_14)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_EventListenerOrEventListenerObject_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.webworker.d.ts(1743_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_AlgorithmIdentifier_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.webworker.d.ts(1744_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_BodyInit_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.webworker.d.ts(1745_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_IDBKeyPath_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.webworker.d.ts(1746_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_RequestInfo_t_.\n1&gt_sm_C_dd_\\Program Files (x86)\\Microsoft SDKs\\TypeScript\\2.2\\lib.webworker.d.ts(1747_co_6)_dd_ error TS2300_dd_ Build_dd_Duplicate identifier _t_USVString_t_._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n  _qt_compileOnSave_qt__dd_ true_co_\n  _qt_compilerOptions_qt__dd_ {\n    _qt_experimentalDecorators_qt__dd_ true_co_\n    _qt_module_qt__dd_ _qt_commonjs_qt__co_\n    _qt_target_qt__dd_ _qt_es5_qt__co_\n    _qt_sourceMap_qt__dd_ true_co_\n    _qt_lib_qt__dd_ [ _qt_dom_qt__co_ _qt_es2015.promise_qt__co_ _qt_es5_qt__co_ _qt_webworker_qt_ ]\n  }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThere are some errors after add _qt_webworker_qt_ to _qt_lib_qt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-05T07:54:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat seems rather odd. But still makes sense.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wonder - what are you actually trying to do? compile Babylon? There is a dedicated Gulp Script for that_co_ that compiles each module correctly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem is that both modules should include a different lib_co_ and then compile. Afterwards you are able to combine the two.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2017-10-05T12:22:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@_lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F33234-importscripts-not-found%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ title_eq__qt_Go to RaananW_t_s profile_qt_ rel_eq__qt__qt__gt__lt_u_gt__lt_font color_eq__qt_#0066cc_qt__gt_RaananW_lt_/font_gt__lt_/u_gt__lt_/a_gt_ _co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ I want to compile BABYLON.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems that it is very difficult or even impossible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-05T12:39:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt obviously more than possible_co_ as we are doing it at least once a day.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should use gulp for that_co_ and our predefined gulp script. You can read about it here - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/generals/how_to_start_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/generals/how_to_start_lt_/a_gt_ .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe don_t_t support compiling Babylon outside of gulp_co_ mainly due to the problem you are currently facing. All modules_co_ loaders_co_ materials etc_t_ are being built externally and then (if needed_co_ like in the case of workers) integrated into a single file. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2017-10-06T01:23:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan not compile BABYLON source by VS2015 / VS2017 ? But only gulp?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just want to compile it by VS2017_co_ so I can use BABYLON in my other project compiled by typescript.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2017-10-06T03:42:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGulp is integrated in VS2017 so you could use the task panel integrated in it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso if it is to use in another project why not simply referencing the declaration files instead of the full source ? (this would help understanding how you could do)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2017-10-07T10:57:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@_lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F33234-importscripts-not-found%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ title_eq__qt_Go to Sebavan_t_s profile_qt_ rel_eq__qt__qt__gt__lt_u_gt__lt_font color_eq__qt_#0066cc_qt__gt_Sebavan_lt_/font_gt__lt_/u_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy project is TYPESCRIPT and I referenced the babylon.d.ts and Babylon.js .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is an error_dd_ namespace BABYLON.Engine not fount when I use BABYLON.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]