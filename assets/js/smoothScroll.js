class SmoothScroll {
	constructor() {
		this.hashLinks = document.querySelectorAll('a[href^="#"]');
		this._addListeners();
	}

	scrollIntoView() {
		const direction = this.getAttribute('href');
		document.querySelector(direction).scrollIntoView({ behavior: 'smooth' });
		// setTimeout(() => window.scrollBy(0, -100), 1000);
		this.scrollTop += 1100;


	};

	_addListeners() {

		this.hashLinks.forEach(link => {
			// console.log(link.getAttribute('href'));
			link.addEventListener('click', this.scrollIntoView);
		});

	}
}

new SmoothScroll();