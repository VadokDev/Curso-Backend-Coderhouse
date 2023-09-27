import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import viewsRouter from './routes/views.router.js';

mongoose.connect(
  'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
);

const app = express();
app.listen(8080, () => console.log('tuki'));

app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
