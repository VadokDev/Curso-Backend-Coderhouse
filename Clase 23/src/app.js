import express from 'express';
import petsRouter from './routes/petsRouter.js';
import UserRouter from './routes/UserRouter.js';
import SessionRouter from './routes/SessionRouter.js';

const app = express();

app.listen(8080, () => console.log('tuki'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/pets', petsRouter);

const userRouter = new UserRouter();
const sessionRouter = new SessionRouter();

app.use('/users', userRouter.getRouter());
app.use('/api', sessionRouter.getRouter());
