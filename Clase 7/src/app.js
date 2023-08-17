const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

const usuarios = [
  { id: 13, genero: 'masculino', nombre: 'Eleusterio', apellido: 'Hernández' },
  { id: 49, genero: 'femenino', nombre: 'Jacinto', apellido: 'Mercedes' },
  { id: 92, genero: 'masculino', nombre: 'Eustaquio', apellido: 'Fernández' },
];

app.get('/', (req, res) => {
  if (req.query.genero) {
    const usuario = usuarios.filter((user) => user.genero === req.query.genero);
    return res.send(usuario);
  }

  res.send(usuarios);
});

app.listen(8080, () => console.log('talisto'));
