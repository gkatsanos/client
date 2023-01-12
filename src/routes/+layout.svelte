<script lang="ts">
  import { supabaseClient } from '$lib/supabaseClient';
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    const {
      data: { subscription }
    } = supabaseClient.auth.onAuthStateChange(() => {
      invalidate('supabase:auth');
    });

    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<nav class="justify-center mt-2 flex">
  <a class="link mr-2" href="/">Home</a>
  <a class="link mr-2" href="/sign-up">Sign Up</a>
  <a class="link" href="/login">Login</a>
</nav>

<slot />

<style>
  .link {
    @apply border-b border-neutral-200 p-2 hover:border-b-2 hover:border-neutral-400 hover:mb-[-1px];
  }
</style>
