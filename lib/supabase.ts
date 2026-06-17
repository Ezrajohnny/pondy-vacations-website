import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://dckecivjxpwkdotvyxum.supabase.co";

const supabaseKey =
  "sb_publishable_w8FEEnheBDUAPVa2KGxbGQ_YEixGhQN";
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);