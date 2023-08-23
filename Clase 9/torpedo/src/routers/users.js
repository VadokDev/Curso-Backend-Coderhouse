import { Router } from 'express';
import { uploader } from '../middlewares/multer.js';

const router = Router();

router.get('/', (req, res) => res.send({}));
router.post('/', uploader.single('file'), (req, res) => {
  res.send(req.file.path);
});

export default router;
