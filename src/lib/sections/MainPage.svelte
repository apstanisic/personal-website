<script lang="ts">
	import type { Translation } from '$lib/translations/translation.type'
	import Header from './Header.svelte'
	import LanguageSwitch from './LanguageSwitch.svelte'
	import Links from './Links.svelte'

	export let translation: Translation
</script>

<div class="min-h-screen flex flex-col pt-6 pb-4 text-gray-700 dark:bg-gray-700 dark:text-white">
	<div class="mx-auto max-w-5xl w-full">
		<LanguageSwitch t={translation} />
		<Header t={translation} />
		<Links />
	</div>
</div>
