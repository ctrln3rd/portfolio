<script lang="ts">

  import { skills } from "$lib/skills";
  import GlitchWriter from "./glitchWriter.svelte";
  import { glitch } from "$lib/glitch";
  import Terminal from "./terminal.svelte";
  const myTechTerms = ["SYSTEM_STABLE", "VULNERABILITIES FOUND", "VIRUS INJECTED", "SYSTEM CRITICAL"];
  const mySequence = [
    { cmd: "sudo dnf upgrade", res: "upto date !!" },
    { cmd: "node-version", res: "cannnot recognize term node" },
    { cmd: "sudo dnf install node", res: "done!!" },
    {cmd: "npm install", res: "10 packages installed"},
    {cmd: "npm run dev", res: "server running on localhost:3000"},
    { cmd: "clear", res: "System purged. Connection lost." }
  ];
</script>

<div class="p-5 md:p-10 relative w-full h-full flex flex-col lg:flex-row items-center gap-[10%]">
    <div class="flex flex-col items-start gap-2 pt-10">
      <img src="/me.jpg" alt="me" 
        class="w-32 lg:w-64 aspect-sqaure rounded-full border"/>
      <h1 class="text-3xl font-bold">Hello: </h1>
      <p>I'm <span use:glitch={{mode: "loop", speed: 100, duration: 2500}}
        class="font-extrabold text-black text-lg">Austine</span> I will help you in:</p>
      {#each skills as  skill}
        <div class="border-b border-b-[#111111]">
          <span class="font-bold">{skill.title}</span>
          <!--<MoveRight size="24" strokeWidth="1.5"/>-->[{skill.sub.join(", ")}]</div>
      {/each}
    </div>
    <div class="self-center text-green-400 flex flex-col items-start gap-3 p-3 relative">
      <GlitchWriter words={myTechTerms}/>
      <Terminal commands={mySequence}/>
    </div>
</div>