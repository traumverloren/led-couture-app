const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);
let port = process.env.PORT || 8080;
require("dotenv").config();

console.log("STARTING SERVER 🌈 🦄 ✨");

// Serve static assets
app.use(express.static(path.resolve(__dirname, "client", "build")));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

server.listen(port, () => {
  console.log("Express app listening on port:", port);
});
