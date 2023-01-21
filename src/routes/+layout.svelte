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

{#if $page.data.session}
  <nav class="justify-end mt-2 flex">
    <div class="dropdown dropdown-end">
      <label for="menu" tabindex="-1" class="btn btn-sm">{$page.data.session.user.user_metadata.first_name}</label>
      <ul id="menu" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><button role="link" class="link mr-2" on:click={logout}>Logout</button></li>
      </ul>
    </div>
  </nav>
{:else}
  <!-- <a class="btn btn-primary mr-2" href="/auth/sign-up">Sign Up</a>
    <a class="btn btn-ghost mr-2" href="/auth/login">Login</a> -->
{/if}

<slot />
