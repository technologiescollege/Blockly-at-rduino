//Code generator functions for the AUTODUINO interface

/**
 * @license
 * GPL
 *
 * Copyright 2016 Bernard Remond.
 * https://github.com/nbremond77
 *
 */

/**
 * @fileoverview Helper functions for generating autoduino interface board.
 * @author nbremond@laposte.net (Bernard Remond)
 */

/**
 * @fileoverview Helper functions for generating seeeduino autoduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.provide('Blockly.Arduino.autoduino');

goog.require('Blockly.Arduino');

//---------------------------------------------------

var autoduino_ir_code_detection_index = 0;

myAutoduinoLibrary_gpio_expander = "class gpio_expander {\n\
public:\n\
  gpio_expander( );\n\
  virtual void  begin(bool protocolInitOverride=false) = 0;\n\
protected:\n\
  inline uint16_t   byte2word(byte high_byte,byte low_byte){return (word)high_byte << 8 | (word)low_byte;};\n\
  inline byte     word2highByte(uint16_t data){return (byte)(data >> 8);};\n\
  inline byte     word2lowByte(uint16_t data){return (byte)(data & 0x00FF);};\n\
private:\n\
};\n\
\n\
\n\
class pca9555 : public gpio_expander\n\
{\n\
public:\n\
  pca9555(const uint8_t adrs);\n\
  pca9555();;//used with other libraries only\n\
  void      postSetup(const uint8_t adrs);//used with other libraries only\n\
  virtual void  begin(bool protocolInitOverride=false); //protocolInitOverride=true will not init the SPI \n\
  void      gpioPinMode(uint16_t mode);         //OUTPUT=all out,INPUT=all in,0xxxx=you choose\n\
  void      gpioPinMode(uint8_t pin, bool mode);    //set a unique pin as IN(1) or OUT (0)\n\
  void      gpioPort(uint16_t value);         //HIGH=all Hi, LOW=all Low,0xxxx=you choose witch low or hi\n\
  void      gpioPort(byte lowByte, byte highByte);    //same as abowe but uses 2 separate bytes\n\
  uint16_t    readGpioPort();               //read the state of the pins (all)\n\
  uint16_t    readGpioPortFast();             \n\
  void      gpioDigitalWrite(uint8_t pin, bool value);  //write data to one pin\n\
  void      gpioDigitalWriteFast(uint8_t pin, bool value);\n\
  int       gpioDigitalRead(uint8_t pin);       //read data from one pin\n\
  uint8_t     gpioRegisterReadByte(byte reg);         //read a byte from chip register\n\
  int       gpioDigitalReadFast(uint8_t pin);\n\
  void      gpioRegisterWriteByte(byte reg,byte data);    //write a byte in a chip register\n\
  void      gpioRegisterWriteWord(byte reg,word data);    //write a word in a chip register\n\
  void      portPullup(uint16_t data);            // HIGH=all pullup, LOW=all pulldown,0xxxx=you choose witch\n\
  void      gpioPortUpdate();\n\
  // direct access commands\n\
  uint16_t    readAddress(byte addr);\n\
  //------------------------- REGISTERS\n\
  byte      IODIR;//GPCONF\n\
  byte      GPPU;//GPO\n\
  byte      GPIO;//GPI\n\
  byte      IPOL;//GPPOL\n\
private:\n\
  uint8_t     _adrs;\n\
  uint16_t    _gpioDirection;\n\
  uint16_t    _gpioState;\n\
  bool      _error;\n\
  void      writeByte(byte addr, byte data);  \n\
  void      writeWord(byte addr, uint16_t data);\n\
};\n\
\n\
gpio_expander::gpio_expander() \n\
{\n\
}\n\
\n\
\n\
pca9555::pca9555(){\n\
}\n\
\n\
pca9555::pca9555(const uint8_t adrs){\n\
  postSetup(adrs);\n\
}\n\
\n\
void pca9555::postSetup(const uint8_t adrs){\n\
  if (adrs >= 0x20 && adrs <= 0x27){//basic addressing\n\
    _adrs = adrs;\n\
    _error = false;\n\
  } else if (adrs >= 0x28 && adrs <= 0xDE){//advanced addressing\n\
    //todo\n\
    _error = false;\n\
  } else {\n\
    _error = true;\n\
  }\n\
  //setup register values for this chip\n\
  IODIR =   0x06;//Configuration Registers (0x06..0x07)\n\
  GPPU =    0x02;//Output Port Registers (0x02..0x03)\n\
  GPIO =    0x00;//Input Port Registers (0x00..0x01)\n\
  IPOL =    0x04;//Polarity Inversion Registers (0x04..0x05)(\n\
}\n\
\n\
void pca9555::begin(bool protocolInitOverride) {\n\
  if (!protocolInitOverride && !_error){\n\
    Wire.begin();\n\
    #if ARDUINO >= 157\n\
      Wire.setClock(400000UL); // Set I2C frequency to 400kHz\n\
    #else\n\
      TWBR = ((F_CPU / 400000UL) - 16) / 2; // Set I2C frequency to 400kHz\n\
    #endif\n\
  }\n\
  delay(100);\n\
  _gpioDirection = 0xFFFF;//all in\n\
  _gpioState = 0x0000;//all low \n\
}\n\
\n\
\n\
\n\
\n\
uint16_t pca9555::readAddress(byte addr){\n\
  byte low_byte = 0;\n\
  byte high_byte = 0;\n\
  if (!_error){\n\
    Wire.beginTransmission(_adrs);\n\
    Wire.write(addr);//witch register?\n\
    //Wire.endTransmission();\n\
    Wire.endTransmission(false);// looks like in this way it works!\n\
    Wire.requestFrom((uint8_t)_adrs,(uint8_t)2);\n\
    low_byte = Wire.read();\n\
    high_byte = Wire.read();\n\
  } \n\
  return byte2word(high_byte,low_byte);\n\
}\n\
\n\
\n\
\n\
void pca9555::gpioPinMode(uint16_t mode){\n\
  if (mode == INPUT){\n\
    _gpioDirection = 0xFFFF;\n\
  } else if (mode == OUTPUT){ \n\
    _gpioDirection = 0x0000;\n\
    _gpioState = 0x0000;\n\
  } else {\n\
    _gpioDirection = mode;\n\
  }\n\
  writeWord(IODIR,_gpioDirection);\n\
}\n\
\n\
void pca9555::gpioPinMode(uint8_t pin, bool mode){\n\
  if (pin < 16){//0...15\n\
    mode == INPUT ? _gpioDirection |= (1 << pin) :_gpioDirection &= ~(1 << pin);\n\
    writeWord(IODIR,_gpioDirection);\n\
  }\n\
}\n\
\n\
void pca9555::gpioPort(uint16_t value){\n\
  if (value == HIGH){\n\
    _gpioState = 0xFFFF;\n\
  } else if (value == LOW){ \n\
    _gpioState = 0x0000;\n\
  } else {\n\
    _gpioState = value;\n\
  }\n\
  writeWord(GPIO,_gpioState);\n\
}\n\
\n\
void pca9555::gpioPort(byte lowByte, byte highByte){\n\
  _gpioState = byte2word(highByte,lowByte);\n\
  writeWord(GPIO,_gpioState);\n\
}\n\
\n\
\n\
uint16_t pca9555::readGpioPort(){\n\
  return readAddress(GPIO);\n\
}\n\
\n\
uint16_t pca9555::readGpioPortFast(){\n\
  return _gpioState;\n\
}\n\
\n\
int pca9555::gpioDigitalReadFast(uint8_t pin){\n\
  int temp = 0;\n\
  if (pin < 16) temp = bitRead(_gpioState,pin);\n\
  return temp;\n\
}\n\
\n\
\n\
\n\
\n\
void pca9555::gpioDigitalWrite(uint8_t pin, bool value){\n\
  if (pin < 16){//0...15\n\
    value == HIGH ? _gpioState |= (1 << pin) : _gpioState &= ~(1 << pin);\n\
    writeWord(GPPU,_gpioState);\n\
  }\n\
}\n\
\n\
void pca9555::gpioDigitalWriteFast(uint8_t pin, bool value){\n\
  if (pin < 16){//0...15\n\
    value == HIGH ? _gpioState |= (1 << pin) : _gpioState &= ~(1 << pin);\n\
  }\n\
}\n\
\n\
void pca9555::gpioPortUpdate(){\n\
  writeWord(GPIO,_gpioState);\n\
}\n\
\n\
int pca9555::gpioDigitalRead(uint8_t pin){\n\
  if (pin < 16) return (int)(readAddress(GPIO) & 1 << pin);\n\
  return 0;\n\
}\n\
\n\
uint8_t pca9555::gpioRegisterReadByte(byte reg){\n\
  uint8_t data = 0;\n\
  if (!_error){\n\
    Wire.beginTransmission(_adrs);\n\
    Wire.write(reg);\n\
    Wire.endTransmission();\n\
    Wire.requestFrom((uint8_t)_adrs,(uint8_t)1);\n\
    data = Wire.read();\n\
  }\n\
  return data;\n\
}\n\
\n\
\n\
void pca9555::gpioRegisterWriteByte(byte reg,byte data){\n\
  writeByte(reg,(byte)data);\n\
}\n\
\n\
void pca9555::gpioRegisterWriteWord(byte reg,word data){\n\
  writeWord(reg,(word)data);\n\
}\n\
\n\
/* ------------------------------ Low Level ----------------*/\n\
void pca9555::writeByte(byte addr, byte data){\n\
  if (!_error){\n\
    Wire.beginTransmission(_adrs);\n\
    Wire.write(addr);//witch register?\n\
    Wire.write(data);\n\
    Wire.endTransmission();\n\
  }\n\
}\n\
\n\
void pca9555::writeWord(byte addr, uint16_t data){\n\
  if (!_error){\n\
    Wire.beginTransmission(_adrs);\n\
    Wire.write(addr);//witch register?\n\
    Wire.write(word2lowByte(data));\n\
    Wire.write(word2highByte(data));\n\
    Wire.endTransmission();\n\
  }\n\
}";


