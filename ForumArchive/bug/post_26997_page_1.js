[{"Owner":"KevinBLT","Date":"2016-12-12T10:09:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if this is something that could be merged into github but we had some projects (and therefore customers) that\n_lt_/p_gt_\n\n_lt_p_gt_\n\twere highly loaded with objects_co_ thus a bit slow in rendering.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe camera inertia was then to long lasting to control the camera if you know what I mean.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is what I_t_ve changed to handle this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Inertia\n            var engineDelta _eq_ Math.min(this.getEngine().deltaTime_co_100)_co_ inertiaFactor _eq_ Math.min(1_co_16.66666 / engineDelta)_sm_\n\n            if (this.inertialAlphaOffset !_eq__eq_ 0 || this.inertialBetaOffset !_eq__eq_ 0 || this.inertialRadiusOffset !_eq__eq_ 0) {\n                \n                this.alpha +_eq_ (this.beta &lt_sm__eq_ 0 ? -this.inertialAlphaOffset _dd_ this.inertialAlphaOffset) / inertiaFactor_sm_\n                this.beta +_eq_ this.inertialBetaOffset     / inertiaFactor_sm_\n                this.radius -_eq_ this.inertialRadiusOffset / inertiaFactor_sm_\n                \n                this.inertialAlphaOffset  *_eq_ this.inertia * inertiaFactor_sm_\n                this.inertialBetaOffset   *_eq_ this.inertia * inertiaFactor_sm_\n                this.inertialRadiusOffset *_eq_ this.inertia * inertiaFactor_sm_\n\n                if (Math.abs(this.inertialAlphaOffset) &lt_sm_ BABYLON.Engine.Epsilon)\n                    this.inertialAlphaOffset _eq_ 0_sm_\n                if (Math.abs(this.inertialBetaOffset) &lt_sm_ BABYLON.Engine.Epsilon)\n                    this.inertialBetaOffset _eq_ 0_sm_\n                if (Math.abs(this.inertialRadiusOffset) &lt_sm_ BABYLON.Engine.Epsilon)\n                    this.inertialRadiusOffset _eq_ 0_sm_\n            }\n            // Panning inertia\n            if (this.inertialPanningX !_eq__eq_ 0 || this.inertialPanningY !_eq__eq_ 0) {\n                if (!this._localDirection) {\n                    this._localDirection _eq_ BABYLON.Vector3.Zero()_sm_\n                    this._transformedDirection _eq_ BABYLON.Vector3.Zero()_sm_\n                }\n                this.inertialPanningX *_eq_ this.inertia * inertiaFactor_sm_\n                this.inertialPanningY *_eq_ this.inertia * inertiaFactor_sm_\n\n                if (Math.abs(this.inertialPanningX) &lt_sm_ BABYLON.Engine.Epsilon)\n                    this.inertialPanningX _eq_ 0_sm_\n                if (Math.abs(this.inertialPanningY) &lt_sm_ BABYLON.Engine.Epsilon)\n                    this.inertialPanningY _eq_ 0_sm_\n                this._localDirection.copyFromFloats(this.inertialPanningX / inertiaFactor_co_ this.inertialPanningY / inertiaFactor_co_ 0)_sm_\n                this._viewMatrix.invertToRef(this._cameraTransformMatrix)_sm_\n                BABYLON.Vector3.TransformNormalToRef(this._localDirection_co_ this._cameraTransformMatrix_co_ this._transformedDirection)_sm_\n                this.target.addInPlace(this._transformedDirection)_sm_\n            }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt rotates by the given inertia amount depending on the time that proceeded during the renderings.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var engineDelta _eq_ Math.min(this.getEngine().deltaTime_co_100)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tis to avoid big camera jumps on frames that last longer than 100ms. In our project the render loop doesn_t_t run continuesly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf someone likes to test this and/or push it into babylon I would be glad to have contributed a small thing _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf not it_t_s also completely okay as it_t_s only needed in our project(s)! _sm_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBest regards\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKevin\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-12T16:45:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPlease do a PR this is really helpful\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd a great idea!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]