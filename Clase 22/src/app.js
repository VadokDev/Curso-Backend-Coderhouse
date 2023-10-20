import express from 'express';
import cookieParser from 'cookie-parser';
import initializePassport from './config/passport.config.js';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.get('/login', (req, res) => {
  const access_token = jwt.sign(
    { user: 'Gonzalo', mail: 'mail@mail.com' },
    'coderSecret',
    {
      expiresIn: '24h',
    }
  );
  res
    .cookie('coderCookieToken', access_token, {
      maxAge: 100000,
      httpOnly: true,
    })
    .send('Logeado');
});

app.get('/cookies', (req, res) => res.send(req.cookies));

app.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);

app.listen(8080, () => console.log('tuki'));
