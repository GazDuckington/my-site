<script lang="ts">
	import { keypress } from '$lib/action';
	import { cmd } from '$lib/terminal';
	import { history } from '$lib/stores';
	import { onMount } from 'svelte';

	let input: any;
	var renderOutput: string[] = [];
	let hindex = $history.length;

	function handleSubmit() {
		const output = cmd(input.value);
		renderOutput[renderOutput.length] = output;
		$history[$history.length] = input.value;
		hindex = $history.length;
		input.value = '';
	}

	function arrowUp() {
		if (hindex === 0) return;

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

	onMount(() => {
		input.focus();
	});
</script>

<body>
	<div class="content">
		<div class="output">
			{#each renderOutput as op}
				{@html op}
				<br />
			{/each}
		</div>

		<form on:submit|preventDefault={() => handleSubmit()}>
			<b class="caret">></b>
			<input
				type="text"
				bind:this={input}
				use:keypress
				on:arrowup|preventDefault={arrowUp}
				on:arrowdown|preventDefault={arrowDown}
			/>
		</form>
	</div>
</body>

<style>
</style>
