import { fork } from 'child_process';
import express from 'express';

const app = express();
app.listen(8080, () => console.log('tuki'));

let visitas = 0;

app.get('/', (req, res) => {
  visitas++;
  res.send(`Han visitado ${visitas} veces el sitio`);
});

app.get('/calculo-bloq', (req, res) => {
  let result = 0;

  for (let i = 0; i < 5e9; i++) {
    result += i;
  }

  res.send(`Resultado: ${result}`);
});

app.get('/calculo-nobloq', (req, res) => {
  const child = fork('./operacionCompleja.js');
  child.send('ola');
  child.on('message', (result) => {
    res.send(`Resultado: ${result}`);
  });
});
