<script lang="ts">
	import type { PageData } from './$types';
	import Message from '../components/Message.svelte';

	export let data: PageData;
</script>

{#each data.messages as message}
	<Message message={message.message} createdAt={message.created_at} />
{/each}
