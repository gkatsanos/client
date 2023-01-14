<script lang="ts">
  import { enhance } from '$app/forms';
  let username: string;
  let password: string;
  let first_name: string;
  let last_name: string;
  let email: string;
  let loading = false;
</script>

<form method="POST" action="?/login" use:enhance class="max-w-lg mb-4">
  <div class="form-widget">
    <div>
      <input class="input input-bordered w-full max-w-xs" type="email" placeholder="Your email" name="email" />
    </div>
    <div>
      <input
        type="submit"
        class="btn btn-primary btn-wide btn-md mt-2"
        value={loading ? 'Loading' : 'Send magic link'}
        disabled={loading}
      />
    </div>
  </div>
</form>
<form method="POST" action="?/login-with-password" use:enhance class="max-w-lg mb-4">
  <div class="form-widget">
    <div>
      <input class="input input-bordered w-full max-w-xs" type="email" placeholder="Your email" name="email" />
    </div>
    <div>
      <input class="input input-bordered w-full max-w-xs" type="password" placeholder="Your password" name="password" />
    </div>
    <div>
      <input
        type="submit"
        class="btn btn-primary btn-wide btn-md mt-2"
        value={loading ? 'Loading' : 'Login'}
        disabled={loading}
      />
    </div>
  </div>
</form>
