import { Request } from 'express';
import { getSupabaseClient } from '../../configs/supabase';
import { CommentInput } from './comment.types';

export const create = async (req: Request, comment: CommentInput) => {
  const supabase = getSupabaseClient(req);
  const { data, error } = await supabase.from('comments').insert([comment]);
  return { data, error };
};

export const getByProductId = async (req: Request, product_id: string) => {
  const supabase = getSupabaseClient(req);
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('product_id', product_id)
    .order('created_at', { ascending: false });

  return { data, error };
};
