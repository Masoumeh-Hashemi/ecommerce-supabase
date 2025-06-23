import { Request, Response } from 'express';
import * as authService from './auth.service';
import { AuthRequestBody } from './auth.types';


export const signup = async (req: Request, res: Response) => {
    const { email, password } = req.body as AuthRequestBody;

  const result = await authService.signup(req, email, password);
  res.status(result.error ? 400 : 200).json(result.error || result.data);
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body as AuthRequestBody;
  const result = await authService.login(req, email, password);
  res.status(result.error ? 400 : 200).json(result.error || result.data);
};
