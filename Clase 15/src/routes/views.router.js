import { Router } from 'express';
import AutosManager from '../dao/db/AutosManager.js';

const router = Router();
const autosManager = new AutosManager();

router.get('/verAutos', async (req, res) => {
  const autos = await autosManager.getAll();
  console.log(autos);
  res.render('autos', { autos });
});

router.get('/chat', (req, res) => res.render('chat', {}));

export default router;
