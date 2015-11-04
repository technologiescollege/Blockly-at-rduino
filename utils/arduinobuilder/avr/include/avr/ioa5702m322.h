/*****************************************************************************
 *
 * Copyright (C) 2014 Atmel Corporation
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright
 *   notice, this list of conditions and the following disclaimer in
 *   the documentation and/or other materials provided with the
 *   distribution.
 *
 * * Neither the name of the copyright holders nor the names of
 *   contributors may be used to endorse or promote products derived
 *   from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 ****************************************************************************/


#ifndef _AVR_ATA5702M322_H_INCLUDED
#define _AVR_ATA5702M322_H_INCLUDED


#ifndef _AVR_IO_H_
#  error "Include <avr/io.h> instead of this file."
#endif

#ifndef _AVR_IOXXX_H_
#  define _AVR_IOXXX_H_ "ioa5702m322.h"
#else
#  error "Attempt to include more than one <avr/ioXXX.h> file."
#endif

/* Registers and associated bit numbers */

#define GPIOR0  _SFR_IO8(0x00)

#define PRR1    _SFR_IO8(0x01)
#define PRT1    0
#define PRT2    1
#define PRT3    2
#define PRT4    3
#define PRT5    4
#define PRLFR   5
#define PRCI    6

#define PRR2    _SFR_IO8(0x02)
#define PRSF    2
#define PRDF    3
#define PRTM    6
#define PRSSM   7

#define PINB    _SFR_IO8(0x03)
#define PINB7   7
#define PINB6   6
#define PINB5   5
#define PINB4   4
#define PINB3   3
#define PINB2   2
#define PINB1   1
#define PINB0   0

#define DDRB    _SFR_IO8(0x04)
#define DDRB7   7
#define DDRB6   6
#define DDRB5   5
#define DDRB4   4
#define DDRB3   3
#define DDRB2   2
#define DDRB1   1
#define DDRB0   0

#define PORTB   _SFR_IO8(0x05)
#define PORTB7  7
#define PORTB6  6
#define PORTB5  5
#define PORTB4  4
#define PORTB3  3
#define PORTB2  2
#define PORTB1  1
#define PORTB0  0

#define PINC    _SFR_IO8(0x06)
#define PINC2   2
#define PINC1   1
#define PINC0   0

#define DDRC    _SFR_IO8(0x07)
#define DDRC2   2
#define DDRC1   1
#define DDRC0   0

#define PORTC   _SFR_IO8(0x08)
#define PORTC2  2
#define PORTC1  1
#define PORTC0  0

#define PIND    _SFR_IO8(0x09)
#define PIND7   7
#define PIND6   6
#define PIND5   5
#define PIND4   4
#define PIND3   3
#define PIND2   2
#define PIND1   1
#define PIND0   0

#define DDRD    _SFR_IO8(0x0A)
#define DDRD7   7
#define DDRD6   6
#define DDRD5   5
#define DDRD4   4
#define DDRD3   3
#define DDRD2   2
#define DDRD1   1
#define DDRD0   0

#define PORTD   _SFR_IO8(0x0B)
#define PORTD7  7
#define PORTD6  6
#define PORTD5  5
#define PORTD4  4
#define PORTD3  3
#define PORTD2  2
#define PORTD1  1
#define PORTD0  0

#define TPCR2   _SFR_IO8(0x0C)
#define TPMA    0
#define TPMOD   1
#define TPPSD   2
#define TPD     3
#define TPNFTO  4
#define TPWDLV0 5
#define TPWDLV1 6

#define TPFR    _SFR_IO8(0x0D)
#define TPF     0
#define TPFTF   1
#define TPNFTF  2
#define TPBERF  3

#define MCUCR   _SFR_IO8(0x0E)
#define IVCE    0
#define IVSEL   1
#define SPIIO   2
#define ENPS    3
#define PUD     4
#define TRCCE   5
#define TRCEN   6

#define FSCR    _SFR_IO8(0x0F)
#define TXMOD   0
#define SFM     1
#define TXMS0   2
#define TXMS1   3
#define PAOER   4
#define PAON    7

/* Reserved [0x10] */

#define T1CR    _SFR_IO8(0x11)
#define T1OTM   0
#define T1CTM   1
#define T1CRM   2
#define T1TOP   4
#define T1RES   5
#define T1TOS   6
#define T1ENA   7

#define T2CR    _SFR_IO8(0x12)
#define T2OTM   0
#define T2CTM   1
#define T2CRM   2
#define T2TOP   4
#define T2RES   5
#define T2TOS   6
#define T2ENA   7

#define T3CR    _SFR_IO8(0x13)
#define T3OTM   0
#define T3CTM   1
#define T3CRM   2
#define T3CPRM  3
#define T3TOP   4
#define T3RES   5
#define T3TOS   6
#define T3ENA   7

#define T4CR    _SFR_IO8(0x14)
#define T4OTM   0
#define T4CTM   1
#define T4CRM   2
#define T4CPRM  3
#define T4TOP   4
#define T4RES   5
#define T4TOS   6
#define T4ENA   7

#define T1IFR   _SFR_IO8(0x15)
#define T1OFF   0
#define T1COF   1

#define T2IFR   _SFR_IO8(0x16)
#define T2OFF   0
#define T2COF   1

#define T3IFR   _SFR_IO8(0x17)
#define T3OFF   0
#define T3COF   1
#define T3ICF   2

#define T4IFR   _SFR_IO8(0x18)
#define T4OFF   0
#define T4COF   1
#define T4ICF   2

#define T5IFR   _SFR_IO8(0x19)
#define T5OFF   0
#define T5COF   1

#define PRR0    _SFR_IO8(0x1A)
#define PRSPI   0
#define PRTXDC  2
#define PRCRC   3
#define PRVM    4
#define PRCO    5
#define PRCU    6
#define PRTWI   7

#define PHFR    _SFR_IO8(0x1B)
#define CRCEF   0
#define PHTBLF  1
#define PHDFF   2
#define PHIDFF  3
#define PHID0F  4
#define PHID1F  5

#define LFFR    _SFR_IO8(0x1C)
#define LFSYDF  0
#define LFDEF   1
#define LFEOF   2
#define LFTOF   3
#define LFSD    6
#define LFES    7

#define AESCR   _SFR_IO8(0x1D)
#define AESWK   0
#define AESWD   1
#define AESIM   2
#define AESD    3
#define AESXOR  4
#define AESRES  5
#define AESLKM  6
#define AESE    7

#define AESSR   _SFR_IO8(0x1E)
#define AESRF   0
#define AESERF  7

