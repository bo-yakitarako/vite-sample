import express from 'express';
import { config } from 'dotenv';
import path from 'path';
import { createViteDevServer } from './viteServer';

config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

const app = express();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

createViteDevServer('./').then(({ router }) => {
  app.use(router);
});
