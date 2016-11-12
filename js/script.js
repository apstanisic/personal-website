
// Vars
var navLinkovi = document.querySelector('.nav-linkovi');
var dugme = document.querySelector('.nav-dugme');


//Funkcije
function prikaziNavigaciju(event){
	navLinkovi.classList.toggle('prikazi-nav');
	this.classList.toggle('pomeri-nav-dugme');

}

//Dogadjaji
dugme.addEventListener('click', prikaziNavigaciju);
































// $(document).ready(function(){
// 	$('.nav-dugme').click(function(){
// 		$('.nav-linkovi').toggleClass('prikazi-nav');
// 		$(this).toggleClass('pomeri-nav-dugme');
// 		//$('.crta-sredina').toggleClass('rotiraj-dugme');

// 	});


// });
