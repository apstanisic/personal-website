<script lang="ts">
	// https://akaricons.com/ MIT license
	import emailLogo from '$lib/images/email.svg'
	import ghLogo from '$lib/images/github.svg'
	import lnLogo from '$lib/images/linkedin.svg'
	// import fbLogo from '$lib/images/facebook.svg';

	type Item = {
		link: string
		image: string
		alt: string
	}
	const social: Item[] = [
		{ image: emailLogo, link: 'mailto:aleksandar@tuta.io', alt: 'Email' },
		{ image: ghLogo, link: 'https://github.com/apstanisic', alt: 'GitHub' },
		{ image: lnLogo, link: 'https://www.linkedin.com/in/astanisic/', alt: 'LinkedIn' }
		// {
		// 	image: igLogo,
		// 	link: 'https://instagram.com/astanisic_',
		// 	alt: 'Instagram'
		// }
		// Not using currently
		// { image: fbLogo, link: 'https://www.facebook.com/apstanisic', alt: 'Facebook' },
		// { image: lnLogo, link: 'https://linkedin.com/in/astanisic', alt: 'Linkedin' }
	]
</script>

<div class="flex justify-around gap-6 max-w-xs mx-auto mt-6">
	{#each social as item}
		<a
			class="p-3 hover:scale-110 transition-transform"
			href={item.link}
			rel="noopener noreferrer"
			target={item.alt === 'Email' ? undefined : '_blank'}
		>
			<img class="w-12 h-12 opacity-80 dark:invert" src={item.image} alt={item.alt} />
		</a>
	{/each}
</div>
