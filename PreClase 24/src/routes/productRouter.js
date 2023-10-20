import { Router } from 'express';
import { productModel } from '../dao/models/product.model.js';

const router = Router();

router.get('/', async (req, res) => {
  const { limit, page, sort, query } = req.query;

  const sortObjectMapper = {
    asc: { price: 1 },
    desc: { price: -1 },
  };

  const modelQuery = query ? JSON.parse(query) : {};
  const modelLimit = limit ? parseInt(limit, 10) : 10;
  const modelPage = page ? parseInt(page, 10) : 1;
  const modelSort = sortObjectMapper[sort] ?? undefined;

  const products = await productModel.paginate(modelQuery, {
    limit: modelLimit,
    page: modelPage,
    sort: modelSort,
  });

  const response = {
    status: 'success',
    payload: products.docs,
    totalDocs: products.totalDocs,
    limit: products.limit,
    totalPages: products.totalPages,
    page: products.page,
    pagingCounter: products.pagingCounter,
    hasPrevPage: products.hasPrevPage,
    hasNextPage: products.hasNextPage,
    prevPage: products.prevPage,
    nextPage: products.nextPage,
  };

  res.send(response);
});

router.get('/:pid', async (req, res) => {});

router.post('/', async (req, res) => {
  const { title, description, price } = req.body;
  const product = await productModel.create({ title, description, price });

  res.send(product);
});

router.put('/:pid', async (req, res) => {});

router.delete('/:pid', async (req, res) => {});

export default router;
