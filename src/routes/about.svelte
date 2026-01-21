<script lang="ts">
	import { skills } from '$lib/skills';
	import GlitchWriter from './glitchWriter.svelte';
	import { glitch } from '$lib/glitch';
	import Terminal from './terminal.svelte';
	const myTechTerms = [
		'SYSTEM_STABLE',
		'VULNERABILITIES FOUND',
		'VIRUS INJECTED',
		'SYSTEM CRITICAL'
	];
	const mySequence = [
		{ cmd: 'sudo dnf upgrade', res: 'upto date !!' },
		{ cmd: 'node-version', res: 'cannnot recognize term node' },
		{ cmd: 'sudo dnf install node', res: 'done!!' },
		{ cmd: 'npm install', res: '10 packages installed' },
		{ cmd: 'npm run dev', res: 'server running on localhost:3000' },
		{ cmd: 'clear', res: 'System purged. Connection lost.' }
	];
	const technologies = [
		'aws',
		'next.js',
		'gcp',
		'sveltekit',
		'cloudflare',
		'tailwind',
		'typescript',
		'python'
	];
</script>

<div class="relative grid h-full w-full grid-cols-5">
	<div class="flex h-full w-full flex-col items-start justify-between gap-2">
		<div></div>
		<!--<img src="/me.jpg" alt="me" class="h-2/5 w-full justify-self-end" />-->
	</div>

	<div
		class="col-span-3 flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden border-x border-y border-x-gray-100/20 pb-10"
	>
		<div class="flex items-start gap-1 px-[20%] leading-8">
			<span class="mt-3 aspect-square w-8 bg-amber-300 lg:w-4"></span>
			<div class="opacity-70">
				Hello, I'm <span class="font-bold opacity-100" use:glitch={{ mode: 'loop' }}>Austine</span>,
				I will help you in futuristic apps development, cloud computing and solutions and ai
				intergrations
			</div>
		</div>
		<div class="relative flex w-full overflow-hidden py-4">
			<div class="animate-scroll flex min-w-full shrink-0 items-center gap-4">
				{#each [...technologies, ...technologies] as tech}
					<div class="bg-stone-700/50 px-5 py-1 whitespace-nowrap text-gray-300/70">
						{tech}
					</div>
				{/each}
			</div>
		</div>
	</div>
	<img src="/me.jpg" alt="me" class="h-1/2 w-full" />
</div>

<style>
	/* Define the smooth scrolling animation */
	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		} /* Move by half because we doubled the list */
	}

	.animate-scroll {
		animation: scroll 20s linear infinite;
	}

	/* Optional: Pause on hover so users can read/click */
	.animate-scroll:hover {
		animation-play-state: paused;
	}
</style>
