import { Router } from 'express';
import ProductManager from '../ProductManager.js';

const router = Router();
const productManager = new ProductManager('./products.json');

router.get('/', async (req, res) => {
  const limit = req.query.limit;
  const products = await productManager.getProducts();

  if (limit) {
    return res.send(products.slice(0, limit));
  }

  res.send(products);
});

router.get('/:pid', async (req, res) => {
  const product = await productManager.getProductById(
    parseInt(req.params.pid, 10)
  );
  res.send(product);
});

router.post('/', async (req, res) => {
  const product = req.body;

  if (product.status === undefined) {
    product.status = true;
  }

  await productManager.addProduct(product);
  const products = await productManager.getProducts();
  req.context.socketServer.emit('actualizar_productos', products);
  res.status(200).send();
});

router.put('/:pid', async (req, res) => {
  if (req.body.id) {
    return res.status(400).send('No deberías enviar un id');
  }

  await productManager.updateProduct(parseInt(req.params.pid, 10), req.body);
  res.status(200).send();
});

router.delete('/:pid', async (req, res) => {
  await productManager.deleteProduct(parseInt(req.params.pid, 10));
  const products = await productManager.getProducts();
  req.context.socketServer.emit('actualizar_productos', products);
  res.status(200).send();
});

export default router;
