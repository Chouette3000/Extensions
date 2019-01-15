[{"Owner":"NickHod","Date":"2018-02-27T17:40:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a fairly complex 3ds Max model that_co_ in 3ds Max_co_ is grouped into a parent layer and 5 child layers. I export this to babylon format using the 3ds Max plugin and end up with dozens of separate meshes from the import._lt_br /_gt_\n\tIn my app I need about 300 of these models.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I parent the imported meshes to a simple box_co_ then clone 300 times_co_ my frame rate drops to 2-5 fps._lt_br /_gt_\n\tIf I merge all the imported meshes into one mesh with MergeMeshes_co_ then use .createInstance() 300 times_co_ my frame rate remains at 60 ftps. However_co_ the model is now only show with texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat_t_s the best way to achieve 300 instances of this model_co_ but textured properly?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve looked at MultiMaterial_co_ but it_t_s unclear how I_t_d know vertex indices._lt_br /_gt_\n\tI considered looping through all the meshes in the babylon file. sorting them into meshes that use the same texture_co_ then using MergeMeshes on those. I_t_d still have more meshes than is ideal.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a smart MergeMeshes function out there that takes care of multiple materials?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre there any other solutions that I_t_m missing?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-27T18:12:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou will be forced to have separated meshes if you have multiple materials. But you can try to merge meshes based on material and then instantiate from there\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso you may want to try to have only one material for all meshes and then play with UV to apply the changes you need\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]