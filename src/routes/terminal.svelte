<script lang="ts">
	import { onMount } from 'svelte';

	interface CommandPair {
		cmd: string;
		res: string;
	}

	interface HistoryItem {
		type: 'command' | 'response';
		text: string;
	}

	export let commands: CommandPair[] = [];
	export let path: string = '$home/ctrln3rd>';
	export let typeSpeed: number = 60;

	let currentEntry: HistoryItem[] = []; // Only holds the active pair
	let currentCmdIndex: number = 0;
	let typingText: string = '';
	let isTyping: boolean = false;

	async function runTerminal(): Promise<void> {
		// Reset index if we reach the end of the array
		if (currentCmdIndex >= commands.length) {
			currentCmdIndex = 0;
		}

		const item = commands[currentCmdIndex];

		// 1. Clear previous entry before starting new one
		currentEntry = [];
		isTyping = true;
		typingText = '';

		// 2. Type the command line
		for (let i = 0; i <= item.cmd.length; i++) {
			typingText = item.cmd.substring(0, i);
			await new Promise((r) => setTimeout(r, typeSpeed + Math.random() * 20));
		}

		// 3. Move typed command to "history" and show response
		isTyping = false;
		currentEntry = [
			{ type: 'command', text: `${path} ${item.cmd}` },
			{ type: 'response', text: item.res }
		];

		// 4. Wait for user to read the pair
		await new Promise((r) => setTimeout(r, 2500));

		// 5. Increment and loop
		currentCmdIndex++;
		runTerminal();
	}

	onMount(() => {
		if (commands.length > 0) runTerminal();
	});
</script>

<div class="terminal-box">
	<div class="scanline"></div>
	<div class="glow"></div>

	<div class="content">
		{#each currentEntry as line}
			<div class="line {line.type}">
				{line.text}
			</div>
		{/each}

		{#if isTyping}
			<div class="line command">
				{path}
				{typingText}<span class="cursor"></span>
			</div>
		{/if}
	</div>
</div>

<style>
	.terminal-box {
		background: transparent;
		color: #00ff41;
		font-family: 'Fira Code', 'Courier New', monospace;
		width: 100%;
		max-width: 600px;
		height: fit-content; /* Short height since it's only one pair at a time */
		border: 2px solid #1a1a1a;
		position: relative;
		overflow: hidden;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		align-items: flex-start;
	}

	.content {
		position: relative;
		z-index: 5;
	}

	.line {
		margin-bottom: 8px;
		line-height: 1.5;
		white-space: pre-wrap;
		text-shadow: 0 0 8px rgba(0, 255, 65, 0.6);
	}

	.command {
		color: #fff;
	}

	.response {
		color: #00ff41;
		opacity: 0.9;
		padding-left: 10px;
	}

	.cursor {
		display: inline-block;
		width: 10px;
		height: 1.2em;
		background: #00ff41;
		margin-left: 5px;
		vertical-align: middle;
		animation: blink 0.8s step-end infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	/* Retro CRT FX */
	.scanline {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.3) 51%);
		background-size: 100% 4px;
		pointer-events: none;
		z-index: 10;
	}

	.glow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(circle, transparent 60%, rgba(0, 40, 0, 0.4) 100%);
		pointer-events: none;
	}
</style>
