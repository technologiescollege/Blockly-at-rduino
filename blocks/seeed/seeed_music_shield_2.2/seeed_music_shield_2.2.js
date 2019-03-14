// define blocks
'use strict';

goog.provide('Blockly.Blocks.seeed_music_shield');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['seeed_music_shield_addtolist'] = {
	init: function() {
		this.appendValueInput("FILE_NAME")
			.setCheck("String")
			.appendField("ajouter à la liste le fichier");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_playlist'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("lire toute la liste de lecture");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_playmode'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("définir le mode de lecture à")
			.appendField(new Blockly.FieldDropdown([["continue", "PM_NORMAL_PLAY"], ["aléatoire", "PM_SHUFFLE_PLAY"], ["répéter liste", "PM_REPEAT_LIST"], ["répéter chanson", "PM_REPEAT_ONE"]]), "PlayMode");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_playName'] = {
	init: function() {
		this.appendValueInput("FILE_NAME")
			.setCheck("String")
			.appendField("lire le fichier");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_playAll'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("ajouter tous les fichiers de la carte à la liste de lecture");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_disableKeys'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("désactiver les touches");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_setVolume'] = {
	init: function() {
		this.appendValueInput("VOLUME")
			.setCheck("Number")
			.appendField("régler le volume (0~254) à");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_setVolumeFunction'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("lier le volume à l'entrée")
			.appendField(new Blockly.FieldDropdown([["A4", "A4"], ["A5", "A5"]]), "analogPort");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_setDigitalFunction'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("lier la broche")
			.appendField(new Blockly.FieldDropdown([["D2", "2"], ["D9", "9"]]), "DIGITfunc");
		this.appendValueInput("FUNCdigit")
			.setCheck("String")
			.appendField("à la fonction");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_playNextSong'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("jouer le fichier suivant");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_playPreviousSong'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("jouer le fichier précédent");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_playPause'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("faire une pause dans la lecture en cours");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_playResume'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("reprendre la lecture en cours");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_playStop'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("arrêter la lecture");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_volumeUp'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("augmenter le volume");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_volumeDown'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("baisser le volume");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_buttonVolumeUp'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("D3 / augmenter le volume");
		this.setInputsInline(false);
		this.setOutput(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_buttonVolumeDown'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("D7 / baisser le volume");
		this.setInputsInline(false);
		this.setOutput(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_buttonPlayStop'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("D5 / lire ou stopper la lecture");
		this.setInputsInline(false);
		this.setOutput(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_buttonNextSong'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("D4 / lire le fichier suivant");
		this.setInputsInline(false);
		this.setOutput(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};

Blockly.Blocks['seeed_music_shield_buttonPreviousSong'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("D6 / lire le fichier précédent");
		this.setInputsInline(false);
		this.setOutput(true);
		this.setColour(Blockly.Blocks.seeed_music_shield.HUE);
		this.setTooltip('ce bloc sert à...');
		this.setHelpUrl('http://wiki.seeedstudio.com/Music_Shield_V2.2/');
	}
};