<script lang="ts">
	import { projects } from '$lib/projects';
	import { ChevronDown, ChevronUp, X } from 'lucide-svelte'; // Added X icon
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { glitch } from '$lib/glitch';

	let emblaApi: any;
	let activeIndex = 1;

	let options = {
		align: 'start',
		containScroll: false,
		loop: true,
		axis: 'y',
		startIndex: 1
	};

	let projectH: number;
	let viewportH: number;

	// State for the zoomed image
	let zoomedImage: string | null = null;

	const onInit = (event: any) => {
		emblaApi = event.detail;
		emblaApi.on('select', updateActiveIndex);
		updateActiveIndex();
	};

	const updateActiveIndex = () => {
		if (!emblaApi) return;
		activeIndex = emblaApi.selectedScrollSnap();
	};

	const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
	const scrollNext = () => emblaApi && emblaApi.scrollNext();

	// Close helper
	const closeZoom = () => (zoomedImage = null);
</script>

<svelte:window bind:innerHeight={viewportH} />

<div class="flex h-full w-full flex-col items-start gap-5 p-2 md:p-5 lg:gap-10 lg:p-10">
	<h2 class="text-2xl font-semibold uppercase italic">Projects</h2>

	<div class="flex h-5/7 w-full items-center justify-center gap-7 pt-16 md:h-3/5 lg:h-1/2">
		<div
			use:emblaCarouselSvelte={{ options } as any}
			on:emblaInit={onInit}
			class="embla h-full w-9/10 overflow-hidden lg:w-6/7"
		>
			<div class="flex w-full flex-col items-stretch gap-10">
				{#each projects as project, i}
					<div
						bind:clientHeight={projectH}
						class={`w-full px-5 transition-opacity duration-300 ${activeIndex === i ? 'opacity-100' : 'opacity-30'}`}
					>
						<div class="flex w-full items-center gap-1">
							<span class="h-1 w-1/3 bg-gray-100 lg:w-1/2"></span>
							<span
								use:glitch={{ mode: 'loop', speed: 100, duration: 3000 }}
								class="text-lg font-bold">#0{i + 1}</span
							>
							<span>({project.date})</span>
						</div>

						<div>
							<h3 class="text-xl font-bold text-black uppercase italic">{project.title}</h3>
							<div class="mb-2">
								{project.description}..
								<a
									href={project.link}
									class="cursor-pointer font-extrabold text-white hover:bg-gray-400">(visit)</a
								>
							</div>
							{#if project.images}
								<div class="flex">
									{#each project.images as projImage, i}
										<button on:click={() => (zoomedImage = projImage || null)} class="block">
											<img
												src={`/projects/${projImage}.jpg`}
												alt={`#00${i}`}
												class="aspect-3/1 w-32 cursor-zoom-in border border-black/10 object-cover grayscale transition-all hover:grayscale-0"
											/>
										</button>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-5">
			<button on:click={scrollPrev} class="cursor-pointer p-1 hover:border">
				<ChevronUp class="aspect-square w-5 stroke-1 lg:w-7 lg:stroke-[1.5]" />
			</button>
			<button on:click={scrollNext} class="cursor-pointer p-1 hover:border">
				<ChevronDown class="aspect-square w-5 stroke-1 lg:w-7 lg:stroke-[1.5]" />
			</button>
		</div>
	</div>

	{#if zoomedImage}
		<div
			class="fixed inset-1/2 z-40 flex aspect-3/2 w-7/8 max-w-4xl -translate-1/2 flex-col items-center gap-2 overflow-hidden rounded-lg border
            border-black bg-white p-5 shadow-2xl md:w-3/4 lg:w-1/2"
		>
			<button on:click={closeZoom} class="cursor-pointer self-end text-black">
				<X size={20} />
			</button>

			<img
				src={`/projects/${zoomedImage}.jpg`}
				alt="no pic to show"
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}
</div>
