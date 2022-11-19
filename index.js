import periodic_table from "./periodic_table.js";


const input = {
	name: document.querySelector("#input-name"),
	symbol: document.querySelector("#input-symbol"),
	number: document.querySelector("#input-number"),
	group: document.querySelector("#group > input"),
	period: document.querySelector("#period > input"),
}

const buttons = {
	name: document.querySelector("#button-name"),
	symbol: document.querySelector("#button-symbol"),
	number: document.querySelector("#button-number"),
	location: document.querySelector(".search-by-location > button")
}

const output = document.querySelector("#output");

output.style.display = "flex";
output.style.flexDirection = "column";
output.style.alignItems = "center";
output.style.marginTop = "50px";


function createListItem(text, parent) {
	const newItem = document.createElement("li");

	newItem.innerText = text;
	parent.appendChild(newItem);
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randRange(min, max, floor=false) {
	const rand = (Math.random() * (max - min)) + min;
	return floor ? Math.floor(rand) : rand;
}


function createBox(atom, parent, size=1) {
	input.group.value = atom.group;
	input.period.value = atom.period;

	// Element Box
	const atomElement = document.createElement("div");
	atomElement.style.display = "flex";
	atomElement.style.flexDirection = "column";
	atomElement.style.border = "2px solid black"
	atomElement.style.width = 	`${size*175}px`;
	atomElement.style.height = `${size*175}px`;
	atomElement.style.alignItems = "center";
	atomElement.style.backgroundColor = `hsl(${randRange(180, 230)}, 100%, 70%)`;

	// Atomic Number
	const an = document.createElement("p");
	an.innerText = atom.atomic_number;
	an.style.fontSize = `${size*30}px`;
	an.style.position = "relative";
	an.style.bottom = `${size*20}px`;
	an.style.color = "black";
	atomElement.appendChild(an);

	// Symbol
	const s = document.createElement("p");
	s.innerText = atom.symbol;
	s.style.fontSize = `${size*30}px`;
	s.style.position = "relative";
	s.style.bottom = `${size*50}px`;
	s.style.color = "black";
	atomElement.appendChild(s);


	// Atomic Mass
	const am = document.createElement("p");
	am.innerText = atom.atomic_mass;
	am.style.fontSize = `${size*30}px`
	am.style.position = "relative";
	am.style.bottom = `${size*85}px`;
	am.style.color = "black";
	atomElement.appendChild(am);


	parent.appendChild(atomElement);

	const nameElement = document.createElement("p");
	nameElement.style.fontSize = `${size*30}px`
	nameElement.innerText = atom.name;
	nameElement.style.color = "white";

	parent.appendChild(nameElement);
}



buttons.name.addEventListener("click", () => {
	let matches = periodic_table.filter((element) => element.name.toLowerCase() == input.name.value.toLowerCase());

	if (matches.length > 0) {
		removeAllChildren(output);
		input.name.value = '';
		createBox(matches[0], output);
	}
})

buttons.symbol.addEventListener("click", () => {
	let matches = periodic_table.filter((element) => element.symbol.toLowerCase() == input.symbol.value.toLowerCase());

	if (matches.length > 0) {
		removeAllChildren(output);
		input.symbol.value = '';
		createBox(matches[0], output);
	}
})

buttons.number.addEventListener("click", () => {
	let matches = periodic_table.filter((element) => element.atomic_number == input.number.value);

	if (matches.length > 0) {
		removeAllChildren(output);
		input.number.value = '';
		createBox(matches[0], output);
	}
})

buttons.location.addEventListener("click", () => {
	let matches = periodic_table.filter((element) => element.group == input.group.value && element.period == input.period.value);

	if (matches.length > 0) {
		removeAllChildren(output);
		input.period.value = '';
		input.group.value = '';
		createBox(matches[0], output);
	}
})

