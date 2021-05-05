import express, { Express, Request, Response } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';
import * as socketio from 'socket.io';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../.env.development.local` });

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER_EDIT_ONLY}:${process.env.MONGO_PASSWORD_EDIT_ONLY}@cluster0.y8qeq.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  )
  .then(() => console.log(`> Connected to MongoDB database: ${process.env.MONGO_DB_NAME}`))
  .catch(() =>
    console.log(`> Failed connection to MongoDB database: ${process.env.MONGO_DB_NAME}`),
  );

const PORT: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  const app: Express = express();
  const server: http.Server = http.createServer(app);
  const io: socketio.Server = new socketio.Server();
  io.attach(server);

  app.get('/hello', async (_: Request, res: Response) => {
    res.send('Hello World');
  });

  io.on('connection', (socket: socketio.Socket) => {
    console.log('connection');
    socket.emit('status', 'Hello from Socket.io');

    socket.on('disconnect', () => {
      console.log('client disconnected');
    });
  });

  app.all('*', (req: any, res: any) => nextHandler(req, res));

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
