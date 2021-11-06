const fetch = require('node-fetch');
let io;
let currentCount = 0;

const getSubscribersCount = async () => {
  console.log("Refreshing Pekora's subscribers count...")
  const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC1DCedRgGHBdm81E1llLhOQ&key=${process.env.YOUTUBE_API_KEY}`);
  return response.json();
}

const updateCount = async () => {
  const data = await getSubscribersCount();
  console.log(data)
  currentCount = parseInt(data.items[0].statistics.subscriberCount);
  console.log(currentCount)
  return currentCount;
}

const getCurrentCount = () => currentCount

updateCount(); // Update sub count on load
setInterval(async () => {
  updateCount();
}, 60000)

setInterval(async () => {
  if(io){
    const clientsCount = io.engine.clientsCount;
    console.log(`${clientsCount} clients connected`);
    if(clientsCount > 0){
      if(currentCount > 0) {
        console.log("emitting...", currentCount);
        io.sockets.emit("updateSubscribersCount", currentCount);
      }
    } else {
      console.log("Socket asleep, no clients connected");
    }
  } else {
    console.log("Socket is not connected yet");
  }
}, 5000);

const startSocket = (ioInstance) => {
  io = ioInstance;
  console.log("Socket IO Connected"); 
}
  
module.exports = {startSocket, getCurrentCount};
