import { getLocale } from '#lib/paraglide/runtime.js';
import type { Post } from '#lib/utils/post.ts';

export interface PostData {
	allPosts: Record<Post['id'], Post>;
	post: Post;
	isLocalisedPostAvailable: boolean;
}

export const load = async ({ parent, params: { slug } }) => {
	const parentData = await parent();
	const post = parentData.allPosts[slug];
	const locale = getLocale();

	// Get post content
	let isLocalisedPostAvailable = true;
	try {
		const postMarkdown = await import(`../../posts/${slug}/${locale}.md`);
		post.content = postMarkdown.default;
	} catch (_) {
		const defaultPostMarkdown = await import(`../../posts/${slug}/en.md`);
		post.content = defaultPostMarkdown.default;
		isLocalisedPostAvailable = false;
	}

	return { post, isLocalisedPostAvailable };
};
