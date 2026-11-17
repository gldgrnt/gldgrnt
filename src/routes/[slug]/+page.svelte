<script lang="ts">
	import { getLocalisedText } from '#lib/utils/localisation.ts';
	import { getLocale } from '#lib/paraglide/runtime.js';

	let { data } = $props();
	let post = $derived(data.post);

	const locale = getLocale();
	const localMap = {
		fr: 'French',
		jp: 'Japanese'
	};
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<title>gldgrnt | {getLocalisedText(post.title)}</title>
</svelte:head>

<article data-post>
	<section class="content-wrapper">
		{#if !data.isLocalisedPostAvailable && locale !== 'en'}
			<aside>{localMap[locale]} translation coming soon</aside>
		{/if}
		<post.content />
	</section>
	<section class="image-wrapper">
		<figure>
			{#each post.assets as asset (asset.filename)}
				<enhanced:img src={asset.module!.default} alt={getLocalisedText(asset.alt)} />
				{#if asset.description}
					<figcaption>{getLocalisedText(asset.description)}</figcaption>
				{/if}
			{/each}
		</figure>
	</section>
</article>

<style lang="scss">
	aside {
		display: inline-block;
		font-family: var(--font-family-heading);
		font-size: var(--font-size-0);
		text-transform: var(--text-transform-heading);
		background-color: var(--site-foreground-default);
		color: var(--site-background-default);
		padding: 0 var(--spacing-1);
	}

	article {
		display: flex;
		justify-content: space-between;
		padding-inline: var(--spacing-1);

		@media screen and (max-width: 900px) {
			align-items: center;
			flex-direction: column;
			gap: var(--spacing-5);
		}
	}

	img {
		width: 100%;
		height: auto;
	}

	.image-wrapper {
		order: 1;
		width: 100%;
		min-width: 400px;
		max-width: 50vw;

		@media screen and (max-width: 900px) {
			order: 2;
			max-width: none;
			min-width: 0;
		}
	}

	.content-wrapper {
		order: 2;
		box-sizing: border-box;
		width: 100%;
		min-width: calc(500px - (2 * var(--spacing-5)));
		max-width: 700px;
		padding-inline: var(--spacing-5);

		@media screen and (max-width: 900px) {
			order: 1;
			min-width: 0;
			padding-inline: 0;
		}
	}
</style>
