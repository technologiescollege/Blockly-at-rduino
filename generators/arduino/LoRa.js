/**
 */
'use strict';

goog.provide('Blockly.Arduino.LoRa');
goog.require('Blockly.Arduino');

Blockly.Arduino['LoRa_init'] = function() {
        var dropdown_freq = this.getFieldValue('FREQ');	
	var dropdown_reset_pin = this.getFieldValue('RESET_PIN');
	var dropdown_ss_pin = this.getFieldValue('SS_PIN');
	var dropdown_dio0_pin = this.getFieldValue('DIO0_PIN');
	var dropdown_spi_freq = this.getFieldValue('SPI_FREQ');

	Blockly.Arduino.includes_['include_SPI'] = '#include <SPI.h>';
	Blockly.Arduino.includes_['include_LoRa'] = '#include <LoRa.h>';

	Blockly.Arduino.definitions_['define_ss_pin'] = 'const int csPin = ' + dropdown_reset_pin + ';';
	Blockly.Arduino.definitions_['define_reset_pin'] = 'const int resetPin = ' + dropdown_reset_pin + ';';
	Blockly.Arduino.definitions_['define_dio0_pin'] = 'const int irqPin = ' + dropdown_dio0_pin + ';';
	Blockly.Arduino.definitions_['define_freq'] = 'const long freq = ' + dropdown_freq + ';';
	Blockly.Arduino.definitions_['define_spi_freq'] = 'const long spi_freq = ' + dropdown_spi_freq + ';';

	Blockly.Arduino.setups_['setup_pins'] = 'LoRa.setPins(csPin, resetPin, irqPin);';
	//Blockly.Arduino.setups_['setup_spi'] = 'LoRa.setSPI();';
	Blockly.Arduino.setups_['setup_spi_freq'] = 'LoRa.setSPIFrequency(spi_freq);';
	Blockly.Arduino.setups_['setup_begin'] = 'LoRa.begin(freq);';

	var code = '';
	return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};

Blockly.Arduino['LoRa_end'] = function() {
        var code = 'LoRa.end();\n';
        return code;
};

Blockly.Arduino['LoRa_onReceive'] = function() {
	var branch = Blockly.Arduino.statementToCode(this, 'NAME');
	var func_onReceive = 'void onReceive(int packetSize) {\n' + branch + '}';

	Blockly.Arduino.userFunctions_['userFunc_LoRa_onReceive'] = func_onReceive;
	Blockly.Arduino.setups_['setup_LoRa_onReceive'] = 'LoRa.onReceive(onReceive);';
        var code = '';
        return code;
};

Blockly.Arduino['LoRa_onTxDone'] = function() {
        var branch = Blockly.Arduino.statementToCode(this, 'NAME');
        var func_onTxDone = 'void onTxDone() {\n' + branch + '}';

        Blockly.Arduino.userFunctions_['userFunc_LoRa_onTxDone'] = func_onTxDone;
        Blockly.Arduino.setups_['setup_LoRa_onTxDone'] = 'LoRa.onTxDone(onTxDone);';
        var code = '';
        return code;
};

Blockly.Arduino['LoRa_beginPacket'] = function() {
	var value_implicit_header = Blockly.Arduino.valueToCode(this, 'IMPLICIT_HEADER', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'LoRa.beginPacket(' + value_implicit_header + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LoRa_endPacket'] = function() {
        var checkbox_async = Blockly.Arduino.valueToCode(this, 'ASYNC', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'LoRa.endPacket('+ checkbox_async + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LoRa_parsePacket'] = function() {
        var value_size = Blockly.Arduino.valueToCode(this, 'SIZE', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'LoRa.parsePacket('+ value_size + ')';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LoRa_receive'] = function() {
        var value_size = Blockly.Arduino.valueToCode(this, 'SIZE', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'LoRa.receive('+ value_size + ');\n';
        return code;
};

Blockly.Arduino['LoRa_packetRssi'] = function() {
        var code = 'LoRa.packetRssi()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LoRa_packetSnr'] = function() {
        var code = 'LoRa.packetSnr()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LoRa_packetFrequencyError'] = function() {
        var code = 'LoRa.packetFrequencyError()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LoRa_available'] = function() {
        var code = 'LoRa.available()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LoRa_peek'] = function() {
        var code = 'LoRa.peek()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LoRa_read'] = function() {
        var code = 'LoRa.read()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['LoRa_idle'] = function() {
        var code = 'LoRa.idle();\n';
        return code;
};

Blockly.Arduino['LoRa_sleep'] = function() {
        var code = 'LoRa.sleep();\n';
        return code;
};

Blockly.Arduino['LoRa_setTxPower'] = function() {
	var value_level = Blockly.Arduino.valueToCode(this, 'LEVEL', Blockly.Arduino.ORDER_ATOMIC); 
	var dropdown_output_pin = this.getFieldValue('OUTPUT_PIN');
	var code = 'LoRa.setTxPower(' + value_level + ',' + dropdown_output_pin + ');\n';
        return code;
};

Blockly.Arduino['LoRa_setSpreadingFactor'] = function() {
        var dropdown_spread = this.getFieldValue('SPREAD');
        var code = 'LoRa.setSpreadingFactor(' + dropdown_spread + ');\n';
        return code;
};

Blockly.Arduino['LoRa_setSignalBandwidth'] = function() {
        var dropdown_bandwidth = this.getFieldValue('BANDWIDTH');
        var code = 'LoRa.setSignalBandwidth(' + dropdown_bandwidth + ');\n';
        return code;
};

Blockly.Arduino['LoRa_setCodingRate4'] = function() {
        var dropdown_denominator = this.getFieldValue('DENOMINATOR');
	var code = 'LoRa.setCodingRate4(' + dropdown_denominator + ');\n';
        return code;
};

Blockly.Arduino['LoRa_setPreambleLength'] = function() {
        var value_length = Blockly.Arduino.valueToCode(this, 'LENGTH', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'LoRa.setPreambleLength(' + value_length + ');\n';
        return code;
};

Blockly.Arduino['LoRa_setSyncWord'] = function() {
        var value_word = Blockly.Arduino.valueToCode(this, 'WORD', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'LoRa.setSyncWord(' + value_word + ');\n';
        return code;
};

Blockly.Arduino['LoRa_enableCrc'] = function() {
        var code = 'LoRa.enableCrc();\n';
        return code;
};

Blockly.Arduino['LoRa_disableCrc'] = function() {
        var code = 'LoRa.disableCrc();\n';
        return code;
};

Blockly.Arduino['LoRa_enableInvertIq'] = function() {
        var code = 'LoRa.enableInvertIq();\n';
        return code;
};

Blockly.Arduino['LoRa_disableInvertIq'] = function() {
        var code = 'LoRa.disableInvertIq();\n';
        return code;
};

Blockly.Arduino['LoRa_random'] = function() {
        var code = 'LoRa.random()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

