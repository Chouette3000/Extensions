[{"Owner":"jdurrant","Date":"2015-03-14T17:36:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m currently experimenting with babylon.js and have some questions about optimizing shadows. I_t_m playing with a large forest scene_co_ with trees and rocks. I_t_d like the trees to cast shadows on to the rocks and the ground. Here_t_s an example of part of my scene_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-02015300-1426353936.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_03_2015/post-13453-0-02015300-1426353936_thumb.png_qt_ data-fileid_eq__qt_3875_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-13453-0-02015300-1426353936_thumb.p_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It works_co_ but sometimes renders slowly (low FPS). To try to improve the situation_co_ I_t_ve added fake (rendered) shadows to the ground texture so I could get away with having fewer trees explicitly cast shadows. I also reduced the resolution of my shadowmap to 512 and use the usePoissonSampling option to try to hide the low resolution a bit. useVarianceShadowMap didn_t_t work for me because it changed the color of the ground even when I when I go outside the forest (no shadows should be cast)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there anything more I can do to optimize the performance of these shadows (both casting and receiving)? For example_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1) Is there an option to increase the strength of the Poisson-sampling blur? That way I cold get away with lower-resolution shadowmaps._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2) For static objects (all the objects in my scene)_co_ are the shadows calculated once and applied to the ground texture (_qt_baked_qt_ onto the texture_co_ in blender parlance)_co_ or are they generated de novo for each frame? Is there any way_co_ within babylon.js_co_ to bake the shadows onto the ground texture once so they don_t_t have to be rerendered?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_3) Is there a way to restrict cast shadows to a specific area (for example_co_ only within 10 units of the camera)?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_4) Is there a way to change the color of the shadow? Right now it_t_s pitch black. It would be nice if you could still see the ground where the shadow is cast_co_ albeit drawn darker._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for all your help with this. I_t_ve really enjoyed using babylon.js so far!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-14T17:55:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_1. Not yet but shader could be easily updated_lt_/p_gt__lt_p_gt_2. This is your best option_dd_ use shadowGenerator.getShadowMap().refreshRate _eq_ 0. In this case the shadow map will be computed just once (beware_co_ you have to ensure that all meshes are ready to render before creating the shadow Generator because_co_ you know_co_ it will be rendered just once _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt__lt_p_gt_3. Not directly but you can control the refresh rate again here. You can also control which meshes are inside the shadowMap.renderList_lt_/p_gt__lt_p_gt_4. Shadows are not drawn actually. They block the lighting. So to see the ground_co_ just add some emissiveColor to the material of the ground_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-03-14T18:13:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do not know_dd_ _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_shadowGenerator.getShadowMap().refreshRate _eq_ 0._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is for all the subject of the stage_co_ but for objects that this moves (objet animated)_co_ how to have a default refleshRate for dynamic object and RefreshRate to 0 for static objects ? This topic interests me greatly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-14T19:29:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You have to set it to 0 if no object is moving. If there is a need for an update_co_ you have to update it manually by setting refreshRate _eq_ 1_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-03-14T22:16:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So I must create 2 shadows generator_co_ 1 for dynamic objects with RefreshRate to 1 and one for static object with a RefreshRate 0._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and why should you use a different light for every shadow generator and not the same light?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2015-03-15T04:19:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So it_t_s impossible to force a update without setting refreshRate? This would be very useful for changing the time of day_co_ and such_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-15T16:47:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_To force just one update set the refreshRate to -1 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-16T03:29:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_75294_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13128_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1426355756_qt__gt__lt_div_gt__lt_div_gt_4. Shadows are not drawn actually. They block the lighting. So to see the ground_co_ just add some emissiveColor to the material of the ground_lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wouldn_t_t be interesting to have a shadow power (or intensity) param?_lt_/p_gt__lt_p_gt_Adding some emissive is not always the right way to go_co_ because that can affect overall rendering aspect when materials and lights are already fine tuned. Other way to change shadow strength is to put some more lights_co_ but for performance reason a strength param could be interesting._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jdurrant","Date":"2015-03-16T05:36:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wonderful solutions all around. Making the ground emissive made the shadows look much more realistic. To improve performance_co_ I ended up having my script check the distances between the camera and all scene objects every 2.5 seconds. I updated shadowGenerator.getShadowMap().renderList periodically to include all the appropriate objects within a given cutoff distance. No need to render the shadows for objects that are far away in my case. I_t_d like to know how to use octrees to speed up those distance calculations_co_ but I_t_ll post that to another question in a second._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For reasons I don_t_t understand_co_ I can_t_t get a good shadow-casting light position that casts shadows on all the objects of my expansive scene. As a fix_co_ I made the shadow-generating light follow the camera. That works well_co_ but it makes using _qt_shadowGenerator.getShadowMap().refreshRate _eq_ 0_qt_ a bad idea.  With _qt_shadowGenerator.getShadowMap().refreshRate _eq_ 0_qt__co_ the regions of my scene that are initially _qt_shadowless_qt_ never get updated with shadows_co_ even if the light continues to follow the camera._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_d appreciate it if anyone could explain the best way to choose the position of the shadow-casting light so as to maximize the area of the scene that is _qt_shadowed._qt_ Thanks. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-16T18:02:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If the light is a directional light_co_ you should consider the position as the position of the camera that will render the shadowmap. With babylon.js v2.1_co_ the light can determine automatically the best projection matrix (and you can use the debugLayer to see the content of the shadowMap)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The best position is_dd_ close enough to get the best precision_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-03-16T18:46:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I like the idea to turn off the shadows at some distance from the camera. a kind of shadowLOD. it might be interesting to add it directly into the engine. What do you think DK? This would be an opportunity for further optimization._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-16T20:21:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I agree.. Just have to think about how to do that wisely _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jdurrant","Date":"2015-03-16T23:19:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s helpful to think of the light position as a camera for the shadowmap. Is there a way to increase the _qt_field of view_qt_/_qt_field of vision_qt_ of the source_co_ so that it covers a greater area?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m happy to share my shadow LOD code if it would be helpful_co_ though I_t_d guess that you folks are 1000x better at writing optimized code than an amateur like me. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ If you_t_re really ambitious_co_ you could also allow for distance-dependent changes to the shadowmap resolution... _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-17T18:14:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually_co_ I_t_m working on a cascaded shadow maps support _dd_0_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-03-17T18:27:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Really!? That_t_s just so coool!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RalphEl","Date":"2015-10-10T20:16:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have question about shadows too...... I_sm_ve separated static and dynamic objects into two shadowGenerators_co_ (Static &amp_sm_ dynamic)  so static shadow refresh rate is 60 and dynamic is 1  _co__co__co__co_ --- &gt_sm_ work pretty good but_co__co__co__co__co_ is there way to merge two shadowgenerators shadowmaps into one in output because second shadowgenerator is overlaying first one_co__co__co__co_ and static shadow becomes darker if dynamic shadow overlaps static .._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This effect is not physicaly realistic  in real world......._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_it should be_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_output color  _eq_ total diffuse * light_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_final color _eq_ output color  + ((shadowgenerator1 shadow map + shadowgenerator2 shadowmap)*shadow intensity)   _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_in my opinion shadowmaps should be rgb color (0_co_0_co_0) _qt_or whatever color u want_qt_ * alpha (shadowintensity)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thanks .._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RalphEl","Date":"2015-10-10T20:33:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_or_lt_/p_gt__lt_p_gt_#ifdef SHADOWS_lt_/p_gt__lt_p_gt_shadows _eq_ vec4(0_co_0_co_0_co_0)_sm__lt_/p_gt__lt_p_gt_ for (var i_eq_0 _sm_ i&lt_sm_shadowmaps.lenght_sm_i++)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_shadows +_eq_ shadowmaps_lt_em_gt_.a_sm_ // _qt_a_eq_1_qt__lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_ finalshadows _eq_ vec4(shadows_co_1.0) *intensity_lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_ _lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_#endif_lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_ _lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_output color _eq_ diffuse + finalshadows ???_lt_/em_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]