[{"Owner":"JCPalmer","Date":"2014-06-16T18:34:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_This is coming from couple other topics_co_ one where Mira had a problem with the arbitrary names of MultiMaterials colliding when load separate .babylon files_co_ and the action thread where I say I have my own version of the python Blender script._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the collision thread I wrote suedo code which added a timestamp to the name to make it unique.  This is the simplest_co_ but not the best_co_ since the bug or neccessity to keep all the materials with unique names is unchanged.  I did not want layout some complicated change._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my own version_co_ I implemented a namespace approach_co_ which turned out easier than I thought.  Upshot is I got the latest io_export_babylon.py from github and made the changes.  Do not have any multimaterials to test_co_ maybe Mira can help.  I have attached it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How it works is say you have a file_dd_  /dir/dir/scene1.blend_co_ or c_dd_\\dir\\dir\\scene1.blend.  If you also had a material _t_red_t__co_ it would be put in the .babylon file as _t_scene1.red_t_.  If there was also a _t_red_t_ in a scene2.blend_co_ it would end up as _t_scene2.red_t_. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did lie a little just above_co_ technically the namespace is the base file of the .babylon file not .blend file_co_ but by default they are the same.  Enjoy!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Whoops_co_ guess you are not allowed to upload a .py.  What now?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-16T18:46:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Extension renamed to .txt. Change back to .py for use._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_1989_qt__gt_io_export_babylon.txt_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-06-16T20:02:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can make a pull request if you consider this version production stable _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-17T01:25:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jeff_co_ hope you can work with DK on this through github. It is a useful fix and obviously necessary if you use the Import of additional meshes to a scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I try to avoid Multimaterials if possible through using a _qt_texture atlas_qt_  - but that can be a lot more work._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-06-17T06:02:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Jeff_co_ I think like the guys above me _dd_ could you make a pull request in Github ? This could be very useful and time-saving for me._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-17T10:23:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Does any one have a blend file with multi-materials or know how to make a multi-material in blender?  Seems obvious that should be tested_co_ since that actually prompted the fix.  I am pretty confident it should work_co_ but probably no rush since you have to being using multiple Blend file to see the problem._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-17T15:07:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here are a couple of simple files Jeff. Gem has one object with 3 materials (shades of blue). Dodo has one object with 7 materials (bold basic colours). Both files have a light and a camera - so it should not matter which is loaded first._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/multi.zip_qt_ rel_eq__qt_external nofollow_qt__gt_Blend Files_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_They are in a zip file at my dropbox - which seems to be slow this morning _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-17T18:28:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ got this to work.  Was a little tricky either missing having the multimaterial namespace not mentioned in the mesh_co_ or getting the name space duplicated in the multimaterial def itself.  We are now ready to go.  Assume I do not know what this _qt_pull request is_qt_.  tell me more.  I guess I need a github account?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-17T19:19:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok have an account_co_ never bothered with this stuff before_co_ as I did not start out wanting to send anything back and was just grabbing the zip file.  Found the Github docs on forking and pull requests.  Will get there._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-17T19:57:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And the monkey pulls the lever!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-06-17T20:11:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Welcome on the wonderful world of Github _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Congrats for your first pull request_co_ I just saw it has been accepted. And thank you for your work !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-17T20:21:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_And the monkey pulls the lever!_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That made me laugh. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Something about it appeals to my sense of humour._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I see it is up - useful addition Jeff._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-17T20:24:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It is a quote from the movie _qt_Lost In Space_qt__co_ which fairly unremarkable other than Heather Graham was in in._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-18T04:47:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jeff_co_ I tested it with the two files I posted - worked well. I also tested it by merging the two blend files and exporting as a .babylon file - also seemed to work well._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_From the merged file_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__qt_multiMaterials_qt__dd_[{_qt_name_qt__dd__qt_gem1.Multimaterial#0_qt__co__qt_id_qt__dd__qt_gem1.Multimaterial#0_qt__co__qt_materials_qt__dd_[_qt_gem1.top_qt__co__qt_gem1.mid_qt__co__qt_gem1.bottom_qt_]}_co_{_qt_name_qt__dd__qt_gem1.Multimaterial#1_qt__co__qt_id_qt__dd__qt_gem1.Multimaterial#1_qt__co__qt_materials_qt__dd_[_qt_gem1.black_qt__co__qt_gem1.blue_qt__co__qt_gem1.red_qt__co__qt_gem1.green_qt__co__qt_gem1.purple_qt__co__qt_gem1.yellow_qt__co__qt_gem1.orange_qt_]}]_lt_/pre_gt__lt_p_gt_And_co_ even if I then tried to import a mesh from one of the original single files (heaven knows why)  I would get_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__qt_multiMaterials_qt__dd_[{_qt_name_qt__dd__qt_gem.Multimaterial#0_qt__co__qt_id_qt__dd__qt_gem.Multimaterial#0_qt__co__qt_materials_qt__dd_[_qt_gem.top_qt__co__qt_gem.mid_qt__co__qt_gem.bottom_qt_]}]_lt_/pre_gt__lt_p_gt_a different Multimaterial._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-18T23:35:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Gryff_co__lt_/p_gt__lt_p_gt_Good to know that I did not put up the wrong version of the file or something.  I appreciated the files I could not create myself.  This exercise brought to light that I have overweighted Blender export &amp_sm_ the Babylon side of object creation over actually knowing how to make objects. For now_co_ I have changed_co_ and have started the character animation tutorial _lt_a href_eq__qt_http_dd_//wiki.blender.org/uploads/6/66/Introduction_to_Character_Animation_19_Sept_2006.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//wiki.blender.org/uploads/6/66/Introduction_to_Character_Animation_19_Sept_2006.pdf_lt_/a_gt_ .  It covers a lot more than animation.  It is old_co_ but much more intense than the Gus the gingerbread man_co_ which I did not fully finish._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is a lot of ground to cover to do development_co_ a little round robin is probably the only way to get up to speed on it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-19T02:49:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_For now_co_ I have changed_co_ and have started the character animation tutorial _lt_a href_eq__qt_http_dd_//wiki.blender.org/uploads/6/66/Introduction_to_Character_Animation_19_Sept_2006.pdf_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//wiki.blender....9_Sept_2006.pdf_lt_/a_gt_ ._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Actually Jeff it is very very old - Blender 2.42. First version I ever tried was 2.48. A lot has changed both with the Interface and _qt__lt_em_gt_under the hood_lt_/em_gt__qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is a very nice series of 15 YouTube videos by BornCG (aka cgboorman) that assumes you know nothing and takes you through Blender._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_wKFRGVzrWgQ&amp_sm_list_eq_PLda3VoSoc_TSAKxPWs6N44UWiGmkp3FNA&amp_sm_index_eq_1_qt_ rel_eq__qt_external nofollow_qt__gt_Blender 2.6 Basics _lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I can give you more links if you want to useful videos.. And if you need something just ask - and if I have the time_co_ will see what I can do._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-09T19:03:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am revisiting the scene of the crime of my first PR.  Tower of Babel development was already underway_co_ but this was just a patch to fix a problem with loading 2 .babylon files that each had a material of the same name._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I prefixed the name of the babylon file name to the name of the material_co_ so if you had 2 blend files with the material _t_red_t__co_ the same names would not cause only the first to be loaded.  That is what BJS would do at the time.  I am not sure now that first wins with all the changes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am implementing the last change for the next release.  Here I wanted to give someone the option to share a material across .blend files_co_ by optionally changing the name space (prefix).  See blue in panel (ignore red_co_ not in official release).  Could be useful_co_ especially materials with textures.  For TOB_co_ was just going to put in check to implement_dd__lt_/p_gt__lt_p_gt__lt_strong_gt_      if(!scene.getMaterialByName(name) ){ new Material(name_co_ )... }_lt_/strong_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For .babylon_co_ think the same logic should also be put in for both Material &amp_sm_ multi-material.  Ok to add checking to respective parse() methods?_lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-8492-0-24821000-1449687285.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-8492-0-24821000-1449687285.png_qt_ data-fileid_eq__qt_5783_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-24821000-1449687285.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-09T19:45:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_forget the MultiMaterials part.  Just an array of materials._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-10T00:32:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is a smart idea. If we do not find the requested material_co_ we can create one for sure. But this material will be nothing different than the default one correct?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-10T17:04:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_DK_co_ by your answer_co_ I think I need to explain better._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s say you have 3 Make Human characters_dd_ Adam_co_ Eve_co_ &amp_sm_ Steve_co_ and you want each of them in their own Blend file from a work flow point of view.  Make Humans can have common meshes for teeth_co_ tongue_co_ eyes_co_ eye browses_co_ eye lashes_co_ hair_co_ &amp_sm_ shoes.  You probably do not need teeth &amp_sm_ tongue if they are more like _t_stand-in_t_ characters_co_ with no lines_co_ but they dramatically increase the realism in speech morphing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The materials for those and therefore textures could be shared_co_ if_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_they all reference the material by same name_co_ eg _t_shared.teeth_t__co_ instead of _t_Adam.teeth_t__co_ _t_Eve.teeth_t__co_ or _t_Steve.teeth_t_ (the default is _t_Same as Filename_t_) and_co__lt_/li_gt__lt_li_gt_It is checked first whether the material can already be found &amp_sm_ only add if not.  Things can loaded in any order that way._lt_/li_gt__lt_/ul_gt__lt_p_gt_There is no real advantage to keeping the humans in the same blend file for instancing &amp_sm_ cloning_co_ since teeth_co_ tongue_co_ eye browses_co_ &amp_sm_ eye lashes all have shape keys.  Changing of a meshes vertices is impossible with clones &amp_sm_ instances.   It is also far easier to deal with these meshes if they &amp_sm_ their keys were merged with the body_co_ prior to export (MHX2 properties tab has a button which does this)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any clearer?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-10T19:34:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep but what is the impact on bjs then?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-10T19:38:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Make sure the file loader route only creates a material of the same name once_co_ by checking by name or ID that it is not already in the scene.  I do not see that being done in Material.Parse()_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-10T19:52:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It should so I_t_m completely for this _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-12-10T20:17:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It will then be on the PR with io_export_babylon.py._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]