<script>
	import HomePage from '../components/homePage/HomePage.svelte';
	import { goto } from '$app/navigation';
	import { userId } from '/src/store/userId.js';
	import PageLoading from '/src/components/pageLoad/PageLoading.svelte';

	if ($userId !== null) {
		goto('/dashboard/md/today');
	}
</script>

<svelte:head>
	<title>Focus3x App</title>
</svelte:head>

{#if $userId === null}
	<HomePage></HomePage>
{:else}
	<PageLoading></PageLoading>
{/if}
