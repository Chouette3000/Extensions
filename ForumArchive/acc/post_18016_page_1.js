[{"Owner":"Floof","Date":"2015-10-20T14:40:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello guys_lt_/p_gt__lt_p_gt_I am still working on this cosmic field with some particles ( thanks to Wingnut by the way for his help on the field )_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.peru-lab.com/bishop/kapol_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.peru-lab.com/bishop/kapol_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And I would like to synchronise some particles parameters with the audio freqencies of a playing audio file  _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Some parameters I _t_d like to play with _dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_var speed _eq_ this._scaledUpdateSpeed * _lt_strong_gt_2_lt_/strong_gt__sm__lt_/div_gt__lt_div_gt_        if (particle.age &gt_sm__eq_ particle.lifeTime / _lt_strong_gt_2_lt_/strong_gt_) {_lt_/div_gt__lt_div_gt_          speed _eq_ -speed_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_particleSystem.updateSpeed _eq_ _lt_strong_gt_0.001_lt_/strong_gt__sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_or _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_if (particle.size &gt_sm_3_lt_strong_gt_0_lt_/strong_gt_ &amp_sm_&amp_sm_ toggleColor)_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I checked the documentation about the sound analyser and I wonder how far we could customise it. Could-it be possible to link some frequencies_t_ movements with differents particles parameters_co_ or even a mesh parameters (scale_co_ position...) ? _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Here is the code of my particles _dd_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  var rad1 _eq_ BABYLON.Mesh.CreateBox(_qt_*rad1_qt__co_ 5_co_ scene)_sm__lt_/div_gt__lt_div_gt_  // var rad1 _eq_ BABYLON.Mesh.CreateSphere(_qt_*rad1_qt__co_ 8_co_ 16_co_ scene)_sm__lt_/div_gt__lt_div_gt_  // var rad1 _eq_ BABYLON.Mesh.CreateCylinder(_qt_*rad1_qt__co_ 10_co_ 5_co_ 5_co_ 8_co_ 8_co_ scene)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  rad1.visibility _eq_ 0.9_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  rad1.material _eq_ new BABYLON.StandardMaterial(_qt_bmat_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_  // rad1.material.emissiveColor _eq_ new BABYLON.Color3(0.3_co_ 0.1_co_ 0.1)_sm__lt_/div_gt__lt_div_gt_  rad1.material.diffuseColor _eq_ new BABYLON.Color3(1.0_co_ 0.0_co_ 0.0)_sm__lt_/div_gt__lt_div_gt_  rad1.position _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm__lt_/div_gt__lt_div_gt_  rad1.rotation _eq_ new BABYLON.Vector3(-Math.PI/2_co_ 0_co_ 0)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  var particleSystem _eq_ new BABYLON.ParticleSystem(_qt_particles_qt__co_ 12000_co_ scene)_sm__lt_/div_gt__lt_div_gt_  particleSystem.particleTexture _eq_ new BABYLON.Texture(_qt_kapol.png_qt__co_ scene)_sm__lt_/div_gt__lt_div_gt_  particleSystem.emitRate _eq_ 12000_sm__lt_/div_gt__lt_div_gt_  particleSystem.emitter _eq_ rad1_sm__lt_/div_gt__lt_div_gt_  particleSystem.minEmitBox _eq_ new BABYLON.Vector3(400_co_ -400_co_ 400)_sm_ // Starting all From_lt_/div_gt__lt_div_gt_  particleSystem.maxEmitBox _eq_ new BABYLON.Vector3(-400_co_ 400_co_ -400)_sm_ // To..._lt_/div_gt__lt_div_gt_  particleSystem.minSize _eq_ 1_sm__lt_/div_gt__lt_div_gt_  particleSystem.maxSize _eq_ 30_sm__lt_/div_gt__lt_div_gt_  particleSystem.blendMode _eq_ BABYLON.ParticleSystem.BLENDMODE_ONEONE_sm__lt_/div_gt__lt_div_gt_  _lt_/div_gt__lt_div_gt_  particleSystem.textureMask _eq_ new BABYLON.Color4(1_co_ 1_co_ 1_co_ 1)_sm__lt_/div_gt__lt_div_gt_  _lt_/div_gt__lt_div_gt_  particleSystem.color1 _eq_ new BABYLON.Color4(0_co_ 0_co_ 0_co_ 0)_sm__lt_/div_gt__lt_div_gt_  particleSystem.color2 _eq_ new BABYLON.Color4(0_co_ 0_co_ 0_co_ 0)_sm__lt_/div_gt__lt_div_gt_  particleSystem.colorDead _eq_ new BABYLON.Color4(1_co_ 1_co_ 1_co_ 1)_sm__lt_/div_gt__lt_div_gt_  _lt_/div_gt__lt_div_gt_  particleSystem.maxLifeTime _eq_ 4_sm__lt_/div_gt__lt_div_gt_  _lt_/div_gt__lt_div_gt_  particleSystem.gravity _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm__lt_/div_gt__lt_div_gt_  particleSystem.direction1 _eq_ new BABYLON.Vector3(-26_co_ -26_co_ -26)_sm__lt_/div_gt__lt_div_gt_  particleSystem.direction2 _eq_ new BABYLON.Vector3(26_co_ 26_co_ 26)_sm__lt_/div_gt__lt_div_gt_  _lt_/div_gt__lt_div_gt_  particleSystem.minAngularSpeed _eq_ 10_sm__lt_/div_gt__lt_div_gt_  particleSystem.maxAngularSpeed _eq_ Math.PI_sm__lt_/div_gt__lt_div_gt_  particleSystem.minEmitPower _eq_ 1_sm__lt_/div_gt__lt_div_gt_  particleSystem.maxEmitPower _eq_ 1_sm__lt_/div_gt__lt_div_gt_  _lt_/div_gt__lt_div_gt_  particleSystem.updateSpeed _eq_ 0.001_sm__lt_/div_gt__lt_div_gt_  // Start the particle system_lt_/div_gt__lt_div_gt_  particleSystem.start()_sm__lt_/div_gt__lt_div_gt_  _lt_/div_gt__lt_div_gt_  var toggleSpeed _eq_ true_sm__lt_/div_gt__lt_div_gt_  var toggleColor  _eq_ true_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  particleSystem.updateFunction  _eq_ function(particles) {_lt_/div_gt__lt_div_gt_        for (var index _eq_ 0_sm_ index &lt_sm_ particles.length_sm_ index++) {_lt_/div_gt__lt_div_gt_            var particle _eq_ particles[index]_sm__lt_/div_gt__lt_div_gt_            particle.age +_eq_ this._scaledUpdateSpeed_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            if (particle.age &gt_sm__eq_ particle.lifeTime) { // Recycle by swapping with last particle_lt_/div_gt__lt_div_gt_                this.recycleParticle(particle)_sm__lt_/div_gt__lt_div_gt_                index--_sm__lt_/div_gt__lt_div_gt_                continue_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_            else {_lt_/div_gt__lt_div_gt_        var speed _eq_ this._scaledUpdateSpeed * 2_sm__lt_/div_gt__lt_div_gt_        if (particle.age &gt_sm__eq_ particle.lifeTime / 2) {_lt_/div_gt__lt_div_gt_          speed _eq_ -speed_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_        _lt_/div_gt__lt_div_gt_                particle.colorStep.scaleToRef(speed_co_ this._scaledColorStep)_sm__lt_/div_gt__lt_div_gt_        _lt_/div_gt__lt_div_gt_        if (particle.size &gt_sm_50 &amp_sm_&amp_sm_ toggleColor)_lt_/div_gt__lt_div_gt_                  particle.color _eq_ new BABYLON.Color4(Math.random()_co_ Math.random()_co_ Math.random()_co_ particle.color.a)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        else _lt_/div_gt__lt_div_gt_                  particle.color.addInPlace(this._scaledColorStep)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_                if (particle.color.a &lt_sm_ 0)_lt_/div_gt__lt_div_gt_                    particle.color.a _eq_ 0_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_                particle.angle +_eq_ particle.angularSpeed * this._scaledUpdateSpeed_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_                particle.direction.scaleToRef(this._scaledUpdateSpeed_co_ this._scaledDirection)_sm__lt_/div_gt__lt_div_gt_                particle.position.addInPlace(this._scaledDirection)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_                this.gravity.scaleToRef(this._scaledUpdateSpeed_co_ this._scaledGravity)_sm__lt_/div_gt__lt_div_gt_                particle.direction.addInPlace(this._scaledGravity)_sm__lt_/div_gt__lt_div_gt_            }_lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_    }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_  scene.registerBeforeRender(function () {_lt_/div_gt__lt_div_gt_    // fountain.rotatePOV(0_co_ 0_co_ 0)_sm__lt_/div_gt__lt_div_gt_    camera.alpha +_eq_ .0001_sm__lt_/div_gt__lt_div_gt_  })_sm__lt_/div_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-10-20T15:45:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ I_t_m just exposing the Web Audio analyzer in Babylon.js. So anything related to Web Audio you_t_ll find on the web will work with Babylon.js. You can have a look to the code of one of the demo we_t_ve made with Deltakosh_dd_ _lt_a href_eq__qt_https_dd_//github.com/MicrosoftEdge/Demos/tree/master/musiclounge_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/MicrosoftEdge/Demos/tree/master/musiclounge_lt_/a_gt_ it uses also particules sync with audio. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Bye_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rodrigop","Date":"2015-11-09T06:42:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Pretty cool work Floof_co_ I_t_m from Peru_co_ that caught my attention from your website_co_ are you peruvian too?.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ If you are creating an starfield_co_ why not use a fragment shader? its much more performant and you can add also interactions to them like for moving around and sound changes. Here is one i_t_ve built based on some formulas and examples from shaders toy_co_ _lt_a href_eq__qt_http_dd_//plnkr.co/edit/0f3poeM834TkroixadnM?p_eq_preview_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//plnkr.co/edit/0f3poeM834TkroixadnM?p_eq_preview_lt_/a_gt_ will be using this as the field for my own game_co_ also that example is already integrated with BJS _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]