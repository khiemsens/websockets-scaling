// Client
const io = require('socket.io-client');
const client = io('http://localhost:5000', {
  transports: ['websocket']
});

client.on('connect', function(){
  console.log("Connected!");
  client.emit('testMsg', 'a message');
});