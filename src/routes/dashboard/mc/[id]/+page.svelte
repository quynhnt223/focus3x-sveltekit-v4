<script>
	import MainNav from '/src/components/nav/MainNav.svelte';
	import { onMount } from 'svelte';
	import { activeLinkId } from '/src/store/activeLink.js';

	onMount(() => {
		$activeLinkId = 'mc';
	});
</script>

<MainNav></MainNav>
