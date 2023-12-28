<script>
	import MainNav from '/src/components/nav/MainNav.svelte';
	import { onMount } from 'svelte';
	import { activeLinkId } from '/src/store/activeLink.js';
	import { goto } from '$app/navigation';
	const todayDate = Date.now().toString();
	goto('/dashboard/md/' + todayDate);
	onMount(() => {
		$activeLinkId = 'md';
	});
</script>

<MainNav></MainNav>
