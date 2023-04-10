import express from 'express';
import { config } from 'dotenv';
import path from 'path';
import { createViteDevServer } from './viteServer';
import { createWebSocketServer } from './webSocket';

config();

const app = express();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

createViteDevServer('./').then(({ router }) => {
  app.use(router);
});
createWebSocketServer(app);
