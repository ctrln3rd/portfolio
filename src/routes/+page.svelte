<script lang="ts">
	import { fly } from 'svelte/transition';
	import { appState } from '$lib/state.svelte';
	import About from './about.svelte';
	import Projects from './projects.svelte';
</script>

<div class="overflow-hidde w-ful relative inset-0 h-5/6">
	{#if appState.activeSection === 'about'}
		<div
			class="absolute flex h-full w-full flex-col items-center"
			in:fly={{ y: -100, duration: 800, opacity: 0 }}
			out:fly={{ y: -100, duration: 500, opacity: 0 }}
		>
			<About />
		</div>
	{:else if appState.activeSection === 'projects'}
		<div
			class="absolute flex h-full w-full flex-col items-center"
			in:fly={{ y: 100, duration: 800, opacity: 0 }}
			out:fly={{ y: 100, duration: 500, opacity: 0 }}
		>
			<Projects />
		</div>
	{/if}
</div>
