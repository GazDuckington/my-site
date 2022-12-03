/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			'firacode': 'FiraCode Nerd Font Complete'
		},
	},
	plugins: [require('@tailwindcss/typography')]
};
