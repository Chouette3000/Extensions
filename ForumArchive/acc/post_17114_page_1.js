[{"Owner":"MidnightCow","Date":"2015-09-12T17:44:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m literally brand new to WebGL and BabylonJS ( although already a programmer and 3d artist )_co_ but having a lot of fun learning it_co_ great job on the engine/api so far guys._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What i_t_m trying to figure out_co_ is if there is a way to discover the rgb texture value where the mouse has been clicked.._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Having a look at PickingInfo_co_ it looks as though getTextureCoordinates() might be used to read the position on a bitmap texture for example ( just wild theories at this point of course )_co_ although i can see no way to access the rgb data of a bitmap or texture object anywhere in the Babylon API.  Any idea if this might be possible?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically what i_t_m trying to achieve is - i have an object_co_ with a texture on it_co_ and i would like the user to be able to click on different parts of the object to make stuff happen.  So i was thinking_co_ if the texture had say a blue area_co_ the user clicks on the blue_co_ it does something_co_ they click on a red part_co_ it does something else.._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The other more obvious way i think to achieve this would be to either break the object up into separate clickable meshes and go from there_co_ or have invisible hotspot meshes that detected clicks in specific areas..  But i just wanted to try and figure out if this would be possible.  Texture hotspots based on colour would be a handy thing to have for general interactivity.._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-13T01:55:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello and welcome!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_the best option is to create a HTML IMG object to load your picture_co_ write it into a canvas and then using texture coordinates you got from the picking read the color_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-09-15T03:13:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  I was goofing around with this a bit...  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#2KUCI_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#2KUCI_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tref_dd_  _lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a colorful diffuseTexture on the ground_co_ and that same image is used in a memory-only canvas... but I just can_t_t get the data members to show anything but 0 0 0 0 for a picked color.  This is my first time trying this_co_ so mistakes are almost certain.  Help/discoveries welcome.  Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MidnightCow","Date":"2015-09-16T23:05:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think i replied to this in my head without actually replying!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for the suggestion Deltakosh_co_ Wingnut that looks like a good start_co_ i_t_m going to have a good at what you_t_ve did there and play around with it_co_ will post here if i have any luck _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]