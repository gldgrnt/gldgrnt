import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { mdsvex } from 'mdsvex';
import { enhancedImages } from '@sveltejs/enhanced-img';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			preprocess: [
				mdsvex({ extensions: ['.svx', '.md'] }),
				// mdsvex 0.12.8 still emits `<script context="module">`, which svelte 5 whines about.
				// rewrite it to the new `<script module>` syntax until upstream fixes it~ nya :3
				// see: https://github.com/pngwn/MDsveX/issues/649 (fix PR #773 got closed, hmph!)
				{
					name: 'mdsvex-script-module-fix',
					markup: ({ content, filename }) => {
						if (!filename?.endsWith('.md')) return;
						return { code: content.replace('<script context="module">', '<script module>') };
					}
				}
			],
			extensions: ['.svelte', '.svx', '.md']
		}),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			emitTsDeclarations: true,
			// Automatically set the locale in the following order
			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns: [
				{
					pattern: '/',
					localized: [
						['en', '/en'],
						['fr', '/fr'],
						['jp', '/jp']
					]
				},
				{
					pattern: '/:path(.*)?',
					localized: [
						['en', '/en/:path(.*)?'],
						['fr', '/fr/:path(.*)?'],
						['jp', '/jp/:path(.*)?']
					]
				}
			]
		})
	]
});
