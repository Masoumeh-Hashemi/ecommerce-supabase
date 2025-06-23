import { PostgrestError } from '@supabase/supabase-js';
import {  Response } from 'express';

export const successResponse = (res:Response, statusCode = 200, message = 'Success', data : null | [] =null) => {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };
  
  export const errorResponse = (res:Response, statusCode = 400, message = 'Something went wrong', error : PostgrestError| null) => {
    return res.status(statusCode).json({
      success: false,
      message,
      error,
    });
  };
  