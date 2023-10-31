import { Router } from 'express';
import ToyManager from '../controllers/toyManager.js';

const toyManager = new ToyManager();

const router = Router();

router.get('/', (req, res) => {
  const toys = toyManager.getJuguetes();
  res.send(toys);
});

export default router;
