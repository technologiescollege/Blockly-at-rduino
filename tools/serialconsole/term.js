const remote = require('electron').remote 

window.addEventListener('load', function load(event) {
	document.getElementById('btn_envoi').disabled=true
	document.getElementById('btn_efface').onclick = function(event) {
		document.getElementById('fenetre_term').textContent = ''
	}
	document.getElementById('btn_envoi').onclick = function(event) {
		var entree = document.getElementById('schbox').value
		if (s_p.isOpen()) {
			document.getElementById('fenetre_term').innerHTML += entree+"<br />"
			s_p.write(entree)
		}
	}
	document.getElementById('btn_connect').onclick = function(event) {
		var SerialPort = require("serialport")
		var moniteur = document.getElementById('fenetre_term')
		var vit = document.getElementById('vitesse').value
		var baud = parseInt(vit)
		var _com = localStorage.getItem("com")
		s_p = new SerialPort(_com,{baudrate:baud,parser:SerialPort.parsers.readline("\n")})
		document.getElementById('btn_connect').disabled=true
		document.getElementById('btn_envoi').disabled=false
		s_p.on('open', function(){
			moniteur.innerHTML += ' démarrage de la communication série<br />'
		})
		s_p.on('data', function(data){
			moniteur.innerHTML += data+"<br />"
			moniteur.scrollTop = moniteur.scrollHeight;
			moniteur.animate({scrollTop: moniteur.scrollHeight})
		})
	}
})