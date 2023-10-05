import { Router } from 'express';
import { userModel } from '../models/user.model.js';
import passport from 'passport';

const router = Router();

router.post(
  '/signup',
  passport.authenticate('register', { failureRedirect: '/failregister' }),
  async (req, res) => {
    console.log(req.user);
    res.redirect('/login');
  }
);

router.post(
  '/login',
  passport.authenticate('login', { failureRedirect: '/faillogin' }),
  async (req, res) => {
    req.session.first_name = req.user.first_name;
    req.session.last_name = req.user.last_name;
    req.session.email = req.user.email;
    req.session.age = req.user.age;
    req.session.isLogged = true;

    res.redirect('/profile');
  }
);

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
  '/githubcallback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    req.session.user = req.user;
    req.session.isLogged = true;
    res.redirect('/profile');
  }
);

export default router;
