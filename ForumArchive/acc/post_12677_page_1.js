[{"Owner":"josemayi27","Date":"2015-02-22T18:36:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello All_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am working in a pretty big_co_ closed environment and was looking around for ways to optimize performance. I am using babylon 2.0 and saw a few things while looking around documentation which might help me such as LOD_co_ SceneOptimizer_co_ octrees and shadow maps. All of these optimization techniques are great_co_ but it looks like babylon only does frustum culling (at least by default) because whenever an object is caught in the camera_t_s field of view the frame rate drops considerably (from 50-60 to 5-15) even if the object is behind another object and can_t_t be seen. If occlusion culling is not possible with babylon at the moment_co_ could anyone throw other optimization techniques my way? Right now_co_ I haven_t_t really optimized the scene at all_co_ but am not sure whether the things I mentioned above will be enough to give me at least 40 frames when looking in the direction of a lot of _qt_hidden_qt_ objects since they will still be rendered. Any help would be greatly appreciated._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-02-24T13:17:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I love trying to find ways to optimize big scenes with simple algorithms as add-ins _eq_P_lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_A possible idea (never tried) _dd__lt_/div_gt__lt_div_gt_For each object in the field of view_co_ launch a ray starting from the camera to each bounding box point of the object you are testing._lt_/div_gt__lt_div_gt_If all rays intersect another objects_co_ it means that the object is potentially hidden._lt_/div_gt__lt_div_gt_Of course_co_ this method is should be forbidden for big objects._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_What do you think ?_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-02-24T14:01:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Optimization and performance has been discussed in recent threads_co_ for example this one_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12608-voxel-rendering-without-too-many-draw-calls/_qt__gt_http_dd_//www.html5gamedevs.com/topic/12608-voxel-rendering-without-too-many-draw-calls/_lt_/a_gt__lt_/p_gt__lt_p_gt_You can try to dig in these if you feel up for it!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Occlusion culling is not part of BabylonJS AFAIK_co_ and yes that would be a great addition! Although even without it you can still make pretty complex scenes and maintain decent framerate. What kind of scene are you basing your observations on? Can you maybe reproduce them in a playground (_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/_lt_/a_gt_) so we can maybe have a look at it? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"josemayi27","Date":"2015-02-24T14:39:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_73175_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12677_qt_ data-ipsquote-username_eq__qt_Luaacro_qt_ data-cite_eq__qt_Luaacro_qt_ data-ipsquote-timestamp_eq__qt_1424783873_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I love trying to find ways to optimize big scenes with simple algorithms as add-ins _eq_P_lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_A possible idea (never tried) _dd__lt_/div_gt__lt_div_gt_For each object in the field of view_co_ launch a ray starting from the camera to each bounding box point of the object you are testing._lt_/div_gt__lt_div_gt_If all rays intersect another objects_co_ it means that the object is potentially hidden._lt_/div_gt__lt_div_gt_Of course_co_ this method is should be forbidden for big objects._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_What do you think ?_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe something to explore_co_ but wouldn_t_t that be an expensive process? especially with bigger scenes?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_73185_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12677_qt_ data-ipsquote-username_eq__qt_jahow_qt_ data-cite_eq__qt_jahow_qt_ data-ipsquote-timestamp_eq__qt_1424786461_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Optimization and performance has been discussed in recent threads_co_ for example this one_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/12608-voxel-rendering-without-too-many-draw-calls/_qt__gt_http_dd_//www.html5gamedevs.com/topic/12608-voxel-rendering-without-too-many-draw-calls/_lt_/a_gt__lt_/p_gt__lt_p_gt_You can try to dig in these if you feel up for it!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Occlusion culling is not part of BabylonJS AFAIK_co_ and yes that would be a great addition! Although even without it you can still make pretty complex scenes and maintain decent framerate. What kind of scene are you basing your observations on? Can you maybe reproduce them in a playground (_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/_lt_/a_gt_) so we can maybe have a look at it?_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the info_co_ I_t_ll take a look! One of the environments I have in which I notice low framerate is in an airport environment. However_co_ I haven_t_t really done any optimizations (I_t_m sure after I optimize the scene_co_ framerate will increase big time). I guess I was interested to see something like Occlusion Culling being implemented in Babylon. Unfortunately I_t_m not at liberty to post the scene (otherwise I would have done so)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2015-02-24T15:13:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes it_t_s expansive since it is done using the CPU side _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Occlusion culling is done in the GPU side using the driver_t_s available functions (have to see if WebGL supports it_co_ I don_t_t know but I think it doesn_t_t or it would have been implemented by Deltakosh ^^)_lt_/p_gt__lt_p_gt_This is why I suggest to test only objects in your field of view_co_ you can add an interval in your tests like every seconds._lt_/p_gt__lt_p_gt_The complexity is proportional to the number of objects you have in your field of view objects list. A bounding box has always 8 points. Are you sure to use instances for repeated objects also ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2015-02-24T19:45:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I was not able to find a good way to do this. We are running some pretty complex scenes. What I recommend is playing off your octree_co_ for subdividing the scene_co_ then breaking things into rendering groups using something like the tag system. For example_co_ we are going to tag some models as _qt_inside_qt_ so based on our state machine_co_ we can include or exclude those objects. We_t_re also going to be setting up a max view range per object. We_t_ve just had to think up work-arounds where we can to keep the scene as simple as physically possible._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"exc_html5","Date":"2016-05-24T00:27:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys! Were embarking on a similar large terrain type project and just wanted to follow up on this thread to see if y_t_all had any further progress. In the current version of Babylon_co_ is it still frustrum culling only? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf we are doing a canyon-like terrain on a large map (as a single mesh)_co_ it sounds like even if parts of the far canyon are not visible to the camera (far pieces of the mesh hidden behind part of the foreground canyon geo) it_t_s still taking the performance hit of drawing whatever is behind it? So then at that point the only option would be to use a dynamic octree hightmap terrain generated in BJS? Otherwise we_t_d have to do some kind of tagging system like above and break the mesh up into many pieces?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-24T02:40:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYep breaking in pieces will work_dd_ you can  subdivide your big mesh with smaller submeshes so the engine can remove them from active submeshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOther great option is the one you mentioned_dd_ dynamic octree terrain.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]