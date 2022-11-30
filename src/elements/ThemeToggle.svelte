<script>
	import { MoonIcon, SunIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { isDark } from '$lib/stores';
	export let size = 5;
</script>

{#if $isDark}
	<MoonIcon {...$$restProps} />
{:else}
	<SunIcon {...$$restProps} />
{/if}
