const fetch = require('node-fetch');
const apiKey = require('../youtube.config.json').apiKey;
let socket;
let currentCount = 0;

const getSubscribersCount = async () => {
  console.log("Refreshing Pekora's subscribers count...")
  const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC1DCedRgGHBdm81E1llLhOQ&key=${apiKey}`);
  return response.json();
}

const updateCount = async () => {
  const data = await getSubscribersCount();
  currentCount = data.items[0].statistics.subscriberCount;
}

const getCurrentCount = () => currentCount

updateCount();

setInterval(async () => {
  if(socket){
    try {
      const data = await getSubscribersCount();
      currentCount = data.items[0].statistics.subscriberCount;
    } finally {
      console.log("emitting...", currentCount);
      socket.emit("updateSubscribersCount", currentCount);
    }
  }
}, 20000);

const startSocket = (instance) => {
  socket = instance;
}
  
module.exports = {startSocket, getCurrentCount};
