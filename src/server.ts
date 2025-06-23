import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import productRoutes from './modules/products/product.routes';
import commentRoutes from './modules/comments/comment.routes';
import cartRoutes from './modules/cart/cart.routes';
import authRouter from './modules/auth/auth.routes';

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRouter);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
