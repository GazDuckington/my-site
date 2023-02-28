<script lang="ts">
	import '../app.postcss';

	import { isDark } from '$lib/stores';
	import { Body } from 'svelte-body';

	let dark = 'dark';
	$: dark = $isDark ? 'dark' : 'light';
</script>

<svelte:head>
	<title>Ghazy&apos;s Website</title>
	<link rel="icon" type="image/svg" href="/favicon.svg" />
</svelte:head>

<body class={dark} />

<main>
	<slot />
</main>
