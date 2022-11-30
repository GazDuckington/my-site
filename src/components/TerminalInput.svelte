<script lang="ts">
	import { keypress } from '$lib/action';
	import { history } from '$lib/stores';
	import { ChevronRightIcon } from '@rgossiaux/svelte-heroicons/solid';
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
	<p class="w-6 h-6 text-green-500 dark:text-emerald-600 animate-pulse">{prompt}</p>
	<input
		class="lg:w-[60em] w-[20em] caret-pink-600 focus-visible:outline-none 
		placeholder:text-slate-800 dark:placeholder:text-slate-500 placeholder:animate-pulse 
		bg-transparent text-slate-100 dark:text-slate-300"
		type="text"
		placeholder="enter command here."
		bind:this={input}
		use:keypress
		on:arrowup|preventDefault={arrowUp}
		on:arrowdown|preventDefault={arrowDown}
	/>
	<style>
		input {
			animation: flicker 0.15s infinite;
			animation: textShadow 1.6s infinite;
		}
	</style>
</form>
