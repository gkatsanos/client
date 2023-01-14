import type { PostgrestResponse } from '@supabase/supabase-js';
import { supabaseClient } from '$lib/supabaseClient';
import type { Database } from '$lib/types/database.types';
import type { PageLoad } from './$types';
import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const { error } = await supabaseClient.auth.signInWithOtp({ email });
    if (error) {
      return {
        status: 500,
        body: {
          error: error.message
        }
      };
    }
    // throw redirect(302, '/');
    return { success: true };
  },
  'login-with-password': async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email, password);
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      return {
        status: 500,
        body: {
          error: error.message
        }
      };
    }
    throw redirect(302, '/');
    return { success: true };
  }
};
