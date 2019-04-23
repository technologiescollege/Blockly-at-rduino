goog.provide('Blockly.Blocks.softserial');

goog.require('Blockly.Blocks');

Blockly.Arduino['soft_init'] = function(block) {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SOFTSERIAL_NAME');
  var dropdown_speed = this.getFieldValue('SPEED');
  Blockly.Arduino.includes_['define_ss'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['define_ss_'+dropdown_name] = 'SoftwareSerial '+dropdown_name+'('+dropdown_pin1+','+dropdown_pin2+');';
  Blockly.Arduino.setups_['setup_sserial_'+dropdown_name] = dropdown_name+'.begin(' + dropdown_speed + ');' ;
  var code = '';
  return code;
};

Blockly.Arduino['soft_read'] = function(block) {
  var dropdown_name = this.getFieldValue('SOFTSERIAL_NAME');
  var code = dropdown_name+'.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['soft_readStringUntil'] = function(block) {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  content = content.replace('"', '\'');
  content = content.replace('"', '\'');
  var dropdown_name = this.getFieldValue('SOFTSERIAL_NAME');
  var code = dropdown_name+'.readStringUntil(' + content + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['soft_print'] = function(block) {
  var dropdown_name = this.getFieldValue('SOFTSERIAL_NAME');
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');

  //Blockly.Arduino.setups_['setup_sserial'] = 'mySerial.begin(9600);\n';

  var code = dropdown_name+'.println('+content+');\n';
  return code;
};

Blockly.Arduino['soft_write'] = function(block) {
  var dropdown_name = this.getFieldValue('SOFTSERIAL_NAME');
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');

  //Blockly.Arduino.setups_['setup_sserial'] = 'mySerial.begin(9600);\n';

  var code = dropdown_name+'.write('+content+');\n';
  return code;
};

Blockly.Arduino['soft_available'] = function(block) {
  var dropdown_name = this.getFieldValue('SOFTSERIAL_NAME');
  // TODO: Assemble Python into code variable.
  // Blockly.Arduino.setups_['setup_sserial'] = 'mySerial.begin(9600);\n';
  var code = dropdown_name+'.available()';

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['soft_flush'] = function() {
  var dropdown_name = this.getFieldValue('SOFTSERIAL_NAME');
  var code = dropdown_name+'.flush();\n';
  return code;
};
