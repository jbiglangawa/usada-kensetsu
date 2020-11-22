const fetch = require('node-fetch');
const apiKey = require('../youtube.config.json').apiKey;
let io;
let currentCount = 0;

const getSubscribersCount = async () => {
  console.log("Refreshing Pekora's subscribers count...")
  const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC1DCedRgGHBdm81E1llLhOQ&key=${apiKey}`);
  return response.json();
}

const updateCount = async () => {
  const data = await getSubscribersCount();
  return parseInt(data.items[0].statistics.subscriberCount);
}

const getCurrentCount = () => currentCount

updateCount();

setInterval(async () => {
  if(io){
    const clientsCount = io.engine.clientsCount;
    console.log(`${clientsCount} clients connected`);
    let newCount;
    if(clientsCount > 0){
      try {
        newCount = await updateCount();
      } finally {
        if(newCount !== currentCount){
          currentCount = newCount;
          console.log("emitting...", currentCount);
          io.sockets.emit("updateSubscribersCount", currentCount);
        }
      }
    } else {
      console.log("Socket asleep, no clients connected");
    }
  } else {
    console.log("Socket is not connected yet");
  }
}, 10000);

const startSocket = (ioInstance) => {
  io = ioInstance;
  console.log("Socket IO Connected"); 
}
  
module.exports = {startSocket, getCurrentCount};
