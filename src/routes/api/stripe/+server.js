// server.js
import Stripe from 'stripe';
import { STRIPE_KEY, BASE } from '$env/static/private';
import { json } from '@sveltejs/kit';

const stripe = new Stripe(STRIPE_KEY, {
	apiVersion: '2023-10-16'
});

export async function POST() {
	try {
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price: 'price_1ORZQfCLPqDCbnLtp338lXbx',
					quantity: 1
				}
			],
			mode: 'payment',
			success_url: `${BASE}/success`,
			cancel_url: `${BASE}/cancel`
		});

		// Get the URL from the session response
		const url2 = session.url;
		console.log(url2);
		return json(url2);
	} catch (error) {
		// Fix the variable name to 'error' instead of 'errorObj'
		console.error('Error:', error);
		return json({ error: 'Internal Server Error' }, 500);
	}
}
