// Vars
var navLinkovi = document.querySelector('.nav-linkovi');
var dugme = document.querySelector('.nav-dugme');
var contactForm = document.querySelectorAll('#contact-form input, #contact-form textarea');
var dugmeForma = document.querySelector('#dugme-submit');
//RegEx
var emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
var nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
var sadrzajRegex = /^.{5,}$/;

//Funkcije
function prikaziNavigaciju(event) {
    navLinkovi.classList.toggle('prikazi-nav');
    this.classList.toggle('pomeri-nav-dugme');

}

function kontaktFormaProvera(event) {
    try {
        let provera = this.getAttribute("name");
        let punoIme = eval(provera + "Regex");
        let j = 0;
        let valja = punoIme.test(this.value);
        let senka = this.style.boxShadow;

        if (event.type !== "blur") {
            if (valja) {
                senka = '0px 0px 10px 2px rgba(124, 187, 0, 0.8)';
            } else {
                senka = '0px 0px 10px 2px rgba(255, 255, 255, 0.5)';
            }
        } else {
            if (!valja) {
                senka = '0px 0px 10px 2px rgba(234, 67, 53, 0.5)';
            }
        }

        // Ispituje da li su svi islovi ispunjeni, ako jesu daje animaciju dugmetu
        for (var i = 0; i < contactForm.length; i++) {
            let proveraSve = contactForm[i].getAttribute("name");
            let punoImeSve = eval(proveraSve + "Regex");

            if (!punoImeSve.test(contactForm[i].value)) {
                j++;
            }
        }
        if (j === 0) {
            dugmeForma.style.animation = 'dugme-an 2000ms infinite';
            dugmeForma.style.background = 'rgba(124, 187, 0, 1)';
            dugmeForma.style.color = '#fff';
        } else {
            dugmeForma.style.animation = 'none';
            dugmeForma.style.background = '#fff';
            dugmeForma.style.color = '#333334';
        }
    } catch (e) {
        // Bacice gresku ako nisu data dobra imena u html-u ili js-u
        //regex treba da se zove htmlIme + Regex
    }
}
//Dogadjaji
dugme.addEventListener('click', prikaziNavigaciju);

for (var i = 0; i < contactForm.length; i++) {
    contactForm[i].addEventListener('input', kontaktFormaProvera);
    contactForm[i].addEventListener('focus', kontaktFormaProvera);
    contactForm[i].addEventListener('blur', kontaktFormaProvera);
}
