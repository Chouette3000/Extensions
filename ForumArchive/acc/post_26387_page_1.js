[{"Owner":"Pryme8","Date":"2016-11-14T20:55:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSo I delivered a update to one of my clients today_co_ and they are getting this error while I am not_dd__lt_br /_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_10267_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/Capture.JPG.c2c4fa1c26a57ea4d48c97e6ae5d1c9c.JPG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Capture.JPG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10267_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_11/Capture.thumb.JPG.134ca83109d9951678c576f0af4fdeb2.JPG_qt_ /_gt__lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tThe scene compiles fine for me and runs great_co_  I have no clue wtf or how to ever start debugging this especially since I can not recreate it._lt_br /_gt__lt_br /_gt_\n\tI assume they are using all the same files I served to them that I am running on my local_co_ and I am hung over as all get out today so my brain is not working... and am clueless on this._lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt_ Cannon god please come help. &gt_sm__&lt_sm_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-14T21:17:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMy guess is that you are dealing with a timing issue.  It looks like the physics plugin is trying to access the mesh before it_t_s ready.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-14T21:21:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tcouldn_t_t be_co_ all meshes are preloaded and the physics does not attach until the whole scene and is constructed.  I did think that initially as well_co_ but Im not able to get Three different PC to drop the error all with way different specs_co_ and nope._lt_br /_gt__lt_br /_gt_\n\tThis is super odd.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-14T21:33:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDid you tell them to delete their cache?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-14T21:55:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t&gt_sm__&lt_sm_ I really hope that is it.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-14T22:02:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tnope_co_ and I did not think it was cacheing because he made a fresh directory on his local host\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-15T01:06:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah and the weird part is he remoted it to anouther PC and got the same error?!  And I have yet to be able to produce it on 3 of my machines so I_t_m stumped\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-11-15T01:09:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tsend me a link to the scene. This is solvable.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-15T04:09:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI will send you an email now dave\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-15T15:24:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSo the plot thickens_co_ I could not recreate the error at all_co_ until I booted it up in firefox when I do that I get the same error as my client but at a different position.  The craziness is if I load it into chrome no error.  I need to pull put the big guns on this one and am willing to pay someone if I am unable to figure it out (which is odd). _lt_br /_gt__lt_br /_gt_\n\tThis has to be fixed today or AIS Goverment will lose all confidence in me I have a feeling.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-15T16:24:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk one good thing in my favor now_co_ it works with no error on his colleges computer so that means we are having different systems handle the scene completely differently.  Umm timing issue?  Maybe set the timouts to like 30 instead of 0?_lt_br /_gt__lt_br /_gt_\n\tThis is really really weird.  Oh and the crazyness is I changed where a console.log was and nothing else and then the error disappeared then 10 mins later came back when I made no other changes (and no its not a cache issue I do not ever work with a cache on).  I have never seen behavior like this in my life.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-15T16:26:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcan you try to use babylon.max.js to see where this is happening?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to get a link to the repro case?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-15T16:28:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_ or _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ paid debug? PM me!_lt_br /_gt__lt_br /_gt_\n\tUm I think i have narrowed it down to cannon trying to make in imposter on a mesh that has no vertex data_co_ which is odd I_t_m going to check my obj files to make sure this is not the case but I_t_m kinda intrigued why half the clients do not receive this error... if its an error its and error It should not compile on anyone_t_s.  And until i served the product had no clue there was even a problem._lt_br /_gt__lt_br /_gt_\n\tDue to it being a product not technically owned by me I do not think I could repo it without their permission but I will ask and see if they are cool with that.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-15T16:59:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think I may have found a work around!_lt_br /_gt__lt_br /_gt_\n\till post if I got it_co_ I found a Null Object was the parent object for one of my mesh groups.  I am going to fix that and see if that stops the error.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-11-17T10:02:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ null parent might cause this_co_ as the physics engine counts on parenting when calculating the physics objects.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to show me a demo of what happens_co_ I might be able to help further.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-17T14:47:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ Can you let us know how this turned out?  Thanks\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-17T15:16:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was never able to figure this out and trying to fix it only compounded the issue now.  I have found now that c4d r17 and c4d r14 export obj files in a complete different hierarchy and stick them in a null object no matter what you do with r17 (eajklfhsdjklahsfhjklasdfashklf bullshit).  So I have to make sure I do all my preset exports for my system with r14.  Now the odd part is that Chrome does not skip a beat with this parent null._lt_br /_gt__lt_br /_gt_\n\tAnd now for the worse news... I was just informed last night that due to the clients requirements (because they are a federal entity) of what browser they have on their employees computers I have to make this work on IE11... and I about dropped a bollocks...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tA paid debug is still in the air for one of you guys who think you can fix it.  PM me if you are feeling froggy.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-17T15:24:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI primarily use IE11 + Visual Studio when developing projects in BJS.  \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-17T15:26:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk so there is hope?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-17T15:26:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDefinitely\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-11-17T16:20:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBabylon is compatible with IE11. It should work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you have a link to the scene? if it is private_co_ PM me_co_ I just want to see what actually happens.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-17T16:37:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tso besides troubleshoot this error_co_ it looks like Im going to inject Chrome into IE11 right on the page and just overwrite all the webgl stuff...  pretty much going to have the webpage gut IE and replace it with a Chrome brain.  I am under certain specific obligations due to it being a Federal Contract_co_ and IE11 is now one of them_co_ which just doing research on its GL support yeah its there but its experimental and limited.  Im not aloud to make an executable_co_ and everything has to be hosted int he cloud so yeah im sorry IE but im about to perform surgery.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-17T16:51:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_d at least try it in IE11 before dismissing it.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-17T16:53:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you are talking about Chrome Frame_co_ it is no longer supported.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.chromium.org/developers/how-tos/chrome-frame-getting-started_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.chromium.org/developers/how-tos/chrome-frame-getting-started_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-11-18T02:02:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\targ yeah I was and that_t_s a disappointment...._lt_br /_gt__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tOk just a random thought.... what if I turn all of the functions that chrome has built in to it for webGL and serialize them and then overwrite the other browers methods? is that possible?_lt_br /_gt__lt_br /_gt_\n\tIll try to give IE11 a shot but the thing im worried about is performance point blank and what I have seen outa IE seems lacking.  Also it seems hindered by the same odd error the firefox has with it that chrome skips over without a hickup.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]