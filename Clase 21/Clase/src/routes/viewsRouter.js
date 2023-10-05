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

router.get('/profile', privateRoutes, (req, res) => {
  const { first_name, last_name, email, age } = req.session;
  res.render('profile', { first_name, last_name, email, age });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

export default router;
