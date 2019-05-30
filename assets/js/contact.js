import TestRegex from './compare';
import spinner from './Spinner';
import regex from './data/regex';
import 'babel-polyfill';

class ContactForm {

    constructor() {
        this.form = document.querySelector('#contactForm');
        this.inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
        this.button = document.querySelector('#contactSubmit');
        this.successText = document.querySelector('#contactFormSuccess');

        this.validator = new TestRegex();

        this._addListeners();
    }


    validate(input, event) {
        this.validateField(event, input);
        this.validateForm(event);
    }


    formSubmit(e) {
        e.preventDefault();

        spinner.show();

        let data = {
            action: this.form.getAttribute('action'),
            inputs: new FormData(this.form)
        };

        // for (const input of this.inputs) {
        //     const nameAttr = input.getAttribute('name');
        //     data.inputs[nameAttr] = input.value;
        // }

        // data.inputs = JSON.stringify(data.inputs);

        // Web Workers cant work with FormData,
        // Formspree can't work without FormData
        // Remove "&& false" to test web worker my file
        // JSON.stringify doesn't help
        if (window.Worker && true) {
            const worker = new Worker('javascripts/worker.js');

            // Just to don't throw an error.
            data.inputs = JSON.stringify(data.inputs);

            worker.postMessage(data);
            worker.addEventListener('message', this._formSubmited.bind(this));

        } else {

            const xmlhttp = new XMLHttpRequest();
            const exec = this._formSubmited.bind(this);

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                   if (xmlhttp.status == 200) {
                        exec();
                   }
                   else {
                       console.error('There was an error while preforming ajax request.');
                   }
                }
            };

            xmlhttp.open("POST", data.action);
            xmlhttp.setRequestHeader('accept', 'application/json');
            xmlhttp.send(data.inputs);

        }
    }


    validateField(event, input) {
        const classes = ['success-shadow', 'danger-shadow', 'neutral-shadow'];
        const valid = this.validator.test(input, regex);

        if (valid) {
            input.classList.remove(...classes);
            input.classList.add('success-shadow');
        } else if (event.type !== 'blur') {
            input.classList.remove(...classes);
            input.classList.add('neutral-shadow');
        } else if (input.value !== "") {
            input.classList.remove(...classes);
            input.classList.add('danger-shadow');
        }

    }


    validateForm() {
        const valid = this.validator.test(this.inputs, regex);

        if (valid) {
            this.button.classList.add('valid');
            this.button.disabled = false;
        } else {
            this.button.classList.remove('valid');
            this.button.disabled = true;
        }
    }


    _formSubmited(e) {

        spinner.extend(100);
        this.form.classList.add('bounceOutRight');
        this.successText.classList.toggle('hidden');
        // console.log('Successfully sent message.');

    }


    _addListeners() {
        this.inputs.forEach(input => {
            input.addEventListener('input', this.validate.bind(this, input));
            input.addEventListener('focus', this.validate.bind(this, input));
            input.addEventListener('blur', this.validate.bind(this, input));
        });
        this.form.addEventListener('submit', this.formSubmit.bind(this));
    }

}

export default new ContactForm();