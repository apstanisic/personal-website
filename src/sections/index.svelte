<script lang="ts">
  import '../styles.css'
  import type { Translation } from '../types'
  import Header from './header.svelte'
  import Links from './links.svelte'
  import LanguageSwitch from './language-switch.svelte'

  export let translation: Translation
</script>

<div class="min-h-screen flex flex-col pt-6 pb-4 text-gray-700 dark:bg-gray-700 dark:text-white">
  <div class="mx-auto max-w-5xl w-full">
    <LanguageSwitch t={translation} />
    <Header text={translation.header} />
    <Links />
  </div>
</div>
