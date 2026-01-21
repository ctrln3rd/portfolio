<script lang="ts">
	import { glitch } from '$lib/glitch';
</script>

<div class="grid w-full grid-cols-5">
	<div></div>
	<div class="col-span-3 flex items-center justify-center gap-5 border-x border-x-gray-100/20">
		<a
			href="mailto:hello.ctrln3rd@gmail.com?subject=Connection&body=Hello,%0D%0Austine I'm..."
			class="flex items-center gap-1"
			><span class="aspect-square w-2 bg-amber-300"></span>
			<span use:glitch={{ mode: 'hover' }}>email</span></a
		>
		<a href="https://github.com/ctrln3rd" class="flex items-center gap-1">
			<span class="aspect-square w-2 bg-gray-400"></span>
			<span use:glitch={{ mode: 'hover' }}>github</span></a
		>
	</div>
	<div class="p-2 text-sm opacity-50">&copy; 2026 Austine</div>
</div>
