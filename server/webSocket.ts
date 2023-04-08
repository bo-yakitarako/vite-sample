import { config } from 'dotenv';
import { Server as WebSocketServer, WebSocket } from 'ws';

config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

let clients = [] as WebSocket[];

export const createWebSocketServer = () => {
  const wss = new WebSocketServer({ port: PORT + 5 });

  wss.on('connection', (ws) => {
    clients = [...clients, ws];
    ws.on('message', (message) => {
      clients.forEach((client) => {
        client.send(`Received message => ${message}`);
      });
    });
    ws.send('WebSocketサーバーに接続したわよ');
    ws.on('close', () => {
      const index = clients.indexOf(ws);
      if (index > -1) {
        clients = [...clients.slice(0, index), ...clients.slice(index + 1)];
      }
      ws.send('WebSocketからうんちぶりだよ');
    });
  });
};
