import { Request } from 'express';
import { getSupabaseClient } from '../../configs/supabase';

export const signup = async (req: Request, email: string, password: string) => {
  const supabase = getSupabaseClient(req);
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
};

export const login = async (req: Request, email: string, password: string) => {
  const supabase = getSupabaseClient(req);
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
};
