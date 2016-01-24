
Blockly.Arduino.lp2i_mp3_play = function() {
  //var fichier = this.getTitleValue('Fichier'); 
  var value_fichier = Blockly.Arduino.valueToCode(this, 'Fichier', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['serial_mp3'] = '#include <SoftwareSerial.h>;\n SoftwareSerial mySerial(10, 11);\n'; 
  Blockly.Arduino.definitions_['define_mp3'] = '#include <DFPlayer_Mini_Mp3.h>\n';   
  //dans le setup    
  Blockly.Arduino.setups_["setup_mp3"] = "void mp3_reset();\n Serial.begin(9600);\n mySerial.begin(9600);\n mp3_set_serial(mySerial);\n mp3_set_volume (20);\n";
  var code = 'mp3_play('+value_fichier+');\n';
  return code;
};
