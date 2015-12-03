###############################################################################
#
# The MIT License (MIT)
#
# Copyright (c) Tavendo GmbH
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#
###############################################################################

from __future__ import absolute_import, division, print_function

import os
import sys
import weakref
import inspect

from twisted.python.failure import Failure
from twisted.internet.defer import maybeDeferred, Deferred, DeferredList
from twisted.internet.defer import succeed, fail
from twisted.internet.interfaces import IReactorTime

from zope.interface import provider

from txaio.interfaces import IFailedFuture, ILogger, log_levels
from txaio._iotype import guess_stream_needs_encoding
from txaio import _Config

import six

using_twisted = True
using_asyncio = False

config = _Config()
_stderr, _stdout = sys.stderr, sys.stdout

# some book-keeping variables here. _observer is used as a global by
# the "backwards compatible" (Twisted < 15) loggers. The _loggers list
# contains weakrefs; we add _TxLogger instances to this *until* such
# time as start_logging is called (with the desired log-level) and
# then we call _set_log_level on each instance. After that,
# _TxLogger's ctor uses _log_level directly.
_observer = None     # for Twisted legacy logging support; see below
_loggers = []        # list of weak-references of each logger we've created
_log_level = 'info'  # global log level; possibly changed in start_logging()

IFailedFuture.register(Failure)

_NEW_LOGGER = False
try:
    # Twisted 15+
    from twisted.logger import Logger, formatEvent, ILogObserver
    from twisted.logger import globalLogBeginner, formatTime, LogLevel
    ILogger.register(Logger)
    _NEW_LOGGER = True

except ImportError:
    # we still support Twisted 12 and 13, which doesn't have new-logger
    from functools import partial
    from zope.interface import Interface
    from datetime import datetime
    import time

    # provide our own simple versions of what Twisted new-logger does

    class ILogObserver(Interface):
        pass

    def formatTime(t):
        dt = datetime.fromtimestamp(t)
        return six.u(dt.strftime("%Y-%m-%dT%H:%M:%S%z"))

    def formatEvent(event):
        msg = event['log_format']
        return msg.format(**event)

    class LogLevel:
        critical = 'critical'
        error = 'error'
        warn = 'warn'
        info = 'info'
        debug = 'debug'
        trace = 'trace'

    class Logger(ILogger):
        def __init__(self, **kwargs):
            self.namespace = kwargs.get('namespace', None)
            if _loggers is not None:
                _loggers.append(weakref.ref(self))
            # this class will get overridden by _TxLogger below, so we
            # bind *every* level here; set_log_level will un-bind
            # some.
            for name in log_levels:
                setattr(self, name, partial(self._do_log, name))

        def _do_log(self, level, message, **kwargs):
            global _observer
            kwargs['log_time'] = time.time()
            kwargs['log_level'] = level
            kwargs['log_format'] = message
            kwargs['log_namespace'] = self.namespace
            # NOTE: the other loggers are ignoring any log messages
            # before start_logging() as well
            if _observer:
                _observer(kwargs)


def _no_op(*args, **kwargs):
    pass


# NOTE: beware that twisted.logger._logger.Logger copies itself via an
# overriden __get__ method when used as recommended as a class
# descriptor.  So, we override __get__ to just return ``self`` which
# means ``log_source`` will be wrong, but we don't document that as a
# key that you can depend on anyway :/
class _TxLogger(Logger):
    def __init__(self, *args, **kw):
        super(_TxLogger, self).__init__(*args, **kw)
        self._set_log_level(_log_level)
        if _loggers is not None:
            _loggers.append(weakref.ref(self))

    def __get__(self, oself, type=None):
        # this causes the Logger to lie about the "source=", but
        # otherwise we create a new Logger instance every time we do
        # "self.log.info()" if we use it like:
        # class Foo:
        #     log = make_logger
        return self

    def _set_log_level(self, level):
        # up to the desired level, we don't do anything, as we're a
        # "real" Twisted new-logger; for methods *after* the desired
        # level, we bind to the no_op method
        desired_index = log_levels.index(level)
        for (idx, name) in enumerate(log_levels):
            if idx > desired_index:
                setattr(self, name, _no_op)

    def trace(self, *args, **kw):
        # there is no "trace" level in Twisted -- but this whole
        # method will be no-op'd unless we are at the 'trace' level.
        self.debug(*args, **kw)


def make_logger():
    # we want the namespace to be the calling context of "make_logger"
    # -- so we *have* to pass namespace kwarg to Logger (or else it
    # will always say the context is "make_logger")
    cf = inspect.currentframe().f_back
    if "self" in cf.f_locals:
        # We're probably in a class init or method
        cls = cf.f_locals["self"].__class__
        namespace = '{0}.{1}'.format(cls.__module__, cls.__name__)
    else:
        namespace = cf.f_globals["__name__"]
        if cf.f_code.co_name != "<module>":
            # If it's not the module, and not in a class instance, add the code
            # object's name.
            namespace = namespace + "." + cf.f_code.co_name
    return _TxLogger(namespace=namespace)


