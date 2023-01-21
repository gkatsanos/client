<script lang="ts">
  import { enhance } from '$app/forms';
  let username: string;
  let password: string;
  let first_name: string;
  let last_name: string;
  let email: string;
</script>

<h2 class="text-left text-2xl font-bold mb-2">Join us!</h2>
<form method="POST" use:enhance class="max-w-lg mb-4">
  <div class="grid grid-cols-2 gap-2">
    <input
      id="first_name"
      type="text"
      name="first_name"
      bind:value={first_name}
      class="input input-bordered w-full max-w-xs mr-2"
      placeholder="first name"
    />

    <input
      id="last_name"
      type="text"
      name="last_name"
      bind:value={last_name}
      class="input input-bordered w-full max-w-xs"
      placeholder="last name"
    />

    <input
      id="username"
      type="text"
      name="username"
      bind:value={username}
      class="input input-bordered w-full max-w-xs"
      placeholder="username"
    />

    <input
      id="password"
      type="password"
      name="password"
      bind:value={password}
      class="input input-bordered w-full max-w-xs"
      placeholder="Password"
    />

    <input
      id="email"
      type="email"
      name="email"
      bind:value={email}
      class="input input-bordered w-full col-span-2"
      placeholder="email"
    />
  </div>
  <button type="submit" class="btn btn-primary btn-block">Create account</button>
</form>
<p class="text-xs py-2">Already have an account? <a href="/auth/login" class="link link-primary">Log in</a></p>
