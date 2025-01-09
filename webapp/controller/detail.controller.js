sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/library"
],(Controller, FioriLibrary)=>{
    return Controller.extend("sap.prac.flexiblecolumnlayout.controller.detail",{
        onInit : function(){
            console.log("detail view's Init method Invoked");
        },
        onClick: function(){
            window.alert("Button Pressed");
        },
        onPressBack : function(){
            console.log("Event Triggered");
        //     window.history.go(-1);
            var FCL=this.getView().getParent().getParent();
            FCL.setLayout(FioriLibrary.LayoutType.TwoColumnsMidExpanded);
        }
        
    });
});