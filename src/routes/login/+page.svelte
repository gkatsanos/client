<script lang="ts">
  import { supabaseClient } from '$lib/supabaseClient';
  import { page } from '$app/stores';
  import { redirect } from '@sveltejs/kit';
  import LoginForm from '$lib/components/LoginForm.svelte';

  let loading = false;
  let email: string;
  let password: string;

  // const handleLogin = async () => {
  //   try {
  //     loading = true;
  //     const { error } = await supabaseClient.auth.signInWithOtp({ email });
  //     if (error) throw error;
  //     alert('Check your email for the login link!');
  //     throw redirect(302, '/');
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message);
  //     }
  //   } finally {
  //     loading = false;
  //   }
  // };

  // const handleLoginWithPassword = async () => {
  //   try {
  //     loading = true;
  //     const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  //     if (error) throw error;
  //     alert('Welcome!');
  //     throw redirect(302, '/');
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message);
  //     }
  //   } finally {
  //     loading = false;
  //   }
  // };
</script>

<div class="flex justify-center h-full items-center">
  {#if $page.data.session}
    <div class="text-center">
      <h1 class="text-2xl font-bold">
        Hey, {$page.data.session.user.user_metadata.first_name}
        {$page.data.session.user.user_metadata.last_name}
      </h1>
      <p>You are logged in!</p>
      <p class="mt-2">
        <a href="/" class="link">Go back home</a>
      </p>
    </div>
  {:else}
    <LoginForm />
  {/if}
</div>
