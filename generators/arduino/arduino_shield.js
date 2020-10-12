/**
 * Generator Editor
 * Shield Arduino
 * 
 * Didier Dumas - 2016
 */
'use strict';

goog.provide('Blockly.Arduino.arduino_shield');

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
  Blockly.Arduino.includes_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>';
  
  Blockly.Arduino.definitions_['var_LiquidCrystal lcd'] = 'LiquidCrystal lcd(8, 9, 4, 5, 6, 7);';

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
  
  Blockly.Arduino.includes_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>';
  Blockly.Arduino.definitions_['var_LiquidCrystal lcd'] = 'LiquidCrystal lcd(8, 9, 4, 5, 6, 7);';
  Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  
  var code = 'lcd.setCursor('+value_num_colonne+','+value_num_ligne+'); \n';
  code    += 'lcd.print('+text4+'); \n';
  return code;
};


Blockly.Arduino.LCD_Keypad_Shield_DFR_09_RAZ = function(block) {
  
  Blockly.Arduino.includes_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>';
  Blockly.Arduino.definitions_['var_LiquidCrystal lcd'] = 'LiquidCrystal lcd(8, 9, 4, 5, 6, 7);';
  Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  
  var code = 'lcd.clear(); \n';
  return code;
};

Blockly.Arduino.LCD_Keypad_Shield_DFR_09_Buttons = function(block) {
	var dropdown_btn = this.getFieldValue('BTN');
	var code;
	if (dropdown_btn == 'RIGHT') code = "(bool)((analogRead(0) > 0) && (analogRead(0) < 50))";
	if (dropdown_btn == 'UP') code = "(bool)((analogRead(0) > 50) && (analogRead(0) < 200))";
	if (dropdown_btn == 'DOWN') code = "(bool)((analogRead(0) > 200) && (analogRead(0) < 400))";
	if (dropdown_btn == 'LEFT') code = "(bool)((analogRead(0) > 400) && (analogRead(0) < 600))";
	if (dropdown_btn == 'SELECT') code = "(bool)((analogRead(0) > 600) && (analogRead(0) < 900))";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Bluetooth_Shield_duinoFun = function() {
	// on croise les données rx <---> tx
  var value_RX_pin = Blockly.Arduino.valueToCode(this, 'BT_TX', Blockly.Arduino.ORDER_ATOMIC);
  var value_TX_pin = Blockly.Arduino.valueToCode(this, 'BT_RX', Blockly.Arduino.ORDER_ATOMIC);   
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = '#include <LiquidCrystal.h>\n'; 
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