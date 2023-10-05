import { Router } from 'express';
import { userModel } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import passport from 'passport';

const router = Router();

router.post(
  '/register',
  passport.authenticate('register', { failureRedirect: '/failregister' }),
  async (req, res) => {
    res.redirect('/login');
  }
);

router.post(
  '/login',
  passport.authenticate('login', { failureRedirect: '/failogin' }),
  async (req, res) => {
    if (!req.user) {
      res.status(400).send();
    }

    req.session.user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      age: req.user.age,
    };

    res.redirect('/profile');
  }
);

router.post('/recover', async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).lean();

  if (!user) {
    return res.send(
      'Si tu correo existe en nuestros registros, recibiras un mail con la información para recuperar tu contraseña'
    );
  }

  user.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await userModel.updateOne({ email }, user);

  res.redirect('/login');
});

export default router;
