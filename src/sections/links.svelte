<script lang="ts">
  // https://akaricons.com/ MIT license
  import ghLogo from '../assets/images/github.svg'
  import igLogo from '../assets/images/instagram.svg'
  import emailLogo from '../assets/images/email.svg'
  // import fbLogo from '../assets/images/facebook.svg';
  // import lnLogo from '../assets/images/linkedin.svg';

  interface Item {
    link: string
    image: string
    alt: string
  }
  const social: Item[] = [
    { image: emailLogo, link: 'mailto:aleksandar@tuta.io', alt: 'Email' },
    { image: ghLogo, link: 'https://github.com/apstanisic', alt: 'GitHub' },
    { image: igLogo, link: 'https://instagram.com/astanisic_', alt: 'Instagram' },
    // Not using currently
    // { image: fbLogo, link: 'https://www.facebook.com/apstanisic', alt: 'Facebook' },
    // { image: lnLogo, link: 'https://linkedin.com/in/astanisic', alt: 'Linkedin' }
  ]
</script>

<div class="flex justify-around gap-6  max-w-xs mx-auto mt-6">
  {#each social as item}
    <a
      class="p-3 hover:scale-110 transition-transform"
      href={item.link}
      rel="noopener noreferrer"
      target={item.alt === 'Email' ? undefined : '_blank'}
    >
      <img class="w-12 h-12 opacity-80  dark:invert" src={item.image} alt={item.alt} />
    </a>
  {/each}
</div>
