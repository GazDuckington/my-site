<script lang="ts">
	export let output: string[];
</script>

<div class="text-violet-700 dark:text-violet-500 pr-4">Type 'help' for more information.</div>
{#if output}
	<div class="text-indigo-400 dark:text-indigo-600 px-4 py-2">
		{#each output as op}
			{@html op}
		{/each}
	</div>
{/if}
