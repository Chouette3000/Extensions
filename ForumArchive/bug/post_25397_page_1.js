[{"Owner":"AlbertTJames","Date":"2016-09-24T03:39:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I have been fighting Sprite2D for hours. I am developping a 2D version of my project and I simply wanted to draw a single sprite2D on my canvas but couldn_t_t_co_ the sprite was not showing. The texture was loading for sure because I could use it on 3D meshes. Another post talked about a similar issue and although the post says the problem was solved_co_ it does not say how or what was really causing it _dd_ \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/23800-loading-texture-what-am-i-missing/?do_eq_embed&amp_sm_comment_eq_135951&amp_sm_embedComment_eq_135951&amp_sm_embedDo_eq_findComment#comment-135951_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t I am not showing all my experimenting because it would be meaningless_co_ but I kept getting this warning_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_(index)_dd_1 [.Offscreen-For-WebGL-0x7f84b30bdc00]RENDER WARNING_dd_ there is no texture bound to the unit 0_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand all the posts on the web about those kind of errors were very foggy... hours passed_co_ thought it was the server_co_ the loading_co_ the transparency... without having any kind of improvement_co_ so I started to cut everything from my code util I was only creating an engine and basically copied paste the babylon example _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#20MSFF%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#20MSFF#16_lt_/a_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy th way I got also this very benign warning caused by the BABYLON.Texture.NEAREST_SAMPLINGMODE _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_[.Offscreen-For-WebGL-0x7f84b30bdc00]RENDER WARNING_dd_ there is no texture bound to the unit 0\nbabylon.max.js_dd_7027 _t_CanvasRenderingContext2D.webkitImageSmoothingEnabled_t_ is deprecated. Please use _t_CanvasRenderingContext2D.imageSmoothingEnabled_t_ instead._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis warning comes from this line _this._workingContext.webkitImageSmoothingEnabled _eq_ false_sm_ on 7027 babylon.max.js. But this warning has nothing to do with the sprite2D not showing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_To cut a very long story short _dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen settings _eq_ {} passed to new BABYLON.Sprite2D do not contain a spriteSize property_co_ the sprite.size SHOULD be set to the actual texture size_co_ but it is in fact set to size(0_co_0) and hence the sprite is not displayed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis behavior does not seem to be on purpose because the docs clearly state the sprite would take the size of the texture. The code also point in that direction (42630 babylon.max.js)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function Sprite2D(texture_co_ settings) {\n            if (!settings) {\n                settings _eq_ {}_sm_\n            }\n            _super.call(this_co_ settings)_sm_\n            this.texture _eq_ texture_sm_\n            this.texture.wrapU _eq_ BABYLON.Texture.CLAMP_ADDRESSMODE_sm_\n            this.texture.wrapV _eq_ BABYLON.Texture.CLAMP_ADDRESSMODE_sm_\n            this.size _eq_ settings.spriteSize || null_sm_ // LOOK HERE !\n            this.spriteLocation _eq_ settings.spriteLocation || new BABYLON.Vector2(0_co_ 0)_sm_\n            this.spriteFrame _eq_ 0_sm_\n            this.invertY _eq_ (settings.invertY _eq__eq_ null) ? false _dd_ settings.invertY_sm_\n            this.alignToPixel _eq_ (settings.alignToPixel _eq__eq_ null) ? true _dd_ settings.alignToPixel_sm_\n            this._isTransparent _eq_ true_sm_\n            if (!this.size) { /// AND HERE !!\n                var s _eq_ texture.getSize()_sm_\n                this.size _eq_ new BABYLON.Size(s.width_co_ s.height)_sm_\n            }\n        }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo I tried to understand why this.size was not set to the texture size...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo first of all_co_ when the super is called the size is set to (0_co_0).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen it SHOULD be set to null if spriteSize is not set. But there is an interaction between getters and setters.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince size is a SmartPropertyPrim... the GETTER is called everytime you call the setter on 36968_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_SmartPropertyPrim._hookProperty _eq_ function (propId_co_ piStore_co_ typeLevelCompare_co_ dirtyBoundingInfo_co_ kind) {\n            return function (target_co_ propName_co_ descriptor) {\n                var propInfo _eq_ SmartPropertyPrim._createPropInfo(target_co_ propName_co_ propId_co_ dirtyBoundingInfo_co_ typeLevelCompare_co_ kind)_sm_\n                if (piStore) {\n                    piStore(propInfo)_sm_\n                }\n                var getter _eq_ descriptor.get_co_ setter _eq_ descriptor.set_sm_\n                // Overload the property setter implementation to add our own logic\n                descriptor.set _eq_ function (val) {\n                    // check for disposed first_co_ do nothing\n                    if (this.isDisposed) {\n                        return_sm_\n                    }\n                    var curVal _eq_ getter.call(this)_sm_\n                    if (SmartPropertyPrim._checkUnchanged(curVal_co_ val)) {\n                        return_sm_\n                    }\n                    // Cast the object we_t_re working one\n                    var prim _eq_ this_sm_\n                    // Change the value\n                    setter.call(this_co_ val)_sm_\n                    // Notify change_co_ dirty flags update\n                    prim._handlePropChanged(curVal_co_ val_co_ propName_co_ propInfo_co_ typeLevelCompare)_sm_\n                }_sm_\n            }_sm_\n        }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe getter is _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Object.defineProperty(Prim2DBase.prototype_co_ _qt_size_qt__co_ {\n            /**\n             * Size of the primitive or its bounding area\n             * BEWARE_dd_ if you change only size.width or height it won_t_t trigger a property change and you won_t_t have the expected behavior.\n             * Use this property to set a new Size object_co_ otherwise to change only the width/height use Prim2DBase.width or height properties.\n             */\n            get_dd_ function () {\n                if (!this._size || this._size.width _eq__eq_ null || this._size.height _eq__eq_ null) {\n                    if (Prim2DBase.boundinbBoxReentrency) {\n                        return Prim2DBase.nullSize_sm_\n                    }\n                    if (this._boundingSize) {\n                        return this._boundingSize_sm_\n                    }\n                    Prim2DBase.boundinbBoxReentrency _eq_ true_sm_\n                    var b _eq_ this.boundingInfo_sm_\n                    Prim2DBase.boundinbBoxReentrency _eq_ false_sm_\n                    return this._boundingSize_sm_\n                }\n                return this._size_sm_\n            }_co_\n..._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo basically a size (0_co_0) is returned if size is null sooo this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (!this.size) { /// AND HERE !!\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWill never be true.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope it helps - time to sleep ! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlbertTJames","Date":"2016-09-24T11:34:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo it seems that has been adressed already_co_ in src/Canvas2d/babylon.sprite2d.ts (357)  _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ if (settings.spriteSize _eq__eq_ null || !texture.isReady()) {\n                if (texture.isReady()) {\n                    this.size _eq_ &lt_sm_Size&gt_sm_texture.getBaseSize()_sm_\n                } else {\n                    texture.onLoadObservable.add(() _eq_&gt_sm_ {\n                        if (settings.spriteSize _eq__eq_ null) {\n                            this.size _eq_ &lt_sm_Size&gt_sm_texture.getBaseSize()_sm_\n                        }\n                        this._positioningDirty()_sm_\n                        this._instanceDirtyFlags |_eq_ Prim2DBase.originProperty.flagId | Sprite2D.textureProperty.flagId_sm_  // To make sure the sprite is issued again for render\n                    })_sm_\n                }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is the best way to use this version ? Do I have to compile it ? i have never used ts really..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ ok nvm. _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/Gulp_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/Gulp_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEDIT2_dd_ So indeed now the texture size correctly used.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlbertTJames","Date":"2016-09-24T13:32:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlthough the size is working correctly... texture do not have alpha anymore _lt_img alt_eq__qt_-_-_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sleep.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sleep@2x.png 2x_qt_ title_eq__qt_-_-_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_9603_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/57e6804d4d5e4_ScreenShot2016-09-24at15_29_09.png.ecf9c9b4222beed37a917ab3c7d297b2.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Screen Shot 2016-09-24 at 15.29.09.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9603_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/57e6804d9ccf9_ScreenShot2016-09-24at15_29_09.thumb.png.b517a118a77b8555679327ea3f1c75af.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTried everything. No idea how to fix it - tired... \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk i really do have to give a project on Wednesday using sprites so lets try to find the problem_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom what i gather the render mode is decided here_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_RenderablePrim2D.prototype._updateRenderMode _eq_ function () {\n            if (this.isTransparent) {\n                this._renderMode _eq_ BABYLON.Render2DContext.RenderModeTransparent_sm_\n            }\n            else if (this.isAlphaTest) {\n                this._renderMode _eq_ BABYLON.Render2DContext.RenderModeAlphaTest_sm_\n            }\n            else {\n                this._renderMode _eq_ BABYLON.Render2DContext.RenderModeOpaque_sm_\n            }\n        }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\trenderablePrim2d.ts 361_dd_ when this isTransparent getter is called for the sprite it returns false. The problem might be that the sprite is created in a scene that is not shown...  The first time the function is called the texture is undefined \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Object.defineProperty(RenderablePrim2D.prototype_co_ _qt_isTransparent_qt__co_ {\n            get_dd_ function () {\n                return (this.actualOpacity &lt_sm_ 1) || this._shouldUseAlphaFromTexture() || this._isPrimTransparent()_sm_\n            }_co_\n            enumerable_dd_ true_co_\n            configurable_dd_ true\n        })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tOn line 485 of babylon.sprite2D.ts _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Sprite2D.prototype._shouldUseAlphaFromTexture _eq_ function () {\n            return this.texture !_eq_ null &amp_sm_&amp_sm_ this.texture.hasAlpha &amp_sm_&amp_sm_ this.useAlphaFromTexture_sm_\n        }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis is called with an undefined texture. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthought the texture was passed to the sprite2D. This is because the super is called before the texture is set here _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ function Sprite2D(texture_co_ settings) {\n            var _this _eq_ this_sm_\n            if (!settings) {\n                settings _eq_ {}_sm_\n            }\n            _super.call(this_co_ settings)_sm_\n            \n            this.texture _eq_ texture_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo when this._shouldUseAlphaFromTexture() is called no texture is set_co_ this calls the sprite2D._shouldUseAlphaFromTexture() functions with an undefined texture and this.texture !_eq_ null returns false since its not a hard compare !_eq__eq_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t sprite2d.texture.hasAlpha is false.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen in sprite2D constructor useAlphaFromTexture is set to true\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Object.defineProperty(Sprite2D.prototype_co_ _qt_useAlphaFromTexture_qt__co_ {\n            get_dd_ function () {\n                return this._useAlphaFromTexture_sm_\n            }_co_\n            set_dd_ function (value) {\n                if (this._useAlphaFromTexture _eq__eq__eq_ value) {\n                    return_sm_\n                }\n                this._useAlphaFromTexture _eq_ value_sm_\n                this._updateRenderMode()_sm_\n            }_co_\n            enumerable_dd_ true_co_\n            configurable_dd_ true\n        })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd this._updateRenderMode() is called. And here the magic should happen. updateRendeMode calls isTransparent and isTransparent calls should use alpha from texture. But this time texture is not undefined_co_ it was set in the sprite2D constructor just before.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill_co_ is transparent is not true_co_ so this becomes clearer to everyone of course\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9604_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/57e68e3f13d93_ScreenShot2016-09-24at16_30_18.png.325568d53996568e9582849e6503f7f6.png_qt_ alt_eq__qt_Screen Shot 2016-09-24 at 16.30.18.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tthis.texture has no alpha. Make sense. It did in the previous version but not this one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO of course now it all makes sense and if I had texture.hasAlpha before calling the sprite2D constructor... it works _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var texture _eq_ new BABYLON.Texture(taskObject.ASSETS_FOLDER + _qt_/sprites/adventurer/player.png_qt__co_ scene)_sm_\n\ntexture.hasAlpha _eq_ true_sm_ // That...\n\n var sprite _eq_ new BABYLON.Sprite2D(texture_co_ {\n   ..._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/57e690a636159_ScreenShot2016-09-24at16_41_17.png.6d64a083b8d7fedede72ba9b80218db1.png_qt_ data-fileid_eq__qt_9605_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9605_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/57e690a69ba20_ScreenShot2016-09-24at16_41_17.thumb.png.1b5cc9484627b31db69c9e0c2d7f6523.png_qt_ alt_eq__qt_Screen Shot 2016-09-24 at 16.41.17.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter all... what is 3 hours of life_co_ in the grand scheme of things. I will go buy myself a big pizza to congratulate myself for my lack of neurons.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AlbertTJames","Date":"2016-09-24T14:51:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust to summarize _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_I First part_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_Problem_dd__lt_/u_gt_ In the current distribution of babylonJS the sprite2D size is not set to the texture size if you do not specify a size in the settings_co_ resulting in a size(0_co_0) and no render\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_Solution_dd__lt_/u_gt_ this issue has been corrected in the current typescript source files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I forked the repo_co_ cloned it_co_ $sudo npm install -g gulp_co_ cd REPO_co_ cd /Tools/Gulp_co_ $npm install_co_ $gulp.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis generates a new babylon.max.js in the _lt_u_gt_dist/preview release_lt_/u_gt_ folder of your local repo. Use this file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_II Second Part_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_Problem_dd__lt_/u_gt_ The texture has a good size now Yayyyy! But... Somehow the texture is opaque now... it is not in the previous version of babylon... but it is in this one O.o ... wtf\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_Solution_dd__lt_/u_gt_ Just set the _lt_strong_gt_texture.hasAlpha _eq_ true._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI find solace in the hope people are as dumb as me and will need such advices. _lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt_.... _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-26T15:23:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tExcellent! Thank you very much for sharing your findings\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]