<script lang="ts">
	import Terminal from '$comp/Terminal.svelte';
	import TerminalBar from '$elem/TerminalBar.svelte';
	import ThemeToggle from '$elem/ThemeToggle.svelte';
	import { dateTime, isDark } from '$lib/stores';
</script>

<svelte:head>
	<title>Terminal</title>
</svelte:head>

<TerminalBar />
<div
	class="grid grid-rows-2 w-fit
	bg-slate-800 dark:bg-slate-900
	h-[80vh] overflow-auto font-mono crt"
>
	<div class="flex justify-start mx-2">
		<Terminal />
	</div>
</div>
<div class="flex justify-between font-mono pl-2 bg-slate-800 dark:bg-slate-900 rounded-b crt">
	<div>
		{$dateTime}
	</div>
	<button
		on:keypress
		on:click={() => {
			$isDark = !$isDark;
		}}
		class="p-0.5 rounded-br"
	>
		<ThemeToggle
			class="w-5 h-5
			hover:text-slate-400 
			dark:text-slate-700 dark:hover:text-slate-500"
		/>
	</button>
</div>
