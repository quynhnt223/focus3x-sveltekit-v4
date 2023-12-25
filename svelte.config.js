//svelte.config.js; hi
import adapter from '@sveltejs/adapter-cloudflare';
import dotenv from 'dotenv';

dotenv.config();

export default {
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
		vite: {
			define: {
				'process.env.VITE_OPENAI_KEY': JSON.stringify(process.env.VITE_OPENAI_KEY),
				'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY)
			}
		}
	}
};
