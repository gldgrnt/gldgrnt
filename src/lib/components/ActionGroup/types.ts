import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

export type ActionGroupItemProps = {
	label: string;
	isCurrent?: boolean;
} & (HTMLButtonAttributes | HTMLAnchorAttributes);
