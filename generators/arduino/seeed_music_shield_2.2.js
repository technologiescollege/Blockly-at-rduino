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
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.addToPlaylist(' + value_name + ');\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playlist'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.play();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playmode'] = function(block) {
  var dropdown_playmode = block.getFieldValue('PlayMode');
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.setPlayMode(' + dropdown_playmode + ');\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playName'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'FILE_NAME', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.addOne(' + value_name + ');\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playAll'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.scanAndPlayAll();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_disableKeys'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.keyDisable();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_setVolume'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'VOLUME', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.setVolume(' + value_name + ');\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_setVolumeFunction'] = function(block) {
  var dropdown_analogPort = block.getFieldValue('analogPort');
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n  player.analogControlEnable(); //enable to scan the A4/A5\n' +
  '  player.begin();\n' +
  '  player.attachAnalogOperation(' + dropdown_analogPort + ', adjustVolume); //example rotary Angle Sensor connected to A4,to control the volume\n';
  Blockly.Arduino.userFunctions_['adjustVolume'] = 'void adjustVolume(void)\n' +
  '{\n' +
  '  unsigned int vol_temp = analogRead(' + dropdown_analogPort + ');\n' +
  '  unsigned char volume = vol_temp / 12;\n' +
  '  if (volume == 0x55) volume = MAXVOL; //MAXVOL = 0xfe;\n' +
  '  player.setVolume(volume);\n' +
  '}\n';
  var code = '';
  return code;
};

Blockly.Arduino['seeed_music_shield_setDigitalFunction'] = function(block) {
  var value_digitfunc = block.getFieldValue('DIGITfunc');
  var statements_funcdigit = Blockly.Arduino.valueToCode(block, 'FUNCdigit', Blockly.Arduino.ORDER_ATOMIC);
  statements_funcdigit = statements_funcdigit.substr(1);
  statements_funcdigit = statements_funcdigit.substr(0, statements_funcdigit.length - 1);
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n  player.digitalControlEnable();\n' +
  '  player.begin();\n' +
  '  player.attachDigitOperation(' + value_digitfunc + ', ' + statements_funcdigit + ', HIGH);\n';
  var code = '';
  return code;
};

Blockly.Arduino['seeed_music_shield_playNextSong'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.opNextSong();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playPreviousSong'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.opPreviousSong();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playPause'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.opPause();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playResume'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.opResume();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_playStop'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.opStop();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_volumeUp'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.opVolumeUp();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_volumeDown'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'player.opVolumeDown();\n';
  return code;
};

Blockly.Arduino['seeed_music_shield_buttonVolumeUp'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'digitalRead(3)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['seeed_music_shield_buttonVolumeDown'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'digitalRead(7)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['seeed_music_shield_buttonPlayStop'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'digitalRead(5)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['seeed_music_shield_buttonNextSong'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'digitalRead(4)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['seeed_music_shield_buttonPreviousSong'] = function(block) {
  Blockly.Arduino.includes_['MusicPlayer'] = '#include <SD.h>\n' +
	'#include <SPI.h>\n' +
	'#include <arduino.h>\n' +
	'#include <MusicPlayer.h>';
  Blockly.Arduino.setups_['MusicPlayer']='Serial.begin(9600);\n  player.begin();\n';
  var code = 'digitalRead(6)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};