/***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/

'use strict';

goog.provide('Blockly.Arduino.RTC_DS3231');

goog.require('Blockly.Arduino');

Blockly.Arduino['Init_RTC_ds3231'] = function() {
  //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.includes_['include_RTClib'] = '#include <RTClib.h>';
  Blockly.Arduino.definitions_['init_ds3231'] = 'RTC_DS3231 rtc;';
  Blockly.Arduino.setups_['setup_ds3231'] = 'rtc.begin();';
  	 	 
  var code='';
  return code;
};

Blockly.Arduino['DateTime_RTC_ds3231'] = function(block) {	
	var day = Blockly.Arduino.valueToCode(this, 'DS3231_DAY', Blockly.Arduino.ORDER_ATOMIC);
	var month = Blockly.Arduino.valueToCode(this, 'DS3231_MONTH', Blockly.Arduino.ORDER_ATOMIC);
	var year = Blockly.Arduino.valueToCode(this, 'DS3231_YEAR', Blockly.Arduino.ORDER_ATOMIC);
	var hour = Blockly.Arduino.valueToCode(this, 'DS3231_HOUR', Blockly.Arduino.ORDER_ATOMIC); 
	var min = Blockly.Arduino.valueToCode(this, 'DS3231_MINUTE', Blockly.Arduino.ORDER_ATOMIC);
	var sec = Blockly.Arduino.valueToCode(this, 'DS3231_SECOND', Blockly.Arduino.ORDER_ATOMIC);
   
	var code='rtc.adjust(DateTime('+year+','+month+','+day+','+hour+','+min+','+sec+'));\n';
	return code;
};



Blockly.Arduino['order_read_rtc_ds3231'] = function(block) {
 
	Blockly.Arduino.definitions_['ds3231_datetime'] = 'DateTime t;';
	
	var code = 't=rtc.now();\n'
	return code;
};


Blockly.Arduino['values_ds3231'] = function(block) {
	Blockly.Arduino.definitions_['ds3231_datetime'] = 'DateTime t;';

	var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
	if (Output_Value==5)
		var code = 't.second()';
	else if (Output_Value==4)
		var code = 't.minute()';
	else if (Output_Value==3)
		var code = 't.hour()';
	else if (Output_Value==2)
		var code = 't.day()';
	else if (Output_Value==1)
		var code = 't.month()';
	else if (Output_Value==0)
		var code = 't.year()';
	else
		var code = 't.dayOfTheWeek()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['values_text_ds3231'] = function(block) {
	Blockly.Arduino.definitions_['ds3231_datetime'] = 'DateTime t;';
        Blockly.Arduino.definitions_['ds3231_days'] = 'String daysOfTheWeek[7]={"Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"};';
        Blockly.Arduino.definitions_['ds3231_months'] = 'String monthsNames[12]={"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"};';

	var Output_Value = this.getFieldValue('OUTPUT_VALUE');

	if (Output_Value==1)
		var code = 'monthsNames[t.month()-1]';
	else
		var code = 'daysOfTheWeek[t.dayOfTheWeek()]';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
