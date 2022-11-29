<script>
	import { MoonIcon, SunIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { isDark } from '$lib/stores';
	export let size = 8;
</script>

{#if $isDark}
	<MoonIcon
		class="w-{size} h-{size} text-sky-200 stroke-sky-400 hover:text-sky-100 hover:stroke-sky-300"
	/>
{:else}
	<SunIcon
		class="w-{size} h-{size} text-orange-200 stroke-orange-400 hover:text-orange-100 hover:stroke-orange-300"
	/>
{/if}

<style lang="postcss">
</style>
