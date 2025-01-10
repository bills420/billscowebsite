import { createClient } from '@supabase/supabase-js';
import { COMPANY_INFO } from './constants';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const isAdmin = async (userId: string) => {
  const { data, error } = await supabase
    .from('admins')
    .select('*')
    .eq('user_id', userId)
    .single();
  
  return !error && data;
};

export const notifyAdmin = async (subject: string, content: string) => {
  try {
    await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject,
        content,
        adminEmail: COMPANY_INFO.adminEmail
      })
    });
    return true;
  } catch (error) {
    console.error('Admin notification failed:', error);
    return false;
  }
};