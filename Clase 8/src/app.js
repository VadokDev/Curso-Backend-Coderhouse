const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => console.log('tuki'));

let frase = 'Frase Inicial';

app.get('/api/frase', (req, res) => {
  res.send({
    frase: frase,
  });
});

app.get('/api/palabras/:pos', (req, res) => {
  const pos = parseInt(req.params.pos, 10);
  // ['Frase', 'Inicial']
  const palabras = frase.split(' ');
  res.send({
    buscada: palabras[pos],
  });
});

app.post('/api/palabras', (req, res) => {
  const palabra = req.body.palabra;
  frase = `${frase} ${palabra}`;
  //     0         1            2
  // ['Frase', 'Inicial', 'PalabraNueva'].length - 1
  // 3 - 1
  // 2
  const respuesta = {
    agregada: palabra,
    pos: frase.split(' ').length - 1,
  };

  res.send(respuesta);
});

app.put('/api/palabras/:pos', (req, res) => {
  const palabras = frase.split(' ');

  const pos = parseInt(req.params.pos, 10);
  const palabraNueva = req.body.palabra;
  const palabraVieja = palabras[pos];

  palabras[pos] = palabraNueva;
  frase = palabras.join(' ');

  const respuesta = {
    actualizada: palabraNueva,
    anterior: palabraVieja,
  };

  res.send(respuesta);
});

app.delete('/api/palabras/:pos', (req, res) => {
  const pos = req.params.pos;
  const palabras = frase.split(' ');
  delete palabras[pos];

  frase = palabras.join(' ');
  res.send();
});