//---------------------------------------------------





myAutoduinoLibrary_lcd = "// commands\n\
#define LCD_CLEARDISPLAY 0x01\n\
#define LCD_RETURNHOME 0x02\n\
#define LCD_ENTRYMODESET 0x04\n\
#define LCD_DISPLAYCONTROL 0x08\n\
#define LCD_CURSORSHIFT 0x10\n\
#define LCD_FUNCTIONSET 0x20\n\
#define LCD_SETCGRAMADDR 0x40\n\
#define LCD_SETDDRAMADDR 0x80\n\
\n\
// flags for display entry mode\n\
#define LCD_ENTRYRIGHT 0x00\n\
#define LCD_ENTRYLEFT 0x02\n\
#define LCD_ENTRYSHIFTINCREMENT 0x01\n\
#define LCD_ENTRYSHIFTDECREMENT 0x00\n\
\n\
// flags for display on/off control\n\
#define LCD_DISPLAYON 0x04\n\
#define LCD_DISPLAYOFF 0x00\n\
#define LCD_CURSORON 0x02\n\
#define LCD_CURSOROFF 0x00\n\
#define LCD_BLINKON 0x01\n\
#define LCD_BLINKOFF 0x00\n\
\n\
// flags for display/cursor shift\n\
#define LCD_DISPLAYMOVE 0x08\n\
#define LCD_CURSORMOVE 0x00\n\
#define LCD_MOVERIGHT 0x04\n\
#define LCD_MOVELEFT 0x00\n\
\n\
// flags for function set\n\
#define LCD_8BITMODE 0x10\n\
#define LCD_4BITMODE 0x00\n\
#define LCD_2LINE 0x08\n\
#define LCD_1LINE 0x00\n\
#define LCD_5x10DOTS 0x04\n\
#define LCD_5x8DOTS 0x00\n\
\n\
// flags for backlight control\n\
#define LCD_BACKLIGHT 0x08\n\
#define LCD_NOBACKLIGHT 0x00\n\
\n\
#define En B00000100  // Enable bit\n\
#define Rw B00000010  // Read/Write bit\n\
#define Rs B00000001  // Register select bit\n\
\n\
/**\n\
 * This is the driver for the Liquid Crystal LCD displays that use the I2C bus.\n\
 *\n\
 * After creating an instance of this class, first call begin() before anything else.\n\
 * The backlight is on by default, since that is the most likely operating mode in\n\
 * most cases.\n\
 */\n\
class MyLiquidCrystal_I2C : public Print {\n\
public:\n\
	/**\n\
	 * Constructor\n\
	 *\n\
	 * @param lcd_addr	I2C slave address of the LCD display. Most likely printed on the\n\
	 *					LCD circuit board, or look in the supplied LCD documentation.\n\
	 * @param lcd_cols	Number of columns your LCD display has.\n\
	 * @param lcd_rows	Number of rows your LCD display has.\n\
	 * @param charsize	The size in dots that the display has, use LCD_5x10DOTS or LCD_5x8DOTS.\n\
	 */\n\
	MyLiquidCrystal_I2C(uint8_t lcd_addr, uint8_t lcd_cols, uint8_t lcd_rows, uint8_t charsize = LCD_5x8DOTS);\n\
\n\
	/**\n\
	 * Set the LCD display in the correct begin state, must be called before anything else is done.\n\
	 */\n\
	void begin();\n\
\n\
	 /**\n\
	  * Remove all the characters currently shown. Next print/write operation will start\n\
	  * from the first position on LCD display.\n\
	  */\n\
	void clear();\n\
\n\
	/**\n\
	 * Next print/write operation will will start from the first position on the LCD display.\n\
	 */\n\
	void home();\n\
\n\
	 /**\n\
	  * Do not show any characters on the LCD display. Backlight state will remain unchanged.\n\
	  * Also all characters written on the display will return, when the display in enabled again.\n\
	  */\n\
	void noDisplay();\n\
\n\
	/**\n\
	 * Show the characters on the LCD display, this is the normal behaviour. This method should\n\
	 * only be used after noDisplay() has been used.\n\
	 */ \n\
	void display();\n\
\n\
	/**\n\
	 * Do not blink the cursor indicator.\n\
	 */\n\
	void noBlink();\n\
\n\
	/**\n\
	 * Start blinking the cursor indicator.\n\
	 */ \n\
	void blink();\n\
\n\
	/**\n\
	 * Do not show a cursor indicator.\n\
	 */\n\
	void noCursor();\n\
\n\
	/**\n\
 	 * Show a cursor indicator, cursor can blink on not blink. Use the\n\
	 * methods blink() and noBlink() for changing cursor blink.\n\
	 */ \n\
	void cursor();\n\
\n\
	void scrollDisplayLeft();\n\
	void scrollDisplayRight();\n\
	void printLeft();\n\
	void printRight();\n\
	void leftToRight();\n\
	void rightToLeft();\n\
	void shiftIncrement();\n\
	void shiftDecrement();\n\
	void noBacklight();\n\
	void backlight();\n\
	void autoscroll();\n\
	void noAutoscroll(); \n\
	void createChar(uint8_t, uint8_t[]);\n\
	void setCursor(uint8_t, uint8_t); \n\
	virtual size_t write(uint8_t);\n\
	void command(uint8_t);\n\
\n\
	inline void blink_on() { blink(); }\n\
	inline void blink_off() { noBlink(); }\n\
	inline void cursor_on() { cursor(); }\n\
	inline void cursor_off() { noCursor(); }\n\
\n\
// Compatibility API function aliases\n\
	void setBacklight(uint8_t new_val);				// alias for backlight() and nobacklight()\n\
	void load_custom_character(uint8_t char_num, uint8_t *rows);	// alias for createChar()\n\
	void printstr(const char[]);\n\
\n\
private:\n\
	void send(uint8_t, uint8_t);\n\
	void write4bits(uint8_t);\n\
	void expanderWrite(uint8_t);\n\
	void pulseEnable(uint8_t);\n\
	uint8_t _addr;\n\
	uint8_t _displayfunction;\n\
	uint8_t _displaycontrol;\n\
	uint8_t _displaymode;\n\
	uint8_t _cols;\n\
	uint8_t _rows;\n\
	uint8_t _charsize;\n\
	uint8_t _backlightval;\n\
};\n\
\n\
// When the display powers up, it is configured as follows:\n\
//\n\
// 1. Display clear\n\
// 2. Function set: \n\
//    DL = 1; 8-bit interface data \n\
//    N = 0; 1-line display \n\
//    F = 0; 5x8 dot character font \n\
// 3. Display on/off control: \n\
//    D = 0; Display off \n\
//    C = 0; Cursor off \n\
//    B = 0; Blinking off \n\
// 4. Entry mode set: \n\
//    I/D = 1; Increment by 1\n\
//    S = 0; No shift \n\
//\n\
// Note, however, that resetting the Arduino doesn't reset the LCD, so we\n\
// can't assume that its in that state when a sketch starts (and the\n\
// LiquidCrystal constructor is called).\n\
\n\
MyLiquidCrystal_I2C::MyLiquidCrystal_I2C(uint8_t lcd_addr, uint8_t lcd_cols, uint8_t lcd_rows, uint8_t charsize)\n\
{\n\
	_addr = lcd_addr;\n\
	_cols = lcd_cols;\n\
	_rows = lcd_rows;\n\
	_charsize = charsize;\n\
	_backlightval = LCD_BACKLIGHT;\n\
}\n\
\n\
void MyLiquidCrystal_I2C::begin() {\n\
	Wire.begin();\n\
	_displayfunction = LCD_4BITMODE | LCD_1LINE | LCD_5x8DOTS;\n\
\n\
	if (_rows > 1) {\n\
		_displayfunction |= LCD_2LINE;\n\
	}\n\
\n\
	// for some 1 line displays you can select a 10 pixel high font\n\
	if ((_charsize != 0) && (_rows == 1)) {\n\
		_displayfunction |= LCD_5x10DOTS;\n\
	}\n\
\n\
	// SEE PAGE 45/46 FOR INITIALIZATION SPECIFICATION!\n\
	// according to datasheet, we need at least 40ms after power rises above 2.7V\n\
	// before sending commands. Arduino can turn on way befer 4.5V so we'll wait 50\n\
	delay(50); \n\
\n\
	// Now we pull both RS and R/W low to begin commands\n\
	expanderWrite(_backlightval);	// reset expanderand turn backlight off (Bit 8 =1)\n\
	delay(1000);\n\
\n\
	//put the LCD into 4 bit mode\n\
	// this is according to the hitachi HD44780 datasheet\n\
	// figure 24, pg 46\n\
\n\
	// we start in 8bit mode, try to set 4 bit mode\n\
	write4bits(0x03 << 4);\n\
	delayMicroseconds(4500); // wait min 4.1ms\n\
\n\
	// second try\n\
	write4bits(0x03 << 4);\n\
	delayMicroseconds(4500); // wait min 4.1ms\n\
\n\
	// third go!\n\
	write4bits(0x03 << 4); \n\
	delayMicroseconds(150);\n\
\n\
	// finally, set to 4-bit interface\n\
	write4bits(0x02 << 4); \n\
\n\
	// set # lines, font size, etc.\n\
	command(LCD_FUNCTIONSET | _displayfunction);  \n\
\n\
	// turn the display on with no cursor or blinking default\n\
	_displaycontrol = LCD_DISPLAYON | LCD_CURSOROFF | LCD_BLINKOFF;\n\
	display();\n\
\n\
// clear it off\n\
	clear();\n\
\n\
	// Initialize to default text direction (for roman languages)\n\
	_displaymode = LCD_ENTRYLEFT | LCD_ENTRYSHIFTDECREMENT;\n\
\n\
	// set the entry mode\n\
	command(LCD_ENTRYMODESET | _displaymode);\n\
\n\
	home();\n\
}\n\
\n\
/********** high level commands, for the user! */\n\
void MyLiquidCrystal_I2C::clear(){\n\
	command(LCD_CLEARDISPLAY);// clear display, set cursor position to zero\n\
	delayMicroseconds(2000);  // this command takes a long time!\n\
}\n\
\n\
void MyLiquidCrystal_I2C::home(){\n\
	command(LCD_RETURNHOME);  // set cursor position to zero\n\
	delayMicroseconds(2000);  // this command takes a long time!\n\
}\n\
\n\
void MyLiquidCrystal_I2C::setCursor(uint8_t col, uint8_t row){\n\
	int row_offsets[] = { 0x00, 0x40, 0x14, 0x54 };\n\
	if (row > _rows) {\n\
		row = _rows-1;    // we count rows starting w/0\n\
	}\n\
	command(LCD_SETDDRAMADDR | (col + row_offsets[row]));\n\
}\n\
\n\
// Turn the display on/off (quickly)\n\
void MyLiquidCrystal_I2C::noDisplay() {\n\
	_displaycontrol &= ~LCD_DISPLAYON;\n\
	command(LCD_DISPLAYCONTROL | _displaycontrol);\n\
}\n\
void MyLiquidCrystal_I2C::display() {\n\
	_displaycontrol |= LCD_DISPLAYON;\n\
	command(LCD_DISPLAYCONTROL | _displaycontrol);\n\
}\n\
\n\
// Turns the underline cursor on/off\n\
void MyLiquidCrystal_I2C::noCursor() {\n\
	_displaycontrol &= ~LCD_CURSORON;\n\
	command(LCD_DISPLAYCONTROL | _displaycontrol);\n\
}\n\
void MyLiquidCrystal_I2C::cursor() {\n\
	_displaycontrol |= LCD_CURSORON;\n\
	command(LCD_DISPLAYCONTROL | _displaycontrol);\n\
}\n\
\n\
// Turn on and off the blinking cursor\n\
void MyLiquidCrystal_I2C::noBlink() {\n\
	_displaycontrol &= ~LCD_BLINKON;\n\
	command(LCD_DISPLAYCONTROL | _displaycontrol);\n\
}\n\
void MyLiquidCrystal_I2C::blink() {\n\
	_displaycontrol |= LCD_BLINKON;\n\
	command(LCD_DISPLAYCONTROL | _displaycontrol);\n\
}\n\
\n\
// These commands scroll the display without changing the RAM\n\
void MyLiquidCrystal_I2C::scrollDisplayLeft(void) {\n\
	command(LCD_CURSORSHIFT | LCD_DISPLAYMOVE | LCD_MOVELEFT);\n\
}\n\
void MyLiquidCrystal_I2C::scrollDisplayRight(void) {\n\
	command(LCD_CURSORSHIFT | LCD_DISPLAYMOVE | LCD_MOVERIGHT);\n\
}\n\
\n\
// This is for text that flows Left to Right\n\
void MyLiquidCrystal_I2C::leftToRight(void) {\n\
	_displaymode |= LCD_ENTRYLEFT;\n\
	command(LCD_ENTRYMODESET | _displaymode);\n\
}\n\
\n\
// This is for text that flows Right to Left\n\
void MyLiquidCrystal_I2C::rightToLeft(void) {\n\
	_displaymode &= ~LCD_ENTRYLEFT;\n\
	command(LCD_ENTRYMODESET | _displaymode);\n\
}\n\
\n\
// This will 'right justify' text from the cursor\n\
void MyLiquidCrystal_I2C::autoscroll(void) {\n\
	_displaymode |= LCD_ENTRYSHIFTINCREMENT;\n\
	command(LCD_ENTRYMODESET | _displaymode);\n\
}\n\
\n\
// This will 'left justify' text from the cursor\n\
void MyLiquidCrystal_I2C::noAutoscroll(void) {\n\
	_displaymode &= ~LCD_ENTRYSHIFTINCREMENT;\n\
	command(LCD_ENTRYMODESET | _displaymode);\n\
}\n\
\n\
// Allows us to fill the first 8 CGRAM locations\n\
// with custom characters\n\
void MyLiquidCrystal_I2C::createChar(uint8_t location, uint8_t charmap[]) {\n\
	location &= 0x7; // we only have 8 locations 0-7\n\
	command(LCD_SETCGRAMADDR | (location << 3));\n\
	for (int i=0; i<8; i++) {\n\
		write(charmap[i]);\n\
	}\n\
}\n\
\n\
// Turn the (optional) backlight off/on\n\
void MyLiquidCrystal_I2C::noBacklight(void) {\n\
	_backlightval=LCD_NOBACKLIGHT;\n\
	expanderWrite(0);\n\
}\n\
\n\
void MyLiquidCrystal_I2C::backlight(void) {\n\
	_backlightval=LCD_BACKLIGHT;\n\
	expanderWrite(0);\n\
}\n\
\n\
/*********** mid level commands, for sending data/cmds */\n\
\n\
inline void MyLiquidCrystal_I2C::command(uint8_t value) {\n\
	send(value, 0);\n\
}\n\
\n\
inline size_t MyLiquidCrystal_I2C::write(uint8_t value) {\n\
	send(value, Rs);\n\
}\n\
\n\
\n\
/************ low level data pushing commands **********/\n\
\n\
// write either command or data\n\
void MyLiquidCrystal_I2C::send(uint8_t value, uint8_t mode) {\n\
	uint8_t highnib=value&0xf0;\n\
	uint8_t lownib=(value<<4)&0xf0;\n\
	write4bits((highnib)|mode);\n\
	write4bits((lownib)|mode); \n\
}\n\
\n\
void MyLiquidCrystal_I2C::write4bits(uint8_t value) {\n\
	expanderWrite(value);\n\
	pulseEnable(value);\n\
}\n\
\n\
void MyLiquidCrystal_I2C::expanderWrite(uint8_t _data){\n\
	Wire.beginTransmission(_addr);\n\
	Wire.write((int)(_data) | _backlightval);\n\
	Wire.endTransmission();   \n\
}\n\
\n\
void MyLiquidCrystal_I2C::pulseEnable(uint8_t _data){\n\
	expanderWrite(_data | En);	// En high\n\
	delayMicroseconds(1);		// enable pulse must be >450ns\n\
	\n\
	expanderWrite(_data & ~En);	// En low\n\
	delayMicroseconds(50);		// commands need > 37us to settle\n\
}\n\
\n\
void MyLiquidCrystal_I2C::load_custom_character(uint8_t char_num, uint8_t *rows){\n\
	createChar(char_num, rows);\n\
}\n\
\n\
void MyLiquidCrystal_I2C::setBacklight(uint8_t new_val){\n\
	if (new_val) {\n\
		backlight();		// turn backlight on\n\
	} else {\n\
		noBacklight();		// turn backlight off\n\
	}\n\
}\n\
\n\
void MyLiquidCrystal_I2C::printstr(const char c[]){\n\
	//This function is not identical to the function used for real I2C displays\n\
	//it's here so the user sketch doesn't have to be changed \n\
	print(c);\n\
}\n";

