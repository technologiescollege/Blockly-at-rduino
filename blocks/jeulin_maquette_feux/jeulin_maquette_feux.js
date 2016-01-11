//www.jeulin.fr

// define blocks
'use strict';

//detection_appel_pieton_BP_voie1 OK
Blockly.Blocks['jeulin_detection_appel_pieton_BP_voie1'] = {
  init: function() {
    this.setColour("#C12542");
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.JEULIN_TEXT8)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/detection_appel_pieton_BP_voie1.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
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

//detection_appel_pieton_BP_voie2 OK
Blockly.Blocks['jeulin_detection_appel_pieton_BP_voie2'] = {
  init: function() {
    this.setColour("#C12542");
    this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.JEULIN_TEXT9)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/detection_appel_ pieton_BP_voie2.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
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

//detection_magnetique_presence_voiture_ILS_voie1 OK
Blockly.Blocks['jeulin_detection_magnetique_presence_voiture_ILS_voie1'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ils1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.JEULIN_TEXT10)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/detection_magnetique_presence voiture_ILS_voie1.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.JEULIN_TEXT13);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT14);
  }
};

//detection_infrarouge_presence_voiture_IR_voie1 OK
Blockly.Blocks['jeulin_detection_infrarouge_presence_voiture_IR_voie1'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bari1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.JEULIN_TEXT11)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/detection_infrarouge_presence_voiture_IR_voie1.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.JEULIN_TEXT12);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT19);
  }
};

//detection_photoelectrique_luminosite_LDR OK
Blockly.Blocks['jeulin_detection_photoelectrique_luminosite_LDR'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ldr1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.JEULIN_TEXT14)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/detection_photoelectrique_luminosite_LDR.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT27);
  }
};

//feu_rouge_voie1 OK
Blockly.Blocks['jeulin_feu_rouge_voie1'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.JEULIN_TEXT1)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_rouge_voie1.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//feu_vert_voie1 OK
Blockly.Blocks['jeulin_feu_vert_voie1'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.JEULIN_TEXT3)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_vert_voie1.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT36);
  }
};

//feu_orange_voie1 OK
Blockly.Blocks['jeulin_feu_orange_voie1'] = {
  init: function() {
	this.setColour("#C12542");	
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.JEULIN_TEXT2)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_orange_voie1.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT37);
  }
};

//feu_rouge_voie2 OK
Blockly.Blocks['jeulin_feu_rouge_voie2'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.JEULIN_TEXT4)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_rouge_voie2.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//feu_vert_voie2 OK
Blockly.Blocks['jeulin_feu_vert_voie2'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.JEULIN_TEXT6)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_vert_voie2.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT36);
  }
};

//feu_orange_voie2 OK
Blockly.Blocks['jeulin_feu_orange_voie2'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.JEULIN_TEXT5)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_orange_voie2.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT37);
  }
};

Blockly.Blocks['jeulin_alarme_pieton_buzzer'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1');
    this.appendDummyInput("")
		.appendField(Blockly.Msg.JEULIN_TEXT7)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/alarme_pieton_buzzer.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.appendValueInput("NUM",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT44)
        .setCheck('Number');
    this.appendValueInput("TPS",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT45)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT46);
  }
};

//feu_vert_pieton OK
Blockly.Blocks['jeulin_feu_vert_pieton'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.JEULIN_TEXT16)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_vert_pieton.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT36);
  }
};

//feu_rouge_pieton OK
Blockly.Blocks['jeulin_feu_rouge_pieton'] = {
  init: function() {
    this.setColour("#C12542");
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1');
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendField(Blockly.Msg.JEULIN_TEXT15)
        .appendField(new Blockly.FieldImage("blocks/jeulin_maquette_feux/feu_rouge_pieton.jpg", 64, 64))
    this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};
