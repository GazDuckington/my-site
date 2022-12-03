import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex()
	],

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: dev ? "" : "/my-site"
		},
		target: "#svelte",
		alias: {
			$comp: 'src/components',
			$elem: 'src/elements'
		}
	}
};

export default config;
