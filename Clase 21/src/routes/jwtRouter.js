import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_PRIVATE_KEY } from '../config/constants.js';
import jwtAuth from '../middleware/jwtAuth.js';

const router = Router();
const users = [];

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const user = {
    name,
    email,
    password,
  };
  users.push(user);
  const access_token = jwt.sign({ user }, JWT_PRIVATE_KEY, {
    expiresIn: '24h',
  });
  res.send({ access_token });
});

router.post('/login', (req, res) => {
  const user = users.find((dbUser) => dbUser.email === req.body.email);
  const access_token = jwt.sign({ user }, JWT_PRIVATE_KEY, {
    expiresIn: '24h',
  });
  res.send({ access_token });
});

router.get('/current', jwtAuth, (req, res) =>
  res.send({ status: 'success', payload: req.user })
);

export default router;
