import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cartRouter from './routes/cartRouter.js';
import productRouter from './routes/productRouter.js';

mongoose.connect(
  'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
);

const app = express();
app.listen(8080, () => console.log('tuki'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use('/products', productRouter);
app.use('/carts', cartRouter);

app.use('/', express.static('./src/public'));
