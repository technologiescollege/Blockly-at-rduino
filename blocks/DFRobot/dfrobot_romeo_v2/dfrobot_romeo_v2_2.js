//http://www.dfrobot.com/wiki/index.php/Romeo_V2-All_in_one_Controller_%28R3%29_%28SKU:DFR0225%29

goog.provide('Blockly.Blocks.RoMeo2');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['romeo_mot_M1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo2.HUE);
	this.appendValueInput("PWM")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/mot_left.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROMEO3_MOTOR1_SENS);	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ROMEO3_MOTOR_SENS)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROMEO3_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['romeo_mot_M2'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo2.HUE);
	this.appendValueInput("PWM")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/mot_right.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROMEO3_MOTOR2_SENS);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ROMEO3_MOTOR_SENS)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);	
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROMEO3_MOTOR_TOOLTIP);
  }
};