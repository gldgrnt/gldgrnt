import type { AssetModule } from '#lib/utils/import.ts';
import type { Component } from 'svelte';
import type { LocalisedText } from '#lib/utils/localisation.ts';

export type Post = {
	id: string;
	title: LocalisedText | string;
	published: boolean;
	description?: LocalisedText | string;
	assets?: Asset[];
	content?: Component;
};

export type Asset = {
	filename: string;
	alt: LocalisedText | string;
	description?: LocalisedText | string;
	isCoverPhoto?: boolean;
	module?: AssetModule;
};

export const getCoverPhotoAsset = (assets: Asset[]) => {
	return assets.find((asset) => asset?.isCoverPhoto) as Asset;
};
