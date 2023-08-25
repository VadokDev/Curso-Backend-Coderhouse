import { Router } from 'express';
import { getUsers } from '../models/users.js';

const router = Router();

router.get('/secretos/:password', (req, res) => {
  const secretos = ['k jsdfvwre', 'iomsdcimo', 'jklsdfjklsdfgklm'];

  const password = req.params.password;

  res.render('secretos', {
    secretos,
    hasPermission: password === '12345',
    style: 'secretos.css',
  });
});

router.get('/register', (req, res) => {
  const users = getUsers();
  res.render('register', {
    users,
  });
});

export default router;
