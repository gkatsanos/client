import '$lib/supabaseClient';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // redirect all /auth routes to / if the user is logged in
  if (event.url.pathname.startsWith('/auth')) {
    const { session } = await getSupabase(event);

    if (session) {
      throw redirect(303, '/');
    }
  }

  return resolve(event);
};
