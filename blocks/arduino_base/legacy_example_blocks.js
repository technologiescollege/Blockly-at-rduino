/**
 * Legacy short block names used by older examples.
 * Defined early (with arduino_base) so URL example loading works offline.
 */
'use strict';

Blockly.Blocks.digital_write = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
    this.setHelpUrl(Blockly.Msg.HELPURL || '');
    this.appendValueInput('PIN', 'Number')
        .setCheck('Number')
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF || [['HIGH', 'HIGH'], ['LOW', 'LOW']]), 'STAT')
        .appendField('la DEL connectée à la broche');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('allume (éteint) la DEL connectée à la broche indiquée');
  }
};

Blockly.Blocks.inout_bp = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
    this.setHelpUrl(Blockly.Msg.HELPURL || '');
    this.appendValueInput('PIN', 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage('blocks/sensor_actuator/bp.png', 40, 40))
        .appendField('bouton pressé sur la broche');
    this.setOutput(true, 'Boolean');
    this.setTooltip("détecte si un bouton poussoir est pressé");
  }
};

Blockly.Blocks.dht11 = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
    this.appendValueInput('PIN', 'Number')
        .appendField(new Blockly.FieldImage('blocks/sensor_actuator/dht11.png', 60, 45))
        .appendField(new Blockly.FieldDropdown([
          ['humidité', 'h'],
          ['température', 't']
        ]), 'choix')
        .appendField(Blockly.Msg.pin || 'pin');
    this.setOutput(true, 'Number');
    this.setTooltip("retourne l'humidité ou la température du DHT11");
  }
};

Blockly.Blocks.suiveur_ligne = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
    this.appendValueInput('PIN', 'Number')
        .appendField(new Blockly.FieldImage('blocks/sensor_actuator/cap227.png', 90, 50))
        .appendField('ligne noire détectée sur la broche');
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks.potentiometre = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('blocks/sensor_actuator/potar.png', 37, 50))
        .appendField('position du curseur sur la broche')
        .appendField(new Blockly.FieldDropdown(profile.defaultBoard.dropdownAnalog), 'broche');
    this.setOutput(true, 'Number');
  }
};

Blockly.Blocks.moteur_dc = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('blocks/sensor_actuator/dagurs040.png', 75, 50))
        .appendField('actionner le moteur')
        .appendField(new Blockly.FieldDropdown([
          ['droit', '6'],
          ['gauche', '5']
        ]), 'MOTEUR');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('direction')
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_av_ar || [['avant', 'HIGH'], ['arrière', 'LOW']]), 'ETAT');
    this.appendValueInput('Vitesse')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('vitesse [0-125]');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
  }
};

Blockly.Blocks.moteur_dc_stop = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage('blocks/sensor_actuator/dagurs040.png', 75, 50))
        .appendField('arrêter le moteur')
        .appendField(new Blockly.FieldDropdown([
          ['droit', '6'],
          ['gauche', '5']
        ]), 'MOTEUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
  }
};

Blockly.Blocks.matrice8x8_symbole = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
    this.appendDummyInput()
        .appendField(Blockly.Msg.matrice8x8 || 'matrice 8x8')
        .appendField(new Blockly.FieldTextInput('damier'), 'NAME');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.matrice8x8_symbole_L1 || 'L1')
        .appendField(new Blockly.FieldTextInput('01010101'), 'L1');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.matrice8x8_symbole_L2 || 'L2')
        .appendField(new Blockly.FieldTextInput('10101010'), 'L2');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.matrice8x8_symbole_L3 || 'L3')
        .appendField(new Blockly.FieldTextInput('01010101'), 'L3');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.matrice8x8_symbole_L4 || 'L4')
        .appendField(new Blockly.FieldTextInput('10101010'), 'L4');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.matrice8x8_symbole_L5 || 'L5')
        .appendField(new Blockly.FieldTextInput('01010101'), 'L5');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.matrice8x8_symbole_L6 || 'L6')
        .appendField(new Blockly.FieldTextInput('10101010'), 'L6');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.matrice8x8_symbole_L7 || 'L7')
        .appendField(new Blockly.FieldTextInput('01010101'), 'L7');
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.matrice8x8_symbole_L8 || 'L8')
        .appendField(new Blockly.FieldTextInput('10101010'), 'L8');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.matrice8x8_init = {
  init: function() {
    this.appendDummyInput()
        .appendField('matrice 8x8')
        .appendField(new Blockly.FieldImage('blocks/sensor_actuator/matrice60.png', 60, 60));
    this.appendValueInput('DIN').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField('DIN');
    this.appendValueInput('CLK').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField('CLK');
    this.appendValueInput('CS').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField('CS');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
  }
};

Blockly.Blocks.matrice8x8_aff = {
  init: function() {
    this.appendDummyInput()
        .appendField('afficher le symbole')
        .appendField(new Blockly.FieldTextInput('damier'), 'TEXT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
  }
};

Blockly.Blocks.lcd_i2c = {
  init: function() {
    this.appendDummyInput()
        .appendField('écran LCD I2C')
        .appendField(new Blockly.FieldImage('blocks/sensor_actuator/lcd_i2c.png', 55, 35));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('fond')
        .appendField(new Blockly.FieldDropdown([
          ['bleu', 'bleu'],
          ['jaune', 'jaune'],
          ['rouge', 'rouge'],
          ['vert', 'vert']
        ]), 'fond');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.arduino_io ? Blockly.Blocks.arduino_io.HUE : 230);
  }
};
