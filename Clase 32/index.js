import express from 'express';

const app = express();

app.listen(8080, () => console.log('asd'));

app.get('/', (req, res) => {});

app.use((error, req, res, next) => {
  console.log(error);
  res.send('Error manejado');
});
