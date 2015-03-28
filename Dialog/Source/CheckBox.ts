/// <reference path="./Panel.ts"/>
/// <reference path="./Label.ts"/>
/// <reference path="./CheckBoxFont.ts"/>
module DIALOG{
    export class CheckBox extends Label{
        // store factory of the 4 check meshes here, rather than TOB runtine
        private static factory : CheckBoxFont.MeshFactory;
        
        constructor(letters: string, typeFace = Label.DEFAULT_FONT_MODULE){
            super('  ' + letters, typeFace, null, true); // add space for box to replace later
            
            if (!CheckBox.factory){
                CheckBox.factory = new CheckBoxFont.MeshFactory(DialogSys._scene);
            }
            this._assignCheckMesh();
            
            var ref = this;
            this.registerPickAction(
                function () {
                    if (!ref._panelEnabled) return;               
                    ref.setSelected(!this._selected);
                }
            );
        }
        /**
         * all meshes within 2D & 3D consume same space, so no layout required. to switch them out.
         */
        private _assignCheckMesh(){
            var subs = this.getSubPanels();
            var previousPosition : BABYLON.Vector3;
            
            if (subs[0] !== null){
                previousPosition = subs[0].position;
                subs[0].dispose();
            }
            if (this._isTypeface3D){
                subs[0] = <Letter> CheckBox.factory.instance(this._selected ? "checked3D" : "unchecked3D");
                subs[0].scaling.z = DialogSys.DEPTH_SCALING_3D;
            }else{
                subs[0] = <Letter> CheckBox.factory.instance(this._selected ? "checked2D" : "unchecked2D");
            }
            var found = 1;
            while (subs[found] === null){
                found++;
            }
            subs[0].material = subs[found].material;
            subs[0].scaling.x = subs[found].scaling.x;
            subs[0].scaling.y = subs[found].scaling.y;
            subs[0].parent = this;
            
            // mini layout for mesh, which does not cause overall layout due to Letter overrides
            subs[0]._calcRequiredSize();
            subs[0].visibility = 1; 
            
            if(previousPosition) subs[0].position = previousPosition;
        }
        // =============================== Selection / Action Methods ================================
        public setSelected(selected) : void{
            this._selected = selected;
            this._assignCheckMesh();
            
            if (this._callback) this._callback(this);
        }
                
        public setEnabled(enabled : boolean) {
            this._panelEnabled = enabled;
            this.setLetterMaterial(enabled ? DialogSys.CURRENT_FONT_MAT_ARRAY : DialogSys.LT_GREY);
        }
    }
}