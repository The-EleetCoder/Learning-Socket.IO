const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public/index.html"));
});

// socket : like a client
// io : like a server
io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id);
  socket.on("user-message", (message) => {
    console.log("a new message from user: ", message);
    io.emit("message", message);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
