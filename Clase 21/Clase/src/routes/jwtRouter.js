import { JWT_PRIVATE_KEY } from '../config/constans.config.js';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtAuth from '../middleware/jwtAuth.js';

const router = Router();
const users = [
  {
    email: 'jacinto@gmail.com',
    name: 'Jacinto',
    password: '123',
  },
];

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const user = { name, email, password };
  users.push(user);
  res.send('Registrado');
});

router.post('/login', (req, res) => {
  const user = users.find(({ email }) => email === req.body.email);
  const userWithoutPassword = {
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign({ user: userWithoutPassword }, JWT_PRIVATE_KEY, {
    expiresIn: '24h',
  });
  res.send({ token });
});

router.get('/current', jwtAuth, (req, res) =>
  res.send({ status: 'success', payload: req.user })
);

export default router;
