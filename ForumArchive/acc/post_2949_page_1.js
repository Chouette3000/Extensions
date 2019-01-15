[{"Owner":"JulienGobin","Date":"2014-01-07T10:20:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_First of all_co_ happy new year and thanks for this amazing webgl engine._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I noticed the view matrix of the camera is computed for each frame when BABYLON.Camera.prototype.getViewMatrix is called by BABYLON.Scene.prototype._renderForCamera (called by BABYLON.Scene.prototype.render)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BABYLON.Camera.prototype.getViewMatrix is in two parts_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_this._computedViewMatrix _eq_ this._getViewMatrix()_sm_// BABYLON.Camera.prototype._getViewMatrix is overrided in sub-classes (ArcRotateCamera and FreeCamera compute for each frame a matrix and return it)_lt_/pre_gt__lt_p_gt_and_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if (this.parent &amp_sm_&amp_sm_ this.parent.getWorldMatrix) {            if (!this._worldMatrix) {                this._worldMatrix _eq_ BABYLON.Matrix.Identity()_sm_            }            this._computedViewMatrix.invertToRef(this._worldMatrix)_sm_            this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix()_co_ this._computedViewMatrix)_sm_            this._computedViewMatrix.invert()_sm_            return this._computedViewMatrix_sm_        }_lt_/pre_gt__lt_p_gt_which computes the view matrix if the camera has a parent._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is it on purpose that the view matrix is computed for each frame? Is it better for the memory? (instead of caching values like it_t_s done for the meshes_sm_ BABYLON.Mesh.prototype.computeWorldMatrix)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-07T23:22:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is a update I get on my to do list actually _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JulienGobin","Date":"2014-01-08T17:55:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ thank for your fast reply _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ._lt_br_gt__lt_br_gt_I_t_m already working on a system that makes the job. (Because i really need it)_co_ maybe i can send you a pull request when i have finished (tomorrow) ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(I_t_m also working on a system_co_ based on this first one_co_ that forces the wireframe display when the fps is shutting down when a camera is moving_sm_ of course it_t_s optional and parametrable. Will you be interested by it ?)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here what i have done so far _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/JulienGobin/7DT4R/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/JulienGobin/7DT4R/_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsfiddle.net/JulienGobin/4QhX4/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/JulienGobin/4QhX4/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JulienGobin","Date":"2014-01-09T18:16:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here it is _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/122_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/122_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-10T16:47:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Excellent and thank you for your contribution_dd_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a question about wireframe mode_dd_ does it really speed things up?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-10T18:14:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That could be nice. I guess it speeds up things when meshes have a lot of vertices but it doesn_t_t when the scene contains only meshes will a few number of vertices (not a lot of rasterization to do I guess)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-10T22:27:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In my case this is always worse_dd_(_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-10T22:37:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Really? I didn_t_t check how you do the wireframe rendering but my first thought would be that_t_s it_t_s faster to render in wireframe mode. Weird. Anyway_co_ I guess what JulienGobin uses here _lt_a href_eq__qt_http_dd_//jsfiddle.net/JulienGobin/4QhX4/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/JulienGobin/4QhX4/_lt_/a_gt_ could be modified to use a fastest material when the camera is moving (instead of wireframe). That_t_s kind of cool._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_this._scene.activeCamera.forceWireframe would be replaced by this._scene.activeCamera.forceFastestMaterial and the material would be set for the mesh in BABYLON.Mesh.prototype.render_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-10T22:54:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I prefer this way actually. Gfx cards are not really good at drawing wireframe_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JulienGobin","Date":"2014-01-13T09:44:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank for your reply_co_ the new pull request (without the wireframe stuff) is here _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/126_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/126_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For the wireframe stuff i_t_m really surprised that this display mode is worst than the normal one. I will force myself on more test next time ^^_t_._lt_br_gt__lt_br_gt_(Edit _dd_ wrong link_co_ my bad)_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2014-01-14T17_dd_24_dd_25Z_t_ title_eq__t_01/14/2014 05_dd_24  PM_t_ data-short_eq__t_4 yr_t__gt_January 14_co_ 2014_lt_/time_gt_ by JulienGobin_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-14T01:56:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You will be in the next version (1.8.5). gg! and thanks a lot for your help _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-16T17:26:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Julien_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think there is a bug with your cache_dd_ try the train demo and switch to camera attached to the train_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-16T20:23:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok I_t_ve fixed it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-01-16T21:46:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks. Could you commit the fix please?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-01-17T21:24:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_it is part of the upcoming update_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]