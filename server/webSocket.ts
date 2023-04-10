import http from 'http';
import { Server } from 'socket.io';
import { Express } from 'express';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export const createWebSocketServer = (app: Express) => {
  const httpServer = http.createServer(app);
  const io = new Server(httpServer);

  io.on('connection', (socket) => {
    socket.on('plus', () => {
      console.log('ぷらす');
    });
    socket.on('minus', () => {
      console.log('まいなす');
    });

    socket.on('disconnect', () => {
      console.log('しんじゃったー');
    });
  });

  httpServer.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};
