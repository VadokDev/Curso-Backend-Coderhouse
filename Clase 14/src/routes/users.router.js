import { Router } from 'express';
import { userModel } from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

router.post('/', async (req, res) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return res.status(400).send({ error: 'Usuario inválido' });
  }

  const user = await userModel.create({
    first_name,
    last_name,
    email,
  });

  res.send(user);
});

router.delete('/:uid', async (req, res) => {
  const { uid } = req.params;
  const result = await userModel.deleteOne({ _id: uid });
  res.send(result);
});

router.put('/:uid', async (req, res) => {
  const { uid } = req.params;
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return res.status(400).send({ error: 'Usuario inválido' });
  }

  const result = await userModel.updateOne(
    { _id: uid },
    {
      first_name,
      last_name,
      email,
    }
  );

  res.send(result);
});

export default router;
