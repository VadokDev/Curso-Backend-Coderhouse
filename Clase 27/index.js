import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.get('/test', (req, res) => {
  res.send('respuesta');
});

app.listen(8080, () => console.log('tuki'));
