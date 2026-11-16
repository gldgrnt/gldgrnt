import { resolve } from '$app/paths';
import { getLocale, type Locale, localizeHref } from '#lib/paraglide/runtime.js';
import type { Path } from '$app/types';

export type LocalisedText = Record<Locale, string>;

export const getLocalisedText = (text: LocalisedText | string): string => {
	if (typeof text === 'string') return text;
	const locale = getLocale();
	return text[locale] || '';
};

export const getLocalisedHref = (href: string, forceLocal?: Locale) => {
	const locale = forceLocal ?? getLocale();
	return resolve(localizeHref(href, { locale }) as Path);
};
