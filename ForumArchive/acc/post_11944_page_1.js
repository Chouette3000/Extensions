[{"Owner":"amorgan","Date":"2015-01-23T16:39:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have a generic question_co_ does Babylone separate out updating Meshes versus drawing/rendering them?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let me elaborate_co_ for example_co_ say I have an animation that is supposed to run at 60fps and has 3 keys that are manipulating position.x with a linear transformation at frames 0_co_ 30_co_ and 60. So_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_keys _eq_ [{frame_dd_ 0_co_ value_dd_ 0}_co_{frame_dd_ 30_co_ value_dd_ 10}_co_{frame_dd_ 60_co_ value_dd_ 0}]_sm__lt_/pre_gt__lt_p_gt_What is actually happening if my computer can only do 30 fps? Does the animation interpolate and skip half of the frames_co_ or does the animation slow down to half the speed?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m working on creating a logic loop for a game and trying to understand how to separate it out so that a slower fps doesn_t_t slow down the gameplay_co_ but just the refresh rate of the render. I am thinking I need to have a logicLoop_co_ updateMeshesLoop and then the renderLoop (which comes from Babylon). Therefore I am trying to understand what Babylon does and how I can work with it to achieve this_co_ using Babylon Animations_co_ moveWithCollisions_co_ etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This might be a naive question_co_ since if the fps is slow_co_ then I would imagine other calculations are also behing held up. I_t_m brainstorming on how to achieve consistency._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-23T16:59:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Animation are scaled to run at required speed (60fps per default). So if you are running at 30fps_co_ animation will still run at 60fps_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amorgan","Date":"2015-01-23T17:39:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So it is essentially skipping frames then in that scenario_co_ in regards to that animation? Since the movement is happening at 60fps_co_ but the scene is only being rendered at 30fps._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m also trying to understand what happens in general when a computer is running at 30fps. I understand that it is because that is as fast as the GPU can handle the scene_co_ but more in context of babylon. For example if I am calling moveWithCollisions in the registerBeforeRender loop_co_ but am running at 30fps_co_ then the moveWithCollisions then would also? That is more of what I_t_m also trying to understand. For consistency I feel like I will need my own loop to control that_co_ but if the renderLoop is actually taking more time to execute_co_ for example at 30 fps or every 33.3333 milliseconds_co_ then I would not be able to update any faster because it would be blocking? Unless I_t_m not understanding what is being handled by the GPU vs CPU..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit_dd_ On another note_co_ it would be nice to be able to force the renderLoop down to specific fps for debugging purposes_co_ and simulate a slower computer._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-23T18:09:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The main problem actually is that you only have one thread in JS. but in you case you can keep working with the registerBeforeRender function but you have to scale the distance with scene.getAnimationRatio (will return 1 is rendering is running at 60fps_co_ 2 is rendering is at 30fps and so on and so on)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amorgan","Date":"2015-01-23T18:45:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I did not know scene.getAnimationRatio existed. That will help alot then!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying to create a pattern that is similar to this_dd_ _lt_a href_eq__qt_http_dd_//www.flipcode.com/archives/Main_Loop_with_Fixed_Time_Steps.shtml_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.flipcode.com/archives/Main_Loop_with_Fixed_Time_Steps.shtml_lt_/a_gt_ which is a fixed time step for the game logic loop. Not following this example directly_co_ but making my own flavor. So I_t_m trying to wrap my head around how do this and integrating it into the BJS framework. I recently created a loop that I called timedLoop that recursively calls setTimeout and calculates the actual wait to get the desired wait time. I_t_m in the process of expanding off of that and would like to create a library for use._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I_t_m thinking my logic loop will do everything except manipulate meshes and draw. And then have the registerBeforeRender function manipulate meshes and then scene.render let it render_co_ of course. And use the scene.getAnimationRatio to account for a slower framerate (inside of registerBeforeRender). I will try this scheme and see what problems I run into._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit_dd_ I have noticed that on a slower device_co_ if my game logic loops gets slowed and can_t_t process in the desired time_co_ there is nothing guarding that and it increases to how fast it can be ran. So I might need to have a priority list and discard actions if they can_t_t be handled within that time and stop the logic loop before it reaches the desired time. Or some other way to degrade gracefully_co_ which might be more of an architectural problem than a limitation. Sorry typing out loud._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]