<script lang="ts">
	import { DocumentTextIcon, MailIcon } from '@rgossiaux/svelte-heroicons/solid';
	import GithubIcon from '$elem/GithubIcon.svelte';
</script>

<div class="flex flex-col">
	<div
		class="font-bold dark:text-slate-100 text-slate-50 px-8 dark:bg-indigo-600 bg-indigo-500 w-fit"
	>
		Dian Ghazy Alfuadi, S.kom
	</div>
	<p class="font-sans italic">Software Engineer, Linux Enthusiast & Python Lover.</p>
	<ul class="flex my-2 gap-x-2">
		<li>
			<a href="mailto:dianghazy@protonmail.com">
				<MailIcon class="w-4 h-4 text-indigo-600 mt-0.5" />
				Email
			</a>
		</li>

		<li>
			<a target="_blank" rel="noopener noreferrer" href="https://www.github.com/GazDuckington">
				<GithubIcon class="w-4 h-4 text-indigo-600" />
				Github
			</a>
		</li>

		<li>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://efss.qloud.my/index.php/s/2enkqmfHBit5PCk"
			>
				<DocumentTextIcon class="w-4 h-4 text-indigo-600" />
				Resume
			</a>
		</li>
	</ul>
</div>

<style lang="postcss">
	li {
		@apply flex flex-row items-center align-middle gap-x-0.5;
	}
	li > a {
		@apply flex items-center gap-x-0.5;
		@apply font-bold text-indigo-600;
	}
</style>
