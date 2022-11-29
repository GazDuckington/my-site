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
	class="bg-gray-300 dark:bg-slate-800 w-screen h-screen text-slate-900 dark:text-slate-400 flex justify-center items-center translate-all easi-in-out duration-150"
>
	<div
		class="bg-gray-500 dark:bg-slate-900 overflow-auto flex flex-col items-start w-[75%] h-[80%] rounded shadow"
	>
		<Navbar />

		<Glitch />

		<div class="mr-4">
			<slot />
		</div>
	</div>
</main>
