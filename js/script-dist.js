"use strict";function prikaziNavigaciju(){navLinkovi.classList.toggle("prikazi-nav"),this.classList.toggle("pomeri-nav-dugme")}function kontaktFormaProvera(event){try{var provera=this.getAttribute("name"),punoIme=eval(provera+"Regex"),j=0,valja=punoIme.test(this.value),senka=this.style.boxShadow;"blur"!==event.type?senka=valja?"0px 0px 10px 2px rgba(124, 187, 0, 0.8)":"0px 0px 10px 2px rgba(255, 255, 255, 0.5)":valja||(senka="0px 0px 10px 2px rgba(234, 67, 53, 0.5)");for(var i=0;i<contactForm.length;i++){var proveraSve=contactForm[i].getAttribute("name"),punoImeSve=eval(proveraSve+"Regex");punoImeSve.test(contactForm[i].value)||j++}0===j?(dugmeForma.style.animation="dugme-an 2000ms infinite",dugmeForma.style.background="rgba(124, 187, 0, 1)",dugmeForma.style.color="#fff"):(dugmeForma.style.animation="none",dugmeForma.style.background="#fff",dugmeForma.style.color="#333334")}catch(e){}}var navLinkovi=document.querySelector(".nav-linkovi"),dugme=document.querySelector(".nav-dugme"),contactForm=document.querySelectorAll("#contact-form input, #contact-form textarea"),dugmeForma=document.querySelector("#dugme-submit"),emailRegex=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,nameRegex=/^[ ',-\.A-Za-z\xC0-\xCF\xD1-\xD6\xD8-\xDD\xDF-\xE5\xE7-\xF6\xF8-\xFD\xFF\u0104-\u0107\u010C\u010D\u0116-\u0119\u012E\u012F\u0141-\u0144\u0152\u0160\u0161\u016A\u016B\u0172\u0173\u0178-\u017E\u2202]+$/,sadrzajRegex=/^.{5,}$/;dugme.addEventListener("click",prikaziNavigaciju);for(var i=0;i<contactForm.length;i++)contactForm[i].addEventListener("input",kontaktFormaProvera),contactForm[i].addEventListener("focus",kontaktFormaProvera),contactForm[i].addEventListener("blur",kontaktFormaProvera);
