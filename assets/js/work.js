import nav from './navigation';

class Work {

    constructor(navigation) {
        this.work = document.querySelector('#work');
        this.button = document.querySelector('#workShowMore');
        this.rowToHide = document.querySelector('#rowToHide');

        if (this.button) {
            this._addListeners();
        }
    }

    toggleMoreJobs(){
        this.rowToHide.classList.toggle('hidden-height');
        this.button.style.animation = "none";

        let currentButtonText = this.button.innerHTML;
        this.button.innerHTML = this.button.getAttribute('data-work-button');
        this.button.setAttribute('data-work-button', currentButtonText);
        // this.button.scrollIntoView({ behavior: 'smooth' });
        if (this.rowToHide.classList.contains('hidden-height')) {
            this.work.scrollIntoView({ behavior: 'smooth' });
        }

        nav.hide();
    }

    _addListeners() {
        this.button.addEventListener('click', this.toggleMoreJobs.bind(this));
    }

}

export default new Work();