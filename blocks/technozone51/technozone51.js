//www.technozone51.fr

'use strict';

goog.provide('Blockly.Blocks.technozone51');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//btn1white OK
Blockly.Blocks['technozone_btn1white'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendField(new Blockly.FieldImage("blocks/technozone51/btn1white.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT6)    
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT7);
  }
};

//btn1black OK
Blockly.Blocks['technozone_btn1black'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendField(new Blockly.FieldImage("blocks/technozone51/btn1black.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT7);
  }
};

//btn1green OK
Blockly.Blocks['technozone_btn1green'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendField(new Blockly.FieldImage("blocks/technozone51/btn1green.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT9);
  }
};

//btn1red OK
Blockly.Blocks['technozone_btn1red'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendField(new Blockly.FieldImage("blocks/technozone51/btn1red.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT10);
  }
};

//Switch1 OK
Blockly.Blocks['technozone_switch1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:switch1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT11)
        .appendField(new Blockly.FieldImage("blocks/technozone51/switch1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT12);
  }
};

//ils1 OK
Blockly.Blocks['technozone_ils1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ils1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT1)
        .appendField(new Blockly.FieldImage("blocks/technozone51/ils1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT13);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT14);
  }
};

//proxi1 OK
Blockly.Blocks['technozone_proxi1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:proxi1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT15)
        .appendField(new Blockly.FieldImage("blocks/technozone51/proxi1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT16);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT17);
  }
};

//bari1 OK
Blockly.Blocks['technozone_bari1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bari1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT18)
        .appendField(new Blockly.FieldImage("blocks/technozone51/bari1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT16);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT19);
  }
};

//Détecteur de ligne OK
Blockly.Blocks['technozone_lig1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lig1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT1)
        .appendField(new Blockly.FieldImage("blocks/technozone51/lig1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT3);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT4);
  }
};

//cmouv1 OK
Blockly.Blocks['technozone_cmouv1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:cmouv1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT1)
        .appendField(new Blockly.FieldImage("blocks/technozone51/servo1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("blocks/technozone51/cmouv1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT20);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT21);
  }
};

//potar1 OK
Blockly.Blocks['technozone_potar1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:potar1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT22)
        .appendField(new Blockly.FieldImage("blocks/technozone51/potar1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2bis)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT23);
  }
};

//ctn1 OK
Blockly.Blocks['technozone_ctn1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ctn1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT24)
        .appendField(new Blockly.FieldImage("blocks/technozone51/ctn1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2bis)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT25);
  }
};

//ldr1 OK
Blockly.Blocks['technozone_ldr1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ldr1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT26)
        .appendField(new Blockly.FieldImage("blocks/technozone51/ldr1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2bis)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT27);
  }
};

//sonar1 OK
Blockly.Blocks['technozone_sonar1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:sonar1');
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.TECHNOZONE51_TEXT28)
        .appendField(new Blockly.FieldImage("blocks/technozone51/sonar1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("TRIGER")	
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField(Blockly.Msg.TECHNOZONE51_TEXT29)
    this.appendValueInput("DIST")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT30)
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT31);
  }
};

//led1red OK
Blockly.Blocks['technozone_led1red'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendField(new Blockly.FieldImage("blocks/technozone51/led1red.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//led1green OK
Blockly.Blocks['technozone_led1green'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendField(new Blockly.FieldImage("blocks/technozone51/led1green.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT36);
  }
};

//led1yellow OK
Blockly.Blocks['technozone_led1yellow'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendField(new Blockly.FieldImage("blocks/technozone51/led1yellow.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT37);
  }
};

Blockly.Blocks['technozone_relay1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:relay1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT40, "LOW"], [Blockly.Msg.TECHNOZONE51_TEXT41, "HIGH"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT38)
        .appendField(new Blockly.FieldImage("blocks/technozone51/relay1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT42);
  }
};

Blockly.Blocks['technozone_buzzer1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1');
    this.appendDummyInput("")
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT43)
        .appendField(new Blockly.FieldImage("blocks/technozone51/buzzer1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendValueInput("NUM")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT44)
    this.appendValueInput("TPS")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT45)
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT46);
  }
};

//mot1easycon1 OK
Blockly.Blocks['technozone_mot1easycon1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT51)
        .appendField(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT52)
        .appendField(new Blockly.FieldImage("blocks/technozone51/easycon1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("blocks/technozone51/kitmot1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT55);
  }
};

//mot1easybot1 OK
Blockly.Blocks['technozone_mot1easybot1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT51)
        .appendField(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT56)
        .appendField(new Blockly.FieldImage("blocks/technozone51/easybot.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("blocks/technozone51/kitmot1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT57);
  }
};

//mot2 OK
Blockly.Blocks['technozone_mot2'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:mot2');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT51)
        .appendField(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT58)
        .appendField(new Blockly.FieldImage("blocks/technozone51/mot2.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        //.appendField(Blockly.Msg.TECHNOZONE51_TEXT59);
    this.appendValueInput("PINDIR")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT60)
    this.appendValueInput("PINPWM")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT61)
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT62);
  }
};

//pap1init OK
Blockly.Blocks['technozone_pap1init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT63)
        .appendField(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput("")
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT64)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendField(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");         
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT66)
        .appendField(new Blockly.FieldDropdown([["Single Stepping", "SINGLE_STEPPING"], ["Full Stepping", "FULL_STEPPING"], ["Half Stepping", "HALF_STEPPING"]]), "MODE");             
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT67)
        .appendField(new Blockly.FieldDropdown([["Auto Relax", "AUTO_RELAX"], ["No Auto Relax", "NO_AUTO_RELAX"]]), "RELAX");                 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//pap1cc OK
Blockly.Blocks['technozone_pap1cc'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT69)
        .appendField(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT70)
        .appendField(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT64)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendField(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//pap1relatif OK
Blockly.Blocks['technozone_pap1relatif'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT71)
        .appendField(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT70)
        .appendField(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT64)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendField(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT54);
    this.appendValueInput("PAS")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT72);               
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//pap1busy OK
Blockly.Blocks['technozone_pap1busy'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT73)
        .appendField(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT64)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendField(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD")
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//servo1 OK
Blockly.Blocks['technozone_servo1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE)
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1')
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT47)
        .appendField(new Blockly.FieldImage("blocks/technozone51/servo1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("blocks/technozone51/servomoteur1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendValueInput("DEGREE")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT48);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT49);
  }
};

//read_servo1 OK
Blockly.Blocks['technozone_read_servo1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT50)
        .appendField(new Blockly.FieldImage("blocks/technozone51/servomoteur1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT49);
  }
};

//lcdinit OK
Blockly.Blocks['technozone_lcdinit'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT74)
        .appendField(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT75)
        .appendField(new Blockly.FieldDropdown([["0x27", "0x27"], ["0x68", "0x68"]]),"I2C_adress");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT76)
        .appendField(new Blockly.FieldTextInput('16',Blockly.Blocks.math_number.validator), 'nbcol');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT77)
        .appendField(new Blockly.FieldTextInput('2',Blockly.Blocks.math_number.validator), 'nblig');   
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT78)     
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'backlight');   
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT79)     
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'cursor'); 
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT80)     
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'blink');          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT81);
  }
};

