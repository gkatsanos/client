<script lang="ts">
  import { formatTime } from '$lib/utils';

  export let message: string;
  export let created_at: string;
  export let profiles: {
    username: string;
  };
</script>

<div class="border border-slate-200 rounded-lg shadow-md p-4">
  <div class="font-bold text-xl mb-2">{message}</div>
  <p class="text-gray-700 text-base">
    {profiles.username}
  </p>
  <p class="text-gray-500 text-xs mt-2">{formatTime(new Date(created_at))}</p>
</div>
