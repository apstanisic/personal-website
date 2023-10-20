<script lang="ts">
	import me from '$lib/images/aleksandar.jpg'
	import type { Translation } from '$lib/translations/translation.type'

	export let t: Translation
</script>

<div class="flex flex-col md:flex-row justify-between mb-10 mt-4 gap-y-4">
	<div class="text-center p-4 flex-1 w-full">
		<h1 class="text-3xl my-3">{t.header.title}</h1>
		<p class="text-xl">{t.header.subtitle}</p>
	</div>
	<div class="center mx-auto md:mx-0">
		<img class="h-auto max-w-[300px] m-3 rounded-md" src={me} alt="Aleksandar Stanisic" />
	</div>
</div>
