goog.provide('Blockly.Blocks.softserial');

goog.require('Blockly.Blocks');

Blockly.Arduino['soft_init'] = function(block) {
  var dropdown_pin1 = this.getFieldValue('PIN1');
  var dropdown_pin2 = this.getFieldValue('PIN2');
  var dropdown_speed = this.getFieldValue('SPEED');
  Blockly.Arduino.definitions_['define_ss'] = '#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['define_ss'+dropdown_pin1] = 'SoftwareSerial mySerial'+dropdown_pin1+'('+dropdown_pin1+','+dropdown_pin2+');\n';
  Blockly.Arduino.setups_['setup_sserial'+dropdown_pin1] = 'mySerial'+dropdown_pin1+'.begin(' + dropdown_speed + ');' ;
  var code = '';
  return code;
};

Blockly.Arduino['soft_read'] = function(block) {
  var RXPIN = this.getFieldValue('RX_ss');
  var code = 'mySerial'+RXPIN+'.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['soft_print'] = function(block) {
  var RXPIN = this.getFieldValue('RX_ss');
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');

  //Blockly.Arduino.setups_['setup_sserial'] = 'mySerial.begin(9600);\n';

  var code = 'mySerial'+RXPIN+'.println('+content+');\n';
  return code;
};

Blockly.Arduino['soft_write'] = function(block) {
  var RXPIN = this.getFieldValue('RX_ss');
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');

  //Blockly.Arduino.setups_['setup_sserial'] = 'mySerial.begin(9600);\n';

  var code = 'mySerial'+RXPIN+'.write('+content+');\n';
  return code;
};

Blockly.Arduino['soft_available'] = function(block) {
  var RXPIN = this.getFieldValue('RX_ss');
  // TODO: Assemble Python into code variable.
  // Blockly.Arduino.setups_['setup_sserial'] = 'mySerial.begin(9600);\n';
  var code = 'mySerial'+RXPIN+'.available()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['soft_flush'] = function() {
  var RXPIN = this.getFieldValue('RX_ss');
  var code = 'mySerial'+RXPIN+'.flush();\n';
  return code;
};
