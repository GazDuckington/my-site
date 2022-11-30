<script lang="ts">
	export let output: string[];
</script>

<div class="text-violet-600 dark:text-violet-500 px-6">Type 'help' for more information.</div>
{#if output}
	<div class="text-indigo-700 dark:text-indigo-500 px-6 py-2">
		{#each output as op}
			{@html op}
		{/each}
	</div>
{/if}
