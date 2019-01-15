[{"Owner":"Kesshi","Date":"2016-04-13T12:21:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m currently experimenting with the post processing of BabylonJs. I found an issue which results in loss of quality if post processing is used._lt_br /_gt_\n\tI know that WebGl does not support anti aliasing when rendering into a texture. This is another problem._lt_br /_gt_\n\tLook at this demo_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XS58E_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XS58E_lt_/a_gt__lt_br /_gt_\n\tDepending on your screen resolution you see some very clear gaps between the grid lines._lt_br /_gt_\n\tIf you disable the post processing in line 14_co_ the grid will be rendered correctly. _lt_br /_gt_\n\tExcept for the missing anti aliasing i would expect the same visual result in this case._lt_br /_gt__lt_br /_gt_\n\tI looked at the BJS sources a bit and i think i found the reason for this._lt_br /_gt_\n\tLets say my canvas has a size of 900 x 700px. Because textures must be power of 2_co_ the nearest power of 2 texture size is used for the post processing. In this case a 1024 x 1024px texture will be used._lt_br /_gt_\n\tThe entire texture is then used as a target for the rendering. Because of that the 1024x1024px texture needs to be downscaled to fit in the 900 x 700px canvas._lt_br /_gt_\n\tThis will result in loss of quality._lt_br /_gt_\n\tTo solve this issue only the 900x700px portion of the 1024px texture should be used as a target for the rendering. This would prevent the downscaling. The result from the FXAA post process should also benefit from this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know how difficult it is to change this. Is there a workaround i could use?_lt_br /_gt_\n\tCurrently i can_t_t use the post processing if i want some precise results.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-13T16:14:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tis it better?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XS58E%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XS58E#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2016-04-13T18:33:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes with the NEAREST mode it looks perfekt now. But the other modes still have the same issue._lt_br /_gt_\n\tI just used nearest because the problem is more evident with it._lt_br /_gt_\n\tSee the attached images and compare nearest with bilinear.\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/bilinear.jpg.65529eb9aa35ba5a706d64b34bba5596.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7287_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/bilinear.thumb.jpg.146cfa4ffc10cf006739a7f1fcaaf4b6.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_bilinear.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/nearest.jpg.23280f7803b4ab97ab14861ab8d2fe7d.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7288_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/nearest.thumb.jpg.ec9d34fda90e698312eea4b052c35fda.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_nearest.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-04-13T19:20:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFYI_co_  I happened to run your example on iPad Air 2.  It did not compile.  Think it was a problem with _t_let_t_.  It might be legal_co_ but it it definitely not common.  Recipe for problems.  Actually_co_ I have not used _t_let_t_ since high school computer math class in 1975.  The computer was the size of a refrigerator_co_ and 16 kb ram.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse _t_var_t_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2016-04-13T20:42:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_124927_qt_ data-ipsquote-contentid_eq__qt_21897_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1460575229_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFYI_co_  I happened to run your example on iPad Air 2.  It did not compile.  Think it was a problem with _t_let_t_.  It might be legal_co_ but it it definitely not common.  Recipe for problems.  Actually_co_ I have not used _t_let_t_ since high school computer math class in 1975.  The computer was the size of a refrigerator_co_ and 16 kb ram.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUse _t_var_t_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\ti copied this function from my typescript codebase_co_ i forgot to modify this part ... in typescript let is valid_co_ it compiles to var but ensures the block scope (ES5 target)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-14T15:54:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tnearest mode is the only mode which will allow you to create non pow-2 textures _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2016-04-14T18:26:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_125006_qt_ data-ipsquote-contentid_eq__qt_21897_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1460649272_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tnearest mode is the only mode which will allow you to create non pow-2 textures _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThats why i wrote you should still create the pow-2 texture but use only a part of it._lt_br /_gt_\n\tI assume the postprocessing draws a rectangle which fits the canvas in the end. You could use texture coordinates to select the correct part of the texture._lt_br /_gt_\n\tThis is what i was doing some years ago in an c++ opengl project to get a pixel perfect result._lt_br /_gt_\n\tYou could prevent the stretching/resizing entirely this way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-14T22:58:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLike the idea _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\trendering to the texture can be controlled using a viewport and you are right regarding the quad object used to apply the texture\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdded the idea to my backlog but feel free to provide a PR if you want to do it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-14T23:53:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tactually I_t_ve just added it_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/7378387e6b426661f10544c73de5277279e63c45_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/7378387e6b426661f10544c73de5277279e63c45_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2016-04-15T06:53:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_125062_qt_ data-ipsquote-contentid_eq__qt_21897_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1460677982_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tactually I_t_ve just added it_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/7378387e6b426661f10544c73de5277279e63c45_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/7378387e6b426661f10544c73de5277279e63c45_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAwesome_co_ you are again very fast _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-04-15T12:30:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIs this usage of nearest power of 2 texture size for post processes the reason of big loss of performance on mobile devices when activating even the simplest PP ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-15T15:42:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnope this is the fastest way to do pp\n_lt_/p_gt_\n\n_lt_p_gt_\n\ton mobile_co_ the problem is fillrate. GPU (except on iphone 6) are not really powerful and applying a PP implies applying a pixel shader on every pixel of the screen\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo optimize on mobile_co_ I suggest limiting the deviceRatio when creating the engine_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar engine _eq_ new BABYLON.Engine(canvas_co_ false_co_ {limitDeviceRatio _eq_ 1})_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]