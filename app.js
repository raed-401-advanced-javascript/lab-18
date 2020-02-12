'use strict';

const sio = require('socket.io-client')

const client = sio.connect('http://localhost:3000')

client.emit('speak','sent from client')