#ifndef Pins_Arduino_h
#define Pins_Arduino_h

#include <avr/pgmspace.h>

// ATMEL ATMEGA1284P/644PA on Microduino-core+, version of date:20121223, microduino@163.com
// ATMEL ATMEGA1284P on Calunium, PCB version
//
//                       +---\/---+
//           (D 4) PB0 1 |        | 40 PA0 (D 31) AI 7
//           (D 5) PB1 2 |        | 39 PA1 (D 30) AI 6
//      INT2 (D 6) PB2 3 |        | 38 PA2 (D 29) AI 5
//       PWM (D 7) PB3 4 |        | 37 PA3 (D 28) AI 4
//   PWM/SS (D 10) PB4 5 |        | 36 PA4 (D 27) AI 3
//     MOSI (D 11) PB5 6 |        | 35 PA5 (D 26) AI 2
// PWM/MISO (D 12) PB6 7 |        | 34 PA6 (D 25) AI 1
//  PWM/SCK (D 13) PB7 8 |        | 33 PA7 (D 24) AI 0
//                 RST 9 |        | 32 AREF
//                VCC 10 |        | 31 GND 
//                GND 11 |        | 30 AVCC
//              XTAL2 12 |        | 29 PC7 (D 14) 
//              XTAL1 13 |        | 28 PC6 (D 15) 
//      RX0 (D 0) PD0 14 |        | 27 PC5 (D 16) TDI
//      TX0 (D 1) PD1 15 |        | 26 PC4 (D 17) TDO
// INT0 RX1 (D 2) PD2 16 |        | 25 PC3 (D 18) TMS
// INT1 TX1 (D 3) PD3 17 |        | 24 PC2 (D 19) TCK
//     PWM (D 22) PD4 18 |        | 23 PC1 (D 20) SDA
//      PWM (D 9) PD5 19 |        | 22 PC0 (D 21) SCL
//      PWM (D 8) PD6 20 |        | 21 PD7 (D 23) PWM
//                       +--------+
//


#define MICRODUINO

#define NUM_DIGITAL_PINS            32
#define NUM_ANALOG_INPUTS           8
#define analogInputToDigitalPin(p)  ((p < NUM_ANALOG_INPUTS) ? 24 + (p) : -1)

#ifdef __cplusplus
extern "C"{
#endif
extern const uint8_t digital_pin_to_pcint[NUM_DIGITAL_PINS];
extern const uint16_t __pcmsk[];
extern const uint8_t digital_pin_to_timer_PGM[NUM_DIGITAL_PINS];
#ifdef __cplusplus
}
#endif

#define ifpin(p,what,ifnot)	    (((p) >= 0 && (p) < NUM_DIGITAL_PINS) ? (what) : (ifnot))
#define digitalPinHasPWM(p)         ifpin(p,pgm_read_byte(digital_pin_to_timer_PGM + (p)) != NOT_ON_TIMER,1==0)

#define digitalPinToAnalogPin(p)    ( (p) >= 24 && (p) <= 31 ? (p) - 24 : -1 )
#define analogPinToChannel(p)	    ( (p) < NUM_ANALOG_INPUTS ? NUM_ANALOG_INPUTS - 1 - (p) : -1 )

static const uint8_t SS   = 10;
static const uint8_t MOSI = 11;
static const uint8_t MISO = 12;
static const uint8_t SCK  = 13;

static const uint8_t SDA = 20;
static const uint8_t SCL = 21;
static const uint8_t LED_BUILTIN = 13;

static const uint8_t A0 = 24;
static const uint8_t A1 = 25;
static const uint8_t A2 = 26;
static const uint8_t A3 = 27;
static const uint8_t A4 = 28;
static const uint8_t A5 = 29;
static const uint8_t A6 = 30;
static const uint8_t A7 = 31;

