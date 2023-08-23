import express from 'express';
import userRouter from './routes/userRouter.js';
import petRouter from './routes/petRouter.js';

const app = express();

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Algo falló');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('public'));

app.use('/api/users', userRouter);
app.use('/api/pets', petRouter);

app.listen(8080, () => console.log('tuki'));
