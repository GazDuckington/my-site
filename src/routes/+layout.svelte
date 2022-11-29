<script lang="ts">
	import '../app.css';

	import Glitch from '$elem/Glitch.svelte';
	import Navbar from '$elem/Navbar.svelte';
	import { Body } from 'svelte-body';
	import { isDark } from '$lib/stores';

	$: dark = $isDark ? 'dark' : '';
</script>

<svelte:head>
	<title>Ghazy's Website</title>
</svelte:head>

<Body class={dark} />

<main
	class="bg-slate-300 dark:bg-slate-800 w-screen h-screen text-slate-900 dark:text-slate-400 flex justify-center items-center"
>
	<div
		class="overflow-auto flex flex-col items-start border border-red-800 w-[75%] h-[99%] rounded shadow"
	>
		<Navbar />

		<Glitch />

		<div>
			<slot />
		</div>
	</div>
</main>
