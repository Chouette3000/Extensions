[{"Owner":"zahachtah","Date":"2016-04-27T13:28:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am a total amateur in games_co_ decent in programming but not very good in javascript. BUT_co_ I want to learn and Babylon just seems very easy and intuitive. I understand most demos and was able to make a few scenes myself. So my question_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to try to make a game that talks with my desktop computer using websockets. I am used to programming parallel for scientific use_co_ so I know how to handle it on the server side (going to use julia for fun on the server side..). But where in the general structure of the babylon code would I define the function to make a websocket connection and where do I put the functions to listen and write (listen to server sending position update_co_ write keyboard events and mouse x_co_y coordinates) and update babylon objects such as camera position etc. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for asking such a dumb question_co_ but if anyone would be able to just give a quick idea of how to do this efficiently that would save a few days of googling and reading (would be great to have this in the tutorials too!). I can make a playground demo to share the knowledge then.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyhow_co_ I am fascinated by the opportunities of babylon_co_ not the least for scientific visualisation!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest_co_ Jon\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Boz","Date":"2016-04-27T17:26:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ welcome to this forum ! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI set up a server with NodeJS and socket.io inside a Babylon project. You did the server stuff so I will tell you how I manage client side.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my main file index.php I include all my .js files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgame.js _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var init _eq_ function() {\n\t// Initialise scene\n\tcreateScene()_sm_\n\t\n\t// Load all MODELS\n\tloadModels()_sm_\n\t\n\t// Initialise socket connection\n\tsocket _eq_ io.connect(_qt_http_dd_//localhost_dd_8000_qt_)_sm_\n\t\n\t// Initialise remote players array\n\tremotePlayers _eq_ []_sm_\n\t\n\t// Start listening for socket events\n\tsetEventHandlers()_sm_\n\tsetsocketHandlers()_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis is my main method_co_ where I build the scene_co_ load models_co_ and create socket connection _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSetEventHandlers() function is where I catch clicks on scene_co_ to pick up objects_co_ etc..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSetSocketHandlers is where I listen to server messages !\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var setsocketHandlers _eq_ function()\n{\n\t// socket connection successful\n\tsocket.on(_qt_connect_qt__co_ onsocketConnected)_sm_\n\n\t// socket disconnection\n\tsocket.on(_qt_disconnect_qt__co_ onsocketDisconnect)_sm_\n\n\t// New player message received\n\tsocket.on(_qt_new player_qt__co_ onNewPlayer)_sm_\n\n\t// Player move message received\n\tsocket.on(_qt_move player_qt__co_ onMovePlayer)_sm_\n\n\t// Player removed message received\n\tsocket.on(_qt_remove player_qt__co_ onRemovePlayer)_sm_\n\t\n\t// New chat message received\n\tsocket.on(_qt_new_chat_msg_qt__co_ onNewChatMsg)_sm_\n\n\t// New private chat message received\n\tsocket.on(_qt_new_private_chat_msg_qt__co_ onNewPrivateChatMsg)_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tDoing this_co_ you start listening to server events. The second parameter is the function name which is called when the event is raised.\n_lt_/p_gt_\n\n_lt_p_gt_\n\texample _dd_ a new player connects to the game_co_ the server tells you and you can add it on your side _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function onNewPlayer(data) {\n\tconsole.log(_qt_New player connected_dd_ _qt_+data.id)_sm_\n\n\t// Initialise the new player (_qt_dude_qt_ for everyone else for the moment)\n\tvar newPlayer _eq_ new Player(_qt_dude_qt__co_ data.x_co_ data.z_co_ false)_sm_\n\tnewPlayer.setID(data.id)_sm_\n\n\t// Add new player to the remote players array\n\tremotePlayers.push(newPlayer)_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHere I create a Player object but you can create players as Babylon elements like boxes_co_ spheres_co_ etc..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSecond part _dd_ send info to server\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (localPlayer &amp_sm_&amp_sm_ localPlayer.update(keys)) {\n\t// Send local player data to the game server\n\tsocket.emit(_qt_move player_qt__co_ { pos_dd_ localPlayer.getPosition()_co_ rot_dd_ localPlayer.getRotation() })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis is the way I send new client position to server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWARNING _dd_ this is very basic client-server communication_co_ and not so safe. I prefer to tell people to send client inputs instead of updated positions. But you can manage all data received by server and do it what you want to do _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if this is the answer you were looking for. Good luck for your projects with BabylonJS _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Boz","Date":"2016-04-27T17:29:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHere is the article I learned a lot from _dd_ _lt_a href_eq__qt_http_dd_//buildnewgames.com/real-time-multiplayer/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//buildnewgames.com/real-time-multiplayer/_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"zahachtah","Date":"2016-04-28T08:33:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMany thanks_co_ this will get me on the right track.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]