#define EECR    _SFR_IO8(0x1F)
#define EERE    0
#define EEWE    1
#define EEMWE   2
#define EERIE   3
#define EEPM0   4
#define EEPM1   5
#define EEPAGE  6
#define NVMBSY  7

#define EEDR    _SFR_IO8(0x20)

/* Combine EEARL and EEARH */
#define EEAR    _SFR_IO16(0x21)

#define EEARL   _SFR_IO8(0x21)
#define EEARH   _SFR_IO8(0x22)

#define EEPR    _SFR_IO8(0x23)
#define EEAP0   0
#define EEAP1   1
#define EEAP2   2
#define EEAP3   3

#define GPIOR1  _SFR_IO8(0x24)

#define GPIOR2  _SFR_IO8(0x25)

#define PCICR   _SFR_IO8(0x26)
#define PCIE0   0
#define PCIE1   1

#define EIMSK   _SFR_IO8(0x27)
#define INT0    0
#define INT1    1

#define EIFR    _SFR_IO8(0x28)
#define INTF0   0
#define INTF1   1

#define CRCDIR  _SFR_IO8(0x29)

#define VMSR    _SFR_IO8(0x2A)
#define VMF     0

#define MCUSR   _SFR_IO8(0x2B)
#define PORF    0
#define EXTRF   1
#define BODRF   2
#define WDRF    3
#define TPRF    5
#define DVCCRF  6

#define SPCR    _SFR_IO8(0x2C)
#define SPR0    0
#define SPR1    1
#define CPHA    2
#define CPOL    3
#define MSTR    4
#define DORD    5
#define SPE     6
#define SPIE    7

#define SPSR    _SFR_IO8(0x2D)
#define SPI2X   0
#define RXIF    4
#define TXIF    5
#define SPIF    7

#define SPDR    _SFR_IO8(0x2E)

#define LFCR0   _SFR_IO8(0x2F)
#define LFCE1   0
#define LFCE2   1
#define LFCE3   2
#define LFBR0   3
#define LFBR1   4
#define LFMG    5
#define LFRRT0  6
#define LFRRT1  7

#define LFCR1   _SFR_IO8(0x30)
#define LFFM0   0
#define LFFM1   1
#define ARMDE   2
#define FLLEN   4
#define ADTHEN  5
#define LFPEEN  6
#define LFRE    7

#define DWDR    _SFR_IO8(0x31)

#define T0IFR   _SFR_IO8(0x32)
#define T0F     0

/* Reserved [0x33..0x36] */

#define SPMCSR  _SFR_IO8(0x37)
#define SELFPRGEN 0
#define PGERS   1
#define PGWRT   2
#define BLBSET  3
#define SPMIE   7

#define SMCR    _SFR_IO8(0x38)
#define SE      0
#define SM0     1
#define SM1     2
#define SM2     3

#define TPSR    _SFR_IO8(0x39)
#define TPA     0
#define TPGAP   1
#define TPPSW   2
#define TPBCOK  3

#define LFCR2   _SFR_IO8(0x3A)
#define LFSEN0  0
#define LFSEN1  1
#define LFDAMP  2
#define LFVC0   5
#define LFVC1   6
#define LFVC2   7

#define LFCR3   _SFR_IO8(0x3B)
#define LFRCTEN 0
#define LFRCPCEN 1
#define LFRCPM  2

/* Reserved [0x3C] */

/* SP [0x3D..0x3E] */

/* SREG [0x3F] */

#define FSEN    _SFR_MEM8(0x60)
#define SDPU    0
#define SDEN    1
#define GAEN    2
#define PEEN    3
#define ASEN    4
#define ANTT    5

#define FSFCR   _SFR_MEM8(0x61)
#define BTSEL0  0
#define BTSEL1  1
#define ASDIV0  4
#define ASDIV1  5
#define ASDIV2  6
#define ASDIV3  7

/* Combine GACDIVL and GACDIVH */
#define GACDIV  _SFR_MEM16(0x62)

#define GACDIVL _SFR_MEM8(0x62)
#define GACDIVH _SFR_MEM8(0x63)

#define FFREQ1L _SFR_MEM8(0x64)

#define FFREQ1M _SFR_MEM8(0x65)

#define FFREQ1H _SFR_MEM8(0x66)

#define FFREQ2L _SFR_MEM8(0x67)

#define FFREQ2M _SFR_MEM8(0x68)

#define FFREQ2H _SFR_MEM8(0x69)

/* Reserved [0x6A] */

#define EICRA   _SFR_MEM8(0x6B)
#define ISC00   0
#define ISC01   1
#define ISC10   2
#define ISC11   3

#define PCMSK0  _SFR_MEM8(0x6C)
#define PCINT0  0
#define PCINT1  1
#define PCINT2  2
#define PCINT3  3
#define PCINT4  4
#define PCINT5  5
#define PCINT6  6
#define PCINT7  7

#define PCMSK1  _SFR_MEM8(0x6D)
#define PCINT8  0
#define PCINT9  1
#define PCINT10 2
#define PCINT11 3
#define PCINT12 4
#define PCINT13 5
#define PCINT14 6
#define PCINT15 7

#define WDTCR   _SFR_MEM8(0x6E)
#define WDPS0   0
#define WDPS1   1
#define WDPS2   2
#define WDE     3
#define WDCE    4

#define T1CNT   _SFR_MEM8(0x6F)

#define T1COR   _SFR_MEM8(0x70)

#define T1MR    _SFR_MEM8(0x71)
#define T1CS0   0
#define T1CS1   1
#define T1PS0   2
#define T1PS1   3
#define T1PS2   4
#define T1PS3   5
#define T1DC0   6
#define T1DC1   7

#define T1IMR   _SFR_MEM8(0x72)
#define T1OIM   0
#define T1CIM   1

#define T2CNT   _SFR_MEM8(0x73)

#define T2COR   _SFR_MEM8(0x74)

#define T2MR    _SFR_MEM8(0x75)
#define T2CS0   0
#define T2CS1   1
#define T2PS0   2
#define T2PS1   3
#define T2PS2   4
#define T2PS3   5
#define T2DC0   6
#define T2DC1   7

#define T2IMR   _SFR_MEM8(0x76)
#define T2OIM   0
#define T2CIM   1

/* Combine T3CNTL and T3CNTH */
#define T3CNT   _SFR_MEM16(0x77)

#define T3CNTL  _SFR_MEM8(0x77)
#define T3CNTH  _SFR_MEM8(0x78)

/* Combine T3CORL and T3CORH */
#define T3COR   _SFR_MEM16(0x79)

