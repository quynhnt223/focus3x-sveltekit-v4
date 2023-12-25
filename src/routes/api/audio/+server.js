import OpenAI from 'openai';
//import { OPENAI_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
const apiKey = import.meta.env.VITE_OPENAI_KEY;

const openai = new OpenAI({
	organization: 'org-64OmNEiPWRs4fn9QzgtqwnZq',
	apiKey: apiKey
});

export async function POST(requestEvent) {
	try {
		const { request } = requestEvent;
		const { text } = await request.json();

		const mp3 = await openai.audio.speech.create({
			model: 'tts-1',
			voice: 'alloy',
			input: text
		});

		const base64 = Buffer.from(await mp3.arrayBuffer()).toString('base64');

		// Return a valid response object
		return json(base64);
	} catch (error) {
		console.error('Error:', error);
		return json({ error: 'Internal Server Error' }, 500);
	}
}
