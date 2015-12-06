#!/usr/bin/env python3
"""
Created on April 28 11:39:15 2015

@author: Alan Yorinks
Copyright (c) 2015 Alan Yorinks All right reserved.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public
License as published by the Free Software Foundation; either
version 3 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
"""

import argparse
import asyncio
import configparser
import os
import os.path
import signal
import sys
import webbrowser

from aiohttp import web
from pymata_aio.constants import Constants
from pymata_aio.pymata_core import PymataCore


# noinspection PyUnusedLocal
class S2AIO:
    def __init__(self, client='scratch', language='1', com_port=None, base_path=None,
                 version_request=False):
        """
        This is the constructor for the s2aio. Establish somme class variables for use
        :param client: Client specifier Scratch or Snap!
        :param com_port: Arduino com port
        :return: None
        """

        # establish initial base_path - where s2aio lives
        self.base_path = base_path

        # if not base path was specified, try to establish one
        if not self.base_path:
            # get all the paths
            path = sys.path

            # get the prefix
            prefix = sys.prefix
            for p in path:
                # make sure the prefix is in the path to avoid false positives
                if prefix in p:
                    # look for the configuration directory
                    s_path = p + '/s2aio/configuration'
                    if os.path.isdir(s_path):
                        # found it, set the base path
                        self.base_path = p + '/s2aio'

        # get version info if requested
        if version_request:
            print()
            print('s2aio version 1.6 - 29 Nov 2015')
            print('Python path = ' + self.base_path)
            sys.exit(0)

        if not self.base_path:
            print('Cannot locate s2aio configuration directory.')
            sys.exit(0)

        # grab the config file and get it ready for parsing
        config = configparser.ConfigParser()
        config_file_path = str(self.base_path + '/configuration/configuration.cfg')
        config.read(config_file_path, encoding="utf8")

        # parse the file and place the translation information into the appropriate variable
        self.ln_languages = config.get('translation_lists', 'ln_languages').split(',')
        self.ln_ENABLE = config.get('translation_lists', 'ln_ENABLE').split(',')
        self.ln_DISABLE = config.get('translation_lists', 'ln_DISABLE').split(',')
        self.ln_INPUT = config.get('translation_lists', 'ln_INPUT').split(',')
        self.ln_OUTPUT = config.get('translation_lists', 'ln_OUTPUT').split(',')
        self.ln_PWM = config.get('translation_lists', 'ln_PWM').split(',')
        self.ln_SERVO = config.get('translation_lists', 'ln_SERVO').split(',')
        self.ln_TONE = config.get('translation_lists', 'ln_TONE').split(',')
        self.ln_SONAR = config.get('translation_lists', 'ln_SONAR').split(',')
        self.ln_OFF = config.get('translation_lists', 'ln_OFF').split(',')
        self.ln_ON = config.get('translation_lists', 'ln_ON').split(',')

        self.scratch_executable = config.get('scratch_info', 'scratch_executable')
        if self.scratch_executable == 'default':
            if sys.platform.startswith('win32'):
                self.scratch_executable = '"C:/Program Files (x86)/Scratch 2/Scratch 2.exe"'
            else:
                self.scratch_executable = '"/opt/Scratch 2/bin/Scratch 2"'

        scratch_block_language_dict = {'1': 's2aio_base.sb2', '2': 's2aio_base_zh_CN.sb2',
                                       '3': 's2aio_base_zh_TW.sb2', '4': 's2aio_base_NL.sb2',
                                       '5': 's2aio_base_FR.sb2', '6': 's2aio_base_DE.sb2',
                                       '7': 's2aio_base_GR.sb2', '8': 's2aio_base_KO.sb2',
                                       '9': 's2aio_base_IT.sb2', '10': 's2aio_base_PT.sb2',
                                       '11': 's2aio_base_ES.sb2'}

        self.scratch_language = config.get('scratch_info', 'scratch_language')
        self.snap_url = config.get('scratch_info', 'snap_url')

        self.windows_wait_time = int(config.get('scratch_info', 'windows_wait_time'))

        self.scratch_project = self.base_path + '/ScratchFiles/ScratchProjects/' + scratch_block_language_dict[language]

        self.client = client

        # arduino com_port to use
        self.com_port = com_port

        # scratch command
        self.command = None

        # HTTP reply to poll request. It is built as needed
        self.poll_reply = ""

        # used by poll watchdog timer to know when polling stops
        self.poll_time_stamp = 0.0

        # lists of digital pin capabilities
        # These lists contain the pins numbers that support the capability
        self.input_capable = []
        self.output_capable = []
        self.analog_capable = []
        self.pwm_capable = []
        self.servo_capable = []
        self.i2c_capable = []

        # this contains the numeric "A" (A0, A1..) channel values supported by the board
        self.analog_channel = []

        # this is the total number of pins supported by the connected arduino
        self.num_digital_pins = 0

        # for Snap - a dictionary of pins with their latest values
        self.digital_data = {}
        self.analog_data = {}

        # save last problem reported for snap!
        self.last_problem = ""

        # pymata-aio instance
        self.board = None

        self.loop = None

    async def kick_off(self, my_loop):
        """
        After s2aio is instantiated, this method must be called to start the HTTP server,
        instantiate tye pymata_core interface to the arduino board, open Scratch and start
        the polling watchdog timer to detect when Scratch stops polling.

        :param my_loop: The asyncio event loop
        :return: A reference to this server
        """
        self.loop = my_loop
        # noinspection PyBroadException
        try:
            # instantiate the arduino interface
            self.board = PymataCore(com_port=self.com_port)
            await self.board.start_aio()

            # populate the arduino pin capability lists
            await self.get_pin_capabilities()

            # start up the HTTP server
            app = web.Application(loop=my_loop)
            srv = await my_loop.create_server(app.make_handler(), '127.0.0.1', 50209)

            # start scratch if specified
            # open to a specified project

            if self.client == 'scratch':
                if self.scratch_executable and self.scratch_project:
                    # noinspection PyPep8
                    if sys.platform.startswith('win32'):
                        os_string = "start /b " + self.scratch_executable + ' ' + self.scratch_project
                        await asyncio.sleep(self.windows_wait_time)
                        os.system(os_string)
                    else:
                        # noinspection PyPep8
                        os_string = 'nohup ' + self.scratch_executable + ' ' + self.scratch_project + ' ' + ' > /dev/null 2>&1 &'
                        os.system(os_string)
                elif self.scratch_executable and not self.scratch_project:
                    os_string = 'nohup ' + self.scratch_executable + '> /dev/null 2>&1 &'
                    os.system(os_string)
                else:
                    print('You must provide scratch excutable information')
            elif self.client == 'snap':
                new = 2
                webbrowser.open(self.snap_url, new=new)
                await asyncio.sleep(self.windows_wait_time)
            else:
                # no client specified, just start s2aio and wait for the user to start the client of choice
                pass

            # Scratch command handlers
            app.router.add_route('GET', '/digital_pin_mode/{enable}/{pin}/{mode}', self.setup_digital_pin)
            app.router.add_route('GET', '/analog_pin_mode/{enable}/{pin}', self.setup_analog_pin)
            app.router.add_route('GET', '/poll', self.poll)
            app.router.add_route('GET', '/digital_write/{pin}/{value}', self.digital_write)
            app.router.add_route('GET', '/analog_write/{pin}/{value}', self.analog_write)
            app.router.add_route('GET', '/play_tone/{pin}/{frequency}/{duration}', self.play_tone)
            app.router.add_route('GET', '/set_servo_position/{pin}/{position}', self.set_servo_position)
            app.router.add_route('GET', '/tone_off/{pin}', self.tone_off)

            # Snap requires reporters to be supported
            app.router.add_route('GET', '/digital_read/{pin}', self.digital_read)
            app.router.add_route('GET', '/analog_read/{pin}', self.analog_read)
            app.router.add_route('GET', '/problem', self.problem)

            if self.client == 'scratch':
                await self.poll_watchdog()
            else:
                await self.keep_alive()
            return srv
        except:
            pass

    async def get_pin_capabilities(self):
        """
        This method retrieves the Arduino pin capability and analog map reports.
        For each digital pin mode, a list of valid pins is constructed,
        A total pin count is calculated and in addition,
        a list of valid analog input channels is constructed.
        :return: None
        """
        # get the capability report
        pin_capabilities = await self.board.get_capability_report()

        # initialize the total pin count to o
        pin_count = 0

        pin_data = []

        # Each set of digital pin capabilities is delimited by the value of 127
        # Accumulate all of the capabilities into a list for the current pin
        for x in pin_capabilities:
            if x != 127:
                pin_data.append(x)
                continue
            # Found a delimiter, populate the specific capability lists with this pin.
            # Each capability contains 2 bytes. The first is the capability and the second is the
            # number of bits of data resolution for the pin. The resolution is ignored
            else:
                pin__x_capabilities = pin_data[::2]
                for y in pin__x_capabilities:
                    if y == 0:
                        self.input_capable.append(pin_count)
                    elif y == 1:
                        self.output_capable.append(pin_count)
                    elif y == 2:
                        self.analog_capable.append(pin_count)
                    elif y == 3:
                        self.pwm_capable.append(pin_count)
                    elif y == 4:
                        self.servo_capable.append(pin_count)
                    elif y == 6:
                        self.i2c_capable.append(pin_count)
                    else:
                        print('Unknown Pin Type ' + y)
                # clear the pin_data list for the next pin and bump up the pin count
                pin_data = []
                # add an entry into the digital data dictionary
                self.digital_data[pin_count] = 0

                pin_count += 1
        # Done with digital pin discovery, save the pin count
        self.num_digital_pins = pin_count

        # Get analog channel data and create the analog_channel list
        analog_pins = await self.board.get_analog_map()
        for x in analog_pins:
            if x != 127:
                self.analog_channel.append(x)
                self.analog_data[x] = 0

    async def poll(self, request):
        """
        A poll request was received from Scratch. This method sends the HTTP reply to Scratch.
        The reply is built dynamically for each reporter, including error messages, as data
        is received from the Arduino.
        :param request: The HTTP request
        :return: HTTP reply
        """
        # refresh the poll watch dog timer
        self.poll_time_stamp = self.loop.time()

        # save the reply to a temporary variable
        total_reply = self.poll_reply

        # clear the poll reply string for the next reply set
        self.poll_reply = ""

        # send the HTTP response
        return web.Response(headers={"Access-Control-Allow-Origin": "*"},
                            content_type="text/html", charset="ISO-8859-1", text=total_reply)

    async def setup_digital_pin(self, request):
        """
        This method processes the Scratch "Digital Pin" Block that establishes the mode for the pin
        :param request: The HTTP request
        :return: HTTP reply
        """

        # clear out any residual problem strings
        await self.set_problem('problem 0\n')

        # get the pin string from the block
        pin = request.match_info['pin']

        # convert pin string to integer.
        try:
            pin = int(pin)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 1-1\n')
            return web.Response(body="ok".encode('utf-8'))

        # validate that the pin is within the pin count range
        # pin numbers start with 0
        if pin >= self.num_digital_pins:
            await self.set_problem('problem 1-2\n')
            return web.Response(body="ok".encode('utf-8'))

        # Is the user enabling or disabling the pin? Get the 'raw' value and
        # translate it.
        enable = request.match_info['enable']
        enable = await self.check_cmd_enable_disable(enable)

        # retrieve mode from command
        mode = request.match_info['mode']
        mode = await self.check_cmd_digital_mode(mode)

        if enable == 'Enable':
            # validate the mode for this pin
            if mode == 'Input':
                if pin in self.input_capable:
                    # send the pin mode to the arduino
                    await self.board.set_pin_mode(pin, Constants.INPUT,
                                                  self.digital_input_callback, Constants.CB_TYPE_ASYNCIO)
                else:
                    # this pin does not support input mode
                    await self.set_problem('problem 1-3\n')
            elif mode == 'Output':
                if pin in self.output_capable:
                    # send the pin mode to the arduino
                    await self.board.set_pin_mode(pin, Constants.OUTPUT)
                else:
                    # this pin does not support output mode
                    await self.set_problem('problem 1-4\n')
            elif mode == 'PWM':
                if pin in self.pwm_capable:
                    # send the pin mode to the arduino
                    await self.board.set_pin_mode(pin, Constants.PWM)
                else:
                    # this pin does not support output mode
                    await self.set_problem('problem 1-5\n')
            elif mode == 'Servo':
                if pin in self.servo_capable:
                    # send the pin mode to the arduino
                    await self.board.set_pin_mode(pin, Constants.SERVO)
                else:
                    # this pin does not support output mode
                    await self.set_problem('problem 1-6\n')
            elif mode == 'Tone':
                if pin in self.servo_capable:
                    # send the pin mode to the arduino
                    await self.board.set_pin_mode(pin, Constants.OUTPUT)
                else:
                    # this pin does not support output mode
                    await self.set_problem('problem 1-7\n')
            elif mode == 'SONAR':
                if pin in self.input_capable:
                    # send the pin mode to the arduino
                    await self.board.sonar_config(pin, pin, self.digital_input_callback, Constants.CB_TYPE_ASYNCIO)
                else:
                    # this pin does not support output mode
                    await self.set_problem('problem 1-8\n')
            else:
                await self.set_problem('problem 1-9\n')
        # must be disable
        else:
            pin_state = await self.board.get_pin_state(pin)
            if pin_state[1] != Constants.INPUT:
                await self.set_problem('problem 1-10\n')
            else:
                # disable the pin
                await self.board.disable_digital_reporting(pin)

        return web.Response(body="ok".encode('utf-8'))

    async def setup_analog_pin(self, request):
        """
        This method validates and configures a pin for analog input
        :param request:
        :return:
        """
        await self.set_problem('problem 0\n')

        # get the pin string from the block
        pin = request.match_info['pin']

        # convert pin string to integer.
        try:
            pin = int(pin)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 2-1\n')
            return web.Response(body="ok".encode('utf-8'))

        # validate that pin in the analog channel list
        # pin numbers start with 0
        if pin not in self.analog_channel:
            await self.set_problem('problem 2-2\n')
            return web.Response(body="ok".encode('utf-8'))

        # Is the user enabling or disabling the pin? Get the 'raw' value and
        # translate it.
        enable = request.match_info['enable']
        enable = await self.check_cmd_enable_disable(enable)

        if enable == 'Enable':
            await self.board.set_pin_mode(pin, Constants.ANALOG, self.analog_input_callback, Constants.CB_TYPE_ASYNCIO)
            return web.Response(body="ok".encode('utf-8'))
        else:
            await self.board.disable_analog_reporting(pin)
            return web.Response(body="ok".encode('utf-8'))

    async def check_cmd_enable_disable(self, command):
        """
        This method provides translation for enable/disable
        :param command: Language specific value for enable
        :return: English translation
        """
        if command in self.ln_ENABLE:
            return 'Enable'
        elif command in self.ln_DISABLE:
            return 'Disable'
        else:
            return 'invalid'

    # noinspection PyPep8Naming
    async def check_cmd_digital_mode(self, command):
        """
        This method provides translation for the digital mode.
        :param command: Mode in native language
        :return: Mode in english
        """
        if command in self.ln_INPUT:
            return 'Input'
        if command in self.ln_OUTPUT:
            return 'Output'
        if command in self.ln_PWM:
            return 'PWM'
        if command in self.ln_SERVO:
            return 'Servo'
        if command in self.ln_TONE:
            return 'Tone'
        if command in self.ln_SONAR:
            return 'SONAR'

    async def digital_write(self, request):
        """
        This method perform a digital write
        :param request: HTTP request
        :return:
        """
        # clear out any residual problem strings
        await self.set_problem('problem 0\n')

        # get the pin string from the block
        pin = request.match_info['pin']

        try:
            pin = int(pin)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 3-1\n')
            return web.Response(body="ok".encode('utf-8'))

        pin = int(request.match_info['pin'])
        pin_state = await self.board.get_pin_state(pin)
        if len(pin_state) == 1:
            await self.set_problem('problem 3-2\n')
            return web.Response(body="ok".encode('utf-8'))

        if pin_state[1] != Constants.OUTPUT:
            await self.set_problem('problem 3-3\n')
            return web.Response(body="ok".encode('utf-8'))

        value = int(request.match_info['value'])
        await self.board.digital_write(pin, value)
        return web.Response(body="ok".encode('utf-8'))

    async def analog_write(self, request):
        """
        This method performs an analog write (pwm)
        :param request: HTTP request
        :return: HTTP reply
        """
        # clear out any residual problem strings
        await self.set_problem('problem 0\n')
        # get the pin string from the block
        pin = request.match_info['pin']

        try:
            pin = int(pin)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 4-1\n')
            return web.Response(body="ok".encode('utf-8'))

        pin = int(request.match_info['pin'])
        pin_state = await self.board.get_pin_state(pin)
        if len(pin_state) == 1:
            await self.set_problem('problem 4-2\n')
            return web.Response(body="ok".encode('utf-8'))

        if pin_state[1] != Constants.PWM:
            await self.set_problem('problem 4-3\n')
            return web.Response(body="ok".encode('utf-8'))

        value = request.match_info['value']
        try:
            value = int(value)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 4-4\n')
            return web.Response(body="ok".encode('utf-8'))

        # validate range of value
        if 0 <= value <= 255:
            await self.board.analog_write(pin, value)
        else:
            await self.set_problem('problem 4-5\n')
        return web.Response(body="ok".encode('utf-8'))

    async def play_tone(self, request):
        """
        This method will play a tone using the Arduino tone library. It requires FirmataPlus
        :param request:The HTTP request
        :return: HTTP response
        """
        # clear out any residual problem strings
        await self.set_problem('problem 0\n')

        # get the pin string from the block
        pin = request.match_info['pin']

        try:
            pin = int(pin)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 5-1\n')
            return web.Response(body="ok".encode('utf-8'))

        pin_state = await self.board.get_pin_state(pin)
        if len(pin_state) == 1:
            await self.set_problem('problem 5-2\n')
            return web.Response(body="ok".encode('utf-8'))

        if pin_state[1] != Constants.OUTPUT:
            await self.set_problem('problem 5-3\n')
            return web.Response(body="ok".encode('utf-8'))

        frequency = request.match_info['frequency']

        try:
            frequency = int(frequency)
        except ValueError:
            # frequency Must Be Specified as an Integer
            await self.set_problem('problem 5-4\n')
            return web.Response(body="ok".encode('utf-8'))

        duration = request.match_info['duration']

        try:
            duration = int(duration)
        except ValueError:
            # frequency Must Be Specified as an Integer
            await self.set_problem('problem 5-5\n')
            return web.Response(body="ok".encode('utf-8'))

        await self.board.play_tone(pin, Constants.TONE_TONE, frequency, duration)
        return web.Response(body="ok".encode('utf-8'))

    async def tone_off(self, request):
        # clear out any residual problem strings
        await self.set_problem('problem 0\n')

        # get the pin string from the block
        pin = request.match_info['pin']

        try:
            pin = int(pin)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 6-1\n')
            return web.Response(body="ok".encode('utf-8'))

        pin_state = await self.board.get_pin_state(pin)
        if len(pin_state) == 1:
            await self.set_problem('problem 6-2\n')
            return web.Response(body="ok".encode('utf-8'))

        if pin_state[1] != Constants.OUTPUT:
            self.poll_reply += 'problem 6-3\n'
            return web.Response(body="ok".encode('utf-8'))

        await self.board.play_tone(pin, Constants.TONE_NO_TONE, None, None)
        return web.Response(body="ok".encode('utf-8'))

    async def set_servo_position(self, request):
        """
        This method sets a servo position
        :param request: HTTP request
        :return: HTTP reply
        """
        # clear out any residual problem strings
        await self.set_problem('problem 0\n')

        # get the pin string from the block
        pin = request.match_info['pin']

        try:
            pin = int(pin)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 7-1\n')
            return web.Response(body="ok".encode('utf-8'))

        pin_state = await self.board.get_pin_state(pin)
        if len(pin_state) == 1:
            await self.set_problem('problem 7-2\n')
            return web.Response(body="ok".encode('utf-8'))

        if pin_state[1] != Constants.SERVO:
            await self.set_problem('problem 7-3\n')
            return web.Response(body="ok".encode('utf-8'))

        position = request.match_info['position']

        try:
            position = int(position)
        except ValueError:
            # frequency Must Be Specified as an Integer
            await self.set_problem('problem 7-4\n')
            return web.Response(body="ok".encode('utf-8'))

        if 0 <= position <= 180:
            await self.board.analog_write(pin, position)
        else:
            await self.set_problem('problem 7-5\n')
        return web.Response(body="ok".encode('utf-8'))

    async def digital_input_callback(self, arg):
        """
        This method receives digital data inputs
        :param arg: Index 0 = pin and index 1 = value
        :return: None
        """
        self.poll_reply += 'digital_read/' + str(arg[0]) + ' ' + str(arg[1]) + '\n'
        self.digital_data[arg[0]] = arg[1]

    async def analog_input_callback(self, arg):
        """
        This method receives digital data inputs
        :param arg: Index 0 = pin and index 1 = value
        :return: None
        """
        self.poll_reply += 'analog_read/' + str(arg[0]) + ' ' + str(arg[1]) + '\n'
        self.analog_data[arg[0]] = arg[1]

    async def digital_read(self, request):
        """
        This method is only used by a snap client, since it does not poll
        :param request:
        :return: HTTP reply
        """
        # clear out any residual problem strings
        await self.set_problem('problem 0\n')

        # get the pin string from the block
        pin = request.match_info['pin']

        try:
            pin = int(pin)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 8-1\n')
            return web.Response(body="ok".encode('utf-8'))

        if not (0 <= pin <= self.num_digital_pins):
            await self.set_problem('problem 8-2\n')
            return web.Response(body="ok".encode('utf-8'))

        pin_state = await self.board.get_pin_state(pin)
        if len(pin_state) == 1:
            await self.set_problem('problem 8-3\n')
            return web.Response(body="ok".encode('utf-8'))

        if pin_state[1] != Constants.OUTPUT:
            await self.set_problem('problem 8-3\n')
            return web.Response(body="ok".encode('utf-8'))

        reply = str(self.digital_data[pin]) + '\n'

        # send the HTTP response
        return web.Response(headers={"Access-Control-Allow-Origin": "*"},
                            content_type="text/html", charset="ISO-8859-1", text=reply)

    async def analog_read(self, request):
        """
        This method performs an analog read for a snap client. It is not used by scratch.
        :param request: HTTP request
        :return: HTTP reply
        """
        # clear out any residual problem strings
        await self.set_problem('problem 0\n')

        # get the pin string from the block
        pin = request.match_info['pin']

        try:
            pin = int(pin)
        except ValueError:
            # Pin Must Be Specified as an Integer
            await self.set_problem('problem 9-1\n')
            return web.Response(body="ok".encode('utf-8'))

        pin = int(request.match_info['pin'])

        # validate that pin in the analog channel list
        # pin numbers start with 0
        if pin not in self.analog_channel:
            await self.set_problem('problem 9-2\n')
            return web.Response(body="ok".encode('utf-8'))

        pin_state = await self.board.get_pin_state(pin)
        if len(pin_state) == 1:
            await self.set_problem('problem 9-3n')
            return web.Response(body="ok".encode('utf-8'))

        reply = str(self.analog_data[pin]) + '\n'

        # send the HTTP response
        return web.Response(headers={"Access-Control-Allow-Origin": "*"},
                            content_type="text/html", charset="ISO-8859-1", text=reply)

    async def problem(self, request):
        """
        This method returns the last saved problem. It is used only by snap.
        :param request: HTTP request
        :return: HTTP reply
        """
        problem = self.last_problem.split(' ')

        # snap can return an empty problem so we need to compensate
        try:
            return web.Response(headers={"Access-Control-Allow-Origin": "*"},
                                content_type="text/html", charset="ISO-8859-1", text=problem[1])
        except IndexError:
            return web.Response(body="ok".encode('utf-8'))

    async def poll_watchdog(self):
        """
        This method is enabled for scratch clients. It monitors to see if polls are no longer being
        sent, and if so, shuts down the server. It waits 2 seconds before shutting down.
        :return: None
        """
        await asyncio.sleep(2)
        while True:
            await asyncio.sleep(1)
            current_time = self.loop.time()
            if current_time - self.poll_time_stamp > 1:
                await self.board.send_reset()
                for t in asyncio.Task.all_tasks(self.loop):
                    t.cancel()
                self.loop.run_until_complete(asyncio.sleep(.1))
                self.loop.stop()
                self.loop.close()
                sys.exit(0)

    # noinspection PyMethodMayBeStatic
    async def keep_alive(self):
        """
        This method is used to keep the server up and running when not connected to Scratch
        :return:
        """
        while True:
            await asyncio.sleep(1)

    async def set_problem(self, problem):
        """
        This method adds the problem to the poll reply and saves it as last_problem for snap!
        :param problem:
        :return:
        """
        self.last_problem = problem
        self.poll_reply += self.last_problem


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("-c", dest="client", default="scratch", help="default = scratch [scratch | snap | no_client]")
    # noinspection PyPep8
    parser.add_argument("-l", dest="language", default="1", help=
                                                                " 1=English(default) 2=Chinese(zh-CN)"
                                                                 " 3=Chinese(zh-TW)"
                                                                 " 4=Dutch(NL) 5=French(FR) 6=German(DE)"
                                                                 " 7=Greek(GR) 8=Korean(KO) 9=Italian(IT)"
                                                                 " 10=Portuguese(PT) 11=Spanish(ES)")
    parser.add_argument("-p", dest="comport", default="None", help="Arduino COM port - e.g. /dev/ttyACMO or COM3")
    parser.add_argument("-b", dest="base_path", default="None",
                        help="Python File Path - e.g. /usr/local/lib/python3.5/dist-packages/s2aio")
    parser.add_argument("-v", action='store_true', help='Print version and Python path')

    args = parser.parse_args()

    client_type = args.client
    if args.comport == 'None':
        comport = None
    else:
        comport = args.comport

    if args.base_path == 'None':
        user_base_path = None
    else:
        user_base_path = args.base_path

    language_type = args.language

    # noinspection PyUnusedLocal
    version = parser.parse_args('-v'.split())

    s2aio = S2AIO(client=client_type, language=language_type, com_port=comport, base_path=user_base_path,
                  version_request=args.v)

    the_loop = asyncio.get_event_loop()
    # noinspection PyBroadException
    try:
        the_loop.run_until_complete((s2aio.kick_off(the_loop)))
    except:
        sys.exit(0)
    asyncio.sleep(2)

    # signal handler function called when Control-C occurs
    # noinspection PyShadowingNames,PyUnusedLocal,PyUnusedLocal
    def signal_handler(signal, frame):
        print("Control-C detected. See you soon.")
        for t in asyncio.Task.all_tasks(loop):
            t.cancel()
            the_loop.run_until_complete(asyncio.sleep(.1))
            the_loop.stop()
            the_loop.close()
        sys.exit(0)

    # listen for SIGINT
    signal.signal(signal.SIGINT, signal_handler)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(0)

    loop = asyncio.get_event_loop()

    # noinspection PyBroadException
    try:
        loop.run_forever()
        loop.stop()
        loop.close()
    except:
        pass