#define T3CORL  _SFR_MEM8(0x79)
#define T3CORH  _SFR_MEM8(0x7A)

/* Combine T3ICRL and T3ICRH */
#define T3ICR   _SFR_MEM16(0x7B)

#define T3ICRL  _SFR_MEM8(0x7B)
#define T3ICRH  _SFR_MEM8(0x7C)

#define T3MRA   _SFR_MEM8(0x7D)
#define T3CS0   0
#define T3CS1   1
#define T3PS0   2
#define T3PS1   3
#define T3PS2   4

#define T3MRB   _SFR_MEM8(0x7E)
#define T3SCE   1
#define T3CNC   2
#define T3CE0   3
#define T3CE1   4
#define T3ICS0  5
#define T3ICS1  6
#define T3ICS2  7

#define T3IMR   _SFR_MEM8(0x7F)
#define T3OIM   0
#define T3CIM   1
#define T3CPIM  2

/* Combine T4CNTL and T4CNTH */
#define T4CNT   _SFR_MEM16(0x80)

#define T4CNTL  _SFR_MEM8(0x80)
#define T4CNTH  _SFR_MEM8(0x81)

/* Combine T4CORL and T4CORH */
#define T4COR   _SFR_MEM16(0x82)

#define T4CORL  _SFR_MEM8(0x82)
#define T4CORH  _SFR_MEM8(0x83)

/* Combine T4ICRL and T4ICRH */
#define T4ICR   _SFR_MEM16(0x84)

#define T4ICRL  _SFR_MEM8(0x84)
#define T4ICRH  _SFR_MEM8(0x85)

#define T4MRA   _SFR_MEM8(0x86)
#define T4CS0   0
#define T4CS1   1
#define T4PS0   2
#define T4PS1   3
#define T4PS2   4

#define T4MRB   _SFR_MEM8(0x87)
#define T4SCE   1
#define T4CNC   2
#define T4CE0   3
#define T4CE1   4
#define T4ICS0  5
#define T4ICS1  6
#define T4ICS2  7

#define T4IMR   _SFR_MEM8(0x88)
#define T4OIM   0
#define T4CIM   1
#define T4CPIM  2

#define T5TEMP  _SFR_MEM8(0x89)

/* Combine T5OCRL and T5OCRH */
#define T5OCR   _SFR_MEM16(0x8A)

#define T5OCRL  _SFR_MEM8(0x8A)
#define T5OCRH  _SFR_MEM8(0x8B)

#define T5CCR   _SFR_MEM8(0x8C)
#define T5CS0   0
#define T5CS1   1
#define T5CS2   2
#define T5CTC   3

/* Combine T5CNTL and T5CNTH */
#define T5CNT   _SFR_MEM16(0x8D)

#define T5CNTL  _SFR_MEM8(0x8D)
#define T5CNTH  _SFR_MEM8(0x8E)

#define T5IMR   _SFR_MEM8(0x8F)
#define T5OIM   0
#define T5CIM   1

#define GTCCR   _SFR_MEM8(0x90)
#define PSR10   0
#define TSM     7

/* Reserved [0x91..0xC2] */

#define CLKOD   _SFR_MEM8(0xC3)

#define CLKOCR  _SFR_MEM8(0xC4)
#define CLKOS0  0
#define CLKOS1  1
#define CLKOEN  2

/* Reserved [0xC5] */

#define MRCCAL  _SFR_MEM8(0xC6)

#define FRCCAL  _SFR_MEM8(0xC7)

/* Reserved [0xC8] */

#define CMSR    _SFR_MEM8(0xC9)
#define ECF     0

#define CMOCR   _SFR_MEM8(0xCA)
#define FRCAO   0
#define MRCAO   1
#define FRCACT  2

#define SUPFR   _SFR_MEM8(0xCB)
#define AVCCRF  0
#define AVCCLF  1

#define SUPCR   _SFR_MEM8(0xCC)
#define AVCCRM  0
#define AVCCLM  1
#define PVEN    2
#define AVDIC   3
#define AVEN    4
#define DVHEN   5

/* Reserved [0xCD..0xD1] */

#define DFS     _SFR_MEM8(0xD2)
#define DFFLRF  0
#define DFUFL   1
#define DFOFL   2

/* Combine DFTLL and DFTLH */
#define DFTL    _SFR_MEM16(0xD3)

#define DFTLL   _SFR_MEM8(0xD3)
#define DFTLH   _SFR_MEM8(0xD4)

#define DFL     _SFR_MEM8(0xD5)
#define DFFLS0  0
#define DFFLS1  1
#define DFFLS2  2
#define DFFLS3  3
#define DFFLS4  4
#define DFFLS5  5
#define DFCLR   7

#define DFWP    _SFR_MEM8(0xD6)

#define DFRP    _SFR_MEM8(0xD7)

#define DFD     _SFR_MEM8(0xD8)

#define DFI     _SFR_MEM8(0xD9)
#define DFFLIM  0
#define DFERIM  1

#define DFC     _SFR_MEM8(0xDA)
#define DFFLC0  0
#define DFFLC1  1
#define DFFLC2  2
#define DFFLC3  3
#define DFFLC4  4
#define DFFLC5  5
#define DFDRA   7

#define SFS     _SFR_MEM8(0xDB)
#define SFFLRF  0
#define SFUFL   1
#define SFOFL   2

#define SFL     _SFR_MEM8(0xDC)
#define SFFLS0  0
#define SFFLS1  1
#define SFFLS2  2
#define SFFLS3  3
#define SFFLS4  4
#define SFCLR   7

#define SFWP    _SFR_MEM8(0xDD)

#define SFRP    _SFR_MEM8(0xDE)

#define SFD     _SFR_MEM8(0xDF)

#define SFI     _SFR_MEM8(0xE0)
#define SFFLIM  0
#define SFERIM  1

#define SFC     _SFR_MEM8(0xE1)
#define SFFLC0  0
#define SFFLC1  1
#define SFFLC2  2
#define SFFLC3  3
#define SFFLC4  4
#define SFDRA   7

#define SSMCR   _SFR_MEM8(0xE2)
#define SSMTGE  2
#define SSMTPE  3
#define SSMPVE  4
#define SSMTAE  5

/* Reserved [0xE3] */

#define SSMFBR  _SFR_MEM8(0xE4)
#define SSMPLDT 5

#define SSMRR   _SFR_MEM8(0xE5)
#define SSMR    0
#define SSMST   1

#define SSMSR   _SFR_MEM8(0xE6)
#define SSMESM0 0
#define SSMESM1 1
#define SSMESM2 2
#define SSMESM3 3
#define SSMERR  7