//lcdspecial OK
Blockly.Blocks['technozone_lcdspecial'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT82)
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT83, "backlight"], [Blockly.Msg.TECHNOZONE51_TEXT84, "noBacklight"],[Blockly.Msg.TECHNOZONE51_TEXT85, "cursor"],[Blockly.Msg.TECHNOZONE51_TEXT86, "noCursor"],[Blockly.Msg.TECHNOZONE51_TEXT87, "blink"],[Blockly.Msg.TECHNOZONE51_TEXT88, "noBlink"],[Blockly.Msg.TECHNOZONE51_TEXT89, "display"],[Blockly.Msg.TECHNOZONE51_TEXT90, "noDisplay"]]),"special");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT91);
  }
};

//lcdclear OK
Blockly.Blocks['technozone_lcdclear'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT92)
        .appendField(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT93);
  }
};

//lcdwrite OK
Blockly.Blocks['technozone_lcdwrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT94)
        .appendField(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("TEXT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT98);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT95);
    this.appendValueInput("COL")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT96)
    this.appendValueInput("LIG")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT97)   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT99);
  }
};

//telecsetup OK
Blockly.Blocks['technozone_telecsetup'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT100)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT101);
  }
};

//telecflush OK
Blockly.Blocks['technozone_telecflush'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT102)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT103);
  }
};

//telecint OK
Blockly.Blocks['technozone_telecinit'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT104)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT105);
  }
};

//telec2 OK
Blockly.Blocks['technozone_telec2'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:telec2');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT106)
        .appendField(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PLAY/PAUSE", "FF22DD"], ["PREVIOUS", "FF02FD"], ["NEXT", "FFC23D"],
         ["EQ", "FFE1F"], ["VOL-", "FFA857"], ["VOL+", "FF906F"], ["0", "FF6897"], ["RPT", "FF9867"], ["U/SD", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT107)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("blocks/technozone51/telec2.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        //.appendField(" sur la broche ")
        //.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT108);        
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT109);
  }
};

