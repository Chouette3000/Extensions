[{"Owner":"Virtuell","Date":"2016-09-19T11:40:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m trying to use canvas2d on mobile. As buttons I use the a rectangle with an actionManager as in this example taken from the canvas2d tutorial. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1onkpj%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1onkpj#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever the BABYLON.ActionManager.OnPickTrigger only works occasionaly on mobile and is very unresponsive.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI noticed that the mobile _qt_pointer_qt_ is moved to the correct position making it possible to use the OnPointerOverTrigger to trigger the button_co_ but for the computer browser I use the OnPointerOverTrigger for a color transition on the button.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone have a suggestion for a universal solution for both mobile and computer browsers?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-19T16:55:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you confirm that you have no issue on your PC?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Virtuell","Date":"2016-09-20T07:18:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ I have tried on a several computers and several mobile devices and the behaviour is consistent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo issues on pc but on mobile the OnPickTrigger activates after about 3-8 attempts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is only for the canvas2d action in the example from _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?17_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/?17 _lt_/a_gt_the trigger works fine on mobile aswell.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-20T16:56:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23177-virtuell/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23177_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23177-virtuell/_qt_ rel_eq__qt__qt__gt_@Virtuell_lt_/a_gt_ I can use the PG you referenced as a repro case on mobile?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Virtuell","Date":"2016-09-21T07:56:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_144788_qt_ data-ipsquote-contentid_eq__qt_25278_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1474390604_qt_ data-ipsquote-userid_eq__qt_18979_qt_ data-ipsquote-username_eq__qt_Nockawa_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 9/20/2016 at 6_dd_56 PM_co_ Nockawa said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23177-virtuell/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23177_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23177-virtuell/_qt_ rel_eq__qt__qt__gt_@Virtuell_lt_/a_gt_ I can use the PG you referenced as a repro case on mobile?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ Sure that is what I did _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe references are from the offical tutorials on canvas2d_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Canvas2D_Home_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Canvas2D_Home _lt_/a_gt__lt_br /_gt_\n\tand actions_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/How_to_use_Actions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/How_to_use_Actions_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Virtuell","Date":"2016-09-23T14:18:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ Do you have any suggestions to point me in the right direction for this issue?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am fairly sure it_t_s a bug in the framework_co_ but for me it_t_s a bit intimidating to attempt to solve it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now I am thinking of working around the problem using collision meshes tied to the camera at the position of my buttons and then using OnPickTrigger on the mesh instead.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-23T15:24:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk I_t_ll take a look right now_co_ but I_t_ve never tried to debug on a tablet_co_ so I_t_m not sure how to do.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-23T17:18:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23177-virtuell/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23177_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23177-virtuell/_qt_ rel_eq__qt__qt__gt_@Virtuell_lt_/a_gt_ why you don_t_t use the pointerEventObservable like it_t_s done on this PG_dd_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#UVDG0%2367_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#UVDG0#67_lt_/a_gt_ I just tested it on tablet and it seems more reliable. Let me know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor your information the action manager is supported for compatibility reason but the pointerEventObservable is more complete/accurate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Virtuell","Date":"2016-09-26T13:09:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_Thank you!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tested and researched pointerEventObservable and it seems be feature complete and work as intended _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I_t_ll redo my code to use the pointerEvent instead.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have been working with Babylon and canvas2d for about a  month and from the documentation the actionmanager seemed to be the way to go_co_ had no idea that it was legacy stuff.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-26T13:47:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_145436_qt_ data-ipsquote-contentid_eq__qt_25278_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1474895368_qt_ data-ipsquote-userid_eq__qt_23177_qt_ data-ipsquote-username_eq__qt_Virtuell_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t37 minutes ago_co_ Virtuell said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_Thank you!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI tested and researched pointerEventObservable and it seems be feature complete and work as intended _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I_t_ll redo my code to use the pointerEvent instead.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI have been working with Babylon and canvas2d for about a  month and from the documentation the actionmanager seemed to be the way to go_co_ had no idea that it was legacy stuff.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell_co_ _qt_Legacy_qt_ may not be the best term I should have used. The ActionManager is a feature made in the scope of a 3D Engine and it_t_s great in this scope. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCanvas2D was built to serve as a foundation for a GUI Library so the pointerEventObservable was designed accordingly and the requirements are pretty wide.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I worked on exposing the ActionManager also for Canvas2D_co_ but as the ActionManager was not design for 2D stuffs_co_ things are more complex to handle (for me).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll keep the Trello Card about the bug on mobile but it_t_s no longer a priority to fix. I_t_ll give it another try when I_t_ll be better at debugging on mobile/tablet! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-26T15:52:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you for the clarification! Action Manager is NOT legacy AT ALL _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Virtuell","Date":"2016-09-28T07:31:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI got it working using the pointerEventObservable _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ It was less code for the same behaviour compared to the actionManager so that_t_s nice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did however find that the BABYLON.PrimitivePointerInfo.PointerDown event doesn_t_t work as intended on mobile_co_ I had to use PointerUp to get expected behaviour._lt_br /_gt_\n\tFor PointerDown the event seems to register when pressing the Prim2dBase object but isn_t_t triggered correctly until a second press somewhere else.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-28T17:50:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_145694_qt_ data-ipsquote-contentid_eq__qt_25278_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1475047881_qt_ data-ipsquote-userid_eq__qt_23177_qt_ data-ipsquote-username_eq__qt_Virtuell_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ Virtuell said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI got it working using the pointerEventObservable _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ It was less code for the same behaviour compared to the actionManager so that_t_s nice.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI did however find that the BABYLON.PrimitivePointerInfo.PointerDown event doesn_t_t work as intended on mobile_co_ I had to use PointerUp to get expected behaviour._lt_br /_gt_\n\t\t\tFor PointerDown the event seems to register when pressing the Prim2dBase object but isn_t_t triggered correctly until a second press somewhere else.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI take a look right away on this_co_ I_t_ve realized that I have a laptop with touch_co_ it should be easier than a tablet to test/debug! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-28T19:32:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23177-virtuell/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23177_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23177-virtuell/_qt_ rel_eq__qt__qt__gt_@Virtuell_lt_/a_gt_ ok I think the bug is fixed_co_ I was indeed firing the event on the wrong primitive sometimes which lead to the behavior you noticed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you get the latest sources or wait for a PG update or the next preview build_co_ it should be ok.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Edit_lt_/strong_gt__dd_ the ActionManager bug _qt_may_qt_ have been also fixed at the same time. I wait for a PG update to check for it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]