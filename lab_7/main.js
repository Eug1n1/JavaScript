function addElement(tag, content = '', parent = document.body) {
	let el = document.createElement(tag);
	el.innerHTML = content;
	parent.append(el);
	return el;
}

function printSelected() {
	let selectedElements = new Array();
	let ul;

	addElement('p', document.forms[0].elements[0].value);
	addElement('p', `Студент ${document.all.surname.value} ${document.all.name.value} специальность ${document.forms[0].elements.specialties.value} курс ${document.forms[0].elements.class.value} должен сдавать следующие предметы:`);

	ul = addElement('ul');
	for (let subject of document.all.subjects)
		if (subject.checked) {
			addElement('li', subject.value, ul)
			selectedElements.push(subject.value);
		}

	form = addElement('form');
	select = addElement('select', '', form);
	for (let elem of selectedElements){
		addElement('option', elem, select);
	}
}