/*
#define digitalPinToPCICR(p)    ifpin(p,&PCICR,(uint8_t *)0)
#define digitalPinToPCICRbit(p) ifpin(p, digital_pin_to_pcint[p] >> 3, 0)
#define digitalPinToPCMSK(p)    ifpin(p,(uint16_t *)__pcmsk[digital_pin_to_pcint[p]],(uint16_t *)0)
#define digitalPinToPCMSKbit(p) ifpin(p, digital_pin_to_pcint[p] & 0x7, 0)
*/


// change by tiki for software Serial 20130429
#ifdef PCICR
#define digitalPinToPCICR(p)    ( \
    ((p) >= 0 && (p) <= 31) ? (&PCICR) : \
    ((uint8_t *)0) \
)
#define digitalPinToPCICRbit(p) ( \
    ((p)== 0) ? 3 : \
    ((p)== 1) ? 3 : \
    ((p)== 2) ? 3 : \
    ((p)== 3) ? 3 : \
    ((p)== 4) ? 1 : \
    ((p)== 5) ? 1 : \
    ((p)== 6) ? 1 : \
    ((p)== 7) ? 1 : \
    ((p)== 8) ? 3 : \
    ((p)== 9) ? 3 : \
    ((p)==10) ? 1 : \
    ((p)==11) ? 1 : \
    ((p)==12) ? 1 : \
    ((p)==13) ? 1 : \
    ((p)==14) ? 2 : \
    ((p)==15) ? 2 : \
    ((p)==16) ? 2 : \
    ((p)==17) ? 2 : \
    ((p)==18) ? 2 : \
    ((p)==19) ? 2 : \
    ((p)==20) ? 2 : \
    ((p)==21) ? 2 : \
    ((p)==22) ? 3 : \
    ((p)==23) ? 3 : \
    ((p)==24) ? 0 : \
    ((p)==25) ? 0 : \
    ((p)==26) ? 0 : \
    ((p)==27) ? 0 : \
    ((p)==28) ? 0 : \
    ((p)==29) ? 0 : \
    ((p)==30) ? 0 : \
    ((p)==31) ? 0 : \
    0 \
)

#define digitalPinToPCMSK(p) ( \
    ((p)== 0) ? (&PCMSK3) : \
    ((p)== 1) ? (&PCMSK3) : \
    ((p)== 2) ? (&PCMSK3) : \
    ((p)== 3) ? (&PCMSK3) : \
    ((p)== 4) ? (&PCMSK1) : \
    ((p)== 5) ? (&PCMSK1) : \
    ((p)== 6) ? (&PCMSK1) : \
    ((p)== 7) ? (&PCMSK1) : \
    ((p)== 8) ? (&PCMSK3) : \
    ((p)== 9) ? (&PCMSK3) : \
    ((p)==10) ? (&PCMSK1) : \
    ((p)==11) ? (&PCMSK1) : \
    ((p)==12) ? (&PCMSK1) : \
    ((p)==13) ? (&PCMSK1) : \
    ((p)==14) ? (&PCMSK2) : \
    ((p)==15) ? (&PCMSK2) : \
    ((p)==16) ? (&PCMSK2) : \
    ((p)==17) ? (&PCMSK2) : \
    ((p)==18) ? (&PCMSK2) : \
    ((p)==19) ? (&PCMSK2) : \
    ((p)==20) ? (&PCMSK2) : \
    ((p)==21) ? (&PCMSK2) : \
    ((p)==22) ? (&PCMSK3) : \
    ((p)==23) ? (&PCMSK3) : \
    ((p)==24) ? (&PCMSK0) : \
    ((p)==25) ? (&PCMSK0) : \
    ((p)==26) ? (&PCMSK0) : \
    ((p)==27) ? (&PCMSK0) : \
    ((p)==28) ? (&PCMSK0) : \
    ((p)==29) ? (&PCMSK0) : \
    ((p)==30) ? (&PCMSK0) : \
    ((p)==31) ? (&PCMSK0) : \
    ((uint8_t *)0) \
)
#define digitalPinToPCMSKbit(p) ( \
    ((p)== 0) ? 0 : \
    ((p)== 1) ? 1 : \
    ((p)== 2) ? 2 : \
    ((p)== 3) ? 3 : \
    ((p)== 4) ? 0 : \
    ((p)== 5) ? 1 : \
    ((p)== 6) ? 2 : \
    ((p)== 7) ? 3 : \
    ((p)== 8) ? 6 : \
    ((p)== 9) ? 5 : \
    ((p)==10) ? 4 : \
    ((p)==11) ? 5 : \
    ((p)==12) ? 6 : \
    ((p)==13) ? 7 : \
    ((p)==14) ? 7 : \
    ((p)==15) ? 6 : \
    ((p)==16) ? 5 : \
    ((p)==17) ? 4 : \
    ((p)==18) ? 3 : \
    ((p)==19) ? 2 : \
    ((p)==20) ? 1 : \
    ((p)==21) ? 0 : \
    ((p)==22) ? 4 : \
    ((p)==23) ? 7 : \
    ((p)==24) ? 7 : \
    ((p)==25) ? 6 : \
    ((p)==26) ? 5 : \
    ((p)==27) ? 4 : \
    ((p)==28) ? 3 : \
    ((p)==29) ? 2 : \
    ((p)==30) ? 1 : \
    ((p)==31) ? 0 : \
    0 \
)

