import express from 'express';
import { addToCart, getCartByUserId } from './cart.controller';

const router = express.Router();

router.post('/', addToCart);
router.get('/:user_id', getCartByUserId);

export default router;
