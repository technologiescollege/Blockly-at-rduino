/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Thanks to Carlos @Ardublockly
 */

/**
 * @fileoverview Blocks for Arduino Stepper library.
 *     The Arduino Servo functions syntax can be found in the following URL:
 *     http://arduino.cc/en/Reference/Stepper
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */

goog.provide('Blockly.Blocks.stepper');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['stepper_config'] = {
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/StepperConstructor');
    this.setColour(Blockly.Blocks.stepper.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER_SETUP)
        .appendField(Blockly.Msg.STEPPER_MOTOR);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STEPPER_PIN1);
    this.appendValueInput('STEPPER_PIN1')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STEPPER_REVOLVS);
    this.appendValueInput('STEPPER_PIN2')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STEPPER_PIN2);
    this.setTooltip(Blockly.Msg.STEPPER_SETUP_TIP);
    this.appendValueInput('STEPPER_STEPS')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STEPPER_REVOLVS);
    this.appendValueInput('STEPPER_SPEED')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STEPPER_SPEED);
    this.setTooltip(Blockly.Msg.STEPPER_SETUP_TIP);
  }
};

Blockly.Blocks['stepper_step'] = {
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/StepperStep');
    this.setColour(Blockly.Blocks.stepper.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER_STEP);
    this.appendValueInput('STEPPER_STEPS')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPPER_STEPS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.STEPPER_STEP_TIP);
  }
};
