# Learning-Socket.IO

## Overview:
This simple chat application uses Socket.IO for real-time bidirectional communication between the client and the server. The server is built using Express.js and the Node.js HTTP module. The client (browser) communicates with the server to send and receive chat messages.

## Key Components:

### Client-Side:
`HTML`: Provides a basic UI with a message input field and a send button.  
`Socket.IO Client`: Establishes a connection to the server and listens for messages from other users.

### Server-Side:

`Express.js`: Serves the HTML file to the client.  
`Socket.IO Server`: Manages WebSocket connections and handles message broadcasting to all connected clients.

## Workflow:
1. The user opens the chat application (index.html).
2. The client establishes a WebSocket connection with the server using Socket.IO.  
3. When the user enters a message and clicks the "Send" button, the client emits the message to the server via the user-message event.  
4. The server listens for the user-message event, logs the message, and broadcasts it to all connected clients (including the sender).  
5. All clients receive the message via the message event and display it in the chat window.  

## Running the Application:
Install dependencies:  
```
npm install express socket.io
```
Start the server:
```
node server.js
```

Open a browser and navigate to http://localhost:3000 to use the chat app.