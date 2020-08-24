/**
 * Blocks pour LCD RGB adafruit
	
 * @author Gwen
 */
'use strict';

goog.provide('Blockly.Arduino.Adafruit_SSD1306');
goog.require('Blockly.Arduino');

Blockly.Arduino['SSD1306_init'] = function() {
        var dropdown_width = this.getFieldValue('WIDTH');	
        var dropdown_height = this.getFieldValue('HEIGHT');
	var dropdown_oled_reset = this.getFieldValue('OLED_RESET');
	var dropdown_I2C_address = this.getFieldValue('I2C_ADDRESS');

	Blockly.Arduino.includes_['include_SPI'] = '#include <SPI.h>';
	Blockly.Arduino.includes_['include_Wire'] = '#include <Wire.h>';
	Blockly.Arduino.includes_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
	Blockly.Arduino.includes_['include_Adafruit_SSD1306'] = '#include <Adafruit_SSD1306.h>';

        Blockly.Arduino.definitions_['define_WIDTH'] = '#define SCREEN_WIDTH ' + dropdown_width + ' // OLED display width, in pixels';
        Blockly.Arduino.definitions_['define_HEIGHT'] = '#define SCREEN_HEIGHT ' + dropdown_height + ' // OLED display height, in pixels';
        Blockly.Arduino.definitions_['define_OLED_RESET'] = '#define OLED_RESET ' + dropdown_oled_reset + ' // Reset pin # (or -1 if sharing Arduino reset pin)';
	
	Blockly.Arduino.definitions_['obj_display'] = 'Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);';

	Blockly.Arduino.setups_['setup_comment'] = '// SSD1306_SWITCHCAPVCC = generate display voltage from 3.3V internally';
	Blockly.Arduino.setups_['setup_display'] = 'display.begin(SSD1306_SWITCHCAPVCC, ' + dropdown_I2C_address + '); // I2C address ' + dropdown_I2C_address;
 
	var code = '';
	return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};

Blockly.Arduino['SSD1306_display'] = function() {
	var code = 'display.display();\n';
	return code;
};

Blockly.Arduino['SSD1306_clearDisplay'] = function() {
	var code = 'display.clearDisplay();\n';
	return code;
};

