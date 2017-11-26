const express = require("express");
const app = express();
var path = require("path");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const sassMiddleware = require("node-sass-middleware");
let port = process.env.PORT || 8000;

console.log("STARTING SERVER 🌈 🦄 ✨");

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

io.on("connection", socket => {
  console.log("CLIENT CONNECTED 💃 ", socket.id);
  io.emit("clientConnected", socket.id);

  socket.on("stateChanged", msg => {
    io.emit(msg.program, msg.colors);
  });

  socket.on("disconnect", () => {
    console.log("client disconnected 💩");

    socket.disconnect();
  });
});

server.listen(port, () => {
  console.log("Express app listening on port:", port);
});
