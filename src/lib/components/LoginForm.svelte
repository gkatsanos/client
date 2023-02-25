<script lang="ts">
  import { enhance } from '$app/forms';
  let isLoading = false;
  let email: string;
  let password: string;
  let forgotPasswordEmail: string;
  let activeForm = 'login';

  export let form: ActionData;
  export let page: ActionData;
</script>

{#if activeForm === 'login'}
  <h2 class="text-left text-2xl font-bold mb-2">Welcome back</h2>
  <p class="text-xs pb-2">
    Don't have an account?
    <a class="link link-primary" href="/auth/sign-up">Make one.</a>
  </p>
  <form
    method="POST"
    use:enhance={({ form, data, action, cancel }) => {
      isLoading = true;

      return async ({ update, result }) => {
        await update();
        if (result.type !== 'redirect') {
          isLoading = false;
        }
      };
    }}
    action="?/login-with-password"
    class="grid grid-rows-2 gap-2 mb-4"
  >
    <input
      class="input input-bordered w-full"
      required
      type="email"
      placeholder="Your email"
      name="email"
      bind:value={email}
    />
    <div
      class={form?.incorrect ? 'tooltip tooltip-open tooltip-error' : ''}
      data-tip={form?.incorrect ? 'Wrong password, try again' : null}
    >
      <input
        class="input input-bordered w-full"
        class:input-error={form?.incorrect}
        type="password"
        required
        placeholder="Your password"
        name="password"
        disabled={isLoading}
        bind:value={password}
      />
    </div>
    <button
      type="submit"
      class={isLoading ? 'loading btn btn-md mt-2' : 'btn-primary btn btn-md mt-2 btn-block'}
      disabled={isLoading}
    >
      {isLoading ? 'please wait...' : 'Login'}
    </button>
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
      disabled={isLoading}
      type="email"
      required
      placeholder="Your email"
      name="email"
      bind:value={forgotPasswordEmail}
    />
    <button
      type="submit"
      class={isLoading ? 'loading btn btn-md mt-2' : 'btn-primary btn btn-md mt-2 btn-block'}
      disabled={isLoading}
    >
      {isLoading ? 'please wait...' : 'Login'}
    </button>
  </form>
  <p class="text-xs py-2">
    <button class="link link-primary" on:click={() => (activeForm = 'login')}>Or login with password</button>
  </p>
{/if}