@provider(ILogObserver)
class _LogObserver(object):
    """
    Internal helper.

    An observer which formats events to a given file.
    """
    to_tx = {
        'critical': LogLevel.critical,
        'error': LogLevel.error,
        'warn': LogLevel.warn,
        'info': LogLevel.info,
        'debug': LogLevel.debug,
        'trace': LogLevel.debug,
    }

    def __init__(self, out):
        self._file = out
        self._encode = guess_stream_needs_encoding(out)

        self._levels = None

    def _acceptable_level(self, level):
        if self._levels is None:
            target_level = log_levels.index(_log_level)
            self._levels = [
                self.to_tx[lvl]
                for lvl in log_levels
                if log_levels.index(lvl) <= target_level
            ]
        return level in self._levels

    def __call__(self, event):
        # it seems if a twisted.logger.Logger() has .failure() called
        # on it, the log_format will be None for the traceback after
        # "Unhandled error in Deferred" -- perhaps this is a Twisted
        # bug?
        if event['log_format'] is None:
            msg = u'{0} {1}{2}'.format(
                formatTime(event["log_time"]),
                failure_format_traceback(event['log_failure']),
                os.linesep,
            )
            if self._encode:
                msg = msg.encode('utf8')
            self._file.write(msg)
        else:
            # although _TxLogger will already have filtered out unwanted
            # levels, bare Logger instances from Twisted code won't have.
            if 'log_level' in event and self._acceptable_level(event['log_level']):
                msg = u'{0} {1}{2}'.format(
                    formatTime(event["log_time"]),
                    formatEvent(event),
                    os.linesep,
                )
                if self._encode:
                    msg = msg.encode('utf8')
                self._file.write(msg)


def start_logging(out=None, level='info'):
    """
    Start logging to the file-like object in ``out``. By default, this
    is stdout.
    """
    global _loggers, _observer, _log_level

    if level not in log_levels:
        raise RuntimeError(
            "Invalid log level '{0}'; valid are: {1}".format(
                level, ', '.join(log_levels)
            )
        )

    if _loggers is None:
        return

    if out is None:
        out = _stdout

    if _loggers is not None:
        for ref in _loggers:
            instance = ref()
            if instance:
                instance._set_log_level(level)
    _loggers = None
    _log_level = level

    _observer = _LogObserver(out)
    if _NEW_LOGGER:
        globalLogBeginner.beginLoggingTo([_observer])
    else:
        from twisted.python import log
        log.startLogging(out)


def failure_message(fail):
    """
    :param fail: must be an IFailedFuture
    returns a unicode error-message
    """
    try:
        return u'{0}: {1}'.format(
            fail.value.__class__.__name__,
            fail.getErrorMessage(),
        )
    except Exception:
        return 'Failed to produce failure message for "{0}"'.format(fail)


def failure_traceback(fail):
    """
    :param fail: must be an IFailedFuture
    returns a traceback instance
    """
    return fail.tb


def failure_format_traceback(fail):
    """
    :param fail: must be an IFailedFuture
    returns a string
    """
    try:
        f = six.StringIO()
        fail.printTraceback(file=f)
        return f.getvalue()
    except Exception:
        return u"Failed to format failure traceback for '{0}'".format(fail)


_unspecified = object()


def create_future(result=_unspecified, error=_unspecified):
    if result is not _unspecified and error is not _unspecified:
        raise ValueError("Cannot have both result and error.")

    f = Deferred()
    if result is not _unspecified:
        resolve(f, result)
    elif error is not _unspecified:
        reject(f, error)
    return f


# maybe delete, just use create_future()
def create_future_success(result):
    return succeed(result)


# maybe delete, just use create_future()
def create_future_error(error=None):
    return fail(create_failure(error))


def as_future(fun, *args, **kwargs):
    return maybeDeferred(fun, *args, **kwargs)


def is_future(obj):
    return isinstance(obj, Deferred)


def call_later(delay, fun, *args, **kwargs):
    return IReactorTime(_get_loop()).callLater(delay, fun, *args, **kwargs)


def is_called(future):
    return future.called


def resolve(future, result=None):
    future.callback(result)


def reject(future, error=None):
    if error is None:
        error = create_failure()
    elif isinstance(error, Exception):
        error = Failure(error)
    else:
        if not isinstance(error, Failure):
            raise RuntimeError("reject requires a Failure or Exception")
    future.errback(error)


def create_failure(exception=None):
    """
    Create a Failure instance.

    if ``exception`` is None (the default), we MUST be inside an
    "except" block. This encapsulates the exception into an object
    that implements IFailedFuture
    """
    if exception:
        return Failure(exception)
    return Failure()


def add_callbacks(future, callback, errback):
    """
    callback or errback may be None, but at least one must be
    non-None.
    """
    assert future is not None
    if callback is None:
        assert errback is not None
        future.addErrback(errback)
    else:
        # Twisted allows errback to be None here
        future.addCallbacks(callback, errback)
    return future


def gather(futures, consume_exceptions=True):
    def completed(res):
        rtn = []
        for (ok, value) in res:
            rtn.append(value)
            if not ok and not consume_exceptions:
                value.raiseException()
        return rtn

    # XXX if consume_exceptions is False in asyncio.gather(), it will
    # abort on the first raised exception -- should we set
    # fireOnOneErrback=True (if consume_exceptions=False?) -- but then
    # we'll have to wrap the errback() to extract the "real" failure
    # from the FirstError that gets thrown if you set that ...

    dl = DeferredList(list(futures), consumeErrors=consume_exceptions)
    # we unpack the (ok, value) tuples into just a list of values, so
    # that the callback() gets the same value in asyncio and Twisted.
    add_callbacks(dl, completed, None)
    return dl


# methods internal to this implementation


def _get_loop():
    if config.loop is None:
        from twisted.internet import reactor
        config.loop = reactor
    return config.loop
