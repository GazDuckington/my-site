<script lang="ts">
	export let output: string[];
</script>

{#if output}
	<div class="output px-6">
		{#each output as op}
			{@html op}
		{/each}
	</div>
{/if}

<style lang="postcss" global>
	.output {
		@apply text-gray-500;
		overflow: auto;
		display: flex;
		flex-direction: column-reverse;
	}
	.output a {
		@apply text-blue-500 hover:text-sky-500;
	}
</style>
