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
    // add a fake delay to make it easier to see the loading state
    const { request } = event;
    const { supabaseClient } = await getSupabase(event);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
      return fail(400, { email, missing: true });
    }
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      return fail(400, { password, incorrect: true });
    }
    throw redirect(302, '/');
  }
};