//---------------------------------------------------



myLibrary_ultrasonic = "class Ultrasonic{\n\
  public:\n\
    Ultrasonic(int TP, int EP);\n\
    long Timing();\n\
    long Ranging(int sys);\n\
\n\
    private:\n\
    int Trig_pin;\n\
    int Echo_pin;\n\
    long  duration, distance_cm, distance_inc;\n\
};\n\
\n\
Ultrasonic::Ultrasonic(int TP, int EP){\n\
   pinMode(TP,OUTPUT);\n\
   pinMode(EP,INPUT);\n\
   Trig_pin=TP;\n\
   Echo_pin=EP;\n\
   duration = 0;\n\
}\n\
long Ultrasonic::Timing(){\n\
  pinMode(Trig_pin,OUTPUT);\n\
  digitalWrite(Trig_pin, LOW);\n\
  delayMicroseconds(2);\n\
  digitalWrite(Trig_pin, HIGH);\n\
  delayMicroseconds(10);\n\
  digitalWrite(Trig_pin, LOW);\n\
  pinMode(Echo_pin,INPUT);\n\
  duration = pulseIn(Echo_pin,HIGH);\n\
  return duration;\n\
}\n\
\n\
long Ultrasonic::Ranging(int sys){\n\
  Timing();\n\
  distance_cm = duration /29 / 2;\n\
  distance_inc = duration / 74 / 2;\n\
  if (sys)\n\
    return distance_cm;\n\
  else\n\
    return distance_inc;\n\
}";

