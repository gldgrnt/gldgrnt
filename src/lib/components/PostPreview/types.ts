import type { Asset, Post } from '#lib/utils/post.ts';

export type PostPreviewProps = {
	title: Post['title'];
	id: Post['id'];
	coverPhoto: Asset;
};
