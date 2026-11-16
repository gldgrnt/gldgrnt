<script lang="ts">
	import { getLocalisedHref, getLocalisedText } from '#lib/utils/localisation.ts';
	import type { PostPreviewProps } from './types.ts';
	import type { AssetModule } from '#lib/utils/import.ts';

	const { id, title, coverPhoto }: PostPreviewProps = $props();
</script>

<a href={getLocalisedHref(`/${id}`)}>
	<article class="post">
		<h3>{id}・{getLocalisedText(title)}</h3>
		<enhanced:img
			src={(coverPhoto.module as AssetModule).default}
			alt={getLocalisedText(coverPhoto.alt)}
		/>
	</article>
</a>

<style lang="scss">
	a:hover {
		img {
			filter: sepia(0.2);
		}
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 10px;
		height: 100%;
	}

	img {
		aspect-ratio: 0.8;
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	h3 {
		font-family: var(--font-family-heading);
		font-size: var(--font-size-2);
		text-transform: uppercase;
		color: var(--site-foreground-default);
		flex-grow: 1;
		padding-inline: var(--spacing-0);
	}
</style>
