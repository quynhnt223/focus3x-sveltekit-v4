import { comments } from '$lib/server/comment.js';
import { json } from '@sveltejs/kit';

export function GET() {
	return json(comments);
}
