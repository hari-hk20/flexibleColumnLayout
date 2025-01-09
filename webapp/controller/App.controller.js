sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("sap.prac.flexiblecolumnlayout.controller.App", {
      onInit() {
        //this.getOwnerComponent().getRouter().attachRouteMatched(this._onRouteMatched, this);
        //console.log("Init Method loaded");
      },

      // _onRouteMatched : function(oEvent){
      //   const oRouteName = oEvent.getParameter("name");
      //   const oArguments = oEvent.getParameter("arguments");
      //   console.log(oRouteName);
      //   console.log(oArguments);
      // },

      // onStateChange : function(oEvent){
      //   var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
      //       sLayout = oEvent.getParameter("layout");


      // },

      // onExit : function(){
      //   this.getOwnerComponent.getRouter.detachRouteMatched(this._onRouteMatched, this);
      // }

  });
});