#define SSMIFR  _SFR_MEM8(0xE7)
#define SSMIF   0

#define SSMIMR  _SFR_MEM8(0xE8)
#define SSMIM   0

#define MSMSTR  _SFR_MEM8(0xE9)
#define SSMMST0 0
#define SSMMST1 1
#define SSMMST2 2
#define SSMMST3 3
#define SSMMST4 4

#define SSMSTR  _SFR_MEM8(0xEA)
#define SSMSTA0 0
#define SSMSTA1 1
#define SSMSTA2 2
#define SSMSTA3 3
#define SSMSTA4 4
#define SSMSTA5 5

/* Reserved [0xEB] */

#define MSMCR1  _SFR_MEM8(0xEC)
#define MSMSM00 0
#define MSMSM01 1
#define MSMSM02 2
#define MSMSM03 3
#define MSMSM10 4
#define MSMSM11 5
#define MSMSM12 6
#define MSMSM13 7

#define MSMCR2  _SFR_MEM8(0xED)
#define MSMSM20 0
#define MSMSM21 1
#define MSMSM22 2
#define MSMSM23 3
#define MSMSM30 4
#define MSMSM31 5
#define MSMSM32 6
#define MSMSM33 7

#define MSMCR3  _SFR_MEM8(0xEE)
#define MSMSM40 0
#define MSMSM41 1
#define MSMSM42 2
#define MSMSM43 3
#define MSMSM50 4
#define MSMSM51 5
#define MSMSM52 6
#define MSMSM53 7

#define MSMCR4  _SFR_MEM8(0xEF)
#define MSMSM60 0
#define MSMSM61 1
#define MSMSM62 2
#define MSMSM63 3
#define MSMSM70 4
#define MSMSM71 5
#define MSMSM72 6
#define MSMSM73 7

/* Reserved [0xF0..0xFB] */

/* Combine TRCIDL and TRCIDH */
#define TRCID   _SFR_MEM16(0xFC)

#define TRCIDL  _SFR_MEM8(0xFC)
#define TRCIDH  _SFR_MEM8(0xFD)

/* Reserved [0xFE] */

#define TRCDR   _SFR_MEM8(0xFF)

#define FESR    _SFR_MEM8(0x100)
#define XRDY    2
#define PLCK    3
#define ANTS    4

#define FEEN1   _SFR_MEM8(0x101)
#define PLEN    0
#define PLCAL   1
#define XTOEN   2
#define PLSP1   6
#define ATEN    7

#define FEEN2   _SFR_MEM8(0x102)
#define PAEN    2
#define PLPEN   4
#define CPBIA   6

/* Reserved [0x103] */

#define FEAT    _SFR_MEM8(0x104)
#define ANTN0   0
#define ANTN1   1
#define ANTN2   2
#define ANTN3   3

#define FEPAC   _SFR_MEM8(0x105)
#define PACR0   0
#define PACR1   1
#define PACR2   2
#define PACR3   3
#define PACR4   4
#define PACR5   5
#define PACR6   6
#define PACR7   7

#define FEVCT   _SFR_MEM8(0x106)

#define FEBT    _SFR_MEM8(0x107)
#define CTN20   0
#define CTN21   1
#define RTN20   2
#define RTN21   3

#define FEMS    _SFR_MEM8(0x108)
#define PLLS0   0
#define PLLS1   1
#define PLLS2   2
#define PLLS3   3
#define PLLM0   4
#define PLLM1   5
#define PLLM2   6
#define PLLM3   7

#define FETN4   _SFR_MEM8(0x109)
#define CTN40   0
#define CTN41   1
#define CTN42   2
#define CTN43   3
#define RTN40   4
#define RTN41   5
#define RTN42   6
#define RTN43   7

#define FECR    _SFR_MEM8(0x10A)
#define LBNHB   0
#define S4N3    1
#define PLCKG   4
#define ANPS    5

#define FEVCO   _SFR_MEM8(0x10B)
#define CPCC0   0
#define CPCC1   1
#define CPCC2   2
#define CPCC3   3
#define VCOB0   4
#define VCOB1   5
#define VCOB2   6
#define VCOB3   7

#define FEALR   _SFR_MEM8(0x10C)
#define RNGE0   0
#define RNGE1   1

#define FEANT   _SFR_MEM8(0x10D)
#define LVLC0   0
#define LVLC1   1
#define LVLC2   2
#define LVLC3   3

/* Reserved [0x10E..0x11F] */

#define TMFSM   _SFR_MEM8(0x120)
#define TMSSM0  0
#define TMSSM1  1
#define TMSSM2  2
#define TMSSM3  3
#define TMMSM0  4
#define TMMSM1  5
#define TMMSM2  6

/* Combine TMCRCL and TMCRCH */
#define TMCRC   _SFR_MEM16(0x121)

#define TMCRCL  _SFR_MEM8(0x121)
#define TMCRCH  _SFR_MEM8(0x122)

#define TMCSB   _SFR_MEM8(0x123)

/* Combine TMCIL and TMCIH */
#define TMCI    _SFR_MEM16(0x124)

#define TMCIL   _SFR_MEM8(0x124)
#define TMCIH   _SFR_MEM8(0x125)

/* Combine TMCPL and TMCPH */
#define TMCP    _SFR_MEM16(0x126)

#define TMCPL   _SFR_MEM8(0x126)
#define TMCPH   _SFR_MEM8(0x127)

#define TMSHR   _SFR_MEM8(0x128)

/* Combine TMTLLL and TMTLLH */
#define TMTLL   _SFR_MEM16(0x129)

#define TMTLLL  _SFR_MEM8(0x129)
#define TMTLLH  _SFR_MEM8(0x12A)

#define TMSSC   _SFR_MEM8(0x12B)
#define TMSSP0  0
#define TMSSP1  1
#define TMSSP2  2
#define TMSSP3  3
#define TMSSL0  4
#define TMSSL1  5
#define TMSSL2  6
#define TMSSH   7

#define TMSR    _SFR_MEM8(0x12C)
#define TMTCF   0

#define TMCR2   _SFR_MEM8(0x12D)
#define TMCRCE  0
#define TMCRCSE0 1
#define TMCRCSE1 2
#define TMNRZE  3
#define TMPOL   4
#define TMSSE   5
#define TMLSB   6

#define TMCR1   _SFR_MEM8(0x12E)
#define TMPIS0  0
#define TMPIS1  1
#define TMPIS2  2
#define TMSCS   3
#define TMCIM   4

/* Reserved [0x12F..0x144] */

