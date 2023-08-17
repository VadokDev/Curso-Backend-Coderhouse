const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/bienvenida', (req, res) =>
  res.send('<p style="color: red;">Hola mundo</p>')
);

app.get('/usuario', (req, res) => {
  const usuario = {
    nombre: 'Jacinto',
    apellido: 'Hernández',
    edad: 25,
    correo: 'jacinto@hernandez.com.ar',
  };

  res.send(usuario);
});

app.get('/usuario/:idUsuario', (req, res) => {
  const nombres = {
    1: 'Jacinto',
    2: 'Eleusterio',
  };

  const nombre = nombres[req.params.idUsuario];
  res.send(nombre);
});

app.get('/persona/:nombre/:apellido/:nombre2', (req, res) => {
  res.send(
    `Hola ${req.params.nombre} ${req.params.apellido} ${req.params.nombre2}`
  );
});

const usuarios = [
  { id: 13, nombre: 'Eleusterio', apellido: 'Hernández' },
  { id: 49, nombre: 'Jacinto', apellido: 'De las Mercedes' },
  { id: 92, nombre: 'Eustaquio', apellido: 'Fernández' },
];

app.get('/', (req, res) => {
  res.send(usuarios);
});

// Importante el orden de /queries y /:userId
app.get('/queries', (req, res) => {
  res.send(req.query);
});

// Importante el orden de /queries y /:userId
app.get('/:userId/queries', (req, res) => {
  res.send(
    `Query: ${JSON.stringify(req.query)} - Params: ${JSON.stringify(
      req.params
    )}`
  );
});

app.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const user = usuarios.find((usuario) => usuario.id === userId);
  res.send(user);
});

app.listen(8080, () => console.log('talisto'));
