import express from 'express';
import { getAllProducts, createProduct } from './product.controller';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);

export default router;
