import { Request, Response } from 'express';
import * as commentService from './comment.service';
import { CommentInput } from './comment.types';
import { errorResponse, successResponse } from './../../utils/response';

export const createComment = async (req: Request, res: Response): Promise<void> => {
  const comment: CommentInput = req.body;
  const result = await commentService.create(req, comment);
    if (result.error) {
       errorResponse(res, 400, 'Failed to add comment', result.error);
    }
    
     successResponse(res, 201, 'Comment added successfully', result.data);
};

export const getCommentsByProductId = async (req: Request, res: Response): Promise<void> => {
  const { product_id } = req.params;
  const result = await commentService.getByProductId(req, product_id);
  if (result.error) {
     errorResponse(res, 400, 'Failed to fetch comments', result.error);
  }

  if (result.data?.length === 0) {
     successResponse(res, 200, 'there is no comment', []);
  }

   successResponse(res, 200, 'Comments fetched successfully', result.data as []);
};
