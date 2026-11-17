<script lang="ts">
	import { setMode, userPrefersMode } from 'mode-watcher';
	import { m } from '#lib/paraglide/messages.js';
	import ActionGroup from '#lib/components/ActionGroup/ActionGroup.svelte';
	import ActionGroupItem from '#lib/components/ActionGroup/ActionGroupItem.svelte';
</script>

<ActionGroup>
	<ActionGroupItem
		label={m['modeSwitcher.light.short']()}
		aria-label={m['modeSwitcher.light.long']()}
		isCurrent={userPrefersMode.current === 'light'}
		onclick={() => setMode('light')}
	/>
	<ActionGroupItem
		label={m['modeSwitcher.dark.short']()}
		aria-label={m['modeSwitcher.dark.long']()}
		isCurrent={userPrefersMode.current === 'dark'}
		onclick={() => setMode('dark')}
	/><ActionGroupItem
		label={m['modeSwitcher.system.short']()}
		aria-label={m['modeSwitcher.system.long']()}
		isCurrent={userPrefersMode.current === 'system'}
		onclick={() => setMode('system')}
	/>
</ActionGroup>
