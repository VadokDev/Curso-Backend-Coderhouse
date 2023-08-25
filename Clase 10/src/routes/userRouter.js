import { addUser, getUser, getUsers } from '../models/users.js';
import { Router } from 'express';

const router = new Router();

router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  res.send(getUser(userId));
});

router.get('/', (req, res) => {
  res.send(getUsers());
});

router.post('/', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const lastname = req.body.lastname;
  const photoUrl = req.body.photoUrl;

  addUser(id, name, lastname, photoUrl);
  res.status(200).send();
});

export default router;
