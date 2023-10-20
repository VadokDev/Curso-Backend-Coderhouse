import { Router } from 'express';
import jwt from 'jsonwebtoken';

export default class BaseRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  handlePolicies(policies) {
    return (req, res, next) => {
      if (policies[0] === 'PUBLIC') {
        return next();
      }

      const authHeaders = req.headers.authorization;
      if (!authHeaders) {
        return res.status(401).send({ status: 'error', error: 'Unauthorized' });
      }

      const token = authHeaders.split(' ')[1];
      const user = jwt.verify(token, 'secreto');

      if (!policies.includes(user.role.toUpperCase())) {
        return res
          .status(403)
          .send({ status: 'error', error: 'No cumple con las políticas' });
      }

      console.log(user);
      next();
    };
  }

  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    );
  }

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.log(error);
        params[1].status(500).send(error);
      }
    });
  }
}
