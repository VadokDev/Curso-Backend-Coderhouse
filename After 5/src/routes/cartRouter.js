import { Router } from 'express';
import { productModel } from '../dao/models/product.model.js';
import { cartModel } from '../dao/models/cart.model.js';

const router = Router();

router.get('/', async (req, res) => {});

router.get('/:cid', async (req, res) => {
  const cart = await cartModel
    .findOne({ _id: req.params.cid })
    .populate('products.product');
  res.send(cart.products);
});

router.post('/', async (req, res) => {
  const { products } = req.body;
  const cart = await cartModel.create({ products });
  res.send(cart);
});

router.post('/:cid/product/:pid', async (req, res) => {
  const cart = await cartModel.findOne({ _id: req.params.cid });
  const oldProduct = cart.products.find(
    ({ product }) => product.toString() === req.params.pid
  );

  if (oldProduct) {
    oldProduct.quantity += 1;
  } else {
    cart.products.push({
      product: req.params.pid,
      quantity: 1,
    });
  }

  const update = await cartModel.updateOne({ _id: req.params.cid }, cart);
  res.send(update);
});

router.put('/:cid', async (req, res) => {});

router.delete('/:cid', async (req, res) => {});

export default router;