myAutoduinoLibrary_tone = "void NewTone(uint8_t pin, unsigned long frequency, unsigned long length = 0);\n\
void noNewTone(uint8_t pin = 0);\n\
unsigned long _nt_time;       // Time note should end.\n\
uint8_t _pinMask = 0;         // Pin bitmask.\n\
volatile uint8_t *_pinOutput; // Output port register\n\
\n\
void NewTone(uint8_t pin, unsigned long frequency, unsigned long length) {\n\
  uint8_t prescaler = _BV(CS10);                 // Try using prescaler 1 first.\n\
  unsigned long top = F_CPU / frequency / 4 - 1; // Calculate the top.\n\
  if (top > 65535) {                             // If not in the range for prescaler 1, use prescaler 256 (61 Hz and lower @ 16 MHz).\n\
    prescaler = _BV(CS12);                       // Set the 256 prescaler bit.\n\
    top = top / 256 - 1;                         // Calculate the top using prescaler 256.\n\
  }\n\
\n\
  if (length > 0) _nt_time = millis() + length; else _nt_time = 0xFFFFFFFF; // Set when the note should end, or play forever.\n\
\n\
  if (_pinMask == 0) {\n\
    _pinMask = digitalPinToBitMask(pin);                    // Get the port register bitmask for the pin.\n\
    _pinOutput = portOutputRegister(digitalPinToPort(pin)); // Get the output port register for the pin.\n\
    uint8_t *_pinMode = (uint8_t *) portModeRegister(digitalPinToPort(pin)); // Get the port mode register for the pin.\n\
    *_pinMode |= _pinMask; // Set the pin to Output mode.\n\
  }\n\
\n\
  ICR1    = top;                     // Set the top.\n\
  if (TCNT1 > top) TCNT1 = top;      // Counter over the top, put within range.\n\
  TCCR1B  = _BV(WGM13)  | prescaler; // Set PWM, phase and frequency corrected (ICR1) and prescaler.\n\
  TCCR1A  = _BV(COM1B0);\n\
  TIMSK1 |= _BV(OCIE1A);             // Activate the timer interrupt.\n\
}\n\
\n\
void noNewTone(uint8_t pin) {\n\
  TIMSK1 &= ~_BV(OCIE1A);   // Remove the timer interrupt.\n\
  TCCR1B  = _BV(CS11);      // Default clock prescaler of 8.\n\
  TCCR1A  = _BV(WGM10);     // Set to defaults so PWM can work like normal (PWM, phase corrected, 8bit).\n\
  *_pinOutput &= ~_pinMask; // Set pin to LOW.\n\
  _pinMask = 0; // Flag so we know note is no longer playing.\n\
}\n\
\n\
ISR(TIMER1_COMPA_vect) { // Timer interrupt vector.\n\
  if (millis() >= _nt_time) noNewTone(); // Check to see if it's time for the note to end.\n\
  *_pinOutput ^= _pinMask; // Toggle the pin state.\n\
}  \n\
";

//---------------------------------------------------

var get_next_pin = function(dropdown_pin) {
  var pos = -1;
    //check if NextPIN in bound
  if(parseInt(dropdown_pin)){
    var NextPIN = parseInt(dropdown_pin)+1;
    pos = profile.defaultBoard.digital.indexOf(String(NextPIN));
  } else {
    var NextPIN = 'A'+(parseInt(dropdown_pin.slice(1,dropdown_pin.length))+1);
    pos = profile.defaultBoard.analog.indexOf(String(NextPIN));
  }
  if(pos < 0){
//    alert("Grove Sensor needs PIN#+1 port, current setting is out of bound.");
    return null;
  } else {
    return NextPIN;
  }
};


function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16);};
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16);};
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16);};
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h;};

function setAutoduinoOutput(pin, stat) {
    Blockly.Arduino.includes_['wire'] = "#include <Wire.h>";
    Blockly.Arduino.includes_['stdio'] = "#include <stdio.h>";
    Blockly.Arduino.includes_['inttypes'] = "#include <inttypes.h>";
    Blockly.Arduino.includes_['arduino'] = "#include <Arduino.h>";

    Blockly.Arduino.definitions_['library_autoduino_gpio_expander'] = myAutoduinoLibrary_gpio_expander;
    Blockly.Arduino.definitions_['define_autoduino_gpio_expander3'] = 'pca9555 mcp;';
    Blockly.Arduino.definitions_['define_autoduino_gpio_expander4'] = 'byte GPPU = 0x02; //Output Port Registers (0x02..0x03)';

    Blockly.Arduino.definitions_['setup_autoduino_mcp_a1_begin_init_port_direction'] = "volatile byte directionPort0 = 0x1F; // IN7 and IN8 are inputs\n"+
    "volatile byte directionPort1 = 0x00;\n" +
    "volatile uint16_t pca9555Inputs = 0; // state of the PCA9555 input register\n" +
    "volatile word valuePort = 0x0000;\n";
    
    var code = "";
    
    switch(pin) {
        case "3":
        case "4":
        case "7":
        case "8":
        case 'A0':
        case 'A1':
        case 'A2':
        case 'A3':
            Blockly.Arduino.setups_['setup_autoduino_led_'+pin] = 'pinMode('+pin+', OUTPUT);';
//            code = code + 'int tmp = '+stat+';\n';
//            code = code + 'digitalWrite('+pin+',tmp);\n';
            code = code + 'digitalWrite('+pin+','+stat+');\n';
            break;
        case '33':
        case '34':
        case '35':
        case '36':
        case '37':
        case '40':
        case '41':
        case '42':
        case '43':
        case '44':
        case '45':
        case '46':
        case '47':
            Blockly.Arduino.setups_['define_autoduino_gpio_instance_0'] = 'mcp.postSetup(0x20); // PCA9555 instance, A2 A1 A0 are set to 000';
            Blockly.Arduino.setups_['setup_autoduino_mcp_begin'] = 'mcp.begin();';
            if (pin < 38) {
                Blockly.Arduino.setups_['setup_autoduino_mcp_led_1_'+pin] = "directionPort0 = directionPort0 & (~(1<<("+ (pin-30) +")));\n";
            }
            else if (pin < 48) {
                Blockly.Arduino.setups_['setup_autoduino_mcp_led_1_'+pin] = "directionPort1 = directionPort1 & (~(1<<("+ (pin-38) +")));\n";
            }
            Blockly.Arduino.setups_['setup_autoduino_mcp_led_2_'+pin] = "mcp.gpioPinMode(directionPort1<<8 | directionPort0);\n";
            
            code = code + 'if('+stat+')\n';
            code = code + "    valuePort = valuePort | 1<<("+ (pin-30) +"); // HIGH\n";
            code = code + 'else\n';
            code = code + "    valuePort = valuePort & (~(1<<("+ (pin-30) +"))); // LOW\n";
            code = code + "mcp.gpioRegisterWriteWord(GPPU, valuePort);\n";
            break;
        default:
            code = code + "// ERROR in  pin number ["+pin+"]\n";
    };
  return code;
};


