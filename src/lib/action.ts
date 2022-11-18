export function keypress(node: any) {
	function handleKeypress(e: any) {
		if (e.key === 'Enter') {
			node.dispatchEvent(new CustomEvent('enterkey'));
		} else if (e.key === 'ArrowUp') {
			node.dispatchEvent(new CustomEvent('arrowup'));
		} else if (e.key === 'ArrowDown') {
			node.dispatchEvent(new CustomEvent('arrowdown'));
		}
	}

	document.addEventListener('keydown', handleKeypress, true);

	return {
		destroy() {
			document.removeEventListener('keydown', handleKeypress, true);
		}
	};
}
