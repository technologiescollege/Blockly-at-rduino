/**
 */
'use strict';

goog.provide('Blockly.Blocks.LoRa');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.LORA_HUE = "190";

Blockly.Blocks['LoRa_init'] = {
  init: function() {
	this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
	this.appendDummyInput("")
		.appendField(Blockly.Msg.LORA_INIT);
	this.appendDummyInput("")
	  	.setAlign(Blockly.ALIGN_RIGHT)
	  	.appendField(Blockly.Msg.LORA_FREQ)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.LORA_FREQ_DROPDOWN), "FREQ");
	this.appendDummyInput("")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_RESET_PIN)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.LORA_RESET_PIN_DROPDOWN), "RESET_PIN");
	this.appendDummyInput("")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_SS_PIN)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.LORA_SS_PIN_DROPDOWN), "SS_PIN");
	this.appendDummyInput("")
	  	.setAlign(Blockly.ALIGN_RIGHT)
	  	.appendField(Blockly.Msg.LORA_DIO0_PIN)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.LORA_DIO0_PIN_DROPDOWN), "DIO0_PIN");
	this.appendDummyInput("")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_SPI_FREQ)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.LORA_SPI_FREQ_DROPDOWN), "SPI_FREQ");
	this.setOutput(true, 'Boolean');
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_INIT_TOOLTIP);
	}
};

Blockly.Msg.LORA_END = 'end';

Blockly.Blocks['LoRa_end'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_END);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_END_TOOLTIP);
        }
};

Blockly.Msg.LORA_ONRECEIVE = 'on receive';

Blockly.Blocks['LoRa_onReceive'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_ONRECEIVE);
	this.appendStatementInput("NAME");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_ONRECEIVE_TOOLTIP);
        }
};

Blockly.Msg.LORA_ONTXDONE = 'on transmit done';

Blockly.Blocks['LoRa_onTxDone'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_ONTXDONE);
	this.appendStatementInput("NAME");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_ONTXDONE_TOOLTIP);
        }
};


Blockly.Msg.LORA_BEGINPACKET = 'begin packet';
Blockly.Msg.LORA_IMPLICIT_HEADER = 'implicit header';

Blockly.Blocks['LoRa_beginPacket'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_BEGINPACKET);
        this.appendValueInput("IMPLICIT_HEADER")
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_IMPLICIT_HEADER);
	this.setInputsInline(false);
	this.setOutput(true, 'Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_BEGINPACKET_TOOLTIP);
	}
};

Blockly.Msg.LORA_ENDPACKET = 'end packet';
Blockly.Msg.LORA_ASYNC = 'async';

Blockly.Blocks['LoRa_endPacket'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_ENDPACKET);
	this.appendValueInput("ASYNC")
                .setCheck("Boolean")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_ASYNC);
        this.setInputsInline(false);
	this.setOutput(true, 'Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_ENDPACKET_TOOLTIP);
        }
};
/*
Blockly.Msg.LORA_PRINT = 'print';

Blockly.Blocks['LoRa_print'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_PRINT);
        this.setInputsInline(false);
	this.setOutput(true, 'Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

*/

Blockly.Msg.LORA_WRITE_BYTE = 'write byte';
Blockly.Msg.LORA_CHARACTER = 'character';

Blockly.Blocks['LoRa_write_byte'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_WRITE_BYTE);
        this.appendValueInput("CHAR")
                .setCheck("String")
                .appendField(Blockly.Msg.LORA_CHARACTER);
	this.setInputsInline(false);
        this.setOutput(true, 'Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_WRITE_BYTE_TOOLTIP);
        }
};

/*
Blockly.Msg.LORA_WRITE_BUFFER = 'write buffer';

Blockly.Blocks['LoRa_write_buffer'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_WRITE_BUFFER);
        this.setInputsInline(false);
        this.setOutput(true, 'Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};
*/

Blockly.Msg.LORA_AVAILABLE = 'available';

Blockly.Blocks['LoRa_available'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_AVAILABLE);
        this.setInputsInline(false);
	this.setOutput(true, 'Number');
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
	this.setTooltip(Blockly.Msg.LORA_AVAILABLE_TOOLTIP);
        }
};

