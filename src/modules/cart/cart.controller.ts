import { Request, Response } from 'express';
import * as cartService from './cart.service';
import { CartItemInput } from './cart.types';
import { errorResponse, successResponse } from './../../utils/response';

export const addToCart = async (req: Request, res: Response): Promise<void>  => {
  const input: CartItemInput = req.body;
  const result = await cartService.insert(req, input);
  if (result.error) {
     errorResponse(res, 400, 'Failed to add item', result.error);
  }
   successResponse(res, 201, 'Item added successfully', result.data);
};

export const getCartByUserId = async (req: Request, res: Response) : Promise<void> => {
  const { user_id } = req.params;
  const result = await cartService.getByUserId(req, user_id);
  
  if (result.error) {
     errorResponse(res, 400, 'Failed to fetch cart items', result.error);
  }

  if (result.data?.length === 0) {
     successResponse(res, 200, 'Cart is empty', []);
  }

   successResponse(res, 200, 'Cart fetched successfully', result.data as []);
};
