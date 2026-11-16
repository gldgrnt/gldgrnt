import { type AssetModule, importPostAssetFiles, importPostMetaFiles } from '#lib/utils/import.ts';
import type { Asset, Post } from '#lib/utils/post.ts';

export const prerender = true;

export interface HomepageData {
	allPosts: Record<Post['id'], Post>;
}

export const load = async (): Promise<HomepageData> => {
	// Get all files associated with posts
	const metaImports = Object.entries(importPostMetaFiles());
	const assetImports = Object.entries(importPostAssetFiles());

	const assetMap = assetImports.reduce((acc, [path, module]): Record<string, AssetModule> => {
		const filename = path.match(/[\w-]+(?=\.)/g)?.[0] as string;
		acc[filename] = module;
		return acc;
	}, {});

	// Create object to hold posts
	const allPosts: HomepageData['allPosts'] = {};

	// Loop through meta files and get all associated files
	for (const [metaPath, metadata] of metaImports) {
		if (!metadata.published) continue;
		const id = metaPath.match(/\d{3}/g)?.[0] as string;
		const post = { ...metadata, id } as Post;
		if (post.assets === undefined) continue;
		// Get all the associated assets
		post.assets = post.assets?.map<Asset>((assetMeta) => {
			return {
				...assetMeta,
				module: assetMap[assetMeta.filename!]
			};
		});
		allPosts[id] = { ...post };
	}

	return { allPosts };
};
