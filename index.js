const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

// Initialize the Express application
const app = express();

// Create a server using the HTTP module
const server = createServer(app);

// Initialize a new instance of Socket.IO by passing the server
const io = new Server(server);

// Serve the chat page (index.html) when a user navigates to the root URL
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public/index.html"));
});

// Set up the Socket.IO connection event (fired when a client connects)
io.on("connection", (socket) => {
  console.log("a user connected: ", socket.id); // Log the socket ID of the connected user

  // Listen for "user-message" events from the client
  socket.on("user-message", (message) => {
    console.log("a new message from user: ", message); // Log the received message

    // Broadcast the message to all connected clients, including the sender
    // io.emit("message", message);

    // Broadcast the message to all connected clients, except the sender
    socket.broadcast.emit("message", message);
  });

  // Log when a user disconnects
  socket.on("disconnect", () => {
    console.log("a user disconnected: ", socket.id);
  });
});

// Start the server on port 3000 and log the server address
server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
