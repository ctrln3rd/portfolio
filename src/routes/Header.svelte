<script lang="ts">
	import { appState } from '$lib/state.svelte';
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import { glitch } from '$lib/glitch';
</script>

<div class="grid w-full grid-cols-5">
	<div class="flex items-center justify-center font-bold uppercase">
		{#if appState.activeSection === 'about'}
			About me
		{:else if appState.activeSection === 'projects'}
			my Projects
		{:else}
			blank
		{/if}
	</div>
	<div class="col-span-3 flex items-center justify-center border-x border-x-gray-100/20">
		<button
			onclick={() => appState.toggle()}
			class="transition-color flex w-11/12 cursor-pointer items-center justify-between gap-2 bg-gray-500/20 px-1 text-white"
		>
			<span class="flex items-center gap-0.5"
				><span class="aspect-square w-2 bg-amber-300"></span>go to</span
			>
			<div class="flex items-center gap-1">
				{#if appState.activeSection === 'about'}
					<span use:glitch={{ mode: 'loop' }}>projects</span> <ChevronDown class="w-7" />
				{:else}
					<span use:glitch={{ mode: 'loop' }}>about</span> <ChevronUp class="w-7" />
				{/if}
			</div>
		</button>
	</div>
	<div></div>
</div>
