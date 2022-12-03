<script>
	import { dateTime, isDark } from '$lib/stores';
</script>

<div
	class="font-mono w-full text-sm
	text-slate-400
	bg-slate-800 dark:bg-slate-900
	pt-0.5 pb-0 px-2 flex justify-between
	crt"
>
	{$dateTime}
	<button
		on:keypress
		on:click={() => {
			$isDark = !$isDark;
		}}
		title="toggle dark theme"
		class="hover:font-bold hover:text-green-500 font-firacode crt-anim"
	>
		{$isDark ? ' Dark' : ' Light'}
	</button>
</div>
