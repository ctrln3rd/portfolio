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
</script>

<div
	class="relative flex h-full w-full flex-col items-center justify-center gap-[10%] px-5 py-1 lg:flex-row"
>
	<div class="flex flex-col items-start gap-2">
		<img src="/me.jpg" alt="me" class="aspect-sqaure w-32 rounded-full border lg:w-56" />
		<h1 class="text-3xl font-bold">Hello:</h1>
		<p>
			I'm <span
				use:glitch={{ mode: 'loop', speed: 100, duration: 2500 }}
				class="text-lg font-extrabold text-black">Austine</span
			> I will help you in:
		</p>
		{#each skills as skill}
			<div class="border-b border-b-[#eeeeee]">
				<span class="font-bold">{skill.title}</span>
				<!--<MoveRight size="24" strokeWidth="1.5"/>-->[{skill.sub.join(', ')}]
			</div>
		{/each}
	</div>
	<div class="relative flex flex-col items-start gap-3 self-center p-3 text-green-400">
		<GlitchWriter words={myTechTerms} />
		<Terminal commands={mySequence} />
	</div>
</div>