function getAutoduinoInput(pin) {
    Blockly.Arduino.includes_['wire'] = "#include <Wire.h>";
    Blockly.Arduino.includes_['stdio'] = "#include <stdio.h>";
    Blockly.Arduino.includes_['inttypes'] = "#include <inttypes.h>";
    Blockly.Arduino.includes_['arduino'] = "#include <Arduino.h>";

    Blockly.Arduino.definitions_['library_autoduino_gpio_expander'] = myAutoduinoLibrary_gpio_expander;
    Blockly.Arduino.definitions_['define_autoduino_gpio_expander3'] = 'pca9555 mcp;';
    Blockly.Arduino.definitions_['define_autoduino_gpio_expander4'] = 'byte GPPU = 0x02; //Output Port Registers (0x02..0x03)';

    Blockly.Arduino.definitions_['setup_autoduino_mcp_a1_begin_init_port_direction'] = "volatile byte directionPort0 = 0x1F; // IN7 and IN8 are inputs\n"+
    "volatile byte directionPort1 = 0x00;\n" +
    "volatile uint16_t pca9555Inputs = 0; // state of the PCA9555 input register\n" +
    "volatile word valuePort = 0x0000;\n";
    Blockly.Arduino.definitions_['setup_autoduino_mcp_a3_begin_init_port_read'] = "int getAutoduinoInput(int pin) {\n" + 
    "  pca9555Inputs = mcp.readGpioPort();\n" +
    "  int w = (pca9555Inputs>>(pin-30)) & 0x0001;\n" +
    "  return w;\n" +
    "}\n";
    
    var code = "";
    
    switch(pin) {
        case "3":
        case "4":
        case "7":
        case "8":
        case 'A0':
        case 'A1':
        case 'A2':
        case 'A3':
            Blockly.Arduino.setups_['setup_autoduino_led_'+pin] = 'pinMode('+pin+', INPUT);';
            code = 'digitalRead('+pin+')';
            break;
        case '30':
        case '31':
        case '32':
        case '33':
        case '34':
        case '40':
        case '41':
        case '42':
        case '43':
        case '44':
        case '45':
        case '46':
        case '47':
            Blockly.Arduino.setups_['define_autoduino_gpio_instance_0'] = 'mcp.postSetup(0x20); // PCA9555 instance, A2 A1 A0 are set to 000';
            Blockly.Arduino.setups_['setup_autoduino_mcp_begin'] = 'mcp.begin();';
            if (pin < 38) {
                Blockly.Arduino.setups_['setup_autoduino_mcp_push_1_'+pin] = "directionPort0 = directionPort0  | (1<<"+(pin-30)+");";
            }
            else if (pin < 48) {
                Blockly.Arduino.setups_['setup_autoduino_mcp_push_1_'+pin] = "directionPort1 = directionPort1  | (1<<"+(pin-38)+");";
            }
            Blockly.Arduino.setups_['setup_autoduino_mcp_push_2_'+pin] = "mcp.gpioPinMode(directionPort1<<8 | directionPort0);";

            code = "getAutoduinoInput("+pin+")";
            break;
        default:
            code = "// ERROR in  pin number ["+pin+"]";
    };
  return code;
};


function getInputWord() {
    Blockly.Arduino.includes_['wire'] = "#include <Wire.h>";
    Blockly.Arduino.includes_['stdio'] = "#include <stdio.h>";
    Blockly.Arduino.includes_['inttypes'] = "#include <inttypes.h>";
    Blockly.Arduino.includes_['arduino'] = "#include <Arduino.h>";

    Blockly.Arduino.definitions_['library_autoduino_gpio_expander'] = myAutoduinoLibrary_gpio_expander;
    Blockly.Arduino.definitions_['define_autoduino_gpio_expander3'] = 'pca9555 mcp;';
    Blockly.Arduino.definitions_['define_autoduino_gpio_expander4'] = 'byte GPPU = 0x02; //Output Port Registers (0x02..0x03)';

    var code = "";
    
    Blockly.Arduino.setups_['define_autoduino_gpio_instance_0'] = 'mcp.postSetup(0x20); // PCA9555 instance, A2 A1 A0 are set to 000';
    Blockly.Arduino.setups_['setup_autoduino_mcp_begin'] = 'mcp.begin();';
    code = "mcp.readGpioPort()";
  return code;
};


/** ****************** CAPTEURS ******************************/

