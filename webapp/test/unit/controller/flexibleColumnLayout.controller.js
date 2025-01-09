/*global QUnit*/

sap.ui.define([
	"sapprac/flexiblecolumnlayout/controller/flexibleColumnLayout.controller"
], function (Controller) {
	"use strict";

	QUnit.module("flexibleColumnLayout Controller");

	QUnit.test("I should test the flexibleColumnLayout controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
