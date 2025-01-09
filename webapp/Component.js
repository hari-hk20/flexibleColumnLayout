sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/prac/flexiblecolumnlayout/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("sap.prac.flexiblecolumnlayout.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
            const oModelData = new JSONModel(sap.ui.require.toUrl('sap/prac/flexiblecolumnlayout/model/data.json'));
            this.setModel(oModelData, "ModelData");

            // enable routing
            this.getRouter().initialize();
        }
    });
});