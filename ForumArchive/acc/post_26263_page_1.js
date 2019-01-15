[{"Owner":"touslecoq","Date":"2016-11-08T10:11:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn the app I am building_co_ the user can drag in different components that snap together (think lego).  As part of that I am introducing grouping (think Microsoft Powerpoint where you can add individual shapes but then group them and any transformations are then applied as a group).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe approach I have used so far is that when individual components (meshes) are added they have no parent.  When component A is snapped to component B it checks whether either has a parent. If neither has a parent (ie neither is yet part of a group) then it creates an invisible mesh and makes that the parent of both.  If one or more has a parent (ie they are already part of a group) then it combines them under one parent (if both have parents_co_ some logic will be introduced to determine which would be the best parent).  This works to an extent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem I am seeing is that the meshes may have been moved around prior to being grouped.  So their position will have a value.  What seems to be happening when the parent is set is that the component_t_s position is being re-evaluated relative to the parent and so the component jumps to a new position in space.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just wanted to first validate that this is how parenting should work and also get some advice on how to counter it_t_s behaviour.  I don_t_t want the child meshes to move when I set the parent.  However from that point on I do want any further movement or rotation to be done as a group.  I have already amended my onMouseMove function so that if a mesh has a parent_co_ the movement is applied to the parent (and therefore ALL children) rather than just the mesh being moved.  This works a treat.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis little playground illustrates the behaviour I am seeing.  It creates 3 meshes ... m1_co_ m2 and parent and gives them each a new position away from the world origin.  It writes their position and getAbsolutePosition to the console. It then sets m2.parent_eq_parent and again writes their position to the log.  You can see that m2 is initially positioned at (10_co_0_co_0) and parent is at (20_co_0_co_0).  However when m2.parent is set to parent_co_ m2 moves to (30_co_0_co_0).  So its position is now being evaluated relative to its parent (ie 20+10 along the x axis).  This is contrary to how I have seen the behaviour described elsewhere in which it seemed to suggest that position was nullified upon setting a parent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThoughts?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRich\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-11-08T12:29:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/25359-parent-object-rotation-problem/?do_eq_embed&amp_sm_comment_eq_145086&amp_sm_embedComment_eq_145086&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt_\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"touslecoq","Date":"2016-11-08T15:38:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIGNORE - NOW RESOLVED!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks Adam - now I am confused.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI may well be misunderstanding_co_ but from that demo you linked it looks as though every 3 seconds box1 flips between being box2_t_s parent or not.  Each time it does that_co_ box2 moves position.  What I am trying to achieve is to prevent the real world movement of position when the parenting/unparenting happens.  Reading through the parentMesh function it does appear that this is what that function is trying to achieve also - is it actually working?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created a simple version of your demo (without spinning boxes) to illustrate _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#PV7DK%2348_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#PV7DK#48_lt_/a_gt_ and copied the parentMesh function exactly.  If I comment out line 69 (child.parent_eq_parent_sm_) you can see that the result of the parent function is to move box2 to 0_co_0_co_0.  Therefore when line69 is uncommented box 2 seems to disappear because it is put in the same place as box1 (ie displacement from box1 position of 0_co_0_co_0).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRich\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"touslecoq","Date":"2016-11-08T16:28:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIGNORE - NOW RESOLVED\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually to my first para - I see what it is doing now.  it moves when it the parent is set_co_ because the parent is rotating.  If I stop the child from rotating its much clearer what is happening.  Still not sure what is happening in my version then and why setting the parent still changes its real world position.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"touslecoq","Date":"2016-11-08T17:12:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRight I think there was a glitch in my playground (I may have hit back button when testing it) as I have pasted into a new version and it DOES seem to work now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo .. no spinning boxes just 2 boxes that parents/unparent every 3 seconds and you can see there is no relative movement.  It prints the location to log just before and after parenting and you can see how the chid mesh_t_s position does change to counteract the action of parenting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2ATWYQ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2ATWYQ#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks Adam _dd_).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]