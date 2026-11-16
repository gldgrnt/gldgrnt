<script lang="ts">
	import PostPreview from '#lib/components/PostPreview/PostPreview.svelte';
	import { getCoverPhotoAsset } from '#lib/utils/post.ts';
	import type { PageProps } from '../../.svelte-kit/types/src/routes/$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>gldgrnt</title>
	<meta property="og:type" content="article" />
</svelte:head>

<section>
	{#each Object.entries(data.allPosts).reverse() as [id, post] (id)}
		<PostPreview {id} title={post.title} coverPhoto={getCoverPhotoAsset(post.assets!)} />
	{/each}
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: repeat(3, minmax(200px, 1fr));
		gap: var(--spacing-5);
		padding-inline: var(--spacing-1);

		@media screen and (max-width: 1279px) {
			grid-template-columns: repeat(2, minmax(200px, 1fr));
		}

		@media screen and (max-width: 660px) {
			grid-template-columns: repeat(1, minmax(200px, 1fr));
		}
	}
</style>
