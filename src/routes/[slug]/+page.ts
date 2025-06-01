import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}/en.md`)
		const index = await import(`../../posts/${params.slug}/index.md`)

		return {
			content: post.default,
			meta: index.metadata,
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}