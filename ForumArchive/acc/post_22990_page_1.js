[{"Owner":"eljuko","Date":"2016-06-05T09:20:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey all!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m having a hard time with opacityTexture. Hair just seem to _qt_flip_qt_ somehow. I_t_v attached some images so you can see the difference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny idea what might cause that kind of behavior?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCode_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var material2 _eq_ new BABYLON.StandardMaterial(_qt_texture2_qt__co_ scene)_sm_\nmaterial2.diffuseTexture _eq_ new BABYLON.Texture(_qt_data/models/hair.png_qt__co_ scene)_sm_\nmaterial2.opacityTexture _eq_ material2.diffuseTexture_sm_\n\nmaterial2.backFaceCulling _eq_ false_sm_\nhairModel1 _eq_ newMeshes[1]_sm_\nhairModel1.material _eq_ material2_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/inBabylon.png.fb7b2c209c33c5dab629f0a82aee6254.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7991_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/inBabylon.png.fb7b2c209c33c5dab629f0a82aee6254.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_inBabylon.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/inBlender.png.5e6a4f2eb95d924332341ef92f9889bd.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7992_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/inBlender.png.5e6a4f2eb95d924332341ef92f9889bd.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_inBlender.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-05T11:08:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhat does it look like when backFaceCulling is on?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2016-06-05T11:15:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Adam_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdoesn_t_t look that bad_co_ but it_t_s still there.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/inBabylon2.png.9f977ae267beb6476edb097ad195ec1a.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7993_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/inBabylon2.png.9f977ae267beb6476edb097ad195ec1a.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_inBabylon2.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/inBabylon3.png.17b350bef29a86dbf14bfc418dcd1e7b.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7994_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/inBabylon3.png.17b350bef29a86dbf14bfc418dcd1e7b.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_inBabylon3.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-05T11:21:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt looks like you are having a similar issue to this one_dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/21183-question-about-textures/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2016-06-05T11:31:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m afraid that didn_t_t fix the issue. It clearly does something_co_ but not as i hoped. i tried values between -10 to 10. Also tried to fix the image in case there was some _qt_hidden_qt_ transparency but didn_t_t work either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tany other ideas?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-05T11:38:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid you try adjusting the cam.fov value?\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/21183-question-about-textures/?do_eq_embed&amp_sm_embedComment_eq_120758&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2016-06-05T12:02:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah tried to change camera.fov to 0.01 but read that  article in a hurry so not quite sure if i did that right. Anyhow. It didnt help either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ will try that again in one hour.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit2_dd_ Tried camera.fov and it didn_t_t work either. Will check the blender file if there_t_s anything i could change_co_ and will report here if i can find any solution for this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-06-05T13:49:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi @eljuko _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tTwo questions_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Is the hair mesh made of multiple overlapping strips?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Is your texture (_qt_hair.png_qt_) an RGBA texture? Does it have transparency?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf so_co_ what impact does deleting this line in your code have_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_material2.opacityTexture _eq_ material2.diffuseTexture_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2016-06-05T14:11:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey gryff!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. nope_co_ there is no overlapping strips.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. well it should atleast _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ (attached image from blender)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd__lt_br /_gt_\n\t3. removed the line and transparent areas from image turn black. also the gradient transparency is gone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_7995_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/hair.png.9dec4c8906407f46f8a16e292af19035.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_hair.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7995_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/hair.thumb.png.6c7f4264e30eee2d49ebbcf05bc7404b.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/hairWithoutOpacityTexture.png.b83c3ba4541cc0ce4143a4c1e0853be6.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7996_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/hairWithoutOpacityTexture.png.b83c3ba4541cc0ce4143a4c1e0853be6.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_hairWithoutOpacityTexture.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-06-05T15:05:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ eljuko_co_  the reason I asked those two questions is because I have been testing hair much like you  - except that my hair model is made from mesh strips.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/hair/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Example 1_lt_/a_gt_ - Basic export from Blender of mesh strips model - you can see areas of one mesh poking through another - needs some mesh tweaking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/hair/index1.html_qt_ rel_eq__qt_external nofollow_qt__gt_Example 2_lt_/a_gt_ - with the additional line of code - ugly _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe texture I am using is an RGBA\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-06-05T15:25:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t3. removed the line and transparent areas from image turn black. also the gradient transparency is gone.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tEljuko_co_ what happens to this case if you add this line of code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_material2.diffuseTexture.hasAlpha _eq_ 1_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2016-06-05T15:29:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the examples! Looks like the example2 has the same issue than mine does. Is it a bug or?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyhow_co_ gonna pass the _lt_strong_gt_lame_lt_/strong_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ gradient transparency and make the front part of the hair from strips somewhat like u or just material.diffuseTexture.hasAlpha _eq_ true.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank u!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[badHairDay.png]_lt_br /_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/badHairDay.png.c159771c93d7e3bf51c4a3d56a161ba0.png_qt_ data-fileid_eq__qt_7998_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_badHairDay.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7998_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/badHairDay.png.c159771c93d7e3bf51c4a3d56a161ba0.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2016-06-05T15:35:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_131332_qt_ data-ipsquote-contentid_eq__qt_22990_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1465140324_qt_ data-ipsquote-userid_eq__qt_7026_qt_ data-ipsquote-username_eq__qt_gryff_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 minutes ago_co_ gryff said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tEljuko_co_ what happens to this case if you add this line of code_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt_material2.diffuseTexture.hasAlpha _eq_ 1_sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAdded img. Atm this is the way to go i think. Just need to do some work with the image now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t[badHairDay2.png]_lt_br /_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/badhairday2.png.a070673ad43be65ac1cb88f1b6843167.png_qt_ data-fileid_eq__qt_7999_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_badhairday2.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7999_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/badhairday2.png.a070673ad43be65ac1cb88f1b6843167.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-06-05T15:52:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tbadHairDay.png\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\teljuko - made me spill my coffee _lt_img alt_eq__qt__dd_lol_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ title_eq__qt__dd_lol_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWatch out if you work with mesh strips (a common technique) for those nasty overlaps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2016-06-05T16:21:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you both for wasting ur time trying to resolve my issues _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]