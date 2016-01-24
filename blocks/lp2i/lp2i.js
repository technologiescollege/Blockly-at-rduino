//www.technozone51fr

// define blocks
'use strict';

Blockly.Blocks['lp2i_mp3_play'] = {
  init: function() {
    this.appendValueInput("Fichier" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("lire fichier audio");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#00979D");
    this.setTooltip('');
    this.setHelpUrl('http://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299');
  }
};