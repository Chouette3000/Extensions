[{"Owner":"Dad72","Date":"2014-02-01T14:37:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a problem that is quite strange. I used script _qt_Manipulator_qt_ of Babylon and when I select an object and that I moved_co_ the first movement of 1px retrieves well the positions of the object. But in the second px of movement i have a _qt_null_qt_ value. My model start at the position Y 6.3 and has a null value immediately the first movement._lt_/p_gt__lt_p_gt_Here is what I have in the console_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And here is the code of this or found the problem._lt_/p_gt__lt_p_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_     BABYLON.Manipulator.prototype._mouveObjectFromVector _eq_ function (vector_co_ evt) {        var vFromRay _eq_ this._getMouseRay(evt.clientX_co_ evt.clientY - 33_co_ this.mouseInfo.onDownObject)_sm_        var vToRay _eq_ this._getMouseRay(this.mouseInfo.movePosX_co_ this.mouseInfo.movePosY_co_ this.mouseInfo.onDownObject)_sm_        var iDiff _eq_ vToRay.origin.subtract(vFromRay.origin)_sm_        var distance _eq_ BABYLON.Vector3.Distance(vFromRay.origin_co_ vToRay.origin)_sm_                console.log(this.mesh.position[vector])_sm_ // Error                if (iDiff[vector] &gt_sm_ 0) {                                    this.mesh.position[vector] -_eq_ distance * this.positiopnMeshMulti_sm_ // Error            this.manipulate.position[vector] -_eq_ distance * this.positiopnMeshMulti_sm_            this.pickedPoint[vector] -_eq_ distance * this.positiopnMeshMulti_sm_                    }        else {                        this.mesh.position[vector] +_eq_ distance * this.positiopnMeshMulti_sm_ // Error            this.manipulate.position[vector] +_eq_ distance * this.positiopnMeshMulti_sm_            this.pickedPoint[vector] +_eq_ distance * this.positiopnMeshMulti_sm_        }    }_sm__lt_/pre_gt_ _lt_p_gt_Can you explain to me what is happening please. Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-02-01T18:44:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I discovered what could cause the problem of value _t_null_t__dd_ 6.30.10****.10**** on the position.y  (axis X and Z_dd_ no probleme)_lt_/p_gt__lt_p_gt_There are several comma then a null value_co_ and then it restarts at 0._lt_br_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt__lt_span_gt_Start _lt_span_gt_Move Axis Y  _eq_&gt_sm_ _lt_/span_gt_6.3_lt_/span_gt__lt_/p_gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_span_gt_Move Axis Y           _eq_&gt_sm_ 6.30.107990675891862090.10799067589186209_lt_/span_gt__lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_span_gt__lt_span_gt_Move Axis Y           _eq_&gt_sm_ _lt_/span_gt_null_lt_/span_gt__lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_span_gt__lt_span_gt_Move Axis Y           _eq_&gt_sm_ _lt_/span_gt_0.48_lt_/span_gt__lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_div_gt__lt_div_gt__lt_div_gt__lt_span_gt__lt_span_gt_Move Axis Y           _eq_&gt_sm_ _lt_/span_gt_3.5344375434211606_lt_/span_gt__lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_div_gt__lt_span_gt__lt_span_gt_Move Axis Y           _eq_&gt_sm_ _lt_/span_gt_3.75_lt_/span_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Then I understood that it was minimum 2 digit after the comma. I have therefore put 6.31 my model on the Y-axis and it solved the problem_co_ as by magic._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Fixe_dd__lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.Manipulator.prototype._mouveObjectFromVector _eq_ function (vector_co_ evt) {        var vFromRay _eq_ this._getMouseRay(evt.clientX_co_ evt.clientY  - 33_co_ this.mouseInfo.onDownObject)_sm_        var vToRay _eq_ this._getMouseRay(this.mouseInfo.movePosX_co_ this.mouseInfo.movePosY_co_ this.mouseInfo.onDownObject)_sm_        var iDiff _eq_ vToRay.origin.subtract(vFromRay.origin)_sm_        var distance _eq_ BABYLON.Vector3.Distance(vFromRay.origin_co_ vToRay.origin)_sm_         this.mesh.position[_qt_x_qt_] _eq_ parseFloat(this.mesh.position.x)_sm_ // Add line        this.mesh.position[_qt_y_qt_] _eq_ parseFloat(this.mesh.position.y)_sm_ // Add line        this.mesh.position[_qt_z_qt_] _eq_ parseFloat(this.mesh.position.z)_sm_ // Add line        if (iDiff[vector] &gt_sm_ 0) {                                    this.mesh.position[vector] -_eq_ parseFloat(parseFloat(distance) * this.positiopnMeshMulti)_sm_ // Add parseFloat()             this.manipulate.position[vector] -_eq_ parseFloat(parseFloat(distance) * this.positiopnMeshMulti)_sm_ // Add parseFloat()             this.pickedPoint[vector] -_eq_ parseFloat(parseFloat(distance) * this.positiopnMeshMulti)_sm_ // Add parseFloat()                     }        else {                        this.mesh.position[vector] +_eq_ parseFloat(parseFloat(distance) * this.positiopnMeshMulti)_sm_ // Add parseFloat()             this.manipulate.position[vector] +_eq_ parseFloat(parseFloat(distance) * this.positiopnMeshMulti)_sm_ // Add parseFloat()             this.pickedPoint[vector] +_eq_ parseFloat(parseFloat(distance) * this.positiopnMeshMulti)_sm_ // Add parseFloat()         }    }_sm__lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]