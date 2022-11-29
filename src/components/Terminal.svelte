<script lang="ts">
	import InputTerminal from '$elem/InputTerminal.svelte';
	import { cmd } from '$lib/terminal';

	var renderOutput: string[] = [];

	function handleSubmit(e: { detail: string }) {
		if (e.detail == 'clear') {
			renderOutput = [];
		} else {
			const output = cmd(e.detail);
			renderOutput[renderOutput.length] = output;
		}
	}
</script>

<div class="container">
	<div class="output">
		{#each renderOutput as op}
			{@html op}
		{/each}
	</div>

	<div class="input">
		<InputTerminal on:submit={handleSubmit} />
	</div>
</div>

<style>
</style>
