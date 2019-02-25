'use strict';

goog.provide('Blockly.Blocks.MRduino2');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


 Blockly.Blocks['MRduino2_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino2_init)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Initialisation du robot MRduino2');
  }
};

Blockly.Blocks['MRduino2_forward'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_forward);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Bloc pour faire avancer le robot avec une vitesse en 0 et 100%');
  }
};

Blockly.Blocks['MRduino2_forward_mm'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_forward_mm);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

 Blockly.Blocks['MRduino2_stop'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino2_stop)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Bloc pour arreter le robot');
  }
};

 Blockly.Blocks['MRduino2_back'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_back);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Bloc pour faire reculer le robot avec une vitesse en 0 et 100%');
  }
};

Blockly.Blocks['MRduino2_back_mm'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_back_mm);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['MRduino2_motorRight'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_motorRight);
	this.appendValueInput("DIR", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_motorRightDir);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['MRduino2_motorLeft'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_motorLeft);
	this.appendValueInput("DIR", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_motorLeftDir);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

 Blockly.Blocks['MRduino2_turnLeft'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_turnLeft);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

 Blockly.Blocks['MRduino2_turnLeft_degree'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_turnLeft_degree);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

 Blockly.Blocks['MRduino2_turnRight_degree'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_turnRight_degree);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

 Blockly.Blocks['MRduino2_turnRight'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_turnRight);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

 Blockly.Blocks['MRduino2_proxSensor'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino2_proxSensor)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'Number');
    this.setTooltip('proxSensor');
  }
};

Blockly.Blocks['MRduino2_ledRight'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_ledRight);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

 Blockly.Blocks['MRduino2_ledLeft'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino2_ledLeft);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['MRduino2_battery'] = {
  init: function() {
    this.setColour(Blockly.Blocks.MRduino2.HUE);
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino2_battery)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'float');
    this.setTooltip('battery');
  }
};

