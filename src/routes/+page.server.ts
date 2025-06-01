import type { Post } from '$lib/types'

export const prerender = true;

async function getPosts() {
	const posts: Post[] = [];
	const paths = import.meta.glob('/src/posts/**/index.md', { eager: true })

	for (const path in paths) {
		const file = paths[path];
		const slug = path.match(/\d{3}/g)?.[0]

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			posts.push(post)
		}
	}

	return posts
}

export async function load() {
	const posts: Post[] = await getPosts()
	return { posts }
}