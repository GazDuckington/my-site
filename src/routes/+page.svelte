<script lang="ts">
	import Terminal from '$comp/Terminal.svelte';
	import TerminalBar from '$elem/TerminalBar.svelte';
	import TerminalFooter from '$elem/TerminalFooter.svelte';
</script>

<div
	class="rounded border-2 shadow-xl border-slate-800 dark:border-slate-700 
	w-[20em] md:w-[45em] 
	font-firacode crt"
>
	<TerminalBar />

	<div
		class="grid grid-rows-2
	dark:bg-slate-900
	h-[80vh] overflow-auto crt"
	>
		<div class="flex justify-start mx-2">
			<Terminal />
		</div>
	</div>

	<TerminalFooter />
</div>