#define CRCCR   _SFR_MEM8(0x145)
#define CRCRS   0
#define REFLI   1
#define REFLO   2

#define CRCDOR  _SFR_MEM8(0x146)

/* Reserved [0x147..0x150] */

#define LFDSRR  _SFR_MEM8(0x151)
#define SRCDT0  0
#define SRCDT1  1
#define SRCDT2  2
#define SRCDT3  3
#define SRCDT4  4
#define SRCDT5  5
#define SRCDT6  6
#define SRCDT7  7

#define DBCR    _SFR_MEM8(0x152)
#define DBMD    0
#define DBCS    1
#define DBTMS   2
#define DBHA    3

#define DBTC    _SFR_MEM8(0x153)

#define DBENB   _SFR_MEM8(0x154)

#define DBENC   _SFR_MEM8(0x155)

#define DBGSW   _SFR_MEM8(0x156)
#define DBGGS0  0
#define DBGGS1  1
#define DBGGS2  2
#define DBGGS3  3
#define CPBFOS0 4
#define CPBFOS1 5
#define CPBF    6
#define ATEST   7

#define SFFR    _SFR_MEM8(0x157)
#define RFL0    0
#define RFL1    1
#define RFL2    2
#define RFC     3
#define TFL0    4
#define TFL1    5
#define TFL2    6
#define TFC     7

#define SFIR    _SFR_MEM8(0x158)
#define RIL0    0
#define RIL1    1
#define RIL2    2
#define SRIE    3
#define TIL0    4
#define TIL1    5
#define TIL2    6
#define STIE    7

#define EECR2   _SFR_MEM8(0x159)
#define EEBRE   0
#define E2CIM   1
#define E2FF    6
#define E2CF    7

/* Reserved [0x15A] */

#define EEST    _SFR_MEM8(0x15B)
#define EESYN0  0
#define EESYN1  1
#define EESYN2  2
#define EESYN3  3

/* Reserved [0x15C..0x15F] */

#define LFRSFR  _SFR_MEM8(0x160)
#define LFRSMF  0
#define LFRSTO1 1
#define LFRSTO2 2
#define LFRSTO3 3

#define PCIFR   _SFR_MEM8(0x161)
#define PCIF0   0
#define PCIF1   1

#define T0CR    _SFR_MEM8(0x162)
#define T0PS0   0
#define T0PS1   1
#define T0PS2   2
#define T0IE    3
#define T0PR    4

/* Reserved [0x163] */

#define DBEND   _SFR_MEM8(0x164)

#define TPCR1   _SFR_MEM8(0x165)
#define TPQPLM  2
#define TPBR    4
#define TPDFCP0 5
#define TPDFCP1 6
#define TPMODE  7

#define TPIMR   _SFR_MEM8(0x166)
#define TPIM    0
#define TPFTIM  1
#define TPNFTIM 2
#define TPBERIM 3

#define TPDCR1  _SFR_MEM8(0x167)
#define TPDCL10 0
#define TPDCL11 1
#define TPDCL12 2
#define TPDCL13 3
#define TPDCL14 4
#define TPDCL15 5

#define TPDCR2  _SFR_MEM8(0x168)
#define TPDCL20 0
#define TPDCL21 1
#define TPDCL22 2
#define TPDCL23 3
#define TPDCL24 4
#define TPDCL25 5

#define TPDCR3  _SFR_MEM8(0x169)
#define TPDCL30 0
#define TPDCL31 1
#define TPDCL32 2
#define TPDCL33 3
#define TPDCL34 4
#define TPDCL35 5

#define TPDCR4  _SFR_MEM8(0x16A)
#define TPDCL40 0
#define TPDCL41 1
#define TPDCL42 2
#define TPDCL43 3
#define TPDCL44 4
#define TPDCL45 5

#define TPDCR5  _SFR_MEM8(0x16B)
#define TPDCL50 0
#define TPDCL51 1
#define TPDCL52 2
#define TPDCL53 3
#define TPDCL54 4
#define TPDCL55 5

#define TPECR1  _SFR_MEM8(0x16C)
#define TPECL10 0
#define TPECL11 1
#define TPECL12 2
#define TPECL13 3
#define TPECL14 4
#define TPECL15 5
#define TPECL16 6
#define TPECL17 7

#define TPECR2  _SFR_MEM8(0x16D)
#define TPECL20 0
#define TPECL21 1
#define TPECL22 2
#define TPECL23 3
#define TPECL24 4
#define TPECL25 5
#define TPECL26 6
#define TPECL27 7

#define TPECR3  _SFR_MEM8(0x16E)
#define TPECL30 0
#define TPECL31 1
#define TPECL32 2
#define TPECL33 3
#define TPECL34 4
#define TPECL35 5
#define TPECL36 6
#define TPECL37 7

#define TPECR4  _SFR_MEM8(0x16F)
#define TPECL40 0
#define TPECL41 1
#define TPECL42 2
#define TPECL43 3
#define TPECL44 4
#define TPECL45 5
#define TPECL46 6
#define TPECL47 7

#define TPECMR  _SFR_MEM8(0x170)
#define TPECM10 0
#define TPECM11 1
#define TPECM20 2
#define TPECM21 3
#define TPECM30 4
#define TPECM31 5
#define TPECM40 6
#define TPECM41 7

#define TPCR3   _SFR_MEM8(0x171)
#define TPTD    0
#define TPRD    1
#define TPTLIW  2
#define TPRCD   5

#define TPCR4   _SFR_MEM8(0x172)
#define TPBCCS0 0
#define TPBCCS1 1
#define TPBCCS2 2
#define TPBCCS3 3
#define TPBCM   4

#define TPCR5   _SFR_MEM8(0x173)
#define TPMUD0  0
#define TPMUD1  1
#define TPMUD2  2
#define TPMD0   4
#define TPMD1   5
#define TPMD2   6

#define LFRSMR  _SFR_MEM8(0x174)
#define LFRSM0  0
#define LFRSM1  1
#define LFRSM2  2
#define LFRSM3  3
#define LFRSCM  4
#define LFRSFD  5
#define LFRSD0  6
#define LFRSD1  7

/* Reserved [0x175..0x17E] */

#define AESDPR  _SFR_MEM8(0x17F)

#define AESKR   _SFR_MEM8(0x180)

#define AESDR   _SFR_MEM8(0x181)

#define GPIOR3  _SFR_MEM8(0x182)

#define GPIOR4  _SFR_MEM8(0x183)

#define GPIOR5  _SFR_MEM8(0x184)

#define GPIOR6  _SFR_MEM8(0x185)

