<script>
	import Card1 from '../../components/design/Card1.svelte';
	import { onMount } from 'svelte';
	import { moveable } from '/src/utils/moveable.js';
	import Card2 from '../../components/design/Card2.svelte';
	import Card3 from '../../components/design/Card3.svelte';
	import Card4 from '../../components/design/Card4.svelte';
	import Card5 from '../../components/design/Card5.svelte';
	import Card6 from '../../components/design/Card6.svelte';

	onMount(() => {
		moveable();
	});
</script>

<Card1></Card1>
<Card2></Card2>
<Card3></Card3>
<Card4></Card4>
<Card5></Card5>
<Card6></Card6>
