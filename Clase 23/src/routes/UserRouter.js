import BaseRouter from './BaseRouter.js';

export default class UserRouter extends BaseRouter {
  init() {
    this.get('/', (req, res) => res.send('Custom Router'));
    this.get('/asd', (req, res) => res.send('Custom Router'));
    this.get('/asdasd', (req, res) => res.send('Custom Router'));
  }
}
