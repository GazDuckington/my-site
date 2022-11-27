<script lang="ts">
	import { keypress } from '$lib/action';
	import { history } from '$lib/stores';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	export let hindex = $history.length;
	let input: HTMLInputElement;

	function handleDispatch() {
		dispatch('submit', input.value);
		$history[$history.length] = input.value;
		hindex = $history.length;
		input.value = '';
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

<form on:submit|preventDefault={handleDispatch}>
	<b class="caret"></b>
	<input
		type="text"
		bind:this={input}
		use:keypress
		on:arrowup|preventDefault={arrowUp}
		on:arrowdown|preventDefault={arrowDown}
	/>
</form>
