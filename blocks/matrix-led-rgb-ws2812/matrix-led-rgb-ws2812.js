// define blocks
'use strict';

goog.provide('Blockly.Blocks.MatrixLED_WS2812B');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

Blockly.Blocks.MatrixLED_WS2812B_init = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_init)
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Pin_Matrix_init")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_init_Pin);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  }
};

Blockly.Blocks.MatrixLED_WS2812B_setPixelColor = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Red")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Red);
    this.appendValueInput("Green")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Green);
    this.appendValueInput("Blue")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Blue);
    this.appendValueInput("Pixel_number")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Pixel_Number);
    this.appendValueInput("Brightness")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_Brightness);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MATRIX_NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Matrix_WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.MatrixLED_WS2812B_setBrightness = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_setBrightness)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Brightness")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MatrixLED_WS2812B_Brightness);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MATRIX_NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Matrix_WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.MatrixLED_WS2812B_CLEAN = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_clean)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MATRIX_NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Matrix_WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.MatrixLED_WS2812B_draw = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MatrixLED_WS2812B_setBrightness)
		.appendField(
				new Blockly.FieldInstance('Matrix_WS2812_fieldInstance',
										  Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'MATRIX_NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/matrix-led-rgb-ws2812/matrix-led-rgb-ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .appendField('  ')
        .appendField(' 0')
        .appendField('    1')
        .appendField('   2')
        .appendField('    3')
        .appendField('   4')
        .appendField('    5')
        .appendField('   6')
        .appendField('    7');
    this.appendDummyInput()
        .appendField('0 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel0')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel1')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel2')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel3')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel4')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel5')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel6')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel7');
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel8')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel9')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel10')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel11')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel12')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel13')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel14')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel15');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel16')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel17')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel18')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel19')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel20')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel21')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel22')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel23');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel24')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel25')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel26')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel27')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel28')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel29')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel30')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel31');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel32')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel33')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel34')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel35')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel36')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel37')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel38')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel39');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel40')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel41')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel42')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel43')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel44')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel45')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel46')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel47');
    this.appendDummyInput()
        .appendField('6 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel48')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel49')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel50')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel51')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel52')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel53')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel54')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel55');
    this.appendDummyInput()
        .appendField('7 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel56')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel57')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel58')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel59')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel60')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel61')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel62')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'Pixel63');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MATRIX_NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Matrix_WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};