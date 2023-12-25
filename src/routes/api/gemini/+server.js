import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

const MODEL_NAME = 'gemini-pro';
const question = [];

export async function POST(requestEvent) {
	try {
		const genAI = new GoogleGenerativeAI(API_KEY);
		const model = genAI.getGenerativeModel({ model: MODEL_NAME });

		const { request } = requestEvent;
		const { question } = await request.json();

		const generationConfig = {
			temperature: 0.9,
			topK: 1,
			topP: 1,
			maxOutputTokens: 2048
		};

		const safetySettings = [
			{
				category: HarmCategory.HARM_CATEGORY_HARASSMENT,
				threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
			},
			{
				category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
				threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
			},
			{
				category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
				threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
			},
			{
				category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
				threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
			}
		];

		const parts = [{ text: question }];

		const result = await model.generateContent({
			contents: [{ role: 'user', parts }],
			generationConfig,
			safetySettings
		});

		const response = result.response;
		return json(response, { status: 201 });
	} catch (error) {
		console.error('Error:', error);
		return json({ error: 'Internal Server Error' }, 500);
	}
}
