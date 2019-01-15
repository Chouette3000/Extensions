[{"Owner":"altreality","Date":"2014-12-25T09:36:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do not see any way to draw the box impostor around my mesh(if I am using a box impostor for it) _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It helps find out the reason for unexpected collisions some times._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Would it make sense to automatically create a physics mesh when _lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_setPhysicsState()is called ?  Maybe maintain a reference to this mesh in a member of _lt_/span_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_AbstractMesh like __lt_/span_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_physicsMesh ?_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_      _lt_/span_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_ AbstractMesh.prototype.setPhysicsState _eq_ function (impostor_co_ options) {            var physicsEngine _eq_ this.getScene().getPhysicsEngine()_sm_            if (!physicsEngine) {                return_sm_            }            if (impostor.impostor) {                               options _eq_ impostor_sm_                impostor _eq_ impostor.impostor_sm_            }            impostor _eq_ impostor || BABYLON.PhysicsEngine.NoImpostor_sm_            if (impostor _eq__eq__eq_ BABYLON.PhysicsEngine.NoImpostor) {                physicsEngine._unregisterMesh(this)_sm_                return_sm_            }            options.mass _eq_ options.mass || 0_sm_            options.friction _eq_ options.friction || 0.2_sm_            options.restitution _eq_ options.restitution || 0.9_sm_            this._physicImpostor _eq_ impostor_sm_            this._physicsMass _eq_ options.mass_sm_            this._physicsFriction _eq_ options.friction_sm_            this._physicRestitution _eq_ options.restitution_sm_            this._physicsMesh _eq_ createDownSampledPhysicsMesh()_sm_ &lt_sm_----------------------------------------------            return physicsEngine._registerMesh(this_co_ impostor_co_ options)_sm_        }_sm__lt_/pre_gt__lt_p_gt_This _physicsMesh member too is then updated by the physics plugin inside _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_CannonJSPlugin.prototype.runOneStep _eq_ function (delta) {            this._world.step(delta)_sm_            for (var index _eq_ 0_sm_ index &lt_sm_ this._registeredMeshes.length_sm_ index++) {                var registeredMesh _eq_ this._registeredMeshes[index]_sm_                if (registeredMesh.isChild) {                    continue_sm_                }                // Body position                var bodyX _eq_ registeredMesh.body.position.x_co_ bodyY _eq_ registeredMesh.body.position.y_co_ bodyZ _eq_ registeredMesh.body.position.z_sm_                // _physicsMesh should not use delta_co_ its a faithful copy of the body_t_s position inside the physics engine                registeredMesh.mesh._physicsMesh.position.x _eq_ bodyX _sm_                registeredMesh.mesh._physicsMesh.position.y _eq_ bodyZ _sm_   // flip Y &amp_sm_ Z to account for handedness_co_ apparently this is enough                registeredMesh.mesh._physicsMesh.position.z _eq_ bodyY _sm_                var deltaPos _eq_ registeredMesh.delta_sm_                if (deltaPos) {                    registeredMesh.mesh.position.x _eq_ bodyX + deltaPos.x_sm_                    registeredMesh.mesh.position.y _eq_ bodyZ + deltaPos.y_sm_                    registeredMesh.mesh.position.z _eq_ bodyY + deltaPos.z_sm_                                    } else {                    registeredMesh.mesh.position.x _eq_ bodyX_sm_                    registeredMesh.mesh.position.y _eq_ bodyZ_sm_                    registeredMesh.mesh.position.z _eq_ bodyY_sm_                }                if (!registeredMesh.mesh.rotationQuaternion) {                    registeredMesh.mesh.rotationQuaternion _eq_ new BABYLON.Quaternion(0_co_ 0_co_ 0_co_ 1)_sm_                }                registeredMesh.mesh.rotationQuaternion.x _eq_ registeredMesh.body.quaternion.x_sm_                registeredMesh.mesh.rotationQuaternion.y _eq_ registeredMesh.body.quaternion.z_sm_                registeredMesh.mesh.rotationQuaternion.z _eq_ registeredMesh.body.quaternion.y_sm_                registeredMesh.mesh.rotationQuaternion.w _eq_ -registeredMesh.body.quaternion.w_sm_            }        }_sm__lt_/pre_gt__lt_p_gt__physicsMesh can be created only when the user requests physics draw._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2014-12-25T10:21:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ We don_t_t have an embedded way to do it in our engine. Still_co_ it m_t_s very easy to do it by code like I_t_ve explained in this article_dd_ _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/davrous/archive/2014/11/18/understanding-collisions-amp-physics-by-building-a-cool-webgl-babylon-js-demo-with-oimo-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/davrous/archive/2014/11/18/understanding-collisions-amp-physics-by-building-a-cool-webgl-babylon-js-demo-with-oimo-js.aspx_lt_/a_gt__lt_/p_gt__lt_p_gt_Bye_co__lt_/p_gt__lt_p_gt_David _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"altreality","Date":"2014-12-25T11:57:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks David. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-12-27T18:35:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What about displaying bounding boxes? mesh.showBoundingBox _eq_ true_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"altreality","Date":"2014-12-28T11:08:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah that would work too _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]