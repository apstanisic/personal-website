// Prikazuje i skriva navigaciju
var navigacija = (function(){

    let nav = document.querySelector('.nav-linkovi');
    let dugme = document.querySelector('.nav-dugme');

    function prikaziNavigaciju(event) {
        nav.classList.toggle('prikazi-nav');
        this.classList.toggle('pomeri-nav-dugme');
    }

    dugme.addEventListener('click', prikaziNavigaciju);
})();

// Vrsi validacuju kontakt forme, i daje saopstava korisniku
var kontaktForma = (function(){
    let regex = {
        email : new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/, "i"),
        name : new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/, "u"),
        sadrzaj: new RegExp(/^.{5,}$/)
    };
    let forma = document.querySelectorAll('#contact-form input, #contact-form textarea');let forma = $('#contact-form input, #contact-form textarea');
    let dugme = document.querySelector('#dugme-submit');

    function init(event){
        proveriPolje(event); // TODO TODO
        proveriFormu(event); //TODO TODO
        /// FUNKCIJA init NE RADI!!!!!!!!!!!!!!!!!!!!!!!!!! JOS UVEK FIXME TODO FIXME
        ///Napraviti da ovo radi, nece da prosledjuje this koji mi treba, valjda prosledjuje event?????
    }

    // Proverava samo polje na kom je doslo do eventa.
    function proveriPolje(event) {
            let senka = {
                zelena : '0px 0px 10px 2px rgba(124, 187, 0, 0.8)',
                bela : '0px 0px 10px 2px rgba(255, 255, 255, 0.5)',
                crvena : '0px 0px 10px 2px rgba(234, 67, 53, 0.5)'
            }
            let valja = uporedi.regex([this], regex);
            //Zasto ne moze var senka = this.style.boxShadow; ????????????? BUG
            // pozadina textboxa pozeleni kada se iskoristi autocomple ??? BUG ??? FIXME???
            //Ako je blur dace mu crveno ako ne valja, a dok je fokusirano dace mu samo belo i zeleno, belo ako nije ispunjen uslov ali je focus
            if (event.type !== "blur") {
                if (valja) {
                    this.style.boxShadow = senka.zelena;
                } else {
                    this.style.boxShadow = senka.bela;
                }
            } else {
                if (!valja) {
                    this.style.boxShadow = senka.crvena;
                }
            }
    }

    // Proverava svako tekstualno polje u formi, dodaje animaciju dugmetu ako radi
    function proveriFormu(){
        let valja = uporedi.regex(forma, regex);
        if(valja){
            dugme.style.animation = 'dugme-an 2000ms infinite';
            dugme.style.background = 'rgba(124, 187, 0, 1)';
            dugme.style.color = '#fff';
        } else {
            dugme.style.animation = 'none';
            dugme.style.background = '#fff';
            dugme.style.color = '#333334';
        }
    }
//Ovo je najruznije i najvaznije. Proslediti prave parametre u funkciju, tako da this radi...
// TODO TODO TODO TODO TODO TODO
/// FIXME FIXME FIXME FIXME
///////////////////////////////////////////////////////////////////////////////////////
//.bind(this) ovako nekako da prosledim this????? TODO
// Kako dodati odjednom listener na vise mesta
    for (let i = 0; i < forma.length; i++) {
        forma[i].addEventListener('input', proveriPolje);
        forma[i].addEventListener('focus', proveriPolje);
        forma[i].addEventListener('blur', proveriPolje);
        forma[i].addEventListener('input', proveriFormu);
        forma[i].addEventListener('focus', proveriFormu);
        forma[i].addEventListener('blur', proveriFormu);

        //forma[i].addEventListener('focus', proveriPolje);
    }
})();
