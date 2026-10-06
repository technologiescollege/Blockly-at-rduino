/**
 * Generators for legacy short block names used by older examples.
 */
'use strict';

Blockly.Arduino.digital_write = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = block.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  return 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
};

Blockly.Arduino.inout_bp = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT_PULLUP);';
  return ['digitalRead(' + dropdown_pin + ') == LOW', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.dht11 = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var choice = block.getFieldValue('choix');
  Blockly.Arduino.includes_['dht.h'] = '#include <DHT.h>';
  Blockly.Arduino.definitions_['dht'] = 'DHT dht(' + dropdown_pin + ', DHT11);';
  Blockly.Arduino.setups_['dht'] = 'dht.begin();';
  var code = (choice === 'h') ? 'dht.readHumidity()' : 'dht.readTemperature()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.suiveur_ligne = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
  return ['digitalRead(' + dropdown_pin + ') == HIGH', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.potentiometre = function(block) {
  var dropdown_broche = block.getFieldValue('broche');
  return ['analogRead(' + dropdown_broche + ')', Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.moteur_dc = function(block) {
  var dropdown_moteur = block.getFieldValue('MOTEUR');
  var dropdown_mot = parseInt(dropdown_moteur, 10) + 5;
  var dropdown_etat = block.getFieldValue('ETAT');
  var value_vitesse = Blockly.Arduino.valueToCode(block, 'Vitesse');
  Blockly.Arduino.setups_['setup_output_' + dropdown_moteur] = 'pinMode(' + dropdown_moteur + ', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_' + dropdown_mot] = 'pinMode(' + dropdown_mot + ', OUTPUT);';
  return 'analogWrite(' + dropdown_moteur + ',' + value_vitesse + ');\ndigitalWrite(' + dropdown_mot + ',' + dropdown_etat + ');\n';
};

Blockly.Arduino.moteur_dc_stop = function(block) {
  var dropdown_moteur = block.getFieldValue('MOTEUR');
  var dropdown_mot = parseInt(dropdown_moteur, 10) + 5;
  Blockly.Arduino.setups_['setup_output_' + dropdown_moteur] = 'pinMode(' + dropdown_moteur + ', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_' + dropdown_mot] = 'pinMode(' + dropdown_mot + ', OUTPUT);';
  return 'analogWrite(' + dropdown_moteur + ',0);\ndigitalWrite(' + dropdown_mot + ',LOW);\n';
};

Blockly.Arduino.matrice8x8_symbole = function(block) {
  var name = block.getFieldValue('NAME') || block.getFieldValue('VAR');
  var l1 = block.getFieldValue('L1');
  var l2 = block.getFieldValue('L2');
  var l3 = block.getFieldValue('L3');
  var l4 = block.getFieldValue('L4');
  var l5 = block.getFieldValue('L5');
  var l6 = block.getFieldValue('L6');
  var l7 = block.getFieldValue('L7');
  var l8 = block.getFieldValue('L8');
  Blockly.Arduino.definitions_['variablebyte' + name] =
    'byte ' + name + '[] = {\n B' + l1 + ',\n B' + l2 + ',\n B' + l3 + ',\n B' + l4 +
    ',\n B' + l5 + ',\n B' + l6 + ',\n B' + l7 + ',\n B' + l8 + '\n};';
  return '';
};

Blockly.Arduino.matrice8x8_init = function(block) {
  var din = Blockly.Arduino.valueToCode(block, 'DIN', Blockly.Arduino.ORDER_ATOMIC);
  var clk = Blockly.Arduino.valueToCode(block, 'CLK', Blockly.Arduino.ORDER_ATOMIC);
  var cs = Blockly.Arduino.valueToCode(block, 'CS', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['matrice8x8init'] = '#include <LedControl.h>';
  Blockly.Arduino.definitions_['matrice8x8init'] = 'LedControl lc=LedControl(' + din + ',' + clk + ',' + cs + ',1)';
  Blockly.Arduino.codeFunctions_['matrice8x8init'] =
    'void afficher(byte s[]) {\n  for (int i=0; i<8; i++) {\n    lc.setRow(0,i,s[i]);\n  };\n}\n';
  Blockly.Arduino.setups_['matrice8x8'] =
    'lc.shutdown(0,false);\n  lc.shutdown(1,false);\n  lc.setIntensity(0,5);\n  lc.setIntensity(1,5);\n  lc.clearDisplay(0);\n  lc.clearDisplay(1);';
  return '';
};

Blockly.Arduino.matrice8x8_aff = function(block) {
  var text = block.getFieldValue('TEXT');
  return 'afficher(' + text + ');\n';
};

Blockly.Arduino.lcd_i2c = function(block) {
  var fond_couleur = block.getFieldValue('fond');
  Blockly.Arduino.includes_['rgb_lcd'] = '#include <Wire.h>\n#include <rgb_lcd.h>';
  Blockly.Arduino.definitions_['rgb_lcd'] = 'rgb_lcd lcd;';
  Blockly.Arduino.setups_['rgb_lcd'] = 'lcd.begin(16,2);';
  var colors = {
    bleu: 'lcd.setRGB(0,0,255);\n',
    jaune: 'lcd.setRGB(255,255,0);\n',
    rouge: 'lcd.setRGB(255,0,0);\n',
    vert: 'lcd.setRGB(0,255,0);\n'
  };
  return colors[fond_couleur] || '';
};
