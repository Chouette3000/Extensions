[{"Owner":"Richard C","Date":"2017-08-11T16:20:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy project is ocean based. I want to measure the water depth as a vessel travels the water surface. The seabed is undulating_co_ so I would expect the point at which the ray intersects the _t_seabed_t_ mesh to change as the vessel moves through the water. I understand the ray interacts with the bounding box of the mesh it is intersecting. My problem appears to be that the bounding box of the seabed is effectively a rectangle and currently as the vessel moves the water depth is remaining constant.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy code (pinched from examples in the PG) is _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar ray _eq_ new BABYLON.Ray(new BABYLON.Vector3(0_co_ nSeaBed.getBoundingInfo().boundingBox.maximumWorld.y_co_ 0)_co_ new BABYLON.Vector3(0_co_ -1_co_ 0))_sm__lt_br /_gt_\n\t        var worldInverse _eq_ new BABYLON.Matrix()_sm__lt_br /_gt_\n\t        nSeaBed.getWorldMatrix().invertToRef(worldInverse)_sm__lt_br /_gt_\n\t        ray _eq_ BABYLON.Ray.Transform(ray_co_ worldInverse)_sm__lt_br /_gt_\n\t        var pickInfoW _eq_ nSeaBed.intersects(ray)_sm__lt_br /_gt_\n\t        waterDepth _eq_ (pickInfoW.pickedPoint.y)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. It seems to me that the ray should be intersecting with the actual mesh rather than the bounding box. Is this possible?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Also. I have to admit I don_t_t understand the code - would someone be kind enough to comment each line to briefly explain what the code is doing_co_ particularly _t_invertToRef_t_. Thanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRichard C\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-11T17:07:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello I would recommend relying on scene.pick_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    scene.pick(0_co_ 0_co_ function(mesh) {\n        return mesh.name _eq__eq__eq_ _qt_myseabed_qt__sm_\n    })_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt will return a pickingInfo_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.0/pickinginfo_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/3.0/pickinginfo_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should have everything there (including pickedPoint where you could use the y coordinate _dd_))\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2017-08-11T19:23:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure how this will work. I assume scene.pick is for mouse use. I assumed I should be using a ray_co_ fired on each frame from the vector.y of the water_t_s surface where the vessel is to the seabed. How can scene.pick work in that senario please?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRichard C \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-08-11T20:00:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is an example using a Ray and RayHelper_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1UZIZC%2333_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1UZIZC#33_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-08-11T20:04:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya RC_co_ good to see you again.  Hope things are going good. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy not test in a playground?  Here_t_s _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#X9KN2Z%231_qt_ rel_eq__qt_external nofollow_qt__gt_a nice starter... with an undulating sea-bed_lt_/a_gt_ about 150 units below the camera. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps paste-in all your new pickin_t_ toys_co_ and see if you can get some numbers streaming to console.log.  FUN!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWould Jerome_t_s umm... getDistanceAboveHeightMap() work?  No_co_ that_t_s not the correct name.  What the heck was that straight-down-to-heightMap distance checker thing... that Jerome coded?  umm.  I_t_ll think of it... eventually.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ I stole this animated ground playground from somebody... its COOL!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2017-08-14T14:48:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks Adam and Wingnut (hope things are good with you too).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am continuing to play but could I ask you or anyone else the answer to the my original question  ............\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. It seems to me that the ray should be intersecting with the actual mesh rather than the bounding box. Is this possible?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI vaguely remember reading somewhere of there being a .getboundingMesh  - does it exist or is it just wishful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingnut - I_t_m not sure using a heightmap for the seabed will be a workaround - I have modelled quite a few 3d coral reef objects that will of course build off the sea bed. I am thinking the seabed could be split into sections each according to height. I can then raycast from the bounding boxes from each of there together with the same for each coral reef.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt would still be good to know if there is something like a bounding mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdam_co_ I assume you are suggesting I try making the _t_seabed_t_ a ribbon_co_ albeit a static one. If a seabed were to move as much as the sine wave makes the ribbon in that PG I think we would have a Tsunami\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRicard\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-08-14T14:53:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you use a BJS provided GroundMesh object to depict the seabed_co_ you_t_ll get immediatley the method getHeightAtCoordinates(x_co_ z)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.0/groundmesh#getheightatcoordinates-x-z-rarr-number_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/3.0/groundmesh#getheightatcoordinates-x-z-rarr-number_lt_/a_gt_  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2017-08-14T15:07:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think _lt_strong_gt_scene.pick_lt_/strong_gt_ and _lt_strong_gt_scene.pickWithRay_lt_/strong_gt_ does intersect with the Mesh_co_ not only its boundingBox. Here an example with _lt_strong_gt_scene.pick_lt_/strong_gt_ (click to add small spheres in the scene) _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#TUSYHN_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#TUSYHN_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf it were using boundingBoxes_co_ the small spheres would not be placed correctly on the large sphere.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-08-14T15:26:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_185493_qt_ data-ipsquote-contentid_eq__qt_32323_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502722122_qt_ data-ipsquote-userid_eq__qt_22253_qt_ data-ipsquote-username_eq__qt_Richard C_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Richard C said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAdam_co_ I assume you are suggesting I try making the _t_seabed_t_ a ribbon_co_ albeit a static one.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNope\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WJPB9%2339_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WJPB9#39_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat example uses Pick (click on the ground) and Ray with a ground mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand an example that uses a model_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#YEHNDI%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#YEHNDI#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-08-14T16:16:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTons of cool toys!  Excellent! \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22253-richard-c/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22253_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22253-richard-c/_qt_ rel_eq__qt__qt__gt_@Richard C_lt_/a_gt_ yeah_co_ bottom of sea is MORE THAN simply ground.  Other stuff_co_ too.  Those other things affect depth-sounding values. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYep_co_ good point.  You need more than depth-to-ground.  You need depth to whatever is below_co_ be it ground_co_ modeled reef_co_ sunken ship_co_ whale.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Richard C","Date":"2017-08-15T10:40:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25742-svenfrankson/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25742_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25742-svenfrankson/_qt_ rel_eq__qt__qt__gt_@SvenFrankson_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tadam - your suggestion works for my project_co_ so problem solved. I now have a working depth sounder.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight_co_ on to the next challenge !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]