#define PHBCRR  _SFR_MEM8(0x186)
#define PHBCR0  0
#define PHBCR1  1
#define PHBCR2  2
#define PHBCR3  3
#define PHBCR4  4
#define PHBCR5  5
#define PHBCR6  6
#define PHBCR7  7

#define LFRSCR  _SFR_MEM8(0x187)
#define LFRSA0  0
#define LFRSA1  1
#define LFRSA2  2
#define LFRSMS  3
#define LFRSIM  4
#define LFRSRS  5

/* Combine LFRSC1L and LFRSC1H */
#define LFRSC1  _SFR_MEM16(0x188)

#define LFRSC1L _SFR_MEM8(0x188)
#define LFRSC1H _SFR_MEM8(0x189)

/* Combine LFRSC2L and LFRSC2H */
#define LFRSC2  _SFR_MEM16(0x18A)

#define LFRSC2L _SFR_MEM8(0x18A)
#define LFRSC2H _SFR_MEM8(0x18B)

/* Combine LFRSC3L and LFRSC3H */
#define LFRSC3  _SFR_MEM16(0x18C)

#define LFRSC3L _SFR_MEM8(0x18C)
#define LFRSC3H _SFR_MEM8(0x18D)

#define LFCPR   _SFR_MEM8(0x18E)
#define LFCALP  0
#define LFCALRY 1
#define LFCPCE  7

#define LFIMR   _SFR_MEM8(0x18F)
#define LFSYDIM 0
#define LFDEIM  1
#define LFEOIM  2

#define PHID00  _SFR_MEM8(0x190)
#define ID000   0
#define ID001   1
#define ID002   2
#define ID003   3
#define ID004   4
#define ID005   5
#define ID006   6
#define ID007   7

#define PHID01  _SFR_MEM8(0x191)
#define ID010   0
#define ID011   1
#define ID012   2
#define ID013   3
#define ID014   4
#define ID015   5
#define ID016   6
#define ID017   7

#define PHID02  _SFR_MEM8(0x192)
#define ID020   0
#define ID021   1
#define ID022   2
#define ID023   3
#define ID024   4
#define ID025   5
#define ID026   6
#define ID027   7

#define PHID03  _SFR_MEM8(0x193)
#define ID030   0
#define ID031   1
#define ID032   2
#define ID033   3
#define ID034   4
#define ID035   5
#define ID036   6
#define ID037   7

#define PHID0L  _SFR_MEM8(0x194)
#define ID0FS0  0
#define ID0FS1  1
#define ID0FS2  2
#define ID0FS3  3
#define ID0FS4  4
#define ID0FS5  5

#define PHID10  _SFR_MEM8(0x195)
#define ID100   0
#define ID101   1
#define ID102   2
#define ID103   3
#define ID104   4
#define ID105   5
#define ID106   6
#define ID107   7

#define PHID11  _SFR_MEM8(0x196)
#define ID110   0
#define ID111   1
#define ID112   2
#define ID113   3
#define ID114   4
#define ID115   5
#define ID116   6
#define ID117   7

#define PHID12  _SFR_MEM8(0x197)
#define ID120   0
#define ID121   1
#define ID122   2
#define ID123   3
#define ID124   4
#define ID125   5
#define ID126   6
#define ID127   7

#define PHID13  _SFR_MEM8(0x198)
#define ID130   0
#define ID131   1
#define ID132   2
#define ID133   3
#define ID134   4
#define ID135   5
#define ID136   6
#define ID137   7

#define PHID1L  _SFR_MEM8(0x199)
#define ID1FS0  0
#define ID1FS1  1
#define ID1FS2  2
#define ID1FS3  3
#define ID1FS4  4
#define ID1FS5  5

#define PHIDFR  _SFR_MEM8(0x19A)
#define RDFS0   0
#define RDFS1   1
#define RDFS2   2
#define RDFS3   3
#define RDFS4   4
#define RDFS5   5
#define RDFS6   6
#define RDFS7   7

#define LFSYSY0 _SFR_MEM8(0x19B)

#define LFSYSY1 _SFR_MEM8(0x19C)

#define LFSYSY2 _SFR_MEM8(0x19D)

#define LFSYSY3 _SFR_MEM8(0x19E)

#define LFSYLE  _SFR_MEM8(0x19F)

#define LFSTOP  _SFR_MEM8(0x1A0)
#define LFSTSY0 0
#define LFSTSY1 1
#define LFSTSY2 2
#define LFSTSY3 3
#define LFSTL0  4
#define LFSTL1  5
#define LFSTL2  6

#define PHTCOR  _SFR_MEM8(0x1A1)

#define PHTCMR  _SFR_MEM8(0x1A2)
#define PHPS0   0
#define PHPS1   1
#define PHPS2   2
#define PHCRM   3
#define PHCIM   4
#define PHRES   5
#define PHSM    6
#define PHTE    7

/* Reserved [0x1A3] */

#define PHTBLR  _SFR_MEM8(0x1A4)
#define PHTBL0  0
#define PHTBL1  1
#define PHTBL2  2
#define PHTBL3  3
#define PHTBL4  4
#define PHTBL5  5
#define PHTBL6  6
#define PHTBL7  7

#define PHDFR   _SFR_MEM8(0x1A5)
#define PHDF0   0
#define PHDF1   1
#define PHDF2   2
#define PHDF3   3
#define PHDF4   4
#define PHDF5   5
#define PHDF6   6
#define PHDF7   7

#define PHTEMR  _SFR_MEM8(0x1A6)
#define ID0EM   0
#define ID1EM   1
#define IDFEM   2
#define DFEM    3
#define TBLEM   4
#define FLEM    5
#define EOFEM   6
#define PHCOF   7

#define LFQC3   _SFR_MEM8(0x1A7)
#define LFQS30  0
#define LFQS31  1
#define LFQS32  2
#define LFQS33  3
#define LFCS30  4
#define LFCS31  5
#define LFCS32  6
#define LFCS33  7

#define LFQC2   _SFR_MEM8(0x1A8)
#define LFQS20  0
#define LFQS21  1
#define LFQS22  2
#define LFQS23  3
#define LFCS20  4
#define LFCS21  5
#define LFCS22  6
#define LFCS23  7

#define LFQC1   _SFR_MEM8(0x1A9)
#define LFQS10  0
#define LFQS11  1
#define LFQS12  2
#define LFQS13  3
#define LFCS10  4
#define LFCS11  5
#define LFCS12  6
#define LFCS13  7

/* Reserved [0x1AA..0x1D0] */

