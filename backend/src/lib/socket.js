import { Server } from "socket.io";
import http from "http";
import express from "express";

// exported live bindings; they'll be assigned when createSocketServer runs
export let io = null;
export let getReceiverSocketId = () => null;

// Create and return app/server/io so initialization can happen after dotenv.config()
export function createSocketServer(allowedOrigins = ["http://localhost:5173"]) {
  const app = express();
  const server = http.createServer(app);

  io = new Server(server, {
    cors: {
      origin: allowedOrigins,
      credentials: true,
    },
  });

  // used to store online users
  const userSocketMap = {}; // {userId: socketId}

  io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;

    // io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("A user disconnected", socket.id);
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });

  getReceiverSocketId = (userId) => userSocketMap[userId];

  return { app, server, io, getReceiverSocketId };
}
