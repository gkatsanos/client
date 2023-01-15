<script lang="ts">
  import { supabaseClient } from '$lib/supabaseClient';
  import { page } from '$app/stores';
  import LoginForm from '$lib/components/LoginForm.svelte';
  import type { PageData, ActionData } from './$types';

  export let data: PageData;
  export let form: ActionData;
</script>

{#if form?.missing}<p class="error">The email field is required</p>{/if}
{#if data.session?.user}
  <div class="text-center">
    <h1 class="text-2xl font-bold">
      Hey, {data.session?.user.user_metadata.first_name}
      {data.session?.user.user_metadata.last_name}
    </h1>
    <p>You are logged in!</p>
    <p class="mt-2">
      <a href="/" class="link">Go back home</a>
    </p>
  </div>
{:else}
  <LoginForm />
{/if}
