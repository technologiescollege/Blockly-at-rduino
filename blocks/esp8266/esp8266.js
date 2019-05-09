//thanks to JP Fontaine

'use strict';
goog.provide("Blockly.Blocks.esp8266");

goog.require("Blockly.Blocks");
goog.require("Blockly.Types");

/*  wifi  */
Blockly.Blocks["esp8266_init"]={
	init:function(){
		this.setColour(Blockly.Blocks.esp8266.HUE);
		this.setHelpUrl(Blockly.Msg.esp8266_url);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/esp8266/esp8266.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
			.appendField(Blockly.Msg.esp8266_1);
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.esp8266_10)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.esp8266_9,function(option){this.sourceBlock_.updateShape1_(option)}), "staticdynamic");
		this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.esp8266_2)
			.appendField(new Blockly.FieldTextInput("monWIFI"),"SSID");
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_3)
			.appendField(new Blockly.FieldTextInput("123456789"),"KEY");
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.esp8266_7,function(option){this.sourceBlock_.updateShape2_(option)}), "clientserveur");
		this.setPreviousStatement(false);
		this.setNextStatement(false);
		this.setTooltip(Blockly.Msg.esp8266_init_tooltip);
	},
    updateShape2_:function(option){
		var inputExists = this.getInput("V0");
		if (inputExists) {
			this.removeInput("V0")
		}
		if (option=="serveur"){
		    this.appendValueInput("V0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_8)
		}
    },
    mutationToDom:function(){
        var container = document.createElement("mutation");
        container.setAttribute("clientserveur", this.getFieldValue("clientserveur"));
        container.setAttribute("staticdynamic", this.getFieldValue("staticdynamic"))
        return container
    },
    domToMutation:function(xmlElement){
        this.updateShape2_(xmlElement.getAttribute("clientserveur"));
        this.updateShape1_(xmlElement.getAttribute("staticdynamic"))
    },
	onchange:function(){
		if (this.getInput("D0")) this.setFieldValue(this.getFieldValue("IPa")+"."+this.getFieldValue("IPb")+"."+this.getFieldValue("IPc")+".", 'adr')
	},
    updateShape1_:function(option){
		var inputExists = this.getInput("D0");
		if (inputExists) {
			this.removeInput("D0");
			this.removeInput("D1");
			this.removeInput("D2")
		}
		if (option=="static"){
		    this.appendDummyInput("D0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_4)
				.appendField(new Blockly.FieldTextInput("192"),"IPa").appendField(".")
				.appendField(new Blockly.FieldTextInput("168"),"IPb").appendField(".")
				.appendField(new Blockly.FieldTextInput("1"),"IPc").appendField(".")
				.appendField(new Blockly.FieldTextInput("77"),"IPd");
			this.appendDummyInput("D1").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_6)
				.appendField(new Blockly.FieldTextInput("255"),"MASKa").appendField(".")
				.appendField(new Blockly.FieldTextInput("255"),"MASKb").appendField(".")
				.appendField(new Blockly.FieldTextInput("255"),"MASKc").appendField(".")
				.appendField(new Blockly.FieldTextInput("0"),"MASKd");
			this.appendDummyInput("D2").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_5)
				.appendField(this.getFieldValue("IPa")+"."+this.getFieldValue("IPb")+"."+this.getFieldValue("IPc")+".","adr")
				.appendField(new Blockly.FieldTextInput("1"),"GATEWAY");
		}
    }
};

Blockly.Blocks["esp8266_send"]={
	init:function(){
		this.setColour(Blockly.Blocks.esp8266.HUE);
		this.setHelpUrl(Blockly.Msg.esp8266_url);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR42u2Uf22FQAyAkYAGHOAACVhAAg6mAQc4QAIacIADHLx92WVdae8dd2xZsuz1D0J6bb9ef1z1+BWpXpg/jDmOY13XaZrezoIGPaffwuz7TqC2basrwQZL7Msw5Nj3/WV0L13X4XuNIaMooK5rQgzDIBXjHw16b0wEf7MvzDzPxq1pmnEct21LVINTbLA0aREtgiE7AzB2l4K9gRHzhNEMEqGfJl+qRIl0FP7RoDd3xVeXREgnDDMjbkwqPibBqGCDpUw2EWQ+T5hA4kxMl2XJARgYXpIi0WzRjJg+hUoyP5Ro/RT+0fhJ06FTe2P2kQakZ4FTbLQLEa4xchU/C6Hu4TZGrzsfvVC8aBTazIJ/dcIbozuPV27RjNDV6KrrtunOP4uTwvhZCOvih/DZJcowpMxo6ZeKfzTpfhQUzeyTEb8fNzFa6EF4mPlKPzIlF2OWI6zUz2P8OOTU6k7RNKmIUYYRUimjGPP4eMRKXe5g7skL8+8x78jBnNub/YbsAAAAAElFTkSuQmCC", 34, 34));
		this.appendValueInput("message")
			.appendField("envoyer");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.Msg.esp8266_init_tooltip)
	}
};

