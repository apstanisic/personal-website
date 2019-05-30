class Navigation {

    constructor() {
        this.navigation = document.querySelector('.nav-links');
        this.button = document.querySelector('.nav-button');
        this.links = document.querySelectorAll('.nav-link');

        this._addListeners();
    }

    toggle() {
        [this.navigation, this.button].forEach( x => x.classList.toggle('show-nav'));
    }
    hide(){
        [this.navigation, this.button].forEach( x => x.classList.remove('show-nav'));
    }
    show(){
        [this.navigation, this.button].forEach( x => x.classList.add('show-nav'));
    }

    _addListeners() {
        this.button.addEventListener('click', this.toggle.bind(this));
        this.links.forEach( link => link.addEventListener('click', this.hide.bind(this)));
    }
}

export default new Navigation();