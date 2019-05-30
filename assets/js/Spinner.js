class Spinner {

	constructor() {
		this.spinner = document.querySelector('#spinner');
	}

	show() {
		this.spinner.classList.remove('hidden');
	}

	hide() {
		this.spinner.classList.add('hidden');
	}

	toggle() {
		this.spinner.classList.toggle('hidden');
	}

	extend(time, type = this.hide) {
		setTimeout(type, time);
	}
}


export default new Spinner();