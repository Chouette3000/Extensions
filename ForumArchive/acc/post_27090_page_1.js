[{"Owner":"Dad72","Date":"2016-12-15T16:43:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a function to remove an effect for particles?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can create it with engine._lt_em_gt_createEffectForParticles()_lt_/em_gt__co_ but I can not find_lt_em_gt_ engine.removeEffectForParticles()_lt_/em_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI saw that we could do it with _customEffect But can we do otherwise?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var effect _eq_ engine.createEffectForParticles(_qt_myEffect_qt__co_ [_qt_time_qt_])_sm_\nvar particleSystem _eq_ new BABYLON.ParticleSystem(_qt_particles_qt__co_ 2000_co_ scene_co_ effect)_sm_\n\nparticleSystem._customEffect _eq_ null_sm_ // remove\n\nparticleSystem._customEffect _eq_ effect_sm_ // re add_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-15T22:11:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNope this is the only way\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-12-16T02:07:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk_co_ thank you for your answer.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]