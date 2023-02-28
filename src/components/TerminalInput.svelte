<script lang="ts">
	import { keypress } from '$lib/action';
	import { history } from '$lib/stores';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	export let hindex = $history.length;
	let input: HTMLInputElement;
	let prompt = '';

	function handleDispatch() {
		if (input.value) {
			dispatch('submit', input.value);
			$history[$history.length] = input.value;
			hindex = $history.length;
			input.value = '';
			return
		}
		input.focus();
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
	<p class="w-6 h-6 text-green-500 dark:text-emerald-600">{prompt}</p>
	<input
		class="
		w-full mr-2
		caret-pink-600 focus-visible:outline-none 
		placeholder:text-slate-500 dark:placeholder:text-slate-600 
		bg-transparent text-sky-500 dark:text-cyan-500
		crt-anim
		"
		type="text"
		placeholder="Type 'command' and press enter."
		bind:this={input}
		use:keypress
		on:arrowdown|preventDefault={arrowDown}
		on:arrowup|preventDefault={arrowUp}
	/>
</form>

<style>

</style>