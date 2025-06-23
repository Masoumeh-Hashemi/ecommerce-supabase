import express from 'express';
import { createComment, getCommentsByProductId } from './comment.controller';

const router = express.Router();

router.post('/', createComment);
router.get('/:product_id', getCommentsByProductId);

export default router;
