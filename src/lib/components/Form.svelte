<script lang="ts">
  import { enhance } from '$app/forms';
  let username: string;
  let password: string;
  let first_name: string;
  let last_name: string;
  let email: string;
</script>

<form method="POST" use:enhance class="max-w-md mb-4">
  <label for="first_name" class="form-label">First Name:</label>
  <input id="first_name" type="text" name="first_name" bind:value={first_name} class="form-control" />

  <label for="last_name" class="form-label">Last Name:</label>
  <input id="last_name" type="text" name="last_name" bind:value={last_name} class="form-control" />

  <label for="email" class="form-label">Email:</label>
  <input id="email" type="email" name="email" bind:value={email} class="form-control" />

  <label for="username" class="form-label">Username:</label>
  <input id="username" type="text" name="username" bind:value={username} class="form-control" />

  <label for="password" class="form-label">Password:</label>
  <input id="password" type="password" name="password" bind:value={password} class="form-control" />

  <button type="submit" class="btn mt-4">Sign Up</button>
</form>

<style>
  .form-control {
    @apply w-full py-2 px-3 font-medium text-gray-700 leading-tight rounded-md border border-gray-300;
  }

  .form-label {
    @apply block font-medium text-sm leading-5 text-gray-700;
  }

  .btn {
    @apply inline-block font-medium text-white bg-red-600 border-0 py-2 px-4 rounded-md;
  }
</style>
