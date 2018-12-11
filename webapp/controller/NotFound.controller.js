sap.ui.define([
		"test_01/test_01/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("test_01.test_01.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);