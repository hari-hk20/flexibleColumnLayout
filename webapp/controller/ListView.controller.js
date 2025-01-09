sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/f/library"
], (Controller, JSONModel, FioriLibrary)=>{
    return Controller.extend("sap.prac.flexiblecolumnlayout.controller.ListView", {
        onInit(){
            //console.log("Init method loaded");
        },
        onClick: function(oEvent){
            //console.log("Link is clicked");
            var FCL=this.getView().getParent().getParent();
            //console.log(FCL);  
            FCL.setLayout(FioriLibrary.LayoutType.ThreeColumnsMidExpanded);
        },
        onPressBack : function(){
            console.log("Event Triggered");
            var FCL=this.getView().getParent().getParent();
            FCL.setLayout(FioriLibrary.LayoutType.OneColumn);
        }
    });
});