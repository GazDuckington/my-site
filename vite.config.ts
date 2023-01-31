import { sveltekit } from '@sveltejs/kit/vite';
import type { defineConfig } from 'vite';

const config: defineConfig = {
	plugins: [sveltekit()]
};

export default config;
