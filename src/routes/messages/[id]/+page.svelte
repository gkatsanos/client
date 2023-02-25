<script lang="ts">
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import Message from '$lib/components/Message.svelte';

  export let data: PageData;
</script>

{#each data.messages as item}
  <Message {...item} />
{/each}
