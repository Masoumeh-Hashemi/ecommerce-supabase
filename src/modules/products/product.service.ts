import { Request } from 'express';
import { getSupabaseClient } from '../../configs/supabase';
import { ProductInput } from './product.types';

export const getAll = async (req: Request) => {
  const supabase = getSupabaseClient(req);
  const { data, error } = await supabase.from('products').select('*');
  return { data, error };
};

export const create = async (req: Request, product: ProductInput) => {
  const supabase = getSupabaseClient(req);
  const { data, error } = await supabase.from('products')
    .insert([product])
    .select()
  return { data:data?.[0], error };
};
