import OpenAI from 'openai';
import { OPENAI_KEY } from '$env/static/private';

const openai = new OpenAI({
	organization: 'org-64OmNEiPWRs4fn9QzgtqwnZq',
	apiKey: OPENAI_KEY
});

export async function chat(messages, setup) {
	const response = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: [
			...messages,
			{
				role: 'system',
				content: setup
			}
		]
	});

	return response;
}
