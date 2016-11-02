$(document).ready(function(){
	$('.nav-dugme').click(function(){
		$('.nav-linkovi').addClass('prikazi');

	});
	$('.nav-strela a').click(function(){
		$('.nav-linkovi').removeClass('prikazi');

	});



});