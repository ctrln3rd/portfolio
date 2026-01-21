<script lang="ts">
	import { projects } from '$lib/projects';
	import { ChevronDown, ChevronUp, X } from 'lucide-svelte';
	import { glitch } from '$lib/glitch';
	import { fade } from 'svelte/transition';

	let activeIndex = $state(0); // Using Svelte 5 state
	let zoomedImage = $state<string | null>(null);

	// Derived current project
	const project = $derived(projects[activeIndex]);

	// truncate
	const maxLength = 250;

	const displayedDescription = $derived(
		project.description.length > maxLength
			? project.description.slice(0, maxLength) + '...'
			: project.description
	);

	// Looping Navigation Logic
	function next() {
		activeIndex = (activeIndex + 1) % projects.length;
	}

	function prev() {
		activeIndex = (activeIndex - 1 + projects.length) % projects.length;
	}

	function closeZoom() {
		zoomedImage = null;
	}
</script>

<div class="grid h-full w-full grid-cols-5">
	<div class="flex flex-col items-start justify-start gap-4 p-1 lg:p-3">
		<span class="font-mono text-3xl font-bold">
			#0{activeIndex + 1}
		</span>
		<h2 class="leading-none font-bold uppercase opacity-70">
			{project.title}
		</h2>
		<p class="mt-2 flex w-full items-center gap-0.5 font-mono text-xs text-gray-400">
			<span class="h-1 w-1/3 bg-stone-400/30"></span>({project.date})
		</p>
	</div>

	<div class="col-span-3 flex items-center overflow-hidden border-x border-x-gray-100/20">
		{#if zoomedImage}
			<div class="flex w-full flex-col items-center justify-center gap-4 p-1">
				<button class="cursor-pointer self-end hover:bg-stone-400/20" onclick={closeZoom}
					>close</button
				>
				<span class="h-0.5 w-full bg-stone-200/20"></span>
				<img src={`/projects/${zoomedImage}.jpg`} alt={zoomedImage} class="w-ful" />
			</div>
		{:else}
			{#key activeIndex}
				<div in:fade={{ duration: 400 }} class="flex w-full flex-col items-center gap-3">
					<div
						class="flex items-start gap-px py-2 pr-1 text-start leading-10 text-gray-300 lg:pr-4"
					>
						<span class="mt-5 h-0.5 w-1/4 bg-gray-200/35"></span>
						<span class="">{displayedDescription}</span>
					</div>
					{#if project.images}
						<div class="flex w-full flex-wrap justify-center gap-px">
							{#each project.images as img, i}
								<button
									onclick={() => (zoomedImage = img)}
									class="group max-w-[35%] flex-1 basis-[calc(25%-1rem)] overflow-hidden"
								>
									<img
										src={`/projects/${img}.jpg`}
										alt={img}
										class="aspect-4/1 w-full cursor-zoom-in border border-white/10 object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
									/>
								</button>
							{/each}
						</div>
					{/if}
					<div class="flex w-full items-center justify-end gap-1">
						<a
							href={project.link}
							class="btn px-1 font-bold text-white transition-colors hover:bg-white hover:text-black"
						>
							(visit)
						</a>
						<span class="h-0.5 w-1/12 bg-gray-200/35 lg:w-1/6"></span>
					</div>
				</div>
			{/key}
		{/if}
	</div>

	<div class="flex flex-col items-center justify-center gap-8">
		<button
			onclick={prev}
			class="cursor-pointer transition-colors hover:bg-white/5 disabled:opacity-20"
			disabled={projects.length < 2}
		>
			prev
			<!--<ChevronUp size={32} strokeWidth={1} />-->
		</button>
		<span class="h-1/6 w-1 bg-stone-300/20"></span>
		<button
			onclick={next}
			class="cursor-pointer transition-colors hover:bg-white/5 disabled:opacity-20"
			disabled={projects.length < 2}
		>
			<!--<ChevronDown size={32} strokeWidth={1} />-->
			next
		</button>
	</div>
</div>