Blockly.Arduino.autoduino_button = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var code =getAutoduinoInput(dropdown_pin);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.autoduino_rotary_angle = function() {

    
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] = "int Autoduino_EncoderPosition(int encoderInput, int* previousEncoderInput, int* encoderPosition);\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += " \n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "int Autoduino_EncoderPosition(int encoderInput, int* previousEncoderInput, int* encoderPosition) {\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += " \n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "  encoderInput = encoderInput & 0x0003; // keep only the 2 LSBs\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += " \n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "  if ((encoderInput xor *previousEncoderInput) != 0) { // position of the encoder has changed\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "    switch(*previousEncoderInput){\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "      case 0 :\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          if (encoderInput == 2) *encoderPosition = *encoderPosition - 1;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          else if (encoderInput == 1) *encoderPosition = *encoderPosition + 1;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          break;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "      case 1 :\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          if (encoderInput == 0) *encoderPosition = *encoderPosition -1;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          else if (encoderInput == 3) *encoderPosition = *encoderPosition + 1;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          break;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "      case 3 :\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          if (encoderInput == 1) *encoderPosition = *encoderPosition - 1;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          else if (encoderInput == 2) *encoderPosition = *encoderPosition + 1;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          break;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "      case 2 :\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          if (encoderInput == 3) *encoderPosition = *encoderPosition - 1;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          else if (encoderInput == 0) *encoderPosition = *encoderPosition +1;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "          break;\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "      }\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "   }\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "   \n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "   *previousEncoderInput = encoderInput; // memorize the previous state of the encoder inputs\n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "   return(*encoderPosition); \n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "} \n";
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += "\n";

    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += 'int autoduino_previousEncoderInput = 0;\n';
    Blockly.Arduino.definitions_['definition_autoduino_encoder'] += 'int autoduino_encoderPosition = 0;\n';

    Blockly.Arduino.setups_['setup_autoduino_encoder'] = getAutoduinoInput('30')+';\n';
    Blockly.Arduino.setups_['setup_autoduino_encoder'] += getAutoduinoInput('31')+';\n';
    
    
    var code = 'Autoduino_EncoderPosition('+getInputWord()+', &autoduino_previousEncoderInput, &autoduino_encoderPosition)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_rotary_push = function() {
    var code ='(1-'+ getAutoduinoInput("32")+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_potentiometer = function() { // TO BE UPDATED
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  Blockly.Arduino.setups_['setup_autoduino_potentiometer_sensor_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_dht_read = function() { // TO BE UPDATED
    var sensor = this.getFieldValue('SENSOR');
    var pin = this.getFieldValue('PIN');
    var type = this.getFieldValue('TYPE');

    var code = '';
    switch(type){
        case 'h':
    //      code += 'floatToStr(dht_' + pin + '_' + sensor + '.readHumidity()) + "%"';
        code += '(int)(dht_' + pin + '_' + sensor + '.readHumidity())';
        break;
        case 'C':
    //        code += 'floatToStr(dht_' + pin + '_' + sensor + '.readTemperature()) + "C"';
            code += '(int)(dht_' + pin + '_' + sensor + '.readTemperature())';
        break;
        case 'F':
    //        code += 'floatToStr(dht_' + pin + '_' + sensor + '.readTemperature(true)) + "F"';
            code += '(int)(dht_' + pin + '_' + sensor + '.readTemperature(true))';
        break;
    };

    Blockly.Arduino.definitions_['define_autoduino_dht_'+ pin + '_' + sensor] = '#include <DHT.h>\n'
    + 'DHT dht_' + pin + '_' + sensor + '(' + pin + ',' + sensor + ');\n';

    Blockly.Arduino.setups_['setup_autoduino_dht_' + pin + '_' + sensor] = 'dht_' + pin + '_' + sensor + '.begin();\n';
    /*
    Blockly.Arduino.definitions_['define_dht_floatToStr'] = 'String floatToStr(float val){\n'
    + '  int buf = (int)val;\n'
    + '  String str = String(buf);\n'
    + '  str += ".";\n'
    + '  str += String((int)(val*10)-buf*10);\n'
    + '  return str;\n'
    + '}\n';
    */
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.autoduino_temperature_sensor = function() { // TO BE UPDATED
  var dropdown_pin = this.getFieldValue('PIN');
  /*
  a=analogRead(0);
  resistance=(float)(1023-a)*10000/a;
  temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  */
  var code = 'round( 1/(log((float)(1023-analogRead('+dropdown_pin+'))*10000/analogRead('+dropdown_pin+')/10000)/3975+1/298.15)-273.15'+')';
  Blockly.Arduino.setups_['setup_autoduino_temperature_sensor_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.autoduino_moisture_sensor = function() { // TO BE UPDATED
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  Blockly.Arduino.setups_['setup_autoduino_moisture_sensor_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_tilt_switch = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var code =getAutoduinoInput(dropdown_pin);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_ils_switch = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code =getAutoduinoInput(dropdown_pin);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.autoduino_pir_motion_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code =getAutoduinoInput(dropdown_pin);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_ultrasonic_ranger = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_unit = this.getFieldValue('UNIT');
  Blockly.Arduino.definitions_['define_autoduino_ultrasonic'] = myLibrary_ultrasonic;
  Blockly.Arduino.definitions_['var_autoduino_ultrasonic'+dropdown_pin] = 'Ultrasonic ultrasonic_'+dropdown_pin+'('+dropdown_pin+', '+dropdown_pin+');\n';
  var code = "";
  if(dropdown_unit==="cm"){
    code = 'ultrasonic_'+dropdown_pin+'.Ranging(1)';
  } 
  else {
    code = 'ultrasonic_'+dropdown_pin+'.Ranging(0)';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_LDR_sensor = function() { // TO BE UPDATED
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  Blockly.Arduino.setups_['setup_autoduino_LDR_sensor_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_line_finder = function() {
  var dropdown_pin1 = this.getFieldValue('PIN');
  var code =getAutoduinoInput(dropdown_pin);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_ir_switch = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code =getAutoduinoInput(dropdown_pin);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_digital_temperature_sensor = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_index = this.getFieldValue('INDEX');
    var dropdown_resolution = this.getFieldValue('RESOLUTION');

    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] = '#include <OneWire.h>\n'; 
    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += '#include <DallasTemperature.h>\n'; 

    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += '\n';
    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += 'float getAutoduinoDigitalTemperature (DallasTemperature* sensor, int index);\n';
    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += '\n';
    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += 'float getAutoduinoDigitalTemperature (DallasTemperature* sensor, int index)\n';
    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += '  {\n';
    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += '     sensor->setResolution('+dropdown_resolution+');\n';
    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += '     sensor->requestTemperatures();\n';
    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += '     return( sensor->getTempCByIndex(index));\n';
    Blockly.Arduino.definitions_['define_autoduino_DS18x20'] += '  }\n';
  
    Blockly.Arduino.definitions_['define_autoduino_DS18x20_'+dropdown_pin] = 'OneWire  ds_'+dropdown_pin+'('+dropdown_pin+');  // on pin '+dropdown_pin+' (a 4.7K resistor is necessary)\n'; 
    Blockly.Arduino.definitions_['define_autoduino_DS18x20_'+dropdown_pin] += 'DallasTemperature sensor_'+dropdown_pin+'(&ds_'+dropdown_pin+');\n'; 
    
    Blockly.Arduino.setups_['define_autoduino_DS18x20_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);\n';
    Blockly.Arduino.setups_['define_autoduino_DS18x20_'+dropdown_pin] += 'sensor_'+dropdown_pin+'.begin();\n'; 

    var code = 'getAutoduinoDigitalTemperature( &sensor_'+dropdown_pin+', '+dropdown_index+')'; // Why "byIndex"? You can have more than one IC on the same bus. 0 refers to the first IC on the wire
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/** ****************** ACTIONNEURS ******************************/

Blockly.Arduino.autoduino_led = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Output = " + dropdown_stat + "\n";
    code = code + setAutoduinoOutput(dropdown_pin, dropdown_stat);
    return code;
};


Blockly.Arduino.autoduino_led_eclairage = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Output = " + dropdown_stat + "\n";
    code = code + setAutoduinoOutput(dropdown_pin, dropdown_stat);
    return code;
};


Blockly.Arduino.autoduino_IR_led = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Output = " + dropdown_stat + "\n";
    code = code + setAutoduinoOutput(dropdown_pin, dropdown_stat);
    return code;
};


Blockly.Arduino.autoduino_output = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Output = " + dropdown_stat + "\n";
    code = code + setAutoduinoOutput(dropdown_pin, dropdown_stat);
    return code;
};


Blockly.Arduino.autoduino_rgb_led = function() {
    var dropdown_stat_C1 = Blockly.Arduino.valueToCode(this, 'C1', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat_C2 = Blockly.Arduino.valueToCode(this, 'C2', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat_C3 = Blockly.Arduino.valueToCode(this, 'C3', Blockly.Arduino.ORDER_ATOMIC);
    var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
    var numpixels = this.getFieldValue('Number_of_Pixels');
    var pin_ledrgb = this.getFieldValue('PIN');
    
    Blockly.Arduino.definitions_['define_autoduino_WS2812B'] = '#include <Adafruit_NeoPixel.h>\n'; 
    Blockly.Arduino.definitions_['define_autoduino_WS2812B_'+pin_ledrgb] = 'Adafruit_NeoPixel pixels_'+pin_ledrgb+' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n'; 
    Blockly.Arduino.setups_['setup_autoduino_WS2812B_0_'+pin_ledrgb] = 'pinMode('+pin_ledrgb+', OUTPUT);';
    Blockly.Arduino.setups_['setup_autoduino_WS2812B_1_'+pin_ledrgb] = 'pixels_'+pin_ledrgb+'.begin();\n';
  
    var code = 'pixels_'+pin_ledrgb+'.setPixelColor('+(pixel_number-1)+', pixels_'+pin_ledrgb+'.Color('+dropdown_stat_C1+','+dropdown_stat_C2+','+dropdown_stat_C3+'));\n';
    code    += 'pixels_'+pin_ledrgb+'.show();\n';
    return code;
};



Blockly.Arduino.autoduino_rgb_led2 = function() {
    var colour_name = this.getFieldValue('C');
    var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
    var numpixels = this.getFieldValue('Number_of_Pixels');
    var pin_ledrgb = this.getFieldValue('PIN');
    
    Blockly.Arduino.definitions_['define_autoduino_WS2812B'] = '#include <Adafruit_NeoPixel.h>\n'; 
    Blockly.Arduino.definitions_['define_autoduino_WS2812B_'+pin_ledrgb] = 'Adafruit_NeoPixel pixels_'+pin_ledrgb+' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n'; 
    Blockly.Arduino.setups_['setup_autoduino_WS2812B_0_'+pin_ledrgb] = 'pinMode('+pin_ledrgb+', OUTPUT);';
    Blockly.Arduino.setups_['setup_autoduino_WS2812B_1_'+pin_ledrgb] = 'pixels_'+pin_ledrgb+'.begin();\n';
  
    var code = 'pixels_'+pin_ledrgb+'.setPixelColor('+(pixel_number-1)+', pixels_'+pin_ledrgb+'.Color('+hexToR(colour_name) +','+hexToG(colour_name) +','+hexToB(colour_name) +'));\n';
    code    += 'pixels_'+pin_ledrgb+'.show();\n';
    return code;
};



Blockly.Arduino.autoduino_piezo_buzzer = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var frequency = Blockly.Arduino.valueToCode(this, 'Frequency', Blockly.Arduino.ORDER_ATOMIC);
    var duration = Blockly.Arduino.valueToCode(this, 'Duration', Blockly.Arduino.ORDER_ATOMIC);
    
    Blockly.Arduino.definitions_['define_autoduino_piezo_buzzer'] = myAutoduinoLibrary_tone; 

    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Buzzer output. Frequency = " + frequency + " Duration: "+duration+"\n";
    Blockly.Arduino.setups_['setup_autoduino_buzzer_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
//    code = code + "tone("+dropdown_pin+", "+frequency+", "+duration+");";
    code = code + "NewTone("+dropdown_pin+", "+frequency+", "+duration+");";
return code;
};

Blockly.Arduino.autoduino_relay = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Output = " + dropdown_stat + "\n";
    code = code + setAutoduinoOutput(dropdown_pin, dropdown_stat);
    return code;
};


Blockly.Arduino.autoduino_motor = function() {
  var dropdown_pin1 = this.getFieldValue('PIN1');
  var dropdown_pin2 = this.getFieldValue('PIN2');
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var code = "";

  if(dropdown_direction==="forward"){
    code = code + setAutoduinoOutput(dropdown_pin1, "1");
    code = code + setAutoduinoOutput(dropdown_pin2, "0");
  } else if (dropdown_direction==="right") {
    code = code + setAutoduinoOutput(dropdown_pin1, "0");
    code = code + setAutoduinoOutput(dropdown_pin2, "1");
  } else if (dropdown_direction==="left") {
    code = code + setAutoduinoOutput(dropdown_pin1, "1");
    code = code + setAutoduinoOutput(dropdown_pin2, "0");
  } else if (dropdown_direction==="backward"){
    code = code + setAutoduinoOutput(dropdown_pin1, "0");
    code = code + setAutoduinoOutput(dropdown_pin2, "1");
  } else if (dropdown_direction==="stop"){
    code = code + setAutoduinoOutput(dropdown_pin1, "0");
    code = code + setAutoduinoOutput(dropdown_pin2, "0");
  }
   
  return code;
};


Blockly.Arduino.autoduino_dual_motor = function() {
  var dropdown_pin1 = this.getFieldValue('PIN1');
  var dropdown_pin2 = this.getFieldValue('PIN2');
  var dropdown_pin3 = this.getFieldValue('PIN3');
  var dropdown_pin4 = this.getFieldValue('PIN4');
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var code = "";

  if(dropdown_direction==="forward"){
    code = code + setAutoduinoOutput(dropdown_pin1, "1");
    code = code + setAutoduinoOutput(dropdown_pin2, "0");
    code = code + setAutoduinoOutput(dropdown_pin3, "0");
    code = code + setAutoduinoOutput(dropdown_pin4, "1");
  } else if (dropdown_direction==="right") {
    code = code + setAutoduinoOutput(dropdown_pin1, "0");
    code = code + setAutoduinoOutput(dropdown_pin2, "1");
    code = code + setAutoduinoOutput(dropdown_pin3, "0");
    code = code + setAutoduinoOutput(dropdown_pin4, "1");
  } else if (dropdown_direction==="left") {
    code = code + setAutoduinoOutput(dropdown_pin1, "1");
    code = code + setAutoduinoOutput(dropdown_pin2, "0");
    code = code + setAutoduinoOutput(dropdown_pin3, "1");
    code = code + setAutoduinoOutput(dropdown_pin4, "0");
  } else if (dropdown_direction==="backward"){
    code = code + setAutoduinoOutput(dropdown_pin1, "0");
    code = code + setAutoduinoOutput(dropdown_pin2, "1");
    code = code + setAutoduinoOutput(dropdown_pin3, "1");
    code = code + setAutoduinoOutput(dropdown_pin4, "0");
  } else if (dropdown_direction==="stop"){
    code = code + setAutoduinoOutput(dropdown_pin1, "0");
    code = code + setAutoduinoOutput(dropdown_pin2, "0");
    code = code + setAutoduinoOutput(dropdown_pin3, "0");
    code = code + setAutoduinoOutput(dropdown_pin4, "0");
  }
   
  return code;
};


Blockly.Arduino.autoduino_motor_builtin = function() {
  //#define Motor1_1  34 // 0x10 // 34
  //#define Motor1_2  35 // 0x20 // 35
  //#define Motor2_1  36 // 0x40 // 36
  //#define Motor2_2  37 // 0x80 // 37
  //#define Motor1_EN  5
  //#define Motor2_EN  6
    
  var dropdown_pin1 = "34";
  var dropdown_pin2 = "35";
  var dropdown_pin3 = "36";
  var dropdown_pin4 = "37";
  var Motor1_EN = "5";
  var Motor2_EN = "6";
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = "";
  if(dropdown_direction==="forward"){
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);\n";
    code = code + setAutoduinoOutput(dropdown_pin1, "1");
    code = code + setAutoduinoOutput(dropdown_pin2, "0");
    code = code + setAutoduinoOutput(dropdown_pin3, "0");
    code = code + setAutoduinoOutput(dropdown_pin4, "1");
    code = code + "analogWrite("+Motor1_EN+", "+speed+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+speed+");\n";
  } else if (dropdown_direction==="right") {
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);";
    code = code + setAutoduinoOutput(dropdown_pin1, "0");
    code = code + setAutoduinoOutput(dropdown_pin2, "1");
    code = code + setAutoduinoOutput(dropdown_pin3, "0");
    code = code + setAutoduinoOutput(dropdown_pin4, "1");
    code = code + "analogWrite("+Motor1_EN+", "+speed+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+speed+");\n";
  } else if (dropdown_direction==="left") {
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);\n";
    code = code + setAutoduinoOutput(dropdown_pin1, "1");
    code = code + setAutoduinoOutput(dropdown_pin2, "0");
    code = code + setAutoduinoOutput(dropdown_pin3, "1");
    code = code + setAutoduinoOutput(dropdown_pin4, "0");
    code = code + "analogWrite("+Motor1_EN+", "+speed+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+speed+");\n";
  } else if (dropdown_direction==="backward"){
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);\n";
    code = code + setAutoduinoOutput(dropdown_pin1, "0");
    code = code + setAutoduinoOutput(dropdown_pin2, "1");
    code = code + setAutoduinoOutput(dropdown_pin3, "1");
    code = code + setAutoduinoOutput(dropdown_pin4, "0");
    code = code + "analogWrite("+Motor1_EN+", "+speed+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+speed+");\n";
  } else if (dropdown_direction==="stop"){
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + setAutoduinoOutput(dropdown_pin1, "0");
    code = code + setAutoduinoOutput(dropdown_pin2, "0");
    code = code + setAutoduinoOutput(dropdown_pin3, "0");
    code = code + setAutoduinoOutput(dropdown_pin4, "0");
  }
  return code;
};



/** ****************** LCD ******************************/

Blockly.Arduino.autoduino_lcdinit = function() {
  var dropdown_I2C_adress = this.getTitleValue('I2C_adress');
  var dropdown_nbcol = this.getTitleValue('nbcol');
  var dropdown_nblig = this.getTitleValue('nblig');
  var dropdown_cursor = this.getTitleValue('cursor');
  var dropdown_blink = this.getTitleValue('blink');
  var dropdown_backlight = this.getTitleValue('backlight');

    Blockly.Arduino.includes_['inttypes'] = "#include <inttypes.h>";
    Blockly.Arduino.includes_['print'] = "#include <Print.h>";
    Blockly.Arduino.includes_['wire'] = "#include <Wire.h>";
    Blockly.Arduino.includes_['arduino'] = "#include <Arduino.h>";

    
  Blockly.Arduino.definitions_['library_autoduino_lcd'] = myAutoduinoLibrary_lcd;
  Blockly.Arduino.definitions_['var_autoduino_lcd'] = 'MyLiquidCrystal_I2C lcd('+dropdown_I2C_adress+','+dropdown_nbcol+','+dropdown_nblig+');\n';
  var mysetup='lcd.begin();\n';
  if (dropdown_backlight=="TRUE")
  {
    mysetup+='lcd.backlight();\n';
  } else
  {
    mysetup+='lcd.noBacklight();\n';
  }
  if (dropdown_cursor=="TRUE")
  {
    mysetup+='lcd.cursor();\n';
  } else
  {
    mysetup+='lcd.noCursor();\n';
  }
  if (dropdown_blink=="TRUE")
  {
    mysetup+='lcd.blink();\n';
  } else
  {
    mysetup+='lcd.noBlink();\n';
  }
  
  mysetup+='lcd.clear();\n';
  //  lcd.noBacklight();
  mysetup+='lcd.home();\n';
  //-------- Write characters on the display ------------------
  // NOTE: Cursor Position: Lines and Characters start at 0  
  mysetup+='lcd.setCursor(3,0); //Start at character 4 on line 0\n';
  mysetup+='lcd.print("Hello, world!");\n';
  mysetup+='lcd.setCursor(3,1);\n';
  mysetup+='lcd.print("AUTODUINO");\n';
  //mysetup+='lcd.setCursor(0,2);\n';
  //  lcd.print("20 by 4 Line Display");
  mysetup+='lcd.setCursor(3,3);\n';
  mysetup+='lcd.print("(C) NBRemond");\n';
  mysetup+='lcd.home();\n';
  
  Blockly.Arduino.setups_['setup_autoduino_lcd'] = mysetup;
  var code="";
  return code;
};

Blockly.Arduino.autoduino_lcdwrite = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var dropdown_col = Blockly.Arduino.valueToCode(this, 'COL', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_lig = Blockly.Arduino.valueToCode(this, 'LIG', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'lcd.setCursor('+dropdown_col+','+dropdown_lig+');\n'+
  'lcd.print('+text+');\n';
  return code;
};


Blockly.Arduino.autoduino_lcdprint = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_col = Blockly.Arduino.valueToCode(this, 'COL', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_lig = Blockly.Arduino.valueToCode(this, 'LIG', Blockly.Arduino.ORDER_ATOMIC);  
  var code = 'lcd.setCursor('+dropdown_col+','+dropdown_lig+');\n'+
  'lcd.print('+text+');\n';
  return code;
};

Blockly.Arduino.autoduino_lcdspecial = function() {
  var dropdown_special = this.getTitleValue('special');
  var code="lcd."+dropdown_special+"();\n";
  return code;
};

Blockly.Arduino.autoduino_lcdclear = function() {
  var code = 'lcd.clear();\n';
  return code;
};

/** ****************** COMMUNICATION ******************************/

Blockly.Arduino.autoduino_bluetooth_slave = function() { // TO BE UPDATED
  var dropdown_pin = this.getFieldValue('PIN');
  var NextPIN = get_next_pin(dropdown_pin);
  var name = this.getFieldValue('NAME');
//  var pincode = this.getFieldValue('PINCODE');
  var statement_receive = Blockly.Arduino.statementToCode(this, "RCV");
  var statement_send = Blockly.Arduino.statementToCode(this, "SNT");
  /* if(pincode.length != 4){
    alert("pincode length should be 4");
  } */
  Blockly.Arduino.definitions_['define_autoduino_softwareserial'] = '#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['var_autoduino_bluetooth_'+dropdown_pin] = 'SoftwareSerial blueToothSerial_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';

  Blockly.Arduino.setups_['setup_autoduino_bluetooth_'+dropdown_pin] = 'Serial.begin(9600);\n';
  Blockly.Arduino.setups_['setup_autoduino_bluetooth_'+dropdown_pin] += '  pinMode('+dropdown_pin+', INPUT);\n';
  Blockly.Arduino.setups_['setup_autoduino_bluetooth_'+dropdown_pin] += '  pinMode('+NextPIN+', OUTPUT);\n';
  Blockly.Arduino.setups_['setup_autoduino_bluetooth_'+dropdown_pin] += '  setupBlueToothConnection_'+dropdown_pin+'();\n';

  Blockly.Arduino.definitions_['define_autoduino_setupBlueToothConnection_'+dropdown_pin] = 'void setupBlueToothConnection_'+dropdown_pin+'()\n'+
  '{\n'+
  '  blueToothSerial_'+dropdown_pin+'.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STNA='+name+'\\r\\n"); //set the bluetooth name as "'+name+'"\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n'+
  '  Serial.println("The slave bluetooth is inquirable!");\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial_'+dropdown_pin+'.flush();\n'+
  '}\n';
  var code = 'char recvChar_'+dropdown_pin+';\n'+
  'while(1) {\n'+
  '  if(blueToothSerial_'+dropdown_pin+'.available()) {//check if there is any data sent from the remote bluetooth shield\n'+
  '    recvChar_'+dropdown_pin+' = blueToothSerial_'+dropdown_pin+'.read();\n'+
  '    Serial.print(recvChar_'+dropdown_pin+');\n'+
       statement_receive+
  '  }\n'+
  '  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n'+
  '    recvChar_'+dropdown_pin+' = Serial.read();\n'+
  '    blueToothSerial_'+dropdown_pin+'.print(recvChar_'+dropdown_pin+');\n'+
       statement_send+
  '  }\n'+
  '}\n';
  return code;
};


Blockly.Arduino.autoduino_rc = function() { // TO BE UPDATED
  var dropdown_pin = this.getFieldValue('PIN');


  Blockly.Arduino.definitions_['define_autoduino_remote_control'] = '#include <IRremote.h>\n';

  Blockly.Arduino.definitions_['var_autoduino_remote_control_'+dropdown_pin] = 'IRrecv irrecv_'+dropdown_pin+'('+dropdown_pin+');\n';
  Blockly.Arduino.definitions_['var_autoduino_remote_control_result_'+dropdown_pin] = 'decode_results results_'+dropdown_pin+';\n';
  
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] = 'unsigned long IRRequest ()\n';
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] += ' {\n';
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] += '  unsigned long IRResult = 0;\n';
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] += '  if (irrecv_'+dropdown_pin+'.decode(&results_'+dropdown_pin+'))\n';
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] += '     {\n';
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] += '      IRResult = results_'+dropdown_pin+'.value;\n';
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] += '      irrecv_'+dropdown_pin+'.resume();   // Receive the next value\n';
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] += '     }\n';
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] += '   return IRResult;\n';
  Blockly.Arduino.definitions_['setup_autoduino_remote_control_fct_'+dropdown_pin] += '  }\n';
  
  Blockly.Arduino.setups_['setup_autoduino_remote_control_pinmode_'+dropdown_pin] = '  pinMode('+dropdown_pin+', INPUT);\n';
  Blockly.Arduino.setups_['setup_autoduino_remote_control_pinmode_'+dropdown_pin] += '  irrecv_'+dropdown_pin+'.enableIRIn();\n';
  var code = 'IRRequest()'
  
