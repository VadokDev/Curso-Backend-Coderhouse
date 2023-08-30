import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './router/viewsRouter.js';
import { Server } from 'socket.io';

const app = express();
const httpServer = app.listen(8080, () => console.log('tuki'));
const socketServer = new Server(httpServer);

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');
app.use(express.static('./src/public'));
app.use('/', viewsRouter);

socketServer.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  socket.on('message', (data) => {
    console.log(data);
  });

  socket.on('caja_update', (data) => {
    socket.emit('update_mensajes', { mensaje: data.mensaje });
  });
});
