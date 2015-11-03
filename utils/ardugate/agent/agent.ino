/*************************************************************************
* Arduino Agent Sketch for ArduGate and ArduSim
* Distributed under GPL v2.0
* Copyright (c) 2012 Stanley Huang <stanleyhuangyc@gmail.com>
* All rights reserved.
*************************************************************************/

#include <arduino.h>
#include <EEPROM.h>
#include <Servo.h>
#include <Wire.h>
#include "agent.h"

Servo* servos[16] = {0};

char ReadChar()
{
    while (!Serial.available());
    char c = Serial.read();
    // echo back
    Serial.write(c);
    return c;
}

char PeekChar()
{
    while (!Serial.available());
    return Serial.peek();
}

void SkipChar(char c)
{
    for(;;) {
        while (!Serial.available());
        if (Serial.peek() == c)
            Serial.read();
        else
            break;
    }
}

void WaitCarriage()
{
    while (ReadChar() != '\r');
}

byte ReadNibble()
{
    while (!Serial.available());
    byte c = Serial.peek();
    if (c>='A' && c<='F')
        c-=7;
    else if (c>='a' && c<='f')
        c-=39;
    else if (c<'0' || c>'9')
        return 0xff;

    // echo back
    Serial.write(Serial.read());
    return c & 0xf;
}

byte ReadByte()
{
    byte h = ReadNibble();
    if (h == 0xff) {
        return 0;
    }
    byte l = ReadNibble();
    if (l == 0xff) {
        return h;
    } else {
        return (h << 4) | l;
    }
}

int ReadInt()
{
    byte d;
    unsigned int value = 0;
    for (char i = 0; i < 4; i++) {
        d = ReadNibble();
        if (d == 0xff) break;
        value = (value << 4) | d;
    }
    return value;
}

char WaitDelimiter()
{
    char c = PeekChar();
    if (c == ' ') {
        Serial.read();
        Serial.write(c);
    } else if (c != '\r') {
        return 0;
    }
    return c;
}

void FormatResult(char* buf, byte cmd)
{
    sprintf(buf, "%02X\r", cmd);
}

void FormatResult(char* buf, byte cmd, byte val)
{
    sprintf(buf, "%02X %02X\r", cmd, val);
}

void FormatResult(char* buf, byte cmd, int val)
{
    sprintf(buf, "%02X %04X\r", cmd, val);
}

void FormatError(char* buf, byte code)
{
    sprintf(buf, "XX %02X\r", code);
}

void setup()
{
	Serial.begin(57600);
	WaitCarriage();
	Serial.write("OK\r");
}

