'use strict';

goog.provide('Blockly.Arduino.robotkit');

goog.require('Blockly.Arduino');

Blockly.Arduino['motora'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var number_speed = block.getFieldValue('speed');
    var code = "";
    Blockly.Arduino.setups_["setup_motora"] = "pinMode(D1, OUTPUT);\n" +
        "  pinMode(D3, OUTPUT);";
    Blockly.Arduino.definitions_['define_motora'] = "void motorA(int motorDirection, int motorSpeed) {\n" +
        "  digitalWrite(D3, motorDirection);\n" +
        "  analogWrite(D1, motorSpeed);\n" +
        "}";
    code = "motorA(" + dropdown_direction + ", " + number_speed + ");\n";

    return code;
};

Blockly.Arduino['motorb'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var number_speed = block.getFieldValue('speed');
    var code = "";
    Blockly.Arduino.setups_["setup_motorb"] = "pinMode(D2, OUTPUT);\n" +
        "  pinMode(D4, OUTPUT);";
    Blockly.Arduino.definitions_['define_motorb'] = "void motorB(int motorDirection, int motorSpeed) {\n" +
        "  digitalWrite(D4, motorDirection);\n" +
        "  analogWrite(D2, motorSpeed);\n" +
        "}";
    code = "motorB(" + dropdown_direction + ", " + number_speed + ");\n";

    return code;
};

Blockly.Arduino['linefollowingsensor'] = function(block) {
    var dropdown_sensor_left = block.getFieldValue('sensor_left');
    var dropdown_sensor_center = block.getFieldValue('sensor_center');
    var dropdown_sensor_right = block.getFieldValue('sensor_right');
    //var statements_if = Blockly.Arduino.statementToCode(block, 'if');
    // TODO: Assemble JavaScript into code variable.
    Blockly.Arduino.setups_["setup_linefollowingsensor"] = "pinMode(D6, INPUT);\n" +
        "  pinMode(D7, INPUT);\n" +
        "  pinMode(D8, INPUT);";

    code = "if (digitalRead(D6) == " + dropdown_sensor_left + " && digitalRead(D7) == " +
        dropdown_sensor_center + " && digitalRead(D8) == " + dropdown_sensor_right + ") {\n" +
        "}\n";

    return code;
};