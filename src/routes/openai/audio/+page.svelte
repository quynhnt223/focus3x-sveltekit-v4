<script>
	let inputText = '';
	let audioBuffer = null;
	let audioContext = null;
	let isLoading = true;

	// Function to generate audio based on user input
	async function generateAudio() {
		try {
			isLoading = true;
			const response = await fetch('/api/audio', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ text: inputText })
			});

			const data = await response.json();

			// Decode the base64 audio data into an ArrayBuffer

			// Initialize the audioContext
			audioContext = data;
		} catch (error) {
			console.error('Error:', error);
		} finally {
			isLoading = false; // Set loading state to false once fetch is complete
		}
	}
	$: base64Audio = 'data:audio/mpeg;base64,' + audioContext;

	const playAudio = () => {
		const audio = new Audio(base64Audio);
		audio.play();
	};
</script>

<main>
	<h1>Generate Audio with GPT</h1>

	<div>
		<label for="inputText">Enter Text:</label>
		<input type="text" id="inputText" bind:value={inputText} />
		<button on:click={generateAudio}>Generate Audio</button>
	</div>
</main>
{#if isLoading}
	<div>Loading...</div>
{:else}
	<button on:click={playAudio}>Play Base64 Audio</button>
{/if}
{audioContext}
