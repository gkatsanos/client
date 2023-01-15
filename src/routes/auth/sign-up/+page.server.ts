import type { Actions } from './$types';
import { supabaseClient } from '$lib/supabaseClient';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const { email, password, first_name, last_name, username } = data;
    console.log(email, password, first_name, last_name, username);
    const { data: user, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: first_name,
          last_name: last_name,
          username: username
        }
      }
    });

    if (error) {
      return {
        status: 500,
        body: {
          error: error.message
        }
      };
    }

    return {
      status: 200,
      body: {
        user
      }
    };
  }
};
