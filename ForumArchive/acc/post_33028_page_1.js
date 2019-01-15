[{"Owner":"Ridge Batty","Date":"2017-09-21T16:23:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tto my great disappointment - yes_co_ another one of those - it looks like parented meshes don_t_t work with physics engine. Is there any workaround? I think it_t_s impossible for me to unroll all parenting in the project_co_ it would break animations and god knows what else...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW it looks like _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ is currently working on similar issues (poor physics support). thumbs up to you for all the great work _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-21T16:26:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ to see if he can help you\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut in the meantime_co_ what are you trying to do with parented meshes? Do you want to build joints? (They are supported) or do you want to create a compound object? (Also supported)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-21T16:28:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI just want things to bump into each other_co_ but the physics only detects the root mesh correctly. Even if I add impostors to children_co_ they are not positioned/rotated correctly\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-21T16:30:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOr do I need to parent the impostors somehow?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-21T16:46:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNope in physics world you need to use joints\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-21T16:51:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk_co_ so if I have a table mesh and  it has three child meshes (chairs around the table) I need to make joints to make them position correctly in relation to parent (table)?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-21T16:52:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  There is confusion here.  Although joints can be used to place mesh positionally-relative-to each other in what seems to be a compound structure_co_ compounding via parenting is also honored IF it is done correctly (I think).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I remember correctly_co_ the ORDER of impostoring is important.  Try setting impostors on all the CHILD mesh first_co_ and lastly... impostor the parent.  Try some tests with that_co_ RB_co_ if you would.  Report findings if you would be so kind.  thx\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-21T16:59:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes Wingnut_co_ that_t_s exactly what I did! BJS even warns you if you don_t_t add the child meshes first._lt_br /_gt_\n\tBut I can only bump correctly into root meshes (which have no parent). The child mesh impostors are there_co_ you can bump into _qt_air_qt_ too._lt_br /_gt_\n\tI suspect their rotation and position is not inherited correctly.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-21T17:04:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhh_co_ ok_co_ yeah_co_ we have seen this before.  Impostors out in space_co_ with no mesh near them.  Have you tried doing the parenting AFTER all soon-to-be-children... have their impostors installed?  Parenting after impostoring.  *shrug*  (this is the last of my ideas)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ when the chairs and table are parented together_co_ and then the parent is impostored_co_ the impostor MIGHT be the extend-sum of all parts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn other words_co_ it might become one big box impostor_co_ not irregularly shaped whatsoever.  This giant box impostor _qt_encompasses_qt_ itself and all the child parts.  It might be one big box.  I think it is.  I dunno if that matters.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHelicopter boy... who was that?  Search forum for _t_helicopter_t_... find that forum user.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I think he had his helicopter tail-boom... able to take hits... so he must have figured out how to do an irregular compound.  But... he might have _qt_jointed_qt_ all the parts together_co_ like Deltakosh suggests.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust to add MORE hell_co_ I wonder how child.bakeCurrentTransformIntoVertices() affects the impostor placements.  Generally speaking_co_ a bake... leaves the mesh alone_co_ but _qt_resets_qt_ its _lt_em_gt_origin_lt_/em_gt_ .rotation to 0_co_0_co_0_co_ its .position to 0_co_0_co_0_co_ and its .scaling to 1_co_1_co_1.  Yuh_co_ yuh_co_ yuh_co_ we_t_re chasing geese_co_ now.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSee _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/29635-solvedphysics-not-working/?do_eq_findComment&amp_sm_comment_eq_170617_qt_ rel_eq__qt__qt__gt_this post_lt_/a_gt_ by _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__co_ physics god?  _qt_ this is happening due to a new way to calculate the extend size of the object. So far it worked correctly_co_ the problem here is the rotation (that should be supported_co_ of course). _qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat thread was about an impostor in mid-air_co_ with no mesh nearby (same issue as Ridge Batty). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRotation_co_ says Raanan.  So_co_ if your children have been rotated at all... then try child.bakeCurrentTransformIntoVertices() immediately after setting the child_t_s rotation.  Bake them before parenting_co_ or after parenting_co_ try it all.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-21T17:53:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDeltakosh and Raanan (and others) are probably thinking _qt_Wingnut_co_ you are SUCH an idiot_qt_... about now.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s some fancy boundingBox.extends work that happens in the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/Plugins/babylon.oimoJSPlugin.ts#L77_qt_ rel_eq__qt_external nofollow_qt__gt_physicsPlugins_lt_/a_gt_ and physicsEngine-class objects.  Kind of scary for an old geezer like me.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-21T19:43:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo_co_ I have to give up. It simply takes too much time and I still have no idea what_t_s the root cause of the problem. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI guess no one has made a working FPS game using BJS? All the examples I_t_ve found so far are lacking in either physics or accuracy department_co_ and I can see why that is the case.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your efforts Wingnut_co_ I tried everything you suggested and more! I made some headway_co_ but there is something going on which requires more resources than my team currently has. I have to settle with some kind of hack_co_ I just don_t_t know what it is yet _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-21T21:23:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFuther development_co_ I thought about trying Oimo.js but it doesn_t_t seem to work at all_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/Screenshot_4.png.3a62867d1145c7eeae99aad1c0dcf267.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14938_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/Screenshot_4.png.3a62867d1145c7eeae99aad1c0dcf267.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screenshot_4.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-09-22T05:39:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_189485_qt_ data-ipsquote-contentid_eq__qt_33028_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1506012670_qt_ data-ipsquote-userid_eq__qt_9771_qt_ data-ipsquote-username_eq__qt_Ridge Batty_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ Ridge Batty said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOk_co_ so if I have a table mesh and  it has three child meshes (chairs around the table) I need to make joints to make them position correctly in relation to parent (table)?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Does the physics system take parenting into effect? It looks like it just copies every impostor_t_s position/rotation onto the appropriate mesh each frame_co_ even though the impostor_t_s transform is in world coords and the child mesh expects local coords.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCouldn_t_t this issue be fixed if the _qt_update physics object_qt_ function checked whether the target mesh had a parent_co_ and if so transformed the (world) physics position into a (local to the mesh_t_s parent) position using the parent_t_s world matrix?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/9771-ridge-batty/?do_eq_hovercard_qt_ data-mentionid_eq__qt_9771_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/9771-ridge-batty/_qt_ rel_eq__qt__qt__gt_@Ridge Batty_lt_/a_gt_ I think the easiest fix would be to unparent your chairs from the table. The whole point of parenting is usually that you want the children to move along with the parent automatically - if you want each chair to move independently from the table then the parent/child relation doesn_t_t make sense.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf it_t_s just an authoring issue_co_ where the chair_t_s initial positions are defined relative to the table_co_ it would probably make sense to initialize them that way but still leave out the parenting.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-22T10:55:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the suggestion_co_ fenomas!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI thought about unrolling the parenting_co_ but it_t_s there for a good (or  bad?) reason_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- we can edit_co_ add and remove _qt_chairs_qt_ and dozens of decorative pieces from the models easily in our level editor_lt_br /_gt_\n\t- parent/child hierarchy is used to define attachments points for weapon and armor mods etc..._lt_br /_gt_\n\t- some animations rely on relative positioning/rotation of children_lt_br /_gt_\n\t- and finally_co_ our game project has over 400 individually drawn models_co_ it_t_s a daunting task to rebuild/rethink everything just because there_t_s a glitch in the engine _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYes I know I should have tried if it works before we even start. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-09-22T12:11:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou can use mesh.setParent(null) to unparent a child and maintain world position.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-22T12:35:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat solves the problem with collisions quite elegantly_co_ but creates another problem when I lose the parenting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ if I want to move a car_co_ it forgets to pick up its tires_co_ windows_co_ etc. etc. child meshes _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe this is the way it_t_s supposed to be done. But if i have to write a second parenting system_co_ I think using a framework starts to lose its meaning? I_t_m not thinking about myself as much as others who have less time and resources for making great projects.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-22T12:55:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/Plugins/babylon.cannonJSPlugin.ts#L126_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Physics/Plugins/babylon.cannonJSPlugin.ts#L126_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tphew.  For each child impostor... we_t_re headed for line 229 _createShape_co_ which is an extendSize festival.  All that extend/extendWorld bbox stuff changed about a year ago_co_ yes?  Are we still cleaning-up FRR (far reaching ramifications) (fallout) from those mods to bbox/binfo?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the boundingBox extends/extendsWorld mods were fairly benign/harmless_co_ though.  I found one minor problem with center/centerWorld in the Cannon heightMap code_co_ but DK and I both searched for other impacts within the Cannon physics system_co_ and found none.  Still_co_ I think Raanan_t_s words about rotations being a factor... should be thought about.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s lots of child-processing code in that cannonPlugin.  Gruesome.  I suppose a guy should _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#15AFCG%2321_qt_ rel_eq__qt_external nofollow_qt__gt_hijack that code into a playground_lt_/a_gt_ and start messing with it - near line 97.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-09-22T13:04:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_189608_qt_ data-ipsquote-contentid_eq__qt_33028_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1506083726_qt_ data-ipsquote-userid_eq__qt_9771_qt_ data-ipsquote-username_eq__qt_Ridge Batty_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t28 minutes ago_co_ Ridge Batty said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFor example_co_ if I want to move a car_co_ it forgets to pick up its tires_co_ windows_co_ etc. etc. child meshes _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWait.  You have a mesh with children and when you put an impostor in the parent mesh_co_ the child meshes without impostors don_t_t follow the parent mesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI thought you had an issue because you were adding impostors to the children too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-22T13:25:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#RLKVFF%2343_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#RLKVFF#43_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ttest pg.  Four non-physics green cylinders... parented-to physics-active red box - zero-G.  Screen click fires applyImpulse at red box_co_ red box moves_co_ kids go along.  *shrug*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFeel free to make changes and do more saves.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-22T13:56:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo_co_ a quick answer before I dive into really understanding what_t_s going on_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe physics system is using Babylon_t_s parent system to create compounds. For the physics engine the parent and all of its children (who have a physics impostor) are a single object. or SHOULD be a single object. if this is not the case_co_ I need to find the problem and fix it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will look at the examples now and will be able to give a better answer.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-22T20:18:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks again to everybody for having the patience to tolerate my whining _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ I used your PG example to illustrate my problem. Mouse click applies impulse to the ball and... _lt_strong_gt_it just misses the child mesh_lt_/strong_gt__co_ just like in my project. I_t_m still willing to accept that there is some mistake I made myself_co_ but that_t_s ok. I just need to get this b*tch nailed down I don_t_t care if it_t_s due to my own simplicity. Anyway_co_ check it out_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#RLKVFF%2345_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#RLKVFF#45_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-22T20:50:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhh_co_ it_t_s a child of a child.  (line 89)  yuh_co_ yuh_co_ yuh.  That might not work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMake both cylinders be child of handle_co_ no probs.  hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#RLKVFF%2346_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#RLKVFF#46_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-22T23:47:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ that will fix the problem no doubt about it. It_t_s trivial to make the PG example work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when you have several hundred models drawn by artist with parent/child hierarchies and they have a designed function in the game... it starts to be a bit more trickier.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen again_co_ no pain no gain!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2017-09-23T04:27:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_189608_qt_ data-ipsquote-contentid_eq__qt_33028_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1506083726_qt_ data-ipsquote-userid_eq__qt_9771_qt_ data-ipsquote-username_eq__qt_Ridge Batty_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ Ridge Batty said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThat solves the problem with collisions quite elegantly_co_ but creates another problem when I lose the parenting.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tFor example_co_ if I want to move a car_co_ it forgets to pick up its tires_co_ windows_co_ etc. etc. child meshes _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think you have two separate categories of problem_co_ and need two different ways of handling it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor things like tables and chairs_co_ that have no parent/child relationship as far as the physics engine is concerned_co_ you should probably remove any parent/child relationships from the meshes and make independent physics impostors for each object.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor things like car windows_co_ or a character_t_s arms and legs that have animations defined in local coordinates_co_ you should probably be retaining the parent/child relationship for the _lt_em_gt_meshes_lt_/em_gt__co_ and making one big physics impostor for the whole object_co_ rather than adding each car window and character arm to the physics engine. You don_t_t normally want every single mesh to go into the physics engine_co_ you want a capsule for each character_co_ a couple of boxes for the car_co_ etc. (Hence the term _qt_physics impostor_qt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote that none of this should necessarily require you to change your authoring process or throw away your hand-made assets. But if the parent/child relationship is no longer useful at runtime (as with chairs) then throw it away at init_co_ and if it is (character_t_s arms) then retain it anc leave the child mesh out of the physics engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(If you have child meshes that need to be in the physics engine - e.g. a player_t_s sword that needs to knock things over_co_ or car wheels that need to physically interact with the ground_co_ then these are a third case and will need custom coding for each individual object.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ridge Batty","Date":"2017-09-23T16:13:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah you_t_re right_co_ it_t_s not all done even if the child/parent relations would be inherited by physics objects.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ can you please confirm is the child/parent links inherited only one level deep by design or is there something in the engine which could be fixed?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the PG (one more time) where the hit test fails for second level children_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#RLKVFF%2345_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#4588c5_sm_font-size_dd_14px_sm__qt__gt_http_dd_//playground.babylonjs.com/#RLKVFF#45_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]