const express = require("express");
const mosca = require("mosca");
const app = express();
const path = require("path");
const server = require("http").Server(app);
let port = process.env.PORT || 8080;

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

// Serve static assets
app.use(express.static(path.resolve(__dirname, "client", "build")));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

server.listen(port, () => {
  console.log("Express app listening on port:", port);
});