Blockly.Blocks["esp8266_send_html"]={
	init:function(){
		this.setColour(Blockly.Blocks.esp8266.HUE);
		this.setHelpUrl(Blockly.Msg.esp8266_url);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR42u2Uf22FQAyAkYAGHOAACVhAAg6mAQc4QAIacIADHLx92WVdae8dd2xZsuz1D0J6bb9ef1z1+BWpXpg/jDmOY13XaZrezoIGPaffwuz7TqC2basrwQZL7Msw5Nj3/WV0L13X4XuNIaMooK5rQgzDIBXjHw16b0wEf7MvzDzPxq1pmnEct21LVINTbLA0aREtgiE7AzB2l4K9gRHzhNEMEqGfJl+qRIl0FP7RoDd3xVeXREgnDDMjbkwqPibBqGCDpUw2EWQ+T5hA4kxMl2XJARgYXpIi0WzRjJg+hUoyP5Ro/RT+0fhJ06FTe2P2kQakZ4FTbLQLEa4xchU/C6Hu4TZGrzsfvVC8aBTazIJ/dcIbozuPV27RjNDV6KrrtunOP4uTwvhZCOvih/DZJcowpMxo6ZeKfzTpfhQUzeyTEb8fNzFa6EF4mPlKPzIlF2OWI6zUz2P8OOTU6k7RNKmIUYYRUimjGPP4eMRKXe5g7skL8+8x78jBnNub/YbsAAAAAElFTkSuQmCC", 34, 34))
			.appendField("envoyer un page HTML");
		this.appendStatementInput("HEAD")
			.appendField("<head>");
		this.appendStatementInput("BODY")
			.appendField("<body>");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.Msg.esp8266_init_tooltip);
	}
};

Blockly.Blocks["esp8266_wait_server"]={
	init:function(){
		this.setColour(Blockly.Blocks.esp8266.HUE);
		this.setHelpUrl(Blockly.Msg.esp8266_url);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR42u2Uf22FQAyAkYAGHOAACVhAAg6mAQc4QAIacIADHLx92WVdae8dd2xZsuz1D0J6bb9ef1z1+BWpXpg/jDmOY13XaZrezoIGPaffwuz7TqC2basrwQZL7Msw5Nj3/WV0L13X4XuNIaMooK5rQgzDIBXjHw16b0wEf7MvzDzPxq1pmnEct21LVINTbLA0aREtgiE7AzB2l4K9gRHzhNEMEqGfJl+qRIl0FP7RoDd3xVeXREgnDDMjbkwqPibBqGCDpUw2EWQ+T5hA4kxMl2XJARgYXpIi0WzRjJg+hUoyP5Ro/RT+0fhJ06FTe2P2kQakZ4FTbLQLEa4xchU/C6Hu4TZGrzsfvVC8aBTazIJ/dcIbozuPV27RjNDV6KrrtunOP4uTwvhZCOvih/DZJcowpMxo6ZeKfzTpfhQUzeyTEb8fNzFa6EF4mPlKPzIlF2OWI6zUz2P8OOTU6k7RNKmIUYYRUimjGPP4eMRKXe5g7skL8+8x78jBnNub/YbsAAAAAElFTkSuQmCC", 34, 34))
			.appendField("attendre une requête d'un client");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.Msg.esp8266_init_tooltip);
	}
};

Blockly.Blocks["esp8266_wait_client"]={
	init:function(){
		this.setColour(Blockly.Blocks.esp8266.HUE);
		this.setHelpUrl(Blockly.Msg.esp8266_url);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR42u2Uf22FQAyAkYAGHOAACVhAAg6mAQc4QAIacIADHLx92WVdae8dd2xZsuz1D0J6bb9ef1z1+BWpXpg/jDmOY13XaZrezoIGPaffwuz7TqC2basrwQZL7Msw5Nj3/WV0L13X4XuNIaMooK5rQgzDIBXjHw16b0wEf7MvzDzPxq1pmnEct21LVINTbLA0aREtgiE7AzB2l4K9gRHzhNEMEqGfJl+qRIl0FP7RoDd3xVeXREgnDDMjbkwqPibBqGCDpUw2EWQ+T5hA4kxMl2XJARgYXpIi0WzRjJg+hUoyP5Ro/RT+0fhJ06FTe2P2kQakZ4FTbLQLEa4xchU/C6Hu4TZGrzsfvVC8aBTazIJ/dcIbozuPV27RjNDV6KrrtunOP4uTwvhZCOvih/DZJcowpMxo6ZeKfzTpfhQUzeyTEb8fNzFa6EF4mPlKPzIlF2OWI6zUz2P8OOTU6k7RNKmIUYYRUimjGPP4eMRKXe5g7skL8+8x78jBnNub/YbsAAAAAElFTkSuQmCC", 34, 34));
		this.appendValueInput("host")
			.appendField("attendre une réponse du serveur");
		this.appendValueInput("port")
			.setAlign(Blockly.ALIGN_RIGHT).appendField("port");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Blockly.Msg.esp8266_init_tooltip);
	}
};