#define PHFS    _SFR_MEM8(0x1D1)
#define FLRF    0
#define FUFL    1
#define FOFL    2

#define PHFL    _SFR_MEM8(0x1D2)
#define FLS0    0
#define FLS1    1
#define FLS2    2
#define FLS3    3
#define FLS4    4
#define FLS5    5
#define PHCLR   7

#define PHFWP   _SFR_MEM8(0x1D3)
#define FWP0    0
#define FWP1    1
#define FWP2    2
#define FWP3    3
#define FWP4    4
#define FWP5    5

#define PHFRP   _SFR_MEM8(0x1D4)
#define FRP0    0
#define FRP1    1
#define FRP2    2
#define FRP3    3
#define FRP4    4
#define FRP5    5

#define PHFD    _SFR_MEM8(0x1D5)

#define PHFI    _SFR_MEM8(0x1D6)
#define FLIM    0
#define ERIM    1

#define PHFC    _SFR_MEM8(0x1D7)
#define FLC0    0
#define FLC1    1
#define FLC2    2
#define FLC3    3
#define FLC4    4
#define FLC5    5
#define FFMSB   6
#define DRA     7

#define PHIMR   _SFR_MEM8(0x1D8)
#define PHTBLIM 1
#define PHDFIM  2
#define PHIDFIM 3
#define PHID0IM 4
#define PHID1IM 5

#define PHCRCR  _SFR_MEM8(0x1D9)
#define CRCFR   2
#define CRCMSB  3
#define CRCSE0  4
#define CRCSE1  5
#define STREN   6
#define CRCEN   7

/* Combine PHCSTL and PHCSTH */
#define PHCST   _SFR_MEM16(0x1DA)

#define PHCSTL  _SFR_MEM8(0x1DA)
#define PHCSTH  _SFR_MEM8(0x1DB)

/* Combine PHCRPL and PHCRPH */
#define PHCRP   _SFR_MEM16(0x1DC)

#define PHCRPL  _SFR_MEM8(0x1DC)
#define PHCRPH  _SFR_MEM8(0x1DD)

/* Combine PHCSRL and PHCSRH */
#define PHCSR   _SFR_MEM16(0x1DE)

#define PHCSRL  _SFR_MEM8(0x1DE)
#define PHCSRH  _SFR_MEM8(0x1DF)

#define PHCKSR  _SFR_MEM8(0x1E0)
#define FIFO_SW 0

#define PHCKCR  _SFR_MEM8(0x1E1)
#define FIFSCSW 0
#define FRFIFO  5
#define CPM     6
#define CSM     7

/* Reserved [0x1E2] */

#define CMCR    _SFR_MEM8(0x1E3)
#define CMM0    0
#define CMM1    1
#define CMM2    2
#define CCS     3
#define CMONEN  6
#define CMCCE   7

#define CMIMR   _SFR_MEM8(0x1E4)
#define ECIE    0

#define CLPR    _SFR_MEM8(0x1E5)
#define CLKPS0  0
#define CLKPS1  1
#define CLKPS2  2
#define CLTPS0  3
#define CLTPS1  4
#define CLTPS2  5
#define CLPCE   7

#define VMCR    _SFR_MEM8(0x1E6)
#define VMLS0   0
#define VMLS1   1
#define VMLS2   2
#define VMLS3   3
#define VMIM    4
#define VMPS0   5
#define VMPS1   6
#define VMRS    7

/* Reserved [0x1E7..0x1E8] */

#define TWBR    _SFR_MEM8(0x1E9)

#define TWCR    _SFR_MEM8(0x1EA)
#define TWIE    0
#define TWEN    2
#define TWWC    3
#define TWSTO   4
#define TWSTA   5
#define TWEA    6
#define TWINT   7

#define TWSR    _SFR_MEM8(0x1EB)
#define TWPS0   0
#define TWPS1   1
#define TWS0    3
#define TWS1    4
#define TWS2    5
#define TWS3    6
#define TWS4    7

#define TWDR    _SFR_MEM8(0x1EC)

#define TWAR    _SFR_MEM8(0x1ED)
#define TWGCE   0
#define TWA0    1
#define TWA1    2
#define TWA2    3
#define TWA3    4
#define TWA4    5
#define TWA5    6
#define TWA6    7

#define TWAMR   _SFR_MEM8(0x1EE)
#define TWAM0   1
#define TWAM1   2
#define TWAM2   3
#define TWAM3   4
#define TWAM4   5
#define TWAM5   6
#define TWAM6   7

#define PDSCR   _SFR_MEM8(0x1EF)
#define PDSC0   0
#define PDSC1   1
#define PDSC2   2
#define PDSC3   3
#define PDSC4   4

#define TMOCR   _SFR_MEM8(0x1F0)
#define TO1PIS0 0
#define TO1PIS1 1
#define TO2PIS0 2
#define TO2PIS1 3
#define TO3PIS0 4
#define TO3PIS1 5
#define TO4PIS0 6
#define TO4PIS1 7

#define SRCCAL  _SFR_MEM8(0x1F1)



/* Interrupt vectors */
/* Vector 0 is the reset vector */
/* External Interrupt Request 0 */
#define INT0_vect            _VECTOR(1)
#define INT0_vect_num        1

/* External Interrupt Request 1 */
#define INT1_vect            _VECTOR(2)
#define INT1_vect_num        2

/* Pin Change Interrupt Request 0 */
#define PCI0_vect            _VECTOR(3)
#define PCI0_vect_num        3

/* Pin Change Interrupt Request 1 */
#define PCI1_vect            _VECTOR(4)
#define PCI1_vect_num        4

/* Voltage Monitoring Interrupt */
#define VMON_vect            _VECTOR(5)
#define VMON_vect_num        5

/* AVCC Reset Interrupt */
#define AVCCR_vect            _VECTOR(6)
#define AVCCR_vect_num        6

/* AVCC Low Interrupt */
#define AVCCL_vect            _VECTOR(7)
#define AVCCL_vect_num        7

/* Timer0 Interval Interrupt */
#define T0INT_vect            _VECTOR(8)
#define T0INT_vect_num        8

/* Timer/Counter1 Compare Match Interrupt */
#define T1COMP_vect            _VECTOR(9)
#define T1COMP_vect_num        9

/* Timer/Counter1 Overflow Interrupt */
#define T1OVF_vect            _VECTOR(10)
#define T1OVF_vect_num        10

/* Timer/Counter2 Compare Match Interrupt */
#define T2COMP_vect            _VECTOR(11)
#define T2COMP_vect_num        11

