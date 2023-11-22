// Archivo userController.js
class UserController {
  constructor(repositories) {
    this.repositories = repositories;
  }

  execute(req, res) {
    const users = this.repositories.userRepository.getAll();
    res.send(users);
  }
}

// index.js
const userController = new UserController({
  userRepository: new UserRepository(),
});
export { userController };

// router.js
import { Router } from 'express';
import { userController } from '../controllers';
const router = Router();

router.get('/url', userController.execute);
