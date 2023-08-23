import { Router } from 'express';
import { uploader } from '../middlewares/multer.js';

const router = Router();
const users = [];

router.get('/', (req, res) => res.send(users));
router.post('/', uploader.single('file'), (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(200).send();
});

router.post('/imagen', uploader.single('file'), (req, res) => {
  res.send(req.file.path);
});

export default router;
