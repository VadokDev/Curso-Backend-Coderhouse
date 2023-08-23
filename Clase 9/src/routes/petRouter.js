import { Router } from 'express';

const router = Router();
const pets = [];

router.get('/', (req, res) => res.send(pets));
router.post('/', (req, res) => {
  const perrito = req.body;
  pets.push(perrito);
  res.status(200).send();
});

export default router;
