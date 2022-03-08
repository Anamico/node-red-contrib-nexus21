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

        node.timer = null;

        if (!this.ip || (this.ip.length < 10)) {
            node.status({
                fill:   "red",
                shape:  "dot",
                text:   "Missing IP Address"
            });
            return; // bomb out, we are non-operational
        }

        var setStatus = function(json) {
            const oldVertical = node.VERTICAL;
            const oldHorizontal = node.HORIZONTAL;
            node.VERTICAL = json['VERTICAL'] || 'Unknown';
            node.HORIZONTAL = json['HORIZONTAL'] || 'Unknown';
            node.working = node.VERTICAL !== 'Unknown';
            const changed = (oldVertical !== node.VERTICAL) || (oldHorizontal !== node.HORIZONTAL);

            if (!node.working) {
                node.error(json);
                node.status({
                    fill:   'red',
                    shape:  'dot',
                    text:   'Unknown Error'
                });
                return;
            }
            if (changed) {
                // todo: add decoded error payload if required
                const msg = {
                    payload: Object.assign({}, json)
                };
                node.send(msg); // pass on the status update to any listening nodes
                node.status({
                    fill: 'green',
                    shape: 'dot',
                    text: node.VERTICAL + (node.HORIZONTAL != 'NA' ? '/' + node.HORIZONTAL : '')
                });
            }
        };

        setStatus({});  // start in an unknown state

        //
        // check connectivity/update current status
        //

        const pollStatus = function(callback) {
            axios.get(`http://${node.ip}/api/status`)
                .then(response => {
                    setStatus(response.data);
                    if (callback) {
                        callback(null);
                    }
                })
                .catch(error => {
                    node.error(error.message || 'Unknown Error');
                    node.status({
                        fill:   'red',
                        shape:  'dot',
                        text:   error.message || 'Unknown Error'
                    });
                });
        };

        pollStatus(function(err) {
            if (err) { return; }
            // todo: use a socket connection intead of polling
            // todo: don't go active here, wait to see if socket connects, it will maintain the correct active state
            node.timer = setInterval(function(){
                pollStatus();
            }, 5000);
        });

        //const nodeId = node.id.replace(/\./g, '_');
        // currentNodes && currentNodes.add(nodeId);

        // send Commands to the TV LIFT

        node.on('input', function(msg, send, done) {
            node.log('tv lift input: ' + JSON.stringify(msg.payload, null, 2));

            if (!msg.payload || (['UP', 'DOWN', 'MEM1', 'MEM2', 'MEM3'].indexOf(msg.payload) < 0)) {
                node.error('invalid payload, must be one of "UP", "DOWN", "MEM1", "MEM2" or "MEM3"');
                node.status({
                    fill:   'red',
                    shape:  'dot',
                    text:   'invalid payload'
                });
                if (done) {
                    done();
                }
                return;
            }

            // fallback to using `node.send`
            // send = send || function() { node.send.apply(node,arguments) }

            axios.post(`http://${node.ip}/api/command`, { "COMMAND": msg.payload })
                .then(response => {
                    node.log(msg.payload + ': ' + ((response.data && response.data.STATUS) || "?"));
                    if (done) {
                        done();
                    }
                })
                .catch(error => {
                    node.status({
                        fill:   'red',
                        shape:  'dot',
                        text:   error.message || 'Unknown Error'
                    });
                    if (done) {
                        done(error);
                    } else {
                        node.error(error.message || 'Unknown Error');
                    }
                });
        });

        node.on('close', function() {
            if (node.timer) {
                clearInterval(node.timer);
                node.timer = null;
            }
        });

    }

    RED.nodes.registerType("TV Lift", TVLift);
};
