<script lang="ts">
	import { isDark } from '$lib/stores';
	import ThemeToggle from '$elem/ThemeToggle.svelte';
</script>

<nav
	class="font-sans flex flex-col sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow items-center sm:items-baseline w-full"
>
	<div>
		<a href="/" class="text-lg btn">Gaz</a>
	</div>
	<div
		class="gap-x-4 sm:gap-y-4 flex flex-col items-center sm:flex-row px-2 py-1 pt-0.5 rounded-md"
	>
		<button
			on:click={() => {
				$isDark = !$isDark;
			}}><ThemeToggle size={6} /></button
		>
	</div>
</nav>

<style lang="postcss">
	.btn {
		@apply font-bold px-3 pb-0.5 pt-0 rounded-sm;
		@apply text-slate-50 dark:text-slate-100;
		@apply hover:text-sky-50 bg-sky-500 hover:bg-sky-400;
	}
</style>
