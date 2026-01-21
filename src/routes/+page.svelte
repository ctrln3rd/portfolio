<script lang="ts">
	import { fade } from 'svelte/transition';
	import { appState } from '$lib/state.svelte';
	import About from './about.svelte';
	import Projects from './projects.svelte';
</script>

<div class="grid h-full w-full">
	{#if appState.activeSection === 'about'}
		<div
			class="col-start-1 row-start-1 flex h-full w-full flex-col items-center"
			in:fade={{ duration: 800 }}
			out:fade={{ duration: 500 }}
		>
			<About />
		</div>
	{:else if appState.activeSection === 'projects'}
		<div
			class="col-start-1 row-start-1 flex h-full w-full flex-col items-center"
			in:fade={{ duration: 800 }}
			out:fade={{ duration: 500 }}
		>
			<Projects />
		</div>
	{/if}
</div>
