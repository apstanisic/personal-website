<script lang="ts">
	import type { Translation } from '$lib/translations/translation.type';

	export let t: Translation;
</script>

<div class="ml-auto  flex justify-end">
	<a class="my-2 mx-4 p-2 text-sm rounded-lg border-2" href={t.lang === 'en' ? '/sr' : '/'}
		>{t.lang === 'en' ? 'Srpski' : 'English'}</a
	>
</div>
