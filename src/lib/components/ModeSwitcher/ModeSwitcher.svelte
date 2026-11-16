<script lang="ts">
	import { mode, setMode } from 'mode-watcher';
	import { m } from '#lib/paraglide/messages.js';
	import ActionGroup from '#lib/components/ActionGroup/ActionGroup.svelte';
	import ActionGroupItem from '#lib/components/ActionGroup/ActionGroupItem.svelte';
</script>

<ActionGroup>
	<ActionGroupItem
		label={m['modeSwitcher.light.short']()}
		aria-label={m['modeSwitcher.light.long']()}
		isCurrent={mode.current === 'light'}
		onclick={() => setMode('light')}
	/>
	<ActionGroupItem
		label={m['modeSwitcher.dark.short']()}
		aria-label={m['modeSwitcher.dark.long']()}
		isCurrent={mode.current === 'dark'}
		onclick={() => setMode('dark')}
	/>
</ActionGroup>