void loop()
{
    int arg;
    char buf[8] = "XX 01\r";
    byte cmd = ReadByte();

    switch (cmd & 0xf0) {
    case CMD_PIN:
        // pin operations
        switch (cmd) {
        case CMD_PIN_MODE_INPUT:
        case CMD_PIN_MODE_OUTPUT:
            if (WaitDelimiter()) {
                byte pin = ReadByte();
                pinMode(pin, cmd & 0x1);
                FormatResult(buf, cmd);
            }
            break;
        case CMD_DIGITAL_WRITE_LO:
        case CMD_DIGITAL_WRITE_HI:
            if (WaitDelimiter()) {
                byte pin = ReadByte();
                digitalWrite(pin, cmd & 0x1);
                FormatResult(buf, cmd);
            }
            break;
        case CMD_DIGITAL_READ:
            if (WaitDelimiter()) {
                byte pin = ReadByte();
                FormatResult(buf, cmd, (byte)digitalRead(pin));
            }
            break;
        case CMD_ANALOG_READ:
            if (WaitDelimiter()) {
                byte pin = ReadByte();
                FormatResult(buf, cmd, analogRead(pin));
            }
            break;
        case CMD_ANALOG_WRITE:
            if (WaitDelimiter()) {
                byte pin = ReadByte();
                if (WaitDelimiter()) {
                    byte val = ReadByte();
                    analogWrite(pin, val);
                    FormatResult(buf, cmd);
                }
            }
            break;
        }
        break;
    case CMD_MEMORY:
        // memory operations
        switch (cmd) {
        case CMD_EEPROM_READ:
            if (WaitDelimiter()) {
                arg = ReadInt();
                byte val = EEPROM.read(arg);
                FormatResult(buf, cmd, val);
            }
            break;
        case CMD_EEPROM_WRITE:
            if (!WaitDelimiter()) break;
            arg = ReadInt();
            if (WaitDelimiter()) {
                byte val = ReadByte();
                EEPROM.write(arg, val);
                FormatResult(buf, cmd, val);
            }
            break;
        }
        break;
    case CMD_BUS:
        switch (cmd) {
        case CMD_WIRE_AVAILABLE:
            FormatResult(buf, cmd, (byte)Wire.available());
            break;
        case CMD_WIRE_READ:
            if (WaitDelimiter() == ' ') {
                unsigned int timeout = ReadByte();
                timeout <<= 4;
                unsigned long tick = millis();
                while (!Wire.available() && millis() - tick < timeout);
            }
            if (Wire.available()) {
                byte val = Wire.read();
                FormatResult(buf, cmd, val);
            } else {
                FormatError(buf, 2);
            }
            break;
        case CMD_WIRE_WRITE:
            if (WaitDelimiter()) {
                byte val = ReadByte();
                Wire.write(val);
                FormatResult(buf, cmd, val);
            }
            break;
        case CMD_WIRE_BEGIN:
            if (WaitDelimiter()) {
                byte addr = ReadByte();
                if (addr == 0) {
                    Wire.begin();
                } else {
                    Wire.begin(addr);
                }
                FormatResult(buf, cmd, addr);
            }
            break;
        case CMD_WIRE_BEGIN_XFER:
            if (WaitDelimiter()) {
                byte addr = ReadByte();
                Wire.beginTransmission(addr);
                FormatResult(buf, cmd, addr);
            }
            break;
        case CMD_WIRE_END_XFER:
            Wire.endTransmission();
            FormatResult(buf, cmd, (byte)0);
            break;
        case CMD_WIRE_REQUEST_FROM:
            if (WaitDelimiter()) {
                byte addr = ReadByte();
                if (!WaitDelimiter()) break;
                byte count = ReadByte();
                Wire.requestFrom(addr, count);
                FormatResult(buf, cmd, addr);
            }
            break;
        }
        break;
    case CMD_SERVO_READ:
        {
            byte index = cmd & 0xf;
            if (servos[index]) {
                int angle = servos[index]->read();
                FormatResult(buf, cmd, angle);
            } else {
                FormatError(buf, 3);
            }
        }
        break;
    case CMD_SERVO_WRITE:
        if (WaitDelimiter()) {
            int angle = ReadInt();
            byte index = cmd & 0xf;
            if (servos[index]) {
                servos[index]->write(angle);
                FormatResult(buf, cmd, angle);
            } else {
                FormatError(buf, 3);
            }
        }
        break;
    case CMD_SERVO_ATTACH:
        if (WaitDelimiter()) {
            byte pin = ReadByte();
            if (!WaitDelimiter()) break;
            int minval = ReadInt();
            if (!WaitDelimiter()) break;
            int maxval = ReadInt();
            byte index = cmd & 0xf;
            if (!servos[index]) {
                servos[index] = new Servo;
            }
            servos[index]->attach(pin, minval, maxval);
            FormatResult(buf, cmd, index);
        }
        break;
    case CMD_SERVO_DETACH:
        {
            byte index = cmd & 0xf;
            if (servos[index]) {
                servos[index]->detach();
                delete servos[index];
                servos[index] = 0;
                FormatResult(buf, cmd, index);
            }else {
                FormatError(buf, 3);
            }
            break;
        }
    case CMD_DISPLAY:
        switch (cmd) {
        case CMD_RAINBOW_PIXEL:
            if (WaitDelimiter()) {
                byte x = ReadByte();
                byte y = ReadByte();
                byte color[3] = {ReadByte(), ReadByte(), ReadByte()};
                //TODO: draw a pixel at x,y
                FormatResult(buf, cmd);
            }
            break;
        case CMD_RAINBOW_CLS:
            //TODO: clear screen
            FormatResult(buf, cmd);
            break;
        case CMD_RAINBOW_DRAW:
            //TODO: draw screen
            FormatResult(buf, cmd);
            break;
        }
    }
    WaitCarriage();
    Serial.write(buf);
}
