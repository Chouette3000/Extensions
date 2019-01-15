[{"Owner":"Pranav Sathy","Date":"2016-03-25T02:42:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have updated the repository to use Typescript _co_ did a few changes to the layout_co_ and also successfully UV unwrapped the sphere and textured it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_. It uses a Miller Sphere Projection_co_ normalized and converted to UV coordinates (nothing fancy). I am working on procedural terrain generation now_co_ which I can then use to deform the mesh as a heightmap. The stretch goal here is procedurally generate a diffuse texture as well. Screens to come soon (once I get continents working)... but school is a huge hamper _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt__gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pranav Sathy","Date":"2016-04-04T20:11:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlright_co_ update for the week guys! I have finished the Continent generation utilizing Simplex noise and some fine tuning. What is even better is after some research I got the procedural terrain to be tileable (which is important for my sphere since we want continuous_co_ natural looking continents). It has turned out really nice so far_co_ and with a little bit more work it will truly be amazing _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_. As usual_co_ here is a screenshot that shows a debug pane with the procedurally generated texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe TODO now is_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tDeform the mesh vertices based on the Greyscale heightmap so that we have some more natural looking landmasses.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tImprove coloring algorithm so it is not just a binary (land / water). Furthermore_co_ seed varying biomes and propagate appropriate coloring. \n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t*Thought*_dd_ Create a new sphere_co_ scale it to the same size as the existing one pre-deformation_co_ and add a water shader to have real ocean?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tRivers... they need to happen lol.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tAdd some kind of nice_co_ subtle space-like scene skybox/coloring. \n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_7169_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/5702ca5e71345_ContinentGeneration.png.36ecabc2781fbae70988af95e639479f.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_Continent Generation.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7169_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/5702ca609f707_ContinentGeneration.thumb.png.057c7a1ee3e2a5a54d290cb7fb59e524.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUPDATE_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdded a new heightmap debug pane_co_ and *gradient based rendering*. This let me dynamically and quickly create nearly infinite coloring schemes for my planets_co_ by just adding a 0 to [heightmap max] scale gradient of colors. Below is the updated screen shot_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_7171_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57032c578209c_GradientBasedRender.png.e162634ba4e44c5b0926dd7714229af1.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_Gradient Based Render.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7171_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57032c58b933d_GradientBasedRender.thumb.png.2abcce8593cab9f793bd7f8914154346.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-05T15:49:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tExcellent!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eboo","Date":"2016-04-06T17:02:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\touch how is fps?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pranav Sathy","Date":"2016-04-07T05:16:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_124020_qt_ data-ipsquote-contentid_eq__qt_21206_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1459962153_qt_ data-ipsquote-userid_eq__qt_18969_qt_ data-ipsquote-username_eq__qt_eboo_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ eboo said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\touch how is fps?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt seems to be running at a solid 50 fps_co_ I suppose it could be better however I am not entirely sure how to make it higher o.0. Right now I am trying to get some form of thin plate interpolation working in Javascript_co_ I tried to import the npm module _qt_thinplate_qt_ but LAPACK (linear algebra processor) is not available on the browser. I want to utilize to create n-dimension gradients for coloring realistic planets. _lt_br /_gt__lt_br /_gt_\n\tIt is quickly seeming like that might not be a reality however. I intended to use it for more varying biomes (jungles_co_ tundra_co_ desert_co_ etc.). If anyone is free to work on improving the FPS or tips or tricks to do so_co_ perhaps offset stuff to the GPU_co_ that would be super awesome! Thanks! Hope to keep everyone updated shortly.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eboo","Date":"2016-04-07T10:15:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti can spend few time on it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand try to expand it with LOD levels_co_ have you a playground updated?.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pranav Sathy","Date":"2016-04-07T17:49:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_124125_qt_ data-ipsquote-contentid_eq__qt_21206_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1460024132_qt_ data-ipsquote-userid_eq__qt_18969_qt_ data-ipsquote-username_eq__qt_eboo_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t7 hours ago_co_ eboo said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\ti can spend few time on it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tand try to expand it with LOD levels_co_ have you a playground updated?.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo not yet_co_ I converted everything to TypeScript awhile ago_co_ and it relies on several files (it would not be a simple playground). I would suggest cloning the repo_co_ installing `npm` and `typescript`_co_ and just compiling and running the code. Sorry _dd_/\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pranav Sathy","Date":"2016-04-09T21:01:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Everyone_co__lt_br /_gt__lt_br /_gt_\n\tHere is this weeks update! I got biomes working and refactored the whole code to make it a lot more modular and clear where procedural generation is taking place and what it is being used for (i.e inside the terrain folder). It is not flawless_co_ and if anyone can suggest improvements_co_ it would be much appreciated. So let me take you through the process... first thing first_co_ I had to square away coloring. _lt_br /_gt__lt_br /_gt_\n\tSo the first step was taking a Whittaker diagram (_lt_a href_eq__qt_http_dd_//w3.marietta.edu/~biol/biomes/biome_main.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//w3.marietta.edu/~biol/biomes/biome_main.htm_lt_/a_gt_) and translated it into a 2D gradient utilizing Bilinear Interpolation. This allowed me to quickly grab a color based on temperature and rain data that I could generate. Below is a screen of the rendered Whittaker gradient._lt_br /_gt__lt_br /_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57096aa93ab9e_BiomeGradient.png.5931f8281a5db2630a6a2836b9b0ebc5.png_qt_ data-fileid_eq__qt_7236_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7236_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57096aacc16a8_BiomeGradient.thumb.png.92c92889219a21784518a8dcd8b285e3.png_qt_ alt_eq__qt_Biome Gradient.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce this gradient was finished_co_ it was time to start the easier of the next 2 tasks_co_ temperature gradients. I decided to take a fairly traditional approach to this_co_ and made it a very simple temperature band going from -10 degrees Celsius at the poles to 40 degrees Celsius at the equator. In order to give it a more organic feel_co_ I actually utilized Simplex Noise for distortion. Here is a screen of the temperature gradient with a distortion of maximum of 40 degrees Celsius. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57096b82dc41f_TemperatureGradient.png.ad302dab8af033170ad06907cee94794.png_qt_ data-fileid_eq__qt_7237_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7237_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57096b843794e_TemperatureGradient.thumb.png.5b470552fa48929df22cae7f0816a43b.png_qt_ alt_eq__qt_Temperature Gradient.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is where I kind of got lazy_co_ I couldn_t_t really get a rainmap based on the heightmap no matter how much it tried it just ended up looking bad. The idea was to capture the _qt_Orographic Effect_qt__co_ which is the notion that there are dry zones due to the effects of high elevation and wind direction. I decided to just go with the Simplex Noise again and just lowered the frequency to have more contiguous areas. It is kinda bleh_co_ but here is a sample rainmap_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57096c067bdd7_RainmapGradient.png.8e9afc04ead64997a4592ecfb57ab6a7.png_qt_ data-fileid_eq__qt_7238_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7238_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57096c0821b33_RainmapGradient.thumb.png.4e5e8222bb98e38cedff6fe88e0f9628.png_qt_ alt_eq__qt_Rainmap Gradient.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo here is where it got interested_co_ the coloring looked nice on land_co_ but the beaches from the previous update looked _t_bleh_t_ when blended into the various biomes_co_ especially in the polar region. So I did some extra logic to begin interpolation along the coast line from the 1D calculated color (pure height map) to the 2D calculated color (Whittaker biome)_co_ which resulted in a much more natural looking coastal line for each biome. Furthermore_co_ I took the inverse of the heightmap and multiplied it to the rainmap to represent the notion that coastal areas (or areas near water) generally receive more rain. Interestingly enough_co_ if I scaled the normalized heightmap before using to adjust the rainmap_co_ I could artificially decide whether jungles / temperate zones / deserts dominated the map. I called this the _qt_PARCHMENT FACTOR_qt_. Finally_co_ to make mountains look better I interpolated their bases into the surrounding biome_co_ and to add a further touch_co_ I interpolated from dirty colored mountain bases to rocky mountain bases the colder the temperate got. I hope this all made sense_co_ but here are the final two screens_dd__lt_br /_gt__lt_br /_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57096d011f352_ProceduralDiffuseTexture.png.d4a5180b231c5c933c2a2a0df1582142.png_qt_ data-fileid_eq__qt_7239_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7239_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/57096d03cc0b0_ProceduralDiffuseTexture.thumb.png.0634c0bca18dacbb01ef9b1cbb2decbe.png_qt_ alt_eq__qt_Procedural Diffuse Texture.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Planet.png.7ed2bd84c7798c12c10da5f9a07cdaf7.png_qt_ data-fileid_eq__qt_7240_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7240_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_04/Planet.thumb.png.f65d1b0821a43fcebab873f51190aee9.png_qt_ alt_eq__qt_Planet.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to think it is coming along rather well_co_ the potential improvements to be made on this update are the following_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tThe poles are a little messed up_co_ the normals cause the tiles to jump a little.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tThe rain map eventually has to be made more organic_co_ I would prefer not Noise_co_ but rather a calculated gradient based on elevation and temperature.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tI should make all the procedural terrain generation kind of classes into subclasses of a MapData super class_co_ since they all seem to share common characteristics.\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tTell me what you think! - Pranav\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-04-10T16:25:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is really beautiful. Can_t_t wait to see it live_dd_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]