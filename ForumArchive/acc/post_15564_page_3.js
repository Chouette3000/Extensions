[{"Owner":"iiceman","Date":"2015-11-02T15:19:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_in the example you have this line_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var texcoords _eq_ pickResult.getTextureCoordinates()_sm__lt_/pre_gt__lt_p_gt_The variable texcoords now has an object that contains the x and y coordinates on the texture. So this is where the next point will be drawn in the example_co_ but you can do with this whatever you want._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is that waht you need?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neelepl87","Date":"2015-11-02T16:12:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi iiceman_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried to put alert to see what are the coordinate _lt_span_gt__t_texcoords_t_ _lt_/span_gt_ is printing. Seems like it is not holding some points on the drawn curve. For example if I manage to draw a line with mouse from ( 1_co_2) to (5_co_2)_co_ I want some way to get points - (1_co_2)_co_ (3_co_2) and (5_co_2). s there any way to get it ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks again._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-11-02T16:18:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think it should... take a look at this_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%2361_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#61_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It logs the coordinates in your browsers debug console when drawing. To get the x-value you could also write texcoords.x and for y-value texcoords.y. It_t_s just that it_t_s writing that object 60 times per second... but you said as many points as possible _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-07-14T06:20:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\they _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12304_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/_qt_ rel_eq__qt__qt__gt_@iiceman_lt_/a_gt_ I thought your playground example was cool so I made a multi-player version of it here  _lt_a href_eq__qt_http_dd_//www.punkoffice.com/webiverse_qt_ rel_eq__qt_external nofollow_qt__gt_www.punkoffice.com/webiverse_lt_/a_gt_  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//hosting.punkoffice.com/pics/canvas.jpg_qt_ alt_eq__qt_canvas.jpg_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIts not perfect though.  There can be problems when 2 people work on it at the same time.  Some changes get lost.  I_t_m working on ways to improve it.  Everything is so much harder when its multiplayer _dd_/ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-07-15T03:59:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHmm....I_t_m not as happy as I was yesterday.  This anonymous user keeps drawing penises and some Polish guy drew a big red swastika.  This is what happens when you open it to the world.  You attract savages!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-15T04:34:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_136120_qt_ data-ipsquote-contentid_eq__qt_15564_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1468555185_qt_ data-ipsquote-userid_eq__qt_12544_qt_ data-ipsquote-username_eq__qt_ozRocker_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t33 minutes ago_co_ ozRocker said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHmm....I_t_m not as happy as I was yesterday.  This anonymous user keeps drawing penises and some Polish guy drew a big red swastika.  This is what happens when you open it to the world.  You attract savages!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tdon_t_t care for rude people and be happy _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2016-07-15T04:38:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_136122_qt_ data-ipsquote-contentid_eq__qt_15564_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1468557258_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tdon_t_t care for rude people and be happy _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe problem is everyone that logs in will see it and might leave straight away_co_ or hold me responsible.  This guy uses a lot of different IP addresses so he_t_s hard to track.  I_t_m checking online for penis drawing (not photo) detection algorithm but apparently its not so easy.  Nintendo spent weeks creating a filter for it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2016-07-15T08:13:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ it_t_s probably impossible since pretty much everything can look like a penis_co_ maybe somebody just wanted to draw a puppy_dd_ _lt_a href_eq__qt_http_dd_//www.collegehumor.com/post/6972887/literally-everything-is-shaped-like-a-penis_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.collegehumor.com/post/6972887/literally-everything-is-shaped-like-a-penis_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could hide the content and show a notice that the content on the board is user generated and you don_t_t take responsibility for it and only show it after the user confirmed that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]