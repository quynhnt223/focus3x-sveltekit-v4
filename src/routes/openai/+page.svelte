<script>
	let question = '';
	let answer = '';
	let data2 = 'haha';

	const askQuestion = async () => {
		try {
			const response = await fetch('/api/chat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ message: question })
			});

			const data = await response.json();
			data2 = data;
			answer = data.choices[0]?.message?.content || 'No answer received';
		} catch (error) {
			console.error('Error:', error);
			answer = 'Error occurred while fetching the answer';
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

	{#if answer}
		<p>Assistant's Answer: {answer}</p>
	{/if}
	<p>{JSON.stringify(data2)}</p>
	<h3>{question}</h3>
</main>

<style>
	/* Add your styles here */
</style>
