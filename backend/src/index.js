import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { createSocketServer } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

// Initialize socket server after env is loaded so it can see env vars
const allowedOrigins = ["http://localhost:5173"];
if (process.env.FRONTEND_DEV_URL) allowedOrigins.push(process.env.FRONTEND_DEV_URL);

const { app, server } = createSocketServer(allowedOrigins);

app.use(express.json());
app.use(cookieParser());
// Opt-in for Private Network Access preflight requests (Access-Control-Request-Private-Network)
app.use((req, res, next) => {
  if (
    req.method === "OPTIONS" &&
    req.headers["access-control-request-private-network"]
  ) {
    res.setHeader("Access-Control-Allow-Private-Network", "true");
  }
  next();
});

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});
