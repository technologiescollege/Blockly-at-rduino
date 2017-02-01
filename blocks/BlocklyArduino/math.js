
'use strict';

goog.provide('Blockly.Blocks.math');

goog.require('Blockly.Blocks');

Blockly.Blocks.math.HUE = "#5CB712";

Blockly.Blocks.inout_angle_maths = {
  init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
	this.setHelpUrl('https://developers.google.com/blockly/custom-blocks/defining-blocks#appendfield');
    this.appendDummyInput("")
        .appendField("angle")
        .appendField(new Blockly.FieldAngle("90"), "ANGLE");
    this.setOutput(true, "Number");
    this.setTooltip('angle °');
  }
};