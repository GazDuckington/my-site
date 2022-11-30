<script lang="ts">
	import '../app.css';

	import { isDark } from '$lib/stores';
	import { Body } from 'svelte-body';

	let dark = 'dark';
	$: dark = $isDark ? 'dark' : '';
</script>

<svelte:head>
	<title>Ghazy's Website</title>
	<link rel="icon" type="image/svg" href="/favicon.svg" />
</svelte:head>

<Body class={dark} />

<main
	class="bg-slate-700 dark:bg-slate-800 w-screen h-screen text-slate-900 dark:text-slate-400 translate-all easi-in-out duration-150 flex justify-center items-center"
>
	<div>
		<slot />
	</div>
</main>
