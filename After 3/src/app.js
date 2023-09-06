import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import productsRouter from './routes/productsRouter.js';
import viewsRouter from './routes/viewsRouter.js';
import ProductManager from './ProductManager.js';

const productManager = new ProductManager('./products.json');
const app = express();
const htttpServer = app.listen(8080, () => console.log('tuki'));
const socketServer = new Server(htttpServer);

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');
app.use(express.static('./src/public'));

app.use((req, res, next) => {
  req.context = { socketServer };
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', viewsRouter);
app.use('/api/products', productsRouter);

socketServer.on('connection', async (socket) => {
  console.log('Nuevo cliente', socket.id);
  socket.emit('productos', await productManager.getProducts());
});
