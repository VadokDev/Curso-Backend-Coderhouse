import express from 'express';
import userRouter from './routes/user.router.js';

const app = express();

app.listen(8080, () => console.log('tuki'));

app.use('/user', userRouter);
