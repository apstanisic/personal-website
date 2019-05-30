this.addEventListener('message', function(e){

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
		   if (xmlhttp.status == 200) {
				postMessage(true);
		   }
		   else {
			   console.error('There was an error while preforming ajax request.');
		   }
		}
	};
	// Losa dokumentacija za formspree
	// Ne prima podatke, prima FormData sigurno,
	// Ali ne mogu da posaljem FormData preko workera

	// xmlhttp.open("POST", e.data.action);
	// xmlhttp.setRequestHeader('accept', 'application/json');
	xmlhttp.open("POST", 'ajax.js'); // For localhost
	xmlhttp.send(e.data.inputs);


});
