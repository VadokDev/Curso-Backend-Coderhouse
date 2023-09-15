import express from 'express';
import userRouter from './routes/users.router.js';
import mongoose from 'mongoose';

const app = express();
const httpServer = app.listen(8080, () => console.log('tuki'));

mongoose.connect(
  'mongodb+srv://gonzalofdez06:coderhouse123@cluster0.gwswo1q.mongodb.net/?retryWrites=true&w=majority'
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
