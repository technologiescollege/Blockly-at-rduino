'use strict';

goog.provide('Blockly.Arduino.keypad');

goog.require('Blockly.Arduino');

Blockly.Arduino.keypad_touche_appuyee = function() {
  var value_pin_l1 = Blockly.Arduino.valueToCode(this, 'L1', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin_l2 = Blockly.Arduino.valueToCode(this, 'L2', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin_l3 = Blockly.Arduino.valueToCode(this, 'L3', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin_l4 = Blockly.Arduino.valueToCode(this, 'L4', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin_c1 = Blockly.Arduino.valueToCode(this, 'C1', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin_c2 = Blockly.Arduino.valueToCode(this, 'C2', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin_c3 = Blockly.Arduino.valueToCode(this, 'C3', Blockly.Arduino.ORDER_ATOMIC);
  var idKeyPad =  value_pin_l1 + value_pin_l2 + value_pin_l3 + value_pin_l4 + value_pin_c1 + value_pin_c2 + value_pin_c3;

  Blockly.Arduino.includes_['define_collyc_keypad12'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['collyc_const_keypad_rows'] = 'const byte ROWS12 = 4; // Four rows';
  Blockly.Arduino.definitions_['collyc_const_keypad_cols'] = 'const byte COLS12 = 3; // Three columns';
  Blockly.Arduino.definitions_['collyc_const_keypad_keys12'] = "const char keys12[ROWS12][COLS12] = {\n" + 
                                                          "{'1','2','3'},\n" + 
                                                          "{'4','5','6'},\n" + 
                                                          "{'7','8','9'},\n" + 
                                                          "{'*','0','#'}\n" + 
                                                          "};\n";
  Blockly.Arduino.definitions_['collyc_keypad_rowPins'] = "// Connect keypad ROW0, ROW1, ROW2 and ROW3 to these Arduino pins. \n" +
                                                      "byte rowPins"+ idKeyPad + "[ROWS12] = {"+ value_pin_l1 + ',' + value_pin_l2 + ',' + value_pin_l3 + ',' + value_pin_l4 +"};\n";
  Blockly.Arduino.definitions_['collyc_keypad_colPins'] = "// Connect keypad COL0, COL1 and COL2 to these Arduino pins.\n" +
                                                      "byte colPins"+ idKeyPad + "[COLS12] = {" + value_pin_c1 + ',' + value_pin_c2 + ',' + value_pin_c3 + "};\n" 
  Blockly.Arduino.definitions_['collyc_var_keypad' + idKeyPad] = 'Keypad keypad_' + idKeyPad + 
                                '(makeKeymap(keys12), rowPins'+ idKeyPad + ', colPins'+ idKeyPad + ', ROWS12, COLS12 );\n';
  // Blockly.Arduino.setups_['setup_keypad_' + idKeyPad] = 'keypad_' + idKeyPad + '.attach(' + value_pin_c1 + ');\n';
  var code = '(keypad_' + idKeyPad + '.getKey())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};