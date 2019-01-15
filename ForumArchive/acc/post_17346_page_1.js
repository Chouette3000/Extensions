[{"Owner":"JCPalmer","Date":"2015-09-22T14:44:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have had an intermittent error_co_ in one of my sample scenes.  Could never reproduce it on command till now.  This has been happening for a long time_co_ not just 2.2_co_ though I am using this mornings 2.2.max in the link below._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Have been testing new versions of POV &amp_sm_ MOPRH extensions.  In this scene_co_ there are a group of buttons_co_ which deform the plane mesh.  The mesh is pickable_co_ so that you can click on it after pressing the _t_Conflict_t_ button &amp_sm_ reset it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Everything works_co_ if and only if you put the cursor over the mesh _lt_strong_gt_Before _lt_/strong_gt_you press any of the buttons.  If a deform occurs first_co_ you get a console error when the mouse moves over the mesh_co_ and it does not change to a pointing hand._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUeXlkcGtoT1duTEU/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//googledrive.com/host/0B6-s6ZjHyEwUeXlkcGtoT1duTEU/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The error is _t_vertex1 is undefined_t__co_ as shown on the last line below.  I am in the process of upgrading MORPH_co_ if there was something I should do_co_ that would be fine.  Problem is what.  Thanks._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        Ray.prototype.intersectsTriangle _eq_ function (vertex0_co_ vertex1_co_ vertex2) {            if (!this._edge1) {                this._edge1 _eq_ Vector3.Zero()_sm_                this._edge2 _eq_ Vector3.Zero()_sm_                this._pvec _eq_ Vector3.Zero()_sm_                this._tvec _eq_ Vector3.Zero()_sm_                this._qvec _eq_ Vector3.Zero()_sm_            }            vertex1.subtractToRef(vertex0_co_ this._edge1)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-09-22T15:10:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Of course_co_ I needed to go through the exercise of publishing a test &amp_sm_ posting a topic to realize that this probably a result of the_lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_ Mesh.updateVerticesDataDirectly_lt_/span_gt_ calls.  There is eventually a setting of the of the original _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_VerfexBuffer._data_lt_/span_gt_ to null_co_ which might be too aggressive.  The goal of direct updates was to fully process in Float32Arrays and take a short cut_co_ and avoid all the short lived garbage generation needed. Made SIMD interpolation simple as well._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Think_co_ chucking all the non-typed array data for 2.3_co_ might be a good idea_co_ with almost no rework outside of switching args in Typescript from number[] to Float32Array or Uint16Array.  The data would then stored closer to GPU transfer format already._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]