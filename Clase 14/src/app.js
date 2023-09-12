import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/users.router.js';

const app = express();
const httpServer = app.listen(8080, () => console.log('tuki'));

mongoose.connect(
  'mongodb+srv://ernesto269310:aRE8UNYe9OLaXJse@cluster1.anzm58b.mongodb.net/?retryWrites=true&w=majority'
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRouter);
