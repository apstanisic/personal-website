<script lang="ts">
  import type { Translation } from '../translations'
  import Header from './header.svelte'
  import LanguageSwitch from './language-switch.svelte'
  import Links from './links.svelte'

  export let translation: Translation
</script>

<div
  class="min-h-screen flex flex-col pt-6 pb-4 text-gray-700 dark:bg-gray-700 dark:text-white"
>
  <div class="mx-auto max-w-5xl w-full">
    <LanguageSwitch t={translation} />
    <Header text={translation.header} />
    <Links />
  </div>
</div>
