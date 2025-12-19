<script lang="ts">

  import { skills } from "$lib/skills";
  import { MoveRight } from "lucide-svelte";
  import { glitch } from "$lib/glitch";
 
</script>

<div class="p-5 md:p-10 relative w-full h-full">
    <div class="flex flex-col items-start gap-2 pt-10">
      <img src="/me.jpg" alt="me" 
        class="w-32 lg:w-64 aspect-sqaure rounded-full border"/>
      <h1 class="text-3xl font-bold">Hello: </h1>
      <p>I'm <span use:glitch={{mode: "loop", speed: 100, duration: 2500}}
        class="font-bold">Austine</span> I will help you in:</p>
      {#each skills as  skill}
        <div class="border-b border-b-[#111111]">
          <span class="font-bold">{skill.title}</span>
          <!--<MoveRight size="24" strokeWidth="1.5"/>-->[{skill.sub.join(", ")}]</div>
      {/each}
    </div>
</div>