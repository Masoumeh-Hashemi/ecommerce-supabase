import { Request } from 'express';
import { getSupabaseClient } from '../../configs/supabase';
import { CartItemInput } from './cart.types';

export const insert = async (req: Request, input: CartItemInput) => {
  const supabase = getSupabaseClient(req);
  const { data: existing } = await supabase
    .from('cart_items')
    .select('*')
    .eq('user_id', input.user_id)
    .eq('product_id', input.product_id)
    .single();

  if (existing) {
    const newQuantity = existing.quantity + input.quantity;

    const { data, error } = await supabase
      .from('cart_items')
      .update({ quantity: newQuantity })
      .eq('id', existing.id)
    return { data, error };
  }

     const { data, error } = await supabase
      .from('cart_items')
      .insert([input])
      .select()
      .single();
      return { data, error };
    

};

export const getByUserId = async (req: Request, user_id: string) => {
  const supabase = getSupabaseClient(req);
  const { data, error } = await supabase
    .from('cart_items')
    .select('*, products(*)')
    .eq('user_id', user_id);
  return { data, error };
};
