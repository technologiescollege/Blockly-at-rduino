/**
 * Blocs pour le capteur anémomètre intégrant un contact reed (avec un aimant sur sa partie mobile)
 * par : franck.piot@ac-besancon.fr
 */
'use strict';

goog.provide('Blockly.Blocks.anemometre');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

 //Bloc pour la mesure de la vitesse de rotation des coupelles

Blockly.Blocks.anemometre_vitesse_rotation = {
  init: function() {
    this.setColour(Blockly.Blocks.anemometre.HUE);
	this.setHelpUrl(Blockly.Msg.VITESSE_ROTATION_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.VITESSE_ROTATION_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/anemometer/anemo_rotation.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_ROTATION_INPUT);   
    this.setOutput(true, 'Number');   
    this.setTooltip(Blockly.Msg.VITESSE_ROTATION_TOOLTIP);
  }
};


 //Bloc pour la mesure de la vitesse du vent en m/s


Blockly.Blocks.anemometre_vitesse_ventms = {
  init: function() {
    this.setColour(Blockly.Blocks.anemometre.HUE);
	
	this.setHelpUrl(Blockly.Msg.VITESSE_VENTMS_HELPURL);
    
	this.appendDummyInput("")
        .appendField(Blockly.Msg.VITESSE_VENTMS_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/anemometer/anemo_vitessems.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
	
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_VENTMS_INPUT);
	
	this.appendValueInput("RAYONBRAS")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_VENTMS_RAYON);
	
	this.appendValueInput("COEFETAL")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_VENTMS_COEFF);         
    
	this.setOutput(true, 'Number');   
    
	this.setTooltip(Blockly.Msg.VITESSE_VENTMS_TOOLTIP);
  }
};


 //Bloc pour la mesure de la vitesse du vent en km/h

Blockly.Blocks.anemometre_vitesse_ventkmh = {
  init: function() {
    this.setColour(Blockly.Blocks.anemometre.HUE);
	
	this.setHelpUrl(Blockly.Msg.VITESSE_VENTKMH_HELPURL);
    
	this.appendDummyInput("")
        .appendField(Blockly.Msg.VITESSE_VENTKMH_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/anemometer/anemo_vitessekmh.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
	
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_VENTKMH_INPUT);
	
	this.appendValueInput("RAYONBRAS")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_VENTKMH_RAYON);
	
	this.appendValueInput("COEFETAL")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_VENTKMH_COEFF);         
    
	this.setOutput(true, 'Number');   
    
	this.setTooltip(Blockly.Msg.VITESSE_VENTKMH_TOOLTIP);
  }
};


 //Bloc pour la mesure de la vitesse du vent en noeud

Blockly.Blocks.anemometre_vitesse_ventnoeud = {
  init: function() {
    this.setColour(Blockly.Blocks.anemometre.HUE);
	
	this.setHelpUrl(Blockly.Msg.VITESSE_VENTNOEUD_HELPURL);
    
	this.appendDummyInput("")
        .appendField(Blockly.Msg.VITESSE_VENTNOEUD_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/anemometer/anemo_vitessenoeud.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
	
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_VENTNOEUD_INPUT);
	
	this.appendValueInput("RAYONBRAS")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_VENTNOEUD_RAYON);
	
	this.appendValueInput("COEFETAL")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_VENTNOEUD_COEFF);         
    
	this.setOutput(true, 'Number');   
    
	this.setTooltip(Blockly.Msg.VITESSE_VENTNOEUD_TOOLTIP);
  }
};


 //Bloc pour la mesure de la force du vent en degré de Beaufort

Blockly.Blocks.anemometre_force_Beaufort = {
  init: function() {
    this.setColour(Blockly.Blocks.anemometre.HUE);
	
	this.setHelpUrl(Blockly.Msg.FORCE_BEAUFORT_HELPURL);
    
	this.appendDummyInput("")
        .appendField(Blockly.Msg.FORCE_BEAUFORT_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/anemometer/anemo_forcebf.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
	
	this.appendDummyInput("")
        .appendField(Blockly.Msg.FORCE_BEAUFORT_TEXT2)
	
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FORCE_BEAUFORT_INPUT);
	
	this.appendValueInput("RAYONBRAS")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FORCE_BEAUFORT_RAYON);
	
	this.appendValueInput("COEFETAL")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FORCE_BEAUFORT_COEFF);         
    
	this.setOutput(true, 'Number');   
    
	this.setTooltip(Blockly.Msg.FORCE_BEAUFORT_TOOLTIP);
  }
};