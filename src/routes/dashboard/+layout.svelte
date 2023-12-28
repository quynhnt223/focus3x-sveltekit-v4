<script>
	import { goto } from '$app/navigation';
	import { userId } from '/src/store/userId.js';
	import PageLoading from '/src/components/pageLoad/PageLoading.svelte';

	$: if ($userId === null) {
		goto('/login');
	}
</script>

{#if $userId !== null}
	<slot />
{:else}
	<PageLoading></PageLoading>
{/if}