Blockly.Msg.LORA_PARSE_PACKET = 'parse packet';
Blockly.Msg.LORA_SIZE = 'size';

Blockly.Blocks['LoRa_parsePacket'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_PARSE_PACKET);
	this.appendValueInput("SIZE")
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_SIZE);
        this.setInputsInline(false);
	this.setOutput(true, 'Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_PARSE_PACKET_TOOLTIP);
        }
};

Blockly.Msg.LORA_RECEIVE = 'receive';
Blockly.Msg.LORA_SIZE = 'size';

Blockly.Blocks['LoRa_receive'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_RECEIVE);
        this.appendValueInput("SIZE")
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_SIZE);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_RECEIVE_TOOLTIP);
        }
};

Blockly.Msg.LORA_PACKET_RSSI = 'packet RSSI';

Blockly.Blocks['LoRa_packetRssi'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
	this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_PACKET_RSSI);
        this.setInputsInline(false);
	this.setOutput(true, 'Number');
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
	this.setTooltip(Blockly.Msg.LORA_PACKET_RSSI_TOOLTIP);
        }
};

Blockly.Msg.LORA_PACKET_SNR = 'packet SNR';

Blockly.Blocks['LoRa_packetSnr'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_PACKET_SNR);
        this.setInputsInline(false);
        this.setOutput(true, 'Number');
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
	this.setTooltip(Blockly.Msg.LORA_PACKET_SNR_TOOLTIP);
        }
};

Blockly.Msg.LORA_PACKET_FREQUENCY_ERROR = 'packet frequency error';

Blockly.Blocks['LoRa_packetFrequencyError'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_PACKET_FREQUENCY_ERROR);
        this.setInputsInline(false);
        this.setOutput(true, 'Number');
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
	this.setTooltip(Blockly.Msg.LORA_PACKET_FREQUENCY_ERROR_TOOLTIP);
        }
};

Blockly.Msg.LORA_PEEK = 'peek';

Blockly.Blocks['LoRa_peek'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_PEEK);
        this.setInputsInline(false);
        this.setOutput(true, 'Number');
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
	this.setTooltip(Blockly.Msg.LORA_PEEK_TOOLTIP);
        }
};

Blockly.Msg.LORA_READ = 'read';

Blockly.Blocks['LoRa_read'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_READ);
        this.setInputsInline(false);
        this.setOutput(true, 'Number');
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
	this.setTooltip(Blockly.Msg.LORA_READ_TOOLTIP);
        }
};

Blockly.Msg.LORA_IDLE = 'idle';

Blockly.Blocks['LoRa_idle'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_IDLE);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_IDLE_TOOLTIP);
        }
};

Blockly.Msg.LORA_SLEEP = 'sleep';

Blockly.Blocks['LoRa_sleep'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_SLEEP);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_SLEEP_TOOLTIP);
        }
};

Blockly.Msg.LORA_SET_TX_POWER = 'set transmit power';
Blockly.Msg.LORA_TX_POWER_LEVEL = 'level';
Blockly.Msg.LORA_OUTPUT_PIN_DROPDOWN = [["PA boost","PA_OUTPUT_PA_BOOST_PIN"],["RF0","PA_OUTPUT_RFO_PIN"]];
Blockly.Msg.LORA_OUTPUT_PIN = 'output pin';

Blockly.Blocks['LoRa_setTxPower'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_SET_TX_POWER);
        this.appendValueInput("LEVEL")
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_TX_POWER_LEVEL);
	this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_OUTPUT_PIN)
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.LORA_OUTPUT_PIN_DROPDOWN), "OUTPUT_PIN");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_SET_TX_POWER_TOOLTIP);
        }
};

Blockly.Msg.LORA_SET_SPREAD_FACTOR = 'set spread factor';
Blockly.Msg.LORA_SPREAD_DROPDOWN = [["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"]];
Blockly.Msg.LORA_SPREAD = 'spread';

