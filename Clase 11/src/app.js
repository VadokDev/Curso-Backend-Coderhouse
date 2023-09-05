import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/viewsRouter.js';
import { Server } from 'socket.io';

const app = express();
const httpServer = app.listen(8080, () => console.log('tuki'));
const socketServer = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');
app.use(express.static('./src/public'));

app.use('/', viewsRouter);

const mensajes = [];

socketServer.on('connection', (socket) => {
  socketsAbiertos[socket.id] = socket;

  console.log(`Se conectó el usuario con socket id: ${socket.id}`);

  socket.on('mensaje', (data) => {
    mensajes.push({ socketid: socket.id, mensaje: data.mensaje });
    socketServer.emit('nuevo_contenido', mensajes);
  });
});
