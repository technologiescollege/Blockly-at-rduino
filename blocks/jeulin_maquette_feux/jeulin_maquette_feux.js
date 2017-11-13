//www.jeulin.fr

// define blocks
'use strict';

goog.provide('Blockly.Blocks.jeulin_appel_pieton');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//appel_pieton_voie1 OK
Blockly.Blocks['jeulin_appel_pieton_voie1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jeulin_appel_pieton.HUE);
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT177)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/appel_pieton_voie1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
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

//appel_pieton_voie2 OK
Blockly.Blocks['jeulin_appel_pieton_voie2'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jeulin_appel_pieton.HUE);
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT178)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/appel_pieton_voie2.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
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

//detection_magnetique_ils1 OK
Blockly.Blocks['jeulin_detection_magnetique_ils1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jeulin_appel_pieton.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ils1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT179)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/detection_magnetique_ils1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
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

//detection_infrarouge_bari1 OK
Blockly.Blocks['jeulin_detection_infrarouge_bari1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jeulin_appel_pieton.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bari1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT181)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/detection_infrarouge_bari1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
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

//detection_luminosite_ldr1 OK
Blockly.Blocks['jeulin_detection_luminosite_ldr1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jeulin_appel_pieton.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ldr1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT180)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/detection_luminosite_ldr1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT27);
  }
};

//feux_voie1_led1red OK
Blockly.Blocks['jeulin_feux_voie1_led1red'] = {
  init: function() {
    this.setColour("#FF0033");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT175)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feux_voie1_led1red.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//feux_voie1_led1yellow OK
Blockly.Blocks['jeulin_feux_voie1_led1yellow'] = {
  init: function() {
    this.setColour("#FF9933");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT175)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feux_voie1_led1yellow.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT37);
  }
};

//feux_voie1_led1green OK
Blockly.Blocks['jeulin_feux_voie1_led1green'] = {
  init: function() {
    this.setColour("#00CC00");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT175)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feux_voie1_led1green.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT36);
  }
};

//feux_voie2_led1red OK
Blockly.Blocks['jeulin_feux_voie2_led1red'] = {
  init: function() {
    this.setColour("#FF0033");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT176)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feux_voie2_led1red.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//feux_voie2_led1yellow OK
Blockly.Blocks['jeulin_feux_voie2_led1yellow'] = {
  init: function() {
    this.setColour("#FF9933");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT176)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feux_voie2_led1yellow.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT37);
  }
};

//feux_voie2_led1green OK
Blockly.Blocks['jeulin_feux_voie2_led1green'] = {
  init: function() {
    this.setColour("#00CC00");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT176)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feux_voie2_led1green.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT36);
  }
};

//feu_pieton_led1red OK
Blockly.Blocks['jeulin_feu_pieton_led1red'] = {
  init: function() {
    this.setColour("#FF0033");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT173)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_pieton_led1red.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//feu_pieton_led1green OK
Blockly.Blocks['jeulin_feu_pieton_led1green'] = {
  init: function() {
    this.setColour("#00CC00");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT174)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_pieton_led1green.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT36);
  }
};

//alarme_pieton_buzzer1 OK
Blockly.Blocks['jeulin_alarme_pieton_buzzer1'] = {
  init: function() {
    this.setColour("#646464");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1');
    this.appendDummyInput("")
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT172)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/alarme_pieton_buzzer1.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
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