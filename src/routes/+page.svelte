<script lang="ts">
	let { data } = $props()
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<section>
	<ul class="posts">
		{#each data.posts as post (post.slug)}
			<li class="post" >
				<a href={post.slug} class="title">{post.title}</a>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>