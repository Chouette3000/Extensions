[{"Owner":"neoRiley","Date":"2014-01-28T22:55:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I need to parent an object so that I can rotate the child to the proper angle and then move the parent.  Right now_co_ I_t_m creating a new sphere object and assigning a transparency of 0 for the material.  If I simply try to create a new Mesh() object without adding geometry/material_co_ the engine/renderer kicks back an error._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What_t_ the proper method for doing this?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your help_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Merfoo","Date":"2014-01-28T23:03:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can just set the .isVisible property to false if you dont want to render it. Meaning you would_t_t have to give the mesh a material._lt_/p_gt__lt_p_gt_mesh.isVisible _eq_ false_sm__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-28T23:48:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If by creating an empty mesh_co_ you mean _qt_create a mesh without geometry (vertices)_qt__co_ I_t_m not sure it_t_s possible and you may be interested by the following discussion_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2796-discussion-about-nodes-meshes-instances/_qt__gt_http_dd_//www.html5gamedevs.com/topic/2796-discussion-about-nodes-meshes-instances/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your problem seems to be _qt_how to rotate a mesh to the proper angle and then move it_qt_ and _qt_parenting it to an empty mesh_qt_ could be a solution. You can try to set a pivot matrix. _lt_a href_eq__qt_http_dd_//jsfiddle.net/gwenaelhagenmuller/24mBJ/1/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/gwenaelhagenmuller/24mBJ/1/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neoRiley","Date":"2014-01-29T17:37:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_22118_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_3418_qt_ data-ipsquote-username_eq__qt_Merfoo_qt_ data-cite_eq__qt_Merfoo_qt_ data-ipsquote-timestamp_eq__qt_1390950237_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_You can just set the .isVisible property to false if you dont want to render it. Meaning you would_t_t have to give the mesh a material._lt_/p_gt__lt_p_gt_mesh.isVisible _eq_ false_sm__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That worked perfectly_co_ thanks Merfoo_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had looked at that initially_co_ and I should have just tried it_co_ but my assumption was that if you set the parent visibility to false_co_ then the children would also be invisible.  Maybe setEnabled() would give you that result?  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not to create a sub topic_co_ but I wonder what _qt_visiblity_dd_number_qt_ deals with _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neoRiley","Date":"2014-01-29T17:48:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_22128_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_3418_qt_ data-ipsquote-username_eq__qt_gwenael_qt_ data-cite_eq__qt_gwenael_qt_ data-ipsquote-timestamp_eq__qt_1390952909_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_If by creating an empty mesh_co_ you mean _qt_create a mesh without geometry (vertices)_qt__co_ I_t_m not sure it_t_s possible and you may be interested by the following discussion_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2796-discussion-about-nodes-meshes-instances/_qt__gt_http_dd_//www.html5gamedevs.com/topic/2796-discussion-about-nodes-meshes-instances/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your problem seems to be _qt_how to rotate a mesh to the proper angle and then move it_qt_ and _qt_parenting it to an empty mesh_qt_ could be a solution. You can try to set a pivot matrix. _lt_a href_eq__qt_http_dd_//jsfiddle.net/gwenaelhagenmuller/24mBJ/1/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/gwenaelhagenmuller/24mBJ/1/_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for all your help Gwenael - the pivot matrix would make sense_co_ but in a scene with multiple items that have to rotate relative to a common pivot/parent_co_ what would be the best approach?  If I used a pivot matrix approach_co_ i would have to rotate all objects that were _qt_parented_qt_ or using the same matrix.  If I just use a parent mesh and add those objects to the parent_co_ all I have to do is rotated/translate the parent.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Behind the scenes_co_ I realize the engine is traversing the child nodes and essentially doing the work for me_co_ but from a code standpoint_co_ it_t_s much easier to read and understand for everyone involved I would think_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_maybe I_t_m missing a feature that makes this not true?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-29T20:50:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For sure it_t_s easier to have a parent if you have multiple meshes that have to rotate relative to a common pivot/parent_co_ nevertheless you can add a class to handle this differently._lt_/p_gt__lt_p_gt_Here_t_s a start for this class (BABYLON.CommonPivot)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/gwenaelhagenmuller/2fA92/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/gwenaelhagenmuller/2fA92/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neoRiley","Date":"2014-01-29T22:54:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_22262_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_3418_qt_ data-ipsquote-username_eq__qt_gwenael_qt_ data-cite_eq__qt_gwenael_qt_ data-ipsquote-timestamp_eq__qt_1391028610_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_For sure it_t_s easier to have a parent if you have multiple meshes that have to rotate relative to a common pivot/parent_co_ nevertheless you can add a class to handle this differently._lt_/p_gt__lt_p_gt_Here_t_s a start for this class (BABYLON.CommonPivot)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/gwenaelhagenmuller/2fA92/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/gwenaelhagenmuller/2fA92/_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I really like that - especially if it_t_s more streamline than having an empty mesh as a parent/pivot. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would love to see this concept flushed out.  How would this concept work if you wanted the commonPivot parented?  It_t_d be nice too of you could just pass the mesh and have it store the matrix of the child node based on where it_t_s current matrix._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neoRiley","Date":"2014-01-29T22:58:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You know though_co_ in saying that out loud_co_ I think it would make more sense to streamline BABYLON.Mesh or BABYLON.Node to act like this new pivot since all the things I listed above are already supported.  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-29T23:12:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s pretty much what I suggest in the discussion I refer to in my first answer. Transform node would be nodes that can be parent of meshes_co_ cameras_co_ lights and other transform nodes. Actually only this kind of nodes (transform) should be used for parenting. Meshes wouldn_t_t store transforms info_co_ they would only store geometry. Once I have time I will work on it_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neoRiley","Date":"2014-01-31T16:00:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ now we_t_re full circle _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Thanks Gwenael!  I appreciate your time and help - John_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-31T17:45:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Beware here_co_ I would like to keep babylon.js easy to use and if for creating a mesh you need to create a node and call setGeometry this will be too much for beginner. I do not want to reproduce 3js model (excellent though but I prefer keeping things simple)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neoRiley","Date":"2014-01-31T19:49:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I couldn_t_t agree with you _lt_strong_gt_more_lt_/strong_gt_ Deltakosh - In other engines ranging from PV3D_co_ to Unity3D to Three.js_co_ the paradigm has been to create a new Object3D/GameObject for parenting/pivot changes/rotating local vs world etc.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think that using a new Mesh object and making that work would be the easiest entry point for people coming in_co_ especially if they have experience with other 3D API_t_s.  Using setPivotMatrix_co_ though I understand the concept and can appreciate it_co_ is very high level in that it assumes the user knows how to deal with matrix values by hand - and most of us don_t_t_co_ that_t_s why we lean on a 3D api._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-02-01T15:38:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m really opened to all kind of change but we just have to keep in mind_dd_ SIMPLICITY_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Feldspar","Date":"2014-02-06T09:42:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Having transformation-typed nodes would indeed be much cleaner than parenting with non-visible meshes. But I think you can also leave transformation info within the Mesh Node. I feel like it would be simpler if every Node in the scene tree had a transformation Matrix_co_ then you just have to recursively multiply them to find the world matrix_co_ regardless of the type of the parent._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ looking forward to the pull request !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-02-18T14:40:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m back on BabylonJS _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ unfortunately not for long for the moment. I_t_ll keep in mind SIMPLICITY for all stuff I could do for BabylonJS since I think it_t_s a good approach. I_t_ll try to always have for a function a default mode and an expert mode (more parameters or override of a default value...)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]