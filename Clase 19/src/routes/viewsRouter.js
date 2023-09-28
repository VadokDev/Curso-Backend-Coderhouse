import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
  if (req.session.isLogged) {
    return res.redirect('/profile');
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.isLogged) {
    return res.redirect('/profile');
  }

  res.render('signup');
});

router.get('/profile', (req, res) => {
  if (!req.session.isLogged) {
    return res.redirect('/login');
  }

  const { username, email } = req.session;
  console.log(req.session);
  res.render('profile', { username, email });
});

export default router;
