# node-red-contrib-nexus21
[![Donate](https://img.shields.io/badge/donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JUYN6NBFELTC2&source=url)

Node-red nodes to enable you to automate your Nexus21 TV Lift. Works with the IPLink add on module.

![Basic Example](https://raw.githubusercontent.com/Anamico/node-red-contrib-nexus21/main/images/basic.png "Basic Example")

# Configuration

One node instance equals 1 TV Lift.

Put in the IP address to point it at the lift.

# Usage

The input connection takes basic commands as msg.payload

* UP
* DOWN
* MEM1
* MEM2
* MEM3

The output connection will pump out status updates as the lift changes.
These are in JSON format as the msg payload and look like:

```json
{
    "STATUS” : "OK",
    "VERTICAL” : "MOVING",
    "HORIZONTAL” : "NA",
    "EXTCMD" : "UP",
    "ERROR" : {
        id : 13,
        short : "Short Circuit",
        long : "Short circuit has been detected while running"
    }
}
```


# Donations [![Donate](https://img.shields.io/badge/donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JUYN6NBFELTC2&source=url)

If you would like to donate some money to support ongoing development or as a simple thank you for me sharing this project for others to use, please feel free to send money via
[PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JUYN6NBFELTC2&source=url).


# Disclaimer

Of course, this software is offered with  absolutely NO WARRANTY whatsoever offered or implied. If something is not working right,
log a ticket in github or better yet, fix it and submit a pull request.

If you choose to set up and your tv gets crumbled or smashed, it's your problem, nothing to do with this software as there is no warranty
 whatsoever. Up to you to use it completely at your own risk. So YOU HAVE BEEN WARNED!

# Error Codes

** COMING SOON **