<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import '#lib/css/index.css';

	import type { LayoutProps } from './$types';

	import { getLocalisedHref } from '#lib/utils/localisation.ts';
	import { m } from '#lib/paraglide/messages.js';
	import LocalSwitcher from '#lib/components/LocaleSwitcher/LocalSwitcher.svelte';
	import ModeSwitcher from '#lib/components/ModeSwitcher/ModeSwitcher.svelte';
	import Logo from '#lib/components/Logo/Logo.svelte';
	import { mode, ModeWatcher } from 'mode-watcher';
	import ActionGroupItem from '#lib/components/ActionGroup/ActionGroupItem.svelte';
	import ActionGroup from '#lib/components/ActionGroup/ActionGroup.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="system" />

<div class="content-wrapper" data-theme={mode.current}>
	<header>
		<Logo />
		<LocalSwitcher />
	</header>

	<main>{@render children()}</main>

	<footer>
		<ActionGroup>
			<ActionGroupItem label={m['footer.info']()} href={getLocalisedHref('/info')} />
			<ActionGroupItem
				label={m['footer.github']()}
				href="https://github.com/gldgrnt"
				target="_blank"
			/>
		</ActionGroup>
		<ModeSwitcher />
	</footer>
</div>

<style lang="scss">
	.content-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 800px;
		max-width: 1600px;
		margin: 0 auto;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		padding-block: var(--spacing-2);
		z-index: 10;
	}

	main {
		flex-grow: 1;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: var(--spacing-2);

		@media screen and (max-width: 756px) {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-2);
		}
	}
</style>
