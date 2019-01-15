[{"Owner":"dsman","Date":"2016-10-13T13:46:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCurrent VRDeviceOrientationFreeCamera   is created as post-process. Hence we are loosing anti-aliasing. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo is there any way we can create rig with 2 camera and side by side output. ( _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ created demo here _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#CV4CX%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#CV4CX#1_lt_/a_gt_ ) And have camera rotate based on device orientation camera ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI assume this will be slower (as device has to render two camera) . But it will be visually better _co_ since we will not loose the antia-aliasing ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn that case_co_ how do we get device orientation camera ? Is there any library or is there any way we can use part of code for VRDeviceOrientationFreeCamera    somehow ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-13T14:53:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTechnically_co_ yes by adding after instancing_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_camera.setCameraRigMode(BABYLON.Camera.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL_co_  { interaxialDistance_dd_ 0.0637})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tOr instancing the single camera version_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.deviceOrientationCamera.ts_qt_ rel_eq__qt_external nofollow_qt__gt_ BABYLON.DeviceOrientationCamera_lt_/a_gt__co_ then setting the rig.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThink there is going to be a problem_co_ since only the VR_co_ barrel distortion_co_ uses quaternions.  I think it might not work right without.  I had the opposite problem trying to use the barrel distortion on a passive scene with camera animation.  Setting camera.rotation does nothing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI briefly attempted to rework Camera to work the same way as Mesh with respect to rotation (euler or quaternion)_co_ but this was beyond me.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-13T15:37:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOn the phone based VR subject 2 thoughts / questions_dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tHas anyone tried the Google Pixel with webGL?  It can record @ &gt_sm_ 60 fps from cameras_co_ but not seen what it can do using GPU?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tThink Note 7 has killed phone based VR for a while.  Morpheous &amp_sm_ Hololens could be the beneficiaries_co_ but not sure how that helps us_co_ unless using webGL on XBox_co_ which no one talks about.\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2016-10-13T17:29:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ Consider me noob. I still doesn_t_t have clarity if using Camera Rig with SBS + DeviceOrientationCamera  _co_  I can create VR view for smartphone based VR device just like VRDeviceOrientationCamera does. But just without aliasing ._lt_br /_gt__lt_br /_gt_\n\tAlso what do you mean by Note 7 has killed phone based VR . _lt_br /_gt__lt_br /_gt_\n\tWe haven_t_t tested VRDeviceOrientationCamera in Galaxy GearVR. But I assume it will work just like in any other normal phone with CardboardVR based VR headset.  Am I right ?_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-13T17:58:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTry it_co_ I do not have the equipment to definitively tell you if it will operate correctly_co_ but just switching the rig is how to do it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as the Note 7 crack_co_ I have ABSOLUTELY NO intention in risking my sight_co_ face_co_ or hair (which is close to my clothes) to play a game.  I do not know if the Note 7 even fits in the GearVR_co_ but I am not comfortable (&amp_sm_ think others may make this leap too).  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ actually talked about putting a cold pack on the phone_co_ which in retrospect provides little comfort.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was actually thinking about a Note just a month ago.  Am going wait.  If the Pixel breaks the 60 fps for webGL_co_ it would be better anyway.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-14T10:54:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ - I would definately avoid waiting for Samsung to release the new note 8 or whatever they release even though they once again claim to have fixed the very serious hot battery problems. Howevr_co_ currently my S6 and S7 phones work great_co_ and the S7 phone runs much cooler than the S6. However_co_ the S6 performance is only about15% slower than the S7 - and this is only on CPU and GPU intensive VR apps (only VR apps for GearVR) which is hardly noticable_co_ and only overheats on a very select few which are rendering allot of polys_co_ animations_co_ deformations_co_ fine anti-aliasing_co_ etc_co_ as well as post processing functions simultaniously. Otherwise most of the time it does run a bit hot_co_ but doesn_t_t shut down due to overheating except in the few previously described VR apps - and only Oculus VR apps due to the enclosure. So these are now fairly inexpensive (I can buy the S6 phone for about $300US currently_co_ and they perform fantasic. And would select the S6 over the S7 as there_t_s very little difference except for price. And I generally don_t_t require using the gel packs which don_t_t need refrigeration first_co_ as they simply act as a heat sink 9definately don_t_t freeze_co_ but you can refrigerate if you want.) But again_co_ I rarely need to use these as I know which VR apps are pushing the limits of the hardware - as it_t_s not the battery which gets hot_co_ but the internal systems when they_t_re clocking at etremely high speeds.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo again_co_ I highly recommend the S6 phone as the resolution is fantastic and the performance is great as well. Waiting for the replacement or new device isn_t_t worth the cost in my opinion_co_ as there_t_s nothing my S6 (phone) won_t_t do with great performance. And the GearVR is only $99 - which you can find cheaper if you look. And as much as I dislike the current 3D screen formats such as Oculus and Vive_co_ they do offer some fantasic games which I can list if anyone is interested. But the real benefit is to write for the Oculus format currently as it_t_s very inexpensive_co_ and with the MOGA bluetooth controller_co_ it_t_s really often a fun experience to play as well. The controller works and pairs perfectly_co_ and costs about $30US. But this has already provided me with allot of experience in preparation for the release of the Microsoft Halolens which is a step above as an AR device_co_ and tsoon we will be ahead in developing for the new genre of truly fantastic devices such as Magic Leap - which is definatly in a catagory of its own.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd a bit off topic_co_ but relevant to this current discussion - by deciding to jump right into WebGL 2 years ago_co_ as of about 6 weeks ago_co_ simply posting my resume online on select sites_co_ I receive job offers for independant work at home at least 2 offers a week or more - half are asking to relocate with long term contracts such as Verizon who is currently seeking a large # of experiencd WebGL developers and cannot find anyone to fill their many positions in several different US cities. And right now_co_ I_t_m able to select among several jobs whenever I need_co_ and another is waiting - and I_t_m averaging $75 - $100 per hour without any negotiation since these companies cannot locate any available competent developers currently. So if anyone on this forum needs work_co_ it_t_s now very easy to find here in the US - and I_t_m certain many companies would allow anyone in any country to work freelance as there truly are no WebGL developers with experience. And the jobs I get now_co_ are almost always beyond my skill level - that is until I finish and deliver the work - thus my skillset and skill level is growing so much faster now than I ever thought possible by selecting work which I can find few or no examples ever published online - and certain that most of these are first to accomplish. My current project is for a trade show for a pharmacuetical company in which I have now learned to run Web Workers to calculate more than 1000 sphere imposters rendering at a constant 60fps running on a local server_co_ and syncing the BJS render framerate using an IndexedDB - which I had no previous experience with whatsoever. But all is currently well and working_co_ and I finish this job and deliver is 3 weeks. And there_t_s already another job waiting for me to begin as soon as I finish this one - unbelieveable. So for anyone who_t_s looking for work_co_ just write your resume to highlight WebGL development_co_ and I guarantee the emails for work will begin flying in. There are many recruiters looking for the larger contracts_co_ but they don_t_t know how to come to look on the forum in the jobs section.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut for the best news_co_ all but two companies I_t_ve been contacted by recently are dead set on using Babylon.js_co_ and not Three.js_co_ Pixel.js - or any other WebGL framework. They all are asking for BJS experience which is fantastic_co_ and they all tell me how rare we are - which we already know. Anyway_co_ sorry to stray so far from the initial subject as my fingers are simply flying on the keyboard tonight. However_co_ it all comes back to taking a serious look at the S6 phone and GearVR - since it_t_s providing me with unique VR and AR experience_co_ as well as additional income. And my own company 3rd Brain just received 2 proposals this week to fully invest in our full $ ask for capital investment on very reasonable terms. And we have one more seperate proposal coming early next week. So I fully expect to have our unique proprietary server technology in use by Weta and Lockheed Martin within 3 weeks (finally)_co_ and a public release 1st quarter next year - regardless of our accepting funding. And e_t_re expanding the server API to be able to license for use to others - which provides unlimited multi-user simultanious real-time media sync and dynamic streaming of media and events in a single stream - I can explain further if anyone is interested. But this is nothing anyone else currently has built as we have almost 15 years in building this for use with our OpenGL and DirectX layers - which we_t_ve now almost fully support WebGL with the same functionality. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo it appears we_t_ll be receiving full funding with reasonable terms as we also have built a unique WebGL product app ready for release soon - so investors no longer consider us pre-revenue as the app is working well_co_ and I_t_ll share with a select few soon - you already know who you are - and I_t_m really looking forward to sharing_co_ as we coudn_t_t have done any of this without all of you. I_t_ve always said that I believed babylon.js to be the future of WebGL_co_ and it_t_s now coming true in all respects. Even Verizon is spending over $400 million US in WebGL development next year for a new VR platform solely using babylon.js. So we know we_t_re all blessed by the work _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and of course _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt_ began_co_ and all of the other brilliant minds now contributing to the framework. I_t_m very happy to say that I_t_m finally beginning to make what I consider to be simple modifications to the engine_co_ and will also work very hard to add to the features as I better understand the core engine - as I have jobs coming which require new features_co_ and will now always first attempt to build myself as I feel like I_t_m possibly ready to begin to share in this awesome opportunity to contribute to build the very best WebGL engine currently available - and make certain babylon.js remains so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for the long read - as you know how I can go on and on - and on sometimes._lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-10-14T20:24:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDB_co_ what timezone are you in?  Think Hololens is not going to work with this code base anytime soon.  Something experimental with _lt_a href_eq__qt_https_dd_//github.com/Microsoft/angle/tree/ms-holographic-experimental_qt_ rel_eq__qt_external nofollow_qt__gt_OpenGL ES_lt_/a_gt_ though. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI plan on waiting for now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-14T21:15:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ - You are correct_co_ however as with Oculus_co_ Hololens will support at least 2 browsers_co_ and I currently and simply expand the chrome browser on my Samsung phones to full screen and use the MOGA bluetooth controller_co_ and it looks as good as anything Oculus and their 3rd party developers have built. And if I want to use a scene within the Oculus app itself_co_ I launch the Samsung browser which is enabled in the Oculus app - but I prefer chrome without launching the Oculus app. The Hololens will function similarly_co_ as my Brother recently left Microsoft as a lead patent attorney with a mechanical engineering and computer science degree as well. So I_t_ve had the scoop on this for quite some time. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould be no problem using WebGL with Hololens._lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2016-11-02T11:28:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_  So does MOGA  controller work off the shelf  in a Babylon app running inside chrome browser  any android smartphone ?   ( I assume_co_ using gamepad camera ) _lt_br /_gt__lt_br /_gt_\n\tI want ability to control camera position using controller while the smartphone is inside cardboard based VR headset. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-11-03T03:07:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13379_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/_qt_ rel_eq__qt__qt__gt_@dsman_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll 3 MOGA bluetooth controllers work right out of the box - however one stands out as it has two modes for bluetooth connectivity. The two other controllers may require some configuration depending on the device you_t_re linking to. The oe controller that works with every device I_t_ve tested and consistanly in type of control is the MOGA Pro Power controller. Make sure you purchase this model over the other two bluetooth controllers as one mode of connection works on 80% of all devices_co_ and the other 20% work with the second mode (either mode A or B.) Actually both modes work with all devices_co_ however there are differences in the support of controller buttons and features pairing right out of the box - no configuration necessary.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you require more info_co_ just let me know. I_t_ve been developing using hand and other controllers for many years_co_ and there is no better and more compatible controller that works as you designed your app right out of the box upon connection. Also_co_ if you look at the features on this controller_co_ it functions as well as any current console controller with even more features - as well as both analogue and digital components - and is USB rechargable. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2016-11-03T04:46:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do we use gamepad camera if we are already using VRDeviceOrientationCamera  ?  We need controller to control the camera when smartphone is inside the VR Box. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny way to get events for gamepad buttons ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-11-03T05:17:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13379_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13379-dsman/_qt_ rel_eq__qt__qt__gt_@dsman_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou_t_ll be identifying camera orientation from controller events in your application regardless - so I don_t_t understand the question. If you_t_re considering using on both VR devices and 2D displays_co_ then again the answer is clear.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]