[{"Owner":"Chimpana","Date":"2018-11-04T02:41:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m having some trouble getting a 2D layer included in CreateScreenshotUsingRenderTarget.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCreateScreenshot includes a BABYLON.Layer background texture when a screenshot is created_co_ however CreateScreenshotUsingRenderTarget leaves it as transparent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to get the background to draw for CreateScreenshotUsingRenderTarget?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve created a playground to demonstrate_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#P70R9J%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#P70R9J#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-05T18:29:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBecause CreateScreenshotUsingRenderTarget use render targets_co_ you cannot capture features not rendered in the RT.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you mentioned_co_ you can use the CreateScreenshot function for that (and use the successCallback function to get the data back and why not store it into your own dynamic texture?)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Chimpana","Date":"2018-11-08T08:42:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Delta – I_t_ll play around with dynamic textures...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]