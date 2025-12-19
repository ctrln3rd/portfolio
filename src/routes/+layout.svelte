<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from './Nav.svelte';
	import Connect from './connect.svelte';

	let { children } = $props();
</script>


<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div 
class="absolute inset-[50%] -translate-[50%] size-[97%] md:size-[94%] lg:size-[90%] bg-linear-to-b from-gray-300 to-gray-400 rounded-xl">
	<Nav/>
	<Connect/>
	<div>
		
	</div>
	{@render children()}
</div>
