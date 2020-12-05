let io;

var Twitter = require('twit');

const startSocket = (ioInstance) => {
  console.log('Initialized twitter socket')
  io = ioInstance;
  console.log("Twitter Socket IO Connected"); 
}

const emitUserToClient = (socketId, user) => {
  io.in(socketId).emit('twitterUser', user)
}

module.exports = {startSocket, emitUserToClient};