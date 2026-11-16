<script>
	let { children } = $props();
</script>

<ul>
	{@render children()}
</ul>

<style lang="scss">
	ul {
		display: flex;
		align-items: center;
		gap: var(--spacing-0);
	}
</style>
