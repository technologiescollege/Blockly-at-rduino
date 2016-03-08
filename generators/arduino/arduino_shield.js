/**
 * Generator Editor
 * Shield Arduino
 * 
 * Didier Dumas - 2016
 */


 goog.require('Blockly.Arduino');


Blockly.Arduino.LCD_Keypad_Shield_DFR_09 = function() {
  var text1 = Blockly.Arduino.valueToCode(this, 'TEXT1',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var text2 = Blockly.Arduino.valueToCode(this, 'TEXT2',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  /*if(text.length>16||text2.length>16){
      alert("string is too long");
  }*/
  Blockly.Arduino.definitions_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>\n';
  
  Blockly.Arduino.definitions_['var_LiquidCrystal lcd'] = 'LiquidCrystal lcd(8, 9, 4, 5, 6, 7);\n';

   Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  var code = 'lcd.clear(); \n';
  code	  += 'lcd.setCursor(0,0); \n';
  code    += 'lcd.print('+text1+'); \n';
  code    += 'lcd.setCursor(0,1); \n';
  code    += 'lcd.print('+text2+');\n';
  code    += 'delay('+delay_time+');\n';
  return code;
};


Blockly.Arduino.LCD_Keypad_Shield_DFR_09_lc = function(block) {
  var value_num_ligne = Blockly.Arduino.valueToCode(this, 'ligne', Blockly.Arduino.ORDER_ATOMIC)-1;
  var value_num_colonne = Blockly.Arduino.valueToCode(this, 'colonne', Blockly.Arduino.ORDER_ATOMIC)-1;
  var text4 = Blockly.Arduino.valueToCode(this, 'TEXT4', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  
  Blockly.Arduino.definitions_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['var_LiquidCrystal lcd'] = 'LiquidCrystal lcd(8, 9, 4, 5, 6, 7);\n';
  Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  
  var code = 'lcd.setCursor('+value_num_colonne+','+value_num_ligne+'); \n';
  code    += 'lcd.print('+text4+'); \n';
return code;
};


Blockly.Arduino.LCD_Keypad_Shield_DFR_09_RAZ = function(block) {
  
  Blockly.Arduino.definitions_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['var_LiquidCrystal lcd'] = 'LiquidCrystal lcd(8, 9, 4, 5, 6, 7);\n';
  Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  
  var code = 'lcd.clear(); \n';
return code;
};

Blockly.Arduino.Bluetooth_Shield_duinoFun = function() {
	// on croise les données rx <---> tx
  var value_RX_pin = Blockly.Arduino.valueToCode(this, 'BT_TX', Blockly.Arduino.ORDER_ATOMIC);
  var value_TX_pin = Blockly.Arduino.valueToCode(this, 'BT_RX', Blockly.Arduino.ORDER_ATOMIC);   
  //dans include définition    
  Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>\n'; 
  Blockly.Arduino.definitions_['define_RxTx'] = 
  '#define RxD '+ value_RX_pin +'\n' + 
  '#define TxD '+ value_TX_pin +'\n'; 
  
  Blockly.Arduino.definitions_['define_var_bt'] = 'SoftwareSerial blueToothSerial(RxD,TxD);\n';   

  Blockly.Arduino.setups_['setup_bt'] = 
  'Serial.begin(9600); \n'+
  '  pinMode(RxD, INPUT); \n' +
  '  pinMode(TxD, OUTPUT); \n';
  Blockly.Arduino.setups_['setup_bt_connection'] = 'setupBlueToothConnection();'; 

  Blockly.Arduino.definitions_['define_setupBlueToothConnection'] = 'void setupBlueToothConnection()\n'+
  '{\n'+
  '  blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n'+
  '  blueToothSerial.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n'+
  '  blueToothSerial.print("\\r\\n+STNA=SeeedBTSlave\\r\\n"); //set the bluetooth name as SeeedBTSlave\n'+
  '//blueToothSerial.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n'+
  '  blueToothSerial.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n'+
  '  blueToothSerial.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n'+
  '  Serial.println("The slave bluetooth is inquirable!");\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial.flush();\n'+
  '}\n';
  
 var code = '';
  return code;
};

Blockly.Arduino.ArduiLed = function(block) {
  // Ce programme permet d'allumer la led 13 en utilisant l'application Android ArduiLed
  Blockly.Arduino.definitions_['define_LedPin'] = '#define LedPin 13 \n';  
  Blockly.Arduino.definitions_['define_RecvDonnees'] = 'byte RecvDonnees; \n';    
  Blockly.Arduino.setups_['setup_LedPin'] = '  pinMode(LedPin, OUTPUT);'; 
  
  var code = 
  'while(1){ \n'+
  '  if(blueToothSerial.available()){          // Vérifie que toutes les données ont été envoyées \n'+
  '    RecvDonnees = blueToothSerial.read();   // Lecture des données\n'+  
  '    Serial.print("RecvDonnees = ");\n'+  
  '    Serial.println(RecvDonnees);\n'+  
  '// l application ArduiLed envoie un nombre pour modifie l état de la Led\n'+  
  '// Normallement 1 ou 0, mais une autre valeur est reçue dans RecvDonnees ! A debugger \n'+  
  '    if (RecvDonnees == 128){               // 128 correspond à la valeur envoyée par l application Android (2)\n'+
  '       digitalWrite(LedPin,LOW);\n'+
  '    } else if (RecvDonnees == 120) {       // 120 correspond à la valeur envoyée par l application Android (1)\n'+  
  '       digitalWrite(LedPin,HIGH);\n'+  
  '    }\n'+
  '  }\n'+  
  '  if(Serial.available()){                 //Vérifie s il y a des données envoyées\n'+  
  '    RecvDonnees  = Serial.read();\n'+
  '    Serial.print("RecvDonnees = ");\n'+ 
  '    Serial.println(RecvDonnees);\n'+ 
  '    blueToothSerial.print(RecvDonnees);\n'+ 
  '  }\n'+ 
  '}\n'+ 
  '\n';
  
 
  return code;
};