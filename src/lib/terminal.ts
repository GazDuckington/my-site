export function cmd(cmd: string) {
	switch (cmd.toLowerCase().trim()) {
		default:
			return "<div class='text-red-600'>command '" + cmd + "' not found.</div>";
		case 'contact':
			return contact();
		case 'help':
			return help();
		case 'about':
			return about()
		case 'ls':
			return list()
		case 'src':
			return src()
	}
}

function src() {
	window.open('https://github.com/GazDuckington/my-site', "_blank");
	return `
		<div>
			<a
				href="https://github.com/GazDuckington/my-site"
			 	target="_blank"
				rel="noopener noreferrer">Terminal's source code</a>
		</div>
	`
}

function list() {
	return `
		<ul class="list-inside">
			<li>'ls': 'list all commands (this page)'</li>
			<li>'help': 'returns help page.'</li>
			<li>'about': 'returns a little info about me.'</li>
			<li>'contact': 'returns my contact informations.'</li>
		</ul>
	`
}

function help() {
	return `
		<div>
			<div>🦆 You've found my terminal!</div>
			<div>This project is my personal landing page on the net.</div>
			<div>Type 'ls' to list all commands.</div>
			<div>Type 'src' to go to this project's Github repository.</div>
		</div>
	`
}

function about() {
	return `
		<table class="border-spacing-2 border-separate w-full">
			<tr>
				<td class="flex justify-end pl-4 px-2 text-white font-bold bg-indigo-500 dark:bg-indigo-600">Edu.</td>
				<td>
					<div class="font-bold">S1 - Sistem Informasi</div>
					<div class="italic">Universitas AMIKOM Purwokerto, 2022</div>
					<div class="font-bold">D3 - Sistem Informasi</div>
					<div class="italic">AMIK BSI Purwokerto, 2018</div>
				</td>
			</tr>
			<tr>
				<td class="flex justify-end px-2 text-white font-bold bg-indigo-500 dark:bg-indigo-600">Int.</td>
				<td>
					<ul class="list-disc list-inside">
						<li>Python, Svelte</li>
						<li>JAMStack, Backend development</li>
						<li>Linux Ricing</li>
						<li>Learning new programming languages</li>
					</ul>
				</td>
			</tr>
		</table>
	`
}

function contact() {
	return `
		<table class="border-spacing-2 border-separate w-full">
			<tr>
				<td class="flex justify-end pl-4 px-2 text-white font-bold bg-indigo-500 dark:bg-indigo-600">Con.</td>
				<td>
					<ul class="list-disc list-inside">
						<li>
							<a href="mailto:dianghazy@protonmail.com">dianghazy@protonmail.com</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/ghazy-alfuadi-0bab72242/"
								target="_blank"
								rel="noopener noreferrer">LinkedIn</a
							>
						</li>
						<li>
							<a
								href="https://www.github.com/GazDuckington/"
								target="_blank"
								rel="noopener noreferrer">Github</a
							>
						</li>
						</ul>
				</td>
			</tr>
		</table>
	`
}
