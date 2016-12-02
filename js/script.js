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
    let forma = document.querySelectorAll('#contact-form input, #contact-form textarea');
    let dugme = document.querySelector('#dugme-submit');

    // Proverava polje iz forme, sa regexom istog imena iz var rerex-a, vraca true, ako ispunjava uslov
    function proveriIzraz(polje){
        try{
        let naziv = polje.getAttribute("name");
        let uslov = regex[naziv];
        let valja = uslov.test(polje.value);
        } catch (e) {
            valja = false;
            // treba da dodje za koje polje TODO //Bacice gresku ako nema regex sa istim imenom kao name polja, ili ga uopste nema
        }
        return valja;
    }

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
            let valja = proveriIzraz(this);
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
        for (let i = 0; i < forma.length; i++) {
            let valja = proveriIzraz(forma[i]);
            if (!valja){
                dugme.style.animation = 'none';
                dugme.style.background = '#fff';
                dugme.style.color = '#333334';
                return false;
                //Prekida funkciju cim regex ne valja, skida animaciju i boju, ako je uslov bio ispunjen, a vise nije
            }
        }
        // boji dugme u zeleno i dodaje animaciju
        dugme.style.animation = 'dugme-an 2000ms infinite';
        dugme.style.background = 'rgba(124, 187, 0, 1)';
        dugme.style.color = '#fff';
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

        //forma[i].addEventListener('blur', init);
    }
})();
