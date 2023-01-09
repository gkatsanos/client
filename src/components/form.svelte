<script lang="ts">
	let username: string;
	let password: string;

	function handleSubmit(): void {
		// Your form submission logic goes here
	}
</script>

<div class="flex justify-center">
	<form on:submit|preventDefault={handleSubmit} class="max-w-md mb-4">
		<label for="username" class="form-label">Username:</label>
		<input id="username" type="text" bind:value={username} class="form-control" />

		<label for="password" class="form-label">Password:</label>
		<input id="password" type="password" bind:value={password} class="form-control" />

		<button type="submit" class="btn mt-4">Log in</button>
	</form>
</div>

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
