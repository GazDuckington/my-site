export function cmd(cmd: string) {
	switch (cmd.toLowerCase().trim()) {
		default:
			return "<div class='text-red-600'>command '" + cmd + "' not found.</div>";
		case 'contact':
			return contact();
		case 'help':
			return help();
		case 'about':
			return about();
		case 'ls':
			return list();
		case 'src':
			return src();
		case 'sensi':
			return sensi()
		case 'project':
			return projects()
	}
}

function sensi() {
	window.open('https://github.com/GazDuckington/sensi', '_blank');
	return `
		<div>
			<a
				href="https://github.com/GazDuckington/sensi"
			 	target="_blank"
				rel="noopener noreferrer">Sensi: Naive-Bayes sentiment analysis tool, for Indonesian language.</a>
		</div>
	`;
}

function src() {
	window.open('https://github.com/GazDuckington/my-site', '_blank');
	return `
		<div>
			<a
				href="https://github.com/GazDuckington/my-site"
			 	target="_blank"
				rel="noopener noreferrer">Terminal's source code</a>
		</div>
	`;
}

function list() {
	return `
		<div class="flex flex-col">
			<div class="text-blue-600 italic">ls</div>
			<div>list all commands (this page)</div>
			<div class="text-blue-600 italic">help</div>
			<div>returns help informations.</div>
			<div class="text-blue-600">contact</div>
			<div>clears terminal output.</div>
			<div class="text-blue-600 italic">about</div>
			<div>returns a <b>very brief</b> personal history.</div>
			<div class="text-blue-600">contact</div>
			<div>lists all of my contact information.</div>
			<div class="text-blue-600">project</div>
			<div>my projects</div>
			<div class="text-blue-600">theme</div>
			<div>toggle dark theme</div>
		</div>
	`;
}

function help() {
	return `
		<div>
			<div>🦆 You've found my terminal!</div>
			<div class="pl-6">Type 'ls' to list all commands.</div>
			<div class="pl-6">Type 'src' to go to this project's Github repository.</div>
		</div>
	`;
}

function about() {
	return `
<div class="flex flex-col">
			<h3 class="italic font-bold text-sky-500 dark:text-sky-600">Education</h3>
			<div class="font-bold">> S1 - Sistem Informasi</div>
			<div class="italic pl-3">Universitas AMIKOM Purwokerto, 2022</div>
			<div class="font-bold">> D3 - Sistem Informasi</div>
			<div class="italic pl-3">AMIK BSI Purwokerto, 2018</div>
			<h3 class="italic font-bold text-sky-500 dark:text-sky-600">Interests</h3>
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
	<h3 class="italic font-bold text-sky-500 dark:text-sky-600">Contact Informations:</h3>
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
	<div class="italic font-bold text-sky-500 dark:text-sky-600">
		<a href="https://github.com/GazDuckington/sensi" target="_blank" rel="noopener noreferrer"
			>> Sensi
		</a>
	</div>
	<div>
		<i>Framework</i> analisis sentimen bahasa Indonesia, berdasarkan algoritma Naive-Bayes, untuk Python.
	</div>

	<div class="italic font-bold text-sky-500 dark:text-sky-600">
		<a href="https://github.com/GazDuckington/my-site" target="_blank" rel="noopener noreferrer"
			>> Website
		</a>
	</div>
	<div>
		Situs bertema terminal, yang berfungsi sebagain <i>landing page</i> personal.
	</div>

	<div class="italic font-bold text-sky-500 dark:text-sky-600">
		<a href="https://github.com/GazDuckington/nvim" target="_blank" rel="noopener noreferrer"
			>> PDE</a
		>
	</div>
	<div>
		Konfigurasi Neovim sebagai <i>Personal Development Environment</i>.
	</div>

	<div class="italic font-bold text-sky-500 dark:text-sky-600">
		<a href="https://github.com/GazDuckington/dotfile" target="_blank" rel="noopener noreferrer"
			>> Dotfiles</a
		>
	</div>
	<div>
		<i>Scripts, tweaks & window manager setups. A mess.</i>
	</div>
</div>
	`
}
