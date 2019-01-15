[{"Owner":"grire974","Date":"2016-08-03T16:10:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I_t_ve come across a bug with how SceneLoader handles positioning.  Not sure yet whether this is BJS 2.4_co_ or the FBXExporter code that is being used to generate a .babylon file from the FBX that I exported from Blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I load this file_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//drive.google.com/open?id_eq_0BzfS-gwTfPBtMFp1bzg5N1BLOWM_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/open?id_eq_0BzfS-gwTfPBtMFp1bzg5N1BLOWM_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tusing BABYLON.SceneLoader.load()\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t get the correct BoundingInfo for the lower equalizer bars (38_EQBars001)_sm_ it provides the same bounding info as the upper equalizer bars (37_EQBars002).\n_lt_/p_gt_\n\n_lt_p_gt_\n\te.g. \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_for (i _eq_ 0_sm_ i &lt_sm_ myScene.meshes.length_sm_ i++){\n        myScene.meshes[i].refreshBoundingInfo()_sm_\n        console.log(_qt_found mesh with min_dd_ id _eq_ _qt_+myScene.meshes[i].id+_qt__co_ _qt_+myScene.meshes[i].getBoundingInfo().minimum.y+_qt__co_ and max_qt_+myScene.meshes[i].getBoundingInfo().maximum.y)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\treturns the same min and max Y values for both equalizer meshes_sm_ even though they display correctly (e.g. not the same positions).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you analyze the JSON of the .babylon file_sm_ you_t_ll notice the position values for both meshes are almost identical.  What is different is the rotation quaternion for both meshes - which makes sense because to create the 2nd set of equalizer bars_co_ I cloned the first set and then rotated them into position_sm_ Thus my theory at this stage is that either the FBXConverter or BJS 2.4 aren_t_t taking this into consideration.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also read this forum_dd_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/2791-getboundinginfo-correct-values/?do_eq_embed&amp_sm_embedComment_eq_18162&amp_sm_embedDo_eq_findComment#comment-18162_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tHowever_co_ using setTimeout in conjunction with refreshBoundingInfo() doesn_t_t seem to have any positive effect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe downside of this all is that I can_t_t tangentially position this model next to anything else as I don_t_t have correct bounding info. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny help would be much appreciated.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-04T00:14:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBoundingInfo are refreshed by rendering a frame. If you want an up to date value_co_ just call mesh.computeWorldMatrix(true) before _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"grire974","Date":"2016-08-04T02:26:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi - Thanks for the reply (sorry to post in the bugs forum if this doesn_t_t appear to be a bug).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill having the same issue_sm_ I_t_d create a sandbox to illustrate this - however I don_t_t see a way to add your own .babylon files to the sandbox..?  Any other thoughts?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-04T17:48:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor the playground just save your file in a dropbox account like here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10OJSG%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10OJSG#9_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"grire974","Date":"2016-08-09T02:45:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the pointer.. In trying to demonstrate my problem - I think I figured it out_sm_ I was rotating my mesh 90 degrees around the x axis in order to bring it into line_sm_ boundingInfo seems to reflect the mesh_t_s original bounds - rather than those after it has been rotated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the playground I created_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#27IOZS_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#27IOZS_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe goal here is to dynamically load a mesh/babylon file (e.g. potentially any mesh from an unknown source)_sm_ and then position said mesh such that it is tangental to the ground mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI ran the for loop again after the rotation was made to see if that would update the boundingInfo - however it doesn_t_t seem to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps not a bug - still a little confusing I found_sm_ spent quite a lot of time scratching my head on this one.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-09T20:19:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI do not see what is wrong with your PG. seems like the mesh is correctly positioned?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"grire974","Date":"2016-08-09T23:59:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is correctly positioned now...  However I_t_m positioning the height of the model based off of the min and max Z values returned from the boundingInfo.  My intuition was expecting to use the Y values - but eventually guessed that I had to use the Z values as the model had been rotated 90 degrees around the x axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe final question I guess is - should boundingInfo automatically represent all translations such as position and rotation (haven_t_t tested for positional changes yet) made to a given mesh_sm_ or is it the developer_t_s responsibility to keep track of their changes and apply further calculations to boundingInfo in order to get updated values.  Obviously I_t_d prefer the former - but thought I_t_d raise the question none the less...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-10T14:51:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk gotcha!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBounding box is axis aligned. But you can get the world values (meaning the rotated values) from bbox.minimumWorld and .maximumWorld\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"grire974","Date":"2016-08-11T02:36:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh right - well that makes sense.  I_t_ve updated my PG to use minimumWorld_sm_ however its still showing the pre-rotation values for me.  Any ideas as to what I might be doing wrong? Here_t_s my updated PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#27IOZS%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#27IOZS#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-11T17:16:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDon_t_t forget to call mesh.computeWorldMatrix(true) if you want your rotation to be applied immediatly (by default it is applied during rendering phase)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"grire974","Date":"2016-08-11T21:23:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMany thanks Delta - as always!  Seems I was missing the fact that I had to computeWorldMatrix for my parent node and the child meshes as well.  For those interested_sm_ heres the final PG in all of its tangental glory_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#27IOZS%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#27IOZS#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]