[{"Owner":"HoloLite","Date":"2018-01-23T07:56:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUsing the winmr controllers_co_ how can one register for event callback for the clicked menu button? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-23T21:32:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcontroller.onMenuButtonStateChangedObservable should do the trick _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-01-24T00:49:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe thing is that I don_t_t know where to get the correct reference to the controller object.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did the following\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPrior to this I did call scene.createDefaultVRExperience().\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let controller _eq_ &lt_sm_BABYLON.WindowsMotionController&gt_sm_this._vrHelper.webVRCamera.rightController_sm_\ncontroller.onMenuButtonStateChangedObservable.add((eventData_dd_ BABYLON.ExtendedGamepadButton_co_ eventState_dd_ BABYLON.EventState) _eq_&gt_sm_ {\n                this.menuButtonObserver(eventData_co_ eventState)_sm_\n            })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBut got exception thrown about property of onMenuButtonStateChangedObservable being null.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2018-01-24T03:40:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I found the right place to hook the callback.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis._vrHelper.onControllerMeshLoadedObservable.add(...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would do it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-24T17:17:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyep!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]