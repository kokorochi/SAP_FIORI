/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"test_01/test_01/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"test_01/test_01/test/integration/pages/Worklist",
	"test_01/test_01/test/integration/pages/Object",
	"test_01/test_01/test/integration/pages/NotFound",
	"test_01/test_01/test/integration/pages/Browser",
	"test_01/test_01/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "test_01.test_01.view."
	});

	sap.ui.require([
		"test_01/test_01/test/integration/WorklistJourney",
		"test_01/test_01/test/integration/ObjectJourney",
		"test_01/test_01/test/integration/NavigationJourney",
		"test_01/test_01/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});