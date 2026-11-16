<script lang="ts">
	import { getLocale, locales } from '#lib/paraglide/runtime.js';
	import { page } from '$app/state';
	import { getLocalisedHref } from '#lib/utils/localisation.ts';
	import { m } from '#lib/paraglide/messages.js';
	import ActionGroup from '#lib/components/ActionGroup/ActionGroup.svelte';
	import ActionGroupItem from '#lib/components/ActionGroup/ActionGroupItem.svelte';

	const currentLocale = getLocale();
</script>

<nav aria-label={m['localeSwitcher.languages']()}>
	<ActionGroup>
		{#each locales as locale (locale)}
			<ActionGroupItem
				label={m[`localeSwitcher.${locale}.short`]()}
				aria-label={m[`localeSwitcher.${locale}.long`]()}
				href={getLocalisedHref(page.url.pathname, locale)}
				data-sveltekit-reload
				isCurrent={locale === currentLocale}
			/>
		{/each}
	</ActionGroup>
</nav>

<style lang="scss">
	nav {
		background-color: var(--site-background-default);
	}
</style>
