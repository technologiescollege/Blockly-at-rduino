#include <arduino.h>

#ifdef ENABLE_EEPROM
#include "EEPROM.cpp"
#endif

#ifdef ENABLE_ETHERNET
#include "Ethernet.cpp"
#include "EthernetClient.cpp"
#include "EthernetServer.cpp"
#include "EthernetUdp.cpp"
#endif

#ifdef ENABLE_FIRMATA
#include "Firmata.cpp"
#endif

#ifdef ENABLE_LCD
#include "LiquidCrystal.cpp"
#endif

#ifdef ENABLE_LCD4884
#include "LCD4884.cpp"
#endif

#ifdef ENABLE_OBD
#include "OBD.cpp"
#endif

#ifdef ENABLE_SD
#include "SD.cpp"
#include "File.cpp"
#endif

#ifdef ENABLE_SERVO
#include "Servo.cpp"
#endif

#ifdef ENABLE_SOFTSERIAL
#include "SoftwareSerial.cpp"
#endif

#ifdef ENABLE_SPI
#include "SPI.cpp"
#endif

#ifdef ENABLE_STEPPER
#include "stepper.cpp"
#endif

#ifdef ENABLE_WIRE
#include "Wire.cpp"
#include "twi.c"
#endif

