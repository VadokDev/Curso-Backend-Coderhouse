import { Router } from 'express';
import publicRoutes from '../middleware/publicRoutes.js';
import privateRoutes from '../middleware/privateRoutes.js';

const router = Router();

router.get('/login', publicRoutes, (req, res) => {
  res.render('login');
});

router.get('/signup', publicRoutes, (req, res) => {
  res.render('signup');
});

router.get('/recover', publicRoutes, (req, res) => {
  res.render('recover');
});

router.get('/profile', privateRoutes, (req, res) => {
  const { first_name, last_name, email, age } = req.session;
  res.render('profile', { first_name, last_name, email, age });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

router.get('/failregister', (req, res) => res.send('Fallo en registro'));

router.get('/faillogin', (req, res) => res.send('Fallo en login'));

export default router;
