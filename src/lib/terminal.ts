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
	return `
<table>
  <tr>
    <td rowspan="2">
		</td>
    <td>Name:</td>
    <td>Ghazy</td>
  </tr>
  <tr>
    <td></td>
    <td>c</td>
  </tr>
</table>
		`;
}
