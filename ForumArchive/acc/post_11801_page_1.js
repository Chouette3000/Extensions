[{"Owner":"jerome","Date":"2015-01-17T14:44:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just start learning about particles_co_ reading the wiki_co_ all your posts and funky demos_co_ guys_co_ and the doc/code._lt_/p_gt__lt_p_gt_As I can see in many playground demos that people overwrite for their own needs the _lt_em_gt_Emitter.updateFunction()_lt_/em_gt__co_ I dig a little in the TS genuine code (though I_t_m not a TS coder_co_ it is very readable)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.ts#L138_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Particles/babylon.particleSystem.ts#L138_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_L138 _dd_ recycling_lt_/p_gt__lt_p_gt_The particle _lt_em_gt_age_lt_/em_gt_ is its recycling criterium._lt_/p_gt__lt_p_gt_So the recycled particles are removed from the _lt_em_gt_particles_lt_/em_gt_ array and added to the _lt_em_gt_stock_lt_/em_gt_ array for later use (re-emission_co_ etc)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To remove a particle from the _lt_em_gt_particles_lt_/em_gt_ array_co_ the javascript (unless it is overwritten in typescript) _lt_em_gt_splice()_lt_/em_gt_ function is used._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As far as I know_co_ this function returns a _lt_strong_gt_new_lt_/strong_gt_ js array._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So this means_co_ the GC will be called to free the former array allocated memory. _lt_/p_gt__lt_p_gt_We can think this little detail is not that important.. but we are here within an _lt_em_gt_updateFunction()_lt_/em_gt_ intended to be called each frame_co_ maybe for each particle_co_ aren_t_t we ?_lt_/p_gt__lt_p_gt_Maybe on powerful computers_co_ we_t_ll even never notice this GC behavior._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I know (for having read much about this topic) that in 2D html5 games_co_ spliced array (and other js functions which dynamically create new objects) are avoided as much as possible in the render loop._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A workaround could be to _lt_em_gt_sort()_lt_/em_gt_ the _lt_em_gt_particles_lt_/em_gt_ array and then have for example living particles from 0 to _lt_em_gt_deathIndex_lt_/em_gt_-1_lt_em_gt_ _lt_/em_gt_and dead particles from _lt_em_gt_deadIndex_lt_/em_gt_ to _lt_em_gt_particles.length_lt_/em_gt_ with this _lt_em_gt_deathIndex_lt_/em_gt_ managed in the _lt_em_gt_Emitter_lt_/em_gt_._lt_/p_gt__lt_p_gt_The _lt_em_gt_sort()_lt_/em_gt_ function returns the _lt_strong_gt_same_lt_/strong_gt_ array ... sorted. No memory free/allocation_co_ so no GC calls._lt_/p_gt__lt_p_gt_I don_t_t know if sorting a almost pre-sorted big array is quicker (*) than a GC call therefore. And sorting not scalar type objects with _lt_em_gt_sort()_lt_/em_gt_ is not that easy in javascript either._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or manually to sort the array by setting living and dead particles at choosen indexes _lt_em_gt_(see next post)_lt_/em_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or maybe to have a new array object with a new_lt_em_gt_ splice()-like_lt_/em_gt_ method as the DK_t_s new array-object used for matrices computation._lt_/p_gt__lt_p_gt_Such an object could then be used anywhere else in the code so the memory allocation would be thus mastered everywhere in BJS (concerning js arrays at least)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I understand it is a deep re-implementation and seems quite expensive regarding the expected benefit._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So... I don_t_t know_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(was just my humble indecisive opinion so far)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(*) _dd_ the real question is not about the speed but about the predictibily _dd__lt_/p_gt__lt_p_gt_if you consume_co_ say_co_ 2 micro-seconds each frame to sort your array (or do something smarter)_co_ you master how and when it happens_lt_/p_gt__lt_p_gt_if you rely only on the GC_co_ it can trigger whenever it _qt_wants_qt_ and can use as much time as it needs _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-01-17T16:09:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_here_t_s an old article about a recycling particle system with no _lt_em_gt_array.splice() _lt_/em_gt_call _dd_ _lt_a href_eq__qt_http_dd_//buildnewgames.com/particle-systems/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//buildnewgames.com/particle-systems/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_please go down right to the  _qt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Source Sans Pro_t__co_ sans-serif_sm_background-color_dd_rgb(254_co_254_co_254)_sm__qt__gt_How the Particle Pool Works_qt_ part to read a better explanation than mine._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_Source Sans Pro_t__co_ sans-serif_sm_background-color_dd_rgb(254_co_254_co_254)_sm__qt__gt_I personaly like this implementation _dd_ simple_co_ light and _lt_a href_eq__qt_http_dd_//en.wikipedia.org/wiki/KISS_principle_qt_ rel_eq__qt_external nofollow_qt__gt_kiss_lt_/a_gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-17T17:24:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hum that_t_s interesting...we need to do more testing but definitely I add that to my backlog (unless you want to experiment it and propose a PR?)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-01-17T17:58:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_added to my backlog _dd_ learn quickly some TS and how to PR _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ... so I_t_ll be able to propose all this stuff by myself instead of writting endless posts_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-17T18:47:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I did a small test that seems to work well_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_                    if (particle.age &gt_sm__eq_ particle.lifeTime) { // Recycle by swapping with last particle                        var lastParticle _eq_ particles.pop()_sm_                        if (lastParticle !_eq__eq_ particle) {                            lastParticle.copyTo(particle)_sm_                            this._stockParticles.push(lastParticle)_sm_                        }                        index--_sm_                        continue_sm_                    }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-01-17T19:46:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This looks very smart !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess what you intend to to though I don_t_t understand everything as I didn_t_t even know this _lt_em_gt_copyTo()_lt_/em_gt_ method..!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_em_gt_pop()_lt_/em_gt_ doesn_t_t create any new array what is a good thing_co_ but only changes the array length. I guess the initial allocated memory isn_t_t removed by the GC as the array reference  is unchanged and as the array may still grow back again later. Not sure._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When you _lt_em_gt_push()_lt_/em_gt_ new particles into the array somewhere else_co_ some new memory will be allocated _dd_ a _lt_em_gt_push_lt_/em_gt_ doesn_t_t reuse array _qt__lt_em_gt_free_qt__lt_/em_gt_ indexes like empty or null positions_co_ even at the start of the array _dd_ [null_co_ null_co_ _qt_toto_qt__co_ null].push(_qt_titi_qt_) _eq_&gt_sm_ [null_co_ null_co_ _qt_toto_qt__co_ null_co_ _qt_titi_qt_]_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I think_co_ not sure as I_t_m not a js expert_co_ the object array will keep a more or less fixed size as it will vary between empty and initial array length but the underlying allocated memory could grow with no limit..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_depending on the _lt_em_gt_pop() _lt_/em_gt_behavior _dd__lt_/p_gt__lt_p_gt_if _lt_em_gt_pop()_lt_/em_gt_ doesn_t_t free the array memory for further uses_co_ the allocated memory will grow every _lt_em_gt_push() call_co__lt_/em_gt__lt_/p_gt__lt_p_gt_if _lt_em_gt_pop()_lt_/em_gt_ removes the pop-element memory_co_ we face the GC problem again._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am I wrong ?_lt_/p_gt__lt_p_gt_In my humble indecisive opinion_co_ an array with an at once fixed length would be more convinient regarding to GC concerns._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does _lt_em_gt_copyTo()_lt_/em_gt_ allocate new memory ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I need some time to make tests in the playground with big amount of short live particles (to force push/pop) on an old computer so the GC will be significant against the animation._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-17T20:43:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_copyTo does not allocate new memory and just do a copy on a per property basis_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did test about GC with pop() and GC is not triggered at all so I_t_m assuming browsers are smart enough to reuse memory _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The problem with particleSystem is that active particles count can vary a lot and having a fixed sized array would not be really useful as we may have to grow it frequently. Obviously we can create a big one once and for all but this will lead to the following problem_dd__lt_/p_gt__lt_p_gt_- Memory waste (mainly on low end devices / phones)_lt_/p_gt__lt_p_gt_- A lot of copy between memory where pop and push are heavily optimized by browsers_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But obviously if you want to give a try a find a better way_co_ I will be more than happy to integrate your change _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-01-17T21:19:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oki_co_ I_t_ll check for a elegant way to do it... if I succeed _dd_-q_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yours_co_ with _lt_em_gt_pop()_lt_/em_gt_ and no _lt_em_gt_splice()_co_ _lt_/em_gt_is really really smart (*) and involves only a minor change in the BJS code._lt_/p_gt__lt_p_gt_So it seems to be so far the very best way  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The case with so many short living particles increasing the memory consumption to a significant point (or triggering too much the GC) is maybe purely hypothetical as many other allocation or computation problems should occur before in the code considering the JS VM capacities._lt_/p_gt__lt_p_gt_So_co_ ok_co_ I stop splitting hairs  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_div_gt_ _lt_/div_gt__lt_p_gt_In other terms_co_ once we get rid of the _lt_em_gt_splice()_lt_/em_gt_ method or other new object creation methods within the render loop_co_ the job is done !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A general good practice would be to pre-allocate or create everything whatever the level of abstraction/representation_co_ low or high_co_ (pooling all that stuff if needed) before entering the render loop._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(*) my humble _lt_u_gt_decided_lt_/u_gt_ opinion_co_ this time._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-01-18T07:42:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_mmmhh..._lt_/p_gt__lt_p_gt_I thought back to your solution._lt_/p_gt__lt_p_gt_I think I am wrong about the risk of infinite memory allocation upon _lt_em_gt_push()_lt_/em_gt_ calls _dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if the _lt_em_gt_pop()_lt_/em_gt_ doesn_t_t trigger the GC_co_ as it seems to do_co_ this means the array memory is kept allocated for further use_co_ despite the array js object length  property decreases._lt_/p_gt__lt_p_gt_the _lt_em_gt_push()_lt_/em_gt_ would so be considered as that _qt_further use_qt_ as it will increase back the array length. I guess the js array implementation is smart enough to re-use the previously allocated memory if present_co_ before allocating new blocks._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So your _lt_em_gt_pop()/push()_lt_/em_gt_ ( or _lt_em_gt_no-splice()_lt_/em_gt_ ) solution seems to be really the very right one with no-fixed length arrays !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The one I was thinking about was like this of the link article _dd_ a single fixed length array with as well living and dead particles. But it had the disadvantages of the fixed size array and needed a complete re-implementation of BJS particle life management._lt_/p_gt__lt_p_gt_So let_t_s forget it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-03T09:52:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just chiming in to say that DK_t_s proposed _qt_push/pop_qt_ change should definitely be made!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I noticed that _qt_splice_qt_ in ParticleSystem and came here to suggest it.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_FYI Jerome_dd_ the problem with splice() is not memory_co_ but performance - when you remove an item from the middle of the array_co_ all subsequent items have to move up a spot. So the larger the array is_co_ the longer it takes to splice a value._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-03T10:13:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You are right..._lt_/p_gt__lt_p_gt_but both_co_ my captain !_lt_/p_gt__lt_p_gt__lt_em_gt_splice()_lt_/em_gt_ instantiate a new object also _dd_ the spliced element array. Even if you don_t_t use it._lt_/p_gt__lt_p_gt_So the GC needs then to free this allocated unused memory._lt_/p_gt__lt_p_gt_It usually don_t_t matter... except in a 60 fps loop _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-04T04:29:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sure in principle_co_ but O(1) &lt_sm_&lt_sm_ O(n). Creating an array that will immediately get destroyed isn_t_t _lt_em_gt_free_lt_/em_gt__co_ but it_t_s so cheap that it could be justified by cleaner code_co_ etc. But calling splice even once can be expensive_co_ if the array is large._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_More importantly_co_ I_t_ve just realized that the _qt_pop/push_qt_ fix is already done! I bumped this thread thinking it was not implemented yet - I must have been looking at an old version. Sorry about that_co_ nothing to see here...  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ alt_eq__qt__dd_blink_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]