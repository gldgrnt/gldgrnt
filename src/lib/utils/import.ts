import type { Post } from '#lib/utils/post.ts';
import type { Picture } from '@sveltejs/enhanced-img';

/**
 * Vite import statements for importing files
 */
export type AssetModule = { default: Picture };

export const importPostMetaFiles = (): Record<string, Post> =>
	import.meta.glob(`/**/_meta.md`, { eager: true, import: 'metadata' });

export const importPostAssetFiles = (): Record<string, AssetModule> =>
	import.meta.glob(
		`/**/posts/**/assets/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}`,
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);
