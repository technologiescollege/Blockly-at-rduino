#!/usr/bin/env python3

from pymata_aio.pymata_core import PymataCore
from pymata_aio.constants import Constants

import asyncio

async def pin_callback(data):
    print(str(data))

async def latch_callback(data):
    print('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + str(data))

async def latching(my_board):
    """
    Set digital pin 6 as a PWM output and set its output value to 128
    @param my_board: A PymataCore instance
    @return: No Return Value
    """
    # set the pin mode
    # await my_board.set_pin_mode(2, Constants.ANALOG, pin_callback, Constants.CB_TYPE_ASYNCIO)
    await my_board.set_pin_mode(2, Constants.ANALOG)

    await my_board.set_analog_latch(2, Constants.LATCH_GT, 500, latch_callback, Constants.CB_TYPE_ASYNCIO)

    while True:
        await asyncio.sleep(1)
        #value = await my_board.analog_read(2)
        #print(value)


# create a PyMataCore instance and complete the initialization with a call to start()
board = PymataCore()
board.start()

# get the loop, and execute pin6_pwm_128
loop = asyncio.get_event_loop()
loop.run_until_complete(latching(board))