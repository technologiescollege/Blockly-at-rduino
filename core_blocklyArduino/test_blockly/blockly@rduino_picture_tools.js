/**
 * BlocklyArduino
 */

'use strict';

BlocklyArduino.pictSize = 2;
//set default image size
Blockly.Arduino.imageSizeNull = 0; //pictSize = 0
Blockly.Arduino.imageSizeSmall = 32; //pictSize = 1
Blockly.Arduino.imageSizeNormal = 64; //pictSize = 2
Blockly.Arduino.imageSizeBig = 96; //pictSize = 3
Blockly.Arduino.imageSizeOld = 32;
Blockly.Arduino.imageSize = Blockly.Arduino.imageSizeNormal;
Blockly.Arduino.imageBool = true;
Blockly.Arduino.cardSize = 200; //same as width in index.html showcardModal


/**
 * Toggle blocks picture : 
 */
BlocklyArduino.blockPicture = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyArduino.workspace);
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
	
	BlocklyArduino.workspace.clear();
	BlocklyArduino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));
	
};

BlocklyArduino.blockPicture_maxi = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyArduino.workspace);
	
	var blocks = xmlBlocks.getElementsByTagName("block");
	
	if (BlocklyArduino.pictSize<6) BlocklyArduino.pictSize++;
	
	if (BlocklyArduino.pictSize > 7) BlocklyArduino.pictSize=5;
	
	Blockly.Arduino.imageSize = 32 * BlocklyArduino.pictSize;
	
	BlocklyArduino.workspace.clear();
	BlocklyArduino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));
	
};

BlocklyArduino.blockPicture_mini = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyArduino.workspace);
	
	var blocks = xmlBlocks.getElementsByTagName("block");
	
	if (BlocklyArduino.pictSize>1) BlocklyArduino.pictSize--;
	
	if (BlocklyArduino.pictSize <1) BlocklyArduino.pictSize=1;
	
	Blockly.Arduino.imageSize = 32 * BlocklyArduino.pictSize;
	
	BlocklyArduino.workspace.clear();
	BlocklyArduino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));
	
};

BlocklyArduino.cardPicture_maxi = function() {	
	var img = $("#arduino_card_picture");
	var modal = $("#showcardModal");
	
    if ((img.width() < 450)||(img.height() < 650))
    {
		Blockly.Arduino.cardSize += 50;
		img.animate({width: Blockly.Arduino.cardSize}, 1000);
		modal.animate({width: Blockly.Arduino.cardSize + 50}, 1000);
    }	
};

BlocklyArduino.cardPicture_mini = function() {
	var img = $("#arduino_card_picture");
	var modal = $("#showcardModal");
    
    if ((img.width() > 200)||(img.height() > 220))
    {
		Blockly.Arduino.cardSize -= 50;
		img.animate({width: Blockly.Arduino.cardSize}, 1000);
		modal.animate({width: Blockly.Arduino.cardSize + 50}, 1000);
    }	
};