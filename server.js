'use strict';

let PORT = process.env.PORT || 3000
const sio = require('socket.io')(PORT)
const express = require('express');
const server = express()

sio.on('connection',socket=>{
    console.log('connected',socket.id)
    socket.on('disconnected',()=>{
        console.log(socket.id)
    })
    socket.on('speack',payload=>{
        sio.emit('message',payload)
        console.log(payload)
    })

})