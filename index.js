const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);
const sassMiddleware = require("node-sass-middleware");
let port = process.env.PORT || 8080;
require("dotenv").config();

console.log("STARTING SERVER 🌈 🦄 ✨");

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

server.listen(port, () => {
  console.log("Express app listening on port:", port);
});
