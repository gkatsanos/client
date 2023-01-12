<script lang="ts">
  import type { PageData } from './$types';
  import Message from '$lib/components/Message.svelte';

  export let data: PageData;
</script>

<div class="max-w-3xl mx-auto my-3 grid grid-cols-2 gap-4">
  {#each data.messages as item}
    <Message {...item} />
  {/each}
</div>
