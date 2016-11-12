
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
function prikaziNavigaciju(event){
	navLinkovi.classList.toggle('prikazi-nav');
	this.classList.toggle('pomeri-nav-dugme');

}

function proveriFormu(event){
	
		let provera = this.getAttribute("name");
		let punoIme = eval(provera +"Regex");
		let j = 0;

		if(event.type !=="blur"){
			if(punoIme.test(this.value)){
				this.style.boxShadow = '0px 0px 10px 2px rgba(124, 187, 0, 0.8)';
			} else {
				this.style.boxShadow = '0px 0px 10px 2px rgba(255, 255, 255, 0.5)';
			}
		}
		else
		{
			if(!punoIme.test(this.value)){
				this.style.boxShadow = '0px 0px 10px 2px rgba(234, 67, 53, 0.5)';
			}
		}

		// Ispituje da li su svi islovi ispunjeni, ako jesu daje animaciju dugmetu
		for(var i = 0; i < contactForm.length; i++){
			let proveraSve = contactForm[i].getAttribute("name");
			let punoImeSve = eval(proveraSve +"Regex");

			if(!punoImeSve.test(contactForm[i].value)){
				j++;
			}
		}

		if(j===0){
			dugmeForma.style.animation= 'dugme-an 3000ms infinite';
		}else{
			dugmeForma.style.animation= 'none';
		}try{
	}
	catch(e){
		// Bacice gresku ako nisu data dobra imena u html-u ili js-u
		//regex treba da se zove htmlIme + Regex
	}
}



//Dogadjaji
dugme.addEventListener('click', prikaziNavigaciju);

for(var i = 0; i < contactForm.length; i++){
	//contactForm[i].addEventListener('keyup', proveriFormu);
	contactForm[i].addEventListener('input', proveriFormu);
	contactForm[i].addEventListener('focus', proveriFormu);
	contactForm[i].addEventListener('blur', proveriFormu);
	//contactForm[i].addEventListener('blur', proveriSve);


}









	//window[provera+"Regex"]


// 	function animirajPosalji(){
// 	if(true){
// 		dugme.style.animation= 'dugme-an 3000ms infinite';
// 	}

// }