<script lang="ts">
  import { enhance } from '$app/forms';
  let loading = false;
  let email: string;
  let password: string;
  let forgotPasswordEmail: string;
  let activeForm = 'login';
</script>

{#if activeForm === 'login'}
  <h2 class="text-left text-2xl font-bold mb-2">Welcome back</h2>
  <p class="text-xs pb-2">
    Don't have an account?
    <a class="link link-primary" href="/auth/sign-up">Make one.</a>
  </p>
  <form method="POST" use:enhance action="?/login-with-password" class="grid grid-rows-2 gap-2 mb-4">
    <input class="input input-bordered w-full" type="email" placeholder="Your email" name="email" bind:value={email} />
    <input
      class="input input-bordered w-full"
      type="password"
      placeholder="Your password"
      name="password"
      bind:value={password}
    />
    <input
      type="submit"
      class="btn btn-primary btn-md mt-2 btn-block"
      value={loading ? 'Loading' : 'Login'}
      disabled={loading}
    />
  </form>
  <p class="text-xs py-2">
    Forgot your password?
    <button class="link link-primary" on:click={() => (activeForm = 'forgot-password')}>Login with Magic Link</button>
  </p>
{:else}
  <h2 class="text-left text-2xl font-bold mb-2">Enter your email</h2>
  <p class="text-xs mb-2">you'll receive a login link! No passwords!</p>
  <form method="POST" action="?/login" use:enhance class="grid gap-2">
    <input
      class="input input-bordered w-full"
      type="email"
      placeholder="Your email"
      name="email"
      bind:value={forgotPasswordEmail}
    />
    <input
      type="submit"
      class="btn btn-primary btn-block btn-md mt-2"
      value={loading ? 'Loading' : 'Send magic link'}
      disabled={loading}
    />
  </form>
  <p class="text-xs py-2">
    <button class="link link-primary" on:click={() => (activeForm = 'login')}>Or login with password</button>
  </p>
{/if}