//  var code = "if (irrecv_"+dropdown_pin+".decode(&results))";
//  code += "  {";
//  code += "   Serial.println(results_'+dropdown_pin+'.value, DEC); // Print the Serial 'results.value'";
//  code += "   irrecv_"+dropdown_pin+".resume();   // Receive the next value";
//  code += "  } ";

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.autoduino_ir_code_detection = function() {
  var text_ir_code = this.getFieldValue('IR_Code');
  var max_Time = this.getFieldValue('max_Time');
  var value_irrecv = Blockly.Arduino.valueToCode(this, 'IRrecv', Blockly.Arduino.ORDER_ATOMIC);
  
  autoduino_ir_code_detection_index = autoduino_ir_code_detection_index + 1;

    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'+autoduino_ir_code_detection_index] = 'int autoduino_ir_code_detection_OK_'+autoduino_ir_code_detection_index+' = 0;\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_timeout'+autoduino_ir_code_detection_index] = 'unsigned long autoduino_ir_code_timeout_'+autoduino_ir_code_detection_index+' = 0;\n';
    
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] = 'unsigned long autoduino_ir_code_detection_OK(unsigned long ir_code, unsigned long maxtime, unsigned long int irRecv, int* memory, unsigned long* timeout) {\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '    if (irRecv == ir_code) {\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '        *timeout = millis() + maxtime; // maxtime ms timeout\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '        *memory = 1;\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '    }\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '    if (millis() > *timeout) {\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '        *memory = 0;\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '    }\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '    if (*memory == 1) {\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '        return irRecv;\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '    }\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '    else {\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '        return 0;\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '    }\n';
    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '}\n';
//    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += 'void_clear_autoduino_ir_code_detection_OK(int* memory) {\n';
//    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '  *memory = 0;\n';
//    Blockly.Arduino.definitions_['var_autoduino_ir_code_detection'] += '}\n';

    
    
    var code = 'autoduino_ir_code_detection_OK('+text_ir_code+', '+max_Time+', '+value_irrecv+', &autoduino_ir_code_detection_OK_'+autoduino_ir_code_detection_index+', &autoduino_ir_code_timeout_'+autoduino_ir_code_detection_index+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};


/** ****************** UTILE ******************************/

myAutoduinoEdgeFunction = "boolean autoduino_edge(boolean* memory, boolean input) {\n\
    if (input & ~(*memory)) {\n\
        *memory = input;\n\
        return true;\n\
    }\n\
    else {\n\
        *memory = input;\n\
        return false;\n\
    }\n\
}\n";
  
Blockly.Arduino.autoduino_edge_detection = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');

    Blockly.Arduino.definitions_['var_autoduino_edge'+dropdown_pin] = 'boolean autoduino_edge_detection_'+dropdown_pin+' = false;\n';
    Blockly.Arduino.definitions_['var_autoduino_edge'] = myAutoduinoEdgeFunction;
//    Blockly.Arduino.setups_['setup_autoduino_edge_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';

    var code = '';
    if(dropdown_stat==="UP"){
        code += 'autoduino_edge(&autoduino_edge_detection_'+dropdown_pin+', (boolean)('+getAutoduinoInput(dropdown_pin)+'))';
    } else {
        code += 'autoduino_edge(&autoduino_edge_detection_'+dropdown_pin+', ~(boolean)('+getAutoduinoInput(dropdown_pin)+'))';
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

