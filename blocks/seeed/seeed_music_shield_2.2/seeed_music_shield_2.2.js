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

