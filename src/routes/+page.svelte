<script lang="ts">
	import Terminal from '$comp/Terminal.svelte';
	import TerminalBar from '$elem/TerminalBar.svelte';
	import { dateTime, isDark } from '$lib/stores';
</script>

<svelte:head>
	<title>Terminal</title>
</svelte:head>

<TerminalBar />
<div
	class="grid grid-rows-2 w-fit
	dark:bg-slate-900
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
		title="toggle dark theme"
		class="pr-2 rounded-br crt-anim
		hover:text-green-500 hover:font-bold"
	>
		{$isDark ? ' Dark' : ' Light'}
	</button>
</div>
