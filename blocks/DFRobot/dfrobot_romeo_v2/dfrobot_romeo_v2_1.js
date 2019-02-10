//http://www.dfrobot.com/wiki/index.php/Romeo_V2-All_in_one_Controller_%28R3%29_%28SKU:DFR0225%29

goog.provide('Blockly.Blocks.RoMeo1');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['romeo_forward'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo1.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/forward.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_FORWARD_TOOLTIP);
  }
};

Blockly.Blocks['romeo_backward'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo1.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/backward.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_BACKWARD_TOOLTIP);
  }
};

Blockly.Blocks['romeo_turn_left'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo1.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/left.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_TURN_LEFT_TOOLTIP);
  }
};

Blockly.Blocks['romeo_turn_right'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo1.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/right.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_TURN_RIGHT_TOOLTIP);
  }
};