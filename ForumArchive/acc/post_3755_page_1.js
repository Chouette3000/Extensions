[{"Owner":"Gugis","Date":"2014-02-12T00:10:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is how mesh look when backFaceCulling is set to false. How to fix it?_lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//snag.gy/ZKhGC.jpg_qt_ alt_eq__qt_ZKhGC.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_backFaceCulling _eq_ true_dd__lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//snag.gy/usYrY.jpg_qt_ alt_eq__qt_usYrY.jpg_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Material settings (exported from Blender)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_   {      _qt_name_qt__dd_ _qt_tent01_qt__co_      _qt_id_qt__dd_ _qt_tent01_qt__co_      _qt_ambient_qt__dd_ [        0.8000_co_        0.8000_co_        0.8000      ]_co_      _qt_diffuse_qt__dd_ [        0.8000_co_        0.8000_co_        0.8000      ]_co_      _qt_specular_qt__dd_ [        0.0000_co_        0.0000_co_        0.0000      ]_co_      _qt_specularPower_qt__dd_ 50.0000_co_      _qt_emissive_qt__dd_ [        0.0000_co_        0.0000_co_        0.0000      ]_co_      _qt_alpha_qt__dd_ 1.0000_co_      _qt_backFaceCulling_qt__dd_ true_co_      _qt_diffuseTexture_qt__dd_ {        _qt_name_qt__dd_ _qt_tent01-body.png_qt__co_        _qt_level_qt__dd_ 1.0000_co_        _qt_hasAlpha_qt__dd_ 1.0000_co_        _qt_coordinatesMode_qt__dd_ 0_co_        _qt_uOffset_qt__dd_ 0.0000_co_        _qt_vOffset_qt__dd_ 0.0000_co_        _qt_uScale_qt__dd_ 1.0000_co_        _qt_vScale_qt__dd_ 1.0000_co_        _qt_uAng_qt__dd_ 0.0000_co_        _qt_vAng_qt__dd_ 0.0000_co_        _qt_wAng_qt__dd_ 0.0000_co_        _qt_wrapU_qt__dd_ true_co_        _qt_wrapV_qt__dd_ true_co_        _qt_coordinatesIndex_qt__dd_ 0      }_co_      _qt_opacityTexture_qt__dd_ {        _qt_name_qt__dd_ _qt_tent01-body-opacity.png_qt__co_        _qt_level_qt__dd_ 1.0000_co_        _qt_hasAlpha_qt__dd_ 1.0000_co_        _qt_coordinatesMode_qt__dd_ 0_co_        _qt_uOffset_qt__dd_ 0.0000_co_        _qt_vOffset_qt__dd_ 0.0000_co_        _qt_uScale_qt__dd_ 1.0000_co_        _qt_vScale_qt__dd_ 1.0000_co_        _qt_uAng_qt__dd_ 0.0000_co_        _qt_vAng_qt__dd_ 0.0000_co_        _qt_wAng_qt__dd_ 0.0000_co_        _qt_wrapU_qt__dd_ true_co_        _qt_wrapV_qt__dd_ true_co_        _qt_coordinatesIndex_qt__dd_ 0      }    }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-02-13T10:59:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Humf_co_ this is _qt_normal_qt_ because your object has an opacity texture which remove the depth buffer writing. So faces (which are not ordered) are drawn in a non specific order_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gugis","Date":"2014-02-13T18:28:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]