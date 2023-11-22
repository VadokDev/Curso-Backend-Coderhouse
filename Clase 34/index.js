import express from 'express';
import { logger } from './utils/logger.js';
import { errors } from './middlewares/errors.js';

const app = express();

app.listen(8080, () => console.log('tuki'));
app.use(errors);

app.get('/', (req, res) => {
  logger.error('algo paso');
  res.send('hola');
});
