export default {
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
        id: 9,
        short: 'Power fail',
        long: 'Power fail occurred or power regulator adjusted below 10%'
    }
};





// 11
// Channel count changed
// Number of channels connected to system has changed since last initialization
// 12
// Position difference
// Difference between minimum and maximum position of a reference has been exceeded
// 13
// Short circuit
// Short circuit has been detected while running
// 14
// Checksum
// Position checksum check failed, all channels has position lost
// 15
// Power limit
// System has reached its power limitation
// 16
// Key error
// Illegal key combination or change of keys
// 17
// No Safety
// Safety function has not allowed movement but input active
// 18
// Missing initialization plug
// A special service tool is required to change number of channels to the system
// 19
// LIN power
// LIN power dropped unexpected while system active.
// 23
// Channel 1 missing
// Actuator is missing
// 24
// Channel 2 missing
// 29
// Channel 1 type
// Actuator type has changed since initialization, or detected wrong.
// 30
// Channel 2 type
// Actuator type has changed since initialization, or detected wrong, or not same as first actuator.
// 35
// Channel 1 pulse
// Too many pulse errors.
// 36
// Channel 2 pulse
// 41
// Channel 1 Overload up
// Overload occur outwards
// 42
// Channel 2 Overload up
// 47
// Channel 1 Overload down
// Overload occur inwards
// 48
// Channel 2 Overload down
// 53
// Channel 1 Anti-collision
// Anti-collision limit has been exceeded
// 54
// Channel 2 Anti-collision
// 59
// Channel 1 SLS activation
// SLS input has been activated
// 60
// Channel 2 SLS activation
// 65
// Channel 1B type
// Type of port B of channel has been changed
// 66
// Channel 2B type
// 71
// Channel 1A shorted
// Short circuit detected on output
// 72
// Channel 1B shorted
// 73
// Channel 2A shorted
// 74
// Channel 2B shorted
// 84
// DC-out
// DC unit has been disconnected or failed
// 85
// Radio dead
// Radio circuit has died and has had to be restarted
// 86
// Master
// Connection to master lost OR following messages are from master
// 87
// Slave 1
// Connection to 1st slave lost OR following messages are from 1st slave


// 500
// Rest API argument error
// Rest API argument error
// 501
// LIN Communication error
// IPLINBox communication lost with LIN Controlbox
// 502
// Ref1 position lost
// Ref1 position lost
// 503
// Ref2 position lost
// Ref2 position lost
// 504
// Memory error
// IPLINBox internal eeprom is not working, so wifi ssid/password/date can not be read/stored