#else
/* no PCINT (mega32) */
#define digitalPinToPCICR(p)    ((uint8_t *)0)
#define digitalPinToPCICRbit(p) 0
#define digitalPinToPCMSK(p)    ((uint8_t *)0)
#define digitalPinToPCMSKbit(p) 0
#endif /* PCICR */

//tiki change end


#ifdef ARDUINO_MAIN

#define PA 1
#define PB 2
#define PC 3
#define PD 4

const uint8_t digital_pin_to_pcint[NUM_DIGITAL_PINS] =
{
  24, // D0 PD0
  25, // D1 PD1
  26, // D2 PD2
  27, // D3 PD3
  8, // D4 PB0
  9, // D5 PB1
  10, // D6 PB2
  11, // D7 PB3
  30, // D8 PD6
  29, // D9 PD5
  12, // D10 PB4
  13, // D11 PB5
  14, // D12 PB6
  15, // D13 PB7
  23, // D14 PC7
  22, // D15 PC6
  21, // D16 PC5
  20, // D17 PC4
  19, // D18 PC3
  18, // D19 PC2
  17, // D20 PC1
  16, // D21 PC0
  28, // D22 PD4
  31, // D23 PD7
  7, // D24 PA7
  6, // D25 PA6
  5, // D26 PA5
  4, // D27 PA4
  3, // D28 PA3
  2, // D29 PA2
  1, // D30 PA1
  0, // D31 PA0
};

const uint16_t __pcmsk[] = 
{
  (uint16_t)&PCMSK0, 
  (uint16_t)&PCMSK1, 
  (uint16_t)&PCMSK2, 
  (uint16_t)&PCMSK3
};

// these arrays map port names (e.g. port B) to the
// appropriate addresses for various functions (e.g. reading
// and writing)
const uint16_t PROGMEM port_to_mode_PGM[] =
{
	NOT_A_PORT,
	(uint16_t) &DDRA,
	(uint16_t) &DDRB,
	(uint16_t) &DDRC,
	(uint16_t) &DDRD,
};

const uint16_t PROGMEM port_to_output_PGM[] =
{
	NOT_A_PORT,
	(uint16_t) &PORTA,
	(uint16_t) &PORTB,
	(uint16_t) &PORTC,
	(uint16_t) &PORTD,
};

const uint16_t PROGMEM port_to_input_PGM[] =
{
	NOT_A_PORT,
	(uint16_t) &PINA,
	(uint16_t) &PINB,
	(uint16_t) &PINC,
	(uint16_t) &PIND,
};

