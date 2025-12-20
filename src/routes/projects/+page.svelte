<script lang="ts">
    import { projects } from "$lib/projects";
    import { ChevronDown, ChevronUp, X } from "lucide-svelte"; // Added X icon
    import emblaCarouselSvelte from "embla-carousel-svelte";
    import { glitch } from "$lib/glitch";

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
    const closeZoom = () => zoomedImage = null;
</script>

<svelte:window bind:innerHeight={viewportH}/>

<div class="flex flex-col items-start gap-5 lg:gap-10 w-full h-full p-2 md:p-5 lg:p-10">
    <h2 class="text-2xl font-semibold uppercase italic">Projects</h2>

    <div class="flex items-center justify-center gap-7 w-full h-5/7 md:h-3/5 lg:h-1/2 pt-16">
        <div use:emblaCarouselSvelte={{ options } as any} on:emblaInit={onInit}
             class="overflow-hidden embla w-9/10 lg:w-6/7 h-full">
            <div class="flex items-stretch flex-col gap-10 w-full">
                {#each projects as project, i}
                    <div bind:clientHeight={projectH} 
                         class={`w-full px-5 transition-opacity duration-300 ${activeIndex === i ? 'opacity-100' : 'opacity-30'}`}>
                        
                        <div class="w-full flex gap-1 items-center">
                            <span class="w-1/3 lg:w-1/2 bg-gray-100 h-1"></span>
                            <span use:glitch={{mode: "loop", speed: 100, duration: 3000}} class="font-bold text-lg">#0{i+1}</span>
                            <span>({project.date})</span>
                        </div>
                        
                        <div>
                            <h3 class="font-bold italic text-xl text-black uppercase">{project.title}</h3>
                            <div class="mb-2">
                                {project.description}..
                                <a href={project.link} class="font-bold cursor-pointer hover:bg-gray-400">(visit)</a>
                            </div>
                            {#if project.images}
                            <div class="flex">
                            {#each project.images as projImage, i}
                            <button on:click={() => zoomedImage = projImage || null} class="block">
                                <img src={`/projects/${projImage}.jpeg`} 
                                     alt={`#00${i}`}
                                     class="grayscale hover:grayscale-0 transition-all cursor-zoom-in aspect-3/1 w-32 object-cover border border-black/10"/>
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
            <button on:click={scrollPrev} class="cursor-pointer hover:border p-1">
                <ChevronUp class="aspect-square w-5 lg:w-7 stroke-1 lg:stroke-[1.5]"/>
            </button>    
            <button on:click={scrollNext} class="cursor-pointer hover:border p-1">
                <ChevronDown class="aspect-square w-5 lg:w-7 stroke-1 lg:stroke-[1.5]"/>
            </button>
        </div>
    </div>

    {#if zoomedImage}
            <div class="z-40 fixed inset-1/2 -translate-1/2 bg-white border border-black shadow-2xl  max-w-4xl aspect-3/2 w-1/2 overflow-hidden
            flex flex-col items-center gap-2 rounded-lg p-5">
                <button on:click={closeZoom} 
                        class="self-end">
                    <X size={20} />
                </button>

                <img src={`/projects/${zoomedImage}.jpeg`} 
                     alt="no pic to show"
                     class="w-full h-full object-cover" />
                
            </div>  
    {/if}
</div>