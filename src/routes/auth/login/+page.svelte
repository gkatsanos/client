<script lang="ts">
  import LoginForm from '$lib/components/LoginForm.svelte';
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<LoginForm {form} />
