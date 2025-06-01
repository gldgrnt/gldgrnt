<script lang="ts">
	let { data } = $props()
	console.log(data)
</script>

<svelte:head>
	<meta property="og:type" content="article" />
</svelte:head>

<div class="prose">
	<data.content />
</div>