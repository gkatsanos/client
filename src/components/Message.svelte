<script lang="ts">
	export let message: string;
	export let createdAt: string;
</script>

<div class="border border-slate-200 rounded-lg shadow-md p-4">
	<div class="font-bold text-xl mb-2">{message}</div>
	<p class="text-gray-500 text-xs mt-2">{createdAt}</p>
</div>
