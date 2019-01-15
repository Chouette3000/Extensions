[{"Owner":"Dad72","Date":"2013-11-11T14:40:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It would be possible to have the sources of the converter for use in local?_lt_br_gt_I would like to be able to generate the files .Babylon and stored in a specific folder automatically._lt_/p_gt__lt_p_gt_It is for an editor_co_ I would like that the user imports a file .fbx and it is automatically converted to the destination folder._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-11T17:04:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The code is available on github_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/FBX%20-%20OBJ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/FBX%20-%20OBJ_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Feel free to use it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-11T18:03:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am not on to understand everything._lt_br_gt_The code for this link is available or?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//api.babylonjs.com/converter_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//api.babylonjs.com/converter_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am talking about the sources of the online converter. I am not on to be able to do from scratch._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-11T18:14:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is the link I provided. It can run as command line and as a service._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-11T18:19:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am a little lost. You have a tutorial_co_ or explanations of how it all works please._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-11T18:26:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is a C# project. You have to load the .csproj into Visual Studio 2013. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-11T19:09:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi dad72_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you want to_dd_ 1) create a local web app similar to the online creator_co_ or 2 ) are you just looking for a way to automatically convert your .fbx files to .babylon without the need to create a web app ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For 1) _dd_ Deltakosh suggests to open the visual studio project you can retrieve from github._lt_/p_gt__lt_p_gt_For 2) _dd_ You can download the zip file BabylonExport.zip here _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/FBX%20-%20OBJ_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/FBX%20-%20OBJ_lt_/a_gt__lt_/p_gt__lt_p_gt_Extract the zip file somewhere on your computer_co_ you will find a file named BabylonExport.exe. This executable takes two arguments _dd_ the .fbx you want to convert and the folder where the .babylon will be produced._lt_/p_gt__lt_p_gt_For example_co_ open a Windows console (start -&gt_sm_ run -&gt_sm_ cmd)_co_ and try the following command _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_cd &lt_sm_babylon_path&gt_sm_BabylonExporter.exe /i_dd__qt_&lt_sm_path_to_fbx&gt_sm_\\myScene.fbx_qt_ /o_dd__qt_&lt_sm_output_path&gt_sm__lt_/pre_gt__lt_p_gt_Your fbx will be converted to babylon format (if everything is correct on your scene _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/p_gt__lt_p_gt_You can do this automatically by creating a .bat (on windows) and call this previous command line with the right parameters._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you want me to be more precise_co_ I can create a full tutorial on this part. Just ask me !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-11T19:25:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Temechon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for help._lt_/p_gt__lt_p_gt_I am seeking a way to create an HTML page or i want to import a file .fbx and when I submit the form_co_ it converted the file in .Babylon. As the online converter._lt_br_gt_Your command line is for Windows_co_ me I would like to do this via a web interface._lt_br_gt_I want to well a tutorial if you please._lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_------------------------_lt_/p_gt__lt_p_gt_Salut Temechon_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Merci pour l_t_aide._lt_/p_gt__lt_p_gt_Je cherche un moyen de créer une page html ou je veux importé un fichier .fbx et quand je soumets le formulaire_co_ cela convertie le fichier en .babylon. Comme le convertisseur en ligne._lt_br_gt_Votre ligne de commande est pour Windows_co_ moi je souhaite le faire par une interface web._lt_br_gt_Je veux bien un tutoriel s_t_il vous plaît._lt_/p_gt__lt_p_gt_Merci_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-11T19:50:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ for that you have to use the visual studio project in github. I hope your web application is in C#_co_ otherwise you will have to do all from scratch_co_ and it_t_s a big project _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-11T19:57:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No my application is in JS/PHP/SQL/AJAX/JQUERY_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But the online converter is done in HTML how do i do the same._lt_br_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/converter.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/converter.html_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-11T20:25:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think the front end is html_co_ but the back end is C#... Deltakosh can confirm that._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-11T21:44:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It is what is on the back that interests me. How it works when we validated the form. That is what i request from the beginning._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-12T06:34:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Indeed_co_ the web application sources are not in the Github project... But basically_co_ you will just have only one class that unzip the uploaded file in a temporary folder_co_ call the BabylonExporter.exe located on your server_co_ and zip the output babylon file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe Deltakosh can provide you with the source._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-12T13:29:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank You Temechon._lt_br_gt_Yes_co_ it would be well indeed. That is what I was wondering at the opening of the subject._lt_br_gt__lt_br_gt_@Deltakosh_dd_ it is possible to offer me the sources of Web application ( online converter) please? As confirmed by Temechon_co_ this source of Web applications is not available. It is that which I asked you at the beginning of this topic. I may be poorly explained. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you in advance_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"pierlag","Date":"2013-11-12T22:21:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The website is only a static html page connected to API_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_form name_eq__qt_form1_qt_ method_eq__qt_post_qt_ action_eq__qt_converter_qt_ enctype_eq__qt_multipart/form-data_qt_&gt_sm_&lt_sm_input name_eq__qt_myFile_qt_ type_eq__qt_file_qt_ /&gt_sm_        &lt_sm_input type_eq__qt_submit_qt_ value_eq__qt_Upload_qt_ /&gt_sm_&lt_sm_/form&gt_sm__lt_/pre_gt__lt_p_gt_The MVC API Controler in C# used a pipe to connect to console running App on server session open_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_public class ServiceProxy _dd_ ClientBase&lt_sm_IService&gt_sm_    {        public ServiceProxy()            _dd_ base(new ServiceEndpoint(ContractDescription.GetContract(typeof(IService))_co_                new NetNamedPipeBinding()_co_ new EndpointAddress(_qt_net.pipe_dd_ / / localhost/exportservice_qt_)))        {        }        public bool InvokeConvert(string file_co_ string outputName)        {            return Channel.Convert(file_co_ outputName)_sm_        }    }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-13T00:18:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi and thank You pierlag._lt_/p_gt__lt_p_gt_I think I will do otherwise. I will use a .bat file like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_set curdir _eq_ %CD%BabylonExport.exe  /i_dd__qt_Assets\\A_convertir\\epee.fbx_qt_ /o_dd__qt_Assets\\Convertis_qt__lt_/pre_gt__lt_p_gt_By against another question. When we converted a fbx file in .Babylon_co_ the images are rename in 1.png_co_ 2.png_co_ 3.png ..._lt_/p_gt__lt_p_gt_Why the names of the images does not remain appointed as they are?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-13T07:59:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The names are those provided by the fbx _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-13T11:39:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No_co_ when I converted my file .fbx_co_ all the textures have been copied to the destination folder and renamed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_sw_dusk&amp_sm_down.dds_lt_/strong_gt_ -&gt_sm_ après la conversion _lt_strong_gt_1.jpg_lt_/strong_gt__lt_/p_gt__lt_p_gt__lt_strong_gt_wp_blade01.dds_lt_/strong_gt_ -&gt_sm_ after conversion _lt_strong_gt_2._lt_strong_gt_jpg_lt_/strong_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt__lt_strong_gt_wp_hilt04.dds_lt_/strong_gt_ -&gt_sm_ after conversion _lt_strong_gt_3._lt_strong_gt_jpg_lt_/strong_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_May be that the character _ and &amp_sm_ renames the images (just an idea)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2013-11-13T13:02:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can use PHP to execute whatever program you want on your server. Just upload the files to whatever directory you want_co_ then call a shell / comand line function from PHP to convert the files._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_French_dd_ _lt_a href_eq__qt_http_dd_//us3.php.net/manual/fr/book.exec.php_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//us3.php.net/manual/fr/book.exec.php_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If your server is running something other than windows_co_ you would need to tweak the conversion program to run on your web server_t_s distro._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-13T14:05:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_My serveur is Linux. But I have abandoned this idea._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My problem now _dd_  when I converted my file .fbx_co_ all the textures have been copied to the destination folder _lt_strong_gt_and renamed._lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_sw_dusk&amp_sm_down.dds_lt_/strong_gt_ -&gt_sm_ après la conversion _lt_strong_gt_1._lt_strong_gt_jpg_lt_/strong_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt__lt_strong_gt_wp_blade01.dds_lt_/strong_gt_ -&gt_sm_ after conversion _lt_strong_gt_2._lt_strong_gt_jpg_lt_/strong_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt__lt_strong_gt_wp_hilt04.dds_lt_/strong_gt_ -&gt_sm_ after conversion _lt_strong_gt_3._lt_strong_gt_jpg_lt_/strong_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_May be that the character _ and &amp_sm_ renames the images (just an idea)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2013-11-13T14:18:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_we can use DDS textures with babylon?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-13T14:24:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh yes! You_t_re right!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The exporter renames the textures _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I can remember now_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-13T14:25:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is related to the fact that XNA FBX exporter didn_t_t transmit the texture names _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2013-11-13T16:56:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is a bug?_lt_br_gt_You can resolve it?_lt_br_gt__lt_br_gt_Thank You_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-13T19:17:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Right now DDS are not supported because they depend on a WebGL extension_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@dad72_dd_ this is not a bug. We cannot do differently because we are based on XNA FBX exporter which does not preserve texture name_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]