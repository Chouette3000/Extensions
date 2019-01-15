[{"Owner":"8Observer8","Date":"2017-01-03T14:08:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co__lt_br /_gt__lt_br /_gt_\n\tI decided to use TypeScript with BabylonJS. I learn _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_Getting Started_lt_/a_gt_ tutorial\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wrote this code_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_class Game\n{\n    private _canvas_dd_ HTMLCanvasElement_sm_\n    private _engine_dd_ BABYLON.Engine_sm_\n    private _camera_dd_ BABYLON.Camera_sm_\n    private _scene_dd_ BABYLON.Scene_sm_\n    private _light_dd_ BABYLON.Light_sm_\n\n    constructor(canvasElement_dd_ string)\n    {\n        // Create canvas and engine\n        this._canvas _eq_ document.getElementById(canvasElement)_sm_\n        this._engine _eq_ new BABYLON.Engine(this._canvas_co_ true)_sm_\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tVisual Studio 2015 shows this message_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tError    TS2322    Type _t_HTMLElement_t_ is not assignable to type _t_HTMLCanvasElement_t_._lt_br /_gt_\n\t\t\t  Property _t_height_t_ is missing in type _t_HTMLElement_t_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Théo Sabattié","Date":"2017-01-03T14:25:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_t__t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou have to cast your htmlElement_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this._canvas _eq_ &lt_sm_HTMLCanvasElement&gt_sm_ yourHtmlElement_sm_\nthis._canvas _eq_ yourHtmlElement as HTMLCanvasElement_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"8Observer8","Date":"2017-01-03T14:41:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks very much!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]