//telec1 OK
Blockly.Blocks['technozone_telec1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:telec1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT106)
        .appendField(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PREVIOUS", "FF22DD"], ["NEXT", "FF02FD"], ["PLAY/PAUSE", "FFC23D"],
         ["MINUS", "FFE1F"], ["PLUS", "FFA857"], ["EQ", "FF906F"], ["0", "FF6897"], ["100+", "FF9867"], ["RETURN", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT107)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("blocks/technozone51/telec1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        //.appendField(" sur la broche ")
        //.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT108);        
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT110);
  }
};

//speech_init OK
Blockly.Blocks['technozone_speech_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=parole:faire_parler_vos_cartes_arduino');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT167); 
    this.appendValueInput("SPEED")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT169); 
    this.appendValueInput("PITCH")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT170); 
    this.appendValueInput("BENDING")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT171); 
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT168); 
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT153);
  }
};

//speech_say
Blockly.Blocks['technozone_speech_say'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=parole:faire_parler_vos_cartes_arduino');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT167);
    this.appendValueInput("TEXT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT166);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT132);
  }
};

//bt_init OK
Blockly.Blocks['technozone_bt_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT157);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/technozone51/bt1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT165);
    this.appendValueInput("RX")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RX ");
    this.appendValueInput("TX")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TX ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT158);
  }
};

//robot_bt_available OK
Blockly.Blocks['technozone_robot_bt_available'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")	
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT159);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT160);
  }
};

//robot_bt_read OK
Blockly.Blocks['technozone_robot_bt_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")	
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT161);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT162);
  }
};

//robot_bt_write
Blockly.Blocks['technozone_robot_bt_write'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendValueInput("TEXT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT163);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT164);
  }
};

//ihm_init OK
Blockly.Blocks['technozone_ihm_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bt1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT111)
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT112)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldImage("blocks/technozone51/bt1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT165);
    this.appendValueInput("RX")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RX ");
    this.appendValueInput("TX")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TX ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT113);
  }
};

//robot_ihm_available OK
Blockly.Blocks['technozone_robot_ihm_available'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT114);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT115);
  }
};

//robot_ihm_change OK
Blockly.Blocks['technozone_robot_ihm_change'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT116);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT117);
  }
};

//robot_ihm_led_def OK
Blockly.Blocks['technozone_robot_ihm_led_def'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT118)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("TEXT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT120);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT121);
  }
};

//robot_ihm_led_on OK
Blockly.Blocks['technozone_robot_ihm_led_on'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT122)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT123)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT124, "0"], [Blockly.Msg.TECHNOZONE51_TEXT125, "1"], [Blockly.Msg.TECHNOZONE51_TEXT126, "2"], [Blockly.Msg.TECHNOZONE51_TEXT127, "3"], [Blockly.Msg.TECHNOZONE51_TEXT128, "4"], [Blockly.Msg.TECHNOZONE51_TEXT129, "5"]]), "COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT130);
  }
};

//robot_ihm_btn_def OK
Blockly.Blocks['technozone_robot_ihm_btn_def'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT131)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("TEXT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT120);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT132);
  }
};

//robot_ihm_btn_read OK
Blockly.Blocks['technozone_robot_ihm_btn_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "10"]]), "LED")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119)
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT108);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT133);
  }
};

//robot_ihm_inter_def OK
Blockly.Blocks['technozone_robot_ihm_inter_def'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT134)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("TEXT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT120);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT135);
  }
};

//robot_ihm_inter_on OK
Blockly.Blocks['technozone_robot_ihm_inter_on'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT136, "1"], [Blockly.Msg.TECHNOZONE51_TEXT137, "0"]]), "COLOR")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT138)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT139);
  }
};

//robot_ihm_inter_read OK
Blockly.Blocks['technozone_robot_ihm_inter_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT138)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "10"]]), "LED")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT140);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT141);
  }
};

//robot_ihm_potar_def OK
Blockly.Blocks['technozone_robot_ihm_potar_def'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT142)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT143)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["10", "10"], ["100", "100"], ["1000", "1000"]]), "DIVISOR");
    this.appendValueInput("POTARI",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT144)
        .setCheck('Number');  
    this.appendValueInput("POTARA")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT145)
        .setCheck('Number'); 
    this.appendValueInput("POTARP")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT146)
        .setCheck('Number');  
    this.appendValueInput("TEXT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT120); 
    this.setInputsInline(true);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT147);
  }
};

//robot_ihm_potar_read OK
Blockly.Blocks['technozone_robot_ihm_potar_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:BTIHM1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT148)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "10"]]), "LED")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT149);
  }
};

