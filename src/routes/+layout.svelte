<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
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

  // implement a logout function
  export const logout = async () => {
    await supabaseClient.auth.signOut();
    invalidate('supabase:auth');
  };
</script>

<nav class="justify-end mt-2 flex">
  <a class="link mr-2" href="/">Home</a>
  {#if $page.data.session}
    <button class="link mr-2" on:click={logout}>Logout</button>
    <button class="link mr-2">{$page.data.session.user.user_metadata.first_name}</button>
  {:else}
    <a class="link mr-2" href="/sign-up">Sign Up</a>
    <a class="link mr-2" href="/login">Login</a>
  {/if}
</nav>

<slot />
