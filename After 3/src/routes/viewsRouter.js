import { Router } from 'express';
import ProductManager from '../ProductManager.js';

const router = Router();
const productManager = new ProductManager('./products.json');

router.get('/', async (req, res) => {
  const products = await productManager.getProducts();
  res.render('home', { products });
});

router.get('/realTimeProducts', async (req, res) => {
  res.render('realTimeProducts', {});
});

export default router;
