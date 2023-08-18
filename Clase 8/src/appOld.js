const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => console.log('tuki'));

const users = [
  {
    id: 1,
    nombre: 'Jacinto',
  },
  {
    id: 2,
    nombre: 'Eleusterio',
  },
];

app.get('/api/users', (req, res) => res.send(users));
app.get('/api/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = users.find(({ id }) => id === parseInt(userId, 10));

  if (user === undefined) {
    return res.status(404).send();
  }

  res.send(user);
});

app.post('/api/users', (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const user = { id, nombre };

  if (id === undefined || nombre === undefined) {
    return res.status(400).send();
  }

  users.push(user);

  res.send();
});

app.put('/api/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const nuevoNombre = req.body.nombre;

  if (nuevoNombre === undefined) {
    return res.status(400).send();
  }

  const user = users.find(({ id }) => id === parseInt(userId, 10));

  if (user === undefined) {
    return res.status(404).send();
  }

  user.nombre = nuevoNombre;
  res.send();
});

app.delete('/api/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const user = users.find(({ id }) => id === parseInt(userId, 10));

  if (user === undefined) {
    return res.status(404).send();
  }

  const userIndex = users.findIndex(({ id }) => id === parseInt(userId, 10));
  users.splice(userIndex, 1);

  res.send();
});
