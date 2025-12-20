<script lang="ts">
    import { page } from "$app/stores";
    import { MoveRight } from "lucide-svelte";
    import { glitch } from "$lib/glitch";

    const navLinks = [
        { name: "about", href: "/" },
        { name: "projects", href: "/projects" },
    ];
    
</script>

<nav class="fixed top-3 right-3 lg:top-10 lg:right-10 flex flex-col items-end gap-1 z-30">
    {#each navLinks as link}
        <a href={link.href}
        class:opacity-50={$page.url.pathname === link.href}
        class="flex gap-1 items-center font-extrabold" > 
        {#if $page.url.pathname === link.href}
        <MoveRight size="20" color="#ffffff" strokeWidth="1.5"/>
        {/if}
         <span use:glitch={{mode:"hover", speed: 100}}>{link.name}</span></a>
    {/each}
</nav>

