import jwt from 'jsonwebtoken';
import { JWT_PRIVATE_KEY } from '../config/constants.js';

const jwtAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send();
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, JWT_PRIVATE_KEY, (error, credentials) => {
    if (error) {
      return res.status(403);
    }

    req.user = credentials.user;
    next();
  });
};

export default jwtAuth;
