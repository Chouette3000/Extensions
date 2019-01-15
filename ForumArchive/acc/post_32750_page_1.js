[{"Owner":"thrice","Date":"2017-09-04T17:59:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tQuick question_dd_ Does freezeWorldMatrix need to be called on children meshes to gain full performance benefit_co_ or is freezing a parent mesh enough (I see that the children have different values for isWorldMatrixFrozen_co_ so guessing I need to freeze each child individually_co_ but figured I_t_d make sure before making a bunch of changes that didn_t_t need to be made)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_dd_ Is there a way to measure how many meshes world matrices are being evaluated in the scene_co_ i.e. something like engine.drawCalls for matrices calculations count?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-09-05T00:42:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAppears to be affecting FPS quite a bit_co_ much smoother after freezing children so assuming children need to be frozen individually\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-05T05:23:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is correct. The freezeWorldMatrix needs to be called on each individual meshes.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"thrice","Date":"2017-09-09T20:43:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWord_co_ good to know_co_ thanks\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]