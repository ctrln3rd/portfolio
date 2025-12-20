<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from './Nav.svelte';
	import Connect from './connect.svelte';
	import Grain from './grain.svelte';

	let { children } = $props();
</script>


<svelte:head><link rel="icon" href={favicon} />
<title>About Me</title>
<meta name="description" content="Futuristic full stack developer based in Kenya, building intelligent, user-focused web and AI solutions for global impact. Explore sleek, scalable apps by ctrlN3rd."/>

</svelte:head>
<div class="absolute inset-[50%] -translate-[50%] size-[97%] md:size-[94%] lg:size-[90%] bg-[#4e4e4e] rounded-xl">
	<Nav/>
	<Connect/>
	<Grain/>
	{@render children()}
</div>


