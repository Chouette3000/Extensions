[{"Owner":"jerome","Date":"2015-02-03T16:30:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Big jump into Typescript for me._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess I can learn fast the language_co_ but I need help to set up the environment/context regarding to BJS._lt_/p_gt__lt_p_gt_I started reading tutos and so on about the syntax itself._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I use SublimeText 2 editor on Linux Ubuntu 14.04. I set it up to use TypeScript by adding this module _dd_ _lt_a href_eq__qt_https_dd_//github.com/Railk/T3S_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Railk/T3S_lt_/a_gt__lt_/p_gt__lt_p_gt_npm_co_ typescript_co_ tss are installed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So ?_lt_/p_gt__lt_p_gt_What do I have to do then ?_lt_/p_gt__lt_p_gt_I tried to compile a js script file renamed in .ts ... it just couldn_t_t find the name _lt_em_gt__t_BABYLON_t__lt_/em_gt_ which is written everywhere in my code _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I guess TS will check for lib/module dependencies. So how do I specify them_co_ etc ?_lt_/p_gt__lt_p_gt_Are the ds files some description files with all BJS API declarations embedded ? How to use them with SublimeText2 ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any links_co_ tutos or posts about these usages (not TS syntax I can learn) are welcome._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Heee_lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_ee_lt_/span_gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt_ee_lt_/span_gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt_l_lt_span style_eq__qt_font-size_dd_8px_sm__qt__gt_p ... arg_lt_/span_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-02-03T16:58:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When you compile_co_ you must compile ts files with ts code inside._lt_/p_gt__lt_p_gt_The compilation creates the related pure .js files starting from the .ts files_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can find the definition file (.d.ts) here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js_lt_/a_gt_ named babylon.2.0.d.ts _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The problem is I don_t_t know how to use it with sublime text _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_You can use grunt to compile your files and create a command line in your sublime text project._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope someone else will help you more _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-03T17:45:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep I understand well about ts file with ts code aaarff... _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I just wanted to see how pure js would be compiled._lt_/p_gt__lt_p_gt_As ts is a superset of js_co_ vanilla js is correct (valid) ts_co_ isn_t_t it ?_lt_/p_gt__lt_p_gt_When doing this_co_ the compiler can_t_t understand every _lt_em_gt_BABYLON_lt_/em_gt_ word. So I guessed it checked the dependencies._lt_/p_gt__lt_p_gt_Do you start with some _lt_em_gt_import_lt_/em_gt_ clause or something equivalent to tell your code _dd_ _qt_this _lt_em_gt_BABYLON_lt_/em_gt_ object is known somewhere else_qt_ ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-02-03T21:54:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Jerome_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_try adding a reference to the babylon.d.ts file at the beginning of the file your are trying to compile_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_///&lt_sm_reference path_eq__qt_./location/babylon.d.ts_qt_/&gt_sm__lt_/pre_gt__lt_p_gt_and try to compile using tsc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Typescript is a superset of javascript (pure-vanilla style _dd_-) ) _co_ but during the compilation it is type safe - it will search for the babylon references_co_ and if they are not found it will throw an error. Just like in your case. This reference is telling the compiler where to find the definitions of the classes you are using (declarations_co_ more correctly). Similar to including a header file in c (similar concept_co_ works totally different thou)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-04T09:09:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_aaah_co_ my idol_t_s answer _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Thank you_co_ it was right the explanation I needed !_lt_/p_gt__lt_p_gt_I test it asap_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-04T09:57:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It works !!! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I used the babylon1.14 description file because the 2.0 one gave me errors (cannot find AudioNode_co_ GainNode_co_ etc)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-02-04T10:11:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perfect!_lt_/p_gt__lt_p_gt_AudioNode_co_ GainNode and the rest of the friends are in an external .d.ts file (is in the References directory in github - _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/References_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/References_lt_/a_gt_ ) . Include them as a reference and you can use babylon 2.0 _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-04T10:29:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Gourgl _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ alt_eq__qt__dd_blink_dd__qt__gt_ _dd_blink_dd__lt_/p_gt__lt_p_gt_I didn_t_t notice_co_ pfff_co_ feeling so stupid_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_///&lt_sm_reference path_eq__qt_../Babylon.js/babylon.2.0.d.ts_qt_/&gt_sm_///&lt_sm_reference path_eq__qt_../Babylon.js/References/poly2tri.d.ts_qt_/&gt_sm_///&lt_sm_reference path_eq__qt_../Babylon.js/References/waa.d.ts_qt_/&gt_sm__lt_/pre_gt__lt_p_gt_now_co_ it_t_s working _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thank you_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-02-04T10:35:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s why we are all here! to help and learn from others _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-04T10:47:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Danke schön _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-02-04T16:50:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_70608_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12229_qt_ data-ipsquote-username_eq__qt_jerome_qt_ data-cite_eq__qt_jerome_qt_ data-ipsquote-timestamp_eq__qt_1423043852_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_It works !!! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I used the babylon1.14 description file because the 2.0 one gave me errors (cannot find AudioNode_co_ GainNode_co_ etc)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_incase you need something in 2.0_co_ here is waa.d.ts link.  Web Audio is referenced inside of Babylon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/borisyankov/DefinitelyTyped/blob/master/webaudioapi/waa.d.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/borisyankov/DefinitelyTyped/blob/master/webaudioapi/waa.d.ts_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-02-04T16:52:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wait_co_ there is now also poly2tri.d.ts.  Both can be found in repository References sub-directory_co_ waa there is old though._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-11T20:54:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_mmhh..._lt_/p_gt__lt_p_gt_as I just couldn_t_t compile on my office computer maybe because wrong preinstallation_co_ I got my old laptop at home._lt_/p_gt__lt_p_gt_Ubuntu 14.04_co_ nodejs freshly installed and updated (n stable)_co_ typescript installed_co_ gulp installed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So let_t_s go._lt_/p_gt__lt_p_gt_I just cloned the original BJS repo (v2.0 stable) _dd_ git clone etc_lt_/p_gt__lt_p_gt_Then_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_cd Babylon.js/Tools/Gulp_lt_/pre_gt__lt_p_gt_then I simply followed this wiki page _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/Gulp_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/Gulp_lt_/a_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_npm installnpm update_lt_/pre_gt__lt_p_gt_Right_co_ _t_til now_co_ everything is ok._lt_/p_gt__lt_p_gt_Now_co_ I_t_m going to simply to compile what I just got. Should work_co_ nope ?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_gulp typescript-to-js_lt_/pre_gt__lt_p_gt_iirrrrrrkkkk  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_angry.png_qt_ alt_eq__qt__dd_angry_dd__qt__gt__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_[21_dd_48_dd_32] Using gulpfile /var/www/BJS/Babylon.js/Tools/Gulp/gulpfile.js[21_dd_48_dd_32] Starting _t_typescript-to-js_t_...[21_dd_48_dd_33] Compiling TypeScript files using tsc version null[21_dd_48_dd_39] [tsc] &gt_sm_ /var/www/BJS/Babylon.js/Babylon/Materials/Textures/babylon.videoTexture.ts(36_co_24)_dd_ error TS2339_dd_ Property _t_src_t_ does not exist on type _t_HTMLElement_t_.[21_dd_48_dd_39] [tsc] &gt_sm_ /var/www/BJS/Babylon.js/Babylon/Mesh/babylon.mesh.ts(884_co_53)_dd_ error TS2345_dd_ Argument of type _t_number[]_t_ is not assignable to parameter of type _t_Uint8Array_t_.[21_dd_48_dd_39] [tsc] &gt_sm_ /var/www/BJS/Babylon.js/Babylon/Mesh/babylon.mesh.ts(1217_co_122)_dd_ error TS2345_dd_ Argument of type _t_number[]_t_ is not assignable to parameter of type _t_Uint8Array_t_.[21_dd_48_dd_39] [tsc] &gt_sm_ /var/www/BJS/Babylon.js/Babylon/Tools/babylon.database.ts(260_co_58)_dd_ error TS2339_dd_ Property _t_error_t_ does not exist on type _t_Element_t_.[21_dd_48_dd_39] [tsc] &gt_sm_ /var/www/BJS/Babylon.js/Babylon/Tools/babylon.database.ts(379_co_50)_dd_ error TS2339_dd_ Property _t_error_t_ does not exist on type _t_Element_t_.[21_dd_48_dd_39] [tsc] &gt_sm_ /var/www/BJS/Babylon.js/Babylon/Tools/babylon.database.ts(510_co_58)_dd_ error TS2339_dd_ Property _t_error_t_ does not exist on type _t_Element_t_.[21_dd_48_dd_39] [tsc] &gt_sm_ /var/www/BJS/Babylon.js/Babylon/Tools/babylon.tools.ts(288_co_35)_dd_ error TS2339_dd_ Property _t_result_t_ does not exist on type _t_EventTarget_t_.[21_dd_48_dd_39] [tsc] &gt_sm_ /var/www/BJS/Babylon.js/Babylon/Tools/babylon.tools.ts(297_co_35)_dd_ error TS2339_dd_ Property _t_result_t_ does not exist on type _t_EventTarget_t_.[21_dd_48_dd_39] [tsc] &gt_sm_ /var/www/BJS/Babylon.js/Babylon/Tools/babylon.tools.ts(509_co_32)_dd_ error TS2339_dd_ Property _t_set_t_ does not exist on type _t_number[]_t_.[21_dd_48_dd_40] Failed to compile TypeScript_dd_ Error_dd_ tsc command has exited with code_dd_2 events.js_dd_85      throw er_sm_ // Unhandled _t_error_t_ event            ^Error_dd_ Failed to compile_dd_ tsc command has exited with code_dd_2    at /var/www/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-tsc/index.js_dd_51_dd_33    at /var/www/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-tsc/lib/compiler.js_dd_360_dd_8    at Array.forEach (native)    at Function.Compiler._allAborted (/var/www/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-tsc/lib/compiler.js_dd_359_dd_13)    at Function.Compiler.abortAll (/var/www/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-tsc/lib/compiler.js_dd_337_dd_14)    at /var/www/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-tsc/index.js_dd_50_dd_20    at finish (/var/www/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-tsc/lib/compiler.js_dd_120_dd_5)    at /var/www/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-tsc/lib/compiler.js_dd_112_dd_9    at DestroyableTransform.&lt_sm_anonymous&gt_sm_ (/var/www/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-tsc/lib/compiler.js_dd_217_dd_5)    at DestroyableTransform.emit (events.js_dd_129_dd_20)_lt_/pre_gt__lt_p_gt_Yet I checked the downloaded gulp file_co_ _lt_em_gt_target ES5_lt_/em_gt_ seems to be specified  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ in the _lt_em_gt_typescript-to-js_lt_/em_gt_ task._lt_/p_gt__lt_p_gt_Any idea please ?_lt_/p_gt__lt_p_gt_or at last a link to some tsc pertinent manual ?_lt_/p_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-02-11T20:59:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry that won_t_t help much_co_ but I have the same typescript errors with latest Eclipse_t_s palantir typescript compiler._lt_/p_gt__lt_p_gt_See this post _dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12197-typescript-errors-since-typescript-plugin-update/_qt__gt_http_dd_//www.html5gamedevs.com/topic/12197-typescript-errors-since-typescript-plugin-update/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-02-11T21:00:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_[21_dd_48_dd_33] Compiling TypeScript files using tsc version null_lt_/pre_gt__lt_p_gt_What version of tsc are you using?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Those errors are all correct. HTMLElement has no src property. But the call in video structure is returning a HTMLSourceElement_co_ which has one. This is declared in the lib.d.ts file_co_ located somewhere on your system (if you only installed typescript using npm_co_ i believe it is where your npm modules are installed). It seems like your lib.d.ts is simply not updated._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-02-11T21:21:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_71623_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12229_qt_ data-ipsquote-username_eq__qt_RaananW_qt_ data-cite_eq__qt_RaananW_qt_ data-ipsquote-timestamp_eq__qt_1423688458_qt__gt__lt_div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_[21_dd_48_dd_33] Compiling TypeScript files using tsc version null_lt_/pre_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I also have this exact same strange line when I_t_m trying to compile with tsc._lt_/p_gt__lt_p_gt_I_t_m in the same situation as jerome_co_ fresh node.js_co_ gulp installed (at first as global_co_ then) as local in BJS/Tools/Gulp folder._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s the dump when I try _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_gulp typescript-to-js_lt_/span_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_[22_dd_10_dd_40] Starting ‘typescript-to-js’...[22_dd_10_dd_41] Compiling TypeScript files using tsc version null[22_dd_10_dd_41] [tsc] &gt_sm_ La ligne de commande est trop longue.[22_dd_10_dd_41] Failed to compile Typescript_dd_ Error_dd_ tsc command has exited with code_dd_1events .js _dd_72throw er_sm_ // Unhandled ‘error’ eventError in plugin ‘&lt_sm_-[36mgulp-tsc&lt_sm_-[39m_t_Failed to compile_dd_ tsc command has exited with code_dd_1at F_dd_\\DEV\\GitHub\\Babylon .js\\Tools\\Gulp\\node_modules\\gulp-tsc\\index.js _dd_51 _dd_33at F_dd_\\DEV\\GitHub\\Babylon .js\\Tools\\Gulp\\node_modules\\gulp-tsc\\lib\\compiler.js _dd_360_dd_8at Array.forEach (native)at Function.Compiler._allAborted (F_dd_\\DEV\\GitHub\\Babylon.js\\Tools\\Gulp\\node_modules\\gulp-tsc\\lib\\compiler.js _dd_359_dd_13)at Function .Compiler.abortAll (F_dd_\\DEV\\GitHub\\Babylon .js\\Tools\\Gulp\\node_modules\\gulp-tsc\\lib\\compiler.js _dd_337_dd_14)at F_dd_\\DEV\\GitHub\\Babylon .js\\Tools\\Gulp\\node_modules\\gulp-tsc\\index.js _dd_50_dd_20at finish (F_dd_\\DEV\\GitHub\\Babylon .js\\Tools\\Gulp\\node_modules\\gulp-tsc\\lib\\compiler.js _dd_120_dd_5)at F_dd_\\DEV\\GitHub\\Babylon .js\\Tools\\Gulp\\node_modules\\gulp-tsc\\lib\\compiler.js _dd_112_dd_9at DestroyableTransform.&lt_sm_anonymous&gt_sm_ (F_dd_\\DEV\\GitHub\\Babylon .js\\Tools\\Gulp\\node_modules\\gulp-tsc\\lib\\compiler.js _dd_217_dd_5)at DestroyableTransform.emit (events .js _dd_117_dd_20)_lt_/pre_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt__qt_Compiling TypeScript files using tsc version null_qt__lt_/span_gt__co_ same as jerome_co_ but also _dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_[22_dd_10_dd_41] [tsc] &gt_sm_ La ligne de commande est trop longue.    _lt_em_gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm__qt__gt_(that means _qt_command line is too long_qt_)_lt_/span_gt__lt_/em_gt__lt_/span_gt__lt_/p_gt__lt_p_gt_[22_dd_10_dd_41] Failed to compile Typescript_dd_ Error_dd_ tsc command has exited with code_dd_1_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-02-11T21:30:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is a different error_co_ I assume you are using windows. Try (temporarily) moving the entire babylon directory to your root dir (or to a dir named _qt_a_qt_ or something in the roort)._lt_/p_gt__lt_p_gt_The problem here is windows - it limits the amount of characters in the command line. It references each file using its full path and since your path is (relatively) long - F_dd_\\DEV\\GitHub\\Babylon .js\\ _co_ adding it to each file causes this._lt_/p_gt__lt_p_gt_There is sadly no workaround_co_ we are doing exactly what I told you in order to compile bjs using a build server._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit - looks like this will be addressed in npm 3 - _lt_a href_eq__qt_https_dd_//github.com/npm/npm/issues/3697_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/npm/npm/issues/3697_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_About the null - run_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_tsc -version_lt_/pre_gt__lt_p_gt_What do version do you use?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-02-11T22:24:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_#tsc -version_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_message TS6029_dd_ Version 1.4.1.0_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Good idea_co_ I will try to move everything to root directory (I hope symbolic link will be enough _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-02-11T22:33:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It works with a symbolic link ! Thanks. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And now_co_ I have the exact same compiling errors as jerome... _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_dry.png_qt_ alt_eq__qt_&lt_sm__&lt_sm__qt__gt__lt_/p_gt__lt_p_gt_The same errors I also have in Eclipse with palantir typescript plugin..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-02-11T23:08:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_strike_gt_Gulp tsc only supports typescript version ^1.0.1 ._lt_/strike_gt_ I am working with 1.0.3.0 for it to actually work. I wonder if this is the issue._lt_/p_gt__lt_p_gt_I just noticed gulp-typescript is much more updated than tsc (gulp tsc - _lt_a href_eq__qt_https_dd_//github.com/kotas/gulp-tsc_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/kotas/gulp-tsc_lt_/a_gt_ _co_ gulp-typescript is _lt_a rel_eq__qt_external nofollow_qt__gt_at _lt_/a_gt__lt_a href_eq__qt_https_dd_//github.com/ivogabe/gulp-typescript_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/ivogabe/gulp-typescript_lt_/a_gt_). Maybe it would work better._lt_/p_gt__lt_p_gt_Try anyhow installing a _qt_downgraded_qt_ version of typescript and see if it solves the issue. Maybe install tsc 1.0.3 globally (you can remove it later)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This seems to be an issue with the lib.d.ts for newer versions of typescript._lt_/p_gt__lt_p_gt_For example_co_ for createElement_co_ the tag name is SOURCE (written in capital) and not _qt_souce_qt__co_ which is what is being used in bjs._lt_/p_gt__lt_p_gt_Another example - ImageData_t_s data attribute is UInt8Array in older versions of typescript_co_ but in the newest it is a number[] (which has no set function_co_ this is correct)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Those errors should be addressed to support the newest typescript lib.d.ts . I think the source is an error with the capital but the rest look like genuine errors due to type changes._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-12T08:22:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Only one word comes to my mind _dd_ _lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt__lt_span style_eq__qt_font-size_dd_18px_sm__qt__gt__lt_span style_eq__qt_font-size_dd_24px_sm__qt__gt_AA_lt_/span_gt_AA_lt_/span_gt__lt_/span_gt_Aaaaarggggg !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying to do everything clean_co_ updated_co_ with latest versions for each tool (tsc v1.4.1.0)..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And I just can_t_t have the whole stuff working _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think I will start a new thread asking for people in here what  _lt_em_gt_really working_lt_/em_gt_ environment they use._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Imho_co_ this problem is a real brake for new people who wants to enter the great contribution arena._lt_/p_gt__lt_p_gt_I_t_m a quite tenacious guy with some skills in deploying linux softs or switching code languages in my mind and I haven_t_t given up so far (but I_t_m almost about to do it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) but I guess less tenacious people would have leaved far before._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe should we start a new documentation page about setting _lt_em_gt_validated working_lt_/em_gt_ environments on different platforms (I can_t_t write anything about this so far) ?_lt_/p_gt__lt_p_gt_So people won_t_t waste their time just in trying to have the environment working and then can focus only on BJS code._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-12T10:21:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_BTW_co_ coming from Phaser forum_co_ I know Rich Davey (the conceptor of Phaser) decided early to give up TS to vanilla JS only because of these recurrent compiler change implications._lt_/p_gt__lt_p_gt_He prefered dealing with javascript lack of rigor rather than dealing with building tool stability issues._lt_/p_gt__lt_p_gt_Every choice or opinion are valuable._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I can understand as well the TS choice_co_ because this language brings much structuration and control over the code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe then would be worth to define a fixed (but evolutive) recommended validated platform for contributors ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ex _dd_ now the beta is 2.1._lt_/p_gt__lt_p_gt__qt_For contributing to 2.1_co_ we recommend you to use _dd_ typescript x.y_co_ tsc x.y.z_co_ gulp x.y.z as we have validated this cross-platform package._lt_/p_gt__lt_p_gt_Here is the doc to set up this very recommended environment _dd_ link_to_doc _qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_then change only tools value versions when changing BJS version_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-12T11:27:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_lol_co_ I used the old notpadd++  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_div_gt_I have no problem as ca. but it is true that it is not visual studio intellisense._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_but I quite agree_co_ I think for the contribution was the most common Javascript and used and even easier that _qt_taputruc_qt_ I find_co_ that I do not like._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-02-12T12:42:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Jerome_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_yeah_co_ those things can be a bit upsetting_co_ but the benefits of such a tool is huge. _lt_/p_gt__lt_p_gt_I wanted to check today if the code can be changed to fit typescript 1.4 . It shouldn_t_t be a problem. Casting would solve this problem. And since casting doesn_t_t influence the generated code_co_ I see no problem doing that_co_ especially since it is already working. But there might be a better solution._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think_co_ anyhow_co_ that you can try using a downgraded version of typescript until this is solved. Would be the simplest solution for you._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_No need to get angry  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-12T13:05:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_don_t_t worry RaananW _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I_t_m not angry (remember the virtual smiley emoticon in my post background _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I know there are many benefits. Else why having those additional complex layers  ? _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_The upsetting thing is the great variability of the compiler from a version to another _dd_ it compiles_co_ you update it_co_ it doesn_t_t compile any longer ... the same source code. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ alt_eq__qt__dd_huh_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So are you modifying each existing BJS class to add casting ??? huge work._lt_/p_gt__lt_p_gt_If it then compiles_co_ I hope the next compiler update won_t_t find another thing to grouse against _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Which tsc version do you recommend to downgrade to ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]