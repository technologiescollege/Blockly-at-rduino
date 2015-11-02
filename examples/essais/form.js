/* trouve le tag "parentTagName" parent de "element" */
function getParent(element, parentTagName) {
	if ( ! element )
		return null;
	else if ( element.nodeType == 1 && element.tagName.toLowerCase() == parentTagName.toLowerCase() )
		return element;
	else
		return getParent(element.parentNode, parentTagName);
}

/* ajoute une ligne */
function addLigne(link) {
	// 1. récuperer le node "TABLE" à manipuler
	var td = link.parentNode;
	var table = getParent(td,'TABLE');
	// 2. on va manipuler le TBODY
	var tbody = table.tBodies[0];
	// 3. on clone la ligne de reference
	var newTr = tbody.rows[0].cloneNode(true);
	if ( document.all )
		newTr.style.display = "block"; // pour IE
	else
		newTr.style.display = "table-row"; // pour Gecko
	tbody.appendChild(newTr);
}

/* supprimer une ligne */
function delLigne(link) {
	// 1. récuperer le node "TABLE" à manipuler
	var td = link.parentNode;
	var table = getParent(td, 'TABLE');
	// 2. récuperer le TBODY
	var tbody = table.tBodies[0];
	// 3. Supprimer le TR
	tbody.removeChild(getParent(td, 'TR'));
}

window.onload = dtableInit;
/* initialise le script */
function dtableInit() {
	var table = document.getElementsByTagName('TABLE');
	for ( var i = 0; i < table.length; i++ ) {
		// on récupère tous les tableaux dynamiques
		if ( table[i].className == 'dTable' ) {
			var tbody = table[i].tBodies[0];
			var newTr = tbody.rows[0].cloneNode(true);
			// on masque la première ligne du tbody (la ligne de reference)
			tbody.rows[0].style.display = 'none';
			// on en ajoute une
			tbody.appendChild(newTr);
		}
	}
}
