'use strict';

module.exports = {
    8: {
        id: 8,
        short: 'Unexpected Reset',
        long: 'Unexpected reset caused by a software error or external reset'
    },
    9: {
        id: 9,
        short: 'LIN error',
        long: 'An error occur on LIN bus'
    },
    10: {
        id: 10,
        short: 'Power fail',
        long: 'Power fail occurred or power regulator adjusted below 10%'
    },
    11: {
        id: 11,
        short: 'Channel count changed',
        long: 'Number of channels connected to system has changed since last initialization'
    },
    12: {
        id: 12,
        short: 'Position difference',
        long: 'Difference between minimum and maximum position of a reference has been exceeded'
    },
    13: {
        id: 13,
        short: 'Position difference',
        long: 'Short circuit has been detected while running'
    },
    14: {
        id: 14,
        short: 'Checksum',
        long: 'Position checksum check failed, all channels has position lost'
    },
    15: {
        id: 15,
        short: 'Power limit',
        long: 'System has reached its power limitation'
    },
    16: {
        id: 15,
        short: 'Key error',
        long: 'Illegal key combination or change of keys'
    },
    17: {
        id: 17,
        short: 'No Safety',
        long: 'Safety function has not allowed movement but input active'
    },
    18: {
        id: 18,
        short: 'Missing initialization plug',
        long: 'A special service tool is required to change number of channels to the system'
    },
    19: {
        id: 19,
        short: 'LIN power',
        long: 'LIN power dropped unexpected while system active.'
    },
    23: {
        id: 23,
        short: 'Channel 1 missing',
        long: 'Actuator is missing'
    },
    24: {
        id: 24,
        short: 'Channel 2 missing',
        long: 'Actuator is missing'
    },
    29: {
        id: 29,
        short: 'Channel 1 type',
        long: 'Actuator type has changed since initialization, or detected wrong.'
    },
    30: {
        id: 30,
        short: 'Channel 2 type',
        long: 'Actuator type has changed since initialization, or detected wrong, or not same as first actuator.'
    },
    35: {
        id: 35,
        short: 'Channel 1 pulse',
        long: 'Too many pulse errors.'
    },
    36: {
        id: 36,
        short: 'Channel 2 pulse',
        long: 'Too many pulse errors.'
    },
    41: {
        id: 41,
        short: 'Channel 1 Overload up',
        long: 'Overload occur outwards'
    },
    42: {
        id: 42,
        short: 'Channel 2 Overload up',
        long: 'Overload occur outwards'
    },
    47: {
        id: 47,
        short: 'Channel 1 Overload down',
        long: 'Overload occur inwards'
    },
    48: {
        id: 48,
        short: 'Channel 2 Overload down',
        long: 'Overload occur inwards'
    },
    53: {
        id: 53,
        short: 'Channel 1 Anti-collision',
        long: 'Anti-collision limit has been exceeded'
    },
    54: {
        id: 54,
        short: 'Channel 2 Anti-collision',
        long: 'Anti-collision limit has been exceeded'
    },
    59: {
        id: 59,
        short: 'Channel 1 SLS activation',
        long: 'SLS input has been activated'
    },
    60: {
        id: 60,
        short: 'Channel 2 SLS activation',
        long: 'SLS input has been activated'
    },
    65: {
        id: 65,
        short: 'Channel 1B type',
        long: 'Type of port B of channel has been changed'
    },
    66: {
        id: 66,
        short: 'Channel 2B type',
        long: 'Type of port B of channel has been changed'
    },
    71: {
        id: 71,
        short: 'Channel 1A shorted',
        long: 'Short circuit detected on output'
    },
    72: {
        id: 72,
        short: 'Channel 1B shorted',
        long: 'Short circuit detected on output'
    },
    73: {
        id: 73,
        short: 'Channel 2A shorted',
        long: 'Short circuit detected on output'
    },
    74: {
        id: 74,
        short: 'Channel 2B shorted',
        long: 'Short circuit detected on output'
    },
    84: {
        id: 84,
        short: 'DC-out',
        long: 'DC unit has been disconnected or failed'
    },
    85: {
        id: 85,
        short: 'Radio dead',
        long: 'Radio circuit has died and has had to be restarted'
    },
    86: {
        id: 86,
        short: 'Master',
        long: 'Connection to master lost OR following messages are from master'
    },
    87: {
        id: 87,
        short: 'Slave 1',
        long: 'Connection to 1st slave lost OR following messages are from 1st slave'
    },

    // Error codes defined by Device Software

    500: {
        id: 500,
        short: 'Rest API argument error',
        long: 'Rest API argument error'
    },
    501: {
        id: 501,
        short: 'LIN Communication error',
        long: 'IPLINBox communication lost with LIN Controlbox'
    },
    502: {
        id: 502,
        short: 'Ref1 position lost',
        long: 'Ref1 position lost'
    },
    503: {
        id: 503,
        short: 'Ref2 position lost',
        long: 'Ref2 position lost'
    },
    504: {
        id: 504,
        short: 'Memory error',
        long: 'IPLINBox internal eeprom is not working, so wifi ssid/password/date can not be read/stored'
    },
};