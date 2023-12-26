<script>
	import { goto } from '$app/navigation';
	let checkouturl = null;

	async function checkout() {
		try {
			const response = await fetch('/api/stripe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const data = await response.json();

			// Update the checkouturl variable with the received data
			checkouturl = data;
			window.location = checkouturl;
		} catch (error) {
			console.error('Error:', error);
		}
	}
</script>

<button on:click={checkout}>Checkout</button>

{#if checkouturl}
	<p>{JSON.stringify(checkouturl)}</p>
{/if}
