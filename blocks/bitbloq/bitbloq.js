
//www.bq.com/fr

'use strict';

// define blocks

Blockly.Blocks['bq_led'] = {
  init: function() {
    this.setColour(190);
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendField("la DEL")
        .appendField(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec09.jpg", 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led (réf : LED)');
  }
};

Blockly.Blocks['bq_buzzer'] = {
  init: function() {
    this.setColour(190);	
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput()
		.appendField("émettre un son du buzzer")
        .appendField(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec06.jpg", 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);	
    this.appendValueInput("NUM", 'Number')
        .appendField("d'une fréquence (Hz)")
        .setCheck(Number);
    this.appendValueInput("TPS", 'Number')
        .appendField("pendant une durée (ms) de")
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Buzzer (réf : BUZZER)');
  }
};

Blockly.Blocks['bq_ultrason'] = {
  init: function() {
    this.setColour(10);
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput()
	    .appendField("la distance mesurée (cm)")
        .appendField(new Blockly.FieldImage("http://d7smofq56tu69.cloudfront.net/media/catalog/product/cache/9/thumbnail/72x64/9df78eab33525d08d6e5fb8d27136e95/i/m/img_4643.jpg", 64, 64));
    this.appendDummyInput()
	    .appendField("TRIG est sur la broche");
    this.appendValueInput("TRIGER", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
	this.appendDummyInput()
        .appendField("DIST est sur la broche");
    this.appendValueInput("DIST", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
	this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée Ultrason (réf : ULTRASON)');
  }
};

Blockly.Blocks['bq_servo'] = {
  init: function() {
    this.setColour(190);
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput()
        .appendField("positionne le mini servo-moteur")
        .appendField(new Blockly.FieldImage("https://static-bqreaders.s3.amazonaws.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec10.jpg", 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);
    this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sur l'angle [0~180°]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Servo-moteur (réf : MINI-SERVO)');
  }
};

Blockly.Blocks['bq_servo_rotation_continue'] = {
  init: function() {
    this.setColour(190);
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput()
        .appendField("faire tourner le servo-moteur à rotation continue")
        .appendField(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec11.jpg", 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sens horaire (VRAI ou FAUX ?)");
	this.appendValueInput("VITESSE", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("à la vitesse [0~255] de");
    this.appendValueInput("DELAY_TIME", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pendant un délai (ms) de");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("rotation possible entre 0~180 degrés : 0~90 puissance variable dans un sens ; 90~180 puissance variable dans l'autre sens");
  }
};

Blockly.Blocks['bq_bouton_poussoir'] = {
  init: function() {
    this.setColour(120);
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput()
        .appendField("l'état du bouton")
        .appendField(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec04.jpg", 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton poussoir (réf : BOUTON-POUSSOIR)');
  }
};

Blockly.Blocks['bq_luminosite'] = {
  init: function() {
    this.setColour(10);
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput()
        .appendField("la luminosité (Lux) lue")
        .appendField(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec05.jpg", 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);
    this.setOutput(true, 'Number');
    this.setTooltip('Entrée Capteur de Luminosité (réf : LUMINOSITE)');
  }
};

Blockly.Blocks['bq_potentiometre'] = {
  init: function() {
    this.setColour(10);
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput("")
        .appendField("la position du potentiomètre")
        .appendField(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec08.jpg", 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);
    this.setOutput(true, 'Number');
    this.setTooltip('Entrée potentiomètre (réf : POTENTIOMETRE');
  }
};

Blockly.Blocks['bq_bluetooth_slave'] = {
  init: function() {
    this.setColour(190);
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput()
      .appendField("Bluetooth en mode esclave")
      .appendField(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec07.jpg", 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("nom declare")
      .appendField(new Blockly.FieldTextInput('bluetooth'), 'NAME');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("code PIN")
      .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("recevoir");
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("envoyer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Bluetooth V2.0+EDR esclave. Seulement 1 esclave par carte.');
  }
};

Blockly.Blocks['bq_capteur_de_ligne'] = {
  init: function() {
    this.setColour(120);
	this.setHelpUrl('http://www.bq.com/fr/produits/kit-robotica.html');
    this.appendDummyInput()
        .appendField("l'état du capteur")
        .appendField(new Blockly.FieldImage("https://www-cdn.bq.com/img/web/product_images/kit-robotica/spec/bq-kit-robotica-spec03.jpg", 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée Détecteur de ligne (réf : LIG1)');
  }
};