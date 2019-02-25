/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.seeed_music_shield');

goog.require('Blockly.Arduino');

Blockly.Arduino['seeed_music_shield_addtolist'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'FILE_NAME', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='player.begin();\n';
  var code = 'player.addToPlaylist(' + value_name + ');\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playlist'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='player.begin();\n';
  var code = 'player.play();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playmode'] = function(block) {
  var dropdown_playmode = block.getFieldValue('PlayMode');
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='player.begin();\n';
  var code = 'player.setPlayMode(' + dropdown_playmode + ');\n';
  return code;
};

