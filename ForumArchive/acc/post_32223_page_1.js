[{"Owner":"Carharttguy","Date":"2017-08-08T07:53:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have this situation_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI load a .obj file without a .mtl file and set the material manually this way_dd__lt_br /_gt__lt_img alt_eq__qt_68YSsFV.png_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//i.imgur.com/68YSsFV.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThis works_co_ but than_co_ somewhere else in my code I try to get that mesh and set some material properties_dd__lt_br /_gt__lt_img alt_eq__qt_jZfoizC.png_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//i.imgur.com/jZfoizC.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see_co_ I get an error on the material.diffuseTexture property. I thought it maybe was an error with the .d.ts file in Typescript_co_ but the Javascript console also throws this error. How is it possible that material.diffuseTexture is not found?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Other material properties do actually work_co_ the .wireframe boolean works as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-08-08T08:18:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_184719_qt_ data-ipsquote-contentid_eq__qt_32223_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502178819_qt_ data-ipsquote-userid_eq__qt_20175_qt_ data-ipsquote-username_eq__qt_Carharttguy_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t24 minutes ago_co_ Carharttguy said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAs you can see_co_ I get an error on the material.diffuseTexture property\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tError not shown in post.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat error messages do you get in the console?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen logged in the console what value do you get for params[2] ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf this is param[2] is correct url check console to see if it has loaded.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carharttguy","Date":"2017-08-08T08:47:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_184723_qt_ data-ipsquote-contentid_eq__qt_32223_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502180312_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tError not shown in post.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhat error messages do you get in the console?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhen logged in the console what value do you get for params[2] ?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf this is param[2] is correct url check console to see if it has loaded.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi JohnK_lt_br /_gt__lt_br /_gt_\n\tI meant you can see the red dotted line under diffuseTexture in my code._lt_br /_gt__lt_br /_gt_\n\tparams[2] is something like this_dd_ /ED045E97A673F1D9F637F2198E3FB64C885940EE/files/0947-8748-9565-6312-6800/chest.png This may look like an odd value_co_ but is a correct path.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it never gets loaded_co_ because EntityToTexture.material.diffuseTexture.dispose() doesn_t_t get called in the first place_co_ because material.diffuseTexture isn_t_t found.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI get the same problem when I just try to define a new material like this_dd__lt_br /_gt_\n\tSee the code hinting_dd__lt_br /_gt__lt_img alt_eq__qt_uh3YvF6.png_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//i.imgur.com/uh3YvF6.png_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tAnd the red dotted line again_co_ showing the error_dd__lt_br /_gt__lt_img alt_eq__qt_jnicUYo.png_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//i.imgur.com/jnicUYo.png_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\tReally weird_co_ looks like my BJS install is missing this bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ I redownloaded babylon.2.5.js_co_ babylon.max.2.5.js and babylon.2.5.d.ts and the problem is still there. Even downloaded BJS 3.0 but the problem persists (and I have other breaking changes)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_16px_sm__qt__gt__lt_strong_gt_Final edit_dd_ After replacing every babylonjs file it did actually WORK! But the codehinting is not working and I still see the red dotted line saying _t_diffuseTexture property not found on Material_qt__co_ but the texture loads and everything is ok._lt_br /_gt_\n\tWhat could be wrong with the codehinting?_lt_/strong_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-08-08T09:55:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tdiffuseTexture can only be found in StandardMaterial_co_ and not in Material.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carharttguy","Date":"2017-08-08T10:05:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt__co_ that_t_s it. Stupid of me. Again a lifesaver_co_ you are.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor future reference_co_ I changed the code to_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img src_eq__qt_http_dd_//i.imgur.com/TKIR85t.png_qt_ class_eq__qt_ipsImage_qt_ alt_eq__qt_TKIR85t.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd this works.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]