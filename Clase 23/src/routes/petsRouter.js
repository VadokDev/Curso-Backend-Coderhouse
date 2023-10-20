import { Router } from 'express';

const router = Router();

const pets = [];

router.post('/', (req, res) => {
  const { name, specie } = req.body;
  pets.push({ name, specie });
  res.send('Mascota agregada');
});

router.get('/:pet([a-z%20A-Z]+)', (req, res) => {
  const pet = req.pet;
  res.send(pet);
});

router.put('/:pet([a-z%20A-Z]+)', (req, res) => {
  const pet = req.pet;
  pet.adopted = true;
  res.send(pet);
});

router.param('pet', (req, res, next, petName) => {
  const pet = pets.find(({ name }) => name === petName);

  if (pet) {
    req.pet = pet;
  } else {
    req.pet = null;
  }

  next();
});

export default router;
