/**
 * @module TV Lift
 * @description Implementation of the `tv lift` node
 */

'use strict';

// const async = require('async');
// const io = require("socket.io-client");
const axios = require('axios');

module.exports = function(RED) {

    // RED.events.on("nodes-starting",function() {
    //     node.log("Nodes starting");
    // });
    //
    // RED.events.on("nodes-started",function() {
    //     node.log("All nodes have started", currentNodes);
    // });

    function TVLift(config) {
        RED.nodes.createNode(this, config);

        this.ip = config.ip && config.ip.trim();
        this.working = false;

        var node = this;

        if (!this.ip || (this.ip.length < 10)) {
            node.status({
                fill:   "red",
                shape:  "dot",
                text:   "Missing IP Address"
            });
            return; // bomb out, we are non-operational
        }

        var setStatus = function(json) {
            node.VERTICAL = json['VERTICAL'] || 'Unknown';
            node.HORIZONTAL = json['HORIZONTAL'] || 'Unknown';
            node.working = node.VERTICAL != 'Unknown';

            if (!node.working) {
                node.error(json);
                node.status({
                    fill:   'red',
                    shape:  'dot',
                    text:   'Unknown Error'
                });
                return;
            }
            node.status({
                fill:   'green',
                shape:  'dot',
                text:   node.VERTICAL + ( node.HORIZONTAL != 'NA' ? '/' + node.HORIZONTAL : '')
            });
        };

        setStatus({});  // start in an unknown state

        //
        // check connectivity/update current status
        //
        axios.get(`http://${node.ip}/api/status`)
            .then(response => {
                setStatus(response.data);
                // don't go active here, wait to see if socket connects, it will maintain the correct active state
            })
            .catch(error => {
                node.error(error.message || 'Unknown Error');
                node.status({
                    fill:   'red',
                    shape:  'dot',
                    text:   error.message || 'Unknown Error'
                });
            });

        //const nodeId = node.id.replace(/\./g, '_');
        // currentNodes && currentNodes.add(nodeId);

        // send Commands to the TV LIFT

        node.on('input', function(msg) {
            node.log('tv lift input: ' + JSON.stringify(msg.payload, null, 2));

            if (!msg.payload || (['UP', 'DOWN', 'MEM1', 'MEM2', 'MEM3'].indexOf(msg.payload) < 0)) {
                node.error('invalid payload, must be one of "UP", "DOWN", "MEM1", "MEM2" or "MEM3"');
                node.status({
                    fill:   'red',
                    shape:  'dot',
                    text:   'invalid payload'
                });
                return;
            }

            axios.post(`http://${node.ip}/api/command`, { "COMMAND": msg.payload })
                .then(response => {
                    node.log(msg.payload + ': ' + ((response.data && response.data.STATUS) || "?"));
                })
                .catch(error => {
                    node.error(error.message || 'Unknown Error');
                    node.status({
                        fill:   'red',
                        shape:  'dot',
                        text:   error.message || 'Unknown Error'
                    });
                });
        });

    }

    RED.nodes.registerType("TV Lift", TVLift);
};
