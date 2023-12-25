// +server.js

import { chat } from '$lib/server/openai.js';
import { json } from '@sveltejs/kit';

const messages = [];
const setup = 'act as teacher';
export async function POST(requestEvent) {
	try {
		const { request } = requestEvent;
		const { message } = await request.json();

		// Assuming you want to add a new user message to the messages array
		messages.push({
			role: 'user',
			content: message // Replace with the actual user message content
		});

		const answer = await chat(messages, setup);

		return json(answer, { status: 201 });
	} catch (error) {
		console.error('Error:', error);
		return json({ error: 'Internal Server Error' }, 500);
	}
}
