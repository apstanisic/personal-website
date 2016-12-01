var navigacija = (function(){
    var navLinkovi = document.querySelector('.nav-linkovi');
    var dugme = document.querySelector('.nav-dugme');

    function prikaziNavigaciju(event) {
        navLinkovi.classList.toggle('prikazi-nav');
        this.classList.toggle('pomeri-nav-dugme');
    }

    dugme.addEventListener('click', prikaziNavigaciju);

})();


// var emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
// var nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
// var sadrzajRegex = /^.{5,}$/;


var kontaktForma = (function(){

    var regex = {
        email : new RegExp("/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/", "i"),
        name : new RegExp("/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/", "u"),
        sadrzaj: new RegExp("/^.{5,}$/")
    };



    // Vars
    var forma = document.querySelectorAll('#contact-form input, #contact-form textarea');
    var dugme = document.querySelector('#dugme-submit');

    //Funkcije

    function proveri(event){
        proveriPolje(event);
        proveriCeluFormu(event);

    }
    function proveriCeluFormu(event){
        // Ispituje da li su svi islovi ispunjeni, ako jesu daje animaciju dugmetu
        for (var i = 0; i < forma.length; i++) {
            let naziv = forma[i].getAttribute("name");
            let expresion = regex[naziv];

            if (!expresion.test(forma[i].value)){
                dugme.style.animation = 'none';
                dugme.style.background = '#fff';
                dugme.style.color = '#333334';
                return;
            }
        }

        dugme.style.animation = 'dugme-an 2000ms infinite';
        dugme.style.background = 'rgba(124, 187, 0, 1)';
        dugme.style.color = '#fff';

    }


    function proveriPolje(event) {
        //try {
            let naziv = this.getAttribute("name");
            //rregex = eval(naziv + "Regex"),
            let expresion = regex[naziv];
            //j = 0,
            let valja = expresion.test(this.value);
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


        //} catch (e) {
            // Bacice gresku ako nisu data dobra imena u html-u ili js-u
            //regex treba da se zove htmlIme + Regex
        //}
    }
    //Dogadjaji

    for (var i = 0; i < forma.length; i++) {
        forma[i].addEventListener('input', proveri);
        forma[i].addEventListener('focus', proveri);
        forma[i].addEventListener('blur', proveri);
    }
})();
