import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import session from 'express-session';

import viewsRouter from './routes/viewsRouter.js';
import userRouter from './routes/userRouter.js';
import initializePassport from './config/passport.config.js';
import passport from 'passport';

mongoose.connect(
  'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority',
      ttl: 15,
    }),
    secret: '$sic290weDS;aksd',
    resave: false,
    saveUninitialized: false,
  })
);

initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.listen(8080, () => console.log('tuki'));

app.use('/api', userRouter);
app.use('/jwt', jwtRouter);
app.use('/', viewsRouter);
