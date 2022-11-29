<script lang="ts">
	import '../app.css';

	import Glitch from '$elem/Glitch.svelte';
	import { DocumentTextIcon, MailIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { Body } from 'svelte-body';
	import { isDark } from '$lib/stores';
	import GithubIcon from '$elem/GithubIcon.svelte';

	$: dark = $isDark ? 'dark' : '';
</script>

<svelte:head>
	<title>Ghazy's Website</title>
</svelte:head>

<Body class={dark} />

<main>
	<header>
		<Glitch />
	</header>
	<nav>
		<button
			on:click={() => {
				$isDark = !$isDark;
			}}>Toggle</button
		>
		<h1>GazDuckington</h1>
		<ul class="flex">
			<li class="flex align-middle">
				<MailIcon class="w-4 h-4 mt-1.5 text-teal-500 dark:text-red-300" />
				<a href="mailto:dianghazy@protonmail.com">Email</a>
			</li>
			|
			<li class="flex align-middle">
				<GithubIcon class="w-4 h-4 mt-1.5 text-cyan-500" />
				<a target="_blank" rel="noopener noreferrer" href="https://www.github.com/GazDuckington"
					>Github</a
				>
			</li>
			|
			<li class="flex align-middle">
				<DocumentTextIcon class="w-4 h-4 mt-1.5 text-cyan-500" />
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://efss.qloud.my/index.php/s/2enkqmfHBit5PCk">Resume</a
				>
			</li>
		</ul>
	</nav>
	<slot />
</main>
