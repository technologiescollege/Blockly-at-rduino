
'use strict';



/**
 * Common HSV hue for all blocks in this category.
 */

 Blockly.Blocks['EsusBoard_init'] = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.EsusBoard_init)
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
  }
};

 Blockly.Blocks['EsusBoard_motor1'] = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField(Blockly.Msg.MOTOR1_SPEED);
    this.setInputsInline(true);
	this.appendValueInput("NEW_LINE", 'Boolean') 
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MOTOR1_DIRECTION);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

 Blockly.Blocks['EsusBoard_motor2'] = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField(Blockly.Msg.MOTOR2_SPEED);
    this.setInputsInline(true);
	this.appendValueInput("NEW_LINE", 'Boolean') 
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MOTOR2_DIRECTION);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['EsusBoard_analog'] = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESUS_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
  }
};

 Blockly.Blocks['EsusBoard_WifiConfig'] = {
  init: function() {
    this.setColour("#00975D");
	this.setHelpUrl('http://www.macerobotics.com');
    this.appendValueInput("Text_ssid")
		.setCheck('String')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.WIFI_SSID);
    this.appendValueInput("Text_password")
		.setCheck('String')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.WIFI_PASSWORD);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ESUS_WIFI_CONFIG);
  }
};

 Blockly.Blocks['EsusBoard_WifiConfigIP'] = {
  init: function() {
    this.setColour("#00975D");
	this.setHelpUrl('http://www.macerobotics.com');
    this.appendValueInput("Text_ip1")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.WIFI_IP);
    this.appendValueInput("Text_ip2")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
	this.appendValueInput("Text_ip3")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
	this.appendValueInput("Text_ip4")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['EsusBoard_ReadStream'] = {
  init: function() {
    this.setColour("#00975D");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.WIFI_READ_STREAM);
	this.setOutput(true, "Number");
	this.setTooltip('');
  }
};

Blockly.Blocks['EsusBoard_dataWifiAvailable'] = {
  init: function() {
    this.setColour("#00975D");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.WIFI_DATA_AVAILABLE);
	this.setOutput(true, "Boolean");
	this.setTooltip('');
  }
};

Blockly.Blocks['EsusBoard_WifiContain'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL);
    this.setColour("#00975D");
    this.appendDummyInput("")
        .appendField(Blockly.Msg.WIFI_CONTAIN);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.TEXT_APPEND_VARIABLE), 'VAR')
        .appendField(Blockly.Msg.WIFI_CONTAIN2);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
    this.setOutput(true, 'String');
  }
}

Blockly.Blocks['conversion_toString'] = {
  init: function() {
    this.setColour("#00979D");
    this.appendValueInput("NAME")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.CONV_toSring);
    this.setOutput(true, 'String');
    this.setTooltip('');
  }
};





