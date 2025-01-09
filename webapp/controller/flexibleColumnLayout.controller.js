sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/f/library"
], (Controller,JSONModel,FioriLibrary) => {
    "use strict";

    return Controller.extend("sap.prac.flexiblecolumnlayout.controller.flexibleColumnLayout", {
        onInit() {
            // const oMockProducts = new JSONModel();
            // const oMockCustomers = new JSONModel();
            // const oModel=this.getOwnerComponent().getModel("ModelData");
            // const oProducts = oModel.getProperty("/products");
            // const oCustomers = oModel.getProperty("/customers");
            // oMockProducts.setData(oProducts);
            // oMockCustomers.setData(oCustomers);
            // this.getView().setModel(oMockProducts, "Product_List");
            // this.getView().setModel(oMockCustomers, "Customer_List")
            //console.log(this.getView());
            //console.log(this.getView().getModel("Customer_List").getProperty("ProductID"));
            
        },

        // onSelect : function(oEvent){
        //     window.alert("A Section Selected");
        // },

        onListItemPress: function (oEvent) {
			// var oFCL = this.oView.getParent().getParent();
			// oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
            var oFCL = this.getView().getParent().getParent();
            //console.log(oFCL);
			oFCL.setLayout(FioriLibrary.LayoutType.TwoColumnsMidExpanded);
		},

    });
});