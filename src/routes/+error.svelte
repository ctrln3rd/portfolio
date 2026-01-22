<script lang="ts">
	import { glitch } from '$lib/glitch';
</script>

<div class="grid h-full w-full grid-cols-5">
	<div></div>
	<div
		class="col-span-3 flex flex-col items-center justify-center gap-4 border-x border-x-gray-100/20"
	>
		<h1 class="text-2xl" use:glitch={{ mode: 'loop' }}>404</h1>
		<p>This route doesn't exist</p>
		<a href="/" class="btn">[ back to safety ]</a>
	</div>
	<div></div>
</div>
