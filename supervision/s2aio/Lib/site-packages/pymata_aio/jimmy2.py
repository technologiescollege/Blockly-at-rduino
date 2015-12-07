from pymata_aio.pymata3 import PyMata3
from pymata_aio.constants import Constants
import time

value = {}


def my_callback(data):
    global value
    pin = data[0]
    value[pin] = (data[1])

def latch_callback(data):
    print(str(data))
    print(time.ctime(int(data[2])))

board = PyMata3(5)
board.set_pin_mode(5, Constants.ANALOG, my_callback)
board.set_pin_mode(2, Constants.ANALOG)

board.set_analog_latch(2, Constants.LATCH_GT, 500, latch_callback)

while True:
    print(value)
    board.sleep(5)
