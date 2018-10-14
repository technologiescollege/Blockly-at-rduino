/**
 * BlocklyDuino
 */

'use strict';

/**
 * Toggle blocks picture :
 */
BlocklyDuino.blockPicture = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
	var blocks = xmlBlocks.getElementsByTagName("block");

	Blockly.Arduino.imageBool = !Blockly.Arduino.imageBool;

	if (Blockly.Arduino.imageBool) {
		$('#icon_btn_blocs_picture').removeClass('glyphicon-eye-close');
		$('#icon_btn_blocs_picture').addClass('glyphicon-eye-open');
		Blockly.Arduino.imageSize = Blockly.Arduino.imageSizeOld;
		$('#btn_blocs_picture_mini').show();
		$('#btn_blocs_picture_maxi').show();
	} else {
		Blockly.Arduino.imageSizeOld = Blockly.Arduino.imageSize;
		$('#icon_btn_blocs_picture').removeClass('glyphicon-eye-open');
		$('#icon_btn_blocs_picture').addClass('glyphicon-eye-close');
		Blockly.Arduino.imageSize = 0;
		$('#btn_blocs_picture_mini').hide();
		$('#btn_blocs_picture_maxi').hide();
	}

	BlocklyDuino.workspace.clear();
	BlocklyDuino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));

};

BlocklyDuino.blockPicture_maxi = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);

	var blocks = xmlBlocks.getElementsByTagName("block");

	if (BlocklyDuino.pictSize<6) BlocklyDuino.pictSize++;

	if (BlocklyDuino.pictSize > 7) BlocklyDuino.pictSize=5;

	Blockly.Arduino.imageSize = 32 * BlocklyDuino.pictSize;

	BlocklyDuino.workspace.clear();
	BlocklyDuino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));

};

BlocklyDuino.blockPicture_mini = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);

	var blocks = xmlBlocks.getElementsByTagName("block");

	if (BlocklyDuino.pictSize>1) BlocklyDuino.pictSize--;

	if (BlocklyDuino.pictSize <1) BlocklyDuino.pictSize=1;

	Blockly.Arduino.imageSize = 32 * BlocklyDuino.pictSize;

	BlocklyDuino.workspace.clear();
	BlocklyDuino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));

};