Blockly.Blocks["esp8266_request_indexof"]={
	init:function(){
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR42u2Uf22FQAyAkYAGHOAACVhAAg6mAQc4QAIacIADHLx92WVdae8dd2xZsuz1D0J6bb9ef1z1+BWpXpg/jDmOY13XaZrezoIGPaffwuz7TqC2basrwQZL7Msw5Nj3/WV0L13X4XuNIaMooK5rQgzDIBXjHw16b0wEf7MvzDzPxq1pmnEct21LVINTbLA0aREtgiE7AzB2l4K9gRHzhNEMEqGfJl+qRIl0FP7RoDd3xVeXREgnDDMjbkwqPibBqGCDpUw2EWQ+T5hA4kxMl2XJARgYXpIi0WzRjJg+hUoyP5Ro/RT+0fhJ06FTe2P2kQakZ4FTbLQLEa4xchU/C6Hu4TZGrzsfvVC8aBTazIJ/dcIbozuPV27RjNDV6KrrtunOP4uTwvhZCOvih/DZJcowpMxo6ZeKfzTpfhQUzeyTEb8fNzFa6EF4mPlKPzIlF2OWI6zUz2P8OOTU6k7RNKmIUYYRUimjGPP4eMRKXe5g7skL8+8x78jBnNub/YbsAAAAAElFTkSuQmCC", 34, 34));
        this.appendValueInput("CASE0")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("si dans la requête on trouve");
        this.appendStatementInput("DO0")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setHelpUrl(".");
        this.setColour(Blockly.Blocks.esp8266.HUE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["esp8266_create_item"]));
        this.setTooltip(".");
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0;
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ ) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField("on trouve");
            this.appendStatementInput("DO" + i).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
    },
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, "esp8266_create_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = Blockly.Block.obtain(workspace, "esp8266_create_item");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "esp8266_create_item":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setAlign(Blockly.ALIGN_RIGHT).appendField("on trouve");
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "esp8266_create_item":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};

Blockly.Blocks["esp8266_create_item"]={
	init:function(){
		this.setColour(Blockly.Blocks.esp8266.HUE);
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR42u2Uf22FQAyAkYAGHOAACVhAAg6mAQc4QAIacIADHLx92WVdae8dd2xZsuz1D0J6bb9ef1z1+BWpXpg/jDmOY13XaZrezoIGPaffwuz7TqC2basrwQZL7Msw5Nj3/WV0L13X4XuNIaMooK5rQgzDIBXjHw16b0wEf7MvzDzPxq1pmnEct21LVINTbLA0aREtgiE7AzB2l4K9gRHzhNEMEqGfJl+qRIl0FP7RoDd3xVeXREgnDDMjbkwqPibBqGCDpUw2EWQ+T5hA4kxMl2XJARgYXpIi0WzRjJg+hUoyP5Ro/RT+0fhJ06FTe2P2kQakZ4FTbLQLEa4xchU/C6Hu4TZGrzsfvVC8aBTazIJ/dcIbozuPV27RjNDV6KrrtunOP4uTwvhZCOvih/DZJcowpMxo6ZeKfzTpfhQUzeyTEb8fNzFa6EF4mPlKPzIlF2OWI6zUz2P8OOTU6k7RNKmIUYYRUimjGPP4eMRKXe5g7skL8+8x78jBnNub/YbsAAAAAElFTkSuQmCC", 34, 34))
			.appendField("on trouve");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(".");
		this.contextMenu = false;
	}
};

Blockly.Blocks["esp8266_create_container"]={
	init:function(){
        this.setColour(Blockly.Blocks.esp8266.HUE);
        this.appendDummyInput()
			.appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAIAAAC1JZyVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR42u2Uf22FQAyAkYAGHOAACVhAAg6mAQc4QAIacIADHLx92WVdae8dd2xZsuz1D0J6bb9ef1z1+BWpXpg/jDmOY13XaZrezoIGPaffwuz7TqC2basrwQZL7Msw5Nj3/WV0L13X4XuNIaMooK5rQgzDIBXjHw16b0wEf7MvzDzPxq1pmnEct21LVINTbLA0aREtgiE7AzB2l4K9gRHzhNEMEqGfJl+qRIl0FP7RoDd3xVeXREgnDDMjbkwqPibBqGCDpUw2EWQ+T5hA4kxMl2XJARgYXpIi0WzRjJg+hUoyP5Ro/RT+0fhJ06FTe2P2kQakZ4FTbLQLEa4xchU/C6Hu4TZGrzsfvVC8aBTazIJ/dcIbozuPV27RjNDV6KrrtunOP4uTwvhZCOvih/DZJcowpMxo6ZeKfzTpfhQUzeyTEb8fNzFa6EF4mPlKPzIlF2OWI6zUz2P8OOTU6k7RNKmIUYYRUimjGPP4eMRKXe5g7skL8+8x78jBnNub/YbsAAAAAElFTkSuQmCC", 34, 34))
			.appendField("si dans la requête on trouve");
        this.appendStatementInput("STACK");
        this.setTooltip(".");
        this.contextMenu = false;
    }
};