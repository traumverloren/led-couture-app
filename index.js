const express = require("express");
const app = express();
const path = require("path");
const aedes = require("aedes")();
const mqtt = require("net").createServer(aedes.handle);
const httpServer = require("http").createServer(app);
const ws = require("websocket-stream");
const mqttPort = 1883;
const appPort = 8080;

mqtt.listen(mqttPort, function() {
  console.log("mqtt server listening on port", mqttPort);
});

ws.createServer(
  {
    server: httpServer
  },
  aedes.handle
);

httpServer.listen(appPort, function() {
  console.log("server listening on port", appPort);
});

aedes.on("clientError", function(client, err) {
  console.log("client error", client.id, err.message, err.stack);
});

aedes.on("publish", function(packet, client) {
  if (client) {
    console.log("message from client", client.id);
  }
});

aedes.on("subscribe", function(subscriptions, client) {
  if (client) {
    console.log("subscribe from client", subscriptions, client.id);
  }
});

aedes.on("client", function(client) {
  console.log("new client", client.id);
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, "client", "build")));

// Always return the main index.html, so react-router render the route in the client
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
