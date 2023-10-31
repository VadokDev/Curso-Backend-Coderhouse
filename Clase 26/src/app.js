import express from 'express';
import ToysRouter from './routes/toys.router.js';

const app = express();

app.use('/toys', ToysRouter);

app.listen(8080, () => console.log('tuki'));
