import "reflect-metadata";

import express from "express";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();

const server = createServer(app);

mongoose
  .connect("mongodb://127.0.0.1:27017/rocketsocket", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then((res) => {
    console.log("Connected to Distribution API Database - Initial Connection");
  })
  .catch((err) => {
    console.log(
      `Initial Distribution API Database connection error occured -`,
      err
    );
  });

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Socket", socket);
});

export { server, io };
