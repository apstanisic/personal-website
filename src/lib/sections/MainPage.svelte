<script lang="ts">
	import type { Translation } from '$lib/translations/translation.type'
	import Content from './Content.svelte'
	import LanguageSwitch from './LanguageSwitch.svelte'
	import Links from './Links.svelte'

	export let translation: Translation
</script>

<div class="min-h-screen flex flex-col py-4 text-gray-700 dark:bg-gray-700 dark:text-white">
	<div class="mx-auto md:max-w-3xl max-w-xl">
		<LanguageSwitch t={translation} />
		<Content t={translation} />
		<Links />
	</div>
</div>
