const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

console.log('STARTING SERVER 🌈 🦄 ✨');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('CLIENT CONNECTED 💃 ', socket.id);

  socket.on('stateChanged', msg => {
    console.log('new program: ' + msg);
    io.emit("updateState", msg);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected 💩');

    socket.disconnect();
  });
});

server.listen(80, () => {
  console.log('The server is running');
});
