import express from 'express';
import userRouter from './src/routers/users.js';

const app = express();
app.use('/users', userRouter);
app.use(express.static('./public'));

app.listen(8080, () => console.log('tuki'));
