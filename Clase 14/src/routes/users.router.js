import { Router } from 'express';
import { userModel } from '../models/users.model.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return res.send({ status: 'error' });
  }

  const user = await userModel.create({
    first_name,
    last_name,
    email,
  });

  res.send(user);
});

router.put('/:uid', async (req, res) => {
  const { uid } = req.params;
  const { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    return res.send({ status: 'error' });
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

router.delete('/:uid', async (req, res) => {
  const { uid } = req.params;
  const result = await userModel.deleteOne({ _id: uid });
  res.send(result);
});

export default router;
