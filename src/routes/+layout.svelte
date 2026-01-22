<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import '@fontsource/space-mono';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>About Me</title>
	<meta
		name="description"
		content="Futuristic full stack developer based in Kenya, building intelligent, user-focused web and AI solutions for global impact. Explore sleek, scalable apps by ctrlN3rd."
	/>
	<meta name="google-site-verification" content="wGnWdxJW0n_0iN3_8aVAI500jWHCermXzlnXD19kudg" />
	<link rel="icon" type="image/x-icon" href={favicon} />
</svelte:head>

<Header />
<div class="row-span-6 w-full flex-1 border-y border-y-gray-100/20">
	{@render children()}
</div>
<Footer />
