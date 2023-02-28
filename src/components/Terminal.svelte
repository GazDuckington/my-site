<script lang="ts">
	import TerminalInput from '$comp/TerminalInput.svelte';
	import TerminalOutput from '$comp/TerminalOutput.svelte';
	import TermInfo from '$elem/TerminalInfoBar.svelte';
	import { isDark } from '$lib/stores';
	import { cmd } from '$lib/terminal';

	var renderOutput: string[] = [];

	function handleSubmit(e: { detail: string }) {
		if (e.detail == 'clear' || e.detail == 'cl') {
			renderOutput = [];
		} else if (e.detail == 'theme') {
			$isDark = !$isDark;
		} else {
			const output = cmd(e.detail);
			renderOutput[renderOutput.length] = output;
		}
	}
</script>

<div
	class="
	md:w-[90vh] w-[99%]
	crt crt-anim font-firacode
	"
>
	<TermInfo />
	<div
		class="
		overflow-scroll 
		pl-2 h-[60vh] rounded-b-md 
		bg-gray-900
		"
	>
		<TerminalOutput output={renderOutput} />
		<TerminalInput on:submit={handleSubmit} />
	</div>
</div>

<style>
</style>
