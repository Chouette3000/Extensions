[{"Owner":"Junior","Date":"2014-12-03T15:18:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Hell Everyone_co__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I have created a scene in Blender with several animations and cameras at different positions. I would like help from the community to create a graphical user interface that allows the user to do the following_dd_-_lt_/div_gt__lt_br_gt__lt_ol_gt__lt_li_gt_activate a camera by clicking on a button in the control panel._lt_br_gt__lt_/li_gt__lt_li_gt_allow the user to switch the menu of the control panel. e.g. from camera views to paint and body kit_lt_br_gt__lt_/li_gt__lt_/ol_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I would also like to add labels/notations to each mesh so that the user can see a description of what the mesh represents whenever they click on the label. The labels should only be visible when the user click on a button in the control panel.  _lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Please see a mock up picture below of what I intend to do. Thank you for your kind assistance._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2014/post-8519-0-03080600-1417619801.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2014/post-8519-0-03080600-1417619801_thumb.png_qt_ data-fileid_eq__qt_3188_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8519-0-03080600-1417619801_thumb.pn_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-04T15:56:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Junior!  Still battling with the car_co_ eh?  Nod.  Keep in mind that very little _qt_design_qt_ can happen until you understand the _qt_tools_qt_ that are available for designing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ you have this part...  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/7641-i-need-help-to-design-a-camera-control-panel/_qt__gt_http_dd_//www.html5gamedevs.com/topic/7641-i-need-help-to-design-a-camera-control-panel/_lt_/a_gt_ done_co_ right?  You know how to do _lt_u_gt_HTML_lt_/u_gt_ slide-open menus and understand index.html_co_ index.js_co_ and index.css seen in _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Samples_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Samples_lt_/a_gt__co_ correct?  That_t_s step one_co_ and it is not a webGL thing.  It is fancy HTML_co_ and thus need not be discussed on a webGL forum.  Therefore_co_ THAT part of your project... can be labeled _qt_the html side_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now for the mesh labels_co_ which could be webGL_co_ but could also be absolute-positioned HTML.  So_co_ even for the labels_co_ there is a webGL side_co_ and a HTML side.  Primarily_co_ there are two types of labels that you can do with webGL (canvas) in its current state_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_#1. DynamicTextures (2D text on planes) - We don_t_t have great documentation on this_co_ but you can find what we DO have... here_dd_ _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/08/12/creating-a-3d-chart-for-your-windows-8-1-app-using-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/08/12/creating-a-3d-chart-for-your-windows-8-1-app-using-babylon-js.aspx_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Babylon.js _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24709_qt_ rel_eq__qt_external nofollow_qt__gt_DynamicTexture_lt_/a_gt_ is an interface to 2D Canvas Land.  Let me show what I mean._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var label1Texture _eq_ new BABYLON.DynamicTexture(_qt_dynamic texture_qt__co_ 512_co_ scene_co_ true)_sm__lt_/pre_gt__lt_p_gt_This creates a dynamicTexture object.  If you look at the doc_co_ there are two very important methods on it_dd_ drawText and getContext.  DrawText was placed on this object... to make it as easy as possible to put some text on a DynamicTexture.  This method _qt_wraps_qt_ (makes easier) MANY much more complicated things involved with 2D Text.  DrawText is a powerful method_co_ but it is also easy_co_ and a bit limited_co_ because it avoids your need to deal with the OTHER important function... getContext._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_After you made your label1Texture (above code)_co_ you could do_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var canvasRenderingContext2D _eq_ label1Texture.getContext()_sm__lt_/pre_gt__lt_p_gt_Ahh_co_ the dreaded canvasRenderingContext2D class.  What an interface!  The W3C spec for it... is _lt_a href_eq__qt_http_dd_//www.w3.org/TR/2dcontext/_qt_ rel_eq__qt_external nofollow_qt__gt_HERE_lt_/a_gt__co_ the Mozilla version is _lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D_qt_ rel_eq__qt_external nofollow_qt__gt_HERE_lt_/a_gt__co_ and the Microsoft version is _lt_a href_eq__qt_http_dd_//msdn.microsoft.com/en-us/library/ie/ff975057%28v_eq_vs.85%29.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_HERE_lt_/a_gt_.  These classes are the real substance behind the Babylon.js dynamicTexture drawText method.  If you plan on putting those round-cornered borders around your label text_co_ you will need to become proficient with canvasRenderingContext2D.  And_co_ as you have noticed_co_ canvasRenderingContext2D is _lt_u_gt_not_lt_/u_gt_ part of the Babylon.js framework.  The framework simply provides you with the getContext method... so you can get a _qt_handle_qt_ or _qt_reference_qt_ to the canvasRenderingContext2D that is about to be used for your new label._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ if you ask for help on canvasRenderingContext2D objects HERE... you may be disappointed_co_ because that object is part of HTML and not part of webGL.  Thus_co_ it is off-topic to a degree.  Nobody is very topic-strict around here_co_ but you might find more help with canvasRenderingContext2D on HTML canvas forums... than you might find here._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is my opinion that small text (like the text on your labels) will _lt_u_gt_not have_lt_/u_gt_ great clarity and crispness... if you use the dynamicTexture method of making your labels.  Don_t_t let me discourage you from experimenting with it.  Learning to use the canvasRenderingContext2D is a large task_co_ though.  But learning it... is part of the _qt_tools discovery_qt_ mentioned earlier_co_ and must be taken into account during the GUI design process._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is another way_co_ and likely much easier._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_#2.  Use static textures.  In other words_co_ use a 2D paint program and make little pictures of the text you want to put on each label.  You may have used this method in making your mock-up picture.  Once you have some little pictures of the text that goes onto labels_co_ you have bypassed the hassles of canvasRenderingContext2D.  Now all you need to do is use little TEXTured planes that become visible under the right condition_co_ and THIS method is much more webGL and BJS Framework on-subject. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In brief_co_ you would work with standard Babylon visibility settings_co_ and BILLBOARD_MODE or mesh.lookAt() techniques_co_ and would be well on your way to getting the _qt_webGL side_qt_ be operational.  Babylon LINES techniques could be used to connect the mesh to the TEXTured label planes_co_ and maybe even the model or camera could be rotated and the lines and planes would adjust their placements properly.  When it comes time to do that_co_ if you run into problems_co_ you can ask about THAT specific webGL framework challenge_co_ and thus avoid asking big sweeping questions like _qt_can someone help me with GUI design?_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_#3. There is one more method to do your labels.  Pure HTML divs or spans_co_ absolutely positioned with CSS.  You may lose your lines between the mesh and the labels_co_ but keep in mind that you could make the mesh color-flash when a certain label for that mesh... is being displayed/viewed.  This makes it very difficult to have multiple labels displayed at the same time_co_ but maybe you don_t_t need to do that.  And again_co_ this is an HTML situation_co_ and not a webGL/BJS framework issue.  The only webGL issue involved in this method... is flashing the color on the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ now you have been given help on GUI design.  You have been shown WHAT is a HTML situation and what is a webGL situation.  You have been shown how/where the two (or more) _qt_sides_qt_ are divided_co_ and now you can ask Babylon.js WebGL questions here on this forum_co_ and ask HTML questions on HTML forums.  JS questions are entertained here too_co_ but mostly when they involve the BJS framework_co_ and not _qt_general JS_qt_ or JS used for HTML operations._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Because_co_ to be perfectly frank_co_ Junior_co_ by the wording of your posts_co_ it seems like you want someone to write your GUI interface FOR you.  The only way it will get designed per YOUR liking_co_ is if YOU design it.  And the first task of YOU designing (and building) it_co_ is to get to know your tools and in which forums to ask questions about them (HTML_co_ JS_co_ or BJS Framework).  Keep your _qt_categories_qt_ separated_co_ and experiment with them while keeping those separations in mind.  The slide-open panels/menus... are HTML and JS... not webGL.  Those button presses produce events that can be wired to JS event-listening functions (non-webGL)_co_ and_co_ in turn_co_ those JS functions can talk to BJS framework functions. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Three layers in that one example.  One HTML (the menu/buttons)_co_ one generic JS (the button-event listener functions) and lastly_co_ webGL (BJS) functions called from THOSE functions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hope I have been helpful.  You_t_ll get better answers to your forum questions when you stay on subjects specific to this forum (specific to the JS / classes used by Babylon.js framework).  Take care_co_ study hard_co_ good luck_co_ party on._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Junior","Date":"2014-12-04T17:08:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello Wingnut_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your explanations and words of advice. I know that what I am trying to achieve is a huge task_co_ especially for a beginner. (There is a lot of things to learn and problems to solve.) Sometimes a bit of _t_naivety_t_ can take you to places that you never dreamed of _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ alt_eq__qt__dd_huh_dd__qt__gt_ .  I would like to finish this project_co_ therefore I am willing to take the challenge_co_ and in the end _t_collect my prize_t_. I appreciate your depth of thought and insightful suggestions as well as your broad scope of knowledge on the subjects involved. I will keep you updated on my progress over time._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-05T04:42:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again.  Junior_co_ I forgot to mention something important.  Have you ever heard of i18n (internationalization)?  i18n essentially means... translation to other languages._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_IF you use canvasRenderingContext2D along with Babylon_t_s dynamicTexture class to make your labels_co_ then converting that label text to another language... is very easy for both humans and computers.  Likely_co_ 1-30 minutes to convert all the label text. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And_co_ it is easy for a computer to read your labels... to blind people_co_ using voice synthesis._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Conversely..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_IF you use little static pictures of the text_co_ made in a 2D paint program_co_ then conversion to another language... could take hours or days.  Lots of 2D graphics work.  And_co_ computers with voice synthesizers_co_ generally_co_ cannot read text from a picture... to blind people._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You probably know all this already_co_ but I just wanted to remind you of this potentially-large ramification of chosen methods. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Ok bye again._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-12-06T04:56:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I would suggest having another html5 canvas layer_co_ which contains the lines and such. _lt_/p_gt__lt_p_gt_If you do this then you can turn a 3D point in space into it_t_s 2D representation on the canvas_co_ and use that for stuff. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-06T08:48:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Josh_co_ then you are still dealing with canvasRenderingContext2D_co_ right?  You are putting text on a canvas that is not really made for text and thus you lose text formatting power such as CSS and wordwrap.  If your labels can somehow remain html_co_ then you get more text wrangling power._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know what Junior_t_s design requirements are_co_ but I wouldn_t_t use canvas-based labels and lines at all.  I would open up a div on the sidebar menu telling about a feature... while flashing the color of the mesh of that feature.  Then the user can spin the camera around the car_co_ zoom in and out on a feature_co_ and the programmer doesn_t_t need to constantly track the feature and re-arrange floating labels and re-draw lines. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_No need for pointer lines.  An information panel just opened with pretty text on it_co_ and a mesh on the car just started flashing (and possibly the camera automatically flew to the feature being talked-about)... all with the click of a menu button or the click of a mesh.  The user would easily know what was being talked-about_co_ without dealing with pointing lines_co_ and without dealing with canvasRenderingContext2D.  *shrug*_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess it depends upon how much a person enjoys pain.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-12-06T17:41:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_True_co_ But remember that the power of the canvas is... that you can generate ANYTHING. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Generating html is a HUGE pain_co_ which I know too well- my editor_t_s gui is generated with JavaScript_co_ using data from jsons. But you are generating far less stuff_co_ so meh._lt_/p_gt__lt_p_gt_Either way works. It really depends on what you want. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-12-06T23:05:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_63627_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10823_qt_ data-ipsquote-username_eq__qt_joshcamas_qt_ data-cite_eq__qt_joshcamas_qt_ data-ipsquote-timestamp_eq__qt_1417887710_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Generating html is a HUGE pain_co_ which I know too well._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_This. x200. I_t_ve gotten so sick of it I now try to avoid it entirely_co_ using a custom JavaScript library to generate the HMTL for me in a Swing/AWT style widget system._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-12-07T22:01:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_63648_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10823_qt_ data-ipsquote-username_eq__qt_Stephen Andrews_qt_ data-cite_eq__qt_Stephen Andrews_qt_ data-ipsquote-timestamp_eq__qt_1417907145_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_using a custom JavaScript library_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Josh is interested_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-12-07T23:05:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_63725_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10823_qt_ data-ipsquote-username_eq__qt_joshcamas_qt_ data-cite_eq__qt_joshcamas_qt_ data-ipsquote-timestamp_eq__qt_1417989684_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Josh is interested_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_script src_eq__qt_lib/jquery.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script&gt_sm__mvcjs _eq_ {\tlocation_dd_ _t_./lib/_t_}&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_lib/mvc.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_lib/jscolor/jscolor.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_lib/jque.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_lib/jqdrag.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_lib/jqsimpleslider.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/pre_gt__lt_p_gt_^ Base dependencies. It_t_s very poorly coded and kinda hacked together_co_ but it lets you do this_dd_ v_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var Button1 _eq_ new MVCJS.Controls.Button(_qt_Text_qt__co_ _qt_purple borderleft_qt_)_sm_Button1.onclick _eq_ function() {   console.log(_qt_I_t_m Button1_co_ I eat everyone _dd_D_qt_)_sm_}MainFrame.addChild(Button1)_sm_MainFrame.open()_sm__lt_/pre_gt__lt_p_gt_But yeah_co_ it_t_s incredibly glitchy_co_ and there_t_s still a lot of controls not implemented_co_ like dropdown lists and comboboxes. (The ones that are implemented though look awesome.)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-12-08T01:19:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ohh interesting._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve been building a interface generator as well_co_ (Which I plan on recoding) _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s the HTML_dd_ _lt_a href_eq__qt_http_dd_//steinhauer.x10.mx/editor/0.015/Editor_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//steinhauer.x10.mx/editor/0.015/Editor/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And here_t_s an example interface object_dd_ _lt_a href_eq__qt_http_dd_//steinhauer.x10.mx/editor/0.015/Editor/interface/leftPanels/Terrain/sculpting.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//steinhauer.x10.mx/editor/0.015/Editor/interface/leftPanels/Terrain/sculpting.js_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sadly the interface is extremely limited_co_ hence the recode. _dd__t_(_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Stephen Andrews","Date":"2014-12-08T04:10:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_63736_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10823_qt_ data-ipsquote-username_eq__qt_joshcamas_qt_ data-cite_eq__qt_joshcamas_qt_ data-ipsquote-timestamp_eq__qt_1418001546_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ohh interesting._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve been building a interface generator as well_co_ (Which I plan on recoding) _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s the HTML_dd_ _lt_a href_eq__qt_http_dd_//steinhauer.x10.mx/editor/0.015/Editor_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//steinhauer.x10.mx/editor/0.015/Editor/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And here_t_s an example interface object_dd_ _lt_a href_eq__qt_http_dd_//steinhauer.x10.mx/editor/0.015/Editor/interface/leftPanels/Terrain/sculpting.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//steinhauer.x10.mx/editor/0.015/Editor/interface/leftPanels/Terrain/sculpting.js_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sadly the interface is extremely limited_co_ hence the recode. _dd__t_(_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_That_t_s pretty interesting_co_ being able to generate the UI from JSON. However_co_ it doesn_t_t seem to lend itself well to dynamic interfaces which frequently change. (Feel free to prove me wrong) _dd_3_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"joshcamas","Date":"2014-12-08T04:39:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well I_t_ve made the switch from json to javascript_co_ with allows for scripting..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_hence the recode. I need to redesign how each interface section (I call them panels) interact and become more dynamic._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will point out that the code is already somewhat dynamic_co_ as in it changes when you click different buttons. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ And they can be _qt_updated_qt_ (currently just regenerates everything_co_ will eventually be better)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With this system the code can be muchh more dynamic._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_An example of something that is impossible atm but will hopefully be added is_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_em_gt_There is a list that shows all the meshes you have loaded for your project. These meshes are listed by categories_co_ and even categories within those. These groups can be dropped down._lt_/em_gt__lt_/p_gt__lt_p_gt__lt_em_gt_Each mesh has a little image next to it. When you click the mesh text it will display it. There will also be a _t_X_t_ that will _qt_unload_qt_ the mesh._lt_/em_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can see_co_ that is a very complicated interface block. Lots of little chunks. _dd_S _dd_S I_t_m scared to start coding it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DonnyV","Date":"2014-12-09T02:31:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey I_t_ll add my 2 cents since a big part of my day job is UI design._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wingnut is right. Don_t_t do it in canvas. You will just end up replicating what the browser is _lt_/p_gt__lt_p_gt_already good at. Rendering meta tags into a visual interface._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I suggest before typing 1 line of code is to design the interface by drawing it. Its a lot easier to change your interface_lt_/p_gt__lt_p_gt_on paper or in a design app then to re-code something. Plus its much more freeing to trying new things and iterating your design._lt_/p_gt__lt_p_gt_You_t_re not going to get it right the first time or the 5th...maybe the tenth. _sm_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I like to use Balsamiq to do my UI designs. Its very easy to use to focus on spacing and layout._lt_/p_gt__lt_p_gt_Then you can worry about colors_co_ text fonts and what not. You can use it free on there site or buy a seat which is reasonably priced._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//balsamiq.com/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//balsamiq.com/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Theres plenty of frameworks to bind data to your UI that make it super easy too. I like RactiveJS since its template based and has tons of examples. Also it does a great job animating SVG_co_ which could be used for other HUD like features._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.ractivejs.org/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.ractivejs.org/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hope this helps._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]