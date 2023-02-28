export function cmd(cmd: string) {
	switch (cmd.toLowerCase().trim()) {
		default:
			return "<div class='text-red-500'>command '" + cmd + "' not found.</div>";
		case 'contact':
			return contact();
		case 'about':
			return about();
		case 'ls':
			return list();
		case 'help':
			return list();
		case 'project':
			return projects();
	}
}

function list(): string {
	return `<h2>🦆 Welcome to my terminal!</h2>
    <h3>Available commands:</h3>
    <ul>
    <li><b>ls</b>/<b>help</b>: show this info.</li>
    <li><b>about</b>: about author.</li>
    <li><b>contact</b>: show author's contact information.</li>
    <li><b>project</b>: author's active projects.</li>
    </ul>
    `;
}

function about() {
	return `
<div class="flex flex-col">
			<h3>Education</h3>
			<div class="font-bold">> S1 - Sistem Informasi</div>
			<div class="italic pl-3">Universitas AMIKOM Purwokerto, 2022</div>
			<h3>Interests</h3>
			<ul class="list-inside">
				<li>> Python, Svelte</li>
				<li>> JAMStack, Backend development</li>
				<li>> Linux Ricing</li>
				<li>> Learning new programming languages</li>
			</ul>
		</div>
	`;
}

function contact() {
	return `
<div class="flex flex-col">
	<h3>Contact Informations:</h3>
	<div>
		> <a href="mailto:dianghazy@protonmail.com">dianghazy@protonmail.com</a>
	</div>
	<div>
		>
		<a
			href="https://www.linkedin.com/in/ghazy-alfuadi-0bab72242/"
			target="_blank"
			rel="noopener noreferrer">LinkedIn</a
		>
	</div>
	<div>
		>
		<a href="https://www.github.com/GazDuckington/" target="_blank" rel="noopener noreferrer"
			>Github</a
		>
	</div>
</div>

	`;
}

function projects() {
	return `
<div class="flex flex-col">
	<div>
		Sensi: <a href="https://github.com/GazDuckington/sensi" target="_blank" rel="noopener noreferrer">github:GazDuckington/sensi</a>
	</div>
	<div>
		<i>Library</i> analisis sentimen bahasa Indonesia.
	</div>

	<div>
		This site: <a href="https://github.com/GazDuckington/my-site" target="_blank" rel="noopener noreferrer">github:GazDuckington/my-site</a>
	</div>
</div>
	`;
}
