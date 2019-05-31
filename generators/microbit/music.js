'use strict';

goog.provide('Blockly.Python.music');
goog.require('Blockly.Python');

Blockly.Python.addReservedWords('music');

Blockly.Python['microbit_music_play_built_in'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var dropdown_melody = block.getFieldValue('melody');
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE' ? 'True' : 'False';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE' ? 'True' : 'False';
  var code = 'music.play(music.' + dropdown_melody +', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  return code;
};

Blockly.Python['microbit_music_pitch'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var number_pitch = block.getFieldValue('pitch');
  var number_duration = block.getFieldValue('duration');
  var code = 'music.pitch(' + number_pitch + ', ' + number_duration + ')\n';
  return code;
};

Blockly.Python['microbit_music_play_list_of_notes'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var value_notes = Blockly.Python.valueToCode(block, 'notes', Blockly.Python.ORDER_ATOMIC);
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE' ? 'True' : 'False';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE' ? 'True' : 'False';
  var code = 'music.play(' + value_notes + ', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  return code;
};

Blockly.Python['microbit_music_reset'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = 'music.reset()\n';
  return code;
};

Blockly.Python['microbit_music_stop'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = 'music.stop()\n';
  return code;
};

Blockly.Python['microbit_music_set_tempo'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var value_ticks = Blockly.Python.valueToCode(block, 'ticks', Blockly.Python.ORDER_ATOMIC);
  var value_bpm = Blockly.Python.valueToCode(block, 'bpm', Blockly.Python.ORDER_ATOMIC);
  var code = 'music.set_tempo(' + value_ticks + ', ' + value_bpm +')\n';
  return code;
};

Blockly.Python['microbit_music_get_tempo'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = 'music.get_tempo()';
  return [code, Blockly.Python.ORDER_MEMBER];
};
