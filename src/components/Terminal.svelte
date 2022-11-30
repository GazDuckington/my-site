<script lang="ts">
	import { isDark } from '$lib/stores';
	import TerminalInput from '$comp/TerminalInput.svelte';
	import { cmd } from '$lib/terminal';
	import TerminalOutput from '$comp/TerminalOutput.svelte';

	var renderOutput: string[] = [];

	function handleSubmit(e: { detail: string }) {
		if (e.detail == 'clear') {
			renderOutput = [];
		} else if (e.detail == 'theme') {
			$isDark = !$isDark;
		} else {
			const output = cmd(e.detail);
			renderOutput[renderOutput.length] = output;
		}
	}
</script>

<div>
	<TerminalOutput output={renderOutput} />
	<TerminalInput on:submit={handleSubmit} />
</div>

<style>
</style>
