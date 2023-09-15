import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

import viewsRouter from './routes/views.router.js';
import autosRouter from './routes/autos.router.js';

import { mensajeModel } from './dao/models/mensajes.model.js';

mongoose.connect(
  'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
);

const app = express();
const httpServer = app.listen(8080, () => console.log('tuki'));
const socketServer = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use('/static', express.static('./public'));
app.use(viewsRouter);
app.use('/autos', autosRouter);

socketServer.on('connection', (socket) => {
  console.log('Se conectó', socket.id);
  socket.on('mensaje', async (data) => {
    await mensajeModel.create(data);
    const mensajes = await mensajeModel.find().lean();
    console.log(mensajes);
    socketServer.emit('nuevo_mensaje', mensajes);
  });
});
