const express = require("express");
const mosca = require("mosca");
const app = express();
const path = require("path");
const server = require("http").Server(app);
// const io = require("socket.io")(server);
const sassMiddleware = require("node-sass-middleware");
let port = process.env.PORT || 3000;

console.log("STARTING SERVER 🌈 🦄 ✨");

const pubsubsettings = {};
const moscaSettings = {
  backend: pubsubsettings //pubsubsettings is the object we created above
};

const mqtt = new mosca.Server(moscaSettings); //here we start mosca

mqtt.attachHttpServer(server);

mqtt.on("ready", setup); //on init it fires up setup()

const message = {
  topic: "lights",
  payload: "CONNECTED TO SERVER YAY"
};

// fired when the mqtt server is ready
function setup() {
  console.log("Mosca server is up and running");
}

mqtt.on("error", function(err) {
  console.log(err);
});

mqtt.on("clientConnected", function(client) {
  console.log("Client Connected", client.id);
});

mqtt.on("published", function(packet, client) {
  console.log("Published", packet);
});

mqtt.on("subscribed", function(topic, client) {
  console.log("Subscribed", client.packet);
});

mqtt.on("unsubscribed", function(topic, client) {
  console.log("unsubscribed", topic);
});

mqtt.on("clientDisconnecting", function(client) {
  console.log("clientDisconnecting", client.id);
});

mqtt.on("clientDisconnected", function(client) {
  console.log("Client Disconnected", client.id);
});

// Sass
app.use(
  sassMiddleware({
    /* Options */
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
    debug: true,
    outputStyle: "compressed",
    prefix: "/public"
  })
);
// Note: you must place sass-middleware *before* `express.static` or else it will
// not work.
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// io.on("connection", socket => {
//   console.log("CLIENT CONNECTED 💃 ", socket.id);
//   io.emit("clientConnected", socket.id);

//   socket.on("stateChanged", msg => {
//     io.emit(msg.program, msg.colors);
//   });

//   socket.on("disconnect", () => {
//     console.log("client disconnected 💩");

//     socket.disconnect();
//   });
// });

server.listen(port, () => {
  console.log("Express app listening on port:", port);
});
