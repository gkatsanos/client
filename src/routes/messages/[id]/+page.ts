import type { PostgrestResponse } from '@supabase/supabase-js';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { Database } from '$lib/types/database.types';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

type Message = Database['public']['Tables']['messages']['Row'];
type Profile = Database['public']['Tables']['profiles']['Row'];
type MessageWithProfile = Message & { profiles: Profile };

export const load = (async (event) => {
  const { session, supabaseClient } = await getSupabase(event);
  if (!session) {
    throw redirect(303, '/auth/login');
  }
  const { data: messages }: PostgrestResponse<MessageWithProfile> = await supabaseClient
    .from('messages')
    .select(
      `
      message,
      created_at,
      profiles (*)
    `
    )
    .eq('id', event.params.id);

  if (!messages) {
    return { messages: [] };
  }

  return { messages };
}) satisfies PageLoad;
