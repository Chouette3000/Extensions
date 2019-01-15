[{"Owner":"Celga","Date":"2017-08-02T13:46:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m discovering GUI part_co_ in Babylon JS._lt_br /_gt_\n\tAnd for now_co_ I_t_m trying to create a textblock_co_ with simple text.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ my problem is that my text is pixelated_co_ even I change fontFamily_co_ fontSize.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve also tried to use _qt_renderAtIdealSize_qt_ and _qt_idealWidth_qt_. But_co_ nothing changes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve noticed that the pixelation is reduced when I change the zoom of the browser._lt_br /_gt_\n\tI specify that I use_co_ in this case_co_ Mozilla and also Chrome_co_ for my tests._lt_br /_gt__lt_br /_gt_\n\tDoes it exist a solution ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a link towards a playground_co_ in which I put a part of my code and specially_lt_br /_gt_\n\tthe part about the GUI.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fact is_co_ in the playground_co_ the text is not pixelated._lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#66ZD6S%231_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_https_dd_//www.babylonjs-playground.com/#66ZD6S#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI put also a screenshot of the result_co_ in the browser Mozilla (Zoom is at 100%)._lt_br /_gt__lt_img alt_eq__qt_image.png.6d18fdb1dd461d1aabf6d49e40091805.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14223_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/image.png.6d18fdb1dd461d1aabf6d49e40091805.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIf anybody could give some advice_co_ I thank you in advance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-02T15:31:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ based on what you said I can see two options_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- make sure to call engine.resize() when your canvas is resized\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- make sure your canvas is not created with fancy options (no option at all is fine)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Celga","Date":"2017-08-02T16:33:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co__lt_br /_gt__lt_br /_gt_\n\tThanks for your answer._lt_br /_gt_\n\tI confirm you that I already call _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_engine.resize() _dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_          // Watch for browser/canvas resize events_lt_br /_gt_\n\t            window.addEventListener(_qt_resize_qt__co_ function () {_lt_br /_gt_\n\t                engine.resize()_sm__lt_br /_gt_\n\t            })_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_And I use the basis for creating my canvas _dd__lt_br /_gt_\n\t          #renderCanvas {_lt_br /_gt_\n\t          width_dd_ 100%_sm__lt_br /_gt_\n\t          height_dd_ 100%_sm__lt_br /_gt_\n\t          touch-action_dd_ none_sm__lt_br /_gt_\n\t          } _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tBut_co_ I have still the same result.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-03T01:13:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDo you mind sharing your page on a server so we can see it live? (and could you please use babylon.max.js for debugging purpose?)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Celga","Date":"2017-08-03T07:59:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you advise me_co_ I embedded babylon.max.js instead of babylon.js_co_ for debugging purpose.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ I put the files of my page on a server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the link to show the page _dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//celinegarry.fr/TestGUI01/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//celinegarry.fr/TestGUI01/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-03T15:43:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tok_dd_) you should just set advancedTexture.renderAtIdealSize _eq_ false to render using optimal resolution _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Celga","Date":"2017-08-03T16:02:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for your answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ unfortunately_co_ I_t_ve just tried with changing renderAtIdealSize to false and I have the same result _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tHere is the new link _dd__lt_br /_gt__lt_a href_eq__qt_http_dd_//celinegarry.fr/TestGUI02/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//celinegarry.fr/TestGUI02/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMay be I have something else wrong._lt_br /_gt_\n\tSorry\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-04T22:10:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk try with your fxaa configure with a ratio of 1 instead of 1.5\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Celga","Date":"2017-08-21T18:35:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst of all_co_ I apologize for the late answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI thank you for your advice_co_ @Delatkosh._lt_br /_gt_\n\tI tried with changing the fxaa configure_co_ and... It works _dd_).._lt_br /_gt_\n\tThe preview is now better.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]