<script>
	import MainNav from '/src/components/nav/MainNav.svelte';
	import { onMount } from 'svelte';
	import { activeLinkId } from '/src/store/activeLink.js';
	import MyAccount from '../../../components/ac/MyAccount.svelte';

	onMount(() => {
		$activeLinkId = 'ac';
	});
</script>

<MainNav></MainNav>
<MyAccount></MyAccount>
