import http from 'http';
import { Server } from 'socket.io';
import { Express } from 'express';
import { config } from 'dotenv';
import { getCount, minus, plus } from './db';

config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export const createWebSocketServer = (app: Express) => {
  const httpServer = http.createServer(app);
  const io = new Server(httpServer);

  io.on('connection', async (socket) => {
    const { count } = await getCount();
    socket.emit('count', JSON.stringify({ ok: true, count }));

    socket.on('plus', async () => {
      const { count } = await plus();
      const data = { ok: true, count };
      io.emit('count', JSON.stringify(data));
    });
    socket.on('minus', async () => {
      const { count } = await minus();
      const data = { ok: true, count };
      io.emit('count', JSON.stringify(data));
    });

    socket.on('disconnect', () => {
      console.log('しんじゃったー');
    });
  });

  httpServer.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};
