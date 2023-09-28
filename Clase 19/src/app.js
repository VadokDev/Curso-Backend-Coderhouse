import express from 'express';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import sessionRouter from './routes/sessionRouter.js';
import viewsRouter from './routes/viewsRouter.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
const app = express();

mongoose.connect(
  'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority',
      ttl: 100,
    }),
    secret: 'asdklj029023d',
    resave: false,
    saveUninitialized: false,
  })
);

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use('/api', sessionRouter);
app.use('/', viewsRouter);

app.listen(8080, () => console.log('tuki'));
