[{"Owner":"Ingo Chou","Date":"2015-11-09T08:24:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I use CASTORGUI.GUISelect.addOptions() with this code_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_        var sel _eq_ new CASTORGUI.GUISelect(_qt_testSel_qt__co_ { x_dd_ 5_co_ y_dd_ 10_co_ w_dd_ 200_co_ h_dd_ 40 }_co_ gui_co_ { alert(_qt_click_qt_) }_co_ false)_sm__lt_/div_gt__lt_div_gt_        for (var i _eq_ 0_sm_ i &lt_sm_ 10_sm_ i++) {_lt_/div_gt__lt_div_gt_            sel.addOptions(_qt_value_qt__co_ _qt_text_qt_)_sm_  // ????  _lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_        mywin.add(sel)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_But it seems not work._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_However_co_ it works without    sel.addOptions(_qt_value_qt__co_ _qt_text_qt_)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_How can I use this GUI control method?_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Thanks for your help!_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-09T14:04:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_You must add the elements after the Select Options element was added to the Window element._lt_/div_gt__lt_div_gt_I also made a small correction_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_This is how you do it_dd__lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// Creat selectvar sel _eq_ new CASTORGUI.GUISelect(_qt_testSel_qt__co_ { x_dd_ 5_co_ y_dd_ 25_co_ w_dd_ 200_co_ h_dd_ 20 }_co_ guisystem_co_ function() { alert(_qt_click_qt_)}_co_ false)_sm_ // Creat Windowvar form _eq_ new CASTORGUI.GUIWindow(_qt_form_qt__co_ {x_dd_(guisystem.getCanvasWidth().width / 2 - 100)_co_ y_dd_200 _co_ w_dd_200_co_ h_dd_200}_co_ guisystem)_sm_ // add element Select on Windowform.add(sel)_sm_ // add options an element Selectfor (var i _eq_ 0_sm_ i &lt_sm_ 10_sm_ i++) {    sel.addOptions(_qt_value_qt__co_ _qt_text_qt_)_sm_} // Window visibleform.setVisible(true)_sm_ _lt_/pre_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2015-11-11T14:22:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_OK_co_ thank you for your help!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]