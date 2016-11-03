$(document).ready(function(){
	$('.nav-dugme').click(function(){
		$('.nav-linkovi').toggleClass('prikazi-nav');
		$(this).toggleClass('pomeri-nav-dugme');
		$('.crta').toggleClass('rotiraj-dugme');

	});
	// $('.nav-strela a').click(function(){
	// 	$('.nav-linkovi').removeClass('prikazi');

	// });



});