Blockly.Arduino['SSD1306_invertDisplay'] = function() {
        var checkbox_invert = Blockly.Arduino.valueToCode(this, 'ENABLE', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'display.invertDisplay('+ checkbox_invert + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_drawPixel'] = function() {
	var value_x_pos = Blockly.Arduino.valueToCode(this, 'XPOS', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos = Blockly.Arduino.valueToCode(this, 'YPOS', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_colour = this.getFieldValue('COLOUR');

	var code = 'display.drawPixel(' + value_x_pos + ', ' + value_y_pos + ', ' + dropdown_colour + ');\n';
	return code;
};

Blockly.Arduino['SSD1306_drawLine'] = function() {
	var value_x_pos_1 = Blockly.Arduino.valueToCode(this, 'XPOS_1', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos_1 = Blockly.Arduino.valueToCode(this, 'YPOS_1', Blockly.Arduino.ORDER_ATOMIC);
	var value_x_pos_2 = Blockly.Arduino.valueToCode(this, 'XPOS_2', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos_2 = Blockly.Arduino.valueToCode(this, 'YPOS_2', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_line_colour = this.getFieldValue('COLOUR');
	
	var code = 'display.drawLine(' + value_x_pos_1 + ',' + value_y_pos_1 + ',' + value_x_pos_2 + ',' + value_y_pos_2 + ',' + dropdown_line_colour + ');\n';
	return code;
};

Blockly.Arduino['SSD1306_drawRect'] = function() {
	var value_x_pos_1 = Blockly.Arduino.valueToCode(this, 'XPOS_1', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos_1 = Blockly.Arduino.valueToCode(this, 'YPOS_1', Blockly.Arduino.ORDER_ATOMIC);
        var value_x_pos_2 = Blockly.Arduino.valueToCode(this, 'XPOS_2', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos_2 = Blockly.Arduino.valueToCode(this, 'YPOS_2', Blockly.Arduino.ORDER_ATOMIC);
        var value_fill = Blockly.Arduino.valueToCode(this, 'FILL', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_colour = this.getFieldValue('COLOUR');

	var code = 'display';
	if (value_fill == "true") {
		code += '.fill';
	} else {
		code += '.draw';
	}
	code += 'Rect(' + value_x_pos_1 + ',' + value_y_pos_1 + ',' + value_x_pos_2 + ',' + value_y_pos_2 + ',' + dropdown_colour + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_drawCircle'] = function() {
	var value_x_pos = Blockly.Arduino.valueToCode(this, 'XPOS', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos = Blockly.Arduino.valueToCode(this, 'YPOS', Blockly.Arduino.ORDER_ATOMIC);
	var value_radius = Blockly.Arduino.valueToCode(this, 'RADIUS', Blockly.Arduino.ORDER_ATOMIC);
        var value_fill = Blockly.Arduino.valueToCode(this, 'FILL', Blockly.Arduino.ORDER_ATOMIC);
        var dropdown_colour = this.getFieldValue('COLOUR');
        
	var code = 'display';
        if (value_fill == "true") {
                code += '.fill';
        } else {
                code += '.draw';
        }
	code += 'Circle(' + value_x_pos + ',' + value_y_pos + ',' + value_radius + ',' + dropdown_colour + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_drawRoundRect'] = function() {
	var value_x_pos_1 = Blockly.Arduino.valueToCode(this, 'XPOS_1', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos_1 = Blockly.Arduino.valueToCode(this, 'YPOS_1', Blockly.Arduino.ORDER_ATOMIC);
        var value_x_pos_2 = Blockly.Arduino.valueToCode(this, 'XPOS_2', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos_2 = Blockly.Arduino.valueToCode(this, 'YPOS_2', Blockly.Arduino.ORDER_ATOMIC);
	var value_radius = Blockly.Arduino.valueToCode(this, 'RADIUS', Blockly.Arduino.ORDER_ATOMIC);
        var value_fill = Blockly.Arduino.valueToCode(this, 'FILL', Blockly.Arduino.ORDER_ATOMIC);
        var dropdown_colour = this.getFieldValue('COLOUR');
        
	var code = 'display';
        if (value_fill == "true") {
                code += '.fill';
        } else {
                code += '.draw';
        }
        code += 'RoundRect(' + value_x_pos_1 + ',' + value_y_pos_1 + ',' + value_x_pos_2 + ',' + value_y_pos_2;
	code += ',' + value_radius + ',' + dropdown_colour + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_drawTriangle'] = function() {
	var value_x_pos_1 = Blockly.Arduino.valueToCode(this, 'XPOS_1', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos_1 = Blockly.Arduino.valueToCode(this, 'YPOS_1', Blockly.Arduino.ORDER_ATOMIC);
        var value_x_pos_2 = Blockly.Arduino.valueToCode(this, 'XPOS_2', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos_2 = Blockly.Arduino.valueToCode(this, 'YPOS_2', Blockly.Arduino.ORDER_ATOMIC);
	var value_x_pos_3 = Blockly.Arduino.valueToCode(this, 'XPOS_3', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos_3 = Blockly.Arduino.valueToCode(this, 'YPOS_3', Blockly.Arduino.ORDER_ATOMIC);
	var value_fill = Blockly.Arduino.valueToCode(this, 'FILL', Blockly.Arduino.ORDER_ATOMIC);
        var dropdown_colour = this.getFieldValue('COLOUR');
        
	var code = 'display';
        if (value_fill == "true") {
                code += '.fill';
        } else {
                code += '.draw';
        }
        code += 'Triangle(';
	code += value_x_pos_1 + ',' + value_y_pos_1 + ',' + value_x_pos_2 + ',' + value_y_pos_2 + ',' + value_x_pos_3 + ',' + value_y_pos_3 + ',' + dropdown_colour + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_setTextSize'] = function() {
        var value_size = Blockly.Arduino.valueToCode(this, 'SIZE', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'display.setTextSize(' + value_size + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_setTextColour'] = function() {
	var dropdown_colour = this.getFieldValue('COLOUR');
        var code = 'display.setTextColor(' + dropdown_colour + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_setCursor'] = function() {
	var value_x_pos = Blockly.Arduino.valueToCode(this, 'XPOS', Blockly.Arduino.ORDER_ATOMIC);
        var value_y_pos = Blockly.Arduino.valueToCode(this, 'YPOS', Blockly.Arduino.ORDER_ATOMIC);
        
	var code = 'display.setCursor(' + value_x_pos + ',' + value_y_pos + ');\n';
	return code;
};

Blockly.Arduino['SSD1306_cp437'] = function() {
        var value_enable = Blockly.Arduino.valueToCode(this, 'ENABLE', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'display.cp437(' + value_enable + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_write'] = function() {
        var value_char = Blockly.Arduino.valueToCode(this, 'CHAR', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'display.write(' + value_char + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_println'] = function() {
        var value_string = Blockly.Arduino.valueToCode(this, 'STRING', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'display.println(' + value_string + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_print'] = function() {
        var value_string = Blockly.Arduino.valueToCode(this, 'STRING', Blockly.Arduino.ORDER_ATOMIC);
        var code = 'display.print(' + value_string + ');\n';
        return code;
};

Blockly.Arduino['SSD1306_width'] = function() {
        var code = 'display.width()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SSD1306_height'] = function() {
        var code = 'display.height()';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['SSD1306_startscroll'] = function() {
        var value_start_row = Blockly.Arduino.valueToCode(this, 'START_ROW', Blockly.Arduino.ORDER_ATOMIC);
        var value_end_row = Blockly.Arduino.valueToCode(this, 'END_ROW', Blockly.Arduino.ORDER_ATOMIC);
        var dropdown_direction = this.getFieldValue('SCROLL_DIRECTION');

	var code = 'display.startscroll';
        if (dropdown_direction == "SSD1306_RIGHT") {
                code += 'right';
        } else if (dropdown_direction == "SSD1306_LEFT") {
                code += 'left';
        } else if (dropdown_direction == "SSD1306_DIAGRIGHT") {
                code += 'diagright';
	} else { // dropdown_direction == "SSD1306_DIAGLEFT"
                code += 'diagleft';
	}
        code += '(' + value_start_row + ',' + value_end_row + ');\n';
	return code;
};

Blockly.Arduino['SSD1306_stopscroll'] = function() {
        var code = 'display.stopscroll();\n';
        return code;
};

