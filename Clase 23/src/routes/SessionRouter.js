import BaseRouter from './BaseRouter.js';
import jwt from 'jsonwebtoken';

export default class SessionRouter extends BaseRouter {
  init() {
    this.get('/login', ['USER'], (req, res) => {
      const user = {
        email: 'asd@asd.com',
        role: 'user',
      };

      const token = jwt.sign(user, 'secreto');
      res.send(token);
    });

    this.get('/secreto', ['ADMIN'], (req, res) => {
      res.send('Estás autenticado');
    });
  }
}