const uint8_t PROGMEM digital_pin_to_port_PGM[NUM_DIGITAL_PINS] =
{
  PD, // D0
  PD, // D1
  PD, // D2
  PD, // D3
  PB, // D4
  PB, // D5
  PB, // D6
  PB, // D7
  PD, // D8
  PD, // D9
  PB, // D10
  PB, // D11
  PB, // D12
  PB, // D13
  PC, // D14
  PC, // D15
  PC, // D16
  PC, // D17
  PC, // D18
  PC, // D19
  PC, // D20
  PC, // D21
  PD, // D22
  PD, // D23
  PA, // D24
  PA, // D25
  PA, // D26
  PA, // D27
  PA, // D28
  PA, // D29
  PA, // D30
  PA, // D31
};

const uint8_t PROGMEM digital_pin_to_bit_mask_PGM[NUM_DIGITAL_PINS] =
{
  _BV(0), // D0 PD0
  _BV(1), // D1 PD1
  _BV(2), // D2 PD2
  _BV(3), // D3 PD3
  _BV(0), // D4 PB0
  _BV(1), // D5 PB1
  _BV(2), // D6 PB2
  _BV(3), // D7 PB3
  _BV(6), // D8 PD6
  _BV(5), // D9 PD5
  _BV(4), // D10 PB4
  _BV(5), // D11 PB5
  _BV(6), // D12 PB6
  _BV(7), // D13 PB7
  _BV(7), // D14 PC7
  _BV(6), // D15 PC6
  _BV(5), // D16 PC5
  _BV(4), // D17 PC4
  _BV(3), // D18 PC3
  _BV(2), // D19 PC2
  _BV(1), // D20 PC1
  _BV(0), // D21 PC0
  _BV(4), // D22 PD4
  _BV(7), // D23 PD7
  _BV(7), // D24 PA7
  _BV(6), // D25 PA6
  _BV(5), // D26 PA5
  _BV(4), // D27 PA4
  _BV(3), // D28 PA3
  _BV(2), // D29 PA2
  _BV(1), // D30 PA1
  _BV(0), // D31 PA0
};

const uint8_t PROGMEM digital_pin_to_timer_PGM[NUM_DIGITAL_PINS] =
{
  NOT_ON_TIMER, // D0 PD0
  NOT_ON_TIMER, // D1 PD1
  NOT_ON_TIMER, // D2 PD2
  NOT_ON_TIMER, // D3 PD3
  NOT_ON_TIMER, // D4 PB0
  NOT_ON_TIMER, // D5 PB1
  NOT_ON_TIMER, // D6 PB2
  TIMER0A,      // D7 PB3
  TIMER2B,      // D8 PD6
  TIMER1A,      // D9 PD5
  TIMER0B,      // D10 PB4
  NOT_ON_TIMER, // D11 PB5
  TIMER3A,      // D12 PB6
  TIMER3B,      // D13 PB7
  NOT_ON_TIMER, // D14 PC7
  NOT_ON_TIMER, // D15 PC6
  NOT_ON_TIMER, // D16 PC5
  NOT_ON_TIMER, // D17 PC4
  NOT_ON_TIMER, // D18 PC3
  NOT_ON_TIMER, // D19 PC2
  NOT_ON_TIMER, // D20 PC1
  NOT_ON_TIMER, // D21 PC0
  TIMER1B,      // D22 PD4
  TIMER2A,      // D23 PD7
  NOT_ON_TIMER, // D24 PA7
  NOT_ON_TIMER, // D25 PA6
  NOT_ON_TIMER, // D26 PA5
  NOT_ON_TIMER, // D27 PA4
  NOT_ON_TIMER, // D28 PA3
  NOT_ON_TIMER, // D29 PA2
  NOT_ON_TIMER, // D30 PA1
  NOT_ON_TIMER, // D31 PA0
};

#endif // ARDUINO_MAIN

#endif // Pins_Arduino_h
// vim:ai:cin:sts=2 sw=2 ft=cpp
