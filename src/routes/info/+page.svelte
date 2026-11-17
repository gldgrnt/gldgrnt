<script>
	import { info } from './info.ts';
	import { getLocalisedText } from '#lib/utils/localisation.ts';
	import { m } from '#lib/paraglide/messages.js';
</script>

<svelte:head>
	<meta property="og:type" content="article" />
	<title>gldgrnt | {m['footer.info']()}</title>
</svelte:head>

<article data-post>
	<h1>{m['footer.info']()}</h1>
	{#each info as { title, favourites } (title)}
		<section>
			<h2>{getLocalisedText(title)}</h2>
			{#each favourites.sort() as favourite, index (favourite)}
				<span>{favourite}</span>
			{/each}
		</section>
	{/each}
</article>

<style lang="scss">
	article {
		box-sizing: border-box;
		width: 100%;
		min-width: calc(500px - (2 * var(--spacing-5)));
		max-width: 700px;
		padding-inline: var(--spacing-5);
		margin-left: auto;

		@media screen and (max-width: 900px) {
			order: 1;
			min-width: 0;
			padding-inline: var(--spacing-1);
		}
	}

	h1 {
		margin-bottom: var(--spacing-7);
	}

	section + section {
		margin-top: var(--spacing-2);
	}

	h2 {
		display: inline-block;
		font-size: var(--font-size-3);
	}

	span {
		display: inline-block;
		margin-inline-start: var(--spacing-2);
	}
</style>
