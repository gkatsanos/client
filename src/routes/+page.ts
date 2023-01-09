import { createClient } from '@supabase/supabase-js';
import type { PostgrestResponse } from '@supabase/supabase-js';
import type { PageLoad } from './$types';
import type { Database } from '../../database.types';
import { env } from '$env/dynamic/public';

type Message = Database['public']['Tables']['messages']['Row'];

const supabase = createClient<Database>(
	env.PUBLIC_SUPABASE_URL ?? '',
	env.PUBLIC_SUPABASE_ANON_KEY ?? ''
);

export const load = (async () => {
	const { data: messages }: PostgrestResponse<Message> = await supabase
		.from('messages')
		.select('message');

	if (!messages) {
		return { messages: [] };
	}

	return { messages };
}) satisfies PageLoad;
