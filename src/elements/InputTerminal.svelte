<script lang="ts">
	import { keypress } from '$lib/action';
	import { history } from '$lib/stores';
	import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/solid';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	export let hindex = $history.length;
	let input: HTMLInputElement;

	function handleDispatch() {
		if (input.value) {
			dispatch('submit', input.value);
			$history[$history.length] = input.value;
			hindex = $history.length;
			input.value = '';
		}
	}

	onMount(() => {
		input.focus();
	});

	function arrowUp() {
		if (hindex == 0) return;

		hindex--;
		input.value = $history[hindex];
	}

	function arrowDown() {
		if (hindex < $history.length - 1) {
			hindex++;
			input.value = $history[hindex];
		} else {
			hindex = $history.length;
			input.value = '';
		}
	}
</script>

<form on:submit|preventDefault={handleDispatch} class="flex">
	<ChevronRightIcon class="w-6 h-6 text-green-500 dark:text-emerald-600 mr-0.5" />
	<input
		class="w-96 caret-pink-600 focus-visible:outline-none bg-transparent transition-all placeholder:text-slate-700 dark:placeholder:text-slate-500 animate-pulse"
		type="text"
		placeholder="Type 'help' to learn more."
		bind:this={input}
		use:keypress
		on:arrowup|preventDefault={arrowUp}
		on:arrowdown|preventDefault={arrowDown}
	/>
</form>
