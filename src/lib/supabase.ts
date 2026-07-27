import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    "Aviso: As variáveis de ambiente do Supabase (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) não foram encontradas. " +
    "Funcionalidades que dependem do banco de dados estarão indisponíveis."
  );
}

export { supabase };

if (typeof window !== 'undefined' && supabase) {
  (window as any).supabase = supabase;
}