<script lang="ts">
	import { glitch } from '$lib/glitch';
	import { appState } from '$lib/state.svelte';
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
</script>

<div class="fixed bottom-5 flex w-full items-center justify-between px-2 py-2 lg:px-10">
	<div class="">
		<button
			onclick={() => appState.toggle()}
			class="flex cursor-pointer items-center gap-2 font-extrabold text-white transition-colors hover:text-gray-950"
		>
			{#if appState.activeSection === 'about'}
				projects <ChevronDown class="w-7" />
			{:else}
				about <ChevronUp class="w-7" />
			{/if}
		</button>
	</div>
	<div class="z-30 flex flex-col items-end">
		<h3 class="text-lg font-bold lg:text-2xl">
			Let's Co<span use:glitch={{ mode: 'loop', speed: 100, duration: 3000 }}>nn</span>ect:
		</h3>
		<div class="flex flex-row-reverse gap-5">
			<!--<a href="https://github.com/ctrln3rd" use:glitch={{mode: "hover"}}
    class="underline">discord</a>-->
			<a href="https://github.com/ctrln3rd" use:glitch={{ mode: 'hover' }} class="underline"
				>github</a
			>
		</div>
	</div>
</div>
