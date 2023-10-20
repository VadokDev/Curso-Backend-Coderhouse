import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cartRouter from './routes/cartRouter.js';
import productRouter from './routes/productRouter.js';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import sessionRouter from './routes/sessionRouter.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';

mongoose.connect(
  'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
);

const app = express();
app.listen(8080, () => console.log('tuki'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());
app.use(cookieParser());
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

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');

app.use('/products', productRouter);
app.use('/carts', cartRouter);
app.use('/session', sessionRouter);

app.use('/', express.static('./src/public'));
