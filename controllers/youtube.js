const fetch = require('node-fetch');
let socket;
let currentCount = 0;

const getSubscribersCount = async () => {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC1DCedRgGHBdm81E1llLhOQ&key=AIzaSyAD2fagT_nomoI9EKKWSQR7qFBbY0YyyEg`);
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
      // const data = await getSubscribersCount();
      // currentCount = data.items[0].statistics.subscriberCount;
    } finally {
      socket.emit("updateSubscribersCount", currentCount);
    }
  }
}, 120 * 1000);

const startSocket = (instance) => {
  socket = instance;
}
  
module.exports = {startSocket, getCurrentCount};
