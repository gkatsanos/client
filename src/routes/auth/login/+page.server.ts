import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
  login: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const email = data.get('email');
    if (!email) {
      return fail(400, { email, missing: true });
    }
    const { supabaseClient } = await getSupabase(event);
    const { error } = await supabaseClient.auth.signInWithOtp({ email });
    if (error) {
      return {
        status: 500,
        body: {
          error: error.message
        }
      };
    }
    throw redirect(302, '/');
  },
  'login-with-password': async (event) => {
    const { request } = event;
    const { supabaseClient } = await getSupabase(event);
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
      return fail(400, { email, missing: true });
    }
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
  }
};
