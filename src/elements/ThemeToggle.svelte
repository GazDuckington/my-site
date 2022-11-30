<script>
	import { MoonIcon, SunIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { isDark } from '$lib/stores';
</script>

{#if $isDark}
	<MoonIcon {...$$restProps} />
{:else}
	<SunIcon {...$$restProps} />
{/if}
