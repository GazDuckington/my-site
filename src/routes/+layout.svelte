<script lang="ts">
	import Glitch from '$elem/Glitch.svelte';
	import IconCheckDoc from '$elem/IconCheckDoc.svelte';
	import IconGithub from '$elem/IconGithub.svelte';
	import IconMail from '$elem/IconMail.svelte';
	import { isDark } from '$lib/stores';
	import '../app.css';
	let dark: boolean;
	$: dark = $isDark;
</script>

<svelte:head>
	<title>Ghazy's Website</title>
</svelte:head>

<main class:dark>
	<header>
		<Glitch />
	</header>
	<nav>
		<h1>GazDuckington</h1>
		<ul class="flex">
			<li class="flex align-middle">
				<IconMail klass="w-4 h-4 text-cyan-500 mt-1.5" />
				<a href="mailto:dianghazy@protonmail.com">e-mail</a>
			</li>
			|
			<li class="flex align-middle">
				<IconGithub klass="w-4 h-4 text-cyan-500 mt-1.5" />
				<a target="_blank" rel="noopener noreferrer" href="https://www.github.com/GazDuckington"
					>Github</a
				>
			</li>
			|
			<li class="flex align-middle">
				<IconCheckDoc klass="w-4 h-4 text-cyan-500 mt-1.5" />
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
