<script>
	import SvelteMarkdown from 'svelte-markdown';
	let question = '';
	let answer = '';
	let data2 = 'haha';
	let isLoading = true;

	$: source = answer;

	const askQuestion = async () => {
		try {
			isLoading = true;
			const response = await fetch('/api/gemini', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ question: question })
			});

			const data = await response.json();
			data2 = data;
			const partText = data.candidates[0].content.parts[0].text;
			answer = partText;
		} catch (error) {
			console.error('Error:', error);
			answer = 'Error occurred while fetching the answer';
		} finally {
			isLoading = false; // Set loading state to false once fetch is complete
		}
	};
</script>

<main>
	<h1>Chat with Assistant</h1>

	<div>
		<label for="question">Ask a question:</label>
		<input type="text" id="question" bind:value={question} />
		<button on:click={askQuestion}>Submit</button>
	</div>

	{#if isLoading}
		<div>Loading...</div>
	{:else}
		<SvelteMarkdown {source} />
	{/if}
</main>

<style>
	/* Add your styles here */
</style>
