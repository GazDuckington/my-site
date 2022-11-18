export function cmd(cmd: string) {
	switch (cmd.toLowerCase().trim()) {
		default:
			return "<div>command '" + cmd + "' not found.</div>";
		case 'greet':
			return hello();
		case 'multiline':
			return multi();
	}
}

function hello(): string {
	return `<div>hello</div>`;
}

function multi(): string {
	return `<div class='row'>
		<div class='field_name'>
			Name:	
		</div>
		<div class='field_value'>
			Ghazy
		</div>
	</div>`;
}