Blockly.Blocks['LoRa_setSpreadingFactor'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_SET_SPREAD_FACTOR);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_SPREAD)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.LORA_SPREAD_DROPDOWN), "SPREAD");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_SET_SPREAD_FACTOR_TOOLTIP);
        }
};

Blockly.Msg.LORA_SET_SIGNAL_BANDWIDTH = 'set signal bandwidth';
Blockly.Msg.LORA_BANDWIDTH_DROPDOWN = [["7.8 kHz","7.8E3"],["10.4 kHz","10.4E3"],["15.6 kHz","15.6E3"],["20.8 kHz","20.8E3"],["31.25 kHz","31.25E3"],["41.7 kHz","41.7E3"],["62.5 kHz","62.5E3"],["125 kHz","125E3"],["250 kHz","250E3"],["500 kHz","500E36"]]
Blockly.Msg.LORA_BANDWIDTH = 'bandwidth';

Blockly.Blocks['LoRa_setSignalBandwidth'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_SET_SIGNAL_BANDWIDTH);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_BANDWIDTH)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.LORA_BANDWIDTH_DROPDOWN), "BANDWIDTH");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_SET_SIGNAL_BANDWIDTH_TOOLTIP);
        }
};

Blockly.Msg.LORA_SET_CODING_RATE = 'set coding rate';
Blockly.Msg.LORA_CODING_RATE_DROPDOWN = [["4/5","5"],["4/6","6"],["4/7","7"],["4/8","8"]];
Blockly.Msg.LORA_CODING_RATE = 'coding rate';

Blockly.Blocks['LoRa_setCodingRate4'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_SET_CODING_RATE);
	this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_CODING_RATE)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.LORA_CODING_RATE_DROPDOWN), "DENOMINATOR");
	this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_SET_CODING_RATE_TOOLTIP);
        }
};

Blockly.Msg.LORA_SET_PREAMBLE = 'set preamble';
Blockly.Msg.LORA_LENGTH = "length";

Blockly.Blocks['LoRa_setPreambleLength'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_SET_PREAMBLE);
	this.appendValueInput("LENGTH")
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_LENGTH);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_SET_PREAMBLE_TOOLTIP);
        }
};

Blockly.Msg.LORA_SET_SYNC_WORD = 'set sync';
Blockly.Msg.LORA_WORD = "word";

Blockly.Blocks['LoRa_setSyncWord'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_SET_SYNC_WORD);
        this.appendValueInput("WORD")
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.LORA_WORD);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_SET_SYNC_WORD_TOOLTIP);
        }
};

Blockly.Msg.LORA_ENABLE_CRC = 'enable CRC';

Blockly.Blocks['LoRa_enableCrc'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_ENABLE_CRC);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_ENABLE_CRC_TOOLTIP);
        }
};

Blockly.Msg.LORA_DISABLE_CRC = 'disable CRC';

Blockly.Blocks['LoRa_disableCrc'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_DISABLE_CRC);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_DISABLE_CRC_TOOLTIP);
        }
};

Blockly.Msg.LORA_ENABLE_INVERT_IQ = 'enable invert IQ';

Blockly.Blocks['LoRa_enableInvertIq'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_ENABLE_INVERT_IQ);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_ENABLE_INVERT_IQ_TOOLTIP);
        }
};

Blockly.Msg.LORA_DISABLE_INVERT_IQ = 'disable invert IQ';

Blockly.Blocks['LoRa_disableInvertIq'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_DISABLE_INVERT_IQ);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.LORA_DISABLE_INVERT_IQ_TOOLTIP);
        }
};

Blockly.Msg.LORA_RANDOM = 'random';

Blockly.Blocks['LoRa_random'] = {
        init: function() {
        this.setColour(Blockly.Blocks.LORA_HUE);
        this.setHelpUrl(Blockly.Msg.LORA_HELPURL);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.LORA_RANDOM);
        this.setInputsInline(false);
        this.setOutput(true, 'Number');
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
	this.setTooltip(Blockly.Msg.LORA_RANDOM_TOOLTIP);
        }
};

