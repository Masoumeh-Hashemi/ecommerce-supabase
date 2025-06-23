import { createClient } from '@supabase/supabase-js';
import { Request } from 'express';
import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(__dirname, './.env') });

export function getSupabaseClient(req?: Request) {
  const token = req?.headers.authorization?.split(' ')[1];
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
    token
      ? {
          global: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        }
      : undefined
  );
}