/* Timer/Counter2 Overflow Interrupt */
#define T2OVF_vect            _VECTOR(12)
#define T2OVF_vect_num        12

/* Timer/Counter3 Capture Event Interrupt */
#define T3CAP_vect            _VECTOR(13)
#define T3CAP_vect_num        13

/* Timer/Counter3 Compare Match Interrupt */
#define T3COMP_vect            _VECTOR(14)
#define T3COMP_vect_num        14

/* Timer/Counter3 Overflow Interrupt */
#define T3OVF_vect            _VECTOR(15)
#define T3OVF_vect_num        15

/* Timer/Counter4 Capture Event Interrupt */
#define T4CAP_vect            _VECTOR(16)
#define T4CAP_vect_num        16

/* Timer/Counter4 Compare Match Interrupt */
#define T4COMP_vect            _VECTOR(17)
#define T4COMP_vect_num        17

/* Timer/Counter4 Overflow Interrupt */
#define T4OVF_vect            _VECTOR(18)
#define T4OVF_vect_num        18

/* Timer/Counter5 Compare Match Interrupt */
#define T5COMP_vect            _VECTOR(19)
#define T5COMP_vect_num        19

/* Timer/Counter5 Overflow Interrupt */
#define T5OVF_vect            _VECTOR(20)
#define T5OVF_vect_num        20

/* SPI Serial Transfer Complete Interrupt */
#define SPI_vect            _VECTOR(21)
#define SPI_vect_num        21

/* SPI Rx Buffer Interrupt */
#define SRX_FIFO_vect            _VECTOR(22)
#define SRX_FIFO_vect_num        22

/* SPI Tx Buffer Interrupt */
#define STX_FIFO_vect            _VECTOR(23)
#define STX_FIFO_vect_num        23

/* Sequencer State Machine Interrupt */
#define SSM_vect            _VECTOR(24)
#define SSM_vect_num        24

/* Data FIFO fill level reached Interrupt */
#define DFFLR_vect            _VECTOR(25)
#define DFFLR_vect_num        25

/* Data FIFO overflow or underflow error Interrupt */
#define DFOUE_vect            _VECTOR(26)
#define DFOUE_vect_num        26

/* RSSI/Preamble FIFO fill level reached Interrupt */
#define SFFLR_vect            _VECTOR(27)
#define SFFLR_vect_num        27

/* RSSI/Preamble FIFO overflow or underflow error Interrupt */
#define SFOUE_vect            _VECTOR(28)
#define SFOUE_vect_num        28

/* Tx Modulator Telegram Finish Interrupt */
#define TMTCF_vect            _VECTOR(29)
#define TMTCF_vect_num        29

/* AES Krypto Unit Interrupt */
#define AES_vect            _VECTOR(30)
#define AES_vect_num        30

/* Transponder Mode Interrupt */
#define TPINT_vect            _VECTOR(31)
#define TPINT_vect_num        31

/* Transponder Timeout Error Interrupt */
#define TPTOERR_vect            _VECTOR(32)
#define TPTOERR_vect_num        32

/* LF receiver Identifier 0 Interrupt */
#define LFID0INT_vect            _VECTOR(33)
#define LFID0INT_vect_num        33

/* LF receiver Identifier 1 Interrupt */
#define LFID1INT_vect            _VECTOR(34)
#define LFID1INT_vect_num        34

/* LF receiver Frame End Interrupt */
#define LFFEINT_vect            _VECTOR(35)
#define LFFEINT_vect_num        35

/* LF receiver Bit Count Reached Interrupt */
#define LFBCR_vect            _VECTOR(36)
#define LFBCR_vect_num        36

/* LF receiver PreBurst Detected Interrupt */
#define LFPBD_vect            _VECTOR(37)
#define LFPBD_vect_num        37

/* LF receiver Decoder Error Interrupt */
#define LFDE_vect            _VECTOR(38)
#define LFDE_vect_num        38

/* LF receiver End of Telegram Interrupt */
#define LFEOT_vect            _VECTOR(39)
#define LFEOT_vect_num        39

/* LF receiver Timer Compare Match Interrupt */
#define LFTCOR_vect            _VECTOR(40)
#define LFTCOR_vect_num        40

/* LF receiver RSSI measurement Interrupt */
#define LFRSCO_vect            _VECTOR(41)
#define LFRSCO_vect_num        41

/* Protocol Handler FIFO Fill Level Reached Interrupt */
#define PHFFLR_vect            _VECTOR(42)
#define PHFFLR_vect_num        42

/* Protocol Handler FIFO Overflow or Underflow Error Interrupt */
#define PHFOUE_vect            _VECTOR(43)
#define PHFOUE_vect_num        43

/* External input Clock monitoring Interrupt */
#define EXCM_vect            _VECTOR(44)
#define EXCM_vect_num        44

/* EEPROM Error Correction Interrupt */
#define E2CINT_vect            _VECTOR(45)
#define E2CINT_vect_num        45

/* EEPROM Ready Interrupt */
#define ERDY_vect            _VECTOR(46)
#define ERDY_vect_num        46

/* Store Program Memory Ready */
#define SPMR_vect            _VECTOR(47)
#define SPMR_vect_num        47

/* TWI Interrupt */
#define TWI_vect            _VECTOR(48)
#define TWI_vect_num        48

#define _VECTORS_SIZE 196


/* Constants */

#define SPM_PAGESIZE 32
#define FLASHSTART   0x0000
#define FLASHEND     0xFFFF
#define RAMSTART     0x0200
#define RAMSIZE      1024
#define RAMEND       0x05FF
#define E2START     0
#define E2SIZE      2304
#define E2PAGESIZE  16
#define E2END       0x08FF
#define XRAMEND      RAMEND


/* Fuses */

#define FUSE_MEMORY_SIZE 1

/* Fuse Byte */
#define FUSE_CKDIV8 (unsigned char)~_BV(128)
#define FUSE_DWEN (unsigned char)~_BV(64)
#define FUSE_SPIEN (unsigned char)~_BV(32)
#define FUSE_WDTON (unsigned char)~_BV(16)
#define FUSE_EESAVE (unsigned char)~_BV(8)
#define FUSE_BOOTRST (unsigned char)~_BV(4)
#define FUSE_EEACC (unsigned char)~_BV(2)
#define FUSE_EXTCLKEN (unsigned char)~_BV(1)

/* Lock Bits */
#define __LOCK_BITS_EXIST


/* Signature */
#define SIGNATURE_0 0x1E
#define SIGNATURE_1 0x95
#define SIGNATURE_2 0x69


#endif /* #ifdef _AVR_ATA5702M322_H_INCLUDED */

