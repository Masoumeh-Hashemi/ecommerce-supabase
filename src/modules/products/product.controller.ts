import { Request, Response } from 'express';
import * as productService from './product.service';
import { ProductInput } from './product.types';
import { errorResponse, successResponse } from './../../utils/response';

export const getAllProducts = async (req: Request, res: Response):Promise<void> => {
  const result = await productService.getAll(req);
    if (result.error) {
       errorResponse(res, 400, 'Failed to fetch products', result.error);
    }
  
    if (result.data?.length === 0) {
       successResponse(res, 200, 'there is no product', []);
    }
  
     successResponse(res, 200, 'products fetched successfully', result.data as []);
};

export const createProduct = async (req: Request, res: Response):Promise<void> => {
  const product: ProductInput = req.body;
  const result = await productService.create(req, product);
  if (result.error) {
     errorResponse(res, 400, 'Failed to add product', result.error);
  }
  
   successResponse(res, 201, 'Product added successfully', result.data);
};
