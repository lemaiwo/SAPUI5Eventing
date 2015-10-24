sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Button",
	"sap/m/Dialog",
	'sap/m/MessageBox'
], function(Controller,Button,Dialog,MessageBox) {
	"use strict";

	return Controller.extend("demo.controller.Main", {
		onInit:function(){
			var oEventBus = sap.ui.getCore().getEventBus();
			oEventBus.subscribe("SubView1", "ShowPopup", this.onShowPopup, this);
			oEventBus.subscribe("SubView2", "ShowPopup", this.onShowPopup, this);
		},
		onShowPopup : function (sChanel, sEvent, oData) {
			if(sEvent === "ShowPopup"){
				var msg = "Message from: "+sChanel+" - Event: "+sEvent+" - "+oData.text;
			}else{
				msg = "Message from: Main View ";
			}
			
			MessageBox.information(	msg );
		}
	});

});