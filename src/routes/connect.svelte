<script lang="ts">
    import { glitch } from "$lib/glitch";
</script>


<div class="z-30 absolute bottom-10 right-2 md:right-5  lg:right-10  flex flex-col items-end gap-0.5">
    <h3 class="text-lg lg:text-2xl font-bold">
        Let's Co<span use:glitch={{mode: "loop", speed: 100, duration: 3000}}>nn</span>ect:</h3>
    <div class="flex flex-row-reverse gap-5">
    <a href="https://github.com/ctrln3rd" use:glitch={{mode: "hover"}}
    class="underline">github</a>
    <a href="https://github.com/ctrln3rd" use:glitch={{mode: "hover"}}
    class="underline">discord</a>
    <a href="https://github.com/ctrln3rd" use:glitch={{mode: "hover"}}
    class="underline">linkedin</a>
    </div>
</div>