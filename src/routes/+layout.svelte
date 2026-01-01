<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from './Nav.svelte';
	import Connect from './connect.svelte';
	import Grain from './grain.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>About Me</title>
	<meta
		name="description"
		content="Futuristic full stack developer based in Kenya, building intelligent, user-focused web and AI solutions for global impact. Explore sleek, scalable apps by ctrlN3rd."
	/>
	<meta name="google-site-verification" content="kIqMIUYkSdHooeSR7HbDCtxEpSPSkqaY-ycMluEo6v0" />
	<link rel="icon" type="image/x-icon" href="%sveltekit.assets%/favicon.ico" />
</svelte:head>
<div
	class="absolute inset-[50%] size-[97%] -translate-[50%] rounded-xl bg-[#4e4e4e] md:size-[94%] lg:size-[90%]"
>
	<Nav />
	<Connect />
	<Grain />
	{@render children()}
</div>
