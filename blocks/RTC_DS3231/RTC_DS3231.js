/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
 
 /***************************************************************
 *
 *  This module was created by Oscar Ferruz. oferruz@logix5.com
 *
 ****************************************************************/
 
'use strict';

goog.provide('Blockly.Blocks.RTC_DS3231');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Msg.RTCDS3231_NAME = "RTC DS3231 clock";

Blockly.Blocks['Init_RTC_ds3231'] = {
  helpUrl: '',
  init: function() {
    	this.setColour(190);
    	this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS3231_NAME);
    	this.setInputsInline(false);
    	this.setPreviousStatement(true, null);
    	this.setNextStatement(true, null);
    	this.setTooltip('Set up the RTC_DS3231 clock');
  	}
};

Blockly.Msg.RTCDS3231_SETDATETIME = "set date time";

Blockly.Msg.RTCDS3231_DAY = "Day";
Blockly.Msg.RTCDS3231_MONTH = "Month";
Blockly.Msg.RTCDS3231_YEAR = "Year";
Blockly.Msg.RTCDS3231_HOUR = "Hour";
Blockly.Msg.RTCDS3231_MINUTE = "Minute";
Blockly.Msg.RTCDS3231_SECOND = "Second";
Blockly.Msg.RTCDS3231_DOFWEEK = "Day of Week";

Blockly.Blocks['DateTime_RTC_ds3231'] = {
  helpUrl: '',
  init: function() {
    	this.setColour(190);
    	this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS3231_NAME);
	this.appendDummyInput()
	  	.appendField(Blockly.Msg.RTCDS3231_SETDATETIME);
    	this.appendValueInput("DS3231_DAY")
		.setAlign(Blockly.ALIGN_RIGHT)
		.setCheck("Number")
		.appendField(Blockly.Msg.RTCDS3231_DAY);
    	this.appendValueInput("DS3231_MONTH")
		.setAlign(Blockly.ALIGN_RIGHT)
		.setCheck("Number")
		.appendField(Blockly.Msg.RTCDS3231_MONTH);
    	this.appendValueInput("DS3231_YEAR")
		.setAlign(Blockly.ALIGN_RIGHT)
		.setCheck("Number")
		.appendField(Blockly.Msg.RTCDS3231_YEAR);		
    	this.appendValueInput("DS3231_HOUR")
		.setAlign(Blockly.ALIGN_RIGHT)
		.setCheck("Number")
		.appendField(Blockly.Msg.RTCDS3231_HOUR);		
    	this.appendValueInput("DS3231_MINUTE")
		.setAlign(Blockly.ALIGN_RIGHT)
		.setCheck("Number")
		.appendField(Blockly.Msg.RTCDS3231_MINUTE);		
    	this.appendValueInput("DS3231_SECOND")
		.setAlign(Blockly.ALIGN_RIGHT)
		.setCheck("Number")
		.appendField(Blockly.Msg.RTCDS3231_SECOND);		
    	this.setInputsInline(false);
    	this.setPreviousStatement(true, null);
    	this.setNextStatement(true, null);
    	this.setTooltip('Set RTC_DS3231 date and time');
  	}
};

Blockly.Msg.RTCDS3231_READ = "read time";

Blockly.Blocks['order_read_rtc_ds3231'] = {
  helpUrl: '',
  init: function() {
	this.setColour(190);
    	this.appendDummyInput()
        	.appendField(Blockly.Msg.RTCDS3231_NAME);
	this.appendDummyInput()
	  	.appendField(Blockly.Msg.RTCDS3231_READ);
    	this.setInputsInline(false);
    	this.setPreviousStatement(true, null);
    	this.setNextStatement(true, null);
    	this.setTooltip('Read time from RTC_DS3231');
  	}
};

Blockly.Msg.RTCDS3231_VALUES = 'get values';

Blockly.Msg.RTCDS3231_VALUES_FIELDDROPDOWN = [[Blockly.Msg.RTCDS3231_YEAR, "0"], [Blockly.Msg.RTCDS3231_MONTH, "1"],[Blockly.Msg.RTCDS3231_DAY, "2"],[Blockly.Msg.RTCDS3231_HOUR, "3"],[Blockly.Msg.RTCDS3231_MINUTE, "4"],[Blockly.Msg.RTCDS3231_SECOND, "5"],[Blockly.Msg.RTCDS3231_DOFWEEK, "6"]];

Blockly.Blocks['values_ds3231'] = {
  helpUrl: '',
  init: function() {
	this.setColour(190);
	this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS3231_NAME);
	this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS3231_VALUES);
	this.appendDummyInput()
	  	.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.RTCDS3231_VALUES_FIELDDROPDOWN), "OUTPUT_VALUE");
    	this.setOutput(true, 'Number');
    	this.setInputsInline(false);
    	this.setTooltip('Return the date or time parameter');
  	}
};

Blockly.Msg.RTCDS3231_VALUES_TEXT = 'get values (text)';
Blockly.Msg.RTCDS3231_TEXT_DOFWEEK = 'Day of Week';
Blockly.Msg.RTCDS3231_TEXT_MONTH = 'Month';

Blockly.Blocks['values_text_ds3231'] = {
  helpUrl: '',
  init: function() {
    	this.setColour(190);
	this.appendDummyInput()
	  	.appendField(Blockly.Msg.RTCDS3231_NAME);
	this.appendDummyInput()
		.appendField(Blockly.Msg.RTCDS3231_VALUES_TEXT);
    	this.appendDummyInput()
	  	.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_TEXT_DOFWEEK, "0"], [Blockly.Msg.RTCDS3231_TEXT_MONTH, "1"]]), "OUTPUT_VALUE");
    	this.setOutput(true, 'String');
    	this.setInputsInline(false);
    	this.setTooltip('Return the text of day of week or month');
	}
};

