<script lang="ts">
  import type { Translation } from 'src/types'
  import me from '../assets/images/aleksandar.jpg'

  export let text: Translation['header']
</script>

<div class="flex flex-col md:flex-row justify-between ">
  <div class="text-center p-4  flex-1 max-w-3xl w-full ">
    <h1 class="text-3xl my-3">{text.title}</h1>
    <p class="text-xl">{text.subtitle}</p>
  </div>
  <div class="center mx-auto md:mx-0">
    <img class="h-auto max-w-[300px] m-3 rounded-md" src={me} alt="Aleksandar Stanisic" />
  </div>
</div>