//robot_ihm_gauge_def
Blockly.Blocks['technozone_robot_ihm_gauge_def'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT150)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119); 
    this.appendValueInput("GRADUATION")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT151); 
    this.appendValueInput("TITRE")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT152); 
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT120); 
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT153);
  }
};

//robot_ihm_gauge_write
Blockly.Blocks['technozone_robot_ihm_gauge_write'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT154)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("VALEUR")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT155)
        .setCheck('Number');   
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT156)
        .appendField(new Blockly.FieldDropdown([["0", "0"],["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "DECIMAL");
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Positionne une gauge IHM (réf : BTIHM1)');
  }
};

Blockly.Blocks['technozone_robot_move'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1');
    this.appendDummyInput("")
        .appendField("faire ")
        .appendField(new Blockly.FieldDropdown([["avancer", "0"], ["reculer", "1"]]), "DIR");     
    this.appendValueInput("DISTANCE")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" le robot de ")
        .setCheck('Number');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["cm", "1"], ["mm", "0"]]), "UNIT");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" en mode ")
        .appendField(new Blockly.FieldDropdown([["préemptif", "1"], ["non préemptif", "0"]]), "PREEMPTIF");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks['technozone_robot_turn'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1');
    this.appendDummyInput("")
        .appendField("faire tourner le robot à ")
        .appendField(new Blockly.FieldDropdown([["droite", "0"], ["gauche", "1"]]), "ROT");     
    this.appendValueInput("ANGLE")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" de ")
        .setCheck('Number');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(" degrés ");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("en mode ")
        .appendField(new Blockly.FieldDropdown([["préemptif", "1"], ["non préemptif", "0"]]), "PREEMPTIF");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks['technozone_robot_stop'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1');
    this.appendDummyInput("")
        .appendField("stopper le robot")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks['technozone_robot_btn'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
    this.appendDummyInput("")
        .appendField("le bouton RUN/STOP est appuyé ?");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks['technozone_robot_irsend'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1');
    this.appendDummyInput("")
		.appendField("déclencher une détection d'obstacles");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Buzzer (réf : LED1-BUZZER1)');
  }
};

Blockly.Blocks['technozone_robot_irleft'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
    this.appendDummyInput("")
        .appendField("un obstacle a été détecté à gauche ?");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks['technozone_robot_ircenter'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
    this.appendDummyInput("")
        .appendField("un obstacle a été détecté au centre ?");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks['technozone_robot_irright'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
    this.appendDummyInput("")
        .appendField("un obstacle a été détecté à droite ?");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks['technozone_robot_ligleft'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
    this.appendDummyInput("")
        .appendField("une ligne a été détecté à gauche ?");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks['technozone_robot_ligright'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
    this.appendDummyInput("")
        .appendField("une ligne a été détecté à droite ?");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks['technozone_robot_buzzer_tone'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1');
    this.appendValueInput("FREQUENCE")
        .appendField("émettre un son d'une fréquence ")
        .setCheck('Number');
    this.appendValueInput("DURATION")
        .appendField(" Hz pendant une durée de ")
        .setCheck('Number');
    this.appendDummyInput("")
		.appendField(" ms");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Buzzer (réf : LED1-BUZZER1)');
  }
};

Blockly.Blocks['technozone_robot_lcdclear'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField("effacer l'écran LCD")
        .appendField(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Efface l'écran LCD sur le bus I2C (réf : LCD1)");
  }
};

Blockly.Blocks['technozone_robot_lcdwrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField("écrire sur l'écran LCD")
        .appendField(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("TEXT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("le texte");
    this.appendDummyInput("")
        .appendField("à partir de la position :");
    this.appendValueInput("COL")
		.setCheck('Number')   
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("colonne [0..MAXCOL-1]")
    this.appendValueInput("LIG")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ligne [0..MAXLIG-1]")     
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Ecrire sur l'écran LCD (réf : LCD1)");
  }
};

Blockly.Blocks['technozone_robot_lcdspecial'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField("fonctions spéciales de l'écran LCD")
	this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown([["active le curseur", "cursor"],["désactive le curseur", "noCursor"],["faire clignoter le curseur", "blink"],["arrête le clignotement du curseur", "noBlink"],["active l'affichage", "display"],["désactive l'affichage", "noDisplay"]]),"special");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Fonction spéciales de l'écran LCD (réf : LCD1)");
  }
};

Blockly.Blocks['technozone_robot_ihm_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.technozone51.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
    this.appendDummyInput("")
        .appendField("initialiser la console IHM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Initialise la console IHM');
  }
};