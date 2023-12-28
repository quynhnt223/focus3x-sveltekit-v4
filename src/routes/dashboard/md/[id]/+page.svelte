<script>
	import MainNav from '/src/components/nav/MainNav.svelte';
	import { onMount } from 'svelte';
	import { activeLinkId } from '/src/store/activeLink.js';
	import { auth, db } from '/src/firebase/firebase.js';
	import { doc, setDoc } from 'firebase/firestore';

	onMount(() => {
		$activeLinkId = 'md';
	});
</script>

<MainNav></MainNav>
