<script lang="ts">
	import type { ActionGroupItemProps } from '#lib/components/ActionGroup/types.ts';
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	let { label, isCurrent, ...rest }: ActionGroupItemProps = $props();
	const isLink = $derived(Boolean((rest as HTMLAnchorAttributes)?.href));
	const isButton = $derived(Boolean(rest?.onclick));
</script>

<li>
	{#if isCurrent}
		<span {...rest as HTMLAttributes<HTMLSpanElement>}>{label}</span>
	{:else if isLink}
		<a {...rest as HTMLAttributes<HTMLAnchorElement>}>{label}</a>
	{:else if isButton}
		<button {...rest as HTMLAttributes<HTMLButtonElement>}>{label}</button>
	{/if}
</li>

<style lang="scss">
	li {
		display: flex;
	}

	button,
	span,
	a {
		font-family: var(--font-family-heading);
		font-size: var(--font-size-heading-small);
		text-transform: var(--text-transform-heading);
		padding: var(--spacing-0) var(--spacing-1);
		color: var(--site-foreground-default);
		background-color: var(--site-background-default);
		border: none;
	}

	button,
	a {
		cursor: pointer;
	}

	span {
		color: var(--site-background-default);
		background-color: var(--site-foreground-default);
	}
</style>
