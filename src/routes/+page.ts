import type { PostgrestResponse } from '@supabase/supabase-js';
import { supabaseClient } from '$lib/supabaseClient';
import type { Database } from '$lib/types/database.types';
import type { PageLoad } from './$types';

type Message = Database['public']['Tables']['messages']['Row'];

export const load = (async () => {
	const { data: messages }: PostgrestResponse<Message> = await supabaseClient.from('messages').select(`
	message,
	created_at,
	profiles (
	  id
	)
  `);

	if (!messages) {
		return { messages: [] };
	}

	return { messages };
}) satisfies PageLoad;
